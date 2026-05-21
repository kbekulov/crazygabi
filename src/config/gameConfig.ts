import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene.ts';
import { GameScene } from '../scenes/GameScene.ts';
import { MainMenuScene } from '../scenes/MainMenuScene.ts';
import { PreloadScene } from '../scenes/PreloadScene.ts';

export const GAME_WIDTH = 640;
export const GAME_HEIGHT = 360;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#8ed3ff',
  pixelArt: true,
  roundPixels: true,
  render: {
    antialias: false,
    antialiasGL: false,
    pixelArt: true,
    roundPixels: true
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    autoRound: true,
    width: GAME_WIDTH,
    height: GAME_HEIGHT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 1060 },
      debug: false
    }
  },
  scene: [BootScene, PreloadScene, MainMenuScene, GameScene]
};
