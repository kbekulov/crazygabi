# Changelog

## v0.60.1

- Grouped the level selection menu into Episode 1 and Episode 2 sections.

## v0.60.0

- Replaced mobile swipe controls with an invisible left-side joystick.
- Added right-side mobile tap zones for item actions and Shift attacks.

## v0.59.7

- Made dash disabled by default for new players.
- Shrank the Level 6 flower cooldown icon.
- Added a cat favicon.

## v0.59.6

- Lowered the Level 6 exit door again.
- Enlarged the main menu petals again.

## v0.59.5

- Lowered the Level 6 exit door slightly.

## v0.59.4

- Made main menu petals larger after the menu redesign.
- Made hard-mode falling acorns and bricks respawn Gabi like other non-boss damage.
- Shortened the key pickup delay after discovery.

## v0.59.3

- Removed the cat from the main menu scene.
- Made menu petals smaller and kept them pixelated.
- Restyled submenu Back buttons as hollow buttons and hid panel scrollbars.
- Raised the Level 6 exit door to match the other door placements.

## v0.59.2

- Blended overlapping Level 2 lantern light circles into a single darkness mask.
- Polished the new main menu by removing Gabi, shrinking petals, restoring button styling, and restyling submenu panels.
- Enlarged the Level 6 flower cooldown icon.


## v0.59.0

- Rebuilt the main menu around the new full-screen background art.
- Added enlarged idle Gabi and cat animations to the menu.
- Added drifting flower petals across the menu scene.
- Kept Level 2 static lantern glow while returning Gabi's carried lantern to its cleaner light circle.

## v0.58.0

- Added hard-mode enemy damage respawns on non-boss levels.
- Added Level 2 night lanterns with circular light pockets and sparkles.
- Updated flower cooldown icons and BGM metadata.

## v0.57.10

- Recreated the cat NPC safely when repeated level switches remove its physics body.
- Cleared stale key and door references during level teardown.

## v0.57.9

- Preserved spritesheet textures that back global animations during level cache cleanup.

## v0.57.8

- Hardened level switching cleanup to prevent stale timers, tweens, loader callbacks, and audio objects from touching old scenes.
- Retired previous level-only cached assets before loading the next level to reduce memory pressure during long play sessions.
- Added the flower cooldown UI icon for Level 6's petal attack.

## v0.57.7

- Added runtime diagnostics for intermittent level-loading crashes and freezes.

## v0.57.6

- Fixed Level 6 using the Level 1 soundtrack by restoring the correct music mapping.

## v0.57.5

- Added the Level 6 soundtrack and wired it into Level 6 and the Music Box.

## v0.57.4

- Reworked Level 6 petal attacks into a larger wind-chaos swarm with varied rotation and density.

## v0.57.3

- Added a wing pickup to Level 6 so its vertical route can be completed.
- Reduced flower petal visuals and made bush scatter particles smaller.

## v0.57.2

- Reworked Level 6 garden placement to use the established garden layering and height rules.
- Spread garden bushes and props across more Level 6 platforms.

## v0.57.1

- Fixed Level 6's starting spawn so Gabi lands safely on the opening platform.
- Added a spawn snap guard to keep level starts aligned above nearby platforms.

## v0.57.0

- Added a Level 6 botanical garden route with a flower pickup and no key requirement.
- Added flower-petal Shift attacks after the flower is collected.
- Added ambient flower petals, garden decorations, magpies, and layered light beams to Level 6.
- Added Settings controls to the in-game level-select menu, including a saved Dash toggle.

## v0.56.9

- Mirrored Gabi's chain-climb sway direction.
- Kept garden benches, arcs, fountains, and lanterns behind characters while preserving their higher platform placement.

## v0.56.8

- Added a dense rooftop garden section after Level 4's elevator ascent.
- Made Gabi's climb pose sway with the chain while staying anchored to it.

## v0.56.7

- Fixed Gabi's chain-climb facing and added a chain grab sound effect.
- Added a short pickup delay after revealed keys appear.
- Adjusted the Level 5 boss intro camera to focus on BU's head.

## v0.56.6

- Made garden-hidden keys reveal only after Gabi passes through the hiding bush.
- Scaled garden decoration density to platform size and kept nearby platforms as lighter breadcrumb hints.
- Strengthened garden light beams with layered shafts and brighter spotlight impacts.

## v0.56.5

- Moved the Level 1 key garden to the neighboring left platform.
- Kept keys above all world objects and lanterns above garden bushes.
- Adjusted foreground garden bushes to sit lower while background bushes stay higher.
- Spread garden hints across more nearby platforms around key locations.

