import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create(): void {
    this.cameras.main.setBackgroundColor('#8fd2ff');
    this.add.rectangle(320, 180, 640, 360, 0x8fd2ff);
    this.add.rectangle(320, 122, 640, 120, 0xbde9ff, 0.45);
    this.add.circle(78, 64, 34, 0xffd46d, 0.95);
    this.add.circle(78, 64, 48, 0xffed9a, 0.2);
    this.add.rectangle(320, 314, 640, 92, 0x5d9b45);
    this.createCloud(220, 82);
    this.createCloud(445, 62);
    this.add.image(110, 288, 'forest', 'tree-left').setOrigin(0.5, 1).setScale(1.1);
    this.add.image(500, 288, 'forest', 'tree-large').setOrigin(0.5, 1).setScale(1.0);
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

  private createCloud(x: number, y: number): void {
    this.add.circle(x - 28, y + 10, 16, 0xffffff, 0.76);
    this.add.circle(x - 10, y, 22, 0xffffff, 0.82);
    this.add.circle(x + 17, y + 8, 18, 0xffffff, 0.76);
    this.add.ellipse(x + 4, y + 18, 82, 22, 0xffffff, 0.72);
  }
}
