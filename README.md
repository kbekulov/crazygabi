# Crazy Gabi

Crazy Gabi is a small browser-playable retro 2D platformer inspired by the feel of early 1990s European Amiga/DOS platform games. It uses original generated placeholder graphics only, with a code structure intended for future sprites, levels, enemies, music, and mechanics.

## Tech Stack

- Phaser 3.90
- TypeScript
- Vite
- Static GitHub Pages compatible build

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
- Action placeholder: `K` or `Z`
- Touch/mobile: use the on-screen left, right, jump, and action buttons

## GitHub Pages Deployment

The Vite config uses relative production assets (`base: './'`), so the built files work correctly from the GitHub Pages repository path:

```text
https://github.com/kbekulov/crazygabi
```

To deploy with GitHub Pages:

1. Push the project to GitHub.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set the source to **GitHub Actions**.
5. The included workflow builds the game and publishes `dist/`.

The custom domain is included in `public/CNAME`, so Vite copies it into `dist/CNAME` during deployment:

```text
crazygabi.bekulov.com
```

The build also copies the compiled game into the repository root. That fallback keeps the game playable if GitHub Pages is temporarily configured as **Deploy from branch / root** instead of **GitHub Actions**.

## Expansion Notes

The current version includes one complete playable test level, generated placeholder pixel art, a menu, fail/restart flow, collectibles, hazards, one walking enemy type, and an exit portal. Future work can add:

- More levels in `src/levels/levelData.ts`
- Better enemy AI in `src/entities/Enemy.ts`
- Moving platforms and power-ups in new entity/system modules
- Boss fights, secrets, and save progress in `src/systems/GameState.ts`
- Real sprites, animations, audio, and Tiled integration through the preload/level pipeline
