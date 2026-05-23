const TILE = 32;
const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const HUD_HEIGHT = 86;
const PLAY_HEIGHT = VIEW_HEIGHT - HUD_HEIGHT;
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
const WATER_SCALE = 0.32;
const WATER_OVERLAP = 0.25;
const WATER_SPEED = 6;
const WATER_Y_OFFSET = 18;
const STARTING_HOUSE_DEPTH = 0;
const STARTING_HOUSE_SCALE = 0.48;
const ITEM_DEPTH = 8;
const ITEM_SCALE = 0.32;
const DOOR_DEPTH = 3;
const DOOR_SCALE = 0.34;
const ACORN_SCALE = 0.36;
const ROBOT_FRAME_WIDTH = 238;
const ROBOT_FRAME_HEIGHT = 238;
const ROBOT_SCALE = 0.22;
const CAT_FRAME_WIDTH = 238;
const CAT_FRAME_HEIGHT = 238;
const CAT_SCALE = 0.2;
const CAT_SAFE_DISTANCE = 210;
const CAT_RUN_SPEED = 276;
const CAT_JUMP_SPEED = 545;
const CAT_SCREEN_MARGIN = 150;
const CAT_PLATFORM_Y = 48;
const CAT_EDGE_LOOKAHEAD = 58;
const CAT_LANDING_LOOKAHEAD = 520;
const CAT_EDGE_JUMP_DISTANCE = 118;
const CAT_START_OFFSET = 74;
const ENEMY_NAMES = [
  "PEP LVL 2",
  "ECDD Manual Case Handling",
  "GSI BI First Attempt",
  "PEP LVL 1",
  "GCR Upload from Email to Pharos"
];
const ASSET_VERSION = "20260523-cat-guide-reset-key";
const STORY_ASSET_VERSION = "20260523-cat-guide-reset-key";
let storyIntroRunId = 0;
const LEVEL_WIDTH_TILES = 148;
const LEVEL_HEIGHT_TILES = 18;
const LEVELS = [
  {
    name: "Level 1",
    rows: createLevelOne(),
    timeLimit: TIME_LIMIT,
    soundtrack: "bgm",
    acornDelay: [450, 1800],
    acornPace: [185, 295],
    actionAbility: null,
    storyFrames: [
      ["./public/assets/story/level-1/frame-1.png", "./public/assets/story/level-1/frame_1.png"],
      ["./public/assets/story/level-1/frame-2.png", "./public/assets/story/level-1/frame_2.png"]
    ],
    startSpeech: "Ugh... the world looks different...",
    showStartingHouse: true,
    doorYOffset: -30,
    parallax: "parallax-city",
    introTitle: "Crazy Gabi",
    introCopy: "Collect the coins, grab the brass key, and reach the door before the city gets too wild."
  },
  {
    name: "Level 2",
    rows: createLevelTwo(),
    timeLimit: 190,
    soundtrack: "bgm2",
    acornDelay: [260, 1100],
    acornPace: [245, 370],
    actionAbility: "throw-acorn",
    storyFrames: [
      ["./public/assets/story/level-2/frame-1.png", "./public/assets/story/level-2/frame_1.png"],
      ["./public/assets/story/level-2/frame-2.png", "./public/assets/story/level-2/frame_2.png"]
    ],
    startSpeech: "That cat looked strange...",
    showStartingHouse: false,
    catNpc: true,
    doorYOffset: -16,
    parallax: "parallax-underground"
  }
];

function createLevelRows() {
  const rows = Array.from({ length: LEVEL_HEIGHT_TILES }, () => Array(LEVEL_WIDTH_TILES).fill("."));
  const put = (row, column, value) => {
    if (rows[row] && column >= 0 && column < LEVEL_WIDTH_TILES) rows[row][column] = value;
  };
  const run = (row, start, length, value = "#") => {
    for (let index = 0; index < length; index += 1) put(row, start + index, value);
  };

  return { rows, put, run };
}

