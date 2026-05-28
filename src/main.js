const TILE = 32;
const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const PLAY_HEIGHT = VIEW_HEIGHT;
const TIME_LIMIT = 220;
const GABI_FRAME_WIDTH = 238;
const GABI_FRAME_HEIGHT = 238;
const GABI_SCALE = 0.34;
const PLATFORM_FRAME_WIDTH = 238;
const PLATFORM_FRAME_HEIGHT = 238;
const PLATFORM_SCALE = 0.28;
const PLATFORM_SEGMENT_WIDTH = PLATFORM_FRAME_WIDTH * PLATFORM_SCALE;
const PLATFORM_SEGMENT_HEIGHT = PLATFORM_FRAME_HEIGHT * PLATFORM_SCALE;
const PLATFORM_Y_OFFSET = 22;
const FENCE_Y_OFFSET = -40;
const PLATFORM_DEPTH = 2;
const FENCE_DEPTH = 1;
const WATER_DEPTH = -1;
const DARKNESS_DEPTH = 30;
const WATER_SCALE = 0.32;
const WATER_OVERLAP = 0.25;
const WATER_SPEED = 6;
const WATER_Y_OFFSET = 18;
const STARTING_HOUSE_DEPTH = 0;
const STARTING_HOUSE_SCALE = 0.48;
const STARTING_BILLBOARD_DEPTH = FENCE_DEPTH + 0.5;
const STARTING_BILLBOARD_SCALE = 0.36;
const BILLBOARD_INTERACT_DISTANCE = 92;
const ITEM_DEPTH = 8;
const ITEM_SCALE = 0.32;
const BASKET_SCALE = 0.17;
const LANTERN_SCALE = 0.23;
const HEART_SCALE = 0.26;
const HEART_DROP_CHANCE = 0.28;
const HEART_PICKUP_DELAY = 620;
const MAX_HEART_DROPS_PER_LEVEL = 2;
const DOOR_DEPTH = 3;
const DOOR_SCALE = 0.34;
const ACORN_SCALE = 0.36;
const BRICK_SCALE = 0.27;
const FALLING_OBJECT_SPAWN_OFFSET = 140;
const THROWN_ACORN_MAX_BOUNCES = 3;
const ROBOT_FRAME_WIDTH = 238;
const ROBOT_FRAME_HEIGHT = 238;
const ROBOT_SCALE = 0.22;
const OLD_LADY_FRAME_WIDTH = 238;
const OLD_LADY_FRAME_HEIGHT = 238;
const OLD_LADY_SCALE = 0.27;
const CAT_FRAME_WIDTH = 238;
const CAT_FRAME_HEIGHT = 238;
const CAT_SCALE = 0.2;
const CAT_SAFE_DISTANCE = 210;
const CAT_RUN_SPEED = 276;
const CAT_JUMP_SPEED = 545;
const CAT_SCREEN_MARGIN = 150;
const CAT_PLATFORM_Y = 48;
const CAT_GUIDE_PLATFORM_Y = Math.round((CAT_FRAME_HEIGHT * CAT_SCALE) / 2);
const CAT_AHEAD_TRIGGER_DISTANCE = 240;
const CAT_AHEAD_TARGET_STOPS = 1;
const CAT_ITEM_STOP_OFFSET = 70;
const CAT_GUIDE_RUN_PADDING = 12;
const CAT_START_OFFSET = 74;
const CAT_ROUTE_REPLAN_MS = 420;
const CAT_EDGE_TARGET_PADDING = 38;
const CAT_STUCK_SAMPLE_MS = 760;
const CAT_STUCK_DISTANCE = 18;
const CAT_RECOVERY_MS = 1250;
const CAT_RESCUE_MS = 2800;
const CAT_TRANSITION_TIMEOUT_MS = 2200;
const ENEMY_NAMES = [
  "PEP LVL 2",
  "ECDD Manual Case Handling",
  "GSI BI First Attempt",
  "PEP LVL 1",
  "GCR Upload from Email to Pharos"
];
const ASSET_VERSION = "20260528-pixelated-equipped-icon";
const STORY_ASSET_VERSION = "20260528-pixelated-equipped-icon";
let storyIntroRunId = 0;
let gameAssetsReady = false;
const pixelatedEquippedImages = {};
const storySeenLevels = new Set();
const LEVEL_WIDTH_TILES = 148;
const LEVEL_HEIGHT_TILES = 18;
const LEVELS = [
  {
    name: "Level 1",
    rows: createLevelOne(),
    timeLimit: TIME_LIMIT,
    soundtrack: "bgm-lv1",
    acornDelay: [450, 1800],
    acornPace: [185, 295],
    fallingHazard: "falling-acorn",
    enemySprite: "robot-lv1",
    actionAbility: null,
    storyFrames: [
      { key: "story-level-1-frame-1", src: "./public/assets/story/level-1/frame_1.png" },
      { key: "story-level-1-frame-2", src: "./public/assets/story/level-1/frame_2.png" }
    ],
    startSpeech: "Ugh... the world looks different...",
    showStartingHouse: true,
    doorYOffset: -30,
    parallax: "parallax-city",
    platformTexture: "platform-strip",
    fenceTexture: "platform-fence",
    introTitle: "Crazy Gabi",
    introCopy: "Collect the coins, grab the brass key, and reach the door before the city gets too wild."
  },
  {
    name: "Level 2",
    rows: createLevelTwo(),
    timeLimit: 205,
    soundtrack: "bgm-lv2",
    acornDelay: [900, 1600],
    acornPace: [210, 300],
    fallingHazard: "falling-brick",
    enemySprite: "robot-shadow-ghost-lv2",
    actionAbility: null,
    storyFrames: [
      { key: "story-level-2-frame-1", src: "./public/assets/story/level-2/frame_1.png" },
      { key: "story-level-2-frame-2", src: "./public/assets/story/level-2/frame_2.png" }
    ],
    startSpeech: "",
    showStartingHouse: false,
    showWater: false,
    doorYOffset: -30,
    parallax: "parallax-tunnel",
    platformTexture: "platform-underground",
    fenceTexture: "platform-fence-underground",
    lanternPlayerSheet: "gabi-lantern-sheet",
    lanternAnimationPrefix: "gabi-lantern",
    darkness: {
      alpha: 1,
      thresholdMode: "diagonal",
      lineStartX: 360,
      lineStartY: 96,
      lineEndX: 760,
      lineEndY: PLAY_HEIGHT + 260,
      thresholdFade: 72,
      requiresLantern: true,
      radius: 190,
      fringe: 76,
      yOffset: -18
    },
    oldLady: {
      column: 11,
      floorRow: 18,
      speech: "This tunnel is dark, young lady. Please pick up this lantern to proceed."
    },
    introCopy: "Find the lantern before the tunnel goes dark, then use its light to reach the brass key and escape before the shadows close in."
  },
  {
    name: "Level 3",
    rows: createLevelThree(),
    timeLimit: 260,
    soundtrack: "bgm-lv3",
    acornDelay: [260, 1100],
    acornPace: [245, 370],
    fallingHazard: "falling-brick",
    enemySprite: "robot-ghost-lv3",
    actionAbility: "throw-acorn",
    storyFrames: [
      { key: "story-level-3-frame-1", src: "./public/assets/story/level-3/frame_1.png" },
      { key: "story-level-3-frame-2", src: "./public/assets/story/level-3/frame_2.png" }
    ],
    startSpeech: "That cat looked strange...",
    showStartingHouse: false,
    catNpc: true,
    doorYOffset: -30,
    parallax: "parallax-underground",
    platformTexture: "platform-underground",
    fenceTexture: "platform-fence-underground",
    introCopy: "Follow the strange cat through the lower city, collect coins, claim the acorn basket, and fight your way to the brass key and exit."
  }
];

function createLevelRows(height = LEVEL_HEIGHT_TILES) {
  const rows = Array.from({ length: height }, () => Array(LEVEL_WIDTH_TILES).fill("."));
  const put = (row, column, value) => {
    if (rows[row] && column >= 0 && column < LEVEL_WIDTH_TILES) rows[row][column] = value;
  };
  const run = (row, start, length, value = "#") => {
    for (let index = 0; index < length; index += 1) put(row, start + index, value);
  };

  return { rows, put, run };
}

