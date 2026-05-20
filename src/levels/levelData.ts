export interface RectSpec {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DecorationSpec {
  x: number;
  y: number;
  frame: string;
  scale?: number;
  depth?: number;
  flipX?: boolean;
}

export interface CollectibleSpec {
  x: number;
  y: number;
  frame: 'apple' | 'coin' | 'heart';
  points: number;
}

export interface EnemySpec {
  x: number;
  y: number;
  minX: number;
  maxX: number;
  speed: number;
}

export interface PlatformerLevel {
  id: string;
  name: string;
  width: number;
  spawn: { x: number; y: number };
  checkpoint: { x: number; y: number };
  acornZoneX: number;
  platforms: RectSpec[];
  collectibles: CollectibleSpec[];
  enemies: EnemySpec[];
  decorations: DecorationSpec[];
  goal: { x: number; y: number };
}

export const levels: PlatformerLevel[] = [
  {
    id: 'acorn-wood',
    name: 'Acorn Wood',
    width: 3000,
    spawn: { x: 120, y: 210 },
    checkpoint: { x: 930, y: 210 },
    acornZoneX: 920,
    platforms: [
      { x: 0, y: 288, width: 760, height: 72 },
      { x: 840, y: 288, width: 510, height: 72 },
      { x: 1450, y: 288, width: 430, height: 72 },
      { x: 1980, y: 288, width: 540, height: 72 },
      { x: 2580, y: 288, width: 420, height: 72 },
      { x: 520, y: 214, width: 154, height: 22 },
      { x: 1020, y: 224, width: 172, height: 22 },
      { x: 1280, y: 178, width: 168, height: 22 },
      { x: 1660, y: 218, width: 190, height: 22 },
      { x: 2110, y: 196, width: 178, height: 22 },
      { x: 2360, y: 232, width: 170, height: 22 }
    ],
    collectibles: [
      { x: 448, y: 242, frame: 'apple', points: 50 },
      { x: 580, y: 172, frame: 'coin', points: 100 },
      { x: 1108, y: 182, frame: 'apple', points: 50 },
      { x: 1360, y: 136, frame: 'coin', points: 100 },
      { x: 1716, y: 176, frame: 'heart', points: 200 },
      { x: 2216, y: 154, frame: 'coin', points: 100 },
      { x: 2442, y: 190, frame: 'apple', points: 50 },
      { x: 2730, y: 238, frame: 'coin', points: 100 }
    ],
    enemies: [
      { x: 1010, y: 252, minX: 890, maxX: 1280, speed: 54 },
      { x: 1560, y: 252, minX: 1470, maxX: 1840, speed: 62 },
      { x: 2220, y: 252, minX: 2010, maxX: 2480, speed: 70 }
    ],
    decorations: [
      { x: 385, y: 226, frame: 'sign', scale: 0.78, depth: 0 },
      { x: 720, y: 227, frame: 'tree-left', scale: 1.05, depth: -2 },
      { x: 1000, y: 226, frame: 'tree-large', scale: 1.12, depth: -2 },
      { x: 1260, y: 230, frame: 'tree-slim', scale: 1.0, depth: -2, flipX: true },
      { x: 1510, y: 218, frame: 'tree-right', scale: 1.15, depth: -2 },
      { x: 1800, y: 226, frame: 'tree-large', scale: 1.05, depth: -2 },
      { x: 2110, y: 228, frame: 'tree-left', scale: 1.18, depth: -2, flipX: true },
      { x: 2420, y: 225, frame: 'tree-large', scale: 1.16, depth: -2 },
      { x: 2750, y: 228, frame: 'tree-right', scale: 1.1, depth: -2 },
      { x: 930, y: 266, frame: 'rocks', scale: 0.7, depth: 1 },
      { x: 1880, y: 268, frame: 'log-round', scale: 0.9, depth: 1 },
      { x: 2520, y: 270, frame: 'log-long', scale: 0.9, depth: 1 }
    ],
    goal: { x: 2880, y: 214 }
  }
];

// Future levels can add new zones, bosses, secrets, moving platforms, and puzzle specs here.
