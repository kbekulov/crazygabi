# Changelog

## v0.55.27

- Reworked BU's giant hand into a telegraphed boss attack with warning motion, impact sounds, debris, a punish window, and sky retraction.
- Made BU's health drop only when Gabi damages the landed hand.
- Added a Level 5 acorn basket so Gabi can attack the hand with throws.
- Focused the boss intro zoom on BU's head.
- Narrowed the giant hand's direct harm zone so near misses are fairer.

## v0.55.26

- Added BU's giant hand crush attack after the boss reveal.
- Changed hit damage to continue gameplay with a brief Gabi flicker instead of restarting the level.
- Moved BU's health bar to the bottom of the screen and renamed the label to BU (Boss).

## v0.55.25

- Nudged BU's slipped crown state slightly left.

## v0.55.24

- Increased BU's slipped crown clockwise rotation while keeping the resting crown angle unchanged.

## v0.55.23

- Shifted BU's slipped crown state rightward and upward while keeping the resting crown placement unchanged.

## v0.55.22

- Nudged BU's crown slightly left and downward for a better fit on the head.

## v0.55.21

- Shifted BU's crown rightward on the head.
- Increased the free-hand upper-arm rotation during the crown-fix motion.
- Doubled the free-hand rotation around its anchor during the crown-fix motion.
- Kept the Level 5 boss soundtrack active after returning to the browser tab.
- Updated Gabi's dash sprite asset.

## v0.55.20

- Lowered BU's crown from the previous high placement.
- Made the crown-fix animation occur more frequently for visual debugging.
- Added extra lower-arm rotation to the suitcase attack so the swing feels less stiff.
- Increased the free-hand upper-arm rotation during the crown-fix motion.
- Moved BU's lower-leg layers behind the upper-leg layers.

## v0.55.19

- Raised BU's crown substantially higher above the head.
- Slowed the suitcase-hand attack swing so it feels heavier while adding more hand rotation.
- Reworked the open-hand crown-fix pose around explicit relative rotations from the idle arm pose.

## v0.55.18

- Raised BU's crown baseline and made the crown-fix animation use a more humanoid folded-arm reach.
- Increased the suitcase-hand attack rotation for a stronger upward swing.
- Moved the BU label below the custom boss healthbar.

## v0.55.17

- Connected the colossus head to the torso neck using explicit PNG anchor coordinates.
- Corrected the colossus feet to use their native texture orientation.
- Added a stronger suitcase-arm swing, a slight suitcase-hand counter-rotation, and an occasional crown slip/fix animation while BU walks.
- Replaced the BU boss health display with the custom full and empty healthbar artwork.
- Made Level 5 completion wait for BU's health to drain to zero after the howl reveal.

## v0.55.16

- Extended the Level 5 boss arena with more ground, platform beats, and coin placements.
- Replaced the colossus closed hand and separate suitcase with the combined suitcase-hand texture.
- Increased the colossus suitcase-arm windup into a full upward swing while keeping idle arm motion subtle.
- Restyled the BU boss health bar with rounded corners, centered name text, and a textured red fill.
- Updated the colossus foot anchor to the new explicit PNG joint coordinate.

## v0.55.15

- Added walking-aware colossus arm sway so idle motion stays subtle and walking keeps the stronger arm movement.
- Added an occasional idle suitcase-arm swing for the colossus as a future attack trigger.
- Updated the colossus foot anchor to the new explicit PNG joint coordinate.
- Included the updated colossus hand and torso assets.

## v0.55.14

- Rebuilt the Level 5 colossus PNG rig with explicit humanoid shoulder, arm, hand, pelvis, and suitcase anchors.

## v0.55.13

- Exaggerated the Level 5 colossus arm sway to make the PNG limb anchors easier to verify.

## v0.55.12

- Restored the Level 5 colossus PNG rig to vertical limb joints with alpha-aware top pivots.

## v0.55.11

- Rebuilt the Level 5 colossus PNG limb math around right-facing bone axes and visible alpha-bound pivots.

## v0.55.10

- Reworked the Level 5 colossus arm and leg anchors to use texture-based limb spans.
- Moved the colossus pelvis behind the torso in the body draw order.

## v0.55.9

- Tuned the Level 5 colossus gait so the pelvis sits higher, the suitcase stays closer to the hand, and the arms sway while walking.
- Replaced the moving colossus health bar with a fixed boss health bar named BU.
- Made Level 5 use an infinite timer instead of counting down.

## v0.55.8

- Reduced the Level 5 colossus head and crown size and shifted them back over the neck.

