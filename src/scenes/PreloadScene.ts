import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload(): void {
    this.load.image('forest', 'assets/sprites/forest_tileset.png');
    this.load.image('house-tiles', 'assets/sprites/house_32x32.png');
    this.load.image('acorn', 'assets/sprites/acorn_no_outline.png');
    this.load.spritesheet('gabi', 'assets/sprites/gabi_thief.png', {
      frameWidth: 32,
      frameHeight: 64
    });
    this.load.spritesheet('mushroom-walk', 'assets/sprites/mushroom_walk.png', {
      frameWidth: 29,
      frameHeight: 28
    });
  }

  create(): void {
    this.createTextureFrames();
    this.createAnimations();
    this.scene.start('MainMenuScene');
  }

  private createTextureFrames(): void {
    const forest = this.textures.get('forest');
    forest.add('ground-top', 0, 0, 0, 32, 32);
    forest.add('ground-mid', 0, 0, 32, 32, 32);
    forest.add('dirt', 0, 32, 32, 32, 32);
    forest.add('rocks', 0, 224, 0, 96, 64);
    forest.add('cave', 0, 96, 32, 96, 96);
    forest.add('log-round', 0, 352, 48, 64, 48);
    forest.add('log-long', 0, 416, 64, 160, 32);
    forest.add('sign', 0, 320, 0, 64, 64);
    forest.add('apple', 0, 201, 96, 16, 18);
    forest.add('coin', 0, 232, 96, 16, 18);
    forest.add('heart', 0, 200, 128, 16, 16);
    forest.add('tree-left', 0, 0, 160, 128, 160);
    forest.add('tree-slim', 0, 128, 160, 128, 160);
    forest.add('tree-large', 0, 256, 144, 160, 176);
    forest.add('tree-right', 0, 416, 160, 112, 160);
    forest.add('bush-round', 0, 416, 0, 64, 48);

    const house = this.textures.get('house-tiles');
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        house.add(`tile-${row}-${col}`, 0, col * 32, row * 32, 32, 32);
      }
    }
  }

  private createAnimations(): void {
    this.anims.create({
      key: 'gabi-idle',
      frames: [{ key: 'gabi', frame: 0 }],
      frameRate: 1
    });
    this.anims.create({
      key: 'gabi-walk',
      frames: this.anims.generateFrameNumbers('gabi', { start: 1, end: 5 }),
      frameRate: 9,
      repeat: -1
    });
    this.anims.create({
      key: 'gabi-jump',
      frames: [{ key: 'gabi', frame: 16 }],
      frameRate: 1
    });
    this.anims.create({
      key: 'mushroom-walk',
      frames: this.anims.generateFrameNumbers('mushroom-walk', { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1
    });
  }
}
