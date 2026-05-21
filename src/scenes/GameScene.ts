import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config/gameConfig.ts';
import { Collectible } from '../entities/Collectible.ts';
import { FallingAcorn } from '../entities/FallingAcorn.ts';
import { GabiPlayer } from '../entities/GabiPlayer.ts';
import { MushroomEnemy } from '../entities/MushroomEnemy.ts';
import { levels, type PlatformerLevel, type RectSpec } from '../levels/levelData.ts';
import { TouchControls } from '../systems/TouchControls.ts';

type Phase = 'playing' | 'complete' | 'lost';

export class GameScene extends Phaser.Scene {
  private level!: PlatformerLevel;
  private player!: GabiPlayer;
  private platforms!: Phaser.GameObjects.Group;
  private mushrooms!: Phaser.GameObjects.Group;
  private collectibles!: Phaser.Physics.Arcade.Group;
  private acorns!: Phaser.Physics.Arcade.Group;
  private touchControls?: TouchControls;
  private score = 0;
  private lives = 3;
  private phase: Phase = 'playing';
  private nextAcornAt = 0;
  private invulnerableUntil = 0;
  private hudScore!: Phaser.GameObjects.Text;
  private hudLives!: Phaser.GameObjects.Text;
  private hudHint!: Phaser.GameObjects.Text;
  private message!: Phaser.GameObjects.Text;

  constructor() {
    super('GameScene');
  }

