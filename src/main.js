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
const WALL_FOREGROUND_TILE_SPAN = 2;
const PLATFORM_SHADOW_DEPTH = PLATFORM_DEPTH + 0.52;
const LIGHT_RAY_DEPTH = WATER_DEPTH + 0.25;
const LIGHT_RAY_IMPACT_DEPTH = PLATFORM_DEPTH + 0.65;
const LIGHT_RAY_TEXTURE_PADDING = 96;
const DARKNESS_DEPTH = 30;
const WATER_SCALE = 0.32;
const WATER_OVERLAP = 0.25;
const WATER_SPEED = 6;
const WATER_Y_OFFSET = 18;
const STARTING_HOUSE_DEPTH = 0;
const STARTING_HOUSE_SCALE = 0.48;
const STARTING_RUINS_SCALE = 0.42;
const STARTING_BILLBOARD_DEPTH = FENCE_DEPTH + 0.5;
const STARTING_BILLBOARD_SCALE = 0.36;
const BILLBOARD_INTERACT_DISTANCE = 92;
const ITEM_DEPTH = 8;
const LIGHT_RAY_FRONT_DEPTH = ITEM_DEPTH + 0.75;
const LIGHT_SPARKLE_DEPTH = ITEM_DEPTH + 1;
const LIGHT_RAY_BLINDING_DEPTH = LIGHT_SPARKLE_DEPTH + 0.55;
const ITEM_SCALE = 0.32;
const BASKET_SCALE = 0.17;
const LANTERN_SCALE = 0.23;
const HEART_SCALE = 0.26;
const HEART_DROP_CHANCE = 0.28;
const HEART_PICKUP_DELAY = 620;
const MAX_HEART_DROPS_PER_LEVEL = 2;
const MOBILE_SWIPE_DEADZONE = 18;
const MOBILE_JUMP_SWIPE_THRESHOLD = 34;
const MOBILE_JUMP_REARM_THRESHOLD = 26;
const DOOR_DEPTH = 3;
const DOOR_SCALE = 0.34;
const ACORN_SCALE = 0.36;
const BRICK_SCALE = 0.27;
const FALLING_OBJECT_SPAWN_OFFSET = 140;
const EARTHQUAKE_SFX_KEY = "earthquake-1";
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
const CAT_MEOW_CHANCE = 0.32;
const CAT_MEOW_MIN_DELAY = 9000;
const CAT_MEOW_MAX_DELAY = 18000;
const PICKUP_SPEECH_CHANCE = 0.28;
const COIN_SPEECH_CHANCE = (PICKUP_SPEECH_CHANCE / 5) * 2;
const PICKUP_SPEECH_COOLDOWN = 5200;
const PICKUP_SPEECH_LINES = {
  coin: [
    "Tiny capitalism. Cute.",
    "Rent is rent.",
    "My accountant approves.",
    "Shiny. Mine.",
    "This counts as income.",
    "I do accept gold.",
    "Luxury fund: started."
  ],
  heart: [
    "Drama postponed.",
    "Pain is temporary.",
    "Cute little survival tax.",
    "Emotionally? Still injured.",
    "Trauma, but manageable.",
    "Pain rescheduled.",
    "My health bar has standards.",
    "Damage control, literally."
  ],
  wing: [
    "Gravity can wait.",
    "Upgrades with flair.",
    "Cute. Slightly excessive.",
    "Airborne, apparently.",
    "Oh good, vertical privilege.",
    "I have ascended, modestly.",
    "Finally, my dramatic era."
  ],
  respawn: [
    "Let's pretend that was planned.",
    "I'm choosing to ignore that.",
    "That was a rehearsal.",
    "Okay, universe. Weird choice.",
    "I'm blaming the architecture.",
    "That counted as cardio.",
    "Back by unpopular demand."
  ]
};
const ENEMY_NAMES = [
  "KYC WUDB Comment and Management Tool",
  "GSI Document Upload from Email to Pharos",
  "KYC ECDD Manual Case Creation",
  "KYC ECDD Case Handling",
  "GSI BI First Attempt",
  "GSI Bank Inquiry Notification",
  "GSI Sanctions Outreach",
  "GAI Agent Referral Case Creation",
  "KYC PEP LVL 1",
  "KYC PEP LVL 2",
  "KYC Promo Code Generation for Approved Consumers",
  "GSI Hourly Report",
  "GCR Escalated via iWatch and Email",
  "GCR Interdictions and RTRA Case Handling",
  "DRT Comment in CTM",
  "DRT High Band KYC Case Creation",
  "FIU International Subpoena Referrals",
  "GSI Second Attempt Email Notification",
  "OCM Tiers Case Escalation",
  "KYC WUDB Onboarding Assistant"
];
const ASSET_VERSION = "20260603-starting-ruins-pair";
const STORY_ASSET_VERSION = "20260603-starting-ruins-pair";
const DIFFICULTY_COOKIE = "crazy-gabi-difficulty";
const DIFFICULTY_EASY = "easy";
const DIFFICULTY_HARD = "hard";
const EASY_DIFFICULTY_KEEP_INTERVAL = 3;
const LEVEL_LOAD_TIMEOUT_MS = 30000;
const MIN_LEVEL_TRANSITION_MS = 1400;
const INTRO_RETRY_MS = 1000;
const INTRO_FAILSAFE_MS = 6500;
const MUSIC_TRACKS = [
  { key: "bgm-menu", label: "Menu Theme", src: "./public/assets/sound/bgm_menu.mp3" },
  { key: "bgm-lv1", label: "Level 1 Theme", src: "./public/assets/sound/bgm_lv1.mp3" },
  { key: "bgm-lv2", label: "Level 2 Theme", src: "./public/assets/sound/bgm_lv2.mp3" },
  { key: "bgm-lv3", label: "Level 3 Theme", src: "./public/assets/sound/bgm_lv3.mp3" }
];
const LOADING_RUNNERS = [
  {
    key: "gabi",
    className: "loading-runner-gabi",
    src: "./public/assets/character/main_char_sprite.png",
    frameCount: 2
  },
  {
    key: "cat",
    className: "loading-runner-cat",
    src: "./public/assets/character/grey_cat.png",
    frameCount: 4
  }
];
let storyIntroRunId = 0;
let gameAssetsReady = false;
const pixelatedEquippedImages = {};
const storySeenLevels = new Set();
const LEVEL_WIDTH_TILES = 148;
const LEVEL_TWO_WIDTH_TILES = LEVEL_WIDTH_TILES * 2;
const LEVEL_THREE_WIDTH_TILES = 220;
const LEVEL_FOUR_WIDTH_TILES = 184;
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
    introTitle: "Level 1",
    introCopy: "Collect the coins, grab the brass key, and reach the door before the city gets too wild."
  },
  {
    name: "Level 2",
    rows: createLevelTwo(),
    timeLimit: 340,
    soundtrack: "bgm-lv2",
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
    wallTiles: {
      backdropSheet: "level2-wall-backdrop",
      backdropFrames: 30,
      foreground: [
        "underground-wall-1",
        "underground-wall-2",
        "underground-wall-3",
        "underground-wall-4",
        "underground-wall-5"
      ]
    },
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
      speech: "This tunnel is dark, young lady. Please pick up that lantern over there to proceed."
    },
    introCopy: "Find the lantern, move carefully through the dark tunnel, and survive what waits just beyond the edge of the light."
  },
  {
    name: "Level 3",
    rows: createLevelThree(),
    timeLimit: 330,
    soundtrack: "bgm-lv3",
    acornDelay: [260, 1100],
    acornPace: [245, 370],
    fallingHazard: "falling-brick",
    environmentalQuake: {
      sfx: EARTHQUAKE_SFX_KEY,
      minDelay: 9000,
      maxDelay: 15000,
      shakeDuration: 760,
      shakeIntensity: 0.007,
      brickDelay: 320,
      burstDuration: 2600,
      brickDropDelay: [80, 420],
      brickPace: [330, 470]
    },
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
    lightRayAlpha: 0.94,
    lightRays: [
      { x: 82, y: -124, topWidth: 18, bottomWidth: 92, height: 1780, lean: 310, alpha: 0.36, thickness: 4, foreground: true, frontAlpha: 0.52, blinding: true, opacityMode: "dim" },
      { x: 118, y: -132, topWidth: 12, bottomWidth: 62, height: 1340, lean: 255, alpha: 0.18, thickness: 1, opacityMode: "steady" },
      { x: 224, y: -100, topWidth: 22, bottomWidth: 118, height: 1120, lean: 172, alpha: 0.24, thickness: 2, opacityMode: "pulse" },
      { x: 470, y: -136, topWidth: 16, bottomWidth: 86, height: 1540, lean: 236, alpha: 0.24, thickness: 3, foreground: true, frontAlpha: 0.12, opacityMode: "dim" },
      { x: 512, y: -128, topWidth: 10, bottomWidth: 52, height: 1180, lean: 198, alpha: 0.14, thickness: 1, opacityMode: "steady" },
      { x: 780, y: -112, topWidth: 15, bottomWidth: 78, height: 760, lean: 120, alpha: 0.16, thickness: 1, opacityMode: "pulse" },
      { x: 1038, y: -116, topWidth: 18, bottomWidth: 86, height: 1320, lean: 184, alpha: 0.22, thickness: 4, foreground: true, frontAlpha: 0.46, blinding: true, opacityMode: "steady" },
      { x: 1084, y: -124, topWidth: 14, bottomWidth: 68, height: 980, lean: 138, alpha: 0.14, thickness: 2, opacityMode: "dim" },
      { x: 1518, y: -92, topWidth: 18, bottomWidth: 82, height: 850, lean: 132, alpha: 0.17, thickness: 2, opacityMode: "pulse" },
      { x: 1920, y: -128, topWidth: 18, bottomWidth: 94, height: 1520, lean: 260, alpha: 0.23, thickness: 3, foreground: true, frontAlpha: 0.42, blinding: true, opacityMode: "dim" },
      { x: 1966, y: -118, topWidth: 11, bottomWidth: 54, height: 1020, lean: 206, alpha: 0.13, thickness: 1, opacityMode: "steady" },
      { x: 2380, y: -106, topWidth: 15, bottomWidth: 74, height: 980, lean: 136, alpha: 0.16, thickness: 2, opacityMode: "pulse" },
      { x: 2700, y: -114, topWidth: 14, bottomWidth: 72, height: 1180, lean: 174, alpha: 0.2, thickness: 3, foreground: true, frontAlpha: 0.09, opacityMode: "dim" },
      { x: 3440, y: -132, topWidth: 18, bottomWidth: 94, height: 1440, lean: 206, alpha: 0.22, thickness: 4, foreground: true, frontAlpha: 0.44, blinding: true, opacityMode: "dim" },
      { x: 3486, y: -126, topWidth: 12, bottomWidth: 60, height: 980, lean: 162, alpha: 0.13, thickness: 1, opacityMode: "steady" },
      { x: 4168, y: -104, topWidth: 15, bottomWidth: 78, height: 980, lean: 112, alpha: 0.17, thickness: 2, opacityMode: "pulse" }
    ],
    platformTexture: "platform-underground",
    fenceTexture: "platform-fence-underground",
    wallTiles: {
      backdropSheet: "level3-wall-backdrop",
      backdropFrames: 30,
      foreground: [
        "underground-wall-1",
        "underground-wall-2",
        "underground-wall-3",
        "underground-wall-4",
        "underground-wall-5"
      ]
    },
    introCopy: "Follow the strange cat through the lower city, collect coins, claim the acorn basket, and fight your way to the brass key and exit."
  },
  {
    name: "Level 4",
    rows: createLevelFour(),
    timeLimit: 300,
    soundtrack: "bgm-lv1",
    enemySprite: "robot-lv1",
    actionAbility: null,
    startSpeech: "",
    showStartingHouse: false,
    startingRuins: [
      { key: "starting-ruins-1", src: "./public/assets/environment/starting_ruins_1.png", x: 18, floorRow: 20, scale: 0.57 },
      { key: "starting-ruins-2", src: "./public/assets/environment/starting_ruins_2.png", x: 2800, floorRow: 20, scale: 0.63 }
    ],
    catNpc: true,
    doorYOffset: -30,
    parallax: "parallax-cathedral",
    platformTexture: "platform-strip",
    fenceTexture: "platform-fence",
    lightRayAlpha: 0.94,
    lightRays: [
      { x: 560, y: -118, topWidth: 14, bottomWidth: 62, height: 680, lean: -150, alpha: 0.2, thickness: 1, opacityMode: "pulse" },
      { x: 1224, y: -124, topWidth: 18, bottomWidth: 84, height: 820, lean: -94, alpha: 0.24, thickness: 2, foreground: true, frontAlpha: 0.12, opacityMode: "dim" },
      { x: 1998, y: -108, topWidth: 16, bottomWidth: 78, height: 760, lean: -34, alpha: 0.22, thickness: 2, opacityMode: "steady" },
      { x: 3260, y: -130, topWidth: 17, bottomWidth: 88, height: 900, lean: 28, alpha: 0.24, thickness: 3, foreground: true, frontAlpha: 0.16, opacityMode: "dim" },
      { x: 4320, y: -112, topWidth: 14, bottomWidth: 70, height: 720, lean: 96, alpha: 0.2, thickness: 1, opacityMode: "pulse" },
      { x: 5220, y: -126, topWidth: 18, bottomWidth: 86, height: 820, lean: 156, alpha: 0.22, thickness: 2, foreground: true, frontAlpha: 0.12, opacityMode: "steady" }
    ],
    introCopy: "The strange cat keeps leading the way across the rooftops. Follow carefully, collect what you can, and find the next door."
  }
];

