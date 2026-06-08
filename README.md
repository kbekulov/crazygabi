# Crazy Gabi

An original Phaser platformer about Gabi: a stylish heroine with long brown hair, fair skin, and a habit of surviving extremely unreasonable city architecture.

The project has grown from a Crazy Sue-inspired prototype into a story-driven side-scroller with manga intros, level-specific abilities, character dialogue, custom music, a main menu, difficulty settings, and a steadily expanding gothic/city art direction led by Kiril.

## Run

```sh
node scripts/serve.mjs
```

Then open [http://localhost:4173](http://localhost:4173).

You can also use:

```sh
npm run dev
```

The game is served as a static Phaser app. It does not require `npm install` for normal local play.

## Current Levels

- **Level 1**: City platforming introduction with coins, double jump, falling acorns, a key, an exit door, a starting house, and the interactive level-select billboard.
- **Level 2**: Dark tunnel route built around lantern pickup, circular visibility, an old-lady guide NPC, shadow ghosts, and cautious navigation rather than double-jump difficulty.
- **Level 3**: Underground cat-guided route with earthquakes, falling bricks, light beams, acorn basket pickup, throwable acorns, enemy-heavy passages, and a key reveal led by the grey cat.
- **Level 4**: Cathedral/city route with the assisting cat, bird-command attack, flocks of birds, light beams, ruins, a key-gated gazebo elevator, vertical credits during ascent, and Mr Magpie after the elevator.
- **Level 5**: Early placeholder story beat with wide manga panels, wind ambience, autumn leaves, Mr Magpie's leap instruction, and a glide-focused descent concept.

## Controls

- Arrow keys or `A` / `D`: move
- Up arrow, `W`, or `Space`: jump
- Jump again after collecting wings: double jump
- Hold direction while falling after a wing jump: glide
- `Enter`: item/action button
- `Shift`: bird-command attack when that ability is available
- `R`: restart the current level
- `0` or `Esc`: open the testing level-select menu
- Number keys on the level-select screen: jump directly to that level
- `Enter` on a level start screen: start the level

On mobile, swiping left/right moves Gabi, swiping upward jumps, and a second upward stroke can trigger the double jump. A second finger tap can trigger the item/action button.

## Menus And Progression

- The main menu includes New Game, Select Level, Music Box, Credits, and a difficulty toggle.
- Level assets load per level instead of all at once, so future levels can scale without making first launch heavy.
- Manga intro panels are optional per level. If a level provides two frames under `public/assets/story/level-X/`, the game shows them after the player starts the level.
- Manga scenes can be skipped only after that level's story animation has already been seen once.
- The Music Box loads tracks only when selected.
- Best score and difficulty are stored locally in browser cookies.
- Game Over and final clear screens show the player's accumulated score.

## Difficulty

The main menu supports **Easy** and **Hard**.

- Easy keeps fewer enemies and falling hazards.
- Easy halves score rewards.
- Hard is the default full-density version.

## Gameplay Systems

- Compact in-game HUD with hearts, timer, coins, keys, equipped item, score, and contextual action indicators.
- Score accumulates across sequential play. Starting from a later level or skipping with the level-select menu resets the run score.
- Coins, keys, wings, hearts, lanterns, acorn baskets, doors, robots, moving platforms, water, parallax, walls, fences, and level-specific props are all handled through level data.
- Enemy deaths include a short shake, red flash, and fade animation.
- Enemies can drop hearts, with a maximum carry limit of 9 lives.
- The grey cat can guide Gabi toward objectives in cat-led levels.
- Level 4 bird attack has a cooldown icon and calls a flock toward visible enemies.
- Level 5 adds decorative wind-blown autumn leaves using a three-frame leaf sprite.

## Assets

The remaining runtime assets are user-created or user-directed by Kiril Bekulov using tools such as ChatGPT, Gemini, Photoshop, Audacity, and Suno. The visual direction, character design, environment style, item language, music choices, and overall art direction are dictated by Kiril's ideas.

See `ASSET_CREDITS.md` and `docs/character.md` for more context.

## Tech Notes

- Built with Phaser and plain JavaScript.
- Uses a pinned Phaser CDN script.
- Uses DOM overlays for menus, HUD, prompts, loading screens, credits, manga panels, and game-over screens.
- `scripts/serve.mjs` is a small local static server.
- Runtime assets live under `public/assets/`.
- Level definitions and most gameplay wiring currently live in `src/main.js`.
