import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config/gameConfig.ts';
import { FallingAcorn } from '../entities/FallingAcorn.ts';
import { ForestMushroom } from '../entities/ForestMushroom.ts';
import { Player } from '../entities/Player.ts';
import { levels, type PlatformerLevel, type RectSpec } from '../levels/levelData.ts';
import { TouchControls } from '../systems/TouchControls.ts';

type Phase = 'playing' | 'complete' | 'lost';

export class GameScene extends Phaser.Scene {
  private level!: PlatformerLevel;
  private player!: Player;
  private platforms!: Phaser.GameObjects.Group;
  private mushrooms!: Phaser.GameObjects.Group;
  private acorns!: Phaser.Physics.Arcade.Group;
  private collectibles!: Phaser.Physics.Arcade.Group;
  private touchControls?: TouchControls;
  private score = 0;
  private lives = 3;
  private phase: Phase = 'playing';
  private nextAcornAt = 0;
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

    this.physics.world.setBounds(0, 0, this.level.width, GAME_HEIGHT + 160);
    this.cameras.main.setBounds(0, 0, this.level.width, GAME_HEIGHT);

    this.createBackdrop();
    this.createPlatforms();
    this.createHouse();
    this.createDecorations();
    this.player = new Player(this, this.level.spawn.x, this.level.spawn.y);
    this.physics.add.collider(this.player, this.platforms);
    this.createGoal();
    this.createCollectibles();
    this.createMushrooms();
    this.physics.add.overlap(this.player, this.collectibles, (_player, collectible) => {
      this.collect(collectible as Phaser.Physics.Arcade.Sprite);
    });
    this.physics.add.overlap(this.player, this.mushrooms, () => this.hurt());

    this.acorns = this.physics.add.group();
    this.physics.add.overlap(this.player, this.acorns, () => this.hurt());

    this.cameras.main.roundPixels = true;
    this.cameras.main.startFollow(this.player, true, 1, 1, -80, 42);
    this.touchControls = new TouchControls(this);
    this.createHud();
    this.updateHud();

