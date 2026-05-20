import Phaser from 'phaser';

export class ForestMushroom extends Phaser.Physics.Arcade.Sprite {
  private direction = -1;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private minX: number,
    private maxX: number,
    private speed: number
  ) {
    super(scene, x, y, 'mushroom-walk', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setSize(21, 18);
    this.setOffset(5, 9);
    this.play('mushroom-walk');
  }

  update(): void {
    if (this.x <= this.minX) {
      this.direction = 1;
    } else if (this.x >= this.maxX) {
      this.direction = -1;
    }

    this.setFlipX(this.direction > 0);
    this.setVelocityX(this.direction * this.speed);
  }
}
