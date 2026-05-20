import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create(): void {
    this.cameras.main.setBackgroundColor('#16133a');
    this.add.text(240, 74, 'Crazy Gabi', {
      color: '#ffe66d',
      fontFamily: 'monospace',
      fontSize: '38px',
      fontStyle: 'bold',
      stroke: '#4a235f',
      strokeThickness: 6
    }).setOrigin(0.5);

    this.add.text(240, 118, 'A tiny moonlit platform adventure', {
      color: '#a7f3d0',
      fontFamily: 'monospace',
      fontSize: '14px'
    }).setOrigin(0.5);

    const start = this.add
      .rectangle(240, 174, 142, 42, 0x2f6f66)
      .setStrokeStyle(2, 0xffe66d)
      .setInteractive(new Phaser.Geom.Rectangle(-71, -21, 142, 42), Phaser.Geom.Rectangle.Contains);

    const label = this.add.text(240, 175, 'START', {
      color: '#ffffff',
      fontFamily: 'monospace',
      fontSize: '18px',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    start.on('pointerover', () => start.setFillStyle(0x3b8c75));
    start.on('pointerout', () => start.setFillStyle(0x2f6f66));
    start.on('pointerdown', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.input.keyboard?.once('keydown-SPACE', () => this.scene.start('GameScene', { levelIndex: 0 }));
    this.input.keyboard?.once('keydown-ENTER', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.add.text(240, 226, 'Arrows/WASD + Space  |  Touch buttons', {
      color: '#c4b5fd',
      fontFamily: 'monospace',
      fontSize: '11px'
    }).setOrigin(0.5);

    label.setDepth(1);
  }
}
