export type GamePhase = 'playing' | 'game-over' | 'level-complete';

export interface GameSnapshot {
  score: number;
  lives: number;
  levelIndex: number;
  phase: GamePhase;
}

export class GameState {
  private snapshot: GameSnapshot = {
    score: 0,
    lives: 3,
    levelIndex: 0,
    phase: 'playing'
  };

  reset(levelIndex = 0): GameSnapshot {
    this.snapshot = {
      score: 0,
      lives: 3,
      levelIndex,
      phase: 'playing'
    };
    return this.getSnapshot();
  }

  addScore(points: number): GameSnapshot {
    this.snapshot.score += points;
    return this.getSnapshot();
  }

  loseLife(): GameSnapshot {
    this.snapshot.lives = Math.max(0, this.snapshot.lives - 1);
    this.snapshot.phase = this.snapshot.lives > 0 ? 'playing' : 'game-over';
    return this.getSnapshot();
  }

  completeLevel(): GameSnapshot {
    this.snapshot.phase = 'level-complete';
    return this.getSnapshot();
  }

  getSnapshot(): GameSnapshot {
    return { ...this.snapshot };
  }
}

export const gameState = new GameState();
