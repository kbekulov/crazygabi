import Phaser from 'phaser';

export interface TouchControlState {
  left: boolean;
  right: boolean;
  jump: boolean;
  action: boolean;
}

type ButtonKey = keyof TouchControlState;

export class TouchControls {
  private state: TouchControlState = {
    left: false,
    right: false,
    jump: false,
    action: false
  };

  private buttons: Phaser.GameObjects.Group;

  constructor(private scene: Phaser.Scene) {
    this.buttons = scene.add.group();
    this.createButton(58, 308, '<', 'left');
    this.createButton(126, 308, '>', 'right');
    this.createButton(506, 308, 'J', 'jump');
    this.createButton(580, 308, 'A', 'action');

    scene.scale.on('resize', this.onResize, this);
  }

  get input(): TouchControlState {
    return { ...this.state };
  }

  destroy(): void {
    this.scene.scale.off('resize', this.onResize, this);
    this.buttons.destroy(true);
  }

  private createButton(x: number, y: number, label: string, key: ButtonKey): void {
    const pad = this.scene.add.container(x, y).setScrollFactor(0).setDepth(1000);
    const bg = this.scene.add
      .rectangle(0, 0, 54, 54, 0x1f2d20, 0.68)
      .setStrokeStyle(3, 0xf3d07a, 0.9);
    const text = this.scene.add
      .text(0, 1, label, {
        color: '#fff1ad',
        fontFamily: 'monospace',
        fontSize: '24px',
        fontStyle: 'bold'
      })
      .setOrigin(0.5);

    pad.add([bg, text]);
    pad.setSize(54, 54);
    pad.setInteractive(new Phaser.Geom.Rectangle(-27, -27, 54, 54), Phaser.Geom.Rectangle.Contains);

    pad.on('pointerdown', () => {
      this.state[key] = true;
      bg.setFillStyle(0x4f7046, 0.86);
    });
    pad.on('pointerup', () => this.release(key, bg));
    pad.on('pointerout', () => this.release(key, bg));
    pad.on('pointercancel', () => this.release(key, bg));

    this.buttons.add(pad);
  }

  private release(key: ButtonKey, bg: Phaser.GameObjects.Rectangle): void {
    this.state[key] = false;
    bg.setFillStyle(0x1f2d20, 0.68);
  }

  private onResize(): void {
    // Future mobile layouts can reposition controls here when using a larger logical canvas.
  }
}
