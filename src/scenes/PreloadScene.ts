import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  create(): void {
    this.createPixelTextures();
    this.scene.start('MainMenuScene');
  }

  private createPixelTextures(): void {
    this.makeTile();
    this.makePlayer('gabi-idle', false);
    this.makePlayer('gabi-jump', true);
    this.makeMushling();
    this.makeStar();
    this.makeFlower();
    this.makeGoal();
    this.makeSpike();
  }

  private makeTile(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x4b8754);
    g.fillRect(0, 0, 16, 16);
    g.fillStyle(0x71b45f);
    g.fillRect(0, 0, 16, 5);
    g.fillStyle(0x2f5c4e);
    g.fillRect(0, 12, 16, 4);
    g.fillStyle(0xf0c65f);
    g.fillRect(2, 2, 3, 2);
    g.generateTexture('ground-tile', 16, 16);
    g.destroy();
  }

  private makePlayer(key: string, jumping: boolean): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x21183f);
    g.fillRect(6, 5, 12, 8);
    g.fillStyle(0xf5bb70);
    g.fillRect(7, 9, 11, 9);
    g.fillStyle(0xe84e8a);
    g.fillRect(4, 13, 18, 12);
    g.fillStyle(0xfff0b2);
    g.fillRect(10, 11, 2, 2);
    g.fillStyle(0x2d2254);
    g.fillRect(7, 25, 5, jumping ? 4 : 6);
    g.fillRect(16, 25, 5, jumping ? 4 : 6);
    g.fillStyle(0x8be0d8);
    g.fillRect(3, 16, 4, 5);
    g.fillRect(20, 16, 4, 5);
    g.generateTexture(key, 28, 32);
    g.destroy();
  }

  private makeMushling(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x4a235f);
    g.fillRect(4, 10, 18, 12);
    g.fillStyle(0xcf4f66);
    g.fillRect(2, 5, 22, 9);
    g.fillStyle(0xffd37a);
    g.fillRect(6, 7, 3, 3);
    g.fillRect(15, 6, 4, 3);
    g.fillStyle(0x120f2c);
    g.fillRect(8, 14, 2, 2);
    g.fillRect(16, 14, 2, 2);
    g.generateTexture('mushling', 26, 24);
    g.destroy();
  }

  private makeStar(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0xffe66d);
    g.fillRect(7, 0, 4, 18);
    g.fillRect(0, 7, 18, 4);
    g.fillRect(4, 4, 10, 10);
    g.fillStyle(0xffffff);
    g.fillRect(8, 4, 2, 2);
    g.generateTexture('star', 18, 18);
    g.destroy();
  }

  private makeFlower(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x76d36b);
    g.fillRect(8, 8, 3, 10);
    g.fillStyle(0x7fd6ff);
    g.fillRect(5, 2, 4, 5);
    g.fillRect(11, 2, 4, 5);
    g.fillRect(4, 8, 5, 4);
    g.fillRect(11, 8, 5, 4);
    g.fillStyle(0xffe66d);
    g.fillRect(8, 6, 4, 4);
    g.generateTexture('flower', 20, 20);
    g.destroy();
  }

  private makeGoal(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x2b1d56);
    g.fillRect(4, 8, 28, 36);
    g.fillStyle(0x6ee7d8);
    g.fillRect(8, 12, 20, 28);
    g.fillStyle(0xffe66d);
    g.fillRect(13, 17, 10, 4);
    g.fillRect(13, 27, 10, 4);
    g.generateTexture('goal-door', 36, 48);
    g.destroy();
  }

  private makeSpike(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0xb8335a);
    g.fillTriangle(0, 16, 8, 0, 16, 16);
    g.fillStyle(0xff97a8);
    g.fillTriangle(4, 14, 8, 5, 12, 14);
    g.generateTexture('spike', 16, 16);
    g.destroy();
  }
}
