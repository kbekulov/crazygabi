# Crazy Gabi

Crazy Gabi is a browser-playable retro 2D platformer built with Phaser, TypeScript, and Vite. This version starts at Gabi's house and pushes into a moody forest where mushrooms patrol the path and acorns fall from the canopy.

The game is inspired by the general feel of early 1990s European platform games, but it does not copy or reproduce Crazy Sue assets, levels, music, UI, names, or exact mechanics.

## Tech Stack

- Phaser 3.90
- TypeScript
- Vite
- Static GitHub Pages build

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Controls

- Move left/right: `A` / `D` or arrow keys
- Jump: `W`, up arrow, or space
- Touch/mobile: on-screen left, right, jump, and action buttons
- Restart after win/loss: `R`

## Assets

The game uses CC0 pixel-art assets from OpenGameArt. See `ASSETS.md` for source links, authors, and license notes.

## GitHub Pages Deployment

The Vite config uses relative production assets, so the build works from the custom domain and from the repository path. The included GitHub Actions workflow builds and deploys `dist/`.

The custom domain is included in `public/CNAME`:

```text
crazygabi.bekulov.com
```

The build also copies compiled game files into the repository root. That fallback keeps the game playable if GitHub Pages is configured as **Deploy from branch / root**.

## Expansion Hooks

- Add more levels in `src/levels/levelData.ts`
- Add richer enemy AI through new entity classes beside `ForestMushroom`
- Add moving platforms, secrets, boss fights, power-ups, and save progress as systems
- Replace or extend sprite sheets in `public/assets/sprites`