  create(data: { levelIndex?: number }): void {
    this.level = levels[data.levelIndex ?? 0] ?? levels[0];
    this.score = 0;
    this.lives = 3;
    this.phase = 'playing';
    this.nextAcornAt = 0;
    this.invulnerableUntil = 0;

    this.physics.world.setBounds(0, 0, this.level.width, GAME_HEIGHT + 160);
    this.cameras.main.setBounds(0, 0, this.level.width, GAME_HEIGHT);
    this.cameras.main.roundPixels = true;

    this.createBackdrop();
    this.createPlatforms();
    this.createHouse();
    this.createDecorations();
    this.player = new GabiPlayer(this, this.level.spawn.x, this.level.spawn.y);
    this.physics.add.collider(this.player, this.platforms);
    this.createGoal();
    this.createCollectibles();
    this.createMushrooms();
    this.createAcornStorm();
    this.createHud();
    this.touchControls = new TouchControls(this);

    this.cameras.main.startFollow(this.player, true, 1, 1, -80, 42);
    this.input.keyboard?.on('keydown-R', () => this.restartFromState());
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.touchControls?.destroy());
    this.updateHud();
  }

  update(time: number): void {
    if (this.phase !== 'playing') {
      return;
    }

    this.player.updateFromInput(this.touchControls?.input ?? { left: false, right: false, jump: false, action: false });
    this.mushrooms.getChildren().forEach((enemy) => (enemy as MushroomEnemy).patrol());
    this.updateAcornStorm(time);
    this.cleanAcorns();
    this.updateHud();

    if (this.player.y > GAME_HEIGHT + 96) {
      this.hurt(true);
    }
  }

  private createBackdrop(): void {
    this.add.rectangle(0, 0, this.level.width * 2, GAME_HEIGHT, 0x8ed3ff).setOrigin(0).setDepth(-30);
    this.add.rectangle(0, 116, this.level.width * 2, 122, 0xbce9ff, 0.42).setOrigin(0).setDepth(-29);
    this.add.circle(126, 66, 42, 0xffd772, 0.95).setScrollFactor(0.12).setDepth(-28);
    this.add.circle(126, 66, 58, 0xffefaa, 0.18).setScrollFactor(0.12).setDepth(-29);

    this.createCloud(330, 76, 0.18);
    this.createCloud(920, 58, 0.2);
    this.createCloud(1550, 88, 0.18);
    this.createCloud(2360, 64, 0.2);

    for (let i = 0; i < 16; i += 1) {
      const frame = i % 2 === 0 ? 'tree-left' : 'tree-large';
      this.add
        .image(430 + i * 185, this.level.groundY, 'forest', frame)
        .setOrigin(0.5, 1)
        .setScale(0.95)
        .setAlpha(0.46)
        .setScrollFactor(0.45)
        .setDepth(-10);
    }

    this.add.rectangle(this.level.width / 2, 344, this.level.width, 64, 0x73ad57).setDepth(-8);
  }

  private createCloud(x: number, y: number, scrollFactor: number): void {
    const cloud = this.add.container(x, y).setScrollFactor(scrollFactor).setDepth(-20);
    cloud.add([
      this.add.circle(-30, 10, 18, 0xffffff, 0.76),
      this.add.circle(-12, 0, 24, 0xffffff, 0.82),
      this.add.circle(16, 8, 20, 0xffffff, 0.78),
      this.add.ellipse(6, 18, 86, 24, 0xffffff, 0.72)
    ]);
  }

  private createPlatforms(): void {
    this.platforms = this.add.group();
    this.level.platforms.forEach((platform) => {
      this.addPlatformCollider(platform);
      this.paintPlatform(platform);
    });
  }

  private addPlatformCollider(platform: RectSpec): void {
    const collider = this.add.rectangle(
      platform.x + platform.width / 2,
      platform.y + platform.height / 2,
      platform.width,
      platform.height,
      0x000000,
      0
    );
    collider.setVisible(false);
    this.physics.add.existing(collider, true);
    this.platforms.add(collider);
  }

  private paintPlatform(platform: RectSpec): void {
    for (let x = platform.x; x < platform.x + platform.width; x += 32) {
      this.add.image(x + 16, platform.y + 16, 'forest', 'ground-top').setDepth(4);
      for (let y = platform.y + 32; y < platform.y + platform.height; y += 32) {
        this.add.image(x + 16, y + 16, 'forest', 'ground-mid').setDepth(3);
      }
    }
  }

  private createHouse(): void {
    const rows = [
      ['tile-0-6', 'tile-0-6', 'tile-0-7', 'tile-0-7', 'tile-0-7'],
      ['tile-0-0', 'tile-0-4', 'tile-0-5', 'tile-0-4', 'tile-0-1'],
      ['tile-1-0', 'tile-1-1', 'tile-1-3', 'tile-1-4', 'tile-1-1'],
      ['tile-2-0', 'tile-2-1', 'tile-2-2', 'tile-2-3', 'tile-2-1']
    ];
    const startX = 42;
    const startY = this.level.groundY - rows.length * 32;

    rows.forEach((row, rowIndex) => {
      row.forEach((frame, colIndex) => {
        this.add.image(startX + colIndex * 32, startY + rowIndex * 32, 'house-tiles', frame).setOrigin(0).setDepth(2);
      });
    });

    this.add.image(78, this.level.groundY, 'forest', 'log-round').setOrigin(0.5, 1).setScale(0.65).setDepth(7);
    this.add.text(startX, startY - 14, "Gabi's house", this.smallLabelStyle('#ffe8a3', '#2b180e')).setDepth(9);
  }

  private createDecorations(): void {
    this.level.decorations.forEach((decoration) => {
      this.add
        .image(decoration.x, decoration.y, 'forest', decoration.frame)
        .setOrigin(0.5, decoration.grounded ? 1 : 0.5)
        .setScale(decoration.scale ?? 1)
        .setFlipX(decoration.flipX ?? false)
        .setDepth(decoration.depth ?? 0);
    });

    this.add.text(905, 100, 'acorn weather ahead', this.smallLabelStyle('#6b3c18', '#fff2b9')).setDepth(10);
  }

  private createGoal(): void {
    const cave = this.add.image(this.level.goal.x, this.level.goal.y, 'forest', 'cave').setOrigin(0.5, 1).setDepth(1);
    const goalBody = this.add.rectangle(this.level.goal.x, this.level.goal.y - 40, 62, 78, 0x000000, 0);
    goalBody.setVisible(false);
    this.physics.add.existing(goalBody, true);

    this.add.text(this.level.goal.x - 34, this.level.goal.y - 112, 'FOREST GATE', this.smallLabelStyle('#ffe8a3', '#215126'));

    this.physics.add.overlap(this.player, goalBody, () => {
      if (this.phase !== 'playing') {
        return;
      }

      cave.setTint(0xffe184);
      this.completeLevel();
    });
  }

  private createCollectibles(): void {
    this.collectibles = this.physics.add.group();
    this.level.collectibles.forEach((item) => {
      const collectible = new Collectible(this, item.x, item.y, item.frame, item.points);
      this.collectibles.add(collectible);
    });

    this.physics.add.overlap(this.player, this.collectibles, (_player, collectible) => {
      this.collect(collectible as Collectible);
    });
  }

  private createMushrooms(): void {
    this.mushrooms = this.add.group();
    this.level.enemies.forEach((enemy) => {
      const mushroom = new MushroomEnemy(this, enemy.x, enemy.y, enemy.minX, enemy.maxX, enemy.speed);
      this.physics.add.collider(mushroom, this.platforms);
      this.mushrooms.add(mushroom);
    });

    this.physics.add.overlap(this.player, this.mushrooms, () => this.hurt());
  }

  private createAcornStorm(): void {
    this.acorns = this.physics.add.group();
    this.physics.add.overlap(this.player, this.acorns, () => this.hurt());
  }

  private createHud(): void {
    this.hudScore = this.add.text(16, 12, '', this.hudTextStyle()).setScrollFactor(0).setDepth(4000);
    this.hudLives = this.add.text(514, 12, '', this.hudTextStyle()).setScrollFactor(0).setDepth(4000);
    this.hudHint = this.add
      .text(320, 42, '', {
        color: '#fff4b6',
        fontFamily: 'monospace',
        fontSize: '12px',
        stroke: '#273519',
        strokeThickness: 3
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(4000);
    this.message = this.add
      .text(320, 140, '', {
        align: 'center',
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: '22px',
        fontStyle: 'bold',
        stroke: '#2d1908',
        strokeThickness: 6
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(4100);
  }

  private updateHud(): void {
    this.hudScore.setText(`Score ${this.score.toString().padStart(4, '0')}`);
    this.hudLives.setText(`Lives ${this.lives}`);
    this.hudHint.setText(
      this.player?.x > this.level.acornZoneX ? 'Acorn storm: keep moving' : 'Leave the house and enter the forest'
    );
  }

  private updateAcornStorm(time: number): void {
    if (this.player.x < this.level.acornZoneX || time < this.nextAcornAt) {
      return;
    }

    const camera = this.cameras.main;
    const x = Phaser.Math.Clamp(
      Phaser.Math.Between(Math.floor(camera.scrollX + 90), Math.floor(camera.scrollX + GAME_WIDTH - 70)),
      this.level.acornZoneX,
      this.level.width - 120
    );
    const acorn = new FallingAcorn(this, x, camera.scrollY - 26, Phaser.Math.Between(215, 340));
    this.acorns.add(acorn);
    this.nextAcornAt = time + Phaser.Math.Between(500, 900);
  }

  private cleanAcorns(): void {
    this.acorns.getChildren().forEach((child) => {
      const acorn = child as FallingAcorn;
      if (acorn.y > GAME_HEIGHT + 130 || acorn.x < this.cameras.main.scrollX - 90) {
        acorn.destroy();
      }
    });
  }

  private collect(collectible: Collectible): void {
    if (!collectible.active) {
      return;
    }

    this.score += Number(collectible.getData('points') ?? 0);
    collectible.disableBody(true, true);
    this.updateHud();
  }

  private hurt(fell = false): void {
    if (this.phase !== 'playing' || this.time.now < this.invulnerableUntil) {
      return;
    }

    this.lives -= 1;
    this.invulnerableUntil = this.time.now + 850;
    this.updateHud();

    if (this.lives <= 0) {
      this.phase = 'lost';
      this.player.setVelocity(0, 0);
      this.player.play('gabi-idle', true);
      this.message.setText('Gabi needs another try\nPress R to restart');
      return;
    }

    const respawn = fell || this.player.x < this.level.acornZoneX ? this.level.spawn : this.level.checkpoint;
    this.player.setPosition(respawn.x, respawn.y);
    this.player.setVelocity(0, 0);
    this.player.setTint(0xffe184);
    this.time.delayedCall(260, () => this.player.clearTint());
    this.cameras.main.shake(110, 0.004);
  }

  private completeLevel(): void {
    this.phase = 'complete';
    this.player.setVelocity(0, 0);
    this.message.setText('Acorn Wood crossed\nPress R to replay');
  }

  private restartFromState(): void {
    if (this.phase === 'playing') {
      return;
    }

    this.scene.restart({ levelIndex: 0 });
  }

  private hudTextStyle(): Phaser.Types.GameObjects.Text.TextStyle {
    return {
      color: '#fff2a6',
      fontFamily: 'monospace',
      fontSize: '18px',
      fontStyle: 'bold',
      stroke: '#26170b',
      strokeThickness: 4
    };
  }

  private smallLabelStyle(color: string, stroke: string): Phaser.Types.GameObjects.Text.TextStyle {
    return {
      color,
      fontFamily: 'monospace',
      fontSize: '12px',
      stroke,
      strokeThickness: 3
    };
  }
}
