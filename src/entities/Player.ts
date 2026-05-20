import Phaser from 'phaser';
import type { TouchControlState } from '../systems/TouchControls.ts';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly speed = 185;
  private readonly jumpVelocity = -455;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys: Record<'left' | 'right' | 'jump' | 'action', Phaser.Input.Keyboard.Key>;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'gabi', 'idle');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.cursors = scene.input.keyboard!.createCursorKeys();
    this.keys = scene.input.keyboard!.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.W,
      action: Phaser.Input.Keyboard.KeyCodes.K
    }) as Record<'left' | 'right' | 'jump' | 'action', Phaser.Input.Keyboard.Key>;

    this.setScale(0.82);
    this.setSize(18, 44);
    this.setOffset(11, 18);
    this.setMaxVelocity(210, 680);
    this.setDragX(900);
    this.play('gabi-idle');
  }

  updateFromInput(touch: TouchControlState): void {
    const moveLeft = this.cursors.left.isDown || this.keys.left.isDown || touch.left;
    const moveRight = this.cursors.right.isDown || this.keys.right.isDown || touch.right;
    const jumpPressed =
      this.cursors.up.isDown ||
      this.cursors.space.isDown ||
      this.keys.jump.isDown ||
      touch.jump;

    if (moveLeft) {
      this.setVelocityX(-this.speed);
      this.setFlipX(true);
    } else if (moveRight) {
      this.setVelocityX(this.speed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    if (jumpPressed && this.body?.blocked.down) {
      this.setVelocityY(this.jumpVelocity);
    }

    if (!this.body?.blocked.down) {
      this.play('gabi-jump', true);
    } else if (moveLeft || moveRight) {
      this.play('gabi-walk', true);
    } else {
      this.play('gabi-idle', true);
    }
  }
}