function createLevelOne() {
  const { rows, put, run } = createLevelRows();

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
  const { rows, put, run } = createLevelRows();

  run(16, 0, 16);
  run(16, 24, 20);
  run(16, 52, 13);
  run(16, 75, 18);
  run(16, 105, 16);
  run(16, 132, 16);
  run(14, 19, 4, "=");
  run(13, 31, 9);
  run(13, 46, 4, "=");
  run(13, 60, 12);
  run(13, 86, 4, "=");
  run(13, 99, 12);
  run(13, 121, 4, "=");
  run(12, 136, 9);
  run(10, 28, 8);
  run(10, 43, 4, "=");
  run(10, 57, 10);
  run(10, 76, 8);
  run(10, 94, 4, "=");
  run(10, 110, 10);
  run(9, 130, 12);
  run(7, 38, 7);
  run(7, 51, 4, "=");
  run(7, 64, 8);
  run(7, 83, 8);
  run(7, 102, 4, "=");
  run(7, 116, 8);
  run(5, 47, 8);
  run(5, 67, 4, "=");
  run(5, 87, 8);
  run(5, 108, 8);
  run(3, 58, 7);
  run(3, 78, 4, "=");
  run(3, 99, 9);
  run(2, 127, 11);

  [
    [14, 4, "p"],
    [15, 30, "g"],
    [15, 33, "g"],
    [12, 38, "j"],
    [12, 64, "g"],
    [12, 67, "g"],
    [12, 104, "m"],
    [11, 141, "g"],
    [9, 31, "m"],
    [9, 61, "g"],
    [9, 80, "m"],
    [9, 115, "g"],
    [8, 136, "m"],
    [6, 42, "g"],
    [6, 69, "m"],
    [6, 87, "g"],
    [6, 119, "g"],
    [4, 52, "g"],
    [4, 90, "g"],
    [2, 61, "g"],
    [2, 103, "g"],
    [1, 20, "a"],
    [1, 28, "a"],
    [1, 37, "a"],
    [1, 48, "a"],
    [1, 54, "a"],
    [1, 62, "a"],
    [1, 68, "a"],
    [1, 74, "a"],
    [1, 88, "a"],
    [1, 95, "a"],
    [1, 101, "a"],
    [1, 113, "a"],
    [1, 125, "a"],
    [1, 136, "a"],
    [1, 133, "k"],
    [8, 134, "d"]
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
  message: document.querySelector("#message"),
  startButton: document.querySelector("#start-button"),
  storyIntro: document.querySelector("#story-intro"),
  storyPanels: document.querySelector("#story-panels"),
  storyStart: document.querySelector("#story-start"),
  cheatMenu: document.querySelector("#cheat-menu"),
  cheatLevels: document.querySelector("#cheat-levels"),
  cheatClose: document.querySelector("#cheat-close")
};

function setMessage(title, copy, button = "Start") {
  hud.message.querySelector("h1").textContent = title;
  hud.message.querySelector("p").textContent = copy;
  hud.startButton.textContent = button;
  hud.message.hidden = false;
}

function updateHud() {
  hud.score.textContent = String(state.score).padStart(6, "0");
  hud.gems.textContent = `x${String(state.gems).padStart(2, "0")}`;
  hud.lives.textContent = `x${state.lives}`;
  hud.time.textContent = String(state.timeLeft).padStart(3, "0");
  hud.key.textContent = state.hasKey ? "x01" : "x00";
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

function loadStoryFrame(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = `${src}?v=${STORY_ASSET_VERSION}`;
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
    this.load.spritesheet("gabi-sheet", `./public/assets/character/main_char_sprite.png?v=${ASSET_VERSION}`, {
      frameWidth: GABI_FRAME_WIDTH,
      frameHeight: GABI_FRAME_HEIGHT
    });
    this.load.spritesheet("gabi-wings-sheet", `./public/assets/character/main_char_sprite_with_double_jump.png?v=${ASSET_VERSION}`, {
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
    this.load.spritesheet("robot", `./public/assets/character/robot.png?v=${ASSET_VERSION}`, {
      frameWidth: ROBOT_FRAME_WIDTH,
      frameHeight: ROBOT_FRAME_HEIGHT
    });
    this.load.spritesheet("grey-cat", `./public/assets/character/grey_cat.png?v=${ASSET_VERSION}`, {
      frameWidth: CAT_FRAME_WIDTH,
      frameHeight: CAT_FRAME_HEIGHT
    });
    this.load.image("parallax-city", `./public/assets/environment/paralax_city.png?v=${ASSET_VERSION}`);
    this.load.image("parallax-underground", `./public/assets/environment/paralax_underground.png?v=${ASSET_VERSION}`);
    this.load.image("water-below", `./public/assets/environment/water_below.png?v=${ASSET_VERSION}`);
    this.load.image("starting-house", `./public/assets/environment/starting_house.png?v=${ASSET_VERSION}`);
    this.load.image("coin", `./public/assets/environment/golden-coin.png?v=${ASSET_VERSION}`);
    this.load.image("jump-item", `./public/assets/environment/double_jump_item.png?v=${ASSET_VERSION}`);
    this.load.image("door-key", `./public/assets/environment/door_key.png?v=${ASSET_VERSION}`);
    this.load.image("exit-door", `./public/assets/environment/exit_door.png?v=${ASSET_VERSION}`);
    this.load.image("falling-acorn", `./public/assets/environment/falling_acorn.png?v=${ASSET_VERSION}`);
    this.load.audio("bgm", `./public/assets/sound/bgm.mp3?v=${ASSET_VERSION}`);
    this.load.audio("bgm2", `./public/assets/sound/bgm2.mp3?v=${ASSET_VERSION}`);
  }

  create() {
    makeTextures(this);
    this.physics.world.gravity.y = 1150;
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = false;
    if (state.resetProgressOnCreate) {
      state.levelIndex = 0;
      state.score = 0;
      state.lives = 3;
      state.pendingLevelPrompt = null;
      state.resetProgressOnCreate = false;
    }
    this.level = LEVELS[state.levelIndex] || LEVELS[0];
    this.levelRows = this.level.rows;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = this.levelRows[0].length * TILE;
    this.levelHeight = this.levelRows.length * TILE;

    this.createBackdrop();
    this.createWaterBelow();
    if (this.level.showStartingHouse) this.createStartingHouse();
    this.platforms = this.physics.add.staticGroup();
    this.movingPlatforms = this.physics.add.group({ allowGravity: false, immovable: true });
    this.movingPlatformRuns = [];
    this.platformVisuals = this.add.group();
    this.gems = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doubleJumps = this.physics.add.group({ allowGravity: false, immovable: true });
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

    state.totalGems = 0;
    this.createAnimations();
    this.buildLevel();
    this.createPlayer();
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
    state.running = false;
    state.won = false;
    updateHud();
    this.prepareLevelIntro();
    this.time.delayedCall(120, () => {
      if (!state.running && !this.introInProgress && hud.message.hidden && hud.storyIntro.hidden) {
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
      const frames = await loadStoryFrames(this.level.storyFrames);
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

  renderStoryIntro(frames, introToken) {
    const introRunId = storyIntroRunId + 1;
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
      window.setTimeout(() => {
        if (!this.isCurrentIntro(introToken) || hud.storyIntro.hidden || introRunId !== storyIntroRunId) {
          resolve();
          return;
        }
        hud.storyIntro.classList.add("leaving");
        window.setTimeout(() => {
          if (this.isCurrentIntro(introToken) && introRunId === storyIntroRunId) setStoryIntroVisible(false);
          resolve();
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

  createStartingHouse() {
    const house = this.add.image(24, 16 * TILE + 4, "starting-house");
    house.setOrigin(0, 1);
    house.setScale(STARTING_HOUSE_SCALE);
    house.setDepth(STARTING_HOUSE_DEPTH);
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
        key: "robot-move",
        frames: this.anims.generateFrameNumbers("robot", { frames: [0, 1, 2] }),
        frameRate: 8,
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
        if (cell === "#") {
          const block = this.platforms.create(x, y, "tile-ground");
          block.setVisible(false);
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
        if (cell === "m") {
          const enemy = this.enemies.create(x, y, "robot", 0);
          enemy.setBounce(0);
          enemy.setCollideWorldBounds(true);
          enemy.setScale(ROBOT_SCALE);
          enemy.setDepth(5);
          enemy.body.setSize(112, 110).setOffset(58, 82);
          enemy.play("robot-move");
          this.enemyDirection.set(enemy, columnIndex % 2 ? -1 : 1);
          this.attachEnemyLabel(enemy);
        }
        if (cell === "a") {
          const acorn = this.acorns.create(x, -80, "falling-acorn");
          acorn.setScale(ACORN_SCALE);
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

    for (let index = 0; index < segments; index += 1) {
      const segmentWidth = Math.min(PLATFORM_SEGMENT_WIDTH, worldWidth - index * PLATFORM_SEGMENT_WIDTH);
      const x = worldStart + index * PLATFORM_SEGMENT_WIDTH + segmentWidth / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(x, topY + PLATFORM_Y_OFFSET, "platform-strip", platformFrame);
      platform.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      platform.setDepth(PLATFORM_DEPTH);
      this.platformVisuals.add(platform);

      if (Phaser.Math.Between(0, 100) < 68) {
        const fenceRoll = Phaser.Math.Between(0, 100);
        const fenceFrame = fenceRoll < 6 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(x, topY + FENCE_Y_OFFSET, "platform-fence", fenceFrame);
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
      const platform = this.add.image(centerX + offsetX, topY + PLATFORM_Y_OFFSET, "platform-strip", platformFrame);
      platform.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      platform.setDepth(PLATFORM_DEPTH);
      visuals.push({ sprite: platform, offsetX, offsetY: PLATFORM_Y_OFFSET - TILE / 2 });

      if (Phaser.Math.Between(0, 100) < 54) {
        const fenceFrame = Phaser.Math.Between(0, 100) < 5 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(centerX + offsetX, topY + FENCE_Y_OFFSET, "platform-fence", fenceFrame);
        fence.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
        fence.setDepth(FENCE_DEPTH);
        visuals.push({ sprite: fence, offsetX, offsetY: FENCE_Y_OFFSET - TILE / 2 });
      }
    }

    this.movingPlatformRuns.push({
      body,
      visuals,
      minX: centerX - 130,
      maxX: centerX + 130,
      speed: Phaser.Math.Between(0, 1) ? 72 : -72
    });
  }

  createPlayer() {
    this.player = this.physics.add.sprite(this.spawnPoint.x, this.spawnPoint.y, "gabi-sheet", 0);
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
    this.physics.add.overlap(this.thrownItems, this.enemies, this.hitEnemyWithThrownItem, null, this);
    this.physics.add.overlap(this.player, this.gems, this.collectGem, null, this);
    this.physics.add.overlap(this.player, this.doubleJumps, this.collectDoubleJump, null, this);
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
    state.running = true;
    this.startTimer();
    this.showGabiSpeech(this.level.startSpeech);
  }

  update(time = 0, delta = 0) {
    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.scene.restart();
      return;
    }

    this.moveEnemies();
    this.updateEnemyLabels();
    this.updateMovingPlatforms();
    this.updateAcorns(time);
    this.updateThrownItems();
    this.updateParallax();
    this.updateWater(delta);
    this.updateCatNpc(time, delta);
    this.updateGabiSpeechPosition();
    if (!state.running || state.won) return;

    const left = this.cursors.left.isDown || this.keysInput.left.isDown;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown;
    const jump =
      Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jump) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jumpW);
    const action = Phaser.Input.Keyboard.JustDown(this.keysInput.action);
    const onFloor = this.player.body.blocked.down;

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
    if (this.level.actionAbility === "throw-acorn") this.throwAcorn(time);
  }

  throwAcorn(time = 0) {
    if (time - this.lastActionAt < 450) return;
    this.lastActionAt = time;
    const direction = this.player.flipX ? -1 : 1;
    const acorn = this.thrownItems.create(this.player.x + direction * 28, this.player.y - 20, "falling-acorn");
    acorn.setScale(ACORN_SCALE * 0.72);
    acorn.setDepth(ITEM_DEPTH);
    acorn.setCircle(70, 47, 52);
    acorn.body.allowGravity = true;
    acorn.body.setGravityY(-360);
    acorn.setVelocity(direction * 430, -295);
    acorn.setAngularVelocity(direction * 520);
    acorn.setData("spawnedAt", time);
    acorn.setData("thrown", true);
  }

  setGabiFlip(flipX) {
    this.player.setFlipX(flipX);
  }

  setGabiAnimation(name) {
    if (this.currentGabiAnimation === name || !this.player) return;
    this.currentGabiAnimation = name;
    this.player.play(`gabi-${name}`, true);
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
    container.setDepth(12);
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

  updateGabiSpeechPosition() {
    if (!this.speechBubble || !this.player) return;
    this.speechBubble.setPosition(this.player.x, this.player.y - 62);
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
    this.cat.body.allowGravity = true;
    this.cat.body.moves = true;
    this.cat.setVelocity(0, 0);
    this.cat.setAcceleration(0, 0);
    this.cat.setFlipX(true);
    this.catTarget = null;
    this.catWaiting = true;
    this.catWaitAnchorX = this.cat.x;
    this.catNextDecisionAt = 0;
    this.catWasOnFloor = true;
    this.catJumpPoseUntil = 0;
    this.catIntroUntil = this.time.now + 850;
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

    const onFloor = this.cat.body.blocked.down;
    if (onFloor && this.catWasOnFloor === false) {
      this.catJumpPoseUntil = time + 140;
    }
    this.catWasOnFloor = onFloor;

    const goal = state.hasKey ? this.doorPoint : this.keyPoint;
    if (!goal) return;

    const reachedGoal = Math.abs(this.cat.x - goal.x) < 115;
    const gabiReachedCat = this.player.x >= this.cat.x - CAT_SAFE_DISTANCE;
    const screenRightX = this.cameras.main.scrollX + VIEW_WIDTH - CAT_SCREEN_MARGIN;
    const shouldWait =
      reachedGoal ||
      (this.cat.x >= screenRightX - 12 && this.cat.x > this.player.x + CAT_SAFE_DISTANCE && !gabiReachedCat);

    if (!state.hasKey && reachedGoal) this.revealKey();

    if ((this.catWaiting || shouldWait) && !gabiReachedCat) {
      this.catWaiting = true;
      this.catTarget = null;
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.cat.play("cat-idle", true);
      return;
    }

    if (reachedGoal && (state.hasKey || Math.abs(this.player.x - this.cat.x) < CAT_SAFE_DISTANCE)) {
      this.catWaiting = true;
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.cat.play("cat-idle", true);
      return;
    }

    this.catWaiting = false;
    if (!this.catTarget || time >= this.catNextDecisionAt || Math.abs(this.cat.x - this.catTarget.x) < 28) {
      this.catTarget = this.pickCatTarget(goal, screenRightX);
      this.catNextDecisionAt = time + Phaser.Math.Between(700, 1300);
    }

    this.moveCatTowardTarget(time);
  }

  pickCatTarget(goal, screenRightX) {
    const desiredX = Math.min(goal.x - 80, screenRightX, this.cat.x + Phaser.Math.Between(220, 430));
    const currentRun = this.findPlatformUnder(this.cat.x);
    if (currentRun && currentRun.endX - currentRun.startX > CAT_EDGE_JUMP_DISTANCE + 96) {
      const currentTargetX = Phaser.Math.Clamp(desiredX, currentRun.startX + 54, currentRun.endX - CAT_EDGE_JUMP_DISTANCE);
      if (currentTargetX > this.cat.x + 64 && currentTargetX <= screenRightX + 24) {
        return { x: currentTargetX, y: currentRun.topY - CAT_PLATFORM_Y };
      }
    }

    const candidates = this.platformRuns.filter((run) => {
      const centerX = Phaser.Math.Clamp(desiredX, run.startX + 46, run.endX - 46);
      const targetY = run.topY - CAT_PLATFORM_Y;
      const ahead = centerX > this.cat.x + 80;
      const inCamera = centerX <= screenRightX + 80;
      const reachableHeight = Math.abs(targetY - this.cat.y) < 190;
      return ahead && inCamera && reachableHeight && run.endX - run.startX > 96;
    }).sort((a, b) => {
      const aX = Phaser.Math.Clamp(desiredX, a.startX + 46, a.endX - 46);
      const bX = Phaser.Math.Clamp(desiredX, b.startX + 46, b.endX - 46);
      return Math.abs(aX - desiredX) - Math.abs(bX - desiredX);
    });

    const fallbackRun = this.findNextCatPlatform() || this.findPlatformUnder(this.cat.x);
    if (!candidates.length) {
      const fallbackX = fallbackRun
        ? Phaser.Math.Clamp(Math.max(this.cat.x + 80, Math.min(screenRightX, goal.x - 70)), fallbackRun.startX + 46, fallbackRun.endX - 46)
        : Math.min(this.cat.x + 180, screenRightX, goal.x - 70);
      return { x: fallbackX, y: fallbackRun ? fallbackRun.topY - CAT_PLATFORM_Y : this.cat.y };
    }

    const chosen = Phaser.Utils.Array.GetRandom(candidates.slice(0, 4));
    return {
      x: Phaser.Math.Clamp(desiredX + Phaser.Math.Between(-42, 42), chosen.startX + 46, chosen.endX - 46),
      y: chosen.topY - CAT_PLATFORM_Y
    };
  }

  moveCatTowardTarget(time = 0) {
    const target = this.catTarget;
    if (!target) return;
    const direction = target.x >= this.cat.x ? 1 : -1;
    const onFloor = this.cat.body.blocked.down;
    const groundAhead = this.hasCatGroundAhead(direction);
    const currentRun = this.findPlatformUnder(this.cat.x);
    const distanceToEdge = currentRun
      ? (direction > 0 ? currentRun.endX - this.cat.x : this.cat.x - currentRun.startX)
      : 0;
    const nearTarget = Math.abs(target.x - this.cat.x) < 140;
    const landingRun = this.findNextCatPlatform(direction);
    const landingAhead = Boolean(landingRun);
    const approachingGap = onFloor && currentRun && distanceToEdge < CAT_EDGE_JUMP_DISTANCE;
    const needsJump = onFloor && (!groundAhead || approachingGap || this.cat.body.blocked.right || (nearTarget && target.y < this.cat.y - 28));

    if (needsJump && landingAhead) {
      const landingX = direction > 0 ? landingRun.startX + 104 : landingRun.endX - 104;
      this.catTarget = {
        x: Phaser.Math.Clamp(landingX, landingRun.startX + 46, landingRun.endX - 46),
        y: landingRun.topY - CAT_PLATFORM_Y
      };
      this.catJumpPoseUntil = time + 130;
      this.cat.setVelocityX(direction * CAT_RUN_SPEED);
      this.cat.setVelocityY(-CAT_JUMP_SPEED);
    }

    if (onFloor && !groundAhead && !landingAhead) {
      this.cat.setAccelerationX(0);
      this.cat.setVelocityX(0);
      this.catWaiting = true;
      return;
    }

    this.cat.setAccelerationX(direction * 1050);
    this.cat.setVelocityX(direction * CAT_RUN_SPEED);
    this.cat.setFlipX(direction < 0);
    this.updateCatAnimation(onFloor, time);
  }

  hasCatGroundAhead(direction) {
    const run = this.findPlatformUnder(this.cat.x + direction * CAT_EDGE_LOOKAHEAD);
    return Boolean(run && this.cat.y <= run.topY + 4);
  }

  hasCatLandingAhead(direction) {
    return Boolean(this.findNextCatPlatform(direction));
  }

  findNextCatPlatform(direction = 1) {
    const currentRun = this.findPlatformUnder(this.cat.x);
    const candidates = this.platformRuns.filter((run) => {
      if (run === currentRun) return false;
      const targetY = run.topY - CAT_PLATFORM_Y;
      const gap = direction > 0 ? run.startX - this.cat.x : this.cat.x - run.endX;
      const ahead = gap > 24;
      const closeEnough = gap < CAT_LANDING_LOOKAHEAD;
      const reachableHeight = targetY > this.cat.y - 190 && targetY < this.cat.y + 150;
      return ahead && closeEnough && reachableHeight && run.endX - run.startX > 80;
    });

    candidates.sort((a, b) => {
      const gapA = direction > 0 ? a.startX - this.cat.x : this.cat.x - a.endX;
      const gapB = direction > 0 ? b.startX - this.cat.x : this.cat.x - b.endX;
      const heightA = Math.abs((a.topY - CAT_PLATFORM_Y) - this.cat.y);
      const heightB = Math.abs((b.topY - CAT_PLATFORM_Y) - this.cat.y);
      return gapA - gapB || heightA - heightB;
    });

    return candidates[0] || null;
  }

  findPlatformUnder(x) {
    return this.platformRuns.find((run) => x >= run.startX + 6 && x <= run.endX - 6 && Math.abs(this.cat.y - (run.topY - CAT_PLATFORM_Y)) < 76);
  }

  rescueCatToNearestPlatform() {
    const run = this.platformRuns.find((candidate) => candidate.endX > this.player.x + 120) || this.platformRuns[0];
    if (!run) return;
    this.cat.setPosition(Phaser.Math.Clamp(this.player.x + 240, run.startX + 50, run.endX - 50), run.topY - CAT_PLATFORM_Y);
    this.cat.setVelocity(0, 0);
    this.catWaiting = true;
    this.catWasOnFloor = true;
    this.catJumpPoseUntil = 0;
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
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active || !state.running || state.won) return;
      if (time >= acorn.getData("nextDrop") && acorn.body.velocity.y === 0) {
        acorn.setPosition(acorn.getData("homeX"), this.cameras.main.scrollY - 60);
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
    if (this.audioLifecycleRegistered) return;
    this.audioLifecycleRegistered = true;

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

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      document.removeEventListener("visibilitychange", this.handleVisibilityChange);
      window.removeEventListener("pagehide", this.handlePageHidden);
      window.removeEventListener("beforeunload", this.handlePageHidden);
      window.removeEventListener("unload", this.handlePageHidden);
      window.removeEventListener("blur", this.handlePageHidden);
      window.removeEventListener("focus", this.handlePageVisible);
      if (this.timerEvent) {
        this.timerEvent.remove(false);
        this.timerEvent = null;
      }
      this.activeIntroToken = (this.activeIntroToken || 0) + 1;
      this.introInProgress = false;
      this.stopGameAudio();
    });
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

  collectDoubleJump(_player, doubleJump) {
    doubleJump.disableBody(true, true);
    state.hasDoubleJump = true;
    state.score += 300;
    this.cameras.main.flash(130, 139, 220, 255, false);
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
    enemy.disableBody(true, true);
    const label = this.enemyLabels.get(enemy);
    if (label) label.setVisible(false);
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
    item.disableBody(true, true);
    this.defeatEnemy(enemy);
    state.score += 350;
    updateHud();
  }

  hitAcorn(_player, acorn) {
    if (!state.running || acorn.getData("armed")) return;
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
    acorn.setPosition(acorn.getData("homeX"), this.cameras.main.scrollY - 70);
    acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(...this.level.acornDelay));
    acorn.setData("pace", Phaser.Math.Between(...this.level.acornPace));
  }

  loseLife() {
    if (!state.running) return;
    state.lives -= 1;
    updateHud();
    this.cameras.main.shake(180, 0.012);
    if (state.lives <= 0) {
      state.running = false;
      this.resetPlayerMotion({ freeze: true });
      this.setGabiAnimation("hurt");
      if (this.timerEvent) {
        this.timerEvent.remove(false);
        this.timerEvent = null;
      }
      this.activeIntroToken = (this.activeIntroToken || 0) + 1;
      this.introInProgress = false;
      setStoryIntroVisible(false);
      state.levelIndex = 0;
      state.resetProgressOnCreate = true;
      state.pendingLevelPrompt = null;
      this.sound.stopAll();
      this.scene.restart();
      return;
    }
    state.timeLeft = Math.max(45, state.timeLeft);
    this.resetPlayerToSpawn();
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
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
    state.pendingLevelPrompt = {
      title: "Level 2",
      copy: "A tougher route opens up ahead: tighter platforms, busier acorns, and more robots.",
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
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  setCheatMenuVisible(false);
  setStoryIntroVisible(false);
  if (state.won || state.lives <= 0) {
    state.levelIndex = 0;
    state.resetProgressOnCreate = true;
    if (scene.timerEvent) {
      scene.timerEvent.remove(false);
      scene.timerEvent = null;
    }
    scene.scene.restart();
    return;
  }
  scene.startRun();
});

hud.cheatClose.addEventListener("click", () => setCheatMenuVisible(false));

LEVELS.forEach((level, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = level.name;
  button.addEventListener("click", () => {
    const scene = game.scene.getScene("PlayScene");
    if (!scene.scene.isActive()) return;
    setCheatMenuVisible(false);
    setStoryIntroVisible(false);
    state.levelIndex = index;
    state.score = 0;
    state.lives = 3;
    state.resetProgressOnCreate = false;
    state.pendingLevelPrompt = {
      title: level.name,
      copy: "Testing route loaded. Press Start when ready.",
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
  if (event.key !== "0") return;
  event.preventDefault();
  if (!hud.storyIntro.hidden) return;
  setCheatMenuVisible(hud.cheatMenu.hidden);
});
