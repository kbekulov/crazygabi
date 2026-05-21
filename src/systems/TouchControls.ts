import Phaser from 'phaser';

export interface TouchControlState {
  left: boolean;
  right: boolean;
  jump: boolean;
  action: boolean;
}

type ButtonKey = keyof TouchControlState;

export class TouchControls {
  private readonly buttons: Phaser.GameObjects.Group;
  private readonly state: TouchControlState = {
    left: false,
    right: false,
    jump: false,
    action: false
  };

  constructor(private readonly scene: Phaser.Scene) {
    this.buttons = scene.add.group();
    this.createButton(54, 310, '<', 'left');
    this.createButton(124, 310, '>', 'right');
    this.createButton(508, 310, 'J', 'jump');
    this.createButton(578, 310, 'A', 'action');
  }

  get input(): TouchControlState {
    return { ...this.state };
  }

  destroy(): void {
    this.buttons.destroy(true);
  }

  private createButton(x: number, y: number, label: string, key: ButtonKey): void {
    const pad = this.scene.add.container(x, y).setScrollFactor(0).setDepth(3000);
    const bg = this.scene.add
      .rectangle(0, 0, 54, 54, 0x21361f, 0.62)
      .setStrokeStyle(3, 0xf7df8a, 0.92);
    const text = this.scene.add
      .text(0, 1, label, {
        color: '#fff7bf',
        fontFamily: 'monospace',
        fontSize: '24px',
        fontStyle: 'bold',
        stroke: '#2d1908',
        strokeThickness: 3
      })
      .setOrigin(0.5);

    pad.add([bg, text]);
    pad.setSize(54, 54);
    pad.setInteractive(new Phaser.Geom.Rectangle(-27, -27, 54, 54), Phaser.Geom.Rectangle.Contains);

    pad.on('pointerdown', () => {
      this.state[key] = true;
      bg.setFillStyle(0x4f7846, 0.82);
    });
    pad.on('pointerup', () => this.release(key, bg));
    pad.on('pointerout', () => this.release(key, bg));
    pad.on('pointercancel', () => this.release(key, bg));

    this.buttons.add(pad);
  }

  private release(key: ButtonKey, bg: Phaser.GameObjects.Rectangle): void {
    this.state[key] = false;
    bg.setFillStyle(0x21361f, 0.62);
  }
}
