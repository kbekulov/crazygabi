import Phaser from 'phaser';

export class MushroomEnemy extends Phaser.Physics.Arcade.Sprite {
  private direction = -1;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private readonly minX: number,
    private readonly maxX: number,
    private readonly speed: number
  ) {
    super(scene, x, y, 'mushroom', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(1.05);
    this.setSize(21, 18);
    this.setOffset(5, 9);
    this.setMaxVelocity(90, 700);
    this.play('mushroom-walk');
  }

  patrol(): void {
    if (this.x <= this.minX) {
      this.direction = 1;
    } else if (this.x >= this.maxX) {
      this.direction = -1;
    }

    this.setFlipX(this.direction > 0);
    this.setVelocityX(this.direction * this.speed);
  }
}