function createLevelOne() {
  const { rows, put, run } = createLevelRows(18);

  run(16, 0, 28);
  run(16, 34, 46);
  run(16, 88, 26);
  run(16, 123, 25);
  run(13, 42, 15);
  run(13, 67, 11);
  run(13, 91, 19);
  run(13, 121, 14);
  run(10, 36, 4, "=");
  run(10, 48, 11);
  run(10, 59, 4, "=");
  run(10, 82, 13);
  run(10, 113, 4, "=");
  run(10, 131, 11);
  run(7, 47, 12);
  run(7, 73, 4, "=");
  run(7, 90, 11);
  run(7, 120, 4, "=");
  run(4, 50, 10);
  run(4, 68, 4, "=");
  run(4, 86, 9);
  run(4, 112, 4, "=");
  run(4, 128, 9);
  run(2, 138, 6);

  [
    [14, 4, "p"],
    [15, 17, "g"],
    [15, 20, "g"],
    [15, 45, "j"],
    [12, 51, "g"],
    [12, 53, "g"],
    [12, 101, "m"],
    [9, 39, "m"],
    [9, 86, "g"],
    [9, 88, "g"],
    [9, 135, "g"],
    [6, 54, "g"],
    [6, 56, "g"],
    [6, 52, "m"],
    [6, 95, "m"],
    [3, 55, "g"],
    [3, 57, "g"],
    [3, 91, "g"],
    [3, 93, "g"],
    [1, 45, "a"],
    [1, 57, "a"],
    [1, 61, "a"],
    [1, 70, "a"],
    [1, 78, "a"],
    [1, 96, "a"],
    [1, 109, "a"],
    [1, 121, "a"],
    [1, 134, "a"],
    [1, 142, "k"],
    [9, 137, "d"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

function createLevelTwo() {
  const { rows, put, run } = createLevelRows(26);

  run(0, 0, LEVEL_WIDTH_TILES, "w");
  for (let row = 1; row < 25; row += 1) {
    run(row, 0, 2, "w");
    run(row, LEVEL_WIDTH_TILES - 2, 2, "w");
  }

  run(18, 2, 20);
  run(15, 20, 13);
  run(12, 8, 17);
  run(9, 26, 17);
  run(6, 14, 17);
  run(8, 34, 10);
  run(10, 45, 15);
  run(13, 60, 15);
  run(16, 76, 17);
  run(13, 92, 16);
  run(10, 108, 17);
  run(16, 124, 22);

  run(21, 10, 3, "w");
  run(22, 10, 3, "w");
  run(18, 34, 3, "w");
  run(19, 34, 3, "w");
  run(20, 64, 3, "w");
  run(21, 64, 3, "w");
  run(19, 100, 4, "w");
  run(20, 100, 4, "w");

  [
    [16, 4, "p"],
    [17, 9, "g"],
    [17, 19, "l"],
    [11, 13, "g"],
    [8, 34, "g"],
    [5, 20, "g"],
    [7, 39, "g"],
    [9, 52, "g"],
    [12, 67, "g"],
    [15, 84, "g"],
    [12, 101, "g"],
    [9, 116, "k"],
    [15, 132, "g"],
    [15, 140, "d"],
    [14, 29, "m"],
    [12, 69, "m"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

function createLevelThree() {
  const { rows, put, run } = createLevelRows(82);

  for (let row = 3; row <= 64; row += 1) {
    run(row, 0, 2, "w");
    run(row, 26, 3, "w");
  }

  run(63, 9, 31, "w");
  run(69, 0, 55);
  run(5, 2, 12);
  run(9, 16, 6);
  run(12, 7, 5);
  run(16, 18, 4);
  run(20, 3, 8);
  run(24, 14, 5);
  run(28, 8, 4);
  run(31, 18, 6);
  run(36, 5, 5);
  run(40, 14, 8);
  run(45, 3, 5);
  run(49, 17, 5);
  run(54, 8, 7);
  run(58, 18, 4);
  run(62, 5, 9);

  run(67, 33, 6);
  run(64, 42, 7);
  run(59, 48, 6);
  run(54, 39, 7);
  run(49, 51, 7);
  run(44, 42, 8);
  run(39, 55, 7);
  run(34, 47, 8);
  run(29, 61, 8);
  run(24, 68, 10);
  run(21, 84, 14);

  run(18, 101, 4, "=");
  run(18, 110, 12);
  run(21, 126, 10);
  run(17, 139, 9);
  run(14, 113, 10);
  run(11, 129, 10);
  run(8, 139, 9);
  run(5, 132, 16);

  [
    [3, 4, "p"],
    [8, 19, "g"],
    [11, 10, "g"],
    [15, 20, "g"],
    [19, 6, "g"],
    [23, 16, "g"],
    [27, 10, "g"],
    [30, 21, "g"],
    [35, 7, "g"],
    [39, 19, "g"],
    [44, 5, "g"],
    [48, 19, "g"],
    [53, 12, "g"],
    [57, 20, "g"],
    [61, 9, "g"],
    [68, 18, "b"],
    [67, 35, "m"],
    [66, 45, "j"],
    [63, 47, "g"],
    [58, 51, "g"],
    [53, 43, "g"],
    [48, 55, "g"],
    [43, 46, "g"],
    [38, 59, "g"],
    [33, 51, "g"],
    [28, 65, "g"],
    [23, 73, "g"],
    [20, 91, "g"],
    [17, 114, "m"],
    [17, 119, "m"],
    [20, 130, "m"],
    [16, 143, "m"],
    [13, 119, "m"],
    [10, 134, "m"],
    [7, 143, "m"],
    [17, 116, "g"],
    [20, 133, "g"],
    [16, 145, "g"],
    [13, 116, "g"],
    [10, 132, "g"],
    [7, 141, "g"],
    [4, 142, "k"],
    [4, 145, "d"],
    [1, 18, "a"],
    [1, 42, "a"],
    [1, 61, "a"],
    [1, 84, "a"],
    [1, 103, "a"],
    [1, 118, "a"],
    [1, 132, "a"],
    [1, 144, "a"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

const state = {
  levelIndex: 0,
  score: 0,
  gems: 0,
  totalGems: 0,
  lives: 3,
  timeLeft: TIME_LIMIT,
  hasKey: false,
  hasDoubleJump: false,
  hasAcornBasket: false,
  hasLantern: false,
  running: false,
  won: false,
  resetProgressOnCreate: true,
  pendingLevelPrompt: null
};

const hud = {
  score: document.querySelector("#score"),
  gems: document.querySelector("#gems"),
  lives: document.querySelector("#lives"),
  time: document.querySelector("#time"),
  key: document.querySelector("#key"),
  loading: document.querySelector("#loading"),
  loadingBar: document.querySelector("#loading-bar"),
  loadingText: document.querySelector("#loading-text"),
  message: document.querySelector("#message"),
  startButton: document.querySelector("#start-button"),
  storyIntro: document.querySelector("#story-intro"),
  storyPanels: document.querySelector("#story-panels"),
  storyStart: document.querySelector("#story-start"),
  itemPickup: document.querySelector("#item-pickup"),
  itemPickupImage: document.querySelector("#item-pickup-image"),
  itemPickupName: document.querySelector("#item-pickup-name"),
  itemPickupInstruction: document.querySelector("#item-pickup-instruction"),
  itemPickupOk: document.querySelector("#item-pickup-ok"),
  coinIcon: document.querySelector("#coin-icon"),
  keyIcon: document.querySelector("#key-icon"),
  equippedIcon: document.querySelector("#equipped-icon"),
  equippedName: document.querySelector("#equipped-name"),
  cheatMenu: document.querySelector("#cheat-menu"),
  cheatLevels: document.querySelector("#cheat-levels"),
  cheatClose: document.querySelector("#cheat-close")
};

hud.coinIcon.src = `./public/assets/environment/golden-coin.png?v=${ASSET_VERSION}`;
hud.keyIcon.src = `./public/assets/environment/door_key.png?v=${ASSET_VERSION}`;

function setLoadingVisible(visible) {
  hud.loading.hidden = !visible;
}

function setGameAssetsReady(ready) {
  gameAssetsReady = ready;
  hud.startButton.disabled = !ready;
}

function updateLoadingProgress(progress, text = "Preparing assets...") {
  const percentage = Phaser.Math.Clamp(progress || 0, 0, 1);
  hud.loadingBar.style.width = `${Math.round(percentage * 100)}%`;
  hud.loadingText.textContent = `${text} ${Math.round(percentage * 100)}%`;
}

function setMessage(title, copy, button = "Start") {
  hud.message.querySelector("h1").textContent = title;
  hud.message.querySelector("p").textContent = copy;
  hud.startButton.textContent = button;
  hud.startButton.disabled = !gameAssetsReady;
  hud.message.hidden = !gameAssetsReady;
}

function updateHud() {
  hud.score.textContent = String(state.score).padStart(6, "0");
  hud.gems.textContent = String(state.gems).padStart(2, "0");
  hud.lives.replaceChildren();
  for (let index = 0; index < Math.max(0, state.lives); index += 1) {
    const heart = document.createElement("img");
    heart.src = `./public/assets/environment/life-heart.png?v=${ASSET_VERSION}`;
    heart.alt = "";
    hud.lives.appendChild(heart);
  }
  hud.time.textContent = String(state.timeLeft).padStart(3, "0");
  hud.key.textContent = state.hasKey ? "01" : "00";
  updateEquippedHud();
}

function updateEquippedHud() {
  let itemName = "NONE";
  let itemImage = "";
  if (state.hasAcornBasket) {
    itemName = "ACORN";
    itemImage = pixelatedEquippedImages.acorn || `./public/assets/environment/falling_acorn.png?v=${ASSET_VERSION}`;
  } else if (state.hasLantern) {
    itemName = "LANTERN";
    itemImage = pixelatedEquippedImages.lantern || `./public/assets/environment/lantern.png?v=${ASSET_VERSION}`;
  }
  hud.equippedName.textContent = itemName;
  hud.equippedIcon.src = itemImage;
  hud.equippedIcon.alt = itemName === "NONE" ? "" : itemName;
  hud.equippedIcon.hidden = !itemImage;
}

function setCheatMenuVisible(visible) {
  hud.cheatMenu.hidden = !visible;
}

function setStoryIntroVisible(visible) {
  storyIntroRunId += 1;
  hud.storyIntro.hidden = !visible;
  hud.storyIntro.classList.toggle("leaving", false);
  if (!visible) {
    hud.storyPanels.replaceChildren();
    hud.storyPanels.className = "story-panels";
    hud.storyStart.hidden = true;
  }
}

function setItemPickupVisible(visible, details = {}) {
  hud.itemPickup.hidden = !visible;
  if (!visible) return;
  hud.itemPickupImage.src = details.image || "";
  hud.itemPickupImage.alt = details.name || "";
  hud.itemPickupName.textContent = details.name || "Item";
  hud.itemPickupInstruction.textContent = details.instruction || "";
}

function resetGameProgress() {
  state.levelIndex = 0;
  state.score = 0;
  state.gems = 0;
  state.lives = 3;
  state.timeLeft = TIME_LIMIT;
  state.hasKey = false;
  state.hasDoubleJump = false;
  state.hasAcornBasket = false;
  state.hasLantern = false;
  state.running = false;
  state.won = false;
  state.resetProgressOnCreate = false;
  state.pendingLevelPrompt = null;
}

function hardResetDocument() {
  // Full game-over uses a fresh browser boot because Phaser scene restarts left stale input state.
  setGameAssetsReady(false);
  setStoryIntroVisible(false);
  setCheatMenuVisible(false);
  setItemPickupVisible(false);
  hud.message.hidden = true;
  updateLoadingProgress(0, "Restarting...");
  setLoadingVisible(true);
  window.location.replace(`${window.location.pathname}?reset=${Date.now()}`);
}

function getStorySeenKey(level) {
  return `crazy-gabi:story-seen:${level.name}`;
}

function hasStoryPlayedOnce(level) {
  const key = getStorySeenKey(level);
  if (storySeenLevels.has(key)) return true;
  try {
    if (window.localStorage.getItem(key) === "1") {
      storySeenLevels.add(key);
      return true;
    }
  } catch (_error) {
    return false;
  }
  return false;
}

function markStoryPlayedOnce(level) {
  const key = getStorySeenKey(level);
  storySeenLevels.add(key);
  try {
    window.localStorage.setItem(key, "1");
  } catch (_error) {
    // In-memory state still allows skipping later in this browser session.
  }
}

function loadStoryFrame(src) {
  return new Promise((resolve) => {
    const storySrc = typeof src === "string" ? src : src.src;
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = `${storySrc}?v=${STORY_ASSET_VERSION}`;
  });
}

function pixelateStoryFrame(frame) {
  const pixelScale = 0.42;
  const lowWidth = Math.max(1, Math.round(frame.naturalWidth * pixelScale));
  const lowHeight = Math.max(1, Math.round(frame.naturalHeight * pixelScale));
  const lowCanvas = document.createElement("canvas");
  const highCanvas = document.createElement("canvas");
  lowCanvas.width = lowWidth;
  lowCanvas.height = lowHeight;
  highCanvas.width = frame.naturalWidth;
  highCanvas.height = frame.naturalHeight;

  const lowContext = lowCanvas.getContext("2d");
  const highContext = highCanvas.getContext("2d");
  lowContext.imageSmoothingEnabled = true;
  lowContext.drawImage(frame, 0, 0, lowWidth, lowHeight);
  highContext.imageSmoothingEnabled = false;
  highContext.drawImage(lowCanvas, 0, 0, highCanvas.width, highCanvas.height);
  return highCanvas.toDataURL("image/png");
}

async function loadStoryFrames(paths = []) {
  if (paths.length < 2) return [];
  const frames = await Promise.all(paths.slice(0, 2).map(async (path) => {
    const candidates = Array.isArray(path) ? path : [path];
    for (const candidate of candidates) {
      const frame = await loadStoryFrame(candidate);
      if (frame) return frame;
    }
    return null;
  }));
  return frames.every(Boolean) ? frames : [];
}

function makeTextures(scene) {
  const g = scene.make.graphics({ x: 0, y: 0, add: false });

  g.fillStyle(0x13d94a).fillRect(0, 0, TILE, 7);
  g.fillStyle(0x6b2b0d).fillRect(0, 7, TILE, TILE - 7);
  g.fillStyle(0x3d1708).fillRect(0, 18, TILE, 4).fillRect(0, 28, TILE, 4);
  g.fillStyle(0xa34d10).fillRect(4, 10, 3, 4).fillRect(15, 22, 3, 4).fillRect(25, 13, 3, 4);
  g.fillStyle(0x6fff61).fillRect(1, 0, 5, 3).fillRect(12, 0, 7, 3).fillRect(25, 0, 5, 3);
  g.fillStyle(0x00a83b).fillRect(2, 6, 2, 5).fillRect(10, 5, 2, 6).fillRect(21, 6, 2, 5).fillRect(29, 5, 2, 6);
  g.generateTexture("tile-ground", TILE, TILE);
  g.clear();

  g.fillStyle(0xffc800).fillEllipse(16, 16, 17, 27);
  g.fillStyle(0xfff34a).fillEllipse(18, 13, 8, 20);
  g.lineStyle(3, 0xb06a00, 1).strokeEllipse(16, 16, 17, 27);
  g.generateTexture("gem", 32, 32);
  g.clear();

  g.fillStyle(0xffdf2b).fillRect(7, 14, 16, 5).fillCircle(8, 16, 6);
  g.fillStyle(0x9b5b00).fillCircle(8, 16, 2).fillRect(20, 18, 9, 3).fillRect(25, 20, 3, 5);
  g.generateTexture("key", 32, 32);
  g.clear();

  g.fillStyle(0x1f6cff).fillCircle(16, 16, 12);
  g.fillStyle(0x8bdcff).fillCircle(16, 16, 7);
  g.fillStyle(0xffffff).fillTriangle(5, 14, 13, 8, 13, 20).fillTriangle(27, 14, 19, 8, 19, 20);
  g.lineStyle(2, 0x0b276b, 1).strokeCircle(16, 16, 12);
  g.generateTexture("double-jump", 32, 32);
  g.clear();

  g.fillStyle(0x633a2e).fillRoundedRect(5, 2, 22, 30, 4);
  g.fillStyle(0x2a1715).fillRoundedRect(9, 7, 14, 25, 3);
  g.fillStyle(0xf9d36c).fillCircle(22, 17, 2);
  g.generateTexture("door", 32, 32);
  g.clear();

  g.fillStyle(0x000000, 0.2).fillEllipse(16, 28, 24, 5);
  g.fillStyle(0xff5d18).fillEllipse(16, 18, 20, 18);
  g.fillStyle(0xffff29).fillEllipse(12, 17, 14, 18);
  g.fillStyle(0xffffff).fillCircle(20, 10, 4);
  g.fillStyle(0x111111).fillCircle(21, 10, 2);
  g.fillStyle(0xfff04a).fillTriangle(23, 12, 31, 15, 23, 18);
  g.fillStyle(0xffd51a).fillRect(9, 26, 7, 4).fillRect(18, 26, 7, 4);
  g.generateTexture("mischief", 32, 32);
  g.clear();

  g.fillStyle(0x5a3421).fillEllipse(16, 17, 20, 23);
  g.fillStyle(0x8a5733).fillEllipse(16, 18, 15, 18);
  g.fillStyle(0x2f2118).fillRoundedRect(6, 6, 20, 8, 3);
  g.fillStyle(0x6f482d).fillRect(14, 2, 4, 8);
  g.lineStyle(2, 0x3c271c, 1).strokeEllipse(16, 17, 20, 23);
  g.generateTexture("acorn", 32, 32);
  g.clear();

  g.fillStyle(0x4a4f62).fillRect(0, 0, 64, 64);
  g.fillStyle(0x596878).fillRect(0, 0, 64, 12);
  g.fillStyle(0x323746).fillRect(0, 50, 64, 14);
  g.generateTexture("crate", 64, 64);
  g.clear();

  g.destroy();
}

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {
    setGameAssetsReady(false);
    hud.message.hidden = true;
    setStoryIntroVisible(false);
    setCheatMenuVisible(false);
    setLoadingVisible(true);
    updateLoadingProgress(0, "Loading assets...");
    this.load.on("progress", (progress) => updateLoadingProgress(progress, "Loading assets..."));
    this.load.once("complete", () => updateLoadingProgress(1, "Finalizing..."));

    this.load.spritesheet("gabi-sheet", `./public/assets/character/main_char_sprite.png?v=${ASSET_VERSION}`, {
      frameWidth: GABI_FRAME_WIDTH,
      frameHeight: GABI_FRAME_HEIGHT
    });
    this.load.spritesheet("gabi-wings-sheet", `./public/assets/character/main_char_sprite_with_double_jump.png?v=${ASSET_VERSION}`, {
      frameWidth: GABI_FRAME_WIDTH,
      frameHeight: GABI_FRAME_HEIGHT
    });
    this.load.spritesheet("gabi-lantern-sheet", `./public/assets/character/main_char_lantern_sprite.png?v=${ASSET_VERSION}`, {
      frameWidth: GABI_FRAME_WIDTH,
      frameHeight: GABI_FRAME_HEIGHT
    });
    this.load.spritesheet("platform-strip", `./public/assets/environment/platform.png?v=${ASSET_VERSION}`, {
      frameWidth: PLATFORM_FRAME_WIDTH,
      frameHeight: PLATFORM_FRAME_HEIGHT
    });
    this.load.spritesheet("platform-fence", `./public/assets/environment/platform_fence.png?v=${ASSET_VERSION}`, {
      frameWidth: PLATFORM_FRAME_WIDTH,
      frameHeight: PLATFORM_FRAME_HEIGHT
    });
    this.load.spritesheet("platform-underground", `./public/assets/environment/platform_underground.png?v=${ASSET_VERSION}`, {
      frameWidth: PLATFORM_FRAME_WIDTH,
      frameHeight: PLATFORM_FRAME_HEIGHT
    });
    this.load.spritesheet("platform-fence-underground", `./public/assets/environment/platform_fence_underground.png?v=${ASSET_VERSION}`, {
      frameWidth: PLATFORM_FRAME_WIDTH,
      frameHeight: PLATFORM_FRAME_HEIGHT
    });
    this.load.spritesheet("robot-lv1", `./public/assets/character/robot_lv1.png?v=${ASSET_VERSION}`, {
      frameWidth: ROBOT_FRAME_WIDTH,
      frameHeight: ROBOT_FRAME_HEIGHT
    });
    this.load.spritesheet("robot-shadow-ghost-lv2", `./public/assets/character/robot_shadow_ghost_lv2.png?v=${ASSET_VERSION}`, {
      frameWidth: ROBOT_FRAME_WIDTH,
      frameHeight: ROBOT_FRAME_HEIGHT
    });
    this.load.spritesheet("robot-ghost-lv3", `./public/assets/character/robot_ghost_lv3.png?v=${ASSET_VERSION}`, {
      frameWidth: ROBOT_FRAME_WIDTH,
      frameHeight: ROBOT_FRAME_HEIGHT
    });
    this.load.spritesheet("old-lady", `./public/assets/character/old_lady.png?v=${ASSET_VERSION}`, {
      frameWidth: OLD_LADY_FRAME_WIDTH,
      frameHeight: OLD_LADY_FRAME_HEIGHT
    });
    this.load.spritesheet("grey-cat", `./public/assets/character/grey_cat.png?v=${ASSET_VERSION}`, {
      frameWidth: CAT_FRAME_WIDTH,
      frameHeight: CAT_FRAME_HEIGHT
    });
    this.load.image("parallax-city", `./public/assets/environment/paralax_city.png?v=${ASSET_VERSION}`);
    this.load.image("parallax-underground", `./public/assets/environment/paralax_underground.png?v=${ASSET_VERSION}`);
    this.load.image("parallax-tunnel", `./public/assets/environment/paralax_tunnel.png?v=${ASSET_VERSION}`);
    this.load.image("water-below", `./public/assets/environment/water_below.png?v=${ASSET_VERSION}`);
    this.load.image("starting-house", `./public/assets/environment/starting_house.png?v=${ASSET_VERSION}`);
    this.load.image("starting-billboard", `./public/assets/environment/starting_billboard.png?v=${ASSET_VERSION}`);
    this.load.image("coin", `./public/assets/environment/golden-coin.png?v=${ASSET_VERSION}`);
    this.load.image("jump-item", `./public/assets/environment/double_jump_item.png?v=${ASSET_VERSION}`);
    this.load.image("door-key", `./public/assets/environment/door_key.png?v=${ASSET_VERSION}`);
    this.load.image("exit-door", `./public/assets/environment/exit_door.png?v=${ASSET_VERSION}`);
    this.load.image("falling-acorn", `./public/assets/environment/falling_acorn.png?v=${ASSET_VERSION}`);
    this.load.image("falling-brick", `./public/assets/environment/brick.png?v=${ASSET_VERSION}`);
    this.load.image("life-heart", `./public/assets/environment/life-heart.png?v=${ASSET_VERSION}`);
    this.load.image("acorn-basket", `./public/assets/environment/acorn_basket.png?v=${ASSET_VERSION}`);
    this.load.image("lantern", `./public/assets/environment/lantern.png?v=${ASSET_VERSION}`);
    this.load.audio("bgm-lv1", `./public/assets/sound/bgm_lv1.mp3?v=${ASSET_VERSION}`);
    this.load.audio("bgm-lv2", `./public/assets/sound/bgm_lv2.mp3?v=${ASSET_VERSION}`);
    this.load.audio("bgm-lv3", `./public/assets/sound/bgm_lv3.mp3?v=${ASSET_VERSION}`);
    LEVELS.flatMap((level) => level.storyFrames || []).forEach((frame) => {
      if (!frame?.key || !frame?.src || this.textures.exists(frame.key)) return;
      this.load.image(frame.key, `${frame.src}?v=${STORY_ASSET_VERSION}`);
    });
  }

  create() {
    makeTextures(this);
    this.physics.world.gravity.y = 1150;
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = false;
    if (state.resetProgressOnCreate) {
      resetGameProgress();
    }
    this.level = LEVELS[state.levelIndex] || LEVELS[0];
    this.levelRows = this.level.rows;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = this.levelRows[0].length * TILE;
    this.levelHeight = this.levelRows.length * TILE;

    this.createBackdrop();
    if (this.level.showWater !== false) this.createWaterBelow();
    if (this.level.showStartingHouse) this.createStartingHouse();
    this.platforms = this.physics.add.staticGroup();
    this.movingPlatforms = this.physics.add.group({ allowGravity: false, immovable: true });
    this.movingPlatformRuns = [];
    this.platformVisuals = this.add.group();
    this.gems = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doubleJumps = this.physics.add.group({ allowGravity: false, immovable: true });
    this.acornBaskets = this.physics.add.group({ allowGravity: false, immovable: true });
    this.lanterns = this.physics.add.group({ allowGravity: false, immovable: true });
    this.heartDrops = this.physics.add.group({ allowGravity: false, immovable: true });
    this.enemies = this.physics.add.group({ allowGravity: true, immovable: false });
    this.acorns = this.physics.add.group({ allowGravity: false, immovable: true });
    this.thrownItems = this.physics.add.group({ allowGravity: true, immovable: false });
    this.keys = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doors = this.physics.add.staticGroup();
    this.platformRuns = [];
    this.enemyDirection = new Map();
    this.enemyLabels = new Map();
    this.enemyNames = [...ENEMY_NAMES];
    this.lastActionAt = -Infinity;
    this.heartDropsCreated = 0;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;

    state.totalGems = 0;
    this.createAnimations();
    this.buildLevel();
    this.createPlayer();
    this.createLanternOverlay();
    this.createOldLadyNpc();
    this.createCatNpc();
    this.createInput();
    this.setupPhysics();
    this.registerAudioLifecycle();

    this.cameras.main.setBounds(0, 0, this.levelWidth, this.levelHeight);
    this.cameras.main.setViewport(0, 0, VIEW_WIDTH, PLAY_HEIGHT);
    this.physics.world.setBounds(0, -PLAY_HEIGHT * 2, this.levelWidth, this.levelHeight + PLAY_HEIGHT * 3);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.cameras.main.setDeadzone(170, 110);

    state.gems = 0;
    state.timeLeft = this.level.timeLimit;
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.running = false;
    state.won = false;
    updateHud();
    this.pixelatedBasketImage = pixelateStoryFrame(this.textures.get("acorn-basket").getSourceImage());
    this.pixelatedLanternImage = pixelateStoryFrame(this.textures.get("lantern").getSourceImage());
    pixelatedEquippedImages.acorn = pixelateStoryFrame(this.textures.get("falling-acorn").getSourceImage());
    pixelatedEquippedImages.lantern = this.pixelatedLanternImage;
    setGameAssetsReady(true);
    setLoadingVisible(false);
    this.prepareLevelIntro();
    this.time.delayedCall(120, () => {
      if (gameAssetsReady && !state.running && !this.introInProgress && hud.message.hidden && hud.storyIntro.hidden) {
        this.prepareLevelIntro();
      }
    });
  }

  prepareLevelIntro() {
    const intro = state.pendingLevelPrompt || {
      title: this.level.introTitle || this.level.name,
      copy: this.level.introCopy || "Collect the coins, grab the key, and reach the door.",
      button: "Start"
    };
    state.pendingLevelPrompt = null;
    setStoryIntroVisible(false);
    setMessage(intro.title, intro.copy, "Start");
  }

  async playStoryIntroThenBegin() {
    const introToken = this.activeIntroToken;
    setStoryIntroVisible(false);
    hud.message.hidden = true;
    this.startMusic();
    try {
      const frames = this.getPreloadedStoryFrames();
      if (!this.isCurrentIntro(introToken)) return;
      if (frames.length < 2) {
        this.beginGameplay(introToken);
        return;
      }

      hud.message.hidden = true;
      setCheatMenuVisible(false);
      await this.renderStoryIntro(frames, introToken);
      if (!this.isCurrentIntro(introToken)) return;
      this.beginGameplay(introToken);
    } catch (_error) {
      if (this.isCurrentIntro(introToken)) this.beginGameplay(introToken);
    }
  }

  getPreloadedStoryFrames() {
    const frames = (this.level.storyFrames || []).slice(0, 2).map((frame) => {
      if (!frame?.key || !this.textures.exists(frame.key)) return null;
      return this.textures.get(frame.key).getSourceImage();
    });
    return frames.every(Boolean) ? frames : [];
  }

  renderStoryIntro(frames, introToken) {
    const introRunId = storyIntroRunId + 1;
    const skipAllowed = hasStoryPlayedOnce(this.level);
    const tallFrames = frames.every((frame) => frame.naturalHeight > frame.naturalWidth);
    hud.storyPanels.className = `story-panels ${tallFrames ? "tall" : "wide"}`;
    hud.storyPanels.replaceChildren();
    frames.forEach((frame, index) => {
      const image = document.createElement("img");
      image.className = tallFrames
        ? `story-frame frame-${index + 1} ${index === 0 ? "from-top" : "from-bottom delay"}`
        : `story-frame frame-${index + 1} from-left ${index === 1 ? "delay" : ""}`;
      image.src = pixelateStoryFrame(frame);
      image.alt = `${this.level.name} manga frame ${index + 1}`;
      hud.storyPanels.appendChild(image);
    });
    setStoryIntroVisible(true);
    return new Promise((resolve) => {
      let resolved = false;
      let displayTimer = null;
      let exitTimer = null;
      const skipOptions = { capture: true };
      const touchOptions = { capture: true, passive: false };
      const isActiveIntro = () => this.isCurrentIntro(introToken) && introRunId === storyIntroRunId && !hud.storyIntro.hidden;
      const cleanup = () => {
        window.clearTimeout(displayTimer);
        window.clearTimeout(exitTimer);
        window.removeEventListener("keydown", skipIntro, true);
        window.removeEventListener("pointerdown", skipIntro, true);
        window.removeEventListener("mousedown", skipIntro, true);
        window.removeEventListener("touchstart", skipIntro, true);
        this.events.off(Phaser.Scenes.Events.SHUTDOWN, finish, this);
      };
      const finish = (completedNaturally = false) => {
        if (resolved) return;
        resolved = true;
        const shouldHide = isActiveIntro();
        if (completedNaturally && shouldHide) markStoryPlayedOnce(this.level);
        cleanup();
        if (shouldHide) setStoryIntroVisible(false);
        resolve();
      };
      const skipIntro = (event) => {
        if (!isActiveIntro()) return;
        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        finish();
      };

      if (skipAllowed) {
        window.addEventListener("keydown", skipIntro, skipOptions);
        window.addEventListener("pointerdown", skipIntro, skipOptions);
        window.addEventListener("mousedown", skipIntro, skipOptions);
        window.addEventListener("touchstart", skipIntro, touchOptions);
      }
      this.events.once(Phaser.Scenes.Events.SHUTDOWN, finish, this);

      displayTimer = window.setTimeout(() => {
        if (!isActiveIntro()) {
          finish();
          return;
        }
        hud.storyIntro.classList.add("leaving");
        exitTimer = window.setTimeout(() => {
          if (!isActiveIntro()) {
            finish();
            return;
          }
          finish(true);
        }, 820);
      }, 3650);
    });
  }

  isCurrentIntro(introToken) {
    return this.scene.isActive("PlayScene") && introToken === this.activeIntroToken;
  }

  createBackdrop() {
    const textureKey = this.level.parallax || "parallax-city";
    const source = this.textures.get(textureKey).getSourceImage();
    const sourceHeight = source.height;
    const scale = PLAY_HEIGHT / sourceHeight;
    const tileWidth = Math.ceil(VIEW_WIDTH / scale);
    this.parallaxLayers = [
      {
        sprite: this.add.tileSprite(0, 0, tileWidth, sourceHeight, textureKey),
        speed: 0.18
      }
    ];
    this.parallaxLayers.forEach(({ sprite }, index) => {
      sprite.setOrigin(0, 0);
      sprite.setScale(scale);
      sprite.setScrollFactor(0);
      sprite.setDepth(-10 + index);
    });
  }

  createWaterBelow() {
    const source = this.textures.get("water-below").getSourceImage();
    const renderedWidth = source.width * WATER_SCALE;
    const step = renderedWidth * (1 - WATER_OVERLAP);
    const startX = -renderedWidth * WATER_OVERLAP * 0.5;
    const y = this.levelHeight + WATER_Y_OFFSET;
    this.waterTiles = [];

    for (let x = startX; x < this.levelWidth + renderedWidth; x += step) {
      const water = this.add.image(x, y, "water-below");
      water.setOrigin(0, 1);
      water.setScale(WATER_SCALE);
      water.setDepth(WATER_DEPTH);
      this.waterTiles.push(water);
    }

    this.waterStep = step;
    this.waterWrapDistance = this.waterTiles.length * step;
    this.waterStartX = startX;
  }

  createLanternOverlay() {
    this.lanternOverlay = null;
    this.lanternOverlayConfig = null;
    if (!this.level.darkness) return;

    this.lanternOverlayConfig = {
      alpha: this.level.darkness.alpha ?? 0.88,
      radius: this.level.darkness.radius ?? 126,
      fringe: this.level.darkness.fringe ?? 32,
      yOffset: this.level.darkness.yOffset ?? -18
    };
    this.lanternOverlay = this.add.graphics();
    this.lanternOverlay.setScrollFactor(0);
    this.lanternOverlay.setDepth(DARKNESS_DEPTH);
    this.updateLanternOverlay();
  }

  updateLanternOverlay() {
    if (!this.lanternOverlay || !this.player || !this.lanternOverlayConfig) return;

    if (this.level.darkness?.requiresLantern !== false && !state.hasLantern) {
      this.updateLanternThresholdDarkness();
      return;
    }

    const { alpha, radius, fringe, yOffset } = this.lanternOverlayConfig;
    const camera = this.cameras.main;
    const centerX = Phaser.Math.Clamp(this.player.x - camera.scrollX + (this.player.flipX ? -18 : 18), -radius, VIEW_WIDTH + radius);
    const centerY = Phaser.Math.Clamp(this.player.y - camera.scrollY + yOffset, radius, PLAY_HEIGHT - radius);
    const clearRadius = Math.max(0, radius - fringe);
    const graphics = this.lanternOverlay;

    graphics.clear();
    for (let y = 0; y < PLAY_HEIGHT; y += 4) {
      const midY = y + 2;
      const dy = midY - centerY;
      if (Math.abs(dy) >= radius) {
        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, y, VIEW_WIDTH, 4);
        continue;
      }

      const outerHalfWidth = Math.sqrt(Math.max(0, radius * radius - dy * dy));
      const outerLeft = Phaser.Math.Clamp(centerX - outerHalfWidth, 0, VIEW_WIDTH);
      const outerRight = Phaser.Math.Clamp(centerX + outerHalfWidth, 0, VIEW_WIDTH);

      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, y, outerLeft, 4);
      graphics.fillRect(outerRight, y, VIEW_WIDTH - outerRight, 4);

      for (let x = outerLeft; x < outerRight; x += 4) {
        const midX = x + 2;
        const dx = midX - centerX;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= clearRadius) continue;
        const progress = Phaser.Math.Clamp((distance - clearRadius) / Math.max(1, fringe), 0, 1);
        graphics.fillStyle(0x000000, alpha * progress * progress);
        graphics.fillRect(x, y, 4, 4);
      }
    }

    for (let offset = 0; offset < fringe; offset += 5) {
      const progress = 1 - offset / fringe;
      const ringAlpha = Phaser.Math.Clamp(alpha * progress * progress * 0.72, 0, alpha);
      graphics.lineStyle(6, 0x000000, ringAlpha);
      graphics.strokeCircle(centerX, centerY, radius - offset);
    }
  }

  updateLanternThresholdDarkness() {
    if (this.level.darkness?.thresholdMode === "diagonal") {
      this.updateDiagonalLanternThresholdDarkness();
      return;
    }

    const camera = this.cameras.main;
    const startX = this.level.darkness?.startX ?? 0;
    const fadeWidth = this.level.darkness?.thresholdFade ?? 180;
    const screenStart = startX - camera.scrollX;
    const graphics = this.lanternOverlay;

    graphics.clear();
    if (screenStart >= VIEW_WIDTH) return;

    const fadeStart = Phaser.Math.Clamp(screenStart - fadeWidth, 0, VIEW_WIDTH);
    const fadeEnd = Phaser.Math.Clamp(screenStart, 0, VIEW_WIDTH);

    for (let x = fadeStart; x < fadeEnd; x += 4) {
      const progress = Phaser.Math.Clamp((x - fadeStart) / Math.max(1, fadeEnd - fadeStart), 0, 1);
      graphics.fillStyle(0x000000, progress * progress);
      graphics.fillRect(x, 0, 4, PLAY_HEIGHT);
    }

    graphics.fillStyle(0x000000, 1);
    graphics.fillRect(fadeEnd, 0, VIEW_WIDTH - fadeEnd, PLAY_HEIGHT);
  }

  updateDiagonalLanternThresholdDarkness() {
    const camera = this.cameras.main;
    const darkness = this.level.darkness || {};
    const startX = darkness.lineStartX ?? 0;
    const startY = darkness.lineStartY ?? 0;
    const endX = darkness.lineEndX ?? VIEW_WIDTH;
    const endY = darkness.lineEndY ?? PLAY_HEIGHT;
    const fadeWidth = darkness.thresholdFade ?? 64;
    const alpha = darkness.alpha ?? 1;
    const graphics = this.lanternOverlay;
    const dx = Math.max(1, endX - startX);

    graphics.clear();
    for (let x = 0; x < VIEW_WIDTH; x += 4) {
      const worldX = camera.scrollX + x;
      const t = Phaser.Math.Clamp((worldX - startX) / dx, -0.35, 1.35);
      const worldBoundaryY = Phaser.Math.Linear(startY, endY, t);
      const screenBoundaryY = worldBoundaryY - camera.scrollY;
      const solidBottom = Phaser.Math.Clamp(screenBoundaryY - fadeWidth * 0.5, 0, PLAY_HEIGHT);
      const fadeBottom = Phaser.Math.Clamp(screenBoundaryY + fadeWidth * 0.5, 0, PLAY_HEIGHT);

      if (solidBottom > 0) {
        graphics.fillStyle(0x000000, alpha);
        graphics.fillRect(x, 0, 4, solidBottom);
      }

      if (fadeBottom > solidBottom) {
        for (let y = solidBottom; y < fadeBottom; y += 4) {
          const progress = 1 - Phaser.Math.Clamp((y - solidBottom) / Math.max(1, fadeBottom - solidBottom), 0, 1);
          graphics.fillStyle(0x000000, alpha * progress * progress);
          graphics.fillRect(x, y, 4, 4);
        }
      }
    }
  }

  createStartingHouse() {
    const house = this.add.image(24, 16 * TILE + 4, "starting-house");
    house.setOrigin(0, 1);
    house.setScale(STARTING_HOUSE_SCALE);
    house.setDepth(STARTING_HOUSE_DEPTH);

    this.levelSelectBoard = this.add.image(523, 16 * TILE - 2, "starting-billboard");
    this.levelSelectBoard.setOrigin(0.5, 1);
    this.levelSelectBoard.setScale(STARTING_BILLBOARD_SCALE);
    this.levelSelectBoard.setDepth(STARTING_BILLBOARD_DEPTH);
    this.createBillboardPrompt();
  }

  createBillboardPrompt() {
    const bubbleWidth = 132;
    const bubbleHeight = 30;
    const prompt = this.add.container(this.levelSelectBoard.x, this.levelSelectBoard.y - 112);
    const background = this.add.graphics();
    background.fillStyle(0x050505, 0.88);
    background.fillRoundedRect(-bubbleWidth / 2, -bubbleHeight, bubbleWidth, bubbleHeight, 5);
    background.fillTriangle(-6, -1, 6, -1, 0, 7);
    const label = this.add.text(0, -bubbleHeight / 2, "Press 0 to interact", {
      fontFamily: "\"Courier New\", monospace",
      fontSize: "9px",
      color: "#f4f0dc",
      align: "center"
    });
    label.setOrigin(0.5, 0.5);
    prompt.add([background, label]);
    prompt.setDepth(12);
    prompt.setVisible(false);
    this.levelSelectPrompt = prompt;
  }

  createAnimations() {
    if (!this.anims.exists("gabi-idle")) {
      this.anims.create({
        key: "gabi-idle",
        frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [4, 5] }),
        frameRate: 3,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-walk",
        frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [0, 1] }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-jump",
        frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [2, 3] }),
        frameRate: 6,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-wing-jump",
        frames: this.anims.generateFrameNumbers("gabi-wings-sheet", { frames: [2, 3] }),
        frameRate: 6,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-hurt",
        frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [4, 5] }),
        frameRate: 6,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-lantern-idle",
        frames: this.anims.generateFrameNumbers("gabi-lantern-sheet", { frames: [4, 5] }),
        frameRate: 3,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-lantern-walk",
        frames: this.anims.generateFrameNumbers("gabi-lantern-sheet", { frames: [0, 1] }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-lantern-jump",
        frames: this.anims.generateFrameNumbers("gabi-lantern-sheet", { frames: [2, 3] }),
        frameRate: 6,
        repeat: -1
      });
      this.anims.create({
        key: "gabi-lantern-hurt",
        frames: this.anims.generateFrameNumbers("gabi-lantern-sheet", { frames: [4, 5] }),
        frameRate: 6,
        repeat: -1
      });
      this.anims.create({
        key: "robot-lv1-move",
        frames: this.anims.generateFrameNumbers("robot-lv1", { frames: [0, 1, 2] }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: "robot-shadow-ghost-lv2-move",
        frames: this.anims.generateFrameNumbers("robot-shadow-ghost-lv2", { frames: [0, 1, 2] }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: "robot-ghost-lv3-move",
        frames: this.anims.generateFrameNumbers("robot-ghost-lv3", { frames: [0, 1, 2] }),
        frameRate: 8,
        repeat: -1
      });
    }
    if (!this.anims.exists("old-lady-idle")) {
      this.anims.create({
        key: "old-lady-idle",
        frames: this.anims.generateFrameNumbers("old-lady", { frames: [0, 1, 2] }),
        frameRate: 3,
        repeat: -1
      });
    }
    if (!this.anims.exists("cat-run")) {
      this.anims.create({
        key: "cat-run",
        frames: this.anims.generateFrameNumbers("grey-cat", { frames: [0, 1, 2, 3] }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "cat-pounce",
        frames: this.anims.generateFrameNumbers("grey-cat", { frames: [4] }),
        frameRate: 1,
        repeat: 0
      });
      this.anims.create({
        key: "cat-land",
        frames: this.anims.generateFrameNumbers("grey-cat", { frames: [7] }),
        frameRate: 1,
        repeat: 0
      });
      this.anims.create({
        key: "cat-idle",
        frames: this.anims.generateFrameNumbers("grey-cat", { frames: [8, 9, 10] }),
        frameRate: 4,
        repeat: -1
      });
    }
  }

  buildLevel() {
    this.levelRows.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        const x = columnIndex * TILE + TILE / 2;
        const y = rowIndex * TILE + TILE / 2;
        if (cell === "#" || cell === "w") {
          const block = this.platforms.create(x, y, "tile-ground");
          block.setVisible(false);
          if (cell === "w") {
            const wall = this.add.rectangle(x, y, TILE + 1, TILE + 1, 0x020202, 1);
            wall.setDepth(0);
            this.platformVisuals.add(wall);
          }
        }
        if (cell === "g" || cell === "c") {
          const gem = this.gems.create(x, y, "coin");
          gem.setScale(ITEM_SCALE);
          gem.setDepth(ITEM_DEPTH);
          gem.setCircle(58, 61, 58);
          state.totalGems += 1;
          this.tweens.add({ targets: gem, y: y - 6, duration: 900, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "j") {
          const doubleJump = this.doubleJumps.create(x, y, "jump-item");
          doubleJump.setScale(ITEM_SCALE);
          doubleJump.setDepth(ITEM_DEPTH);
          doubleJump.setCircle(60, 59, 60);
          this.tweens.add({ targets: doubleJump, y: y - 8, duration: 720, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "b") {
          const basket = this.acornBaskets.create(x, y, "acorn-basket");
          basket.setScale(BASKET_SCALE);
          basket.setDepth(ITEM_DEPTH);
          basket.setCircle(75, 64, 54);
          this.basketPoint = { x, y };
          this.tweens.add({ targets: basket, y: y - 7, duration: 820, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "l") {
          const lantern = this.lanterns.create(x, y, "lantern");
          lantern.setScale(LANTERN_SCALE);
          lantern.setDepth(DARKNESS_DEPTH + 1);
          lantern.setCircle(70, 49, 55);
          this.tweens.add({ targets: lantern, y: y - 7, duration: 820, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "m") {
          const enemySprite = this.level.enemySprite || "robot-lv1";
          const enemy = this.enemies.create(x, y, enemySprite, 0);
          enemy.setBounce(0);
          enemy.setCollideWorldBounds(true);
          enemy.setScale(ROBOT_SCALE);
          enemy.setDepth(5);
          enemy.body.setSize(112, 110).setOffset(58, 82);
          enemy.play(`${enemySprite}-move`);
          this.enemyDirection.set(enemy, columnIndex % 2 ? -1 : 1);
          this.attachEnemyLabel(enemy);
        }
        if (cell === "a") {
          const hazardKey = this.level.fallingHazard || "falling-acorn";
          const acorn = this.acorns.create(x, -80, hazardKey);
          acorn.setScale(hazardKey === "falling-brick" ? BRICK_SCALE : ACORN_SCALE);
          acorn.setDepth(ITEM_DEPTH);
          acorn.setCircle(70, 47, 52);
          acorn.body.allowGravity = false;
          acorn.body.immovable = false;
          acorn.setData("homeX", x);
          acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(...this.level.acornDelay));
          acorn.setData("pace", Phaser.Math.Between(...this.level.acornPace));
          acorn.setVelocity(0, 0);
        }
        if (cell === "k") {
          const key = this.keys.create(x, y, "door-key");
          key.setScale(ITEM_SCALE);
          key.setDepth(ITEM_DEPTH);
          key.setCircle(58, 59, 59);
          this.keyPoint = { x, y };
          this.keySprite = key;
          if (this.level.catNpc) {
            key.disableBody(true, true);
            this.keyRevealed = false;
          } else {
            this.keyRevealed = true;
          }
          this.tweens.add({ targets: key, angle: 8, duration: 650, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "d") {
          const door = this.doors.create(x, y + (this.level.doorYOffset ?? -16), "exit-door");
          door.setScale(DOOR_SCALE);
          door.setDepth(DOOR_DEPTH);
          door.refreshBody();
          this.doorPoint = { x: door.x, y: door.y };
        }
        if (cell === "p") this.spawnPoint = { x, y };
      });
    });
    this.createPlatformVisuals();
    this.createMovingPlatforms();
  }

  createPlatformVisuals() {
    this.levelRows.forEach((row, rowIndex) => {
      let columnIndex = 0;
      while (columnIndex < row.length) {
        if (row[columnIndex] !== "#") {
          columnIndex += 1;
          continue;
        }

        const start = columnIndex;
        while (columnIndex < row.length && row[columnIndex] === "#") columnIndex += 1;
        this.platformRuns.push({
          startX: start * TILE,
          endX: columnIndex * TILE,
          topY: rowIndex * TILE,
          rowIndex
        });
        this.addPlatformRun(start, columnIndex - start, rowIndex);
      }
    });
  }

  createMovingPlatforms() {
    this.levelRows.forEach((row, rowIndex) => {
      let columnIndex = 0;
      while (columnIndex < row.length) {
        if (row[columnIndex] !== "=") {
          columnIndex += 1;
          continue;
        }

        const start = columnIndex;
        while (columnIndex < row.length && row[columnIndex] === "=") columnIndex += 1;
        this.addMovingPlatformRun(start, columnIndex - start, rowIndex);
      }
    });
  }

  addPlatformRun(startColumn, length, rowIndex) {
    const worldStart = startColumn * TILE;
    const worldWidth = length * TILE;
    const topY = rowIndex * TILE;
    const segments = Math.ceil(worldWidth / PLATFORM_SEGMENT_WIDTH);
    const platformTexture = this.level.platformTexture || "platform-strip";
    const fenceTexture = this.level.fenceTexture || "platform-fence";

    for (let index = 0; index < segments; index += 1) {
      const segmentWidth = Math.min(PLATFORM_SEGMENT_WIDTH, worldWidth - index * PLATFORM_SEGMENT_WIDTH);
      const x = worldStart + index * PLATFORM_SEGMENT_WIDTH + segmentWidth / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(x, topY + PLATFORM_Y_OFFSET, platformTexture, platformFrame);
      platform.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      platform.setDepth(PLATFORM_DEPTH);
      this.platformVisuals.add(platform);

      if (Phaser.Math.Between(0, 100) < 68) {
        const fenceRoll = Phaser.Math.Between(0, 100);
        const fenceFrame = fenceRoll < 6 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(x, topY + FENCE_Y_OFFSET, fenceTexture, fenceFrame);
        fence.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
        fence.setDepth(FENCE_DEPTH);
        this.platformVisuals.add(fence);
      }
    }
  }

  addMovingPlatformRun(startColumn, length, rowIndex) {
    const worldStart = startColumn * TILE;
    const worldWidth = length * TILE;
    const centerX = worldStart + worldWidth / 2;
    const centerY = rowIndex * TILE + TILE / 2;
    const topY = rowIndex * TILE;
    const platformTexture = this.level.platformTexture || "platform-strip";
    const fenceTexture = this.level.fenceTexture || "platform-fence";
    const body = this.movingPlatforms.create(centerX, centerY, "tile-ground");
    body.setVisible(false);
    body.body.allowGravity = false;
    body.body.immovable = true;
    body.body.setSize(worldWidth, TILE);
    body.body.setOffset((TILE - worldWidth) / 2, 0);
    body.setVelocityX(72);

    const visuals = [];
    const segments = Math.ceil(worldWidth / PLATFORM_SEGMENT_WIDTH);
    for (let index = 0; index < segments; index += 1) {
      const segmentWidth = Math.min(PLATFORM_SEGMENT_WIDTH, worldWidth - index * PLATFORM_SEGMENT_WIDTH);
      const offsetX = -worldWidth / 2 + index * PLATFORM_SEGMENT_WIDTH + segmentWidth / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(centerX + offsetX, topY + PLATFORM_Y_OFFSET, platformTexture, platformFrame);
      platform.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      platform.setDepth(PLATFORM_DEPTH);
      visuals.push({ sprite: platform, offsetX, offsetY: PLATFORM_Y_OFFSET - TILE / 2 });

      if (Phaser.Math.Between(0, 100) < 54) {
        const fenceFrame = Phaser.Math.Between(0, 100) < 5 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(centerX + offsetX, topY + FENCE_Y_OFFSET, fenceTexture, fenceFrame);
        fence.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
        fence.setDepth(FENCE_DEPTH);
        visuals.push({ sprite: fence, offsetX, offsetY: FENCE_Y_OFFSET - TILE / 2 });
      }
    }

    this.movingPlatformRuns.push({
      body,
      visuals,
      width: worldWidth,
      topY,
      rowIndex,
      minX: centerX - 130,
      maxX: centerX + 130,
      speed: Phaser.Math.Between(0, 1) ? 72 : -72
    });
  }

  createPlayer() {
    const playerSheet = this.level.playerSheet || "gabi-sheet";
    this.playerAnimationPrefix = this.level.playerAnimationPrefix || "gabi";
    this.player = this.physics.add.sprite(this.spawnPoint.x, this.spawnPoint.y, playerSheet, 0);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(68, 162).setOffset(82, 58);
    this.player.setDragX(1200);
    this.player.setMaxVelocity(260, 620);
    this.player.setScale(GABI_SCALE);
    this.player.setDepth(4);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("idle");
  }

  createCatNpc() {
    if (!this.level.catNpc) return;
    this.cat = this.physics.add.sprite(this.spawnPoint.x + 220, this.spawnPoint.y, "grey-cat", 8);
    this.cat.setScale(CAT_SCALE);
    this.cat.setDepth(5);
    this.cat.setDragX(950);
    this.cat.setMaxVelocity(340, 650);
    this.cat.setCollideWorldBounds(true);
    this.cat.body.setSize(96, 88).setOffset(76, 118);
    this.cat.body.enable = false;
    this.cat.setVisible(false);
    this.cat.play("cat-idle");
  }

  createOldLadyNpc() {
    if (!this.level.oldLady) return;
    const { column, floorRow, speech } = this.level.oldLady;
    const x = column * TILE + TILE / 2;
    const y = floorRow * TILE - (OLD_LADY_FRAME_HEIGHT * OLD_LADY_SCALE) / 2 + 3;
    this.oldLady = this.add.sprite(x, y, "old-lady", 0);
    this.oldLady.setScale(OLD_LADY_SCALE);
    this.oldLady.setDepth(3);
    this.oldLady.play("old-lady-idle");
    this.oldLadySpeechText = speech;
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keysInput = this.input.keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
      jumpW: Phaser.Input.Keyboard.KeyCodes.W,
      action: Phaser.Input.Keyboard.KeyCodes.ENTER,
      restart: Phaser.Input.Keyboard.KeyCodes.R
    });
  }

  setupPhysics() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.movingPlatforms);
    if (this.cat) {
      this.physics.add.collider(this.cat, this.platforms);
      this.physics.add.collider(this.cat, this.movingPlatforms);
    }
    this.physics.add.collider(this.enemies, this.platforms);
    this.physics.add.collider(
      this.thrownItems,
      this.platforms,
      this.handleThrownItemPlatformBounce,
      this.canThrownItemBounce,
      this
    );
    this.physics.add.collider(
      this.thrownItems,
      this.movingPlatforms,
      this.handleThrownItemPlatformBounce,
      this.canThrownItemBounce,
      this
    );
    this.physics.add.overlap(this.thrownItems, this.enemies, this.hitEnemyWithThrownItem, null, this);
    this.physics.add.overlap(this.player, this.gems, this.collectGem, null, this);
    this.physics.add.overlap(this.player, this.doubleJumps, this.collectDoubleJump, null, this);
    this.physics.add.overlap(this.player, this.acornBaskets, this.collectAcornBasket, null, this);
    this.physics.add.overlap(this.player, this.lanterns, this.collectLantern, null, this);
    this.physics.add.overlap(this.player, this.heartDrops, this.collectHeart, null, this);
    this.physics.add.overlap(this.player, this.keys, this.collectKey, null, this);
    this.physics.add.overlap(this.player, this.enemies, this.hitEnemy, null, this);
    this.physics.add.overlap(this.player, this.acorns, this.hitAcorn, null, this);
    this.physics.add.overlap(this.player, this.doors, this.enterDoor, null, this);
  }

  startRun() {
    if (state.running) return;
    if (this.introInProgress) {
      this.activeIntroToken = (this.activeIntroToken || 0) + 1;
      this.introInProgress = false;
      setStoryIntroVisible(false);
    }
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = true;
    hud.message.hidden = true;
    setStoryIntroVisible(false);
    setItemPickupVisible(false);
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.releaseBasketPromptControlLock();
    this.resetPlayerToSpawn();
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    if (!state.hasKey) this.resetKeyReveal();
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
    this.thrownItems.clear(true, true);
    this.resetCatNpc();
    this.playStoryIntroThenBegin();
  }

  beginGameplay(introToken = this.activeIntroToken) {
    if (!this.isCurrentIntro(introToken)) return;
    this.introInProgress = false;
    this.physics.world.resume();
    this.input.keyboard.enabled = true;
    this.player.body.enable = true;
    this.player.body.moves = true;
    this.player.body.setAllowGravity(true);
    state.running = true;
    this.startTimer();
    this.showGabiSpeech(this.level.startSpeech);
    this.showOldLadySpeech();
  }

  update(time = 0, delta = 0) {
    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.scene.restart();
      return;
    }

    if (!this.isItemPromptActive()) this.moveEnemies();
    this.updateEnemyLabels();
    this.updateMovingPlatforms();
    this.updateAcorns(time);
    this.updateThrownItems();
    this.updateParallax();
    this.updateWater(delta);
    this.updateLanternOverlay();
    this.updateCatNpc(time, delta);
    this.updateGabiSpeechPosition();
    this.updateBillboardPrompt();
    if (!state.running || state.won) return;

    const left = this.cursors.left.isDown || this.keysInput.left.isDown;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown;
    const jump =
      Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jump) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jumpW);
    const action = Phaser.Input.Keyboard.JustDown(this.keysInput.action);
    const onFloor = this.player.body.blocked.down;

    if (this.lanternPromptActive) {
      this.player.setAccelerationX(0);
      this.player.setVelocity(0, 0);
      this.setGabiAnimation("idle");
      if (action) this.handleItemPickupOk(time);
      return;
    }

    if (this.basketPromptActive) {
      this.player.setAccelerationX(0);
      this.player.setVelocity(0, 0);
      this.setGabiAnimation("idle");
      if (action) this.handleItemPickupOk(time);
      return;
    }

    if (left) {
      this.player.setAccelerationX(-1250);
      this.setGabiFlip(true);
    } else if (right) {
      this.player.setAccelerationX(1250);
      this.setGabiFlip(false);
    } else {
      this.player.setAccelerationX(0);
    }

    if (onFloor) {
      this.airJumpsUsed = 0;
      this.usingWingJump = false;
    }

    if (jump && onFloor) {
      this.player.setVelocityY(-510);
    } else if (jump && state.hasDoubleJump && this.airJumpsUsed < 1) {
      this.airJumpsUsed += 1;
      this.usingWingJump = true;
      this.player.setVelocityY(-490);
      this.cameras.main.flash(80, 104, 220, 255, false);
    }

    if (action) this.performAction(time);

    if (this.player.y > this.levelHeight + 56) this.loseLife();
    this.updateGabiAnimation(left || right, onFloor);
  }

  performAction(time = 0) {
    if (this.level.actionAbility !== "throw-acorn" || !state.hasAcornBasket) return;
    if (this.throwAcorn(time) && this.basketPromptActive) {
      this.basketPromptActive = false;
      setItemPickupVisible(false);
      this.releaseBasketPromptControlLock();
    }
  }

  isItemPromptActive() {
    return Boolean(this.basketPromptActive || this.lanternPromptActive);
  }

  handleItemPickupOk(time = this.time?.now || 0) {
    if (this.lanternPromptActive) {
      this.lanternPromptActive = false;
      setItemPickupVisible(false);
      this.releaseBasketPromptControlLock();
      return;
    }

    if (this.basketPromptActive) {
      this.performAction(time);
    }
  }

  throwAcorn(time = 0) {
    if (time - this.lastActionAt < 450) return false;
    this.lastActionAt = time;
    const direction = this.player.flipX ? -1 : 1;
    const acorn = this.thrownItems.create(this.player.x + direction * 28, this.player.y - 20, "falling-acorn");
    acorn.setScale(ACORN_SCALE * 0.72);
    acorn.setDepth(ITEM_DEPTH);
    acorn.setCircle(70, 47, 52);
    acorn.body.allowGravity = true;
    acorn.body.setGravityY(-360);
    acorn.setBounce(0.62, 0.52);
    acorn.setDragX(30);
    acorn.setVelocity(direction * 430, -295);
    acorn.setAngularVelocity(direction * 520);
    acorn.setData("spawnedAt", time);
    acorn.setData("thrown", true);
    acorn.setData("bouncesLeft", THROWN_ACORN_MAX_BOUNCES);
    acorn.setData("lastBounceAt", -Infinity);
    return true;
  }

  lockPlayerForBasketPrompt() {
    if (!this.player?.body) return;
    this.player.setAcceleration(0, 0);
    this.player.setVelocity(0, 0);
    this.player.body.moves = false;
    this.player.body.setAllowGravity(false);
    this.freezeEnemiesForPrompt();
    this.setGabiAnimation("idle");
  }

  releaseBasketPromptControlLock() {
    if (!this.player?.body) return;
    this.player.body.moves = true;
    this.player.body.setAllowGravity(true);
    this.releaseEnemiesForPrompt();
  }

  freezeEnemiesForPrompt() {
    this.enemies?.children.iterate((enemy) => {
      if (!enemy?.body) return;
      enemy.setData("promptFrozenVelocityX", enemy.body.velocity.x);
      enemy.setData("promptFrozenVelocityY", enemy.body.velocity.y);
      enemy.setVelocity(0, 0);
      enemy.body.moves = false;
    });
  }

  releaseEnemiesForPrompt() {
    this.enemies?.children.iterate((enemy) => {
      if (!enemy?.body) return;
      enemy.body.moves = true;
    });
  }

  setGabiFlip(flipX) {
    this.player.setFlipX(flipX);
  }

  setGabiAnimation(name) {
    if (this.currentGabiAnimation === name || !this.player) return;
    this.currentGabiAnimation = name;
    const animationKey = name === "wing-jump" ? "gabi-wing-jump" : `${this.playerAnimationPrefix || "gabi"}-${name}`;
    this.player.play(animationKey, true);
  }

  updateGabiAnimation(isMoving, onFloor) {
    if (!onFloor) {
      this.setGabiAnimation(this.usingWingJump ? "wing-jump" : "jump");
    } else if (isMoving) {
      this.setGabiAnimation("walk");
    } else {
      this.setGabiAnimation("idle");
    }
  }

  resetPlayerMotion({ freeze = false } = {}) {
    if (!this.player?.body) return;
    this.player.body.moves = !freeze;
    this.player.body.setAllowGravity(!freeze);
    this.player.body.stop();
    this.player.setAcceleration(0, 0);
    this.player.setVelocity(0, 0);
    this.player.setAngularVelocity(0);
  }

  resetPlayerToSpawn() {
    this.resetPlayerMotion();
    this.player.setPosition(this.spawnPoint.x, this.spawnPoint.y);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("idle");
  }

  switchPlayerToLanternSprite() {
    if (!this.level.lanternPlayerSheet || !this.player) return;
    this.playerAnimationPrefix = this.level.lanternAnimationPrefix || "gabi-lantern";
    this.player.setTexture(this.level.lanternPlayerSheet, this.player.frame?.name || 0);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("idle");
  }

  showGabiSpeech(text) {
    if (!text) return;
    if (this.speechBubble) this.speechBubble.destroy(true);
    const bubbleWidth = 174;
    const bubbleHeight = 42;
    const container = this.add.container(this.player.x, this.player.y - 62);
    const bubble = this.add.graphics();
    bubble.fillStyle(0x050505, 0.86);
    bubble.fillRoundedRect(-bubbleWidth / 2, -bubbleHeight, bubbleWidth, bubbleHeight, 5);
    bubble.fillTriangle(-7, -1, 7, -1, 0, 7);
    const label = this.add.text(0, -bubbleHeight / 2, text, {
      fontFamily: "\"Courier New\", monospace",
      fontSize: "11px",
      color: "#f4f0dc",
      align: "center",
      lineSpacing: 0,
      wordWrap: { width: bubbleWidth - 20, useAdvancedWrap: true }
    });
    label.setOrigin(0.5, 0.5);
    container.add([bubble, label]);
    container.setDepth(DARKNESS_DEPTH + 2);
    this.speechBubble = container;
    this.updateGabiSpeechPosition();
    this.time.delayedCall(4200, () => {
      if (!this.speechBubble) return;
      this.tweens.add({
        targets: this.speechBubble,
        alpha: 0,
        duration: 260,
        onComplete: () => {
          this.speechBubble?.destroy(true);
          this.speechBubble = null;
        }
      });
    });
  }

  showOldLadySpeech() {
    if (!this.oldLady || !this.oldLadySpeechText) return;
    if (this.oldLadySpeechBubble) this.oldLadySpeechBubble.destroy(true);
    const bubbleWidth = 218;
    const bubbleHeight = 54;
    const container = this.add.container(this.oldLady.x, this.oldLady.y - 46);
    const bubble = this.add.graphics();
    bubble.fillStyle(0x050505, 0.9);
    bubble.fillRoundedRect(-bubbleWidth / 2, -bubbleHeight, bubbleWidth, bubbleHeight, 5);
    bubble.fillTriangle(-7, -1, 7, -1, 0, 7);
    const label = this.add.text(0, -bubbleHeight / 2, this.oldLadySpeechText, {
      fontFamily: "\"Courier New\", monospace",
      fontSize: "10px",
      color: "#f4f0dc",
      align: "center",
      lineSpacing: 0,
      wordWrap: { width: bubbleWidth - 18, useAdvancedWrap: true }
    });
    label.setOrigin(0.5, 0.5);
    container.add([bubble, label]);
    container.setDepth(DARKNESS_DEPTH + 2);
    this.oldLadySpeechBubble = container;
    this.time.delayedCall(7200, () => {
      if (!this.oldLadySpeechBubble) return;
      this.tweens.add({
        targets: this.oldLadySpeechBubble,
        alpha: 0,
        duration: 260,
        onComplete: () => {
          this.oldLadySpeechBubble?.destroy(true);
          this.oldLadySpeechBubble = null;
        }
      });
    });
  }

  updateGabiSpeechPosition() {
    if (!this.speechBubble || !this.player) return;
    this.speechBubble.setPosition(this.player.x, this.player.y - 62);
  }

  isPlayerNearLevelSelectBoard() {
    if (!this.levelSelectBoard || !this.player) return false;
    return Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      this.levelSelectBoard.x,
      this.levelSelectBoard.y - 48
    ) < BILLBOARD_INTERACT_DISTANCE;
  }

  updateBillboardPrompt() {
    if (!this.levelSelectPrompt) return;
    const shouldShow =
      state.running &&
      !state.won &&
      hud.cheatMenu.hidden &&
      this.isPlayerNearLevelSelectBoard();
    this.levelSelectPrompt.setVisible(shouldShow);
    if (shouldShow) {
      this.levelSelectPrompt.setPosition(this.levelSelectBoard.x, this.levelSelectBoard.y - 112);
    }
  }

  moveEnemies() {
    this.enemies.children.iterate((enemy) => {
      if (!enemy || !enemy.active) return;
      let direction = this.enemyDirection.get(enemy) || 1;
      if (enemy.body.blocked.left) direction = 1;
      if (enemy.body.blocked.right) direction = -1;
      const aheadX = enemy.x + direction * 18;
      const belowY = enemy.y + 24;
      const tileAhead = this.platforms.children.entries.some((platform) => {
        return Math.abs(platform.x - aheadX) < 18 && Math.abs(platform.y - belowY) < 18;
      });
      if (enemy.body.blocked.down && !tileAhead) direction *= -1;
      this.enemyDirection.set(enemy, direction);
      enemy.setVelocityX(direction * 72);
      enemy.setFlipX(direction < 0);
    });
  }

  updateMovingPlatforms() {
    this.movingPlatformRuns.forEach((platform) => {
      if (platform.body.x <= platform.minX) platform.speed = Math.abs(platform.speed);
      if (platform.body.x >= platform.maxX) platform.speed = -Math.abs(platform.speed);
      platform.body.setVelocityX(platform.speed);
      platform.visuals.forEach(({ sprite, offsetX, offsetY }) => {
        sprite.setPosition(platform.body.x + offsetX, platform.body.y + offsetY);
      });
    });
  }

  predictMovingPlatform(platform, seconds = 0) {
    let x = platform.body.x;
    let speed = platform.speed || 0;
    let remaining = Math.max(0, seconds);

    for (let index = 0; index < 8 && remaining > 0 && speed !== 0; index += 1) {
      const boundary = speed > 0 ? platform.maxX : platform.minX;
      const timeToBoundary = Math.abs(boundary - x) / Math.abs(speed);
      if (remaining <= timeToBoundary) {
        x += speed * remaining;
        remaining = 0;
      } else {
        x = boundary;
        remaining -= timeToBoundary;
        speed *= -1;
      }
    }

    return { x, speed };
  }

  getMovingPlatformRun(platform, predictSeconds = 0) {
    const prediction = this.predictMovingPlatform(platform, predictSeconds);
    const halfWidth = platform.width / 2;
    return {
      startX: prediction.x - halfWidth,
      endX: prediction.x + halfWidth,
      topY: platform.topY,
      rowIndex: platform.rowIndex,
      moving: true,
      speed: prediction.speed,
      platform
    };
  }

  getCatNavRuns(predictSeconds = 0) {
    const staticRuns = this.platformRuns.map((run) => ({
      ...run,
      moving: false,
      speed: 0
    }));
    const movingRuns = this.movingPlatformRuns.map((platform) => this.getMovingPlatformRun(platform, predictSeconds));
    return [...staticRuns, ...movingRuns];
  }

  updateWater(delta = 0) {
    if (!this.waterTiles?.length || !delta) return;
    const movement = (WATER_SPEED * delta) / 1000;
    this.waterTiles.forEach((water) => {
      water.x -= movement;
      if (water.x <= this.waterStartX - this.waterStep) {
        water.x += this.waterWrapDistance;
      }
    });
  }

  resetCatNpc() {
    if (!this.cat) return;
    this.cat.enableBody(true, this.spawnPoint.x + CAT_START_OFFSET, this.spawnPoint.y, true, true);
    this.cat.body.allowGravity = false;
    this.cat.body.moves = false;
    this.cat.setVelocity(0, 0);
    this.cat.setAcceleration(0, 0);
    this.cat.setFlipX(true);
    this.catWaiting = true;
    this.catWasOnFloor = true;
    this.catJumpPoseUntil = 0;
    this.catIntroUntil = this.time.now + 850;
    this.catRoute = null;
    this.catRouteAt = 0;
    this.catRecoveryUntil = 0;
    this.catStuckSince = 0;
    this.catProgressAt = this.time.now;
    this.catProgressX = this.cat.x;
    this.catProgressY = this.cat.y;
    this.catAirTargetX = undefined;
    this.catTransition = null;
    this.catGuidePath = this.buildCatGuidePath();
    this.catGuideIndex = -1;
    this.catGuideTravel = null;
    const spawnRun = this.findGuidePlatformRun(this.spawnPoint.x, this.spawnPoint.y);
    if (spawnRun) {
      const x = this.getCatGuideXInRun(this.spawnPoint.x + CAT_START_OFFSET, spawnRun);
      this.setCatGuidePosition(x, this.getCatGuideY(spawnRun));
    }
    this.cat.play("cat-idle", true);
  }

  updateCatNpc(time = 0) {
    if (!this.cat || !this.cat.active || !this.cat.visible) return;
    if (!state.running || state.won) {
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.cat.play("cat-idle", true);
      return;
    }

    if (this.cat.y > this.levelHeight + 60) {
      this.rescueCatToNearestPlatform();
      return;
    }

    if (time < this.catIntroUntil) {
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.cat.setFlipX(this.player.x < this.cat.x);
      this.cat.play("cat-idle", true);
      return;
    }

    if (this.level.catNpc) {
      this.updateCatGuideNpc(time);
      return;
    }

    const onFloor = this.cat.body.blocked.down;
    if (onFloor && this.catWasOnFloor === false) {
      this.catJumpPoseUntil = time + 140;
    }
    this.catWasOnFloor = onFloor;
    const floorRun = onFloor ? this.findPlatformUnder(this.cat.x) : null;
    if (onFloor) this.completeCatTransitionIfLanded(floorRun, time);

    const goal = this.getCatGoal();
    if (!goal) return;

    const reachedGoal = Phaser.Math.Distance.Between(this.cat.x, this.cat.y, goal.x, goal.y) < 150;
    const gabiReachedCat =
      Phaser.Math.Distance.Between(this.player.x, this.player.y, this.cat.x, this.cat.y) < CAT_SAFE_DISTANCE ||
      this.player.x >= this.cat.x - CAT_SAFE_DISTANCE;
    const screenRightX = this.cameras.main.scrollX + VIEW_WIDTH - CAT_SCREEN_MARGIN;
    const shouldWait =
      reachedGoal ||
      (this.cat.x >= screenRightX - 12 && this.cat.x > this.player.x + CAT_SAFE_DISTANCE && !gabiReachedCat);

    if (goal === this.keyPoint && !state.hasKey && reachedGoal) this.revealKey();

    if ((this.catWaiting || shouldWait) && !gabiReachedCat) {
      this.catWaiting = true;
      this.catTransition = null;
      this.catAirTargetX = undefined;
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(floorRun?.moving ? floorRun.speed : 0);
      this.cat.play("cat-idle", true);
      return;
    }

    if (reachedGoal && (state.hasKey || Math.abs(this.player.x - this.cat.x) < CAT_SAFE_DISTANCE)) {
      this.catWaiting = true;
      this.catTransition = null;
      this.catAirTargetX = undefined;
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(floorRun?.moving ? floorRun.speed : 0);
      this.cat.play("cat-idle", true);
      return;
    }

    this.catWaiting = false;
    this.followCatRoute(goal, time, onFloor, floorRun);
  }

  buildCatGuidePath() {
    if (!this.level.catNpc) return [];

    const stops = [];
    this.levelRows.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (!["g", "j", "b", "k", "d"].includes(cell)) return;
        const x = columnIndex * TILE + TILE / 2;
        const itemY = rowIndex * TILE + TILE / 2;
        const run = this.findGuidePlatformRun(x, itemY);
        stops.push({
          kind: cell,
          row: rowIndex,
          column: columnIndex,
          x: run ? this.getCatGuideXBesideItem(x, run, cell) : x,
          y: run ? this.getCatGuideY(run) : itemY,
          run
        });
      });
    });

    const basket = stops.find((stop) => stop.kind === "b");
    if (!basket) return stops.sort((a, b) => a.column - b.column || a.row - b.row);

    const beforeBasket = stops
      .filter((stop) => stop === basket || (stop.column <= basket.column + 6 && stop.row < basket.row))
      .sort((a, b) => a.row - b.row || a.column - b.column);
    const afterBasket = stops
      .filter((stop) => !beforeBasket.includes(stop))
      .sort((a, b) => b.row - a.row || a.column - b.column);

    return [...beforeBasket, ...afterBasket];
  }

  findGuidePlatformRun(x, y) {
    return this.platformRuns
      .filter((run) => x >= run.startX - 48 && x <= run.endX + 48 && run.topY >= y - 48)
      .sort((a, b) => Math.abs(a.topY - y) - Math.abs(b.topY - y))[0] || null;
  }

  getCatGuideY(run) {
    return run.topY - CAT_GUIDE_PLATFORM_Y;
  }

  getCatGuideXInRun(x, run) {
    const minX = run.startX + CAT_GUIDE_RUN_PADDING;
    const maxX = run.endX - CAT_GUIDE_RUN_PADDING;
    return minX <= maxX ? Phaser.Math.Clamp(x, minX, maxX) : (run.startX + run.endX) / 2;
  }

  getCatGuideXBesideItem(itemX, run, kind = "g") {
    const preferredDirection = kind === "d" ? -1 : 1;
    const preferredX = itemX + preferredDirection * CAT_ITEM_STOP_OFFSET;
    const fallbackX = itemX - preferredDirection * CAT_ITEM_STOP_OFFSET;
    const minX = run.startX + CAT_GUIDE_RUN_PADDING;
    const maxX = run.endX - CAT_GUIDE_RUN_PADDING;
    if (minX > maxX) return (run.startX + run.endX) / 2;
    if (preferredX >= minX && preferredX <= maxX) return preferredX;
    if (fallbackX >= minX && fallbackX <= maxX) return fallbackX;
    return Phaser.Math.Clamp(preferredX, minX, maxX);
  }

  updateCatGuideNpc(time = 0) {
    if (this.basketPromptActive) {
      this.finishCatGuideTravel();
      this.playCatGuideIdle();
      return;
    }

    if (this.catGuideTravel) {
      this.updateCatGuideTravel(time);
      return;
    }

    const allowedIndex = this.getAllowedCatGuideIndex();
    if (allowedIndex < 0) {
      this.playCatGuideIdle();
      return;
    }

    const currentIndex = Math.min(this.catGuideIndex, allowedIndex);
    const currentStop = this.catGuidePath[currentIndex];
    if (currentStop?.kind === "k" && !state.hasKey) this.revealKey();

    const nextIndex = this.getNextCatGuideIndex(allowedIndex);
    if (nextIndex <= this.catGuideIndex) {
      this.playCatGuideIdle();
      return;
    }

    this.startCatGuideTravel(nextIndex, time);
  }

  getAllowedCatGuideIndex() {
    if (!this.catGuidePath?.length) return -1;
    const basketIndex = this.catGuidePath.findIndex((stop) => stop.kind === "b");
    const keyIndex = this.catGuidePath.findIndex((stop) => stop.kind === "k");
    const doorIndex = this.catGuidePath.findIndex((stop) => stop.kind === "d");

    if (!state.hasAcornBasket && basketIndex >= 0) return basketIndex;
    if (!state.hasKey && keyIndex >= 0) return keyIndex;
    return doorIndex >= 0 ? doorIndex : this.catGuidePath.length - 1;
  }

  isGabiCloseToGuideCat() {
    const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.cat.x, this.cat.y);
    const sameBand = Math.abs(this.player.y - this.cat.y) < 130 && this.player.x > this.cat.x - 170;
    return distance < 185 || sameBand;
  }

  getNextCatGuideIndex(allowedIndex) {
    const canAdvance = this.catGuideIndex < allowedIndex;
    if (!canAdvance) return this.catGuideIndex;
    if (this.isGabiCloseToGuideCat()) return this.catGuideIndex + 1;

    const playerProgressIndex = this.getPlayerCatGuideProgressIndex(allowedIndex);
    if (playerProgressIndex <= this.catGuideIndex) return this.catGuideIndex;

    const playerStop = this.catGuidePath[playerProgressIndex];
    const catStop = this.catGuidePath[Math.max(0, this.catGuideIndex)];
    const playerNearPath = Phaser.Math.Distance.Between(this.player.x, this.player.y, playerStop.x, playerStop.y) < CAT_AHEAD_TRIGGER_DISTANCE;
    const playerPastCat =
      this.player.x > this.cat.x + CAT_AHEAD_TRIGGER_DISTANCE ||
      this.player.y > this.cat.y + CAT_AHEAD_TRIGGER_DISTANCE ||
      playerProgressIndex > this.catGuideIndex + 1;
    const catBehindCurrentStop = !catStop || Phaser.Math.Distance.Between(this.cat.x, this.cat.y, catStop.x, catStop.y) < CAT_AHEAD_TRIGGER_DISTANCE;

    if (!playerNearPath || !playerPastCat || !catBehindCurrentStop) return this.catGuideIndex;
    return Phaser.Math.Clamp(playerProgressIndex + CAT_AHEAD_TARGET_STOPS, this.catGuideIndex + 1, allowedIndex);
  }

  getPlayerCatGuideProgressIndex(allowedIndex) {
    let bestIndex = Math.max(0, this.catGuideIndex);
    let bestScore = Infinity;
    const maxIndex = Math.min(allowedIndex, this.catGuidePath.length - 1);

    for (let index = 0; index <= maxIndex; index += 1) {
      const stop = this.catGuidePath[index];
      const dx = Math.abs(this.player.x - stop.x);
      const dy = Math.abs(this.player.y - stop.y);
      const score = dx + dy * 1.15;
      if (score < bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    }

    return bestIndex;
  }

  startCatGuideTravel(targetIndex, time = 0) {
    const target = this.catGuidePath[targetIndex];
    if (!target) return;

    const fromX = this.cat.x;
    const fromY = this.cat.y;
    const distance = Phaser.Math.Distance.Between(fromX, fromY, target.x, target.y);
    const sameRun = target.run && this.catGuideIndex >= 0 && this.isSameCatRun(target.run, this.catGuidePath[this.catGuideIndex]?.run);
    this.catGuideTravel = {
      targetIndex,
      fromX,
      fromY,
      toX: target.x,
      toY: target.y,
      startedAt: time,
      duration: Phaser.Math.Clamp((distance / CAT_RUN_SPEED) * 1000, 360, 1500),
      arc: sameRun ? 0 : Phaser.Math.Clamp(36 + Math.abs(target.x - fromX) * 0.16 + Math.max(0, fromY - target.y) * 0.24, 42, 132)
    };
    this.cat.setFlipX(target.x < fromX);
    this.cat.play("cat-run", true);
  }

  updateCatGuideTravel(time = 0) {
    const travel = this.catGuideTravel;
    if (!travel) return;

    const progress = Phaser.Math.Clamp((time - travel.startedAt) / travel.duration, 0, 1);
    const eased = Phaser.Math.Easing.Sine.InOut(progress);
    const x = Phaser.Math.Linear(travel.fromX, travel.toX, eased);
    const baseY = Phaser.Math.Linear(travel.fromY, travel.toY, eased);
    const arcY = travel.arc * Math.sin(Math.PI * progress);
    const y = baseY - arcY;

    this.setCatGuidePosition(x, y);
    if (travel.arc > 0) {
      this.cat.anims.stop();
      this.cat.setFrame(progress < 0.55 ? 5 : 6);
    } else {
      this.cat.play("cat-run", true);
    }

    if (progress < 1) return;
    this.catGuideIndex = travel.targetIndex;
    this.finishCatGuideTravel();
    const stop = this.catGuidePath[this.catGuideIndex];
    if (stop?.kind === "k" && !state.hasKey) this.revealKey();
    this.playCatGuideIdle();
  }

  finishCatGuideTravel() {
    if (!this.catGuideTravel) return;
    this.setCatGuidePosition(this.catGuideTravel.toX, this.catGuideTravel.toY);
    this.catGuideTravel = null;
  }

  setCatGuidePosition(x, y) {
    this.cat.setPosition(x, y);
    this.cat.body?.reset(x, y);
  }

  playCatGuideIdle() {
    this.cat.setAccelerationX(0);
    this.cat.setVelocity(0, 0);
    this.cat.setFlipX(this.player.x < this.cat.x);
    this.cat.play("cat-idle", true);
  }

  followCatRoute(goal, time = 0, onFloor = false, floorRun = null) {
    this.watchCatProgress(time, onFloor);

    if (this.catTransition && this.continueCatTransition(time, onFloor, floorRun)) return;

    if (time < this.catRecoveryUntil) {
      if (this.runCatRecovery(goal, time, onFloor, floorRun)) return;
    }

    if (!onFloor) {
      this.followCatAirTarget(time);
      return;
    }

    const currentRun = floorRun || this.findPlatformUnder(this.cat.x);
    if (!currentRun) {
      this.activateCatRecovery(time);
      this.runCatRecovery(goal, time, onFloor, currentRun);
      return;
    }

    const route = this.getCatRoute(goal, time);
    if (!route?.length) {
      this.activateCatRecovery(time);
      this.runCatRecovery(goal, time, onFloor, currentRun);
      return;
    }

    const goalRun = route[route.length - 1];
    if (this.isSameCatRun(currentRun, goalRun)) {
      const targetX = Phaser.Math.Clamp(goal.x, currentRun.startX + 46, currentRun.endX - 46);
      if (Math.abs(this.cat.x - targetX) < 26) {
        this.cat.setAccelerationX(0);
        this.cat.setVelocityX(currentRun.moving ? currentRun.speed : 0);
        this.cat.play("cat-idle", true);
        return;
      }
      this.moveCatTowardX(targetX, currentRun, time);
      return;
    }

    const nextRun = this.getNextCatRouteRun(route, currentRun);
    if (!nextRun) {
      this.activateCatRecovery(time);
      this.runCatRecovery(goal, time, onFloor, currentRun);
      return;
    }

    this.moveCatFromRunToRun(currentRun, nextRun, time);
  }

  getCatRoute(goal, time = 0) {
    const goalKey = `${Math.round(goal.x)}:${Math.round(goal.y)}:${state.hasAcornBasket ? 1 : 0}:${state.hasKey ? 1 : 0}`;
    if (!this.catRoute || this.catRouteGoalKey !== goalKey || time - this.catRouteAt > CAT_ROUTE_REPLAN_MS) {
      this.catRoute = this.buildCatRoute(goal);
      this.catRouteGoalKey = goalKey;
      this.catRouteAt = time;
    }
    return this.catRoute;
  }

  buildCatRoute(goal) {
    const runs = this.getCatNavRuns();
    const startIndex = this.findCatRunIndexAt(this.cat.x, runs);
    const goalIndex = this.findGoalRunIndex(goal, runs);
    if (startIndex < 0 || goalIndex < 0) return null;
    if (startIndex === goalIndex) return [runs[startIndex]];

    const costs = Array(runs.length).fill(Infinity);
    const previous = Array(runs.length).fill(-1);
    const queue = [startIndex];
    costs[startIndex] = 0;

    while (queue.length) {
      queue.sort((a, b) => costs[a] - costs[b] || this.catRunGoalDistance(runs[a], goal) - this.catRunGoalDistance(runs[b], goal));
      const index = queue.shift();
      if (index === goalIndex) break;

      this.getCatRouteNeighbors(index, runs, goal).forEach((neighborIndex) => {
        const stepCost = this.catTransitionCost(runs[index], runs[neighborIndex], goal);
        const nextCost = costs[index] + stepCost;
        if (nextCost >= costs[neighborIndex]) return;
        costs[neighborIndex] = nextCost;
        previous[neighborIndex] = index;
        if (!queue.includes(neighborIndex)) queue.push(neighborIndex);
      });
    }

    if (!Number.isFinite(costs[goalIndex])) return null;

    const route = [];
    for (let index = goalIndex; index >= 0; index = previous[index]) {
      route.unshift(runs[index]);
      if (index === startIndex) break;
    }
    return route[0] === runs[startIndex] ? route : null;
  }

  getCatRouteNeighbors(index, runs, goal) {
    return runs
      .map((run, runIndex) => ({ run, runIndex }))
      .filter(({ runIndex, run }) => runIndex !== index && this.canCatTraverse(runs[index], run))
      .sort((a, b) => this.catRunGoalDistance(a.run, goal) - this.catRunGoalDistance(b.run, goal))
      .map(({ runIndex }) => runIndex);
  }

  canCatTraverse(from, to) {
    if (!from || !to || this.isSameCatRun(from, to) || to.endX - to.startX < 80) return false;
    const vertical = to.topY - from.topY;
    const overlap = Math.min(from.endX, to.endX) - Math.max(from.startX, to.startX);
    const horizontalGap = overlap >= 0
      ? 0
      : Math.min(Math.abs(to.startX - from.endX), Math.abs(from.startX - to.endX));

    if (vertical > 12) {
      const leftEdgeReach = to.endX > from.startX - 340 && to.startX <= from.startX + 20;
      const rightEdgeReach = to.startX < from.endX + 340 && to.endX >= from.endX - 20;
      return vertical < 330 && horizontalGap < 390 && (leftEdgeReach || rightEdgeReach);
    }
    if (vertical < -12) return vertical > -205 && horizontalGap < 310;
    return horizontalGap < 300 || overlap > 20;
  }

  catTransitionCost(from, to, goal) {
    const vertical = Math.abs(to.topY - from.topY);
    const centerGap = Math.abs(this.getCatRunCenterX(to) - this.getCatRunCenterX(from));
    const movingPenalty = to.moving ? 0.7 : 0;
    return 1 + centerGap / 420 + vertical / 260 + movingPenalty + this.catRunGoalDistance(to, goal) / 5000;
  }

  catRunGoalDistance(run, goal) {
    const targetX = Phaser.Math.Clamp(goal.x, run.startX + 46, run.endX - 46);
    return Math.abs(targetX - goal.x) + Math.abs((run.topY - CAT_PLATFORM_Y) - goal.y) * 0.85;
  }

  getNextCatRouteRun(route, currentRun) {
    const currentIndex = route.findIndex((run) => this.isSameCatRun(run, currentRun));
    if (currentIndex >= 0 && currentIndex < route.length - 1) return route[currentIndex + 1];
    return route[1] || null;
  }

  moveCatFromRunToRun(currentRun, nextRun, time = 0) {
    const direction = this.getCatRouteDirection(currentRun, nextRun);
    const edgeX = direction > 0 ? currentRun.endX - CAT_EDGE_TARGET_PADDING : currentRun.startX + CAT_EDGE_TARGET_PADDING;

    if (Math.abs(this.cat.x - edgeX) > 18) {
      this.moveCatTowardX(edgeX, currentRun, time);
      return;
    }

    this.catAirTargetX = Phaser.Math.Clamp(this.getCatRunCenterX(nextRun), nextRun.startX + 46, nextRun.endX - 46);
    const nextIsLower = nextRun.topY > currentRun.topY + 12;
    const nextIsHigher = nextRun.topY < currentRun.topY - 12;
    const horizontalGap = direction > 0 ? nextRun.startX - currentRun.endX : currentRun.startX - nextRun.endX;
    const needsLongDropHop = nextIsLower && horizontalGap > 92;
    const needsJump = needsLongDropHop || (!nextIsLower && (nextIsHigher || Math.abs(nextRun.topY - currentRun.topY) <= 12));
    const velocityX = direction * CAT_RUN_SPEED + (currentRun.moving ? currentRun.speed : 0);

    this.catTransition = {
      fromRun: currentRun,
      toRun: nextRun,
      direction,
      startedAt: time,
      lastJumpAt: needsJump ? time : -Infinity,
      needsJump,
      launched: true
    };
    this.cat.setAccelerationX(direction * 1050);
    this.cat.setVelocityX(velocityX);
    this.cat.setFlipX(direction < 0);
    if (needsLongDropHop) {
      this.catJumpPoseUntil = time + 110;
      this.cat.setVelocityY(-CAT_JUMP_SPEED * 0.62);
    } else if (needsJump) {
      this.catJumpPoseUntil = time + 130;
      this.cat.setVelocityY(-CAT_JUMP_SPEED);
    }
    this.updateCatAnimation(true, time);
  }

  continueCatTransition(time = 0, onFloor = false, floorRun = null) {
    const transition = this.catTransition;
    if (!transition) return false;

    if (time - transition.startedAt > CAT_TRANSITION_TIMEOUT_MS) {
      this.catTransition = null;
      this.activateCatRecovery(time);
      return false;
    }

    if (!onFloor) {
      this.followCatAirTarget(time);
      return true;
    }

    const currentRun = floorRun || this.findPlatformUnder(this.cat.x);
    if (!currentRun) {
      this.catTransition = null;
      this.activateCatRecovery(time);
      return false;
    }

    if (this.isSameCatRun(currentRun, transition.toRun) || !this.isSameCatRun(currentRun, transition.fromRun)) {
      this.completeCatTransition();
      return false;
    }

    if (!transition.launched) {
      const edgeX = transition.direction > 0
        ? currentRun.endX - CAT_EDGE_TARGET_PADDING
        : currentRun.startX + CAT_EDGE_TARGET_PADDING;
      if (Math.abs(this.cat.x - edgeX) > 16) {
        this.moveCatTowardX(edgeX, currentRun, time);
        return true;
      }
      transition.launched = true;
    }

    this.catAirTargetX = Phaser.Math.Clamp(
      this.getCatRunCenterX(transition.toRun),
      transition.toRun.startX + 46,
      transition.toRun.endX - 46
    );
    this.cat.setAccelerationX(transition.direction * 1050);
    this.cat.setVelocityX(transition.direction * CAT_RUN_SPEED + (currentRun.moving ? currentRun.speed : 0));
    this.cat.setFlipX(transition.direction < 0);
    if (transition.needsJump && time - transition.lastJumpAt > 360) {
      transition.lastJumpAt = time;
      this.catJumpPoseUntil = time + 120;
      this.cat.setVelocityY(-CAT_JUMP_SPEED * 0.72);
    }
    this.updateCatAnimation(true, time);
    return true;
  }

  completeCatTransitionIfLanded(floorRun, time = 0) {
    if (!this.catTransition || !floorRun) return;
    if (this.isSameCatRun(floorRun, this.catTransition.toRun) || !this.isSameCatRun(floorRun, this.catTransition.fromRun)) {
      this.completeCatTransition(time);
    }
  }

  completeCatTransition(time = this.time.now) {
    this.catTransition = null;
    this.catAirTargetX = undefined;
    this.catRoute = null;
    this.catRecoveryUntil = 0;
    this.catStuckSince = 0;
    this.resetCatProgressSample(time);
  }

  moveCatTowardX(targetX, currentRun, time = 0) {
    const delta = targetX - this.cat.x;
    if (Math.abs(delta) < 12) {
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(currentRun?.moving ? currentRun.speed : 0);
      this.cat.play("cat-idle", true);
      return;
    }

    const direction = delta > 0 ? 1 : -1;
    this.cat.setAccelerationX(direction * 1050);
    this.cat.setVelocityX(direction * CAT_RUN_SPEED + (currentRun?.moving ? currentRun.speed : 0));
    this.cat.setFlipX(direction < 0);
    this.updateCatAnimation(true, time);
  }

  followCatAirTarget(time = 0) {
    if (this.catAirTargetX !== undefined) {
      const delta = this.catAirTargetX - this.cat.x;
      if (Math.abs(delta) > 22) {
        const direction = delta > 0 ? 1 : -1;
        this.cat.setVelocityX(direction * CAT_RUN_SPEED * 0.88);
        this.cat.setFlipX(direction < 0);
      } else {
        this.cat.setVelocityX(Phaser.Math.Clamp(this.cat.body.velocity.x, -110, 110));
      }
    }
    this.updateCatAnimation(false, time);
  }

  getCatRouteDirection(currentRun, nextRun) {
    if (nextRun.startX >= currentRun.endX - 6) return 1;
    if (nextRun.endX <= currentRun.startX + 6) return -1;
    return this.getCatRunCenterX(nextRun) >= this.cat.x ? 1 : -1;
  }

  getCatRunCenterX(run) {
    return (run.startX + run.endX) / 2;
  }

  findCatRunIndexAt(x, runs = this.getCatNavRuns()) {
    const footY = this.cat.body?.bottom ?? this.cat.y + CAT_PLATFORM_Y;
    return runs.findIndex((run) => {
      const edgeSlack = this.catTransition && this.isSameCatRun(run, this.catTransition.fromRun)
        ? CAT_EDGE_TARGET_PADDING + 18
        : 6;
      const horizontallyInside = x >= run.startX - edgeSlack && x <= run.endX + edgeSlack;
      const footOnTop = Math.abs(footY - run.topY) < 34;
      const spriteOnTop = Math.abs(this.cat.y - (run.topY - CAT_PLATFORM_Y)) < 76;
      return horizontallyInside && (footOnTop || spriteOnTop);
    });
  }

  findGoalRunIndex(goal, runs = this.getCatNavRuns()) {
    const candidates = runs.map((run, index) => ({ run, index })).filter(({ run }) => {
      return goal.x >= run.startX - 26 && goal.x <= run.endX + 26 && run.topY >= goal.y - 36;
    });

    const ranked = (candidates.length ? candidates : runs.map((run, index) => ({ run, index }))).sort((a, b) => {
      return this.catRunGoalDistance(a.run, goal) - this.catRunGoalDistance(b.run, goal);
    });
    return ranked[0]?.index ?? -1;
  }

  watchCatProgress(time = 0, onFloor = false) {
    if (!onFloor || this.catWaiting || time < this.catIntroUntil) {
      this.resetCatProgressSample(time);
      return;
    }
    if (time - (this.catProgressAt || 0) < CAT_STUCK_SAMPLE_MS) return;

    const moved = Phaser.Math.Distance.Between(this.cat.x, this.cat.y, this.catProgressX, this.catProgressY);
    if (moved < CAT_STUCK_DISTANCE && Math.abs(this.cat.body.velocity.x) > 35) {
      if (!this.catStuckSince) this.catStuckSince = time;
      if (time - this.catStuckSince > CAT_STUCK_SAMPLE_MS) this.activateCatRecovery(time);
    } else {
      this.catStuckSince = 0;
    }
    this.resetCatProgressSample(time);
  }

  resetCatProgressSample(time = 0) {
    this.catProgressAt = time;
    this.catProgressX = this.cat.x;
    this.catProgressY = this.cat.y;
  }

  activateCatRecovery(time = 0) {
    this.catRecoveryUntil = Math.max(this.catRecoveryUntil || 0, time + CAT_RECOVERY_MS);
    this.catRoute = null;
  }

  runCatRecovery(goal, time = 0, onFloor = false, floorRun = null) {
    if (!onFloor) {
      this.followCatAirTarget(time);
      return true;
    }

    const currentRun = floorRun || this.findPlatformUnder(this.cat.x);
    const route = this.buildCatRoute(goal);
    if (!currentRun) {
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.cat.play("cat-idle", true);
      return true;
    }

    const nextRun = route?.length ? this.getNextCatRouteRun(route, currentRun) : null;
    if (nextRun) {
      this.moveCatFromRunToRun(currentRun, nextRun, time);
      return true;
    }

    const direction = goal.x >= this.cat.x ? 1 : -1;
    const recoveryEdgeX = direction > 0
      ? currentRun.endX - CAT_EDGE_TARGET_PADDING
      : currentRun.startX + CAT_EDGE_TARGET_PADDING;
    if (this.catStuckSince && time - this.catStuckSince > CAT_RESCUE_MS && Math.abs(this.cat.x - recoveryEdgeX) < 34) {
      this.catAirTargetX = goal.x;
      this.catJumpPoseUntil = time + 130;
      this.cat.setVelocity(direction * CAT_RUN_SPEED, -CAT_JUMP_SPEED * 0.58);
      this.cat.setAccelerationX(direction * 1050);
      this.cat.setFlipX(direction < 0);
      this.catStuckSince = 0;
      this.resetCatProgressSample(time);
      return true;
    }

    this.moveCatTowardX(recoveryEdgeX, currentRun, time);
    return true;
  }

  getCatGoal() {
    if (this.basketPoint && !state.hasAcornBasket) return this.basketPoint;
    return state.hasKey ? this.doorPoint : this.keyPoint;
  }

  isSameCatRun(a, b) {
    if (!a || !b) return false;
    if (a.moving || b.moving) return a.platform && a.platform === b.platform;
    return a.startX === b.startX && a.endX === b.endX && a.topY === b.topY;
  }

  findPlatformUnder(x) {
    const runs = this.getCatNavRuns();
    const index = this.findCatRunIndexAt(x, runs);
    return index >= 0 ? runs[index] : null;
  }

  rescueCatToNearestPlatform() {
    const run = this.platformRuns.find((candidate) => candidate.endX > this.player.x + 120) || this.platformRuns[0];
    if (!run) return;
    this.cat.setPosition(Phaser.Math.Clamp(this.player.x + 240, run.startX + 50, run.endX - 50), run.topY - CAT_PLATFORM_Y);
    this.cat.setVelocity(0, 0);
    this.catWaiting = true;
    this.catWasOnFloor = true;
    this.catJumpPoseUntil = 0;
    this.catAirTargetX = undefined;
    this.catRoute = null;
    this.catTransition = null;
    this.catRecoveryUntil = 0;
    this.catStuckSince = 0;
  }

  updateCatAnimation(onFloor, time = 0) {
    if (!this.cat) return;
    if (!onFloor) {
      if (time < this.catJumpPoseUntil) {
        this.cat.anims.stop();
        this.cat.setFrame(4);
      } else {
        this.cat.anims.stop();
        this.cat.setFrame(this.cat.body.velocity.y < -20 ? 5 : 6);
      }
    } else if (time < this.catJumpPoseUntil) {
      this.cat.anims.stop();
      this.cat.setFrame(7);
    } else if (Math.abs(this.cat.body.velocity.x) > 28) {
      this.cat.play("cat-run", true);
    } else {
      this.cat.play("cat-idle", true);
    }
  }

  attachEnemyLabel(enemy) {
    const name = this.enemyNames.shift() || "GABI OPS BOT";
    const label = this.add.text(enemy.x, enemy.y - 38, name, {
      fontFamily: "\"Courier New\", monospace",
      fontSize: "8px",
      color: "#fff6b0",
      backgroundColor: "rgba(0, 0, 0, 0.72)",
      padding: { left: 4, right: 4, top: 2, bottom: 2 },
      align: "center",
      wordWrap: { width: 112, useAdvancedWrap: true }
    });
    label.setOrigin(0.5, 1);
    label.setDepth(9);
    this.enemyLabels.set(enemy, label);
  }

  updateEnemyLabels() {
    this.enemyLabels.forEach((label, enemy) => {
      if (!enemy.active) {
        label.setVisible(false);
        return;
      }
      label.setPosition(enemy.x, enemy.y - 34);
    });
  }

  updateAcorns(time) {
    if (this.basketPromptActive || this.lanternPromptActive) return;
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active || !state.running || state.won) return;
      if (time >= acorn.getData("nextDrop") && acorn.body.velocity.y === 0) {
        acorn.setPosition(acorn.getData("homeX"), this.cameras.main.scrollY - FALLING_OBJECT_SPAWN_OFFSET);
        acorn.setVelocity(0, acorn.getData("pace"));
        acorn.setAngularVelocity(Phaser.Math.Between(-140, 140));
      }

      if (acorn.y > this.cameras.main.scrollY + PLAY_HEIGHT + 90) {
        this.resetAcorn(acorn);
      }
    });
  }

  updateThrownItems() {
    if (!this.thrownItems) return;
    this.thrownItems.children.iterate((item) => {
      if (!item || !item.active) return;
      const outOfView =
        item.x < this.cameras.main.scrollX - 160 ||
        item.x > this.cameras.main.scrollX + VIEW_WIDTH + 160 ||
        item.y > this.cameras.main.scrollY + PLAY_HEIGHT + 180 ||
        item.y < this.cameras.main.scrollY - PLAY_HEIGHT - 180;
      if (!state.running || state.won || outOfView) item.disableBody(true, true);
    });
  }

  canThrownItemBounce(item) {
    return Boolean(item?.active && (item.getData("bouncesLeft") || 0) > 0);
  }

  handleThrownItemPlatformBounce(item) {
    this.consumeThrownItemBounce(item);
  }

  consumeThrownItemBounce(item) {
    if (!item?.active) return false;
    const now = this.time.now;
    if (now - (item.getData("lastBounceAt") || -Infinity) < 120) return true;
    const bouncesLeft = item.getData("bouncesLeft") || 0;
    if (bouncesLeft <= 0) return false;

    const remaining = bouncesLeft - 1;
    item.setData("bouncesLeft", remaining);
    item.setData("lastBounceAt", now);
    item.setAngularVelocity(Phaser.Math.Clamp(item.body.velocity.x * 2.2, -720, 720));
    if (remaining <= 0) {
      item.setBounce(0, 0);
      item.body.checkCollision.none = true;
    }
    return true;
  }

  ricochetThrownItemFromEnemy(item, enemy) {
    if (!item?.active) return;
    const direction = item.x < enemy.x ? -1 : 1;
    this.consumeThrownItemBounce(item);
    item.body.checkCollision.none = (item.getData("bouncesLeft") || 0) <= 0;
    item.setVelocity(direction * 260, -260);
    item.setAngularVelocity(direction * 640);
  }

  updateParallax() {
    if (!this.parallaxLayers) return;
    const scrollX = this.cameras.main.scrollX;
    this.parallaxLayers.forEach(({ sprite, speed }) => {
      sprite.tilePositionX = scrollX * speed;
    });
  }

  startTimer() {
    if (this.timerEvent) this.timerEvent.remove(false);
    this.timerEvent = this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: () => {
        if (!state.running || state.won) return;
        state.timeLeft = Math.max(0, state.timeLeft - 1);
        updateHud();
        if (state.timeLeft <= 0) this.loseLife();
      }
    });
  }

  startMusic() {
    const soundtrack = this.level.soundtrack || "bgm";
    try {
      this.resumeAudioContext();
      if (this.bgm?.isPlaying && this.bgm.key === soundtrack) return;
      this.sound.stopAll();
      if (this.bgm && this.bgm.key === soundtrack) {
        this.bgm.play();
        return;
      }
      if (this.bgm) this.bgm.destroy();
      this.bgm = this.sound.add(soundtrack, { loop: true, volume: 0.35 });
      this.bgm.play();
    } catch (_error) {
      this.bgm = null;
    }
  }

  registerAudioLifecycle() {
    this.unregisterAudioLifecycle();

    this.handlePageHidden = () => {
      this.wasMusicPlayingBeforeHidden = this.wasMusicPlayingBeforeHidden || Boolean(this.bgm?.isPlaying);
      this.stopGameAudio();
    };

    this.handlePageVisible = () => {
      if (!state.running || state.won || !this.wasMusicPlayingBeforeHidden) return;
      this.resumeAudioContext();
      this.startMusic();
    };

    this.handleVisibilityChange = () => {
      if (document.hidden) {
        this.handlePageHidden();
      } else {
        this.handlePageVisible();
      }
    };

    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    window.addEventListener("pagehide", this.handlePageHidden);
    window.addEventListener("beforeunload", this.handlePageHidden);
    window.addEventListener("unload", this.handlePageHidden);
    window.addEventListener("blur", this.handlePageHidden);
    window.addEventListener("focus", this.handlePageVisible);

    this.handleSceneShutdown = () => {
      this.unregisterAudioLifecycle();
      this.cancelLevelRuntime();
      this.stopGameAudio();
    };
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.handleSceneShutdown, this);
  }

  unregisterAudioLifecycle() {
    if (this.handleSceneShutdown) {
      this.events.off(Phaser.Scenes.Events.SHUTDOWN, this.handleSceneShutdown, this);
      this.handleSceneShutdown = null;
    }
    if (this.handleVisibilityChange) document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    if (this.handlePageHidden) {
      window.removeEventListener("pagehide", this.handlePageHidden);
      window.removeEventListener("beforeunload", this.handlePageHidden);
      window.removeEventListener("unload", this.handlePageHidden);
      window.removeEventListener("blur", this.handlePageHidden);
    }
    if (this.handlePageVisible) window.removeEventListener("focus", this.handlePageVisible);
    this.handleVisibilityChange = null;
    this.handlePageHidden = null;
    this.handlePageVisible = null;
  }

  cancelLevelRuntime() {
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = false;
    state.running = false;
    setStoryIntroVisible(false);
    setItemPickupVisible(false);
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.releaseBasketPromptControlLock();
    if (this.timerEvent) {
      this.timerEvent.remove(false);
      this.timerEvent = null;
    }
  }

  stopGameAudio() {
    if (this.bgm?.isPlaying) this.bgm.stop();
    if (this.sound?.context?.state === "running") this.sound.context.suspend();
  }

  resumeAudioContext() {
    if (this.sound?.context?.state === "suspended") {
      this.sound.context.resume().catch(() => {});
    }
  }

  collectGem(_player, gem) {
    gem.disableBody(true, true);
    state.gems += 1;
    state.score += 100;
    this.cameras.main.flash(80, 114, 214, 201, false);
    updateHud();
  }

  collectHeart(_player, heart) {
    if (this.time.now < (heart.getData("armedAt") || 0)) return;
    heart.disableBody(true, true);
    state.lives += 1;
    state.score += 150;
    this.cameras.main.flash(90, 255, 96, 150, false);
    updateHud();
  }

  collectDoubleJump(_player, doubleJump) {
    doubleJump.disableBody(true, true);
    state.hasDoubleJump = true;
    state.score += 300;
    this.cameras.main.flash(130, 139, 220, 255, false);
    updateHud();
  }

  collectLantern(_player, lantern) {
    lantern.disableBody(true, true);
    state.hasLantern = true;
    state.score += 350;
    this.lanternPromptActive = true;
    this.lockPlayerForBasketPrompt();
    this.switchPlayerToLanternSprite();
    this.updateLanternOverlay();
    setItemPickupVisible(true, {
      name: "Lantern",
      instruction: "Its light cuts through the tunnel darkness. Press Enter to continue",
      image: this.pixelatedLanternImage || `./public/assets/environment/lantern.png?v=${ASSET_VERSION}`
    });
    this.cameras.main.flash(120, 255, 225, 120, false);
    updateHud();
  }

  collectAcornBasket(_player, basket) {
    basket.disableBody(true, true);
    state.hasAcornBasket = true;
    state.score += 400;
    this.basketPromptActive = true;
    this.lastActionAt = -Infinity;
    this.catWaiting = false;
    this.catRoute = null;
    this.lockPlayerForBasketPrompt();
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
    setItemPickupVisible(true, {
      name: "Acorn Basket",
      instruction: "Press Enter to throw acorns",
      image: this.pixelatedBasketImage || `./public/assets/environment/acorn_basket.png?v=${ASSET_VERSION}`
    });
    this.cameras.main.flash(120, 255, 220, 90, false);
    updateHud();
  }

  resetKeyReveal() {
    if (!this.keySprite || !this.keyPoint || !this.level.catNpc) return;
    this.keyRevealed = false;
    this.keySprite.disableBody(true, true);
  }

  revealKey() {
    if (!this.keySprite || !this.keyPoint || this.keyRevealed) return;
    this.keyRevealed = true;
    this.keySprite.enableBody(true, this.keyPoint.x, this.keyPoint.y, true, true);
    this.keySprite.setDepth(ITEM_DEPTH);
    this.tweens.add({
      targets: this.keySprite,
      scale: ITEM_SCALE * 1.18,
      duration: 180,
      yoyo: true,
      ease: "Sine.inOut"
    });
  }

  collectKey(_player, key) {
    key.disableBody(true, true);
    state.hasKey = true;
    state.score += 500;
    updateHud();
  }

  defeatEnemy(enemy) {
    this.tryDropHeart(enemy.x, enemy.y);
    enemy.disableBody(true, true);
    const label = this.enemyLabels.get(enemy);
    if (label) label.setVisible(false);
  }

  tryDropHeart(x, y) {
    if (this.heartDropsCreated >= MAX_HEART_DROPS_PER_LEVEL) return;
    if (Phaser.Math.FloatBetween(0, 1) > HEART_DROP_CHANCE) return;

    this.heartDropsCreated += 1;
    const settleY = this.findPickupYOnPlatform(x, y);
    const heart = this.heartDrops.create(
      x + Phaser.Math.Between(-12, 12),
      settleY + Phaser.Math.Between(-4, 4),
      "life-heart"
    );
    heart.setScale(HEART_SCALE);
    heart.setDepth(ITEM_DEPTH);
    heart.setCircle(58, 61, 58);
    heart.body.allowGravity = false;
    heart.body.immovable = true;
    heart.setData("armedAt", this.time.now + HEART_PICKUP_DELAY);
    const settleX = heart.x + Phaser.Math.RND.pick([-1, 1]) * Phaser.Math.Between(42, 64);
    this.tweens.add({
      targets: heart,
      x: settleX,
      y: settleY,
      duration: 360,
      ease: "Quad.out",
      onComplete: () => {
        this.tweens.add({
          targets: heart,
          y: heart.y - 9,
          duration: 520,
          yoyo: true,
          repeat: -1,
          ease: "Sine.inOut"
        });
      }
    });
  }

  findPickupYOnPlatform(x, y) {
    const platform = this.platformRuns
      .filter((run) => x >= run.startX - 10 && x <= run.endX + 10 && run.topY >= y - 24)
      .sort((a, b) => a.topY - b.topY)[0];
    return platform ? platform.topY - TILE / 2 : y;
  }

  hitEnemy(player, enemy) {
    if (!state.running) return;
    if (player.body.velocity.y > 120 && player.y < enemy.y - 5) {
      this.defeatEnemy(enemy);
      player.setVelocityY(-330);
      state.score += 250;
      updateHud();
      return;
    }
    this.loseLife();
  }

  hitEnemyWithThrownItem(item, enemy) {
    if (!state.running || !item.active || !enemy.active) return;
    this.ricochetThrownItemFromEnemy(item, enemy);
    this.defeatEnemy(enemy);
    state.score += 350;
    updateHud();
  }

  hitAcorn(_player, acorn) {
    if (!state.running || this.basketPromptActive || this.lanternPromptActive || acorn.getData("armed")) return;
    this.resetAcorn(acorn);
    this.loseLife();
  }

  resetAcorn(acorn) {
    if (!acorn || !acorn.active) return;
    acorn.body.allowGravity = false;
    acorn.body.immovable = false;
    acorn.setVelocity(0, 0);
    acorn.setAngularVelocity(0);
    acorn.setAngle(0);
    acorn.setPosition(acorn.getData("homeX"), this.cameras.main.scrollY - FALLING_OBJECT_SPAWN_OFFSET);
    acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(...this.level.acornDelay));
    acorn.setData("pace", Phaser.Math.Between(...this.level.acornPace));
  }

  loseLife() {
    if (!state.running) return;
    state.lives -= 1;
    updateHud();
    this.cameras.main.shake(180, 0.012);
    if (state.lives <= 0) {
      this.cancelLevelRuntime();
      resetGameProgress();
      this.sound.stopAll();
      hardResetDocument();
      return;
    }
    state.timeLeft = Math.max(45, state.timeLeft);
    this.resetPlayerToSpawn();
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    setItemPickupVisible(false);
    this.releaseBasketPromptControlLock();
    this.thrownItems.clear(true, true);
    if (!state.hasKey) this.resetKeyReveal();
    this.resetCatNpc();
  }

  enterDoor() {
    if (!state.running || !state.hasKey) return;
    state.running = false;
    this.resetPlayerMotion({ freeze: true });
    this.setGabiAnimation("idle");
    if (this.timerEvent) this.timerEvent.remove(false);
    state.score += state.gems === state.totalGems ? 1000 : 350;
    state.score += state.timeLeft * 10;
    updateHud();
    if (state.levelIndex < LEVELS.length - 1) {
      this.advanceToNextLevel();
      return;
    }

    state.won = true;
    setMessage("Level Clear", "You found the key and escaped. More city routes and secret bonuses are ready for the next build.", "Play Again");
  }

  advanceToNextLevel() {
    state.levelIndex += 1;
    const level = LEVELS[state.levelIndex] || LEVELS[0];
    state.pendingLevelPrompt = {
      title: level.name,
      copy: level.introCopy || "Collect the coins, grab the key, and reach the door.",
      button: "Start"
    };
    if (this.timerEvent) {
      this.timerEvent.remove(false);
      this.timerEvent = null;
    }
    this.sound.stopAll();
    this.scene.restart();
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game",
  width: VIEW_WIDTH,
  height: VIEW_HEIGHT,
  pixelArt: true,
  backgroundColor: "#171922",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1150 },
      debug: false
    }
  },
  scene: [PlayScene]
});

