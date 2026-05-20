import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create(): void {
    this.cameras.main.setBackgroundColor('#101827');
    this.add.rectangle(320, 180, 640, 360, 0x172033);
    this.add.rectangle(320, 314, 640, 92, 0x27351f);
    this.add.image(110, 226, 'forest', 'tree-left').setScale(1.1);
    this.add.image(500, 220, 'forest', 'tree-large').setScale(1.0);
    this.add.image(320, 300, 'forest', 'log-long').setScale(1.5, 1.2);

    this.add
      .text(320, 70, 'Crazy Gabi', {
        color: '#ffe8a3',
        fontFamily: 'monospace',
        fontSize: '48px',
        fontStyle: 'bold',
        stroke: '#47220e',
        strokeThickness: 6
      })
      .setOrigin(0.5);

    this.add
      .text(320, 118, 'The Acorn Wood', {
        color: '#9ee6ad',
        fontFamily: 'monospace',
        fontSize: '20px',
        fontStyle: 'bold',
        stroke: '#162317',
        strokeThickness: 3
      })
      .setOrigin(0.5);

    const start = this.add
      .rectangle(320, 205, 172, 46, 0x36533c)
      .setStrokeStyle(3, 0xf3d07a)
      .setInteractive(new Phaser.Geom.Rectangle(-86, -23, 172, 46), Phaser.Geom.Rectangle.Contains);

    const label = this.add
      .text(320, 206, 'START', {
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: '18px',
        fontStyle: 'bold'
      })
      .setOrigin(0.5);

    start.on('pointerover', () => start.setFillStyle(0x4f7046));
    start.on('pointerout', () => start.setFillStyle(0x36533c));
    start.on('pointerdown', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.input.keyboard?.once('keydown-SPACE', () => this.scene.start('GameScene', { levelIndex: 0 }));
    this.input.keyboard?.once('keydown-ENTER', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.add
      .text(320, 286, 'Arrows/WASD + Space  |  Touch buttons', {
        color: '#d6b889',
        fontFamily: 'monospace',
        fontSize: '13px'
      })
      .setOrigin(0.5);

    label.setDepth(1);
  }
}
