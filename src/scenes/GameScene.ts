import Phaser from 'phaser';
import { GAME_HEIGHT } from '../config/gameConfig.ts';
import { Collectible } from '../entities/Collectible.ts';
import { Enemy } from '../entities/Enemy.ts';
import { Player } from '../entities/Player.ts';
import { levels, type PlatformerLevel } from '../levels/levelData.ts';
import { gameState, type GameSnapshot } from '../systems/GameState.ts';
import { TouchControls } from '../systems/TouchControls.ts';

export class GameScene extends Phaser.Scene {
  private level!: PlatformerLevel;
  private player!: Player;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  private collectibles!: Phaser.Physics.Arcade.Group;
  private enemies!: Phaser.GameObjects.Group;
  private hazards!: Phaser.Physics.Arcade.StaticGroup;
  private touchControls?: TouchControls;
  private snapshot!: GameSnapshot;

  constructor() {
    super('GameScene');
  }

  create(data: { levelIndex?: number }): void {
    const levelIndex = data.levelIndex ?? 0;
    this.level = levels[levelIndex] ?? levels[0];
    this.snapshot = gameState.reset(levelIndex);

    this.scene.launch('UIScene');
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.touchControls?.destroy();
      this.scene.stop('UIScene');
    });

    this.physics.world.setBounds(0, 0, this.level.width, GAME_HEIGHT + 120);
    this.cameras.main.setBounds(0, 0, this.level.width, GAME_HEIGHT);

    this.createBackground();
    this.createLevelGeometry();
    this.createActors();
    this.createHazards();
    this.createGoal();

    this.touchControls = new TouchControls(this);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12, -60, 38);
    this.emitState();

    this.input.keyboard?.on('keydown-R', () => this.restartFlow());
  }

  update(): void {
    if (this.snapshot.phase !== 'playing') {
      return;
    }

    this.player.updateFromInput(this.touchControls?.input ?? { left: false, right: false, jump: false, action: false });
    this.enemies.getChildren().forEach((enemy) => (enemy as Enemy).update());

    if (this.player.y > GAME_HEIGHT + 80) {
      this.hurtPlayer();
    }
  }

  private createBackground(): void {
    this.cameras.main.setBackgroundColor('#17143a');

    for (let i = 0; i < 24; i += 1) {
      const x = i * 90 + 20;
      const y = 24 + ((i * 31) % 76);
      this.add.circle(x, y, i % 3 === 0 ? 2 : 1, 0xfff1a8, 0.75).setScrollFactor(0.25);
    }

    this.add.circle(92, 54, 26, 0xf6d36b, 0.9).setScrollFactor(0.12);
    this.add.rectangle(this.level.width / 2, 242, this.level.width, 28, 0x28214d).setScrollFactor(1);
  }

  private createLevelGeometry(): void {
    this.platforms = this.physics.add.staticGroup();

    this.level.layout.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (cell !== '#') {
          return;
        }

        const x = columnIndex * this.level.tileSize + this.level.tileSize / 2;
        const y = rowIndex * this.level.tileSize + this.level.tileSize / 2;
        this.platforms.create(x, y, 'ground-tile');
      });
    });
  }

  private createActors(): void {
    this.collectibles = this.physics.add.group();
    this.enemies = this.add.group();

    this.player = new Player(this, this.level.spawn.x, this.level.spawn.y);
    this.physics.add.collider(this.player, this.platforms);

    for (const item of this.level.collectibles) {
      const collectible = new Collectible(this, item.x, item.y, item.points, item.type);
      this.collectibles.add(collectible);
    }

    for (const config of this.level.enemies) {
      const enemy = new Enemy(this, config.x, config.y, config.patrolMin, config.patrolMax, config.speed);
      this.enemies.add(enemy);
      this.physics.add.collider(enemy, this.platforms);
    }

    this.physics.add.overlap(this.player, this.collectibles, (_player, collectible) => {
      this.collectItem(collectible as Collectible);
    });

    this.physics.add.overlap(this.player, this.enemies, () => this.hurtPlayer());
  }

  private createHazards(): void {
    this.hazards = this.physics.add.staticGroup();

    for (const hazard of this.level.hazards) {
      const count = Math.ceil(hazard.width / 16);
      for (let i = 0; i < count; i += 1) {
        this.hazards.create(hazard.x + i * 16 + 8, hazard.y + 8, 'spike');
      }
    }

    this.physics.add.overlap(this.player, this.hazards, () => this.hurtPlayer());
  }

  private createGoal(): void {
    const goal = this.physics.add.staticSprite(this.level.goal.x, this.level.goal.y, 'goal-door');
    goal.setSize(24, 36).setOffset(6, 10);

    this.add.text(this.level.goal.x, this.level.goal.y - 38, 'EXIT', {
      color: '#fff1ad',
      fontFamily: 'monospace',
      fontSize: '10px',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.physics.add.overlap(this.player, goal, () => {
      if (this.snapshot.phase !== 'playing') {
        return;
      }
      this.snapshot = gameState.completeLevel();
      this.player.setVelocity(0, 0);
      this.emitState();
    });
  }

  private collectItem(collectible: Collectible): void {
    if (!collectible.active) {
      return;
    }

    collectible.disableBody(true, true);
    this.snapshot = gameState.addScore(collectible.points);
    this.emitState();
  }

  private hurtPlayer(): void {
    if (this.snapshot.phase !== 'playing') {
      return;
    }

    this.snapshot = gameState.loseLife();
    this.emitState();

    if (this.snapshot.phase === 'game-over') {
      this.player.setVelocity(0, 0);
      return;
    }

    this.player.setPosition(this.level.spawn.x, this.level.spawn.y);
    this.player.setVelocity(0, 0);
  }

  private restartFlow(): void {
    if (this.snapshot.phase === 'playing') {
      return;
    }

    this.scene.restart({ levelIndex: this.snapshot.levelIndex });
  }

  private emitState(): void {
    this.scene.get('UIScene').events.emit('state-change', this.snapshot);
  }
}

// Moving platforms, power-ups, bosses, secrets, and Tiled map loading can be added as new systems/entities.
