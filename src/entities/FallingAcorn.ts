import Phaser from 'phaser';

export class FallingAcorn extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, velocityY: number) {
    super(scene, x, y, 'acorn');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.115);
    this.setCircle(72);
    this.setOffset(55, 50);
    this.setAngle(Phaser.Math.Between(-12, 12));
    this.setVelocity(Phaser.Math.Between(-22, 22), velocityY);
  }
}