hud.startButton.addEventListener("click", () => {
  if (!gameAssetsReady) return;
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  setCheatMenuVisible(false);
  setStoryIntroVisible(false);
  if (state.won) {
    scene.cancelLevelRuntime();
    resetGameProgress();
    hardResetDocument();
    return;
  }
  if (state.lives <= 0) {
    resetGameProgress();
    updateHud();
  }
  scene.startRun();
});

hud.itemPickupOk.addEventListener("click", () => {
  if (!gameAssetsReady) return;
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  scene.handleItemPickupOk(scene.time.now);
});

hud.cheatClose.addEventListener("click", () => setCheatMenuVisible(false));

LEVELS.forEach((level, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = level.name;
  button.addEventListener("click", () => {
    if (!gameAssetsReady) return;
    const scene = game.scene.getScene("PlayScene");
    if (!scene.scene.isActive()) return;
    setCheatMenuVisible(false);
    setStoryIntroVisible(false);
    state.levelIndex = index;
    state.score = 0;
    state.lives = 3;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.resetProgressOnCreate = false;
    state.pendingLevelPrompt = {
      title: level.name,
      copy: level.introCopy || "Collect the coins, grab the key, and reach the door.",
      button: "Start"
    };
    if (scene.timerEvent) {
      scene.timerEvent.remove(false);
      scene.timerEvent = null;
    }
    scene.sound.stopAll();
    scene.scene.restart();
  });
  hud.cheatLevels.appendChild(button);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !hud.message.hidden && !hud.startButton.disabled) {
    event.preventDefault();
    hud.startButton.click();
    return;
  }

  if (event.key !== "0") return;
  event.preventDefault();
  if (!gameAssetsReady) return;
  if (!hud.storyIntro.hidden) return;
  setCheatMenuVisible(hud.cheatMenu.hidden);
});
