# Crazy Gabi

Crazy Gabi is a browser-playable retro 2D platformer built with TypeScript, Phaser 3, and Vite.

This version is a clean rebuild: Gabi starts at her house in bright daylight, heads into Acorn Wood, collects fruit and coins, avoids mushrooms, and survives falling acorns on the way to the forest gate.

## Local Development

```bash
npm install
npm run dev
```

Open the dev URL printed in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The build outputs static files to `dist/`. The post-build step also copies `index.html`, `assets/`, and `CNAME` to the repository root so the project can work with either GitHub Actions Pages deployment or branch-root Pages hosting.

## GitHub Pages

The repository includes `.github/workflows/pages.yml`. On every push to `main`, GitHub Actions runs:

```bash
npm ci
npm run build
```

Then it deploys the `dist/` folder to GitHub Pages. The custom domain is configured through `CNAME` and `public/CNAME`:

```text
crazygabi.bekulov.com
```

## Controls

- Move: Arrow keys or A/D
- Jump: Up, W, or Space
- Restart after win/loss: R
- Touch controls are shown on screen for mobile and testing.

## Asset Policy

No Crazy Sue assets, music, levels, UI, or exact mechanics are copied. The included sprites are CC0 assets credited in `ASSETS.md`; the code is structured so art, levels, enemies, and mechanics can be swapped later.
