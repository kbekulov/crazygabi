import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene.ts';
import { PreloadScene } from '../scenes/PreloadScene.ts';
import { MainMenuScene } from '../scenes/MainMenuScene.ts';
import { GameScene } from '../scenes/GameScene.ts';
import { UIScene } from '../scenes/UIScene.ts';

export const GAME_WIDTH = 480;
export const GAME_HEIGHT = 270;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#17143a',
  pixelArt: true,
  roundPixels: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 850, x: 0 },
      debug: false
    }
  },
  scene: [BootScene, PreloadScene, MainMenuScene, GameScene, UIScene]
};
