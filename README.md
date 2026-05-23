# Crazy Gabi

An original Phaser platformer prototype about Gabi: a stylish heroine with long brown hair, fair skin, and a moody city route full of stone platforms, fences, coins, robots, keys, doors, falling acorns, and level-specific abilities.

The game currently has two playable levels. Level 1 introduces the main traversal loop: collect coins, unlock double jump, grab the key, avoid hazards, and reach the exit door. Level 2 reuses the current asset set as a harder testing stage with denser platforming, more acorns, a unique soundtrack, and the first `Enter` action ability: throwing acorns at robots.

## Run

```sh
node scripts/serve.mjs
```

Then open [http://localhost:4173](http://localhost:4173).

You can also use:

```sh
npm run dev
```

## Controls

- Arrow keys or `A` / `D`: move
- Up arrow, `W`, or `Space`: jump, then jump again after collecting the blue double-jump pickup
- `Enter`: action button
- `Enter` in Level 2: throw an acorn in a ballistic arc; thrown acorns destroy robots
- `R`: restart the level
- `0`: open the cheat level-select menu for testing

## Current Features

- Two-level progression with player confirmation before each level starts
- Optional two-panel manga intro support per level
- Per-level music: Level 1 uses `bgm.mp3`, Level 2 uses `bgm2.mp3`
- Per-level ability gating, currently used for Level 2 acorn throwing
- Falling acorn hazards that continue dropping independently of player position
- Moving platforms, coins, double-jump pickup, key, exit door, robots, water, house, parallax city background, and DOM-based HUD
- Cheat menu for quickly loading Level 1 or Level 2 during development

## Assets

The remaining runtime assets are user-created or user-directed by Kiril Bekulov using tools such as ChatGPT, Gemini, Photoshop, and Suno. The visual direction, character design, environment style, item language, and music choices are dictated by Kiril's ideas.

See `ASSET_CREDITS.md` and `docs/character.md` for more context.

Optional manga intro frames live under `public/assets/story/`. Each level can provide `frame-1.png` and `frame-2.png`; if both exist, the game shows them before the start button. If either is missing, the game skips the manga intro for that level.

## Tech Notes

This is built as a static Phaser game using a pinned Phaser CDN script, so it does not require `npm install` for runtime dependencies. The local server in `scripts/serve.mjs` is intentionally small and only serves the static project.
