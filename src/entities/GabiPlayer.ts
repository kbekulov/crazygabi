import Phaser from 'phaser';
import type { TouchControlState } from '../systems/TouchControls.ts';

export class GabiPlayer extends Phaser.Physics.Arcade.Sprite {
  private readonly speed = 188;
  private readonly jumpVelocity = -462;
  private readonly cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly keys: Record<'left' | 'right' | 'jump' | 'action', Phaser.Input.Keyboard.Key>;

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

    this.setScale(0.84);
    this.setSize(18, 44);
    this.setOffset(11, 18);
    this.setDragX(900);
    this.setMaxVelocity(220, 700);
    this.play('gabi-idle');
  }

  updateFromInput(touch: TouchControlState): void {
    const movingLeft = this.cursors.left.isDown || this.keys.left.isDown || touch.left;
    const movingRight = this.cursors.right.isDown || this.keys.right.isDown || touch.right;
    const wantsJump =
      this.cursors.up.isDown ||
      this.cursors.space.isDown ||
      this.keys.jump.isDown ||
      touch.jump;

    if (movingLeft) {
      this.setVelocityX(-this.speed);
      this.setFlipX(true);
    } else if (movingRight) {
      this.setVelocityX(this.speed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    if (wantsJump && this.body?.blocked.down) {
      this.setVelocityY(this.jumpVelocity);
    }

    if (!this.body?.blocked.down) {
      this.play('gabi-jump', true);
    } else if (movingLeft || movingRight) {
      this.play('gabi-walk', true);
    } else {
      this.play('gabi-idle', true);
    }
  }
}
