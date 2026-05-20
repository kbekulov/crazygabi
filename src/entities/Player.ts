import Phaser from 'phaser';
import type { TouchControlState } from '../systems/TouchControls.ts';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly speed = 145;
  private readonly jumpVelocity = -360;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys: Record<'left' | 'right' | 'jump' | 'action', Phaser.Input.Keyboard.Key>;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'gabi-idle');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.cursors = scene.input.keyboard!.createCursorKeys();
    this.keys = scene.input.keyboard!.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.W,
      action: Phaser.Input.Keyboard.KeyCodes.K
    }) as Record<'left' | 'right' | 'jump' | 'action', Phaser.Input.Keyboard.Key>;

    this.setSize(15, 22);
    this.setOffset(4, 5);
    this.setMaxVelocity(180, 520);
    this.setDragX(900);
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

    this.setTexture(this.body?.blocked.down ? 'gabi-idle' : 'gabi-jump');
  }
}