## v0.56.4

- Reworked key gardens with richer layered light beams, sparkles, and impact glows.
- Replaced Level 1-3 key haystacks with interactive garden bushes and green-blue scatter effects.
- Limited garden decoration types by level so underground routes use bushes and lanterns while city/cathedral routes can use larger garden pieces.

## v0.56.3

- Replaced the generated key-garden placeholders with the real garden sprites from `public/assets/environment/garden`.
- Added the garden PNGs to level loading so each key location can use the proper decorative assets.

## v0.56.2

- Restored the v55-style level loading flow after the later loading/watchdog changes caused freezes.
- Added small garden-style key indicators with three-direction light beams near key locations.
- Kept the extra later-route platforms, pickups, hearts, and enemies for Levels 3 and 5.

## v0.56.1

- Added a gameplay-loop recovery guard so update errors do not leave the game frozen while music continues.
- Added a runtime watchdog that reloads the current level if successful gameplay ticks stop during play.
- Fixed stale music restore state after returning to the browser tab.

## v0.56.0

- Reworked level transitions to release previous level assets before loading the next route.
- Added a safer cached-load handoff to reduce stuck starts after several level changes.
- Added more platforms, pickups, hearts, and enemies to the later parts of Levels 3 and 5.

## v0.55.42

- Added more and longer hanging chains to the later Level 3 platforming section on Easy difficulty.

## v0.55.41

- Added haystacks beneath the brass key locations in Levels 1, 2, and 3.

## v0.55.40

- Made hanging chains thinner and lowered their root attachment point into the platform edge.
- Let Gabi pump chain swing with left/right movement while climbing.
- Fixed bottom-chain release so climbing down past the end drops Gabi off reliably.

## v0.55.39

- Let Gabi reliably jump or drop off hanging chains without immediately re-grabbing the same chain.
- Added stronger directional chain swing when Gabi catches a chain from a jump or dash.

## v0.55.38

- Made Gabi release immediately after climbing past the bottom of a chain.
- Added automatic chain grabbing when Gabi jumps or dashes into any part of a chain.
- Centered Gabi's climbing sprite on the chain while keeping left/right directional control.

## v0.55.37

- Enlarged Gabi's climbing sprite on chains.
- Fixed chain climbing so Gabi can move up and down manually.
- Added side switching and directional chain jump-offs.
- Moved chain anchors closer to platform edges for cleaner platform dismounts.

## v0.55.36

- Added Gabi's chain climbing sprite and animation.
- Made hanging chains climbable with up/down movement, jump dismounts, and top platform dismounts.

## v0.55.35

- Updated the main chain link art.
- Moved hanging chain anchors toward platform edges so they can later support climbing routes.

## v0.55.34

- Added decorative hanging chains for Level 3 and Level 5 platforms.
- Built chains from root and link sprites with varied lengths and joint-based sway.

## v0.55.33

- Removed the main menu sound recommendation line.
- Expanded Level 5 quest goals to include the basket, boss, key, enemies, and leap/bird objectives.
- Retuned Easy and Hard difficulty around timers, hazard frequency, enemy density, recovery hearts, and BU boss attack pressure.

## v0.55.32

- Fixed BU's thrown crate so it spins around its center while flying toward the platform.
## v0.55.31

- Added spacing between BU's hand crush and suitcase crate attacks so patterns do not overlap.
- Changed BU's thrown crate into a longer spinning ballistic arc from distant scale to full size.
- Let bird attack sweep through and defeat multiple enemies along its flight path.

## v0.55.30

- Reduced kill impact sound volume and raised the Level 5 boss music volume.
- Added fixed heart pickups across Level 5 boss platforms.
- Made retracting giant hands briefly carry Gabi upward before shaking her off.
- Moved enemy spawning from giant hand impacts to BU's thrown suitcase box attack.
- Added thrown box debris and a chance for stray hearts to emerge from broken boxes.

## v0.55.29

- Added elevated Level 5 shelter platforms for avoiding BU's hand attacks.
- Made giant hand impact debris fly higher, fall back down, and stay visible until it leaves.
- Added a chance for giant hand impacts to drop a heart on the lowest platform.
- Made giant hand impacts spawn regular enemies on the lowest platform.
- Changed BU defeat to remove the boss, reveal a key, then reveal an exit door after the key is picked up.

## v0.55.28

- Moved BU's giant hand layer below Gabi and the cat while keeping it above the platforms.
- Reduced giant hand impact sound volume.
- Let bird attack target landed giant hands through their acorn hitbox.
- Reduced giant hand boss damage to 1% per successful hit.

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