## v0.55.7

- Reworked the Level 5 colossus arm pose so lower arms and hands stay attached beneath the shoulders.

## v0.55.6

- Reworked the Level 5 colossus PNG rig so arms and legs use connected joint anchors.
- Reduced the colossus render scale and kept all colossus body parts opaque.
- Faded the park front parallax during the colossus howl reveal.
- Added a persistent clamped boss health bar after the howl reveal.
- Kept ambient birds above the colossus layer while still allowing them behind the front parallax.

## v0.55.5

- Reframed the Level 5 colossus so it is opaque and tall enough to reach the top of the screen.
- Tightened dive triggers so Gabi must launch toward the haystack with horizontal and vertical motion.
- Added an automatic dive launch when Gabi walks off an approved dive ledge.

## v0.55.4

- Rescaled and re-grounded the Level 5 PNG colossus rig so the full body reads in the distant background.
- Simplified the colossus body layering into far limbs, core body, and near limbs.
- Flipped the entire colossus rig by movement direction instead of mirroring individual body parts.

## v0.55.3

- Rebuilt the Level 5 colossus as a PNG body-part rig instead of the placeholder Spine rig.
- Moved the colossus through a parallax-plane coordinate system so its X position is derived from the background layer offset rather than Gabi's camera center.
- Updated the colossus seek behavior to chase Gabi's world position after converting it into the parallax plane.

## v0.55.2

- Reworked the Level 5 colossus into a Gabi-seeking horizon actor with capped movement instead of camera-derived drift.
- Increased the Level 5 boss music and colossus howl volumes.

## v0.55.1

- Removed camera scroll from the Level 5 distant colossus movement so Gabi running no longer speeds up or reverses its drift.

## v0.55.0

- Added a Level 5 midpoint colossus reveal with a zoom-in, howl sound, and boss music transition.
- Reworked the distant colossus position to stay locked to parallax texture space while Gabi moves.
- Added quiet colossus footstep sounds to the existing footstep screen shake.
- Kept the cat visually below Gabi.

## v0.54.3

- Re-aligned the Level 5 distant colossus with the scaled parallax layer so its movement stays consistent against background details while Gabi moves.

## v0.54.2

- Decoupled the Level 5 distant colossus drift from Gabi's camera movement so it no longer accelerates when the player runs.

## v0.54.1

- Reduced Gabi's dash distance and added a small white dust puff at her feet when the dash begins.

## v0.54.0

- Added a double-tap left/right dash mechanic for Gabi using the new dash sprite and the random double-jump sound pool.
- Strengthened the Level 5 warm haze gradient above the distant colossus.

## v0.53.6

- Added a warm bottom-up haze gradient above the Level 5 colossus and below the park front parallax layer.

## v0.53.5

- Anchored the placeholder colossus to the Level 5 parallax movement axis so it no longer appears stuck to Gabi's camera position.

## v0.53.4

- Fixed the placeholder colossus rig's vertical skeleton layout so its labeled body parts no longer render upside down.

## v0.53.3

- Added the Level 5 park foreground parallax layer so the distant colossus can render between background and front trees.

## v0.53.2

- Rebuilt the placeholder colossus skeleton into an upright body layout so the labeled head, torso, pelvis, arms, and legs read in the correct places.

## v0.53.1

- Added readable labels to the placeholder colossus body parts so the Spine rig can be judged and debugged more easily.

## v0.53.0

- Replaced the Level 5 rectangle colossus prototype with a Spine-backed skeletal placeholder.
- Added placeholder Spine skeleton, atlas, and texture assets for future colossus body-part art.
- Vendored the Spine Phaser runtime and license notice so the boss prototype does not depend on a CDN during play.

## v0.52.2

- Rebuilt the Level 5 colossus limbs as anchored joint-to-joint segments.

## v0.52.1

- Connected the Level 5 colossus prototype with visible limb joints and a proper neck/head link.

## v0.52.0

- Added a procedural distant colossus prototype to Level 5.
- Added anchor-based limb animation and footstep camera tremors for the boss.

## v0.51.0

- Added a main menu Settings screen.
- Added saved toggles for Music and Sound Effects.

## v0.50.2

- Moved the version label onto the main menu image without shifting the menu card.

## v0.50.1

- Kept the main menu card centered while showing the version below it.

## v0.50.0 - Current baseline

- Added version tracking to the browser title and main menu.
- Added a readable speech-bubble text layer for in-game dialogue.
- Kept the current five-level game state as the first tracked version baseline.
