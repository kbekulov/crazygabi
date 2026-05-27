# Story Frame Assets

Each level can optionally provide two manga intro frames.

Expected filenames:

- `level-1/frame_1.png`
- `level-1/frame_2.png`
- `level-2/frame_1.png`
- `level-2/frame_2.png`
- `level-3/frame_1.png`
- `level-3/frame_2.png`

If both frames exist for a level, the game shows the normal Start prompt first. After the player presses Start, the level music begins, the manga frames animate in sequentially, linger briefly, then fly away as gameplay starts. If either frame is missing, the game skips the manga intro after Start and begins gameplay directly.

Tall frames are shown side by side. Wide frames are stacked vertically.
