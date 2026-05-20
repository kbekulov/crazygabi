import Phaser from 'phaser';

type SourceFrame = {
  name: string | number;
  sourceIndex: number;
};

type NormalizedTextureConfig = {
  key: string;
  sourceKey: string;
  sourceColumns: number;
  sourceFrameWidth: number;
  sourceFrameHeight: number;
  frameWidth: number;
  frameHeight: number;
  frames: SourceFrame[];
};

type AlphaBounds = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
};

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload(): void {
    this.load.image('forest', 'assets/sprites/forest_tileset.png');
    this.load.image('house-tiles', 'assets/sprites/house_32x32.png');
    this.load.image('acorn', 'assets/sprites/acorn_no_outline.png');
    this.load.image('gabi-source', 'assets/sprites/gabi_thief.png');
    this.load.image('mushroom-source', 'assets/sprites/mushroom_walk.png');
  }

  create(): void {
    this.createTextureFrames();
    this.createStabilizedSprites();
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

  private createStabilizedSprites(): void {
    // The source sheets are CC0 placeholder art, but their visible pixels sit in
    // slightly different places per cell. Re-centering them prevents blink/jitter.
    this.createNormalizedTexture({
      key: 'gabi',
      sourceKey: 'gabi-source',
      sourceColumns: 10,
      sourceFrameWidth: 32,
      sourceFrameHeight: 64,
      frameWidth: 40,
      frameHeight: 64,
      frames: [
        { name: 'idle', sourceIndex: 0 },
        { name: 'walk-a', sourceIndex: 1 },
        { name: 'walk-b', sourceIndex: 4 },
        { name: 'jump', sourceIndex: 16 }
      ]
    });

    this.createNormalizedTexture({
      key: 'mushroom-walk',
      sourceKey: 'mushroom-source',
      sourceColumns: 6,
      sourceFrameWidth: 29,
      sourceFrameHeight: 28,
      frameWidth: 32,
      frameHeight: 28,
      frames: [0, 1, 2, 3, 4, 5].map((frame) => ({ name: frame, sourceIndex: frame }))
    });
  }

  private createNormalizedTexture(config: NormalizedTextureConfig): void {
    const source = this.textures.get(config.sourceKey).getSourceImage() as HTMLImageElement | HTMLCanvasElement;
    const texture = this.textures.createCanvas(
      config.key,
      config.frameWidth * config.frames.length,
      config.frameHeight
    );

    if (!texture) {
      throw new Error(`Unable to create texture "${config.key}"`);
    }

    const context = texture.getContext();
    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = config.sourceFrameWidth;
    sampleCanvas.height = config.sourceFrameHeight;
    const sampleContext = sampleCanvas.getContext('2d');

    if (!sampleContext) {
      throw new Error('Unable to create sprite normalization canvas');
    }

    context.clearRect(0, 0, texture.width, texture.height);
    context.imageSmoothingEnabled = false;
    sampleContext.imageSmoothingEnabled = false;

    config.frames.forEach((frame, outputIndex) => {
      const sourceX = (frame.sourceIndex % config.sourceColumns) * config.sourceFrameWidth;
      const sourceY = Math.floor(frame.sourceIndex / config.sourceColumns) * config.sourceFrameHeight;
      const outputX = outputIndex * config.frameWidth;

      sampleContext.clearRect(0, 0, config.sourceFrameWidth, config.sourceFrameHeight);
      sampleContext.drawImage(
        source,
        sourceX,
        sourceY,
        config.sourceFrameWidth,
        config.sourceFrameHeight,
        0,
        0,
        config.sourceFrameWidth,
        config.sourceFrameHeight
      );

      const bounds = this.getAlphaBounds(
        sampleContext.getImageData(0, 0, config.sourceFrameWidth, config.sourceFrameHeight)
      );
      const drawX = outputX + this.getCenteredDrawOffset(bounds, config.frameWidth, config.sourceFrameWidth, 'x');
      const drawY = this.getBottomAlignedDrawOffset(bounds, config.frameHeight, config.sourceFrameHeight);

      context.drawImage(
        source,
        sourceX,
        sourceY,
        config.sourceFrameWidth,
        config.sourceFrameHeight,
        drawX,
        drawY,
        config.sourceFrameWidth,
        config.sourceFrameHeight
      );
      texture.add(frame.name, 0, outputX, 0, config.frameWidth, config.frameHeight);
    });

    texture.refresh();
  }

  private getAlphaBounds(imageData: ImageData): AlphaBounds | undefined {
    const { data, width, height } = imageData;
    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        if (data[(y * width + x) * 4 + 3] === 0) {
          continue;
        }

        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }

    if (maxX < minX || maxY < minY) {
      return undefined;
    }

    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX + 1,
      height: maxY - minY + 1
    };
  }

  private getCenteredDrawOffset(
    bounds: AlphaBounds | undefined,
    outputFrameSize: number,
    sourceFrameSize: number,
    axis: 'x' | 'y'
  ): number {
    if (!bounds) {
      return Math.round((outputFrameSize - sourceFrameSize) / 2);
    }

    const visibleSize = axis === 'x' ? bounds.width : bounds.height;
    const visibleStart = axis === 'x' ? bounds.minX : bounds.minY;
    return Math.round((outputFrameSize - visibleSize) / 2) - visibleStart;
  }

  private getBottomAlignedDrawOffset(
    bounds: AlphaBounds | undefined,
    outputFrameHeight: number,
    sourceFrameHeight: number
  ): number {
    if (!bounds) {
      return outputFrameHeight - sourceFrameHeight;
    }

    return outputFrameHeight - bounds.height - bounds.minY;
  }

  private createAnimations(): void {
    this.anims.create({
      key: 'gabi-idle',
      frames: [{ key: 'gabi', frame: 'idle' }],
      frameRate: 1
    });
    this.anims.create({
      key: 'gabi-walk',
      frames: [
        { key: 'gabi', frame: 'walk-a' },
        { key: 'gabi', frame: 'walk-b' },
        { key: 'gabi', frame: 'walk-a' },
        { key: 'gabi', frame: 'idle' }
      ],
      frameRate: 7,
      repeat: -1
    });
    this.anims.create({
      key: 'gabi-jump',
      frames: [{ key: 'gabi', frame: 'jump' }],
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