function createLevelRows(height = LEVEL_HEIGHT_TILES, width = LEVEL_WIDTH_TILES) {
  const rows = Array.from({ length: height }, () => Array(width).fill("."));
  const put = (row, column, value) => {
    if (rows[row] && column >= 0 && column < width) rows[row][column] = value;
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
  const levelWidth = LEVEL_TWO_WIDTH_TILES;
  const { rows, put, run } = createLevelRows(26, levelWidth);
  const decorateRun = (row, start, length) => {
    for (let index = 0; index < length; index += 1) {
      const column = start + index;
      if (rows[row]?.[column] === ".") put(row, column, "v");
    }
  };
  const decorateColumn = (rowStart, rowEnd, start, length) => {
    for (let row = rowStart; row <= rowEnd; row += 1) decorateRun(row, start, length);
  };

  run(0, 0, levelWidth, "w");
  for (let row = 1; row < 25; row += 1) {
    run(row, 0, 2, "w");
    run(row, levelWidth - 2, 2, "w");
  }

  run(18, 2, 32);
  run(16, 36, 9);
  run(14, 48, 9);
  run(12, 60, 11);
  run(15, 72, 10);
  run(18, 84, 12);
  run(21, 96, 11);

  run(19, 109, 10);
  run(17, 122, 10);
  run(15, 135, 10);
  run(13, 148, 10);
  run(11, 161, 10);

  run(10, 170, 48);
  run(8, 222, 50);
  run(12, 274, 12);
  run(16, 286, 8);

  decorateColumn(12, 22, 66, 4);
  decorateColumn(12, 22, 118, 4);
  decorateRun(12, 74, 42);
  decorateRun(13, 78, 34);
  decorateRun(22, 74, 42);
  decorateColumn(9, 20, 144, 4);
  decorateColumn(9, 20, 160, 4);
  decorateRun(8, 146, 22);
  decorateRun(20, 146, 18);
  decorateColumn(5, 13, 218, 4);
  decorateColumn(5, 13, 272, 4);
  decorateRun(5, 222, 54);
  decorateRun(13, 224, 40);
  decorateColumn(6, 17, 294, 2);
  decorateRun(6, 260, 34);
  decorateRun(17, 266, 28);
  decorateColumn(8, 17, 246, 4);

  [
    [16, 4, "p"],
    [17, 9, "g"],
    [17, 19, "l"],
    [15, 39, "g"],
    [13, 52, "g"],
    [11, 65, "g"],
    [14, 77, "g"],
    [17, 90, "g"],
    [20, 101, "g"],
    [18, 114, "g"],
    [16, 127, "g"],
    [14, 140, "g"],
    [12, 153, "g"],
    [10, 166, "g"],
    [9, 181, "g"],
    [9, 203, "g"],
    [9, 214, "g"],
    [7, 230, "g"],
    [7, 255, "g"],
    [7, 267, "k"],
    [11, 279, "g"],
    [15, 290, "d"],
    [20, 103, "m"],
    [18, 115, "m"],
    [16, 128, "m"],
    [14, 141, "m"],
    [9, 192, "m"],
    [7, 245, "m"],
    [11, 280, "m"],
    [15, 289, "m"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

function createLevelThree() {
  const { rows, put, run } = createLevelRows(82, LEVEL_THREE_WIDTH_TILES);

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
  run(19, 119, 5, "=");
  run(21, 126, 10);
  run(17, 139, 9);
  run(14, 113, 10);
  run(14, 124, 5, "=");
  run(11, 129, 10);
  run(8, 139, 9);
  run(5, 132, 16);
  run(8, 154, 7);
  run(12, 153, 5, "=");
  run(11, 165, 8);
  run(11, 174, 5, "=");
  run(8, 178, 4, "=");
  run(5, 183, 5, "=");
  run(5, 190, 6);
  run(8, 196, 4, "=");
  run(5, 202, 14);
  run(8, 210, 4, "=");

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
    [4, 145, "g"],
    [7, 158, "m"],
    [10, 169, "m"],
    [7, 180, "m"],
    [4, 193, "g"],
    [4, 205, "g"],
    [4, 207, "m"],
    [4, 213, "d"],
    [1, 18, "a"],
    [1, 42, "a"],
    [1, 61, "a"],
    [1, 84, "a"],
    [1, 103, "a"],
    [1, 118, "a"],
    [1, 132, "a"],
    [1, 144, "a"],
    [1, 160, "a"],
    [1, 181, "a"],
    [1, 204, "a"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

function createLevelFour() {
  const { rows, put, run } = createLevelRows(22, LEVEL_FOUR_WIDTH_TILES);

  run(20, 0, 30);
  run(20, 36, 24);
  run(20, 68, 36);
  run(20, 112, 28);
  run(20, 148, 36);

  run(17, 24, 9);
  run(17, 44, 8);
  run(17, 75, 11);
  run(17, 99, 4, "=");
  run(17, 116, 10);
  run(17, 137, 4, "=");
  run(17, 155, 11);

  run(14, 38, 10);
  run(14, 62, 5, "=");
  run(14, 82, 12);
  run(14, 107, 9);
  run(14, 129, 10);
  run(14, 151, 4, "=");

  run(11, 54, 9);
  run(11, 78, 10);
  run(11, 101, 4, "=");
  run(11, 120, 11);
  run(11, 144, 9);

  run(8, 70, 11);
  run(8, 94, 8);
  run(8, 118, 4, "=");
  run(8, 139, 11);
  run(8, 162, 8);

  run(5, 86, 8);
  run(5, 111, 11);
  run(5, 139, 4, "=");
  run(5, 160, 10);

  [
    [18, 4, "p"],
    [19, 18, "g"],
    [19, 24, "j"],
    [19, 43, "g"],
    [19, 52, "m"],
    [19, 76, "g"],
    [19, 95, "g"],
    [19, 121, "m"],
    [19, 133, "g"],
    [19, 158, "g"],
    [16, 28, "g"],
    [16, 48, "g"],
    [16, 80, "m"],
    [16, 83, "g"],
    [16, 121, "g"],
    [16, 159, "g"],
    [13, 43, "m"],
    [13, 64, "g"],
    [13, 89, "g"],
    [13, 111, "m"],
    [13, 134, "g"],
    [10, 58, "g"],
    [10, 84, "m"],
    [10, 122, "g"],
    [10, 148, "g"],
    [7, 75, "g"],
    [7, 98, "g"],
    [7, 145, "m"],
    [7, 166, "g"],
    [4, 90, "g"],
    [4, 116, "g"],
    [4, 164, "k"],
    [16, 173, "d"]
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
  autoStartLevel: false,
  pendingLevelPrompt: null,
  difficulty: DIFFICULTY_HARD
};

const hud = {
  root: document.querySelector("#hud"),
  score: document.querySelector("#score"),
  gems: document.querySelector("#gems"),
  lives: document.querySelector("#lives"),
  time: document.querySelector("#time"),
  key: document.querySelector("#key"),
  loading: document.querySelector("#loading"),
  loadingRunner: document.querySelector("#loading-runner"),
  loadingRunnerSprite: document.querySelector("#loading-runner-sprite"),
  loadingBar: document.querySelector("#loading-bar"),
  loadingText: document.querySelector("#loading-text"),
  message: document.querySelector("#message"),
  startButton: document.querySelector("#start-button"),
  gameOver: document.querySelector("#game-over"),
  gameOverCopy: document.querySelector("#game-over-copy"),
  gameOverScore: document.querySelector("#game-over-score"),
  gameOverRestart: document.querySelector("#game-over-restart"),
  gameOverMenu: document.querySelector("#game-over-menu"),
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
  mainMenu: document.querySelector("#main-menu"),
  bestScore: document.querySelector("#best-score"),
  menuNewGame: document.querySelector("#menu-new-game"),
  menuSelectLevel: document.querySelector("#menu-select-level"),
  menuMusicBox: document.querySelector("#menu-music-box"),
  menuCredits: document.querySelector("#menu-credits"),
  difficultyEasy: document.querySelector("#difficulty-easy"),
  difficultyHard: document.querySelector("#difficulty-hard"),
  menuPanel: document.querySelector("#menu-panel"),
  menuPanelTitle: document.querySelector("#menu-panel-title"),
  menuPanelCopy: document.querySelector("#menu-panel-copy"),
  menuPanelContent: document.querySelector("#menu-panel-content"),
  menuPanelClose: document.querySelector("#menu-panel-close"),
  cheatMenu: document.querySelector("#cheat-menu"),
  cheatLevels: document.querySelector("#cheat-levels"),
  cheatClose: document.querySelector("#cheat-close")
};

hud.coinIcon.src = `./public/assets/environment/golden-coin.png?v=${ASSET_VERSION}`;
hud.keyIcon.src = `./public/assets/environment/door_key.png?v=${ASSET_VERSION}`;
updateBestScore();

function setLoadingVisible(visible) {
  if (visible) randomizeLoadingRunner();
  hud.loading.hidden = !visible;
}

function randomizeLoadingRunner() {
  const runner = LOADING_RUNNERS[Math.floor(Math.random() * LOADING_RUNNERS.length)] || LOADING_RUNNERS[0];
  hud.loadingRunner.className = `loading-runner ${runner.className}`;
  hud.loadingRunner.style.setProperty("--loading-runner-frames", runner.frameCount);
  hud.loadingRunnerSprite.style.backgroundImage = `url("${runner.src}?v=${ASSET_VERSION}")`;
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

function getCookieValue(name) {
  const cookie = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${encodeURIComponent(name)}=`));
  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : "";
}

function getBestScore() {
  const value = Number.parseInt(getCookieValue("crazy-gabi-best-score"), 10);
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function setBestScore(score) {
  const safeScore = Math.max(0, Math.floor(score || 0));
  document.cookie = [
    `crazy-gabi-best-score=${encodeURIComponent(String(safeScore))}`,
    "max-age=31536000",
    "path=/",
    "SameSite=Lax"
  ].join("; ");
}

function updateBestScore(score = getBestScore()) {
  hud.bestScore.textContent = String(score).padStart(6, "0");
}

function recordBestScore(score) {
  const currentBest = getBestScore();
  const nextBest = Math.max(currentBest, Math.max(0, Math.floor(score || 0)));
  if (nextBest !== currentBest) setBestScore(nextBest);
  updateBestScore(nextBest);
  return nextBest;
}

function normalizeDifficulty(value) {
  return value === DIFFICULTY_EASY ? DIFFICULTY_EASY : DIFFICULTY_HARD;
}

function getDifficultySetting() {
  return normalizeDifficulty(getCookieValue(DIFFICULTY_COOKIE));
}

function setDifficultySetting(value) {
  state.difficulty = normalizeDifficulty(value);
  document.cookie = [
    `${DIFFICULTY_COOKIE}=${encodeURIComponent(state.difficulty)}`,
    "max-age=31536000",
    "path=/",
    "SameSite=Lax"
  ].join("; ");
  updateDifficultyToggle();
}

function updateDifficultyToggle() {
  const isEasy = state.difficulty === DIFFICULTY_EASY;
  hud.difficultyEasy.classList.toggle("is-active", isEasy);
  hud.difficultyHard.classList.toggle("is-active", !isEasy);
  hud.difficultyEasy.setAttribute("aria-pressed", String(isEasy));
  hud.difficultyHard.setAttribute("aria-pressed", String(!isEasy));
}

function getScoreMultiplier() {
  return state.difficulty === DIFFICULTY_EASY ? 0.5 : 1;
}

function awardScore(points) {
  state.score += Math.max(0, Math.floor((points || 0) * getScoreMultiplier()));
}

state.difficulty = getDifficultySetting();
updateDifficultyToggle();

function isMobileTouchDevice() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
  const touchPoints = Number(navigator.maxTouchPoints || 0) > 0;
  const mobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "");
  return Boolean((coarsePointer && touchPoints) || mobileUserAgent);
}

function wait(ms = 0) {
  return new Promise((resolve) => window.setTimeout(resolve, Math.max(0, ms)));
}

function setCheatMenuVisible(visible) {
  hud.cheatMenu.hidden = !visible;
}

function setMainMenuVisible(visible) {
  hud.mainMenu.hidden = !visible;
}

function setMenuPanelVisible(visible) {
  hud.menuPanel.hidden = !visible;
}

function setGameOverVisible(visible, details = {}) {
  hud.gameOver.hidden = !visible;
  if (!visible) return;
  hud.gameOverCopy.textContent = details.copy || "The route is complete.";
  hud.gameOverScore.textContent = String(details.score ?? state.score).padStart(6, "0");
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
  state.autoStartLevel = false;
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

function pixelateFrame(frame, pixelScale = 0.42) {
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

function pixelateStoryFrame(frame) {
  return pixelateFrame(frame, 0.42);
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
  makeLightFxTextures(scene);
}

function makeLightFxTextures(scene) {
  const g = scene.make.graphics({ x: 0, y: 0, add: false });

  if (!scene.textures.exists("light-impact-glow")) {
    scene.textures.addCanvas("light-impact-glow", createLightImpactGlowCanvas());
  }

  if (!scene.textures.exists("light-sparkle")) {
    g.fillStyle(0xfff6d8, 0.18).fillCircle(9, 9, 8);
    g.fillStyle(0xffffff, 0.8).fillCircle(9, 9, 2);
    g.lineStyle(1, 0xfff1c6, 0.62);
    g.lineBetween(9, 1, 9, 17);
    g.lineBetween(1, 9, 17, 9);
    g.generateTexture("light-sparkle", 18, 18);
    g.clear();
  }

  if (!scene.textures.exists("platform-cast-shadow")) {
    scene.textures.addCanvas("platform-cast-shadow", createPlatformCastShadowCanvas());
  }

  g.destroy();
}

function createLightImpactGlowCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 192;
  canvas.height = 44;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(1, 0.22);
  const glow = context.createRadialGradient(0, 0, 1, 0, 0, 92);
  glow.addColorStop(0, "rgba(255, 252, 230, 0.82)");
  glow.addColorStop(0.24, "rgba(255, 240, 196, 0.42)");
  glow.addColorStop(0.58, "rgba(255, 226, 162, 0.16)");
  glow.addColorStop(1, "rgba(255, 226, 162, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(0, 0, 94, 0, Math.PI * 2);
  context.fill();
  context.restore();

  const core = context.createLinearGradient(32, canvas.height / 2, 160, canvas.height / 2);
  core.addColorStop(0, "rgba(255, 242, 204, 0)");
  core.addColorStop(0.5, "rgba(255, 255, 238, 0.38)");
  core.addColorStop(1, "rgba(255, 242, 204, 0)");
  context.fillStyle = core;
  context.fillRect(28, 18, 136, 7);
  return canvas;
}

function createPlatformCastShadowCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 224;
  canvas.height = 34;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  const horizontal = context.createLinearGradient(0, 0, canvas.width, 0);
  horizontal.addColorStop(0, "rgba(0, 0, 0, 0)");
  horizontal.addColorStop(0.18, "rgba(0, 0, 0, 0.46)");
  horizontal.addColorStop(0.5, "rgba(0, 0, 0, 0.74)");
  horizontal.addColorStop(0.82, "rgba(0, 0, 0, 0.46)");
  horizontal.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = horizontal;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.globalCompositeOperation = "destination-in";
  const vertical = context.createLinearGradient(0, 0, 0, canvas.height);
  vertical.addColorStop(0, "rgba(0, 0, 0, 0)");
  vertical.addColorStop(0.32, "rgba(0, 0, 0, 0.92)");
  vertical.addColorStop(0.72, "rgba(0, 0, 0, 0.58)");
  vertical.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = vertical;
  context.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
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
    setMenuPanelVisible(false);
    setLoadingVisible(true);
    updateLoadingProgress(0, "Loading menu...");
    const progress = (value) => updateLoadingProgress(value, "Loading menu...");
    this.load.on("progress", progress);
    this.load.once("complete", () => {
      this.load.off("progress", progress);
      updateLoadingProgress(1, "Finalizing menu...");
    });

    this.load.image("parallax-city", `./public/assets/environment/paralax_city.png?v=${ASSET_VERSION}`);
    this.load.audio("bgm-menu", `./public/assets/sound/bgm_menu.mp3?v=${ASSET_VERSION}`);
  }

  create() {
    if (!this.textures.exists("tile-ground")) makeTextures(this);
    makeLightFxTextures(this);
    this.physics.world.gravity.y = 1150;
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = false;
    if (state.resetProgressOnCreate) {
      resetGameProgress();
    }
    this.levelReady = false;
    this.createMenuBackdrop();
    this.registerAudioLifecycle();
    if (state.autoStartLevel) {
      state.autoStartLevel = false;
      this.beginLevelLoad(state.levelIndex);
      return;
    }
    this.showMainMenu();
  }

  async beginLevelLoad(levelIndex = 0) {
    const transitionStartedAt = performance.now();
    const loadId = (this.levelLoadId || 0) + 1;
    this.levelLoadId = loadId;
    this.levelReady = false;
    setGameAssetsReady(false);
    setMainMenuVisible(false);
    setMenuPanelVisible(false);
    setCheatMenuVisible(false);
    setGameOverVisible(false);
    hud.message.hidden = true;
    hud.root.hidden = true;
    setLoadingVisible(true);
    updateLoadingProgress(0, "Loading level...");
    state.levelIndex = Phaser.Math.Clamp(levelIndex, 0, LEVELS.length - 1);
    this.level = LEVELS[state.levelIndex] || LEVELS[0];
    try {
      await this.loadLevelAssets(this.level, loadId);
      if (!this.isActiveLevelLoad(loadId)) return;
      const remainingTransitionMs = MIN_LEVEL_TRANSITION_MS - (performance.now() - transitionStartedAt);
      if (remainingTransitionMs > 0) {
        updateLoadingProgress(1, "Preparing level...");
        await wait(remainingTransitionMs);
      }
      if (!this.isActiveLevelLoad(loadId)) return;
      this.createLevelRuntime();
    } catch (_error) {
      if (!this.isActiveLevelLoad(loadId)) return;
      updateLoadingProgress(1, "Could not load level.");
      this.cancelLevelRuntime();
      setGameAssetsReady(true);
      setLoadingVisible(false);
      hud.root.hidden = true;
      hud.message.hidden = true;
      setGameOverVisible(true, {
        copy: "This level did not finish loading. Restart or return to the menu."
      });
    }
  }

  isActiveLevelLoad(loadId) {
    return this.scene.isActive("PlayScene") && this.levelLoadId === loadId;
  }

  createLevelRuntime() {
    this.menuBackdrop?.destroy();
    this.menuBackdrop = null;
    hud.root.hidden = false;
    this.level = LEVELS[state.levelIndex] || LEVELS[0];
    this.levelRows = this.level.rows;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = this.levelRows[0].length * TILE;
    this.levelHeight = this.levelRows.length * TILE;

    this.createBackdrop();
    if (this.level.showWater !== false) this.createWaterBelow();
    if (this.level.showStartingHouse) this.createStartingHouse();
    if (this.level.startingRuins?.length) this.createStartingRuins();
    this.platforms = this.physics.add.staticGroup();
    this.movingPlatforms = this.physics.add.group({ allowGravity: false, immovable: true });
    this.movingPlatformRuns = [];
    this.platformShadows = [];
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
    this.wallForegroundAnchors = new Set();
    this.enemyDirection = new Map();
    this.enemyLabels = new Map();
    this.enemyNames = [...ENEMY_NAMES];
    this.enemyNameIndex = 0;
    this.lastActionAt = -Infinity;
    this.lastPickupSpeechAt = -Infinity;
    this.heartDropsCreated = 0;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.nextQuakeAt = Infinity;
    this.quakeDropStartsAt = 0;
    this.quakeDropUntil = 0;

    state.totalGems = 0;
    this.createAnimations();
    this.planWallForegroundTiles();
    this.buildLevel();
    this.createLightRays();
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
    this.physics.world.pause();
    this.input.keyboard.enabled = false;
    this.player.body.enable = false;
    this.player.body.moves = false;
    this.player.setVelocity(0, 0);

    state.gems = 0;
    state.timeLeft = this.level.timeLimit;
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.running = false;
    state.won = false;
    updateHud();
    this.pixelatedBasketImage = this.textures.exists("acorn-basket")
      ? pixelateStoryFrame(this.textures.get("acorn-basket").getSourceImage())
      : "";
    this.pixelatedLanternImage = this.textures.exists("lantern")
      ? pixelateStoryFrame(this.textures.get("lantern").getSourceImage())
      : "";
    if (this.textures.exists("falling-acorn")) {
      pixelatedEquippedImages.acorn = pixelateStoryFrame(this.textures.get("falling-acorn").getSourceImage());
    }
    if (this.pixelatedLanternImage) pixelatedEquippedImages.lantern = this.pixelatedLanternImage;
    this.levelReady = true;
    setGameAssetsReady(true);
    setLoadingVisible(false);
    this.prepareLevelIntro();
    this.time.delayedCall(120, () => {
      if (gameAssetsReady && !state.running && !this.introInProgress && hud.message.hidden && hud.storyIntro.hidden) {
        this.prepareLevelIntro();
      }
    });
  }

  showMainMenu() {
    this.levelReady = false;
    hud.root.hidden = true;
    hud.message.hidden = true;
    setGameOverVisible(false);
    setStoryIntroVisible(false);
    setCheatMenuVisible(false);
    setMenuPanelVisible(false);
    setLoadingVisible(false);
    setGameAssetsReady(true);
    setMainMenuVisible(true);
    this.registerMenuAudioUnlock();
    this.startMenuMusic();
  }

  registerMenuAudioUnlock() {
    this.unregisterMenuAudioUnlock();
    this.handleMenuAudioUnlock = () => {
      if (this.levelReady || (hud.mainMenu.hidden && hud.menuPanel.hidden)) return;
      this.startMenuMusic();
    };
    window.addEventListener("pointerdown", this.handleMenuAudioUnlock, true);
    window.addEventListener("keydown", this.handleMenuAudioUnlock, true);
    window.addEventListener("touchstart", this.handleMenuAudioUnlock, { capture: true, passive: true });
  }

  unregisterMenuAudioUnlock() {
    if (!this.handleMenuAudioUnlock) return;
    window.removeEventListener("pointerdown", this.handleMenuAudioUnlock, true);
    window.removeEventListener("keydown", this.handleMenuAudioUnlock, true);
    window.removeEventListener("touchstart", this.handleMenuAudioUnlock, true);
    this.handleMenuAudioUnlock = null;
  }

  createMenuBackdrop() {
    if (!this.textures.exists("parallax-city")) return;
    this.menuBackdrop?.destroy();
    const source = this.textures.get("parallax-city").getSourceImage();
    const scale = PLAY_HEIGHT / source.height;
    const tileWidth = Math.ceil(VIEW_WIDTH / scale);
    this.menuBackdrop = this.add.tileSprite(0, 0, tileWidth, source.height, "parallax-city");
    this.menuBackdrop.setOrigin(0, 0);
    this.menuBackdrop.setScale(scale);
    this.menuBackdrop.setScrollFactor(0);
    this.menuBackdrop.setDepth(-20);
  }

  updateMenuBackdrop(delta = 0) {
    if (!this.menuBackdrop || !delta) return;
    this.menuBackdrop.tilePositionX -= delta * 0.012;
  }

  loadLevelAssets(level, loadId) {
    return new Promise((resolve, reject) => {
      if (typeof this.load.isLoading === "function" && this.load.isLoading()) {
        this.load.reset();
      }

      let queued = 0;
      const image = (key, src) => {
        if (this.textures.exists(key)) return;
        this.load.image(key, `${src}?v=${ASSET_VERSION}`);
        queued += 1;
      };
      const storyImage = (key, src) => {
        if (this.textures.exists(key)) return;
        this.load.image(key, `${src}?v=${STORY_ASSET_VERSION}`);
        queued += 1;
      };
      const sheet = (key, src, frameWidth, frameHeight) => {
        if (this.textures.exists(key)) return;
        this.load.spritesheet(key, `${src}?v=${ASSET_VERSION}`, { frameWidth, frameHeight });
        queued += 1;
      };
      const audio = (key, src) => {
        if (this.cache.audio.exists(key)) return;
        this.load.audio(key, `${src}?v=${ASSET_VERSION}`);
        queued += 1;
      };

      sheet("gabi-sheet", "./public/assets/character/main_char_sprite.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      sheet("gabi-wings-sheet", "./public/assets/character/main_char_sprite_with_double_jump.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      if (level.lanternPlayerSheet) {
        sheet("gabi-lantern-sheet", "./public/assets/character/main_char_lantern_sprite.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      }
      sheet("platform-strip", "./public/assets/environment/platform.png", PLATFORM_FRAME_WIDTH, PLATFORM_FRAME_HEIGHT);
      sheet("platform-fence", "./public/assets/environment/platform_fence.png", PLATFORM_FRAME_WIDTH, PLATFORM_FRAME_HEIGHT);
      if (level.platformTexture === "platform-underground") {
        sheet("platform-underground", "./public/assets/environment/platform_underground.png", PLATFORM_FRAME_WIDTH, PLATFORM_FRAME_HEIGHT);
        sheet("platform-fence-underground", "./public/assets/environment/platform_fence_underground.png", PLATFORM_FRAME_WIDTH, PLATFORM_FRAME_HEIGHT);
      }
      sheet(level.enemySprite || "robot-lv1", this.getEnemySpritePath(level.enemySprite), ROBOT_FRAME_WIDTH, ROBOT_FRAME_HEIGHT);
      if (level.oldLady) sheet("old-lady", "./public/assets/character/old_lady.png", OLD_LADY_FRAME_WIDTH, OLD_LADY_FRAME_HEIGHT);
      if (level.catNpc) sheet("grey-cat", "./public/assets/character/grey_cat.png", CAT_FRAME_WIDTH, CAT_FRAME_HEIGHT);

      image("parallax-city", "./public/assets/environment/paralax_city.png");
      if (level.parallax === "parallax-underground") image("parallax-underground", "./public/assets/environment/paralax_underground.png");
      if (level.parallax === "parallax-tunnel") image("parallax-tunnel", "./public/assets/environment/paralax_tunnel.png");
      if (level.parallax === "parallax-cathedral") image("parallax-cathedral", "./public/assets/environment/paralax_cathedral.png");
      if (level.showWater !== false) image("water-below", "./public/assets/environment/water_below.png");
      if (level.showStartingHouse) {
        image("starting-house", "./public/assets/environment/starting_house.png");
        image("starting-billboard", "./public/assets/environment/starting_billboard.png");
      }
      (level.startingRuins || []).forEach((ruins) => image(ruins.key, ruins.src));
      if (level.wallTiles) this.queueWallTileAssets(level, image, sheet);
      image("coin", "./public/assets/environment/golden-coin.png");
      image("door-key", "./public/assets/environment/door_key.png");
      image("exit-door", "./public/assets/environment/exit_door.png");
      image("life-heart", "./public/assets/environment/life-heart.png");
      image("jump-item", "./public/assets/environment/double_jump_item.png");
      if (level.fallingHazard || this.levelHasCell(level, "a")) {
        image(level.fallingHazard || "falling-acorn", this.getHazardPath(level.fallingHazard));
      }
      if (level.actionAbility === "throw-acorn" || this.levelHasCell(level, "b")) {
        image("acorn-basket", "./public/assets/environment/acorn_basket.png");
        image("falling-acorn", "./public/assets/environment/falling_acorn.png");
      }
      if (level.lanternPlayerSheet || this.levelHasCell(level, "l")) image("lantern", "./public/assets/environment/lantern.png");
      (level.storyFrames || []).forEach((frame) => {
        if (frame?.key && frame?.src) storyImage(frame.key, frame.src);
      });
      audio(level.soundtrack || "bgm-lv1", this.getSoundtrackPath(level.soundtrack));
      if (level.environmentalQuake?.sfx) audio(level.environmentalQuake.sfx, this.getSfxPath(level.environmentalQuake.sfx));

      if (!queued) {
        updateLoadingProgress(1, "Level ready.");
        resolve();
        return;
      }

      const progress = (value) => updateLoadingProgress(value, `Loading ${level.name}...`);
      let finished = false;
      let timeoutId = null;
      const cleanup = () => {
        window.clearTimeout(timeoutId);
        this.load.off("progress", progress);
        this.load.off("complete", complete);
        this.load.off("loaderror", fail);
        this.events.off(Phaser.Scenes.Events.SHUTDOWN, stale);
      };
      const complete = () => {
        if (finished) return;
        finished = true;
        cleanup();
        updateLoadingProgress(1, "Level ready.");
        resolve();
      };
      const fail = (file) => {
        if (finished) return;
        finished = true;
        cleanup();
        if (typeof this.load.isLoading === "function" && this.load.isLoading()) {
          this.load.reset();
        }
        reject(new Error(`Could not load ${file?.key || "level asset"}`));
      };
      const stale = () => {
        if (finished) return;
        finished = true;
        cleanup();
        resolve();
      };

      this.load.on("progress", progress);
      this.load.once("complete", complete);
      this.load.once("loaderror", fail);
      this.events.once(Phaser.Scenes.Events.SHUTDOWN, stale);
      timeoutId = window.setTimeout(() => {
        if (finished || !this.isActiveLevelLoad(loadId)) return;
        fail({ key: `${level.name} timed out` });
      }, LEVEL_LOAD_TIMEOUT_MS);
      this.load.start();
    });
  }

  levelHasCell(level, cell) {
    return (level.rows || []).some((row) => row.includes(cell));
  }

  getEnemySpritePath(key = "robot-lv1") {
    return {
      "robot-lv1": "./public/assets/character/robot_lv1.png",
      "robot-shadow-ghost-lv2": "./public/assets/character/robot_shadow_ghost_lv2.png",
      "robot-ghost-lv3": "./public/assets/character/robot_ghost_lv3.png"
    }[key] || "./public/assets/character/robot_lv1.png";
  }

  getHazardPath(key = "falling-acorn") {
    return key === "falling-brick"
      ? "./public/assets/environment/brick.png"
      : "./public/assets/environment/falling_acorn.png";
  }

  getSoundtrackPath(key = "bgm-lv1") {
    return MUSIC_TRACKS.find((track) => track.key === key)?.src || "./public/assets/sound/bgm_lv1.mp3";
  }

  queueWallTileAssets(level, image, sheet) {
    const base = "./public/assets/environment/level3_wall_tiles";
    if (level.wallTiles.backdropSheet) {
      sheet(level.wallTiles.backdropSheet, `${base}/backdrop_tiles/x64_tile.png`, 64, 64);
    }
    (level.wallTiles.foreground || []).forEach((key) => image(key, `${base}/foreground_tiles/${this.getWallTileFile(key)}.png`));
  }

  getWallTileFile(key) {
    return {
      "underground-wall-1": "underground_wall_1",
      "underground-wall-2": "underground_wall_2",
      "underground-wall-3": "underground_wall_3",
      "underground-wall-4": "underground_wall_4",
      "underground-wall-5": "underground_wall_5"
    }[key] || key.replaceAll("-", "_");
  }

  getSfxPath(key) {
    return {
      [EARTHQUAKE_SFX_KEY]: "./public/assets/sound/sfx/earthquake_1.mp3"
    }[key];
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
    this.introPlayAttempt = (this.introPlayAttempt || 0) + 1;
    setStoryIntroVisible(false);
    hud.message.hidden = true;
    this.startMusic();
    try {
      const frames = this.getPreloadedStoryFrames();
      if (!this.isCurrentIntro(introToken)) return;
      if (frames.length < 2) {
        await this.loadStoryFrameTexturesFallback();
        if (!this.isCurrentIntro(introToken)) return;
        const fallbackFrames = this.getPreloadedStoryFrames();
        if (fallbackFrames.length >= 2) {
          await this.renderStoryIntro(fallbackFrames, introToken);
          if (!this.isCurrentIntro(introToken)) return;
        }
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

  async loadStoryFrameTexturesFallback() {
    const missingFrames = (this.level.storyFrames || []).slice(0, 2).filter((frame) => {
      return frame?.key && frame?.src && !this.textures.exists(frame.key);
    });
    if (!missingFrames.length) return;
    const images = await Promise.all(missingFrames.map((frame) => loadStoryFrame(frame.src)));
    images.forEach((image, index) => {
      const frame = missingFrames[index];
      if (!image || this.textures.exists(frame.key)) return;
      this.textures.addImage(frame.key, image);
    });
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

  createLightRays() {
    this.lightRayLayers = [];
    this.lightImpactGlows = [];
    this.lightSparkles = [];
    this.resolvedLightRays = [];
    this.nextLightSparkleAt = 0;
    this.lightRayLayer = null;
    if (!this.level.lightRays?.length) return;

    this.level.lightRays.forEach((ray, index) => {
      const resolvedRay = this.resolveWorldLightRay(ray, index);
      if (resolvedRay.height < 90) return;
      this.resolvedLightRays.push(resolvedRay);

      const textureKey = `level-light-ray-${state.levelIndex}-${index}`;
      if (this.textures.exists(textureKey)) this.textures.remove(textureKey);
      this.textures.addCanvas(textureKey, this.createLightRayCanvas(resolvedRay));

      const layer = this.add.image(resolvedRay.textureX, resolvedRay.textureY, textureKey);
      layer.setOrigin(0, 0);
      layer.setScrollFactor(1);
      layer.setDepth(LIGHT_RAY_DEPTH);
      layer.setAlpha((this.level.lightRayAlpha ?? 0.82) * (resolvedRay.layerAlpha ?? 1));
      layer.setBlendMode(Phaser.BlendModes.SCREEN ?? Phaser.BlendModes.ADD);
      this.trackLightRayLayer(layer, resolvedRay, index);

      if (resolvedRay.foreground) {
        const frontTextureKey = `level-light-ray-front-${state.levelIndex}-${index}`;
        if (this.textures.exists(frontTextureKey)) this.textures.remove(frontTextureKey);
        this.textures.addCanvas(frontTextureKey, this.createLightRayCanvas(resolvedRay, { maskObstructions: true, frontPass: true, blindingPass: resolvedRay.blinding }));
        const frontLayer = this.add.image(resolvedRay.textureX, resolvedRay.textureY, frontTextureKey);
        frontLayer.setOrigin(0, 0);
        frontLayer.setScrollFactor(1);
        frontLayer.setDepth(resolvedRay.blinding ? LIGHT_RAY_BLINDING_DEPTH : LIGHT_RAY_FRONT_DEPTH);
        frontLayer.setAlpha(resolvedRay.frontAlpha ?? 0.14);
        frontLayer.setBlendMode(resolvedRay.blinding ? Phaser.BlendModes.ADD : (Phaser.BlendModes.SCREEN ?? Phaser.BlendModes.ADD));
        this.trackLightRayLayer(frontLayer, resolvedRay, index + 37);
      }

      this.createLightImpactGlows(resolvedRay, index);
    });

    this.lightRayLayer = this.lightRayLayers[0]?.layer || null;
  }

  trackLightRayLayer(layer, ray, seed = 0) {
    const opacityMode = ray.opacityMode || "pulse";
    const noise = this.wallPlacementNoise(seed + 11, seed + 43);
    this.lightRayLayers.push({
      layer,
      baseAlpha: layer.alpha,
      phase: this.wallPlacementNoise(seed + 7, seed + 29) * Math.PI * 2,
      pulse: opacityMode === "steady" ? 0 : (ray.foreground ? 0.012 : 0.024),
      opacityMode,
      dimAmount: layer.alpha * (ray.dimAmount ?? (0.16 + noise * 0.12)),
      dimSpeed: ray.dimSpeed ?? (0.00018 + noise * 0.00012)
    });
  }

  resolveWorldLightRay(ray, index = 0) {
    const thickness = Phaser.Math.Clamp(ray.thickness ?? this.pickLightRayThickness(index), 1, 4);
    const candidate = {
      ...ray,
      y: ray.y ?? -96,
      topWidth: (ray.topWidth ?? 42) * thickness,
      bottomWidth: (ray.bottomWidth ?? 160) * thickness,
      height: ray.height ?? 680,
      thickness,
      seed: index
    };
    candidate.impacts = this.getLightRayImpactPoints(candidate);
    const bounds = this.getLightRayBounds(candidate);
    return {
      ...candidate,
      ...bounds,
      localX: candidate.x - bounds.textureX,
      localY: candidate.y - bounds.textureY
    };
  }

  pickLightRayThickness(index = 0) {
    const roll = this.wallPlacementNoise(index + 31, index + 83);
    if (roll > 0.82) return 4;
    if (roll > 0.58) return 3;
    if (roll > 0.28) return 2;
    return 1;
  }

  getLightRayImpactPoints(ray) {
    const desiredHeight = ray.height ?? 680;
    const topY = ray.y ?? -96;
    const lean = ray.lean ?? 140;
    const steps = Math.max(40, Math.ceil(desiredHeight / 10));
    const impacts = [];

    for (let step = 1; step <= steps; step += 1) {
      const t = step / steps;
      const y = topY + desiredHeight * t;
      const centerX = (ray.x ?? 0) + lean * t;
      const halfWidth = Phaser.Math.Linear(ray.topWidth ?? 42, ray.bottomWidth ?? 160, t) / 2;
      for (const sample of [-0.46, -0.22, 0, 0.22, 0.46]) {
        const x = centerX + halfWidth * sample;
        const row = Math.floor(y / TILE);
        const column = Math.floor(x / TILE);
        if (!this.isLightBlockingCell(row, column) || this.isLightBlockingCell(row - 1, column)) continue;
        const contactX = Phaser.Math.Clamp(x, column * TILE + 5, (column + 1) * TILE - 5);
        const contactY = row * TILE + 2;
        const tooClose = impacts.some((impact) => Math.abs(impact.x - contactX) < 80 && Math.abs(impact.y - contactY) < 48);
        if (tooClose) continue;
        impacts.push({
          x: contactX,
          y: contactY,
          width: Phaser.Math.Clamp(halfWidth * 1.2, 46, 170),
          alpha: Phaser.Math.Clamp((ray.alpha ?? 0.16) * 2.05, 0.22, 0.66)
        });
        if (impacts.length >= 7) return impacts;
      }
    }

    return impacts;
  }

  isLightBlockedAtWorldPoint(x, y) {
    if (y < 0 || x < 0 || x >= this.levelWidth || y >= this.levelHeight) return false;
    return this.isLightBlockingCell(Math.floor(y / TILE), Math.floor(x / TILE));
  }

  isLightBlockingCell(rowIndex, columnIndex) {
    return ["#", "w", "="].includes(this.levelRows[rowIndex]?.[columnIndex]);
  }

  getLightRayBounds(ray) {
    const padding = LIGHT_RAY_TEXTURE_PADDING;
    const outer = this.getLightRayGeometry(ray, 0, 2.15);
    const inner = this.getLightRayGeometry(ray, 0, 0.7);
    const crackHalfWidth = (ray.topWidth ?? 42) * 3.4;
    const minX = Math.floor(Math.min(outer.topLeft, outer.bottomLeft, inner.topLeft, inner.bottomLeft, outer.topX - crackHalfWidth) - padding);
    const maxX = Math.ceil(Math.max(outer.topRight, outer.bottomRight, inner.topRight, inner.bottomRight, outer.topX + crackHalfWidth) + padding);
    const minY = Math.floor(Math.min(outer.topY, inner.topY) - padding - 30);
    const maxY = Math.ceil(Math.max(outer.bottomY, inner.bottomY) + padding);
    return {
      textureX: minX,
      textureY: minY,
      textureWidth: Math.max(1, maxX - minX),
      textureHeight: Math.max(1, maxY - minY)
    };
  }

  createLightRayCanvas(ray, options = {}) {
    const canvas = document.createElement("canvas");
    canvas.width = ray.textureWidth;
    canvas.height = ray.textureHeight;
    const localRay = {
      ...ray,
      x: ray.localX,
      y: ray.localY,
      alpha: options.blindingPass ? Math.max((ray.alpha ?? 0.16) * 1.75, 0.42) : (options.frontPass ? (ray.alpha ?? 0.16) * 0.7 : ray.alpha)
    };

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    this.paintCeilingCrackGlow(context, localRay);
    this.paintSoftLightRay(context, 0, localRay);
    this.paintLightDust(context, 0, [localRay]);
    if (options.maskObstructions) this.maskLightObstructions(context, ray);
    return canvas;
  }

  maskLightObstructions(context, ray) {
    context.save();
    context.globalCompositeOperation = "destination-out";
    const startColumn = Math.max(0, Math.floor(ray.textureX / TILE) - 1);
    const endColumn = Math.min(this.levelRows[0].length - 1, Math.ceil((ray.textureX + ray.textureWidth) / TILE) + 1);
    const startRow = Math.max(0, Math.floor(ray.textureY / TILE) - 1);
    const endRow = Math.min(this.levelRows.length - 1, Math.ceil((ray.textureY + ray.textureHeight) / TILE) + 1);

    for (let row = startRow; row <= endRow; row += 1) {
      for (let column = startColumn; column <= endColumn; column += 1) {
        if (!this.isLightBlockingCell(row, column)) continue;
        context.fillRect(column * TILE - ray.textureX - 2, row * TILE - ray.textureY - 2, TILE + 4, TILE + 4);
      }
    }
    context.restore();
  }

  createLightImpactGlows(ray, index = 0) {
    (ray.impacts || []).forEach((impact, impactIndex) => {
      const glow = this.add.image(impact.x, impact.y, "light-impact-glow");
      glow.setOrigin(0.5, 0.5);
      glow.setScale(Phaser.Math.Clamp(impact.width / 118, 0.5, 1.65), Phaser.Math.Clamp(impact.width / 360, 0.24, 0.5));
      glow.setDepth(LIGHT_RAY_IMPACT_DEPTH);
      glow.setBlendMode(Phaser.BlendModes.ADD);
      glow.setAlpha(impact.alpha);
      this.lightImpactGlows.push({
        glow,
        baseAlpha: impact.alpha,
        phase: this.wallPlacementNoise(index + impactIndex * 13, impactIndex + 61) * Math.PI * 2
      });
    });
  }

  paintCeilingCrackGlow(context, ray) {
    const x = ray.x ?? 0;
    const y = ray.y ?? 0;
    const width = ray.topWidth ?? 42;
    const glow = context.createRadialGradient(x, y, 1, x, y, width * 3.4);
    glow.addColorStop(0, this.lightRayRgba((ray.alpha ?? 0.16) * 0.34));
    glow.addColorStop(0.42, this.lightRayRgba((ray.alpha ?? 0.16) * 0.12));
    glow.addColorStop(1, "rgba(255, 239, 198, 0)");
    context.fillStyle = glow;
    context.beginPath();
    context.ellipse(x, y, width * 3.2, 28, -0.16, 0, Math.PI * 2);
    context.fill();

    context.strokeStyle = this.lightRayRgba((ray.alpha ?? 0.16) * 0.42);
    context.lineWidth = 2;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(x - width * 0.58, y + 1);
    context.lineTo(x + width * 0.52, y - 2);
    context.stroke();
  }

  paintSoftLightRay(context, padding, ray, index = 0) {
    [
      { widthScale: 2.15, alphaScale: 0.2, edgePower: 2.1, segments: 92 },
      { widthScale: 1.28, alphaScale: 0.48, edgePower: 2.55, segments: 86 },
      { widthScale: 0.58, alphaScale: 0.38, edgePower: 3.1, segments: 68 }
    ].forEach((pass) => {
      this.paintFeatheredLightRay(context, padding, ray, pass);
    });
    this.paintLightStreaks(context, padding, ray, index);
  }

  paintFeatheredLightRay(context, padding, ray, pass) {
    const geometry = this.getLightRayGeometry(ray, padding, pass.widthScale);
    const segments = pass.segments ?? 80;
    for (let segment = 0; segment < segments; segment += 1) {
      const u1 = -1 + (segment / segments) * 2;
      const u2 = -1 + ((segment + 1) / segments) * 2;
      const midpoint = (u1 + u2) / 2;
      const edgeFade = Math.max(0, 1 - Math.abs(midpoint));
      const gaussianFade = Math.exp(-Math.pow(Math.abs(midpoint) / 0.62, 2));
      const lateralFade = Math.pow(edgeFade, pass.edgePower ?? 2.4) * 0.45 + gaussianFade * 0.55;
      const alpha = (ray.alpha ?? 0.16) * (pass.alphaScale ?? 0.4) * lateralFade;
      if (alpha < 0.001) continue;

      const gradient = context.createLinearGradient(0, geometry.topY, 0, geometry.bottomY);
      gradient.addColorStop(0, "rgba(255, 239, 198, 0)");
      gradient.addColorStop(0.12, this.lightRayRgba(alpha * 0.44));
      gradient.addColorStop(0.29, this.lightRayRgba(alpha));
      gradient.addColorStop(0.58, this.lightRayRgba(alpha * 0.42));
      gradient.addColorStop(0.84, this.lightRayRgba(alpha * 0.08));
      gradient.addColorStop(1, "rgba(255, 239, 198, 0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(geometry.topX + geometry.topHalfWidth * u1, geometry.topY);
      context.lineTo(geometry.topX + geometry.topHalfWidth * u2, geometry.topY);
      context.lineTo(geometry.bottomX + geometry.bottomHalfWidth * u2, geometry.bottomY);
      context.lineTo(geometry.bottomX + geometry.bottomHalfWidth * u1, geometry.bottomY);
      context.closePath();
      context.fill();
    }
  }

  paintLightStreaks(context, padding, ray, index = 0) {
    const geometry = this.getLightRayGeometry(ray, padding, 0.7);
    const span = Math.max(1, geometry.bottomY - geometry.topY);

    for (let streak = 0; streak < 3; streak += 1) {
      const t = 0.18 + streak * 0.19;
      const drift = (this.wallPlacementNoise(index + 17, streak + 31) - 0.5) * (ray.topWidth ?? 42) * 0.7;
      const startX = Phaser.Math.Linear(geometry.topX, geometry.bottomX, t * 0.2) + drift;
      const endX = startX + (ray.lean ?? 140) * (0.68 + streak * 0.06);
      const startY = geometry.topY + Math.min(26 + streak * 24, span * 0.22);
      const endY = geometry.topY + span * Math.max(0.48, 0.82 - streak * 0.08);
      if (endY <= startY + 24) continue;
      const lineGradient = context.createLinearGradient(startX, startY, endX, endY);
      const alpha = (ray.alpha ?? 0.16) * (0.045 + streak * 0.012);
      lineGradient.addColorStop(0, "rgba(255, 247, 220, 0)");
      lineGradient.addColorStop(0.28, this.lightRayRgba(alpha));
      lineGradient.addColorStop(0.72, this.lightRayRgba(alpha * 0.42));
      lineGradient.addColorStop(1, "rgba(255, 247, 220, 0)");

      context.strokeStyle = lineGradient;
      context.lineWidth = 10 + streak * 4;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    }
  }

  paintLightDust(context, padding, rays = null) {
    (rays || this.level.lightRays || []).forEach((ray, rayIndex) => {
      const geometry = this.getLightRayGeometry(ray, padding, 0.9);
      for (let i = 0; i < 24; i += 1) {
        const seedA = this.wallPlacementNoise(rayIndex + i * 3, i + 41);
        const seedB = this.wallPlacementNoise(rayIndex + i * 5, i + 73);
        const seedC = this.wallPlacementNoise(rayIndex + i * 7, i + 97);
        const t = 0.14 + seedA * 0.68;
        const spread = Phaser.Math.Linear(ray.topWidth ?? 42, ray.bottomWidth ?? 150, t);
        const x = Phaser.Math.Linear(geometry.topX, geometry.bottomX, t) + (seedB - 0.5) * spread * 0.72;
        const y = Phaser.Math.Linear(geometry.topY, geometry.bottomY, t);
        const radius = 0.45 + seedC * 1.15;
        context.fillStyle = this.lightRayRgba(0.025 + seedC * 0.04);
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    });
  }

  getLightRayGeometry(ray, padding, widthScale = 1) {
    const topY = padding + (ray.y ?? -180);
    const bottomY = topY + (ray.height ?? 680);
    const topWidth = (ray.topWidth ?? 42) * widthScale;
    const bottomWidth = (ray.bottomWidth ?? 160) * widthScale;
    const topX = padding + (ray.x ?? 0);
    const bottomX = topX + (ray.lean ?? 140);
    return {
      topX,
      bottomX,
      topY,
      bottomY,
      topHalfWidth: topWidth / 2,
      bottomHalfWidth: bottomWidth / 2,
      topLeft: topX - topWidth / 2,
      topRight: topX + topWidth / 2,
      bottomLeft: bottomX - bottomWidth / 2,
      bottomRight: bottomX + bottomWidth / 2
    };
  }

  lightRayRgba(alpha) {
    return `rgba(255, 239, 198, ${Phaser.Math.Clamp(alpha, 0, 1)})`;
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

  createStartingRuins() {
    (this.level.startingRuins || []).forEach((ruinsConfig) => {
      const ruins = this.add.image(ruinsConfig.x, ruinsConfig.floorRow * TILE + 4, ruinsConfig.key);
      ruins.setOrigin(0, 1);
      ruins.setScale(ruinsConfig.scale ?? STARTING_RUINS_SCALE);
      ruins.setDepth(STARTING_HOUSE_DEPTH);
    });
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
    if (this.textures.exists("gabi-sheet") && !this.anims.exists("gabi-idle")) {
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
    }
    if (this.textures.exists("gabi-wings-sheet") && !this.anims.exists("gabi-wing-jump")) {
      this.anims.create({
        key: "gabi-wing-jump",
        frames: this.anims.generateFrameNumbers("gabi-wings-sheet", { frames: [2, 3] }),
        frameRate: 6,
        repeat: -1
      });
    }
    if (this.textures.exists("gabi-sheet") && !this.anims.exists("gabi-hurt")) {
      this.anims.create({
        key: "gabi-hurt",
        frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [4, 5] }),
        frameRate: 6,
        repeat: -1
      });
    }
    if (this.textures.exists("gabi-lantern-sheet") && !this.anims.exists("gabi-lantern-idle")) {
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
    }
    const enemySprite = this.level.enemySprite || "robot-lv1";
    if (this.textures.exists(enemySprite) && !this.anims.exists(`${enemySprite}-move`)) {
      this.anims.create({
        key: `${enemySprite}-move`,
        frames: this.anims.generateFrameNumbers(enemySprite, { frames: [0, 1, 2] }),
        frameRate: 8,
        repeat: -1
      });
    }
    if (this.textures.exists("old-lady") && !this.anims.exists("old-lady-idle")) {
      this.anims.create({
        key: "old-lady-idle",
        frames: this.anims.generateFrameNumbers("old-lady", { frames: [0, 1, 2] }),
        frameRate: 3,
        repeat: -1
      });
    }
    if (this.textures.exists("grey-cat") && !this.anims.exists("cat-run")) {
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
    this.difficultyCellCounts = { m: 0, a: 0 };
    this.levelRows.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (!this.shouldKeepDifficultyCell(cell)) return;
        const x = columnIndex * TILE + TILE / 2;
        const y = rowIndex * TILE + TILE / 2;
        if (cell === "#" || cell === "w") {
          const block = this.platforms.create(x, y, "tile-ground");
          block.setVisible(false);
          if (cell === "w") {
            this.createWallTileVisual(x, y, rowIndex, columnIndex);
          }
        }
        if (cell === "v") {
          this.createWallTileVisual(x, y, rowIndex, columnIndex);
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
          acorn.setVisible(false);
          acorn.body.enable = false;
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
    this.createPlatformShadows();
  }

  createWallTileVisual(x, y, rowIndex, columnIndex) {
    const wallTiles = this.level.wallTiles;
    if (!wallTiles) {
      const wall = this.add.rectangle(x, y, TILE + 1, TILE + 1, 0x020202, 1);
      wall.setDepth(0);
      this.platformVisuals.add(wall);
      return;
    }

    const backdropFrame = this.pickWallBackdropFrame(rowIndex, columnIndex);
    const backdrop = this.add.image(x, y, wallTiles.backdropSheet, backdropFrame);
    backdrop.setDisplaySize(TILE + 1, TILE + 1);
    backdrop.setDepth(0);
    backdrop.setAlpha(0.94);
    this.platformVisuals.add(backdrop);

    if (!this.shouldPlaceWallForeground(rowIndex, columnIndex)) return;
    const foregroundKey = this.pickWallTile(wallTiles.foreground, rowIndex + 7, columnIndex + 11);
    const foregroundOffset = this.getWallForegroundOffset(rowIndex, columnIndex);
    const foreground = this.add.image(
      x + TILE * ((WALL_FOREGROUND_TILE_SPAN - 1) / 2) + foregroundOffset.x,
      y + TILE * ((WALL_FOREGROUND_TILE_SPAN - 1) / 2) + foregroundOffset.y,
      foregroundKey
    );
    foreground.setDisplaySize(TILE * WALL_FOREGROUND_TILE_SPAN + 2, TILE * WALL_FOREGROUND_TILE_SPAN + 2);
    foreground.setDepth(0.08);
    foreground.setAlpha(0.82);
    foreground.setFlipX(this.shouldFlipWallForeground(rowIndex, columnIndex));
    this.platformVisuals.add(foreground);
  }

  shouldPlaceWallForeground(rowIndex, columnIndex) {
    return this.wallForegroundAnchors?.has(`${rowIndex}:${columnIndex}`);
  }

  planWallForegroundTiles() {
    this.wallForegroundAnchors = new Set();
    if (!this.level.wallTiles) return;
    const candidates = [];
    this.levelRows.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (!this.isWallCell(rowIndex, columnIndex) || !this.canPlaceWallForegroundAt(rowIndex, columnIndex)) return;
        candidates.push({ rowIndex, columnIndex, score: this.wallPlacementNoise(rowIndex, columnIndex) });
      });
    });

    candidates.sort((a, b) => a.score - b.score);
    const selected = [];
    candidates.forEach((candidate) => {
      if (candidate.score > 0.58) return;
      const tooClose = selected.some((placed) => {
        const rowDistance = Math.abs(placed.rowIndex - candidate.rowIndex);
        const columnDistance = Math.abs(placed.columnIndex - candidate.columnIndex);
        return rowDistance < 4 && columnDistance < 4;
      });
      if (tooClose) return;
      selected.push(candidate);
      this.addWallForegroundCluster(candidate.rowIndex, candidate.columnIndex);
    });
  }

  addWallForegroundCluster(rowIndex, columnIndex) {
    this.wallForegroundAnchors.add(`${rowIndex}:${columnIndex}`);
    [
      [0, WALL_FOREGROUND_TILE_SPAN, 0.82],
      [WALL_FOREGROUND_TILE_SPAN, 0, 0.72],
      [WALL_FOREGROUND_TILE_SPAN, WALL_FOREGROUND_TILE_SPAN, 0.52],
      [-WALL_FOREGROUND_TILE_SPAN, 0, 0.36],
      [0, -WALL_FOREGROUND_TILE_SPAN, 0.3]
    ].forEach(([rowOffset, columnOffset, threshold]) => {
      const nextRow = rowIndex + rowOffset;
      const nextColumn = columnIndex + columnOffset;
      if (!this.canPlaceWallForegroundAt(nextRow, nextColumn)) return;
      if (this.wallPlacementNoise(nextRow + 101, nextColumn + 53) > threshold) return;
      this.wallForegroundAnchors.add(`${nextRow}:${nextColumn}`);
    });
  }

  canPlaceWallForegroundAt(rowIndex, columnIndex) {
    for (let rowOffset = 0; rowOffset < WALL_FOREGROUND_TILE_SPAN; rowOffset += 1) {
      for (let columnOffset = 0; columnOffset < WALL_FOREGROUND_TILE_SPAN; columnOffset += 1) {
        if (!this.isWallCell(rowIndex + rowOffset, columnIndex + columnOffset)) return false;
      }
    }
    return true;
  }

  getWallForegroundOffset(rowIndex, columnIndex) {
    return {
      x: (this.wallPlacementNoise(rowIndex + 19, columnIndex + 31) - 0.5) * TILE * 0.5,
      y: (this.wallPlacementNoise(rowIndex + 43, columnIndex + 7) - 0.5) * TILE * 0.36
    };
  }

  shouldFlipWallForeground(rowIndex, columnIndex) {
    return this.wallPlacementNoise(rowIndex + 71, columnIndex + 23) > 0.52;
  }

  wallPlacementNoise(rowIndex, columnIndex) {
    const value = Math.sin(rowIndex * 12.9898 + columnIndex * 78.233 + rowIndex * columnIndex * 0.137) * 43758.5453;
    return value - Math.floor(value);
  }

  findWallRegionEdge(rowIndex, columnIndex, rowStep, columnStep) {
    let row = rowIndex;
    let column = columnIndex;
    while (this.isWallCell(row + rowStep, column + columnStep)) {
      row += rowStep;
      column += columnStep;
    }
    return rowStep ? row : column;
  }

  pickWallTile(keys = [], rowIndex = 0, columnIndex = 0) {
    if (!keys.length) return "tile-ground";
    const index = Math.abs((rowIndex * 47 + columnIndex * 23 + rowIndex * columnIndex * 7) % keys.length);
    return keys[index];
  }

  pickWallBackdropFrame(rowIndex, columnIndex) {
    const frameCount = this.level.wallTiles?.backdropFrames || 1;
    return Math.floor(this.wallPlacementNoise(rowIndex + 11, columnIndex + 29) * frameCount) % frameCount;
  }

  isWallCell(rowIndex, columnIndex) {
    const cell = this.levelRows[rowIndex]?.[columnIndex];
    return cell === "w" || cell === "v";
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
      speed: Phaser.Math.Between(0, 1) ? 72 : -72,
      lastX: centerX,
      deltaX: 0
    });
  }

  createPlatformShadows() {
    this.platformShadows = [];
    if (!this.level.lightRays?.length) return;
    const runs = this.getPlatformShadowRuns();
    runs.forEach((caster) => {
      runs.forEach((receiver) => {
        if (caster.id === receiver.id) return;
        const verticalDistance = receiver.topY - caster.topY;
        if (verticalDistance < 88 || verticalDistance > 460) return;
        const overlap = this.getRunOverlap(this.getRunShadowEnvelope(caster), this.getRunShadowEnvelope(receiver));
        if (overlap.width < 42) return;
        const shadow = this.add.image(overlap.centerX, receiver.topY + 9, "platform-cast-shadow");
        shadow.setDepth(PLATFORM_SHADOW_DEPTH);
        shadow.setBlendMode(Phaser.BlendModes.MULTIPLY ?? Phaser.BlendModes.NORMAL);
        shadow.setAlpha(0);
        this.platformShadows.push({
          shadow,
          caster,
          receiver,
          baseAlpha: Phaser.Math.Clamp(0.42 - verticalDistance / 1550, 0.13, 0.34)
        });
      });
    });
    this.updatePlatformShadows();
  }

  getPlatformShadowRuns() {
    const staticRuns = this.platformRuns.map((run, index) => ({
      ...run,
      id: `static-${index}`,
      moving: false
    }));
    const movingRuns = this.movingPlatformRuns.map((platform, index) => ({
      ...this.getMovingPlatformRun(platform),
      id: `moving-${index}`,
      moving: true,
      platform
    }));
    return [...staticRuns, ...movingRuns];
  }

  getRunShadowEnvelope(run) {
    if (!run.moving || !run.platform) return run;
    const halfWidth = run.platform.width / 2;
    return {
      ...run,
      startX: run.platform.minX - halfWidth,
      endX: run.platform.maxX + halfWidth
    };
  }

  resolvePlatformShadowRun(run) {
    if (!run.moving || !run.platform) return run;
    return {
      ...run,
      ...this.getMovingPlatformRun(run.platform)
    };
  }

  getRunOverlap(a, b) {
    const startX = Math.max(a.startX, b.startX);
    const endX = Math.min(a.endX, b.endX);
    return {
      startX,
      endX,
      width: Math.max(0, endX - startX),
      centerX: (startX + endX) / 2
    };
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
    this.clearOldLadyNpc();
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

  clearOldLadyNpc() {
    this.oldLadySpeechBubble?.destroy(true);
    this.oldLadySpeechBubble = null;
    this.oldLady?.destroy();
    this.oldLady = null;
    this.oldLadySpeechText = "";
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
    this.createMobileGestureInput();
  }

  createMobileGestureInput() {
    this.mobileGesture = {
      enabled: isMobileTouchDevice(),
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      jumpAnchorX: 0,
      jumpAnchorY: 0,
      jumpStrokeArmed: true,
      direction: 0,
      jumpQueued: false,
      actionQueued: false
    };
    if (!this.mobileGesture.enabled) return;
    this.input.addPointer(2);
    this.input.on("pointerdown", this.handleMobilePointerDown, this);
    this.input.on("pointermove", this.handleMobilePointerMove, this);
    this.input.on("pointerup", this.handleMobilePointerUp, this);
    this.input.on("pointerupoutside", this.handleMobilePointerUp, this);
    this.input.on("pointercancel", this.resetMobileGestureInput, this);
  }

  handleMobilePointerDown(pointer) {
    if (!this.mobileGesture?.enabled) return;
    if (this.mobileGesture.active && this.mobileGesture.pointerId !== pointer.id) {
      this.mobileGesture.actionQueued = true;
      return;
    }
    this.mobileGesture.active = true;
    this.mobileGesture.pointerId = pointer.id;
    this.mobileGesture.startX = pointer.x;
    this.mobileGesture.startY = pointer.y;
    this.mobileGesture.jumpAnchorX = pointer.x;
    this.mobileGesture.jumpAnchorY = pointer.y;
    this.mobileGesture.jumpStrokeArmed = true;
    this.mobileGesture.direction = 0;
    this.mobileGesture.jumpQueued = false;
  }

  handleMobilePointerMove(pointer) {
    if (!this.isActiveMobilePointer(pointer)) return;
    this.updateMobileGesture(pointer);
  }

  handleMobilePointerUp(pointer) {
    if (!this.isActiveMobilePointer(pointer)) return;
    this.updateMobileGesture(pointer);
    this.mobileGesture.active = false;
    this.mobileGesture.pointerId = null;
    this.mobileGesture.direction = 0;
  }

  updateMobileGesture(pointer) {
    const dx = pointer.x - this.mobileGesture.startX;
    const dy = pointer.y - this.mobileGesture.startY;
    if (Math.abs(dx) > MOBILE_SWIPE_DEADZONE && Math.abs(dx) > Math.abs(dy) * 0.55) {
      this.mobileGesture.direction = dx < 0 ? -1 : 1;
    }
    const jumpDx = pointer.x - this.mobileGesture.jumpAnchorX;
    const jumpDy = pointer.y - this.mobileGesture.jumpAnchorY;
    if (!this.mobileGesture.jumpStrokeArmed && jumpDy > MOBILE_JUMP_REARM_THRESHOLD) {
      this.mobileGesture.jumpStrokeArmed = true;
      this.mobileGesture.jumpAnchorX = pointer.x;
      this.mobileGesture.jumpAnchorY = pointer.y;
      return;
    }
    if (
      !this.mobileGesture.jumpQueued &&
      this.mobileGesture.jumpStrokeArmed &&
      jumpDy < -MOBILE_JUMP_SWIPE_THRESHOLD &&
      Math.abs(jumpDy) > Math.abs(jumpDx) * 0.62
    ) {
      this.mobileGesture.jumpQueued = true;
      this.mobileGesture.jumpStrokeArmed = false;
      this.mobileGesture.jumpAnchorX = pointer.x;
      this.mobileGesture.jumpAnchorY = pointer.y;
    }
  }

  isActiveMobilePointer(pointer) {
    return Boolean(
      this.mobileGesture?.enabled &&
      this.mobileGesture.active &&
      this.mobileGesture.pointerId === pointer.id
    );
  }

  getMobileMoveDirection() {
    return this.mobileGesture?.enabled ? this.mobileGesture.direction || 0 : 0;
  }

  consumeMobileJump() {
    if (!this.mobileGesture?.enabled || !this.mobileGesture.jumpQueued) return false;
    this.mobileGesture.jumpQueued = false;
    return true;
  }

  consumeMobileAction() {
    if (!this.mobileGesture?.enabled || !this.mobileGesture.actionQueued) return false;
    this.mobileGesture.actionQueued = false;
    return true;
  }

  resetMobileGestureInput() {
    if (!this.mobileGesture) return;
    this.mobileGesture.active = false;
    this.mobileGesture.pointerId = null;
    this.mobileGesture.direction = 0;
    this.mobileGesture.jumpQueued = false;
    this.mobileGesture.jumpStrokeArmed = true;
    this.mobileGesture.actionQueued = false;
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
    if (state.running || !this.levelReady || !this.player) return;
    this.clearIntroWatchdogs();
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
    this.speechBubble?.destroy(true);
    this.speechBubble = null;
    this.catSpeechBubble?.destroy(true);
    this.catSpeechBubble = null;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.nextQuakeAt = Infinity;
    this.quakeDropStartsAt = 0;
    this.quakeDropUntil = 0;
    this.releaseBasketPromptControlLock();
    this.resetMobileGestureInput();
    this.resetPlayerToSpawn();
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    if (!state.hasKey) this.resetKeyReveal();
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
    this.thrownItems.clear(true, true);
    this.resetCatNpc();
    this.armIntroWatchdogs(this.activeIntroToken);
    this.playStoryIntroThenBegin();
  }

  armIntroWatchdogs(introToken) {
    this.clearIntroWatchdogs();
    this.introRetryTimer = window.setTimeout(() => {
      if (!this.isIntroStillWaiting(introToken) || !hud.storyIntro.hidden) return;
      this.playStoryIntroThenBegin();
    }, INTRO_RETRY_MS);
    this.introFailsafeTimer = window.setTimeout(() => {
      if (!this.isIntroStillWaiting(introToken)) return;
      setStoryIntroVisible(false);
      hud.message.hidden = true;
      this.startMusic();
      this.beginGameplay(introToken);
    }, INTRO_FAILSAFE_MS);
  }

  clearIntroWatchdogs() {
    window.clearTimeout(this.introRetryTimer);
    window.clearTimeout(this.introFailsafeTimer);
    this.introRetryTimer = null;
    this.introFailsafeTimer = null;
  }

  isIntroStillWaiting(introToken) {
    return this.isCurrentIntro(introToken) && this.introInProgress && !state.running && !state.won;
  }

  beginGameplay(introToken = this.activeIntroToken) {
    if (!this.isCurrentIntro(introToken)) return;
    this.clearIntroWatchdogs();
    this.introInProgress = false;
    this.physics.world.resume();
    this.input.keyboard.enabled = true;
    this.player.body.enable = true;
    this.player.body.moves = true;
    this.player.body.setAllowGravity(true);
    state.running = true;
    this.startTimer();
    this.scheduleNextQuake(this.time.now + 1800);
    this.showGabiSpeech(this.level.startSpeech);
    this.showOldLadySpeech();
  }

  update(time = 0, delta = 0) {
    if (!this.levelReady) {
      this.updateMenuBackdrop(delta);
      return;
    }

    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.requestLevelStart(state.levelIndex, { resetScore: false });
      return;
    }

    if (!this.isItemPromptActive()) this.moveEnemies();
    this.updateEnemyLabels();
    this.updateMovingPlatforms();
    this.updateEnvironmentalQuake(time);
    this.updateAcorns(time);
    this.updateThrownItems();
    this.updateParallax();
    this.updateLightRays(time);
    this.updateWater(delta);
    this.updateLanternOverlay();
    this.updateCatNpc(time, delta);
    this.updateGabiSpeechPosition();
    this.updateCatSpeechPosition();
    this.updateBillboardPrompt();
    if (!state.running || state.won) return;

    const mobileDirection = this.getMobileMoveDirection();
    const left = this.cursors.left.isDown || this.keysInput.left.isDown || mobileDirection < 0;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown || mobileDirection > 0;
    const jump =
      Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jump) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jumpW) ||
      this.consumeMobileJump();
    const action = Phaser.Input.Keyboard.JustDown(this.keysInput.action) || this.consumeMobileAction();
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

  shouldKeepDifficultyCell(cell) {
    if (cell !== "m" && cell !== "a") return true;
    const cellCount = this.difficultyCellCounts[cell] || 0;
    this.difficultyCellCounts[cell] = cellCount + 1;
    if (state.difficulty !== DIFFICULTY_EASY) return true;
    return cellCount % EASY_DIFFICULTY_KEEP_INTERVAL !== EASY_DIFFICULTY_KEEP_INTERVAL - 1;
  }

  maybeShowPickupSpeech(kind) {
    const now = this.time?.now || 0;
    const lines = PICKUP_SPEECH_LINES[kind] || [];
    const chance = kind === "coin" ? COIN_SPEECH_CHANCE : PICKUP_SPEECH_CHANCE;
    if (!lines.length || now - this.lastPickupSpeechAt < PICKUP_SPEECH_COOLDOWN) return;
    if (Phaser.Math.FloatBetween(0, 1) > chance) return;
    this.lastPickupSpeechAt = now;
    this.showGabiSpeech(Phaser.Math.RND.pick(lines));
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

  maybeShowCatMeow() {
    const now = this.time?.now || 0;
    if (!this.cat || !this.level.catNpc || !state.running || now < (this.nextCatMeowAt || 0)) return;
    this.nextCatMeowAt = now + Phaser.Math.Between(CAT_MEOW_MIN_DELAY, CAT_MEOW_MAX_DELAY);
    if (Phaser.Math.FloatBetween(0, 1) > CAT_MEOW_CHANCE) return;
    this.showCatSpeech("Meow!");
  }

  showCatSpeech(text) {
    if (!this.cat || !text) return;
    if (this.catSpeechBubble) return;
    const bubbleWidth = 72;
    const bubbleHeight = 28;
    const container = this.add.container(this.cat.x, this.cat.y - 34);
    const bubble = this.add.graphics();
    bubble.fillStyle(0x050505, 0.9);
    bubble.fillRoundedRect(-bubbleWidth / 2, -bubbleHeight, bubbleWidth, bubbleHeight, 5);
    bubble.fillTriangle(-6, -1, 6, -1, 0, 7);
    const label = this.add.text(0, -bubbleHeight / 2, text, {
      fontFamily: "\"Courier New\", monospace",
      fontSize: "10px",
      color: "#f4f0dc",
      align: "center"
    });
    label.setOrigin(0.5, 0.5);
    container.add([bubble, label]);
    container.setDepth(DARKNESS_DEPTH + 2);
    this.catSpeechBubble = container;
    this.time.delayedCall(1300, () => {
      if (!this.catSpeechBubble) return;
      this.tweens.add({
        targets: this.catSpeechBubble,
        alpha: 0,
        duration: 220,
        onComplete: () => {
          this.catSpeechBubble?.destroy(true);
          this.catSpeechBubble = null;
        }
      });
    });
  }

  updateCatSpeechPosition() {
    if (!this.catSpeechBubble || !this.cat) return;
    this.catSpeechBubble.setPosition(this.cat.x, this.cat.y - 34);
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
      const previousX = platform.lastX ?? platform.body.x;
      if (platform.body.x <= platform.minX) platform.speed = Math.abs(platform.speed);
      if (platform.body.x >= platform.maxX) platform.speed = -Math.abs(platform.speed);
      platform.body.setVelocityX(platform.speed);
      platform.deltaX = platform.body.x - previousX;
      platform.lastX = platform.body.x;
      platform.visuals.forEach(({ sprite, offsetX, offsetY }) => {
        sprite.setPosition(platform.body.x + offsetX, platform.body.y + offsetY);
      });
    });
    this.carryMovingPlatformRiders();
    this.updatePlatformShadows();
  }

  carryMovingPlatformRiders() {
    const playerIsSteering = this.isPlayerSteeringHorizontally();
    [this.player, this.cat].forEach((sprite) => {
      const platform = this.getRidingMovingPlatform(sprite);
      if (!platform) {
        sprite?.setData?.("movingPlatformSupport", null);
        return;
      }

      const support = sprite.getData("movingPlatformSupport");
      const shouldCorrect = support?.platform === platform && (sprite !== this.player || !playerIsSteering);
      if (shouldCorrect) {
        const expectedX = platform.body.x + support.offsetX;
        const correctionLimit = Math.max(0.35, Math.abs(platform.deltaX || 0));
        const correction = Phaser.Math.Clamp(expectedX - sprite.x, -correctionLimit, correctionLimit);
        if (Math.abs(correction) > 0.01) {
          sprite.x += correction;
          sprite.body?.updateFromGameObject?.();
        }
      }

      sprite.setData("movingPlatformSupport", {
        platform,
        offsetX: sprite.x - platform.body.x
      });
    });
  }

  isPlayerSteeringHorizontally() {
    return Boolean(
      this.cursors?.left?.isDown ||
      this.cursors?.right?.isDown ||
      this.keysInput?.left?.isDown ||
      this.keysInput?.right?.isDown ||
      this.getMobileMoveDirection() !== 0
    );
  }

  getRidingMovingPlatform(sprite) {
    if (!sprite?.body?.enable || !sprite.body.moves) return null;
    const body = sprite.body;
    if (!body.blocked.down && !body.touching.down) return null;
    const bodyLeft = body.x;
    const bodyRight = body.x + body.width;
    const bodyBottom = body.y + body.height;
    return this.movingPlatformRuns.find((platform) => {
      const platformBody = platform.body.body;
      if (!platformBody?.enable) return false;
      const platformLeft = platformBody.x;
      const platformRight = platformBody.x + platformBody.width;
      const platformTop = platformBody.y;
      const overlapsHorizontally = bodyRight > platformLeft + 4 && bodyLeft < platformRight - 4;
      const restsOnTop = bodyBottom >= platformTop - 7 && bodyBottom <= platformTop + 14;
      return overlapsHorizontally && restsOnTop;
    }) || null;
  }

  updatePlatformShadows() {
    this.platformShadows?.forEach((entry) => {
      const caster = this.resolvePlatformShadowRun(entry.caster);
      const receiver = this.resolvePlatformShadowRun(entry.receiver);
      const verticalDistance = receiver.topY - caster.topY;
      const overlap = this.getRunOverlap(caster, receiver);
      if (verticalDistance < 88 || verticalDistance > 460 || overlap.width < 28) {
        entry.shadow.setVisible(false);
        return;
      }
      const casterWidth = caster.endX - caster.startX;
      const receiverWidth = receiver.endX - receiver.startX;
      entry.shadow.setVisible(true);
      entry.shadow.setPosition(overlap.centerX, receiver.topY + 9);
      entry.shadow.setScale(
        Phaser.Math.Clamp(overlap.width / 224, 0.24, 1.9),
        Phaser.Math.Clamp(1 - verticalDistance / 720, 0.42, 0.92)
      );
      entry.shadow.setAlpha(
        Phaser.Math.Clamp(entry.baseAlpha * (overlap.width / Math.max(1, Math.min(casterWidth, receiverWidth))), 0.08, entry.baseAlpha)
      );
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
    this.nextCatMeowAt = this.time.now + Phaser.Math.Between(CAT_MEOW_MIN_DELAY / 2, CAT_MEOW_MAX_DELAY);
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
    const fromRun = this.getCatGuideRunAt(fromX, fromY) || this.catGuidePath[this.catGuideIndex]?.run;
    const phases = this.buildCatGuideTravelPhases(fromX, fromY, fromRun, target);
    const duration = phases.reduce((total, phase) => total + phase.duration, 0);
    this.catGuideTravel = {
      targetIndex,
      toX: target.x,
      toY: target.y,
      startedAt: time,
      duration,
      phases
    };
    this.cat.setFlipX(target.x < fromX);
    this.cat.play("cat-run", true);
  }

  getCatGuideRunAt(x, y) {
    return this.platformRuns
      .filter((run) => {
        const withinRun = x >= run.startX - 54 && x <= run.endX + 54;
        const nearCatY = Math.abs(y - this.getCatGuideY(run)) < 72;
        return withinRun && nearCatY;
      })
      .sort((a, b) => Math.abs(y - this.getCatGuideY(a)) - Math.abs(y - this.getCatGuideY(b)))[0] || null;
  }

  buildCatGuideTravelPhases(fromX, fromY, fromRun, target) {
    const fallback = () => [this.createCatGuidePhase("jump", fromX, fromY, target.x, target.y)];
    if (!target.run || !fromRun) return fallback();

    const sameRun = this.isSameCatRun(fromRun, target.run);
    if (sameRun) return [this.createCatGuidePhase("run", fromX, this.getCatGuideY(fromRun), target.x, this.getCatGuideY(target.run))];

    const direction = target.x >= fromX ? 1 : -1;
    const fromEdgeX = direction > 0
      ? fromRun.endX - CAT_EDGE_TARGET_PADDING
      : fromRun.startX + CAT_EDGE_TARGET_PADDING;
    const targetEdgeX = direction > 0
      ? target.run.startX + CAT_EDGE_TARGET_PADDING
      : target.run.endX - CAT_EDGE_TARGET_PADDING;
    const landingX = Phaser.Math.Clamp(targetEdgeX, target.run.startX + CAT_GUIDE_RUN_PADDING, target.run.endX - CAT_GUIDE_RUN_PADDING);
    const fromRunY = this.getCatGuideY(fromRun);
    const targetRunY = this.getCatGuideY(target.run);
    const phases = [];

    if (Math.abs(fromX - fromEdgeX) > 18) {
      phases.push(this.createCatGuidePhase("run", fromX, fromRunY, fromEdgeX, fromRunY));
    }
    phases.push(this.createCatGuidePhase("jump", fromEdgeX, fromRunY, landingX, targetRunY));
    if (Math.abs(landingX - target.x) > 18) {
      phases.push(this.createCatGuidePhase("run", landingX, targetRunY, target.x, targetRunY));
    }
    return phases;
  }

  createCatGuidePhase(kind, fromX, fromY, toX, toY) {
    const distance = Phaser.Math.Distance.Between(fromX, fromY, toX, toY);
    const isJump = kind === "jump";
    return {
      kind,
      fromX,
      fromY,
      toX,
      toY,
      duration: Phaser.Math.Clamp((distance / CAT_RUN_SPEED) * 1000, isJump ? 300 : 260, isJump ? 1100 : 1250),
      arc: isJump ? Phaser.Math.Clamp(34 + Math.abs(toX - fromX) * 0.13 + Math.max(0, fromY - toY) * 0.22, 42, 118) : 0
    };
  }

  updateCatGuideTravel(time = 0) {
    const travel = this.catGuideTravel;
    if (!travel) return;

    const elapsed = Phaser.Math.Clamp(time - travel.startedAt, 0, travel.duration);
    const phase = this.getCatGuideTravelPhase(travel, elapsed);
    const progress = Phaser.Math.Clamp(phase.elapsed / Math.max(1, phase.duration), 0, 1);
    const eased = Phaser.Math.Easing.Sine.InOut(progress);
    const x = Phaser.Math.Linear(phase.fromX, phase.toX, eased);
    const baseY = Phaser.Math.Linear(phase.fromY, phase.toY, eased);
    const arcY = phase.arc * Math.sin(Math.PI * progress);
    const y = baseY - arcY;

    this.setCatGuidePosition(x, y);
    this.cat.setFlipX(phase.toX < phase.fromX);
    if (phase.kind === "jump") {
      this.cat.anims.stop();
      this.cat.setFrame(progress < 0.55 ? 5 : 6);
    } else {
      this.cat.play("cat-run", true);
    }

    if (elapsed < travel.duration) return;
    this.catGuideIndex = travel.targetIndex;
    this.finishCatGuideTravel();
    const stop = this.catGuidePath[this.catGuideIndex];
    if (stop?.kind === "k" && !state.hasKey) this.revealKey();
    this.playCatGuideIdle();
  }

  getCatGuideTravelPhase(travel, elapsed) {
    let consumed = 0;
    for (const phase of travel.phases) {
      const phaseEnd = consumed + phase.duration;
      if (elapsed <= phaseEnd) return { ...phase, elapsed: elapsed - consumed };
      consumed = phaseEnd;
    }
    const lastPhase = travel.phases[travel.phases.length - 1];
    return { ...lastPhase, elapsed: lastPhase.duration };
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
    this.maybeShowCatMeow();
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
    const name = this.enemyNames.shift() || ENEMY_NAMES[this.enemyNameIndex % ENEMY_NAMES.length];
    this.enemyNameIndex += 1;
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

  scheduleNextQuake(fromTime = this.time.now) {
    const quake = this.level.environmentalQuake;
    if (!quake) {
      this.nextQuakeAt = Infinity;
      this.quakeDropStartsAt = 0;
      this.quakeDropUntil = 0;
      return;
    }

    this.nextQuakeAt = fromTime + Phaser.Math.Between(quake.minDelay, quake.maxDelay);
  }

  updateEnvironmentalQuake(time) {
    const quake = this.level.environmentalQuake;
    if (!quake || !state.running || state.won || this.isItemPromptActive()) return;
    if (time < this.nextQuakeAt) return;

    this.nextQuakeAt = Infinity;
    this.quakeDropStartsAt = time + quake.brickDelay;
    this.quakeDropUntil = this.quakeDropStartsAt + quake.burstDuration;
    this.cameras.main.shake(quake.shakeDuration, quake.shakeIntensity);
    this.playLevelSfx(quake.sfx, 0.68);
    this.positionQuakeBricksNearLightImpacts();
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active) return;
      acorn.setData("nextDrop", this.quakeDropStartsAt + Phaser.Math.Between(...quake.brickDropDelay));
      acorn.setData("pace", Phaser.Math.Between(...quake.brickPace));
    });
    this.scheduleNextQuake(this.quakeDropUntil);
  }

  positionQuakeBricksNearLightImpacts() {
    const impacts = this.getCurrentLightImpactDropPoints();
    if (!impacts.length) return;
    let brickIndex = 0;
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active) return;
      const impact = impacts[brickIndex % impacts.length];
      const jitterRange = Math.round(Math.max(18, impact.width * 0.36));
      const jitter = Phaser.Math.Between(-jitterRange, jitterRange);
      const homeX = Phaser.Math.Clamp(impact.x + jitter, 32, this.levelWidth - 32);
      acorn.setData("homeX", homeX);
      if (!acorn.body.enable) {
        acorn.setPosition(homeX, this.cameras.main.scrollY - FALLING_OBJECT_SPAWN_OFFSET);
      }
      brickIndex += 1;
    });
  }

  getCurrentLightImpactDropPoints() {
    const impacts = (this.resolvedLightRays || []).flatMap((ray) => ray.impacts || []);
    if (!impacts.length) return [];
    const camera = this.cameras.main;
    const visibleImpacts = impacts.filter((impact) => {
      return impact.x >= camera.scrollX - 180 && impact.x <= camera.scrollX + VIEW_WIDTH + 180;
    });
    return visibleImpacts.length ? visibleImpacts : impacts;
  }

  updateAcorns(time) {
    if (this.basketPromptActive || this.lanternPromptActive) return;
    const quake = this.level.environmentalQuake;
    const quakeDropWindowOpen = !quake || (time >= this.quakeDropStartsAt && time <= this.quakeDropUntil);
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active || !state.running || state.won) return;
      const isWaiting = !acorn.body.enable || acorn.body.velocity.y === 0;
      if (quake && isWaiting && time > this.quakeDropUntil) return;
      if (quakeDropWindowOpen && time >= acorn.getData("nextDrop") && isWaiting) {
        acorn.body.enable = true;
        acorn.setVisible(true);
        acorn.setPosition(acorn.getData("homeX"), this.cameras.main.scrollY - FALLING_OBJECT_SPAWN_OFFSET);
        acorn.setVelocity(0, acorn.getData("pace"));
        acorn.setAngularVelocity(Phaser.Math.Between(-140, 140));
      }

      if (acorn.body.enable && acorn.y > this.cameras.main.scrollY + PLAY_HEIGHT + 90) {
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

  updateLightRays(time = 0) {
    if (!this.lightRayLayers?.length) return;
    this.lightRayLayers.forEach(({ layer, baseAlpha, phase, pulse: pulseAmount, opacityMode, dimAmount, dimSpeed }) => {
      if (opacityMode === "steady") {
        layer.setAlpha(baseAlpha);
        return;
      }
      if (opacityMode === "dim") {
        const wave = (Math.sin(time * dimSpeed + phase) + 1) / 2;
        const shimmer = Math.sin(time * 0.00083 + phase) * (pulseAmount || 0.01);
        layer.setAlpha(Phaser.Math.Clamp(baseAlpha - dimAmount * wave + shimmer, baseAlpha - dimAmount, baseAlpha + (pulseAmount || 0.01)));
        return;
      }
      const pulse = baseAlpha + Math.sin(time * 0.0008 + phase) * pulseAmount + Math.sin(time * 0.00031 + phase) * pulseAmount * 0.62;
      layer.setAlpha(Phaser.Math.Clamp(pulse, baseAlpha - pulseAmount * 1.8, baseAlpha + pulseAmount * 1.18));
    });
    this.lightImpactGlows?.forEach(({ glow, baseAlpha, phase }) => {
      const pulse = baseAlpha + Math.sin(time * 0.001 + phase) * 0.055;
      glow.setAlpha(Phaser.Math.Clamp(pulse, baseAlpha * 0.74, baseAlpha * 1.18));
    });
    this.updateLightSparkles(time);
  }

  updateLightSparkles(time = 0) {
    if (!this.resolvedLightRays?.length || time < this.nextLightSparkleAt) return;
    const sparkleCount = Phaser.Math.Between(20, 60);
    for (let i = 0; i < sparkleCount; i += 1) {
      const ray = Phaser.Utils.Array.GetRandom(this.resolvedLightRays);
      this.spawnLightSparkle(ray);
    }
    this.nextLightSparkleAt = time + Phaser.Math.Between(130, 310);
  }

  spawnLightSparkle(ray) {
    const point = this.pickLightSparklePoint(ray);
    if (!point) return;
    const sparkle = this.add.image(point.x, point.y, "light-sparkle");
    const scale = Phaser.Math.FloatBetween(0.09, 0.26);
    sparkle.setScale(scale);
    sparkle.setDepth(point.foreground ? LIGHT_RAY_FRONT_DEPTH + 0.12 : LIGHT_SPARKLE_DEPTH);
    sparkle.setBlendMode(Phaser.BlendModes.ADD);
    sparkle.setAlpha(0);

    this.tweens.add({
      targets: sparkle,
      alpha: Phaser.Math.FloatBetween(0.24, 0.58),
      scale: scale * Phaser.Math.FloatBetween(1.08, 1.45),
      y: sparkle.y + Phaser.Math.FloatBetween(-8, 10),
      x: sparkle.x + Phaser.Math.FloatBetween(-5, 5),
      duration: Phaser.Math.Between(360, 620),
      yoyo: true,
      hold: Phaser.Math.Between(70, 240),
      ease: "Sine.inOut",
      onComplete: () => sparkle.destroy()
    });
  }

  pickLightSparklePoint(ray) {
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const t = Phaser.Math.FloatBetween(0.12, 0.88);
      const geometry = this.getLightRayGeometry(ray, 0, Phaser.Math.FloatBetween(0.55, 0.92));
      const halfWidth = Phaser.Math.Linear(geometry.topHalfWidth, geometry.bottomHalfWidth, t);
      const centerX = Phaser.Math.Linear(geometry.topX, geometry.bottomX, t);
      const y = Phaser.Math.Linear(geometry.topY, geometry.bottomY, t);
      const x = centerX + halfWidth * Phaser.Math.FloatBetween(-0.72, 0.72);
      if (y < 4 || x < 0 || x >= this.levelWidth || y >= this.levelHeight) continue;
      if (this.isLightBlockedAtWorldPoint(x, y)) continue;
      return {
        x,
        y,
        foreground: ray.foreground && Phaser.Math.FloatBetween(0, 1) > 0.35
      };
    }
    return null;
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

  playLevelSfx(key, volume = 0.6) {
    if (!key || !this.cache.audio.exists(key)) return;
    try {
      this.resumeAudioContext();
      this.sound.play(key, { volume });
    } catch (_error) {
      // Ignore SFX failures so environmental events never interrupt gameplay.
    }
  }

  startMenuMusic() {
    try {
      this.resumeAudioContext();
      if (this.bgm?.isPlaying && this.bgm.key === "bgm-menu") return;
      this.sound.stopAll();
      if (this.bgm && this.bgm.key !== "bgm-menu") {
        this.bgm.destroy();
        this.bgm = null;
      }
      this.bgm = this.bgm || this.sound.add("bgm-menu", { loop: true, volume: 0.28 });
      this.bgm.play();
    } catch (_error) {
      this.bgm = null;
    }
  }

  playMusicBoxTrack(track) {
    if (!track) return;
    const play = () => {
      this.resumeAudioContext();
      this.sound.stopAll();
      if (this.bgm && this.bgm.key !== track.key) {
        this.bgm.destroy();
        this.bgm = null;
      }
      this.bgm = this.bgm || this.sound.add(track.key, { loop: true, volume: 0.32 });
      this.bgm.play();
    };
    if (this.cache.audio.exists(track.key)) {
      play();
      return;
    }
    updateLoadingProgress(0, "Loading track...");
    setLoadingVisible(true);
    const progress = (value) => updateLoadingProgress(value, "Loading track...");
    this.load.on("progress", progress);
    this.load.once("complete", () => {
      this.load.off("progress", progress);
      setLoadingVisible(false);
      play();
    });
    this.load.audio(track.key, `${track.src}?v=${ASSET_VERSION}`);
    this.load.start();
  }

  registerAudioLifecycle() {
    this.unregisterAudioLifecycle();

    this.handlePageHidden = () => {
      this.wasMusicPlayingBeforeHidden = this.wasMusicPlayingBeforeHidden || Boolean(this.bgm?.isPlaying);
      this.stopGameAudio();
    };

    this.handlePageVisible = () => {
      if (!this.wasMusicPlayingBeforeHidden) return;
      this.resumeAudioContext();
      if (this.levelReady && state.running && !state.won) {
        this.startMusic();
      } else if (!this.levelReady && !hud.mainMenu.hidden) {
        this.startMenuMusic();
      }
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
    this.unregisterMenuAudioUnlock();
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
    this.clearIntroWatchdogs();
    this.levelLoadId = (this.levelLoadId || 0) + 1;
    this.activeIntroToken = (this.activeIntroToken || 0) + 1;
    this.introInProgress = false;
    state.running = false;
    setStoryIntroVisible(false);
    setItemPickupVisible(false);
    this.speechBubble?.destroy(true);
    this.speechBubble = null;
    this.catSpeechBubble?.destroy(true);
    this.catSpeechBubble = null;
    this.clearOldLadyNpc();
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
    awardScore(100);
    updateHud();
    this.maybeShowPickupSpeech("coin");
  }

  collectHeart(_player, heart) {
    if (this.time.now < (heart.getData("armedAt") || 0)) return;
    heart.disableBody(true, true);
    state.lives += 1;
    awardScore(150);
    updateHud();
    this.maybeShowPickupSpeech("heart");
  }

  collectDoubleJump(_player, doubleJump) {
    doubleJump.disableBody(true, true);
    state.hasDoubleJump = true;
    awardScore(300);
    updateHud();
    this.maybeShowPickupSpeech("wing");
  }

  collectLantern(_player, lantern) {
    lantern.disableBody(true, true);
    state.hasLantern = true;
    awardScore(350);
    this.lanternPromptActive = true;
    this.lockPlayerForBasketPrompt();
    this.switchPlayerToLanternSprite();
    this.updateLanternOverlay();
    setItemPickupVisible(true, {
      name: "Lantern",
      instruction: "Its light cuts through the tunnel darkness. Press Enter to continue",
      image: this.pixelatedLanternImage || `./public/assets/environment/lantern.png?v=${ASSET_VERSION}`
    });
    updateHud();
  }

  collectAcornBasket(_player, basket) {
    basket.disableBody(true, true);
    state.hasAcornBasket = true;
    awardScore(400);
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
    awardScore(500);
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
      awardScore(250);
      updateHud();
      return;
    }
    this.loseLife();
  }

  hitEnemyWithThrownItem(item, enemy) {
    if (!state.running || !item.active || !enemy.active) return;
    this.ricochetThrownItemFromEnemy(item, enemy);
    this.defeatEnemy(enemy);
    awardScore(350);
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
    acorn.setVisible(false);
    acorn.body.enable = false;
    acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(...this.level.acornDelay));
    acorn.setData("pace", Phaser.Math.Between(...this.level.acornPace));
  }

  loseLife() {
    if (!state.running) return;
    state.lives -= 1;
    updateHud();
    this.cameras.main.shake(180, 0.012);
    if (state.lives <= 0) {
      this.showGameOverScreen({
        copy: "Gabi ran out of chances. The city keeps the receipts."
      });
      return;
    }
    state.timeLeft = Math.max(45, state.timeLeft);
    this.resetPlayerToSpawn();
    this.showGabiSpeech(Phaser.Math.RND.pick(PICKUP_SPEECH_LINES.respawn));
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
    awardScore(state.gems === state.totalGems ? 1000 : 350);
    awardScore(state.timeLeft * 10);
    updateHud();
    if (state.levelIndex < LEVELS.length - 1) {
      this.advanceToNextLevel();
      return;
    }

    state.won = true;
    this.showGameOverScreen({
      copy: "Gabi cleared every route. Somehow, that counts as a plan."
    });
  }

  advanceToNextLevel() {
    this.requestLevelStart(state.levelIndex + 1, { resetScore: false });
  }

  showGameOverScreen({ copy } = {}) {
    const finalScore = state.score;
    recordBestScore(finalScore);
    this.cancelLevelRuntime();
    state.won = true;
    state.running = false;
    this.resetPlayerMotion({ freeze: true });
    this.setGabiAnimation("idle");
    this.sound.stopAll();
    setCheatMenuVisible(false);
    setStoryIntroVisible(false);
    setItemPickupVisible(false);
    hud.message.hidden = true;
    setGameOverVisible(true, { copy, score: finalScore });
  }

  requestLevelStart(levelIndex = 0, { resetScore = true } = {}) {
    const safeIndex = Phaser.Math.Clamp(levelIndex, 0, LEVELS.length - 1);
    const level = LEVELS[safeIndex] || LEVELS[0];
    this.cancelLevelRuntime();
    setGameAssetsReady(false);
    hud.message.hidden = true;
    setCheatMenuVisible(false);
    setMenuPanelVisible(false);
    setLoadingVisible(true);
    updateLoadingProgress(0, "Loading level...");
    state.levelIndex = safeIndex;
    if (resetScore) {
      state.score = 0;
      state.gems = 0;
      state.lives = 3;
    }
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.won = false;
    state.running = false;
    state.resetProgressOnCreate = false;
    state.autoStartLevel = true;
    state.pendingLevelPrompt = {
      title: level.introTitle || level.name,
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

hud.menuNewGame.addEventListener("click", () => {
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  resetGameProgress();
  scene.requestLevelStart(0, { resetScore: true });
});

hud.gameOverRestart.addEventListener("click", () => {
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  setGameOverVisible(false);
  resetGameProgress();
  scene.requestLevelStart(0, { resetScore: true });
});

hud.gameOverMenu.addEventListener("click", () => {
  returnToMainMenu();
});

hud.menuSelectLevel.addEventListener("click", () => showLevelSelectPanel());
hud.menuMusicBox.addEventListener("click", () => showMusicBoxPanel());
hud.menuCredits.addEventListener("click", () => showCreditsPanel());
hud.difficultyEasy.addEventListener("click", () => setDifficultySetting(DIFFICULTY_EASY));
hud.difficultyHard.addEventListener("click", () => setDifficultySetting(DIFFICULTY_HARD));
hud.menuPanelClose.addEventListener("click", () => {
  setMenuPanelVisible(false);
  if (!hud.mainMenu.hidden) return;
  setMainMenuVisible(true);
});

hud.itemPickupOk.addEventListener("click", () => {
  if (!gameAssetsReady) return;
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  scene.handleItemPickupOk(scene.time.now);
});

hud.cheatClose.addEventListener("click", () => setCheatMenuVisible(false));

function returnToMainMenu() {
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  setCheatMenuVisible(false);
  setGameOverVisible(false);
  scene.cancelLevelRuntime();
  resetGameProgress();
  state.autoStartLevel = false;
  state.resetProgressOnCreate = false;
  scene.sound.stopAll();
  scene.scene.restart();
}

function requestSelectedLevel(levelIndex) {
  if (!gameAssetsReady) return;
  const scene = game.scene.getScene("PlayScene");
  if (!scene.scene.isActive()) return;
  scene.requestLevelStart(levelIndex, { resetScore: true });
}

function getLevelIndexFromKeyboardEvent(event) {
  if (event.altKey || event.ctrlKey || event.metaKey) return null;
  if (!/^[1-9]$/.test(event.key)) return null;
  const levelIndex = Number(event.key) - 1;
  return levelIndex >= 0 && levelIndex < LEVELS.length ? levelIndex : null;
}

function isLevelSelectionVisible() {
  return !hud.cheatMenu.hidden || (!hud.menuPanel.hidden && hud.menuPanel.dataset.panel === "level-select");
}

function showMenuPanel(title, copy, panel = "") {
  hud.menuPanel.classList.remove("credits-panel");
  hud.menuPanel.dataset.panel = panel;
  hud.menuPanelTitle.textContent = title;
  hud.menuPanelCopy.textContent = copy;
  hud.menuPanelContent.replaceChildren();
  setMainMenuVisible(false);
  setMenuPanelVisible(true);
}

function showLevelSelectPanel() {
  showMenuPanel("Select Level", "Choose a route and load only the assets needed for that level.", "level-select");
  LEVELS.forEach((level, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = level.name;
    button.addEventListener("click", () => requestSelectedLevel(index));
    hud.menuPanelContent.appendChild(button);
  });
}

function showMusicBoxPanel() {
  showMenuPanel("Music Box", "Play a track on demand. Tracks load only when selected.");
  MUSIC_TRACKS.forEach((track) => {
    const row = document.createElement("div");
    row.className = "music-track";
    const label = document.createElement("span");
    label.textContent = track.label;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Play";
    button.addEventListener("click", () => {
      const scene = game.scene.getScene("PlayScene");
      if (!scene.scene.isActive()) return;
      scene.playMusicBoxTrack(track);
    });
    row.append(label, button);
    hud.menuPanelContent.appendChild(row);
  });
}

function showCreditsPanel() {
  showMenuPanel("Credits", "");
  hud.menuPanel.classList.add("credits-panel");
  const credits = [
    ["Development & Art Direction", ["Kiril"]],
    ["Gameplay Testers", ["Gabriele", "Stefano", "Rene", "Vlad", "Jarek", "Kim Loong"]],
    ["Critics of AI", ["Tomas"]],
    ["AI Tools", ["Codex", "ChatGPT", "Gemini", "Suno AI"]],
    ["Inspirations", ["Vilnius", "Klaipeda", "Crazy Sue", "Yuki Kajiura"]],
    ["Non-AI Tools", ["Adobe Photoshop", "Audacity", "Github", "Visual Studio Code"]]
  ];

  const list = document.createElement("div");
  list.className = "credits-list";
  credits.forEach(([category, names]) => {
    const section = document.createElement("section");
    section.className = "credits-section";
    const heading = document.createElement("h3");
    heading.textContent = category;
    const people = document.createElement("div");
    people.className = "credits-names";
    names.forEach((name) => {
      const line = document.createElement("p");
      line.textContent = name;
      people.appendChild(line);
    });
    section.append(heading, people);
    list.appendChild(section);
  });
  hud.menuPanelContent.appendChild(list);
}

LEVELS.forEach((level, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = level.name;
  button.addEventListener("click", () => requestSelectedLevel(index));
  hud.cheatLevels.appendChild(button);
});

const returnToMenuButton = document.createElement("button");
returnToMenuButton.type = "button";
returnToMenuButton.textContent = "Return to Menu";
returnToMenuButton.addEventListener("click", returnToMainMenu);
hud.cheatLevels.appendChild(returnToMenuButton);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !hud.mainMenu.hidden) {
    event.preventDefault();
    hud.menuNewGame.click();
    return;
  }

  if (event.key === "Enter" && !hud.message.hidden && !hud.startButton.disabled) {
    event.preventDefault();
    hud.startButton.click();
    return;
  }

  if (isLevelSelectionVisible()) {
    const levelIndex = getLevelIndexFromKeyboardEvent(event);
    if (levelIndex !== null) {
      event.preventDefault();
      requestSelectedLevel(levelIndex);
      return;
    }
  }

  if (event.key !== "0" && event.key !== "Escape") return;
  event.preventDefault();
  if (!gameAssetsReady) return;
  if (!hud.storyIntro.hidden) return;
  if (!hud.gameOver.hidden) return;
  if (!hud.mainMenu.hidden) {
    showLevelSelectPanel();
    return;
  }
  setCheatMenuVisible(hud.cheatMenu.hidden);
});
