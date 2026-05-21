import Phaser from 'phaser';

export class Collectible extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, frame: string, points: number) {
    super(scene, x, y, 'forest', frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setData('points', points);
    this.setScale(frame === 'coin' ? 1.35 : 1.2);
    this.setDepth(8);
    (this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);

    scene.tweens.add({
      targets: this,
      y: y - 7,
      duration: 850,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}
