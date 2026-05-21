export interface RectSpec {
  x: number;
  y: number;
  width: number;
  height: number;
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

export interface DecorationSpec {
  x: number;
  y: number;
  frame: string;
  scale?: number;
  depth?: number;
  flipX?: boolean;
  grounded?: boolean;
}

export interface PlatformerLevel {
  id: string;
  name: string;
  width: number;
  groundY: number;
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
    width: 3200,
    groundY: 288,
    spawn: { x: 150, y: 238 },
    checkpoint: { x: 1090, y: 238 },
    acornZoneX: 980,
    platforms: [
      { x: 0, y: 288, width: 840, height: 72 },
      { x: 910, y: 288, width: 560, height: 72 },
      { x: 1550, y: 288, width: 520, height: 72 },
      { x: 2160, y: 288, width: 480, height: 72 },
      { x: 2730, y: 288, width: 470, height: 72 },
      { x: 560, y: 214, width: 150, height: 22 },
      { x: 1120, y: 224, width: 170, height: 22 },
      { x: 1370, y: 180, width: 160, height: 22 },
      { x: 1790, y: 218, width: 180, height: 22 },
      { x: 2320, y: 202, width: 170, height: 22 },
      { x: 2515, y: 238, width: 165, height: 22 }
    ],
    collectibles: [
      { x: 475, y: 245, frame: 'apple', points: 50 },
      { x: 630, y: 174, frame: 'coin', points: 100 },
      { x: 1190, y: 182, frame: 'apple', points: 50 },
      { x: 1445, y: 136, frame: 'coin', points: 100 },
      { x: 1860, y: 176, frame: 'heart', points: 200 },
      { x: 2396, y: 158, frame: 'coin', points: 100 },
      { x: 2590, y: 195, frame: 'apple', points: 50 },
      { x: 2900, y: 238, frame: 'coin', points: 100 }
    ],
    enemies: [
      { x: 1030, y: 252, minX: 940, maxX: 1400, speed: 56 },
      { x: 1680, y: 252, minX: 1585, maxX: 2020, speed: 64 },
      { x: 2300, y: 252, minX: 2180, maxX: 2580, speed: 72 }
    ],
    decorations: [
      { x: 405, y: 288, frame: 'sign', scale: 0.8, depth: 2, grounded: true },
      { x: 760, y: 288, frame: 'tree-left', scale: 1.05, depth: -2, grounded: true },
      { x: 1020, y: 288, frame: 'tree-large', scale: 1.1, depth: -2, grounded: true },
      { x: 1270, y: 288, frame: 'tree-slim', scale: 1.0, depth: -2, flipX: true, grounded: true },
      { x: 1560, y: 288, frame: 'tree-right', scale: 1.15, depth: -2, grounded: true },
      { x: 1875, y: 288, frame: 'tree-large', scale: 1.08, depth: -2, grounded: true },
      { x: 2190, y: 288, frame: 'tree-left', scale: 1.16, depth: -2, flipX: true, grounded: true },
      { x: 2480, y: 288, frame: 'tree-large', scale: 1.14, depth: -2, grounded: true },
      { x: 2830, y: 288, frame: 'tree-right', scale: 1.1, depth: -2, grounded: true },
      { x: 930, y: 288, frame: 'rocks', scale: 0.72, depth: 2, grounded: true },
      { x: 2100, y: 288, frame: 'log-round', scale: 0.84, depth: 2, grounded: true },
      { x: 2700, y: 288, frame: 'log-long', scale: 0.88, depth: 2, grounded: true }
    ],
    goal: { x: 3050, y: 288 }
  }
];

// Future levels can extend this data with moving platforms, power-ups,
// hidden collectibles, boss encounters, and Tiled map metadata.
