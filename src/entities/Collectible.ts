import Phaser from 'phaser';

export class Collectible extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    public readonly points: number,
    type: 'star' | 'flower'
  ) {
    super(scene, x, y, type === 'star' ? 'star' : 'flower');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
    this.setCircle(7);

    scene.tweens.add({
      targets: this,
      y: y - 4,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}
