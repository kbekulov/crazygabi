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
    this.createButton(42, 224, '<', 'left');
    this.createButton(92, 224, '>', 'right');
    this.createButton(378, 224, 'J', 'jump');
    this.createButton(432, 224, 'A', 'action');

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
      .rectangle(0, 0, 42, 42, 0x251f5d, 0.78)
      .setStrokeStyle(2, 0xf6d36b, 0.88);
    const text = this.scene.add
      .text(0, 1, label, {
        color: '#fff1ad',
        fontFamily: 'monospace',
        fontSize: '20px',
        fontStyle: 'bold'
      })
      .setOrigin(0.5);

    pad.add([bg, text]);
    pad.setSize(42, 42);
    pad.setInteractive(new Phaser.Geom.Rectangle(-21, -21, 42, 42), Phaser.Geom.Rectangle.Contains);

    pad.on('pointerdown', () => {
      this.state[key] = true;
      bg.setFillStyle(0x4e3fa5, 0.9);
    });
    pad.on('pointerup', () => this.release(key, bg));
    pad.on('pointerout', () => this.release(key, bg));
    pad.on('pointercancel', () => this.release(key, bg));

    this.buttons.add(pad);
  }

  private release(key: ButtonKey, bg: Phaser.GameObjects.Rectangle): void {
    this.state[key] = false;
    bg.setFillStyle(0x251f5d, 0.78);
  }

  private onResize(): void {
    // Future mobile layouts can reposition controls here when using a larger logical canvas.
  }
}
