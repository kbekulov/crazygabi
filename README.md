# Crazy Gabi

An original Phaser platformer prototype about Gabi: a stylish heroine with long brown hair, fair skin, and a moody city route full of stone platforms, fences, coins, robots, keys, doors, falling acorns, and level-specific abilities.

The game currently has three playable levels. Level 1 introduces the main traversal loop: collect coins, unlock double jump, grab the key, avoid hazards, and reach the exit door. Level 2 sends lantern-carrying Gabi into a dark tunnel maze with a circular pool of light around her. Level 3 reuses the underground asset set as a harder stage with denser platforming, more falling hazards, a strange grey cat NPC to chase, and the first `Enter` action ability: throwing acorns at robots.

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
- `Enter` in Level 3: throw an acorn in a ballistic arc after collecting the acorn basket; thrown acorns destroy robots
- `R`: restart the level
- `0`: open the cheat level-select menu for testing

## Current Features

- Three-level progression with player confirmation before each level starts
- Optional two-panel manga intro support per level after the player presses Start
- Per-level music: Level 1 uses `bgm.mp3`; the current underground levels use `bgm2.mp3`
- Per-level player sprite support, currently used for Level 2 lantern Gabi
- Level 2 darkness overlay with a circular lantern reveal around the player
- Per-level ability gating, currently used for Level 3 acorn throwing
- Level 3 grey cat NPC with run, jump, landing, and idle animations
- Falling acorn hazards that continue dropping independently of player position
- Moving platforms, coins, double-jump pickup, key, exit door, robots, water, house, per-level parallax backgrounds, and DOM-based HUD
- Cheat menu for quickly loading Level 1, Level 2, or Level 3 during development

## Assets

The remaining runtime assets are user-created or user-directed by Kiril Bekulov using tools such as ChatGPT, Gemini, Photoshop, and Suno. The visual direction, character design, environment style, item language, and music choices are dictated by Kiril's ideas.

See `ASSET_CREDITS.md` and `docs/character.md` for more context.

Optional manga intro frames live under `public/assets/story/`. Each level can provide `frame_1.png` and `frame_2.png`; if both exist, the game shows them after the player presses Start, lets them linger briefly, then begins gameplay. If either is missing, the game skips the manga intro for that level.

## Tech Notes

This is built as a static Phaser game using a pinned Phaser CDN script, so it does not require `npm install` for runtime dependencies. The local server in `scripts/serve.mjs` is intentionally small and only serves the static project.
