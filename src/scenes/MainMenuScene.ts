import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create(): void {
    this.cameras.main.setBackgroundColor('#8ed3ff');
    this.add.rectangle(320, 180, 640, 360, 0x8ed3ff);
    this.add.rectangle(320, 118, 640, 120, 0xbce9ff, 0.45);
    this.add.circle(78, 64, 34, 0xffd772, 0.95);
    this.add.circle(78, 64, 50, 0xffefaa, 0.2);
    this.add.rectangle(320, 314, 640, 92, 0x73ad57);

    this.createCloud(210, 84);
    this.createCloud(454, 64);
    this.add.image(112, 288, 'forest', 'tree-left').setOrigin(0.5, 1).setScale(1.08);
    this.add.image(500, 288, 'forest', 'tree-large').setOrigin(0.5, 1);
    this.add.image(320, 300, 'forest', 'log-long').setScale(1.45, 1.15);

    this.add
      .text(320, 70, 'Crazy Gabi', {
        color: '#ffe8a3',
        fontFamily: 'monospace',
        fontSize: '48px',
        fontStyle: 'bold',
        stroke: '#4a220e',
        strokeThickness: 6
      })
      .setOrigin(0.5);

    this.add
      .text(320, 118, 'The Acorn Wood', {
        color: '#4c8d5a',
        fontFamily: 'monospace',
        fontSize: '20px',
        fontStyle: 'bold',
        stroke: '#e7f6cf',
        strokeThickness: 2
      })
      .setOrigin(0.5);

    const start = this.add
      .rectangle(320, 205, 172, 46, 0x37553b)
      .setStrokeStyle(3, 0xf6d779)
      .setInteractive(new Phaser.Geom.Rectangle(-86, -23, 172, 46), Phaser.Geom.Rectangle.Contains);

    this.add
      .text(320, 206, 'START', {
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: '18px',
        fontStyle: 'bold',
        stroke: '#263323',
        strokeThickness: 3
      })
      .setOrigin(0.5)
      .setDepth(1);

    start.on('pointerover', () => start.setFillStyle(0x4f7446));
    start.on('pointerout', () => start.setFillStyle(0x37553b));
    start.on('pointerdown', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.input.keyboard?.once('keydown-SPACE', () => this.scene.start('GameScene', { levelIndex: 0 }));
    this.input.keyboard?.once('keydown-ENTER', () => this.scene.start('GameScene', { levelIndex: 0 }));

    this.add
      .text(320, 286, 'Arrows/WASD + Space  |  Touch buttons', {
        color: '#f6e3a4',
        fontFamily: 'monospace',
        fontSize: '13px',
        stroke: '#3d3a1f',
        strokeThickness: 2
      })
      .setOrigin(0.5);
  }

  private createCloud(x: number, y: number): void {
    this.add.circle(x - 28, y + 10, 16, 0xffffff, 0.78);
    this.add.circle(x - 10, y, 22, 0xffffff, 0.82);
    this.add.circle(x + 17, y + 8, 18, 0xffffff, 0.76);
    this.add.ellipse(x + 4, y + 18, 82, 22, 0xffffff, 0.72);
  }
}