    this.input.keyboard?.on('keydown-R', () => this.restartFromState());
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.touchControls?.destroy());
  }

  update(time: number): void {
    if (this.phase !== 'playing') {
      return;
    }

    this.player.updateFromInput(this.touchControls?.input ?? { left: false, right: false, jump: false, action: false });
    this.mushrooms.getChildren().forEach((enemy) => (enemy as ForestMushroom).update());
    this.updateAcornStorm(time);
    this.cleanAcorns();

    if (this.player.y > GAME_HEIGHT + 90) {
      this.hurt(true);
    }
  }

  private createBackdrop(): void {
    this.add.rectangle(0, 0, this.level.width * 2, GAME_HEIGHT, 0x162033).setOrigin(0);
    this.add.circle(132, 88, 54, 0xf2cf7a, 0.75).setScrollFactor(0.15);

    for (let i = 0; i < 36; i += 1) {
      const x = 80 + i * 94;
      const y = 36 + ((i * 41) % 78);
      this.add.circle(x, y, i % 3 === 0 ? 2 : 1, 0xffe7a1, 0.6).setScrollFactor(0.25);
    }

    for (let i = 0; i < 15; i += 1) {
      const x = 420 + i * 180;
      const frame = i % 2 === 0 ? 'tree-left' : 'tree-large';
      this.add.image(x, 250, 'forest', frame).setScale(0.95).setAlpha(0.55).setScrollFactor(0.45).setDepth(-8);
    }

    this.add.rectangle(this.level.width / 2, 344, this.level.width, 64, 0x162514).setDepth(-4);
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
    const topY = platform.y;
    for (let x = platform.x; x < platform.x + platform.width; x += 32) {
      this.add.image(x + 16, topY + 16, 'forest', 'ground-top').setDepth(3);
      for (let y = topY + 32; y < platform.y + platform.height; y += 32) {
        this.add.image(x + 16, y + 16, 'forest', 'ground-mid').setDepth(2);
      }
    }
  }

  private createHouse(): void {
    const startX = 42;
    const startY = 118;
    const rows = [
      ['tile-0-6', 'tile-0-6', 'tile-0-7', 'tile-0-7', 'tile-0-7'],
      ['tile-0-0', 'tile-0-4', 'tile-0-5', 'tile-0-4', 'tile-0-1'],
      ['tile-1-0', 'tile-1-1', 'tile-1-3', 'tile-1-4', 'tile-1-1'],
      ['tile-2-0', 'tile-2-1', 'tile-2-2', 'tile-2-3', 'tile-2-1']
    ];

    rows.forEach((row, rowIndex) => {
      row.forEach((frame, colIndex) => {
        this.add.image(startX + colIndex * 32, startY + rowIndex * 32, 'house-tiles', frame).setOrigin(0).setDepth(1);
      });
    });

    this.add.image(58, 250, 'forest', 'log-round').setScale(0.65).setDepth(4);
    this.add.text(42, 104, "Gabi's house", {
      color: '#ffe8a3',
      fontFamily: 'monospace',
      fontSize: '12px',
      stroke: '#2b180e',
      strokeThickness: 3
    });
  }

  private createDecorations(): void {
    this.level.decorations.forEach((decoration) => {
      this.add
        .image(decoration.x, decoration.y, 'forest', decoration.frame)
        .setScale(decoration.scale ?? 1)
        .setFlipX(decoration.flipX ?? false)
        .setDepth(decoration.depth ?? 0);
    });

    this.add.text(910, 98, 'acorns fall beyond this line', {
      color: '#e4ca8f',
      fontFamily: 'monospace',
      fontSize: '12px',
      stroke: '#15210f',
      strokeThickness: 3
    });
  }

  private createGoal(): void {
    const cave = this.add.image(this.level.goal.x, this.level.goal.y, 'forest', 'cave').setScale(1.1).setDepth(0);
    const goalBody = this.add.rectangle(this.level.goal.x, this.level.goal.y + 8, 64, 78, 0x000000, 0);
    goalBody.setVisible(false);
    this.physics.add.existing(goalBody, true);

    this.add.text(this.level.goal.x - 34, this.level.goal.y - 72, 'OLD PATH', {
      color: '#ffe8a3',
      fontFamily: 'monospace',
      fontSize: '12px',
      stroke: '#1b2816',
      strokeThickness: 3
    });

    this.physics.add.overlap(this.player, goalBody, () => {
      if (this.phase !== 'playing') {
        return;
      }
      cave.setTint(0xfce39a);
      this.completeLevel();
    });
  }

  private createCollectibles(): void {
    this.collectibles = this.physics.add.group();
    this.level.collectibles.forEach((item) => {
      const sprite = this.physics.add.sprite(item.x, item.y, 'forest', item.frame);
      (sprite.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
      sprite.setData('points', item.points);
      sprite.setScale(item.frame === 'coin' ? 1.4 : 1.25);
      this.collectibles.add(sprite);
      this.tweens.add({
        targets: sprite,
        y: item.y - 7,
        duration: 900,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    });
  }

  private createMushrooms(): void {
    this.mushrooms = this.add.group();
    this.level.enemies.forEach((enemy) => {
      const mushroom = new ForestMushroom(this, enemy.x, enemy.y, enemy.minX, enemy.maxX, enemy.speed);
      this.physics.add.collider(mushroom, this.platforms);
      this.mushrooms.add(mushroom);
    });
  }

  private createHud(): void {
    this.hudScore = this.add
      .text(16, 12, '', {
        color: '#ffe8a3',
        fontFamily: 'monospace',
        fontSize: '18px',
        fontStyle: 'bold',
        stroke: '#24160d',
        strokeThickness: 4
      })
      .setScrollFactor(0)
      .setDepth(2000);

    this.hudLives = this.add
      .text(514, 12, '', {
        color: '#ffe8a3',
        fontFamily: 'monospace',
        fontSize: '18px',
        fontStyle: 'bold',
        stroke: '#24160d',
        strokeThickness: 4
      })
      .setScrollFactor(0)
      .setDepth(2000);

    this.hudHint = this.add
      .text(320, 42, '', {
        color: '#e6cfa0',
        fontFamily: 'monospace',
        fontSize: '12px',
        stroke: '#122014',
        strokeThickness: 3
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(2000);

    this.message = this.add
      .text(320, 142, '', {
        align: 'center',
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: '22px',
        fontStyle: 'bold',
        stroke: '#1d140c',
        strokeThickness: 6
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(2001);
  }

  private updateHud(): void {
    this.hudScore.setText(`Score ${this.score.toString().padStart(4, '0')}`);
    this.hudLives.setText(`Lives ${this.lives}`);
    this.hudHint.setText(this.player?.x > this.level.acornZoneX ? 'Acorn storm: keep moving' : 'Leave the house and enter the forest');
  }

  private updateAcornStorm(time: number): void {
    this.updateHud();

    if (this.player.x < this.level.acornZoneX || time < this.nextAcornAt) {
      return;
    }

    const camera = this.cameras.main;
    const x = Phaser.Math.Clamp(
      Phaser.Math.Between(Math.floor(camera.scrollX + 90), Math.floor(camera.scrollX + GAME_WIDTH - 70)),
      this.level.acornZoneX,
      this.level.width - 140
    );
    const acorn = new FallingAcorn(this, x, camera.scrollY - 30, Phaser.Math.Between(210, 330));
    this.acorns.add(acorn);
    this.nextAcornAt = time + Phaser.Math.Between(520, 950);
  }

  private cleanAcorns(): void {
    this.acorns.getChildren().forEach((child) => {
      const acorn = child as FallingAcorn;
      if (acorn.y > GAME_HEIGHT + 130 || acorn.x < this.cameras.main.scrollX - 80) {
        acorn.destroy();
      }
    });
  }

  private collect(sprite: Phaser.Physics.Arcade.Sprite): void {
    if (!sprite.active) {
      return;
    }

    const points = Number(sprite.getData('points') ?? 0);
    this.score += points;
    sprite.disableBody(true, true);
    this.updateHud();
  }

  private hurt(fell = false): void {
    if (this.phase !== 'playing') {
      return;
    }

    this.lives -= 1;
    this.updateHud();

    if (this.lives <= 0) {
      this.phase = 'lost';
      this.player.setVelocity(0, 0);
      this.message.setText('The forest wins tonight\nPress R to restart');
      return;
    }

    const respawn = fell || this.player.x < this.level.acornZoneX ? this.level.spawn : this.level.checkpoint;
    this.player.setPosition(respawn.x, respawn.y);
    this.player.setVelocity(0, 0);
    this.cameras.main.shake(120, 0.006);
  }

  private completeLevel(): void {
    this.phase = 'complete';
    this.player.setVelocity(0, 0);
    this.message.setText('Forest edge reached\nPress R to replay');
  }

  private restartFromState(): void {
    if (this.phase === 'playing') {
      return;
    }

    this.scene.restart({ levelIndex: 0 });
  }
}
