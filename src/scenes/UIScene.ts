import Phaser from 'phaser';
import type { GameSnapshot } from '../systems/GameState.ts';

export class UIScene extends Phaser.Scene {
  private scoreText?: Phaser.GameObjects.Text;
  private livesText?: Phaser.GameObjects.Text;
  private messageText?: Phaser.GameObjects.Text;

  constructor() {
    super('UIScene');
  }

  create(): void {
    this.scoreText = this.add.text(10, 8, 'Score 0000', {
      color: '#fff1ad',
      fontFamily: 'monospace',
      fontSize: '14px',
      fontStyle: 'bold'
    });
    this.livesText = this.add.text(374, 8, 'Lives 3', {
      color: '#fff1ad',
      fontFamily: 'monospace',
      fontSize: '14px',
      fontStyle: 'bold'
    });
    this.messageText = this.add.text(240, 74, '', {
      align: 'center',
      color: '#ffffff',
      fontFamily: 'monospace',
      fontSize: '18px',
      fontStyle: 'bold',
      stroke: '#2b1d56',
      strokeThickness: 5
    }).setOrigin(0.5);

    this.events.on('state-change', this.render, this);
  }

  destroy(): void {
    this.events.off('state-change', this.render, this);
  }

  private render(snapshot: GameSnapshot): void {
    this.scoreText?.setText(`Score ${snapshot.score.toString().padStart(4, '0')}`);
    this.livesText?.setText(`Lives ${snapshot.lives}`);

    if (snapshot.phase === 'game-over') {
      this.messageText?.setText('Game Over\nPress R to restart');
    } else if (snapshot.phase === 'level-complete') {
      this.messageText?.setText('Level Complete!\nPress R for now');
    } else {
      this.messageText?.setText('');
    }
  }
}
