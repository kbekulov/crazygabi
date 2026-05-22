# Crazy Gabi

A small original Phaser platformer prototype with a moody city backdrop: jump across stone platforms, gather coins, dodge or stomp wandering troublemakers, avoid falling acorns, find the key, and reach the door.

## Run

```sh
node scripts/serve.mjs
```

Then open [http://localhost:4173](http://localhost:4173).

## Controls

- Arrow keys or `A` / `D`: move
- Up arrow, `W`, or `Space`: jump, then jump again after collecting the blue double-jump pickup
- `R`: restart the level

## Notes

This is built as a static Phaser game using a pinned Phaser CDN script, so it does not require `npm install`. Gabi's character direction lives in `docs/character.md`, and third-party asset sources are tracked in `ASSET_CREDITS.md`.
