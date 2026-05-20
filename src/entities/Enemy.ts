import Phaser from 'phaser';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  private direction = -1;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private patrolMin: number,
    private patrolMax: number,
    private speed: number
  ) {
    super(scene, x, y, 'mushling');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setSize(18, 16);
    this.setOffset(3, 8);
    this.setVelocityX(this.speed * this.direction);
  }

  update(): void {
    if (this.x <= this.patrolMin) {
      this.direction = 1;
    } else if (this.x >= this.patrolMax) {
      this.direction = -1;
    }

    this.setFlipX(this.direction > 0);
    this.setVelocityX(this.speed * this.direction);
  }
}

// Future enemy types can share a patrol interface or move into separate AI strategy classes.
