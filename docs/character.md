# Gabi Character Direction

Gabi is the player character and should consistently read as Kiril Bekulov's original heroine:

- Long brown hair
- Fair skin
- Stylish, put-together outfit
- Confident, capable, and a little playful
- Bright retro platformer readability: clear silhouette, strong contrast, expressive motion, and readable poses at gameplay scale

## Runtime Sprites

The current implementation uses `public/assets/character/main_char_sprite.png` for Gabi.

The sheet is arranged horizontally with six 238px frames:

- Frames 0-1: running right
- Frames 2-3: jumping right
- Frames 4-5: standing / idle right

The Phaser runtime flips the sprite left when Gabi moves left, so future sprite updates only need right-facing frames unless a later animation specifically needs custom left-facing art.

`public/assets/character/main_char_sprite_with_double_jump.png` mirrors the same layout and is used only for the winged secondary jump animation after Gabi has collected the double-jump item.

## Gameplay Readability

Gabi should remain readable against the current moody city background and stone platform art. Avoid changes that make her blend into the environment, especially in dark areas or when she overlaps fences, water, robots, coins, or falling acorns.

Important animation states:

- Idle / standing
- Running
- Jumping
- Winged double jump
- Hurt / stopped state after final death

## Action Direction

`Enter` is the general action button. Current Level 2 action behavior lets Gabi throw acorns in a ballistic arc. Future action animations should still preserve her core identity: long brown hair, fair skin, stylish outfit, and confident movement.

## Art Ownership

The current character direction is user-created and user-directed by Kiril Bekulov. Future sprite edits should follow Kiril's visual direction rather than imitate an external character or asset pack.
