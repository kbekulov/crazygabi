const TILE = 32;
const GAME_VERSION = "v0.53.0";
const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const PLAY_HEIGHT = VIEW_HEIGHT;
const TIME_LIMIT = 220;
const MAX_LIVES = 9;
const GABI_FRAME_WIDTH = 238;
const GABI_FRAME_HEIGHT = 238;
const GABI_SCALE = 0.34;
const GABI_GLIDE_SCALE = GABI_SCALE * 1.05;
const GABI_DIVE_SCALE = ((GABI_FRAME_HEIGHT * GABI_SCALE) / 775) * 0.76;
const GABI_DIVE_EDGE_DISTANCE = 42;
const GABI_DIVE_MIN_DURATION = 260;
const GABI_DIVE_ANGLE = 15;
const GABI_DIVE_ANGLE_DURATION = 900;
const DIVE_WIND_FADE_DELAY_MS = 1500;
const DIVE_WIND_RAMP_MS = 1000;
const DIVE_WIND_LINE_COUNT = 36;
const DIVE_CAMERA_ZOOM = 1.35;
const DIVE_CAMERA_ZOOM_IN_MS = 5200;
const DIVE_CAMERA_SNAP_OUT_MS = 220;
const BIRD_FRAME_WIDTH = 243;
const BIRD_FRAME_HEIGHT = 243;
const BIRD_MIN_FLOCK_SIZE = 5;
const BIRD_MAX_FLOCK_SIZE = 15;
const BIRD_NORMAL_DELAY = [5200, 9800];
const BIRD_ELEVATOR_DELAY = [850, 1800];
const BIRD_FLOCK_MIN_Y = 60;
const BIRD_FLOCK_BASE_MARGIN = 210;
const BIRD_DEPTH = -9.6;
const BIRD_ATTACK_DEPTH = 9.4;
const BIRD_ATTACK_COOLDOWN = 10000;
const BIRD_ATTACK_SPEED_MULTIPLIER = 6;
const BIRD_ATTACK_HIT_RADIUS = 54;
const BIRD_ATTACK_CAMERA_ZOOM = 2.4;
const BIRD_ATTACK_CAMERA_ZOOM_IN_MS = 480;
const BIRD_ATTACK_CAMERA_ENEMY_SHIFT_MS = 420;
const BIRD_ATTACK_CAMERA_ENEMY_HOLD_MS = 1500;
const BIRD_ATTACK_CAMERA_ZOOM_OUT_MS = 560;
const GABI_POINT_FRAME_WIDTH = 238;
const GABI_POINT_FRAME_HEIGHT = 238;
const GABI_POINT_DURATION = 520;
const GABI_AIR_DIVE_FRAME_WIDTH = 1034;
const GABI_AIR_DIVE_FRAME_HEIGHT = 775;
const MR_MAGPIE_FRAME_WIDTH = 238;
const MR_MAGPIE_FRAME_HEIGHT = 238;
const MR_MAGPIE_SCALE = 0.34;
const MR_MAGPIE_SPEED = 78;
const AUTUMN_LEAF_FRAME_WIDTH = 326;
const AUTUMN_LEAF_FRAME_HEIGHT = 326;
const AUTUMN_LEAF_MAX_COUNT = 21;
const AUTUMN_LEAF_MIN_DEPTH = -10;
const AUTUMN_LEAF_MAX_DEPTH = 31.5;
const DIVE_FIELD_LEAF_COUNT = 86;
const DIVE_FIELD_LEAF_MIN_SPEED_X = 22;
const DIVE_FIELD_LEAF_MAX_SPEED_X = 86;
const DIVE_FIELD_LEAF_MIN_SPEED_Y = 10;
const DIVE_FIELD_LEAF_MAX_SPEED_Y = 38;
const GAZEBO_SCALE = 0.23;
const GAZEBO_BACK_DEPTH = -9;
const GAZEBO_FRONT_DEPTH = 34;
const GLIDE_DELAY_MS = 1000;
const GLIDE_SPEED = 620;
const GLIDE_ANGLE_RADIANS = (20 * Math.PI) / 180;
const GLIDE_HORIZONTAL_SPEED = Math.cos(GLIDE_ANGLE_RADIANS) * GLIDE_SPEED;
const GLIDE_FALL_SPEED = Math.sin(GLIDE_ANGLE_RADIANS) * GLIDE_SPEED;
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
const HAYSTACK_SCALE = 0.36;
const HAYSTACK_Y_OFFSET = 10;
const HAYSTACK_DEPTH = 4.7;
const HAY_BURST_DEPTH = HAYSTACK_DEPTH + 0.5;
const HAY_BURST_COLORS = [0xc99654, 0x7d5525, 0xe6bc75, 0xca9656, 0x8a5b2e, 0xb9894a];
const HAY_BURST_MIN_TOUCH_SPEED = 44;
const HAY_BURST_COOLDOWN_MS = 1000;
const SCRIPTED_DIVE_MIN_SPEED_X = 160;
const SCRIPTED_DIVE_MAX_SPEED_X = 430;
const SCRIPTED_DIVE_MAX_SPEED_Y = 720;
const SCRIPTED_DIVE_LOCK_DELAY_MS = 2400;
const DIVE_INDICATOR_TRIGGER_DISTANCE = 150;
const DIVE_INDICATOR_SCALE = 0.105;
const DIVE_INDICATOR_IDLE_ANGLE = -20;
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
const MAGPIE_CALL_SFX_KEY = "magpie-call-1";
const HAYSTACK_LAND_SFX_KEY = "haystack-land";
const HAYSTACK_WALKIN_SFX_KEY = "haystack-walkin";
const COIN_PICKUP_SFX_KEY = "coin-pickup";
const WING_PICKUP_SFX_KEY = "wing-pickup";
const DOUBLE_JUMP_SFX_KEYS = ["double-jump-1", "double-jump-2"];
const CAT_MEOW_SFX_KEYS = ["cat-meow-1", "cat-meow-2"];
const DIVE_FALL_WIND_SFX_KEY = "dive-fall-wind";
const HEART_PICKUP_SFX_KEY = "heart-pickup";
const KEY_PICKUP_SFX_KEY = "key-pickup";
const MISC_PICKUP_SFX_KEY = "misc-pickup";
const KILL_SFX_KEY = "kill-1";
const BIRD_ZOOM_IN_SFX_KEY = "bird-zoom-in";
const BIRD_ZOOM_OUT_SFX_KEY = "bird-zoom-out";
const MAGPIE_ATTACK_SFX_VOLUME = 0.19;
const MAGPIE_AMBIENT_SFX_VOLUME = 0.17;
const MAGPIE_AMBIENT_SFX_CHANCE = 0.125;
const COLOSSUS_DEPTH = -9.55;
const COLOSSUS_STEP_SHAKE_DURATION = 180;
const COLOSSUS_STEP_SHAKE_INTENSITY = 0.0014;
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
const BIRD_ATTACK_SPEECH_LINES = [
  "Tiny dinosaurs, attack.",
  "Peck first. Discuss never.",
  "Flock him up.",
  "Peck responsibly. Or don't.",
  "Attack formation: Rude.",
  "Hostile chirping authorized.",
  "Tiny beaks, big feelings.",
  "I summon customer complaints.",
  "Weather forecast: Birds."
];
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
const ASSET_VERSION = "20260614-spine-colossus-12";
const STORY_ASSET_VERSION = ASSET_VERSION;

function getSpineRuntime() {
  if (typeof spine !== "undefined") return spine;
  if (globalThis.spine) return globalThis.spine;
  return null;
}
const DIFFICULTY_COOKIE = "crazy-gabi-difficulty";
const AUDIO_SETTINGS_COOKIE = "crazy-gabi-audio-settings";
const DIFFICULTY_EASY = "easy";
const DIFFICULTY_HARD = "hard";
const DEFAULT_AUDIO_SETTINGS = {
  music: true,
  sfx: true
};
const EASY_DIFFICULTY_KEEP_INTERVAL = 3;
const LEVEL_LOAD_TIMEOUT_MS = 30000;
const MIN_LEVEL_TRANSITION_MS = 1400;
const INTRO_RETRY_MS = 1000;
const INTRO_FAILSAFE_MS = 6500;
const MUSIC_TRACKS = [
  { key: "bgm-menu", label: "Menu Theme", src: "./public/assets/sound/bgm_menu.mp3" },
  { key: "bgm-lv1", label: "Level 1 Theme", src: "./public/assets/sound/bgm_lv1.mp3" },
  { key: "bgm-lv2", label: "Level 2 Theme", src: "./public/assets/sound/bgm_lv2.mp3" },
  { key: "bgm-lv3", label: "Level 3 Theme", src: "./public/assets/sound/bgm_lv3.mp3" },
  { key: "bgm-lv5", label: "Level 5 Theme", src: "./public/assets/sound/bgm_lv5.mp3" },
  { key: "bgm-lv5-boss", label: "Level 5 Theme (Boss)", src: "./public/assets/sound/bgm_lv5_boss.mp3", volumeScale: 1.1 }
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
LOADING_RUNNERS.forEach((runner) => {
  const image = new Image();
  image.src = `${runner.src}?v=${ASSET_VERSION}`;
});
const CREDITS_SECTIONS = [
  ["Development & Art Direction", ["Kiril"]],
  ["Gameplay Testers", ["Gabriele", "Stefano", "Rene", "Vlad", "Jarek", "Kim Loong"]],
  ["Critics of AI", ["Tomas"]],
  ["AI Tools", ["Codex", "ChatGPT", "Gemini", "Suno AI"]],
  ["Inspirations", ["Vilnius", "Klaipeda", "Crazy Sue", "Yuki Kajiura"]],
  ["Non-AI Tools", ["Adobe Photoshop", "Audacity", "Github", "Visual Studio Code"]]
];
let storyIntroRunId = 0;
let gameAssetsReady = false;
const pixelatedEquippedImages = {};
const storySeenLevels = new Set();
const LEVEL_WIDTH_TILES = 148;
const LEVEL_TWO_WIDTH_TILES = LEVEL_WIDTH_TILES * 2;
const LEVEL_THREE_WIDTH_TILES = 220;
const LEVEL_FOUR_WIDTH_TILES = 224;
const LEVEL_FIVE_WIDTH_TILES = 480;
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
    introCopy: "Collect the coins, grab the brass key, and reach the door before time runs out.",
    questTasks: ["key", "coins", "enemies"]
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
    introCopy: "Find the lantern, move carefully through the dark tunnel, and survive what waits just beyond the edge of the light.",
    questTasks: ["lantern", "key", "coins", "enemies"]
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
    introCopy: "Follow the strange cat through the lower city, collect coins, claim the acorn basket, and fight your way to the brass key and exit.",
    questTasks: ["basket", "key", "coins", "enemies"]
  },
  {
    name: "Level 4",
    rows: createLevelFour(),
    timeLimit: 420,
    storyFrames: [
      { key: "story-level-4-frame-1", src: "./public/assets/story/level-4/frame_1.png" },
      { key: "story-level-4-frame-2", src: "./public/assets/story/level-4/frame_2.png" }
    ],
    soundtrack: "bgm-lv1",
    enemySprite: "robot-lv1",
    actionAbility: "command-birds",
    startSpeech: "",
    showStartingHouse: false,
    startingRuins: [
      { key: "ruins-1", src: "./public/assets/environment/ruins_1.png", x: 18, floorRow: 160, scale: 0.228 },
      { key: "ruins-2", src: "./public/assets/environment/ruins_2.png", x: 2800, floorRow: 160, scale: 0.252 }
    ],
    catNpc: true,
    finalElevator: {
      startColumn: 172,
      widthTiles: 6,
      baseRow: 160,
      topRow: 5,
      speed: 112,
      wallFaceColumn: 178
    },
    manualDiveLedges: [
      { type: "final-elevator-top", side: "both", scriptedHaystackDive: true }
    ],
    haystacks: [
      { x: 164 * TILE, floorRow: 145 }
    ],
    mysteriousMan: {
      sprite: "mr-magpie",
      xOffset: 0,
      yOffset: 20,
      scale: 0.37,
      triggerDistance: 150,
      exitPadding: 140,
      speed: MR_MAGPIE_SPEED
    },
    parallax: "parallax-cathedral",
    platformTexture: "platform-strip",
    fenceTexture: "platform-fence",
    wallTiles: {
      backdropSheet: "level4-wall-backdrop",
      backdropFrames: 30,
      foreground: [
        "underground-wall-1",
        "underground-wall-2",
        "underground-wall-3",
        "underground-wall-4",
        "underground-wall-5"
      ]
    },
    lightRayAlpha: 0.94,
    lightImpactAlphaScale: 0.5,
    lightRays: [
      { x: 520, y: -128, topWidth: 46, bottomWidth: 238, height: 2300, lean: -210, alpha: 0.28, thickness: 2, layerAlpha: 1.15, foreground: true, frontAlpha: 0.16, opacityMode: "pulse" },
      { x: 610, y: -96, topWidth: 34, bottomWidth: 170, height: 2100, lean: -170, alpha: 0.2, thickness: 2, layerAlpha: 1.1, opacityMode: "steady", skipCrackGlow: true },
      { x: 1180, y: -132, topWidth: 60, bottomWidth: 320, height: 2500, lean: -110, alpha: 0.31, thickness: 2, layerAlpha: 1.18, foreground: true, frontAlpha: 0.2, blinding: true, opacityMode: "dim" },
      { x: 1288, y: -112, topWidth: 40, bottomWidth: 210, height: 2280, lean: -60, alpha: 0.2, thickness: 2, layerAlpha: 1.1, opacityMode: "pulse", skipCrackGlow: true },
      { x: 1990, y: -110, topWidth: 48, bottomWidth: 270, height: 2360, lean: -22, alpha: 0.28, thickness: 2, layerAlpha: 1.12, opacityMode: "steady" },
      { x: 3180, y: -136, topWidth: 62, bottomWidth: 345, height: 2520, lean: 62, alpha: 0.31, thickness: 2, layerAlpha: 1.18, foreground: true, frontAlpha: 0.19, opacityMode: "dim" },
      { x: 3288, y: -118, topWidth: 36, bottomWidth: 195, height: 2240, lean: 110, alpha: 0.19, thickness: 2, layerAlpha: 1.1, opacityMode: "pulse", skipCrackGlow: true },
      { x: 4300, y: -112, topWidth: 50, bottomWidth: 282, height: 2400, lean: 180, alpha: 0.27, thickness: 2, layerAlpha: 1.12, opacityMode: "pulse" },
      { x: 5140, y: -126, topWidth: 68, bottomWidth: 370, height: 2600, lean: 240, alpha: 0.32, thickness: 2, layerAlpha: 1.2, foreground: true, frontAlpha: 0.2, blinding: true, opacityMode: "steady" },
      { x: 5260, y: -110, topWidth: 38, bottomWidth: 210, height: 2320, lean: 280, alpha: 0.2, thickness: 2, layerAlpha: 1.1, opacityMode: "dim", skipCrackGlow: true },
      { x: 780, y: 1480, topWidth: 64, bottomWidth: 360, height: 2450, lean: -160, alpha: 0.34, thickness: 2, layerAlpha: 1.65, foreground: true, frontAlpha: 0.22, opacityMode: "pulse", skipCrackGlow: true, beamBoost: 1.9 },
      { x: 1470, y: 1540, topWidth: 92, bottomWidth: 520, height: 2620, lean: -80, alpha: 0.37, thickness: 2, layerAlpha: 1.75, foreground: true, frontAlpha: 0.26, opacityMode: "dim", skipCrackGlow: true, beamBoost: 2.1 },
      { x: 2380, y: 1450, topWidth: 70, bottomWidth: 420, height: 2560, lean: 18, alpha: 0.34, thickness: 2, layerAlpha: 1.65, opacityMode: "steady", skipCrackGlow: true, beamBoost: 1.9 },
      { x: 3540, y: 1500, topWidth: 96, bottomWidth: 560, height: 2700, lean: 112, alpha: 0.38, thickness: 2, layerAlpha: 1.8, foreground: true, frontAlpha: 0.28, blinding: true, opacityMode: "pulse", skipCrackGlow: true, beamBoost: 2.2 },
      { x: 4480, y: 1420, topWidth: 68, bottomWidth: 390, height: 2540, lean: 190, alpha: 0.33, thickness: 2, layerAlpha: 1.6, opacityMode: "dim", skipCrackGlow: true, beamBoost: 1.8 },
      { x: 1010, y: 3040, topWidth: 86, bottomWidth: 500, height: 2180, lean: -120, alpha: 0.38, thickness: 2, layerAlpha: 2.05, foreground: true, frontAlpha: 0.3, opacityMode: "steady", skipCrackGlow: true, beamBoost: 2.55 },
      { x: 1920, y: 2980, topWidth: 66, bottomWidth: 390, height: 2300, lean: -20, alpha: 0.34, thickness: 2, layerAlpha: 1.9, opacityMode: "pulse", skipCrackGlow: true, beamBoost: 2.35 },
      { x: 3020, y: 3040, topWidth: 96, bottomWidth: 560, height: 2260, lean: 70, alpha: 0.39, thickness: 2, layerAlpha: 2.1, foreground: true, frontAlpha: 0.32, opacityMode: "dim", skipCrackGlow: true, beamBoost: 2.6 },
      { x: 4210, y: 2960, topWidth: 74, bottomWidth: 430, height: 2360, lean: 160, alpha: 0.35, thickness: 2, layerAlpha: 1.95, opacityMode: "pulse", skipCrackGlow: true, beamBoost: 2.4 },
      { x: 5120, y: 3160, topWidth: 106, bottomWidth: 620, height: 2140, lean: 220, alpha: 0.4, thickness: 2, layerAlpha: 2.15, foreground: true, frontAlpha: 0.34, blinding: true, opacityMode: "steady", skipCrackGlow: true, beamBoost: 2.75 }
    ],
    introCopy: "Follow the strange cat across the cathedral rooftops, find the key, and ride the old elevator toward the stranger above.",
    questTasks: ["key", "bird", "elevator", "leap", "coins", "enemies"]
  },
  {
    name: "Level 5",
    rows: createLevelFive(),
    timeLimit: 180,
    soundtrack: "bgm-lv5",
    ambientSoundtrack: "wind-1",
    ambientVolume: 0.18,
    enemySprite: "robot-lv1",
    actionAbility: "command-birds",
    birdSprite: "magpie-bird",
    birdScale: 1.2,
    birdSfx: MAGPIE_CALL_SFX_KEY,
    ambientBirds: true,
    distantColossus: {
      type: "spine",
      dataKey: "colossus-placeholder-data",
      atlasKey: "colossus-placeholder-atlas",
      skeleton: "./public/assets/boss/colossus/colossus_placeholder.json",
      atlas: "./public/assets/boss/colossus/colossus_placeholder.atlas",
      x: 720,
      groundY: 214,
      scale: 0.72,
      driftSpeed: -4.8,
      cycleMs: 5200,
      alpha: 0.62,
      shakeDuration: COLOSSUS_STEP_SHAKE_DURATION,
      shakeIntensity: COLOSSUS_STEP_SHAKE_INTENSITY
    },
    storyFrames: [
      { key: "story-level-5-frame-1-v2", src: "./public/assets/story/level-5/frame_1_v2.png" },
      { key: "story-level-5-frame-2-v2", src: "./public/assets/story/level-5/frame_2_v2.png" },
      { key: "story-level-5-frame-3-v2", src: "./public/assets/story/level-5/frame_3_v2.png" },
      { key: "story-level-5-frame-4-v2", src: "./public/assets/story/level-5/frame_4_v2.png" }
    ],
    storyLayout: "manga-page-v2",
    startSpeech: "",
    showStartingHouse: false,
    showWater: true,
    catNpc: true,
    catFollowPlayer: true,
    doorYOffset: -30,
    parallax: "parallax-park",
    platformTexture: "platform-strip",
    fenceTexture: "platform-fence",
    ambientLeaves: {
      sprite: "autumn-leaf-1",
      minDelay: 240,
      maxDelay: 720,
      burstChance: 0.28,
      diveField: {
        count: DIVE_FIELD_LEAF_COUNT,
        xMin: 30 * TILE,
        xMax: 76 * TILE,
        yMin: 12 * TILE,
        yMax: 158 * TILE
      }
    },
    constructionBillboard: {
      x: 9 * TILE,
      floorRow: 8,
      scale: STARTING_BILLBOARD_SCALE,
      message: "This level is still under construction"
    },
    mysteriousMan: {
      sprite: "mr-magpie",
      behavior: "leap",
      xOffset: 0,
      yOffset: 20,
      scale: 0.37,
      faceLeft: true,
      leapDelay: 1900,
      leapDuration: 1250,
      leapEdgeColumn: 29.15,
      leapWalkSpeed: 210,
      leapVelocityX: 260,
      leapVelocityY: -510,
      exitPadding: 360
    },
    manualDiveLedges: [
      { row: 8, startColumn: 0, widthTiles: 30, side: "right", edgeDistance: 96, scriptedHaystackDive: true }
    ],
    diveIndicators: [
      { row: 8, column: 28.4, direction: 1 }
    ],
    finishZone: {
      x: 452 * TILE,
      y: 154 * TILE
    },
    haystacks: [
      { x: 58 * TILE, floorRow: 160 }
    ],
    introTitle: "Level 5",
    introCopy: "Listen to Mr Magpie, take the winged leap, and glide toward whatever waits below.",
    questTasks: ["leap", "bird", "coins"]
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
  const routeOffset = 140;
  const { rows, put, run } = createLevelRows(162, LEVEL_FOUR_WIDTH_TILES);
  const routeRun = (row, start, length, value = "#") => run(row + routeOffset, start, length, value);
  const routePut = (row, column, value) => put(row + routeOffset, column, value);

  routeRun(20, 0, 30);
  routeRun(20, 36, 24);
  routeRun(20, 68, 36);
  routeRun(20, 112, 28);
  routeRun(20, 148, 36);

  routeRun(17, 24, 9);
  routeRun(17, 44, 8);
  routeRun(17, 75, 11);
  routeRun(17, 99, 4, "=");
  routeRun(17, 116, 10);
  routeRun(17, 137, 4, "=");
  routeRun(17, 155, 11);

  routeRun(14, 38, 10);
  routeRun(14, 62, 5, "=");
  routeRun(14, 82, 12);
  routeRun(14, 107, 9);
  routeRun(14, 129, 10);
  routeRun(14, 151, 4, "=");

  routeRun(11, 54, 9);
  routeRun(11, 78, 10);
  routeRun(11, 101, 4, "=");
  routeRun(11, 120, 11);
  routeRun(11, 144, 9);

  routeRun(8, 70, 11);
  routeRun(8, 94, 8);
  routeRun(8, 118, 4, "=");
  routeRun(8, 139, 11);
  routeRun(8, 162, 8);

  routeRun(5, 86, 8);
  routeRun(5, 111, 11);
  routeRun(5, 139, 4, "=");
  routeRun(5, 160, 10);
  run(5, 178, 46);
  for (let row = 6; row < rows.length; row += 1) run(row, 178, 46, "w");

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
    [4, 164, "k"]
  ].forEach(([row, column, value]) => routePut(row, column, value));
  put(159, 173, "e");
  put(4, 181, "d");

  return rows.map((row) => row.join(""));
}

function createLevelFive() {
  const { rows, put, run } = createLevelRows(162, LEVEL_FIVE_WIDTH_TILES);

  run(8, 0, 30);
  run(160, 42, 430);

  [
    [6, 4, "p"],
    [7, 12, "j"],
    [7, 25, "d"],
    [159, 48, "g"],
    [159, 78, "g"],
    [159, 118, "g"],
    [159, 168, "g"],
    [159, 228, "g"],
    [159, 292, "g"],
    [159, 356, "g"],
    [159, 424, "g"]
  ].forEach(([row, column, value]) => put(row, column, value));

  return rows.map((row) => row.join(""));
}

function createQuestProgress() {
  return {
    birdAttackUsed: false,
    leapOfFaith: false,
    elevatorRidden: false
  };
}

const state = {
  levelIndex: 0,
  score: 0,
  gems: 0,
  levelGems: 0,
  totalGems: 0,
  totalEnemies: 0,
  enemiesDefeated: 0,
  lives: 3,
  timeLeft: TIME_LIMIT,
  hasKey: false,
  hasDoubleJump: false,
  hasBirdControl: false,
  hasAcornBasket: false,
  hasLantern: false,
  running: false,
  won: false,
  resetProgressOnCreate: true,
  autoStartLevel: false,
  pendingLevelPrompt: null,
  questProgress: createQuestProgress(),
  audioSettings: { ...DEFAULT_AUDIO_SETTINGS },
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
  questList: document.querySelector("#quest-list"),
  equippedIcon: document.querySelector("#equipped-icon"),
  equippedName: document.querySelector("#equipped-name"),
  itemActionKey: document.querySelector("#item-action-key"),
  birdCooldown: document.querySelector("#bird-cooldown"),
  gameRoot: document.querySelector("#game"),
  speechLayer: document.querySelector("#speech-layer"),
  mainMenu: document.querySelector("#main-menu"),
  gameVersion: document.querySelector("#game-version"),
  bestScore: document.querySelector("#best-score"),
  menuNewGame: document.querySelector("#menu-new-game"),
  menuSelectLevel: document.querySelector("#menu-select-level"),
  menuMusicBox: document.querySelector("#menu-music-box"),
  menuSettings: document.querySelector("#menu-settings"),
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
document.title = `Crazy Gabi ${GAME_VERSION}`;
if (hud.gameVersion) hud.gameVersion.textContent = GAME_VERSION;
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
  state.lives = Math.min(MAX_LIVES, Math.max(0, state.lives));
  for (let index = 0; index < Math.max(0, state.lives); index += 1) {
    const heart = document.createElement("img");
    heart.src = `./public/assets/environment/life-heart.png?v=${ASSET_VERSION}`;
    heart.alt = "";
    hud.lives.appendChild(heart);
  }
  hud.time.textContent = String(state.timeLeft).padStart(3, "0");
  hud.key.textContent = state.hasKey ? "01" : "00";
  updateEquippedHud();
  updateQuestHud();
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
  if (hud.itemActionKey) hud.itemActionKey.hidden = !itemImage;
}

function setBirdCooldownVisible(visible) {
  if (!hud.birdCooldown) return;
  hud.birdCooldown.hidden = !visible;
}

function updateBirdCooldownHud(progress = 0) {
  if (!hud.birdCooldown) return;
  const value = Phaser.Math.Clamp(progress || 0, 0, 1);
  hud.birdCooldown.style.setProperty("--bird-cooldown-progress", value.toFixed(3));
  hud.birdCooldown.style.setProperty("--bird-cooldown-hidden", `${(value * 100).toFixed(1)}%`);
}

function getActiveLevel() {
  return LEVELS[state.levelIndex] || LEVELS[0];
}

function levelHasQuestCell(level, cell) {
  return (level?.rows || []).some((row) => row.includes(cell));
}

function getLevelQuestDefinitions(level = getActiveLevel()) {
  const taskTypes = level.questTasks || [
    ...(levelHasQuestCell(level, "l") ? ["lantern"] : []),
    ...(levelHasQuestCell(level, "b") ? ["basket"] : []),
    ...(levelHasQuestCell(level, "k") ? ["key"] : []),
    ...(levelHasQuestCell(level, "g") || levelHasQuestCell(level, "c") ? ["coins"] : []),
    ...(level.actionAbility === "command-birds" ? ["bird"] : []),
    ...(level.manualDiveLedges?.length || level.haystacks?.length ? ["leap"] : []),
    ...(level.finalElevator ? ["elevator"] : []),
    ...(levelHasQuestCell(level, "m") ? ["enemies"] : [])
  ];
  const definitions = {
    lantern: { label: "PICK UP THE LANTERN", complete: () => state.hasLantern },
    basket: { label: "CLAIM THE ACORN BASKET", complete: () => state.hasAcornBasket },
    key: { label: "FIND THE KEY", complete: () => state.hasKey },
    coins: { label: "COLLECT ALL COINS", complete: () => state.totalGems > 0 && state.levelGems >= state.totalGems },
    bird: { label: "USE BIRD ATTACK [SHIFT]", complete: () => Boolean(state.questProgress?.birdAttackUsed) },
    leap: { label: "DO A LEAP OF FAITH", complete: () => Boolean(state.questProgress?.leapOfFaith) },
    elevator: { label: "RIDE THE ELEVATOR", complete: () => Boolean(state.questProgress?.elevatorRidden) },
    enemies: { label: "DEFEAT ALL ENEMIES", complete: () => state.totalEnemies > 0 && state.enemiesDefeated >= state.totalEnemies }
  };
  return taskTypes
    .map((type) => {
      const definition = definitions[type];
      return definition ? { key: type, ...definition } : null;
    })
    .filter(Boolean);
}

function updateQuestHud() {
  if (!hud.questList) return;
  const quests = getLevelQuestDefinitions();
  const visible = Boolean(state.running && !state.won && quests.length);
  hud.questList.hidden = !visible;
  if (!visible) {
    hud.questList.replaceChildren();
    return;
  }

  hud.questList.replaceChildren(
    ...quests.map((quest) => {
      const complete = quest.complete();
      const row = document.createElement("span");
      row.className = `hud-quest${complete ? " is-complete" : ""}`;
      row.textContent = `${quest.label} [ ${complete ? "X" : " "} ]`;
      return row;
    })
  );
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

function getAudioSettings() {
  try {
    const saved = JSON.parse(getCookieValue(AUDIO_SETTINGS_COOKIE) || "{}");
    return {
      music: saved.music !== false,
      sfx: saved.sfx !== false
    };
  } catch (_error) {
    return { ...DEFAULT_AUDIO_SETTINGS };
  }
}

function saveAudioSettings() {
  document.cookie = [
    `${AUDIO_SETTINGS_COOKIE}=${encodeURIComponent(JSON.stringify(state.audioSettings))}`,
    "max-age=31536000",
    "path=/",
    "SameSite=Lax"
  ].join("; ");
}

function isMusicEnabled() {
  return state.audioSettings?.music !== false;
}

function isSfxEnabled() {
  return state.audioSettings?.sfx !== false;
}

function setAudioSetting(key, enabled) {
  if (!Object.hasOwn(DEFAULT_AUDIO_SETTINGS, key)) return;
  state.audioSettings = {
    ...DEFAULT_AUDIO_SETTINGS,
    ...(state.audioSettings || {}),
    [key]: Boolean(enabled)
  };
  saveAudioSettings();
  updateAudioSettingsPanel();
  const scene = game.scene.getScene("PlayScene");
  if (!scene?.scene?.isActive()) return;
  scene.applyAudioSettings();
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
state.audioSettings = getAudioSettings();
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

function createWorldSpeechBubble(scene, anchor, text, options = {}) {
  if (!hud.speechLayer || !text) return null;
  const element = document.createElement("div");
  element.className = "world-speech-bubble";
  element.textContent = text;
  element.style.setProperty("--speech-width", `${options.width ?? 160}px`);
  element.style.setProperty("--speech-min-height", `${options.minHeight ?? 28}px`);
  element.style.setProperty("--speech-font-size", `${options.fontSize ?? 13}px`);
  element.style.setProperty("--speech-opacity", String(options.backgroundOpacity ?? 0.9));
  hud.speechLayer.appendChild(element);

  const bubble = {
    element,
    alpha: 1,
    visible: options.visible ?? true,
    offsetY: options.offsetY ?? -60,
    anchor,
    setPosition(x, y) {
      this.anchor = { x, y: y - this.offsetY };
      this.update();
      return this;
    },
    setVisible(visible) {
      this.visible = Boolean(visible);
      element.classList.toggle("is-hidden", !this.visible);
      return this;
    },
    update() {
      if (!this.visible || !this.element.isConnected) return;
      const camera = scene.cameras?.main;
      if (!camera) return;
      const point = typeof this.anchor === "function" ? this.anchor() : this.anchor;
      if (!point) return;
      const scaleX = hud.speechLayer.clientWidth / VIEW_WIDTH;
      const scaleY = hud.speechLayer.clientHeight / VIEW_HEIGHT;
      const screenX = (point.x - camera.worldView.x) * camera.zoom * scaleX;
      const screenY = (point.y + this.offsetY - camera.worldView.y) * camera.zoom * scaleY;
      element.style.transform = `translate(${screenX}px, ${screenY}px) translate(-50%, -100%)`;
    },
    destroy() {
      element.remove();
      if (scene.domSpeechBubbles) {
        scene.domSpeechBubbles = scene.domSpeechBubbles.filter((entry) => entry !== this);
      }
    }
  };

  Object.defineProperty(bubble, "alpha", {
    get() {
      return Number(element.style.opacity || 1);
    },
    set(value) {
      element.style.opacity = String(Phaser.Math.Clamp(value, 0, 1));
    }
  });

  scene.domSpeechBubbles = scene.domSpeechBubbles || [];
  scene.domSpeechBubbles.push(bubble);
  bubble.setVisible(bubble.visible);
  bubble.update();
  return bubble;
}

function resetGameProgress() {
  state.levelIndex = 0;
  state.score = 0;
  state.gems = 0;
  state.levelGems = 0;
  state.totalGems = 0;
  state.totalEnemies = 0;
  state.enemiesDefeated = 0;
  state.lives = 3;
  state.timeLeft = TIME_LIMIT;
  state.hasKey = false;
  state.hasDoubleJump = false;
  state.hasBirdControl = false;
  state.hasAcornBasket = false;
  state.hasLantern = false;
  state.running = false;
  state.won = false;
  state.resetProgressOnCreate = false;
  state.autoStartLevel = false;
  state.pendingLevelPrompt = null;
  state.questProgress = createQuestProgress();
  updateQuestHud();
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
  const frames = await Promise.all(paths.map(async (path) => {
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
    this.bgm = null;
    this.ambientBgm = null;
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
    this.load.spritesheet("gabi-sheet", `./public/assets/character/main_char_sprite.png?v=${ASSET_VERSION}`, {
      frameWidth: GABI_FRAME_WIDTH,
      frameHeight: GABI_FRAME_HEIGHT
    });
    this.load.spritesheet("grey-cat", `./public/assets/character/grey_cat.png?v=${ASSET_VERSION}`, {
      frameWidth: CAT_FRAME_WIDTH,
      frameHeight: CAT_FRAME_HEIGHT
    });
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
    this.clearDomSpeechBubbles();
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
    } catch (error) {
      console.error("Level load failed", error);
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
    this.distantColossus = null;

    this.createBackdrop();
    this.createDistantColossus();
    if (this.level.showWater !== false) this.createWaterBelow();
    if (this.level.showStartingHouse) this.createStartingHouse();
    if (this.level.constructionBillboard) this.createConstructionBillboard();
    if (this.level.startingRuins?.length) this.createStartingRuins();
    this.platforms = this.physics.add.staticGroup();
    this.movingPlatforms = this.physics.add.group({ allowGravity: false, immovable: true });
    this.movingPlatformRuns = [];
    this.finalElevator = null;
    this.finalElevatorActive = false;
    this.finalElevatorCompleted = false;
    this.finalElevatorReadySince = 0;
    this.finalElevatorCredits = [];
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
    this.haystacks = this.physics.add.group({ allowGravity: false, immovable: true });
    this.platformRuns = [];
    this.wallForegroundAnchors = new Set();
    this.enemyDirection = new Map();
    this.enemyLabels = new Map();
    this.enemyNames = [...ENEMY_NAMES];
    this.enemyNameIndex = 0;
    this.lastActionAt = -Infinity;
    this.lastBirdAttackAt = -Infinity;
    this.birdAttackZoomActive = false;
    this.birdAttackZoomTween = null;
    this.birdAttackZoomTimers = [];
    this.birdAttackZoomProxy = null;
    this.birdAttackCameraFocus = null;
    this.lastPickupSpeechAt = -Infinity;
    this.gabiDiveUntil = 0;
    this.gabiDiveActive = false;
    this.gabiDiveTween = null;
    this.gabiDiveAngleDirection = 0;
    this.diveWindSfx = null;
    this.diveWindGraphics = null;
    this.diveWindStartedAt = 0;
    this.nextDiveWindShakeAt = 0;
    this.diveWindLineProfile = [];
    this.diveCameraZoomActive = false;
    this.diveCameraZoomTween = null;
    this.diveCameraZoomProxy = null;
    this.diveCameraFocus = null;
    this.pendingDiveLedge = null;
    this.scriptedHaystackDive = null;
    this.heartDropsCreated = 0;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.wingPromptActive = false;
    this.nextQuakeAt = Infinity;
    this.quakeDropStartsAt = 0;
    this.quakeDropUntil = 0;
    this.birdFlocks = [];
    this.birdFlockGroups = [];
    this.birdAttackFlocks = [];
    this.diveIndicatorBirds = [];
    this.nextBirdFlockAt = 0;
    this.ambientLeaves = [];
    this.nextAmbientLeafAt = 0;
    this.diveFieldLeaves = [];
    this.gabiActionUntil = 0;
    this.gabiActionRestoreTimer = null;
    this.elevatorSignBubble = null;
    this.elevatorSignPromptShown = false;
    this.mysteriousMan = null;
    this.mysteriousManState = "idle";
    this.mysteriousManSpeechBubble = null;
    this.mysteriousManFinishX = 0;
    this.mysteriousManExitX = 0;
    this.mysteriousManScriptAt = 0;
    this.catFollowPlayerAfterElevator = false;
    this.clearDomSpeechBubbles();
    this.domSpeechBubbles = [];

    state.totalGems = 0;
    state.levelGems = 0;
    state.totalEnemies = 0;
    state.enemiesDefeated = 0;
    state.questProgress = createQuestProgress();
    this.createAnimations();
    this.planWallForegroundTiles();
    this.buildLevel();
    this.createHaystacks();
    this.createDiveIndicatorBirds();
    this.createDiveFieldLeaves();
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
    this.cameras.main.setZoom(1);
    this.cameras.main.roundPixels = true;
    this.physics.world.setBounds(0, -PLAY_HEIGHT * 2, this.levelWidth, this.levelHeight + PLAY_HEIGHT * 3);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.cameras.main.setDeadzone(170, 110);
    this.physics.world.pause();
    this.input.keyboard.enabled = false;
    this.player.body.enable = false;
    this.player.body.moves = false;
    this.player.setVelocity(0, 0);

    state.timeLeft = this.level.timeLimit;
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.hasBirdControl = false;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.running = false;
    state.won = false;
    updateHud();
    setBirdCooldownVisible(false);
    updateBirdCooldownHud(0);
    this.pixelatedBasketImage = this.textures.exists("acorn-basket")
      ? pixelateStoryFrame(this.textures.get("acorn-basket").getSourceImage())
      : "";
    this.pixelatedLanternImage = this.textures.exists("lantern")
      ? pixelateStoryFrame(this.textures.get("lantern").getSourceImage())
      : "";
    this.pixelatedWingImage = this.textures.exists("jump-item")
      ? pixelateStoryFrame(this.textures.get("jump-item").getSourceImage())
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
    setBirdCooldownVisible(false);
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
      const spineAsset = (config) => {
        if (!config || config.type !== "spine") return;
        if (typeof this.load.spineJson !== "function" || typeof this.load.spineAtlas !== "function") return;
        const dataKey = config.dataKey || "colossus-placeholder-data";
        const atlasKey = config.atlasKey || "colossus-placeholder-atlas";
        if (!this.cache.json.exists(dataKey)) {
          this.load.spineJson(dataKey, `${config.skeleton}?v=${ASSET_VERSION}`);
          queued += 1;
        }
        if (!this.cache.text.exists(atlasKey)) {
          this.load.spineAtlas(atlasKey, `${config.atlas}?v=${ASSET_VERSION}`);
          queued += 1;
        }
      };

      sheet("gabi-sheet", "./public/assets/character/main_char_sprite.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      sheet("gabi-wings-sheet", "./public/assets/character/main_char_sprite_with_double_jump.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      sheet("gabi-glide-sheet", "./public/assets/character/main_char_sprite_glide.png", GABI_FRAME_WIDTH, GABI_FRAME_HEIGHT);
      sheet("gabi-air-dive-sheet", "./public/assets/character/main_char_air_dive.png", GABI_AIR_DIVE_FRAME_WIDTH, GABI_AIR_DIVE_FRAME_HEIGHT);
      if (level.actionAbility === "command-birds") {
        sheet("gabi-point-sheet", "./public/assets/character/main_char_sprite_point.png", GABI_POINT_FRAME_WIDTH, GABI_POINT_FRAME_HEIGHT);
      }
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
      if (level.mysteriousMan) {
        sheet("mr-magpie", "./public/assets/character/mr_magpie.png", MR_MAGPIE_FRAME_WIDTH, MR_MAGPIE_FRAME_HEIGHT);
        image("mr-magpie-jump", "./public/assets/character/mr_magpie_jump.png");
      }
      if (level.finalElevator || level.actionAbility === "command-birds" || level.ambientBirds) {
        const birdSprite = this.getBirdSpriteKey(level);
        sheet(birdSprite, this.getBirdSpritePath(birdSprite), BIRD_FRAME_WIDTH, BIRD_FRAME_HEIGHT);
      }
      if (level.ambientLeaves) {
        sheet("autumn-leaf-1", "./public/assets/environment/autumn_leaf_1.png", AUTUMN_LEAF_FRAME_WIDTH, AUTUMN_LEAF_FRAME_HEIGHT);
      }
      spineAsset(level.distantColossus);

      image("parallax-city", "./public/assets/environment/paralax_city.png");
      if (level.parallax === "parallax-underground") image("parallax-underground", "./public/assets/environment/paralax_underground.png");
      if (level.parallax === "parallax-tunnel") image("parallax-tunnel", "./public/assets/environment/paralax_tunnel.png");
      if (level.parallax === "parallax-cathedral") image("parallax-cathedral", "./public/assets/environment/paralax_cathedral.png");
      if (level.parallax === "parallax-park") image("parallax-park", "./public/assets/environment/paralax_park.png");
      if (level.showWater !== false) image("water-below", "./public/assets/environment/water_below.png");
      if (level.haystacks?.length) image("haystack", "./public/assets/environment/haystack.png");
      if (level.showStartingHouse || level.constructionBillboard) {
        image("starting-house", "./public/assets/environment/starting_house.png");
        image("starting-billboard", "./public/assets/environment/starting_billboard.png");
      }
      if (level.finalElevator) {
        image("elevator-sign", "./public/assets/environment/elevator_sign.png");
        image("gazebo-back", "./public/assets/environment/gazebo_back.png");
        image("gazebo-front", "./public/assets/environment/gazebo_front.png");
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
      if (level.soundtrack) audio(level.soundtrack, this.getSoundtrackPath(level.soundtrack));
      if (level.ambientSoundtrack) audio(level.ambientSoundtrack, this.getSoundtrackPath(level.ambientSoundtrack));
      if (level.environmentalQuake?.sfx) audio(level.environmentalQuake.sfx, this.getSfxPath(level.environmentalQuake.sfx));
      if (level.finalElevator) audio(EARTHQUAKE_SFX_KEY, this.getSfxPath(EARTHQUAKE_SFX_KEY));
      if (level.birdSfx) audio(level.birdSfx, this.getSfxPath(level.birdSfx));
      if (level.haystacks?.length) {
        audio(HAYSTACK_LAND_SFX_KEY, this.getSfxPath(HAYSTACK_LAND_SFX_KEY));
        audio(HAYSTACK_WALKIN_SFX_KEY, this.getSfxPath(HAYSTACK_WALKIN_SFX_KEY));
      }
      [
        COIN_PICKUP_SFX_KEY,
        WING_PICKUP_SFX_KEY,
        ...DOUBLE_JUMP_SFX_KEYS,
        ...CAT_MEOW_SFX_KEYS,
        DIVE_FALL_WIND_SFX_KEY,
        HEART_PICKUP_SFX_KEY,
        KEY_PICKUP_SFX_KEY,
        MISC_PICKUP_SFX_KEY,
        KILL_SFX_KEY,
        BIRD_ZOOM_IN_SFX_KEY,
        BIRD_ZOOM_OUT_SFX_KEY
      ].forEach((sfxKey) => audio(sfxKey, this.getSfxPath(sfxKey)));

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

  getBirdSpriteKey(level = this.level) {
    return level?.birdSprite || "white-bird";
  }

  getBirdSpritePath(key = "white-bird") {
    return {
      "white-bird": "./public/assets/character/white_bird.png",
      "magpie-bird": "./public/assets/character/magpie_bird.png"
    }[key] || "./public/assets/character/white_bird.png";
  }

  getBirdAnimationKey(key = this.getBirdSpriteKey()) {
    return `${key}-fly`;
  }

  getBirdScaleMultiplier() {
    return this.level?.birdScale || 1;
  }

  getHazardPath(key = "falling-acorn") {
    return key === "falling-brick"
      ? "./public/assets/environment/brick.png"
      : "./public/assets/environment/falling_acorn.png";
  }

  getSoundtrackPath(key = "bgm-lv1") {
    if (key === "wind-1") return "./public/assets/sound/sfx/wind_1.mp3";
    return MUSIC_TRACKS.find((track) => track.key === key)?.src || "./public/assets/sound/bgm_lv1.mp3";
  }

  getSoundtrackVolume(key = "bgm-lv1", baseVolume = 0.35) {
    const scale = MUSIC_TRACKS.find((track) => track.key === key)?.volumeScale || 1;
    return baseVolume * scale;
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
      [EARTHQUAKE_SFX_KEY]: "./public/assets/sound/sfx/earthquake_1.mp3",
      [MAGPIE_CALL_SFX_KEY]: "./public/assets/sound/sfx/magpie_call_1.mp3",
      [HAYSTACK_LAND_SFX_KEY]: "./public/assets/sound/sfx/haystack_land.mp3",
      [HAYSTACK_WALKIN_SFX_KEY]: "./public/assets/sound/sfx/haystack_walkin.mp3",
      [COIN_PICKUP_SFX_KEY]: "./public/assets/sound/sfx/coin_pickup.mp3",
      [WING_PICKUP_SFX_KEY]: "./public/assets/sound/sfx/wing_pickup.mp3",
      [DOUBLE_JUMP_SFX_KEYS[0]]: "./public/assets/sound/sfx/double_jump_1.mp3",
      [DOUBLE_JUMP_SFX_KEYS[1]]: "./public/assets/sound/sfx/double_jump_2.mp3",
      [CAT_MEOW_SFX_KEYS[0]]: "./public/assets/sound/sfx/meow_1.mp3",
      [CAT_MEOW_SFX_KEYS[1]]: "./public/assets/sound/sfx/meow_2.mp3",
      [DIVE_FALL_WIND_SFX_KEY]: "./public/assets/sound/sfx/dive_fall_wind.mp3",
      [HEART_PICKUP_SFX_KEY]: "./public/assets/sound/sfx/heart_pickup.mp3",
      [KEY_PICKUP_SFX_KEY]: "./public/assets/sound/sfx/key_pickup.mp3",
      [MISC_PICKUP_SFX_KEY]: "./public/assets/sound/sfx/misc_pickup.mp3",
      [KILL_SFX_KEY]: "./public/assets/sound/sfx/kill_1.mp3",
      [BIRD_ZOOM_IN_SFX_KEY]: "./public/assets/sound/sfx/zoom_in.mp3",
      [BIRD_ZOOM_OUT_SFX_KEY]: "./public/assets/sound/sfx/zoom_out.mp3"
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
    const missingFrames = (this.level.storyFrames || []).filter((frame) => {
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
    const storyFrames = this.level.storyFrames || [];
    const frames = storyFrames.map((frame) => {
      if (!frame?.key || !this.textures.exists(frame.key)) return null;
      return this.textures.get(frame.key).getSourceImage();
    });
    return frames.length >= 2 && frames.every(Boolean) ? frames : [];
  }

  renderStoryIntro(frames, introToken) {
    const introRunId = storyIntroRunId + 1;
    const skipAllowed = hasStoryPlayedOnce(this.level);
    const mangaPageFrames = this.level.storyLayout === "manga-page-v2";
    const tallFrames = frames.every((frame) => frame.naturalHeight > frame.naturalWidth);
    const opposedWideFrames = this.level.storyLayout === "wide-opposed" && !tallFrames;
    hud.storyPanels.className = mangaPageFrames
      ? "story-panels manga-page-v2"
      : `story-panels ${tallFrames ? "tall" : "wide"}${opposedWideFrames ? " opposed" : ""}`;
    hud.storyPanels.replaceChildren();
    frames.forEach((frame, index) => {
      const image = document.createElement("img");
      if (mangaPageFrames) {
        const direction = index < 2 ? "from-left" : "from-right";
        image.className = `story-frame frame-${index + 1} ${direction}${index > 0 ? ` delay-${index}` : ""}`;
      } else {
        image.className = tallFrames
          ? `story-frame frame-${index + 1} ${index === 0 ? "from-top" : "from-bottom delay"}`
          : `story-frame frame-${index + 1} ${opposedWideFrames && index === 1 ? "from-right" : "from-left"} ${index === 1 ? "delay" : ""}`;
      }
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

  createDistantColossus() {
    const config = this.level.distantColossus;
    if (!config) return;

    if (config.type !== "spine" || typeof this.add.spine !== "function") return;

    const spineRuntime = getSpineRuntime();
    const boundsProvider = spineRuntime?.AABBRectangleBoundsProvider
      ? new spineRuntime.AABBRectangleBoundsProvider(-170, -430, 340, 430)
      : undefined;
    const object = this.add.spine(
      config.x ?? VIEW_WIDTH + 180,
      config.groundY ?? PLAY_HEIGHT - 78,
      config.dataKey || "colossus-placeholder-data",
      config.atlasKey || "colossus-placeholder-atlas",
      boundsProvider
    );
    object.setScrollFactor(0);
    object.setDepth(config.depth ?? COLOSSUS_DEPTH);
    object.setScale(config.scale ?? 1);
    object.setAlpha(config.alpha ?? 0.55);

    const boneNames = [
      "pelvis",
      "torso",
      "neck",
      "head",
      "left-shoulder",
      "left-forearm",
      "left-hand",
      "right-shoulder",
      "right-forearm",
      "right-hand",
      "left-thigh",
      "left-shin",
      "left-foot",
      "right-thigh",
      "right-shin",
      "right-foot"
    ];
    const bones = Object.fromEntries(
      boneNames.map((name) => [name, object.skeleton.findBone(name)]).filter(([, bone]) => Boolean(bone))
    );

    this.distantColossus = {
      config,
      object,
      bones,
      screenX: config.x ?? VIEW_WIDTH + 180,
      baseGroundY: config.groundY ?? PLAY_HEIGHT - 78,
      cycleMs: config.cycleMs ?? 5200,
      lastStepIndex: -1,
      phaseOffset: Phaser.Math.FloatBetween(0, Math.PI * 2)
    };
    object.beforeUpdateWorldTransforms = () => this.poseSpineColossus();
    this.updateDistantColossus(this.time.now, 0);
  }

  setSpineBonePose(bone, { x, y, rotation, scaleX, scaleY }) {
    if (!bone?.pose) return;
    if (Number.isFinite(x)) bone.pose.x = x;
    if (Number.isFinite(y)) bone.pose.y = y;
    if (Number.isFinite(rotation)) bone.pose.rotation = rotation;
    if (Number.isFinite(scaleX)) bone.pose.scaleX = scaleX;
    if (Number.isFinite(scaleY)) bone.pose.scaleY = scaleY;
  }

  poseSpineColossus() {
    const rig = this.distantColossus;
    if (!rig?.bones) return;

    const phase = rig.phase || 0;
    const breathe = Math.sin(phase * 2) * 0.025;
    const torsoLean = Math.sin(phase + 0.35) * 2.6;
    const leftStep = Math.sin(phase);
    const rightStep = Math.sin(phase + Math.PI);
    const leftLift = Math.max(0, leftStep);
    const rightLift = Math.max(0, rightStep);
    const armSwing = Math.sin(phase + Math.PI) * 13;
    const headCounter = Math.sin(phase + 0.6) * 2.5;

    this.setSpineBonePose(rig.bones.pelvis, { rotation: Math.sin(phase) * 2.4, y: -170 + Math.abs(Math.sin(phase)) * 4 });
    this.setSpineBonePose(rig.bones.torso, { rotation: torsoLean, scaleX: 1 + breathe, scaleY: 1 - breathe * 0.7 });
    this.setSpineBonePose(rig.bones.neck, { rotation: -90 - torsoLean * 0.35 });
    this.setSpineBonePose(rig.bones.head, { rotation: -headCounter - torsoLean * 0.25 });

    this.setSpineBonePose(rig.bones["left-thigh"], { rotation: -90 - leftStep * 17 });
    this.setSpineBonePose(rig.bones["left-shin"], { rotation: -8 - leftLift * 28 + Math.max(0, -leftStep) * 6 });
    this.setSpineBonePose(rig.bones["left-foot"], { rotation: -Math.sin(phase - 0.4) * 9 });
    this.setSpineBonePose(rig.bones["right-thigh"], { rotation: -90 - rightStep * 17 });
    this.setSpineBonePose(rig.bones["right-shin"], { rotation: 8 - rightLift * 28 + Math.max(0, -rightStep) * 6 });
    this.setSpineBonePose(rig.bones["right-foot"], { rotation: -Math.sin(phase + Math.PI - 0.4) * 9 });

    this.setSpineBonePose(rig.bones["left-shoulder"], { rotation: -90 - armSwing });
    this.setSpineBonePose(rig.bones["left-forearm"], { rotation: -12 + Math.sin(phase + 0.45) * 9 });
    this.setSpineBonePose(rig.bones["left-hand"], { rotation: Math.sin(phase + 0.9) * 7 });
    this.setSpineBonePose(rig.bones["right-shoulder"], { rotation: -90 + armSwing });
    this.setSpineBonePose(rig.bones["right-forearm"], { rotation: 12 - Math.sin(phase + 0.45) * 9 });
    this.setSpineBonePose(rig.bones["right-hand"], { rotation: -Math.sin(phase + 0.9) * 7 });
  }

  updateDistantColossus(time = 0, delta = 0) {
    const rig = this.distantColossus;
    if (!rig?.object?.active) return;

    const config = rig.config;
    const phase = ((time / rig.cycleMs) * Math.PI * 2 + rig.phaseOffset) % (Math.PI * 2);
    rig.phase = phase;
    const drift = (config.driftSpeed ?? -4.8) * (delta / 1000);
    rig.screenX += Number.isFinite(drift) ? drift : 0;
    if (rig.screenX < -260) rig.screenX = VIEW_WIDTH + 260;
    if (rig.screenX > VIEW_WIDTH + 280) rig.screenX = -240;

    const bob = Math.abs(Math.sin(phase)) * 5;
    const sway = Math.sin(phase * 0.5) * 4;
    rig.object.setPosition(rig.screenX + sway, rig.baseGroundY + bob);
    this.poseSpineColossus();

    const stepIndex = Math.floor((time + rig.phaseOffset * 100) / (rig.cycleMs / 2));
    if (stepIndex !== rig.lastStepIndex) {
      rig.lastStepIndex = stepIndex;
      this.triggerColossusFootstepShake();
    }
  }

  triggerColossusFootstepShake() {
    if (!state.running || state.won || !this.cameras?.main) return;
    if (this.birdAttackZoomActive || this.diveCameraZoomActive) return;
    const config = this.distantColossus?.config || {};
    this.cameras.main.shake(
      config.shakeDuration ?? COLOSSUS_STEP_SHAKE_DURATION,
      config.shakeIntensity ?? COLOSSUS_STEP_SHAKE_INTENSITY
    );
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
    const beamBoost = ray.beamBoost ?? 1;
    const baseAlpha = ray.alpha ?? 0.16;
    const boostedAlpha = options.blindingPass
      ? Math.max(baseAlpha * 1.75 * beamBoost, 0.42)
      : options.frontPass
        ? baseAlpha * 0.7 * beamBoost
        : baseAlpha * beamBoost;
    const localRay = {
      ...ray,
      x: ray.localX,
      y: ray.localY,
      alpha: Phaser.Math.Clamp(boostedAlpha, 0.02, options.frontPass ? 0.68 : 0.82)
    };

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    if (!localRay.skipCrackGlow) this.paintCeilingCrackGlow(context, localRay);
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
    const alphaScale = this.level.lightImpactAlphaScale ?? 1;
    (ray.impacts || []).forEach((impact, impactIndex) => {
      const alpha = impact.alpha * alphaScale;
      const glow = this.add.image(impact.x, impact.y, "light-impact-glow");
      glow.setOrigin(0.5, 0.5);
      glow.setScale(Phaser.Math.Clamp(impact.width / 118, 0.5, 1.65), Phaser.Math.Clamp(impact.width / 360, 0.24, 0.5));
      glow.setDepth(LIGHT_RAY_IMPACT_DEPTH);
      glow.setBlendMode(Phaser.BlendModes.ADD);
      glow.setAlpha(alpha);
      this.lightImpactGlows.push({
        glow,
        baseAlpha: alpha,
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
    this.createBillboardPrompt("Press [ 0 ] to interact");
  }

  createConstructionBillboard() {
    const config = this.level.constructionBillboard;
    if (!config) return;
    this.levelSelectBoard = this.add.image(config.x, config.floorRow * TILE - 2, "starting-billboard");
    this.levelSelectBoard.setOrigin(0.5, 1);
    this.levelSelectBoard.setScale(config.scale ?? STARTING_BILLBOARD_SCALE);
    this.levelSelectBoard.setDepth(STARTING_BILLBOARD_DEPTH);
    this.levelSelectBoard.setData("messageOnly", true);
    this.createBillboardPrompt(config.message || "This level is still under construction", 188);
  }

  createStartingRuins() {
    (this.level.startingRuins || []).forEach((ruinsConfig) => {
      const ruins = this.add.image(ruinsConfig.x, ruinsConfig.floorRow * TILE + 4, ruinsConfig.key);
      ruins.setOrigin(0, 1);
      ruins.setScale(ruinsConfig.scale ?? STARTING_RUINS_SCALE);
      ruins.setDepth(STARTING_HOUSE_DEPTH);
    });
  }

  createHaystacks() {
    if (!this.level.haystacks?.length || !this.textures.exists("haystack")) return;
    this.level.haystacks.forEach((config) => {
      const x = config.x ?? ((config.column ?? 0) * TILE + TILE / 2);
      const y = (config.floorRow ?? 0) * TILE + (config.yOffset ?? HAYSTACK_Y_OFFSET);
      const haystack = this.haystacks.create(x, y, "haystack");
      haystack.setOrigin(0.5, 1);
      haystack.setScale(config.scale ?? HAYSTACK_SCALE);
      haystack.setDepth(Math.max(config.depth ?? HAYSTACK_DEPTH, HAYSTACK_DEPTH));
      haystack.body.allowGravity = false;
      haystack.body.immovable = true;
      haystack.body.setSize(270, 84).setOffset(54, 54);
      haystack.setData("floorTop", (config.floorRow ?? 0) * TILE);
      haystack.setData("baseScale", config.scale ?? HAYSTACK_SCALE);
      haystack.refreshBody?.();
    });
  }

  createDiveIndicatorBirds() {
    this.clearDiveIndicatorBirds();
    const indicators = this.level.diveIndicators || [];
    if (!indicators.length) return;
    const birdSprite = this.getBirdSpriteKey();
    const birdAnimation = this.getBirdAnimationKey(birdSprite);
    if (!this.textures.exists(birdSprite) || !this.anims.exists(birdAnimation)) return;
    this.diveIndicatorBirds = indicators.map((config) => {
      const direction = config.direction ?? 1;
      const bird = this.add.sprite(
        (config.column ?? 0) * TILE + TILE / 2,
        (config.row ?? 0) * TILE - (config.yOffset ?? 18),
        birdSprite,
        config.frame ?? 2
      );
      bird.setScale((config.scale ?? DIVE_INDICATOR_SCALE) * this.getBirdScaleMultiplier());
      bird.setDepth(config.depth ?? BIRD_ATTACK_DEPTH - 0.2);
      bird.setFlipX(direction < 0);
      bird.setAngle(config.idleAngle ?? DIVE_INDICATOR_IDLE_ANGLE);
      bird.setData("direction", direction);
      bird.setData("homeX", bird.x);
      bird.setData("homeY", bird.y);
      bird.setData("state", "perched");
      return bird;
    });
  }

  clearDiveIndicatorBirds() {
    this.diveIndicatorBirds?.forEach((bird) => bird?.destroy?.());
    this.diveIndicatorBirds = [];
  }

  createBillboardPrompt(text = "Press [ 0 ] to interact", width = 146) {
    this.levelSelectPrompt = createWorldSpeechBubble(
      this,
      () => ({ x: this.levelSelectBoard.x, y: this.levelSelectBoard.y }),
      text,
      {
        width,
        minHeight: 30,
        fontSize: 12,
        offsetY: -112,
        backgroundOpacity: 0.88,
        visible: false
      }
    );
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
    if (this.textures.exists("gabi-glide-sheet") && !this.anims.exists("gabi-glide")) {
      this.anims.create({
        key: "gabi-glide",
        frames: this.anims.generateFrameNumbers("gabi-glide-sheet", { frames: [2, 3] }),
        frameRate: 6,
        repeat: -1
      });
    }
    if (this.textures.exists("gabi-air-dive-sheet") && !this.anims.exists("gabi-dive")) {
      this.anims.create({
        key: "gabi-dive",
        frames: this.anims.generateFrameNumbers("gabi-air-dive-sheet", { frames: [0, 1] }),
        frameRate: 7,
        repeat: -1
      });
    }
    if (this.textures.exists("gabi-point-sheet") && !this.anims.exists("gabi-point")) {
      this.anims.create({
        key: "gabi-point",
        frames: this.anims.generateFrameNumbers("gabi-point-sheet", { frames: [0, 1, 2] }),
        frameRate: 9,
        repeat: 0
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
    ["white-bird", "magpie-bird"].forEach((birdSprite) => {
      const animationKey = this.getBirdAnimationKey(birdSprite);
      if (!this.textures.exists(birdSprite) || this.anims.exists(animationKey)) return;
      this.anims.create({
        key: animationKey,
        frames: this.anims.generateFrameNumbers(birdSprite, { frames: [0, 1, 2, 3] }),
        frameRate: 14,
        repeat: -1
      });
    });
    if (this.textures.exists("mr-magpie") && !this.anims.exists("mr-magpie-idle")) {
      this.anims.create({
        key: "mr-magpie-idle",
        frames: this.anims.generateFrameNumbers("mr-magpie", { frames: [0, 1] }),
        frameRate: 3,
        repeat: -1
      });
      this.anims.create({
        key: "mr-magpie-walk",
        frames: this.anims.generateFrameNumbers("mr-magpie", { frames: [2, 3] }),
        frameRate: 6,
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
          state.totalEnemies += 1;
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
          if (this.level.mysteriousMan) {
            this.createMysteriousMan(x, y);
          } else {
            const door = this.doors.create(x, y + (this.level.doorYOffset ?? -16), "exit-door");
            door.setScale(DOOR_SCALE);
            door.setDepth(DOOR_DEPTH);
            door.refreshBody();
            this.doorPoint = { x: door.x, y: door.y };
          }
        }
        if (cell === "p") this.spawnPoint = { x, y };
      });
    });
    this.createPlatformVisuals();
    this.createMovingPlatforms();
    this.createFinalElevator();
    this.createPlatformShadows();
  }

  createWallTileVisual(x, y, rowIndex, columnIndex) {
    const wallTiles = this.level.wallTiles;
    const wallFaceColumn = this.level.finalElevator?.wallFaceColumn;
    if (wallFaceColumn !== undefined && columnIndex > wallFaceColumn) {
      const interior = this.add.rectangle(x, y, TILE + 1, TILE + 1, 0x000000, 1);
      interior.setDepth(0);
      this.platformVisuals.add(interior);
      return;
    }
    if (!wallTiles) {
      const wall = this.add.image(x, y, this.level.platformTexture || "platform-strip", Math.abs(rowIndex * 3 + columnIndex) % 3);
      wall.setDisplaySize(TILE + 1, TILE + 1);
      wall.setTint(0x4a4a4a);
      wall.setAlpha(0.96);
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
    const wallFaceColumn = this.level.finalElevator?.wallFaceColumn;
    for (let rowOffset = 0; rowOffset < WALL_FOREGROUND_TILE_SPAN; rowOffset += 1) {
      for (let columnOffset = 0; columnOffset < WALL_FOREGROUND_TILE_SPAN; columnOffset += 1) {
        if (wallFaceColumn !== undefined && columnIndex + columnOffset >= wallFaceColumn) return false;
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

  createFinalElevator() {
    const config = this.level.finalElevator;
    if (!config) return;

    const worldWidth = config.widthTiles * TILE;
    const centerX = config.startColumn * TILE + worldWidth / 2;
    const baseTopY = config.baseRow * TILE;
    const topTopY = config.topRow * TILE;
    const body = this.movingPlatforms.create(centerX, baseTopY + TILE / 2, "tile-ground");
    body.setVisible(false);
    body.body.allowGravity = false;
    body.body.immovable = true;
    body.body.setSize(worldWidth, TILE);
    body.body.setOffset((TILE - worldWidth) / 2, 0);
    body.setVelocity(0, 0);

    const visuals = [];
    const segments = Math.ceil(worldWidth / PLATFORM_SEGMENT_WIDTH);
    const platformTexture = this.level.platformTexture || "platform-strip";
    const fenceTexture = this.level.fenceTexture || "platform-fence";
    const gazeboX = centerX;
    const gazeboBottomY = baseTopY + 7;
    const gazeboWidth = 585 * GAZEBO_SCALE;
    const gazeboHeight = 636 * GAZEBO_SCALE;
    const roofTopY = gazeboBottomY - gazeboHeight + 20;
    const roofBody = this.movingPlatforms.create(gazeboX, roofTopY + 8, "tile-ground");
    roofBody.setVisible(false);
    roofBody.body.allowGravity = false;
    roofBody.body.immovable = true;
    roofBody.body.setSize(gazeboWidth * 0.62, 16);
    roofBody.body.setOffset((TILE - gazeboWidth * 0.62) / 2, 0);
    roofBody.setVelocity(0, 0);
    roofBody.setData("finalElevatorRoof", true);

    const gazeboBack = this.add.image(gazeboX, gazeboBottomY, "gazebo-back");
    gazeboBack.setOrigin(0.5, 1);
    gazeboBack.setScale(GAZEBO_SCALE);
    gazeboBack.setDepth(GAZEBO_BACK_DEPTH);
    visuals.push({ sprite: gazeboBack, offsetX: gazeboX - centerX, offsetY: 7 - TILE / 2 });

    for (let index = 0; index < segments; index += 1) {
      const segmentWidth = Math.min(PLATFORM_SEGMENT_WIDTH, worldWidth - index * PLATFORM_SEGMENT_WIDTH);
      const offsetX = -worldWidth / 2 + index * PLATFORM_SEGMENT_WIDTH + segmentWidth / 2;
      const platform = this.add.image(centerX + offsetX, baseTopY + PLATFORM_Y_OFFSET, platformTexture, index % 3);
      platform.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      platform.setDepth(PLATFORM_DEPTH + 0.2);
      visuals.push({ sprite: platform, offsetX, offsetY: PLATFORM_Y_OFFSET - TILE / 2 });

      const fence = this.add.image(centerX + offsetX, baseTopY + FENCE_Y_OFFSET, fenceTexture, index % 2);
      fence.setDisplaySize(segmentWidth, PLATFORM_SEGMENT_HEIGHT);
      fence.setDepth(FENCE_DEPTH);
      visuals.push({ sprite: fence, offsetX, offsetY: FENCE_Y_OFFSET - TILE / 2 });
    }

    const gazeboFront = this.add.image(gazeboX, gazeboBottomY, "gazebo-front");
    gazeboFront.setOrigin(0.5, 1);
    gazeboFront.setScale(GAZEBO_SCALE);
    gazeboFront.setDepth(GAZEBO_FRONT_DEPTH);
    visuals.push({ sprite: gazeboFront, offsetX: gazeboX - centerX, offsetY: 7 - TILE / 2 });

    const sign = this.add.image(centerX - worldWidth / 2 - 26, baseTopY + 6, "elevator-sign");
    sign.setOrigin(0.5, 1);
    sign.setScale(0.38);
    sign.setDepth(STARTING_BILLBOARD_DEPTH);

    this.finalElevator = {
      body,
      roofBody,
      visuals,
      sign,
      width: worldWidth,
      cabinLeft: gazeboX - gazeboWidth * 0.36,
      cabinRight: gazeboX + gazeboWidth * 0.36,
      roofOffsetX: gazeboX - centerX,
      roofOffsetY: roofTopY + 8 - (baseTopY + TILE / 2),
      baseY: baseTopY + TILE / 2,
      topY: topTopY + TILE / 2,
      speed: config.speed || 82,
      catOffsetX: 0,
      lastY: baseTopY + TILE / 2,
      deltaY: 0
    };
    this.createFinalElevatorCredits();
  }

  createFinalElevatorCredits() {
    const elevator = this.finalElevator;
    if (!elevator || !CREDITS_SECTIONS.length) return;
    this.clearFinalElevatorCredits();

    const x = elevator.body.x - Math.min(520, VIEW_WIDTH * 0.42);
    const startY = elevator.baseY - 250;
    const endY = elevator.topY + 310;
    const availableHeight = Math.max(1, startY - endY);
    const step = availableHeight / Math.max(1, CREDITS_SECTIONS.length - 1);

    this.finalElevatorCredits = CREDITS_SECTIONS.map(([category, names], index) => {
      const y = startY - step * index;
      const container = this.add.container(x, y);
      const title = this.add.text(0, 0, category.toUpperCase(), {
        fontFamily: "\"Courier New\", monospace",
        fontSize: "15px",
        fontStyle: "bold",
        color: "#f4dcb0",
        align: "left"
      });
      title.setOrigin(0, 0);
      title.setShadow(2, 2, "#000000", 0, false, true);
      container.add(title);

      names.forEach((name, nameIndex) => {
        const line = this.add.text(18, 25 + nameIndex * 22, name, {
          fontFamily: "\"Courier New\", monospace",
          fontSize: "14px",
          color: "#f4f0dc",
          align: "left"
        });
        line.setOrigin(0, 0);
        line.setShadow(2, 2, "#000000", 0, false, true);
        container.add(line);
      });

      container.setDepth(PLATFORM_DEPTH + 0.4);
      container.setAlpha(0);
      container.setVisible(false);
      return container;
    });
  }

  clearFinalElevatorCredits() {
    this.finalElevatorCredits?.forEach((entry) => entry?.destroy?.(true));
    this.finalElevatorCredits = [];
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

  createMysteriousMan(x, y) {
    const config = this.level.mysteriousMan;
    if (!config || !this.textures.exists("mr-magpie")) return;
    const man = this.physics.add.sprite(
      x + (config.xOffset || 0),
      y + (config.yOffset || 0),
      "mr-magpie",
      0
    );
    man.setOrigin(0.5, 1);
    man.setScale(config.scale || MR_MAGPIE_SCALE);
    man.setDepth(5);
    man.setFlipX(false);
    man.play("mr-magpie-idle", true);
    man.body.setAllowGravity(false);
    man.body.moves = false;
    man.setVelocity(0, 0);
    this.mysteriousMan = man;
    this.mysteriousManState = "waiting";
    this.mysteriousManStart = { x: man.x, y: man.y };
    this.mysteriousManExitX = this.levelWidth + (config.exitPadding || 140);
    this.mysteriousManFinishX = Math.min(this.levelWidth - 26, man.x + 230);
    man.setFlipX(Boolean(config.faceLeft));
    this.doorPoint = { x: man.x, y: man.y };
  }

  resetMysteriousMan() {
    if (!this.mysteriousMan || !this.mysteriousManStart) return;
    this.mysteriousManSpeechBubble?.destroy(true);
    this.mysteriousManSpeechBubble = null;
    this.mysteriousManState = "waiting";
    this.mysteriousMan.setVisible(true);
    this.mysteriousMan.setActive(true);
    this.mysteriousMan.setPosition(this.mysteriousManStart.x, this.mysteriousManStart.y);
    this.mysteriousMan.setAlpha(1);
    this.mysteriousMan.setAngle(0);
    this.tweens.killTweensOf(this.mysteriousMan);
    if (this.mysteriousMan.body) {
      this.mysteriousMan.body.moves = false;
      this.mysteriousMan.body.setAllowGravity(false);
      this.mysteriousMan.setVelocity(0, 0);
      this.mysteriousMan.setAngularVelocity(0);
    }
    this.mysteriousMan.setFlipX(Boolean(this.level.mysteriousMan?.faceLeft));
    this.mysteriousMan.setTexture("mr-magpie", 0);
    this.mysteriousMan.play("mr-magpie-idle", true);
    this.mysteriousManScriptAt = 0;
  }

  updateMysteriousMan(time = 0, delta = 0) {
    const man = this.mysteriousMan;
    const config = this.level.mysteriousMan;
    if (!man || !config) return;
    this.updateMysteriousManSpeechPosition();
    if (config.behavior === "leap") {
      this.updateMysteriousManLeap(time, delta);
      return;
    }
    if (!state.running || state.won || !state.hasKey || !this.finalElevatorCompleted) return;

    if (this.mysteriousManState === "waiting") {
      man.play("mr-magpie-idle", true);
      const closeEnough =
        Phaser.Math.Distance.Between(this.player.x, this.player.y, man.x, man.y) < (config.triggerDistance || 150) ||
        this.player.x > man.x - 90;
      if (!closeEnough) return;
      this.mysteriousManState = "leaving";
      this.mysteriousManExitX = this.levelWidth + (config.exitPadding || 140);
      this.mysteriousManFinishX = this.levelWidth - (config.finishPadding || 48);
      this.showMysteriousManSpeech("Follow me...");
      man.play("mr-magpie-walk", true);
    }

    if (this.mysteriousManState === "leaving") {
      const seconds = delta / 1000;
      man.x += (config.speed || MR_MAGPIE_SPEED) * seconds;
      man.play("mr-magpie-walk", true);
      if (man.x >= this.mysteriousManExitX) {
        man.setVisible(false);
        this.mysteriousManState = "gone";
      }
    }
    this.updateMysteriousManSpeechPosition();

    if (
      (this.mysteriousManState === "leaving" || this.mysteriousManState === "gone") &&
      this.player.x >= this.mysteriousManFinishX
    ) {
      this.completeLevel();
    }
  }

  updateMysteriousManLeap(time = 0, delta = 0) {
    const man = this.mysteriousMan;
    const config = this.level.mysteriousMan;
    if (!man || !config || !state.running || state.won) return;
    if (this.mysteriousManState === "leaping") {
      man.angle += 30 * (delta / 1000);
      if (man.y > this.levelHeight + 220 || man.x > this.levelWidth + (config.exitPadding || 360)) {
        man.setVisible(false);
        man.setActive(false);
        if (man.body) man.body.enable = false;
        this.mysteriousManState = "gone";
      }
      return;
    }

    if (this.mysteriousManState === "waiting") {
      this.mysteriousManState = "leap-line-1";
      this.mysteriousManScriptAt = time;
      man.setFlipX(Boolean(config.faceLeft));
      man.play("mr-magpie-idle", true);
      this.showMysteriousManSpeech("You must take the leap.");
      return;
    }

    if (this.mysteriousManState === "leap-line-1") {
      if (time - this.mysteriousManScriptAt <= 2200) return;
      this.mysteriousManState = "leap-line-2";
      this.mysteriousManScriptAt = time;
      this.showMysteriousManSpeech("Then the birds will follow.");
      return;
    }

    if (this.mysteriousManState === "leap-line-2" && time - this.mysteriousManScriptAt <= (config.leapDelay || 1900)) {
      return;
    }

    if (this.mysteriousManState === "leap-line-2") {
      this.mysteriousManState = "walking-to-leap-edge";
      man.setFlipX(false);
      man.play("mr-magpie-walk", true);
    }

    if (this.mysteriousManState === "walking-to-leap-edge") {
      const edgeX = (config.leapEdgeColumn ?? 29) * TILE;
      man.x = Math.min(edgeX, man.x + (config.leapWalkSpeed || config.speed || MR_MAGPIE_SPEED) * (delta / 1000));
      man.play("mr-magpie-walk", true);
      if (man.x < edgeX) return;
      man.setPosition(edgeX, man.y);
    }

    this.mysteriousManState = "leaping";
    this.mysteriousManSpeechBubble?.destroy(true);
    this.mysteriousManSpeechBubble = null;
    man.setFlipX(false);
    if (this.textures.exists("mr-magpie-jump")) {
      man.anims.stop();
      man.setTexture("mr-magpie-jump");
    } else {
      man.play("mr-magpie-walk", true);
    }
    if (man.body) {
      man.body.enable = true;
      man.body.reset(man.x, man.y);
      man.body.updateFromGameObject?.();
      man.body.moves = true;
      man.body.setAllowGravity(true);
      man.setVelocity(config.leapVelocityX || 260, config.leapVelocityY || -510);
    }
  }

  showMysteriousManSpeech(text) {
    if (!this.mysteriousMan || !text) return;
    this.mysteriousManSpeechBubble?.destroy(true);
    this.mysteriousManSpeechBubble = createWorldSpeechBubble(
      this,
      () => ({ x: this.mysteriousMan.x, y: this.mysteriousMan.y }),
      text,
      {
        width: text.length > 24 ? 210 : 150,
        minHeight: 34,
        fontSize: 13,
        offsetY: -96,
        backgroundOpacity: 0.9
      }
    );
    this.time.delayedCall(1800, () => {
      if (!this.mysteriousManSpeechBubble) return;
      this.tweens.add({
        targets: this.mysteriousManSpeechBubble,
        alpha: 0,
        duration: 220,
        onComplete: () => {
          this.mysteriousManSpeechBubble?.destroy(true);
          this.mysteriousManSpeechBubble = null;
        }
      });
    });
  }

  updateMysteriousManSpeechPosition() {
    if (!this.mysteriousManSpeechBubble || !this.mysteriousMan) return;
    this.mysteriousManSpeechBubble.update();
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keysInput = this.input.keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
      jumpW: Phaser.Input.Keyboard.KeyCodes.W,
      action: Phaser.Input.Keyboard.KeyCodes.ENTER,
      birdAttack: Phaser.Input.Keyboard.KeyCodes.SHIFT,
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
    this.physics.add.overlap(this.player, this.haystacks, this.landInHaystack, null, this);
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
    this.mysteriousManSpeechBubble?.destroy(true);
    this.mysteriousManSpeechBubble = null;
    this.elevatorSignBubble?.destroy(true);
    this.elevatorSignBubble = null;
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.wingPromptActive = false;
    this.nextQuakeAt = Infinity;
    this.quakeDropStartsAt = 0;
    this.quakeDropUntil = 0;
    if (this.level.finalElevator || this.level.ambientBirds) this.nextBirdFlockAt = this.time.now + 1400;
    this.releaseBasketPromptControlLock();
    this.resetMobileGestureInput();
    this.resetFinalElevator();
    this.resetMysteriousMan();
    this.resetPlayerToSpawn();
    this.lastBirdAttackAt = -Infinity;
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    this.resetGlideState();
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
    updateHud();
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
    this.updateFinalElevator(time, delta);
    this.updateEnvironmentalQuake(time);
    this.updateAcorns(time);
    this.updateThrownItems();
    this.updateParallax();
    this.updateDistantColossus(time, delta);
    this.updateLightRays(time);
    this.updateWater(delta);
    this.updateLanternOverlay();
    this.updateCatNpc(time, delta);
    this.updateBirdFlocks(time, delta);
    this.updateDiveIndicatorBirds(time, delta);
    this.updateDiveFieldLeaves(time, delta);
    this.updateDiveWindLines(time);
    this.updateDiveCameraZoom();
    this.updateAmbientLeaves(time, delta);
    this.updateBirdAttackCooldown(time);
    this.updateDomSpeechBubbles();
    this.updateGabiSpeechPosition();
    this.updateCatSpeechPosition();
    this.updateMysteriousMan(time, delta);
    this.updateElevatorSignBubble();
    this.updateBillboardPrompt();
    if (!state.running || state.won) return;
    this.updateFinishZone();
    if (this.updateScriptedHaystackDive(time, delta)) {
      if (this.player.y > this.levelHeight + 56) this.loseLife();
      this.updateDiveWindLines(time);
      this.updateDiveCameraZoom();
      this.updateGabiAnimation(false, false);
      return;
    }

    const mobileDirection = this.getMobileMoveDirection();
    const left = this.cursors.left.isDown || this.keysInput.left.isDown || mobileDirection < 0;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown || mobileDirection > 0;
    const jump =
      Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jump) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jumpW) ||
      this.consumeMobileJump();
    const action = Phaser.Input.Keyboard.JustDown(this.keysInput.action) || this.consumeMobileAction();
    const birdAttack = Phaser.Input.Keyboard.JustDown(this.keysInput.birdAttack);
    const onFloor = this.player.body.blocked.down;

    if (this.isItemPromptActive()) {
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
      this.resetGlideState();
      if (this.gabiDiveActive) this.resetGabiDiveState();
    }

    if (jump && this.isGliding) {
      this.cancelGlideToFall();
    } else if (jump && onFloor) {
      this.player.setVelocityY(-510);
      if (this.shouldUseGabiDiveJump(left, right)) this.startGabiDive(time);
    } else if (
      jump &&
      state.hasDoubleJump &&
      this.airJumpsUsed < 1 &&
      !this.gabiDiveActive &&
      !this.scriptedHaystackDive
    ) {
      this.airJumpsUsed += 1;
      this.usingWingJump = true;
      this.resetGlideState();
      this.resetGabiDiveState();
      this.player.setVelocityY(-490);
      this.playLevelSfx(Phaser.Utils.Array.GetRandom(DOUBLE_JUMP_SFX_KEYS), 0.46);
    }

    this.updateGlideState(time, left, right, onFloor);
    if (birdAttack) this.commandBirdAttack(time);
    if (action) this.performAction(time);
    this.constrainPlayerToActiveFinalElevator();
    this.updateDiveWindLines(time);
    this.updateDiveCameraZoom();

    if (this.player.y > this.levelHeight + 56) this.loseLife();
    this.updateGabiAnimation(left || right, onFloor);
    this.enforceFinalElevatorRidePose();
  }

  enforceFinalElevatorRidePose() {
    if (!this.finalElevatorActive || !this.isPlayerInsideFinalElevatorCabin()) return;
    this.usingWingJump = false;
    this.resetGlideState();
    this.resetGabiDiveState();
    this.setGabiAnimation("idle");
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
    return Boolean(this.basketPromptActive || this.lanternPromptActive || this.wingPromptActive);
  }

  handleItemPickupOk(time = this.time?.now || 0) {
    if (this.lanternPromptActive) {
      this.lanternPromptActive = false;
      setItemPickupVisible(false);
      this.releaseBasketPromptControlLock();
      return;
    }

    if (this.wingPromptActive) {
      this.wingPromptActive = false;
      state.hasBirdControl = true;
      this.lastBirdAttackAt = -Infinity;
      updateBirdCooldownHud(0);
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

  commandBirdAttack(time = 0) {
    if (this.level.actionAbility !== "command-birds") return false;
    if (!state.hasBirdControl) return false;
    if (time - this.lastBirdAttackAt < BIRD_ATTACK_COOLDOWN) return false;
    if (!this.player.body.blocked.down && !this.player.body.touching.down) return false;
    const target = this.findNearestVisibleLivingEnemy();

    this.lastBirdAttackAt = time;
    state.questProgress.birdAttackUsed = true;
    updateBirdCooldownHud(1);
    updateQuestHud();
    if (target) this.setGabiFlip(target.x < this.player.x);
    this.playGabiPointAnimation(time);
    this.spawnAttackBirdFlock(target, time);
    this.playBirdAttackCameraZoom(target);
    if (this.level.birdSfx) this.playLevelSfx(this.level.birdSfx, MAGPIE_ATTACK_SFX_VOLUME);
    this.showGabiSpeech(Phaser.Math.RND.pick(BIRD_ATTACK_SPEECH_LINES));
    return true;
  }

  playBirdAttackCameraZoom(target = null) {
    if (!this.player || !this.cameras?.main) return;
    this.cancelBirdAttackCameraZoom({ restoreCamera: false });
    const camera = this.cameras.main;
    const proxy = { zoom: camera.zoom || 1 };
    const focus = {
      x: camera.midPoint?.x ?? this.player.x,
      y: camera.midPoint?.y ?? this.player.y
    };
    this.birdAttackZoomActive = true;
    this.birdAttackZoomProxy = proxy;
    this.birdAttackCameraFocus = focus;
    camera.stopFollow();

    const centerOnGabi = (lerp = 0.1) => {
      if (!this.birdAttackZoomActive || !this.player?.active) return;
      camera.setZoom(proxy.zoom);
      focus.x = Phaser.Math.Linear(focus.x, this.player.x, lerp);
      focus.y = Phaser.Math.Linear(focus.y, this.player.y - 14, lerp);
      camera.centerOn(Math.round(focus.x), Math.round(focus.y));
    };
    centerOnGabi(0.04);
    this.playLevelSfx(BIRD_ZOOM_IN_SFX_KEY, 1.0);
    camera.shake(95, 0.0022);

    this.birdAttackZoomTween = this.tweens.add({
      targets: proxy,
      zoom: BIRD_ATTACK_CAMERA_ZOOM,
      duration: BIRD_ATTACK_CAMERA_ZOOM_IN_MS,
      ease: "Sine.easeInOut",
      onUpdate: () => centerOnGabi(0.12),
      onComplete: () => {
        centerOnGabi(0.18);
        const holdTimer = this.time.delayedCall(500, () => {
          if (target?.active) {
            this.startBirdAttackEnemyCameraFocus(target, centerOnGabi);
          } else {
            this.startBirdAttackCameraZoomOut(centerOnGabi);
          }
        }, undefined, this);
        this.birdAttackZoomTimers.push(holdTimer);
      }
    });
  }

  startBirdAttackEnemyCameraFocus(target, centerOnGabi) {
    if (!this.birdAttackZoomActive || !this.birdAttackZoomProxy || !target?.active) {
      this.startBirdAttackCameraZoomOut(centerOnGabi);
      return;
    }
    const camera = this.cameras.main;
    const focus = this.birdAttackCameraFocus || { x: this.player.x, y: this.player.y - 14 };
    this.birdAttackCameraFocus = focus;
    const centerOnEnemy = (lerp = 0.08) => {
      if (!this.birdAttackZoomActive || !this.birdAttackZoomProxy) return;
      const targetX = target?.active ? target.x : focus.x;
      const targetY = target?.active ? target.y - 18 : focus.y;
      focus.x = Phaser.Math.Linear(focus.x, targetX, lerp);
      focus.y = Phaser.Math.Linear(focus.y, targetY, lerp);
      camera.setZoom(this.birdAttackZoomProxy.zoom);
      camera.centerOn(Math.round(focus.x), Math.round(focus.y));
    };

    this.playLevelSfx(BIRD_ZOOM_IN_SFX_KEY, 1.0);
    camera.shake(85, 0.0018);
    this.birdAttackZoomTween?.remove?.();
    this.birdAttackZoomTween = this.tweens.add({
      targets: focus,
      x: target.x,
      y: target.y - 18,
      duration: BIRD_ATTACK_CAMERA_ENEMY_SHIFT_MS,
      ease: "Sine.easeInOut",
      onUpdate: () => {
        camera.setZoom(this.birdAttackZoomProxy.zoom);
        camera.centerOn(Math.round(focus.x), Math.round(focus.y));
      },
      onComplete: () => {
        const followTimer = this.time.addEvent({
          delay: 16,
          repeat: Math.floor(BIRD_ATTACK_CAMERA_ENEMY_HOLD_MS / 16),
          callback: () => centerOnEnemy(0.11)
        });
        this.birdAttackZoomTimers.push(followTimer);
        const exitTimer = this.time.delayedCall(
          BIRD_ATTACK_CAMERA_ENEMY_HOLD_MS,
          () => this.startBirdAttackCameraZoomOut(centerOnEnemy),
          undefined,
          this
        );
        this.birdAttackZoomTimers.push(exitTimer);
      }
    });
  }

  startBirdAttackCameraZoomOut() {
    if (!this.birdAttackZoomActive || !this.birdAttackZoomProxy) return;
    const camera = this.cameras.main;
    const focus = this.birdAttackCameraFocus || {
      x: camera.midPoint?.x ?? this.player.x,
      y: camera.midPoint?.y ?? this.player.y
    };
    this.birdAttackCameraFocus = focus;
    const centerBackOnGabi = (lerp = 0.16) => {
      if (!this.player?.active) return;
      focus.x = Phaser.Math.Linear(focus.x, this.player.x, lerp);
      focus.y = Phaser.Math.Linear(focus.y, this.player.y - 14, lerp);
      camera.setZoom(this.birdAttackZoomProxy?.zoom || camera.zoom || 1);
      camera.centerOn(Math.round(focus.x), Math.round(focus.y));
    };
    this.playLevelSfx(BIRD_ZOOM_OUT_SFX_KEY, 1.0);
    camera.shake(95, 0.0024);
    this.birdAttackZoomTween?.remove?.();
    this.birdAttackZoomTween = this.tweens.add({
      targets: this.birdAttackZoomProxy,
      zoom: 1,
      duration: BIRD_ATTACK_CAMERA_ZOOM_OUT_MS,
      ease: "Sine.easeInOut",
      onUpdate: () => centerBackOnGabi(0.18),
      onComplete: () => {
        camera.setZoom(1);
        centerBackOnGabi(1);
        this.cancelBirdAttackCameraZoom({ restoreCamera: true });
      }
    });
  }

  cancelBirdAttackCameraZoom({ restoreCamera = true } = {}) {
    this.birdAttackZoomTween?.remove?.();
    this.birdAttackZoomTween = null;
    this.birdAttackZoomTimers?.forEach((timer) => timer?.remove?.(false));
    this.birdAttackZoomTimers = [];
    this.birdAttackZoomProxy = null;
    this.birdAttackCameraFocus = null;
    this.birdAttackZoomActive = false;
    if (restoreCamera && this.cameras?.main && this.player) {
      this.cameras.main.setZoom(1);
      this.cameras.main.roundPixels = true;
      this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
      this.cameras.main.setDeadzone(170, 110);
    }
  }

  updateBirdAttackCooldown(time = 0) {
    if (this.level.actionAbility !== "command-birds" || !state.hasBirdControl) {
      setBirdCooldownVisible(false);
      return;
    }
    setBirdCooldownVisible(state.running && !state.won);
    const remaining = Math.max(0, BIRD_ATTACK_COOLDOWN - (time - this.lastBirdAttackAt));
    updateBirdCooldownHud(remaining / BIRD_ATTACK_COOLDOWN);
  }

  findNearestVisibleLivingEnemy() {
    let closest = null;
    let closestDistance = Infinity;
    this.enemies?.children.iterate((enemy) => {
      if (!enemy?.active || !enemy.body?.enable || enemy.getData("dying")) return;
      if (!this.isEnemyVisibleOnScreen(enemy)) return;
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, enemy.x, enemy.y);
      if (distance < closestDistance) {
        closest = enemy;
        closestDistance = distance;
      }
    });
    return closest;
  }

  isEnemyVisibleOnScreen(enemy) {
    if (!enemy) return false;
    const camera = this.cameras.main;
    const minX = camera.scrollX + 12;
    const maxX = camera.scrollX + VIEW_WIDTH - 12;
    const minY = camera.scrollY + 12;
    const maxY = camera.scrollY + PLAY_HEIGHT - 12;
    return enemy.x >= minX && enemy.x <= maxX && enemy.y >= minY && enemy.y <= maxY;
  }

  playGabiPointAnimation(time = 0) {
    if (!this.textures.exists("gabi-point-sheet") || !this.anims.exists("gabi-point")) return;
    this.resetGabiDiveState();
    this.gabiActionUntil = time + GABI_POINT_DURATION;
    this.gabiActionRestoreTimer?.remove?.(false);
    this.player.setTexture("gabi-point-sheet", 0);
    this.currentGabiAnimation = "point";
    this.player.play("gabi-point", true);
    this.gabiActionRestoreTimer = this.time.delayedCall(GABI_POINT_DURATION, () => {
      this.gabiActionUntil = 0;
      this.gabiActionRestoreTimer = null;
      this.currentGabiAnimation = null;
      this.updateGabiAnimation(Math.abs(this.player.body?.velocity?.x || 0) > 20, this.player.body?.blocked?.down);
    });
  }

  getPlayerGroundRun() {
    if (!this.player?.body) return null;
    const ridingPlatform = this.getRidingMovingPlatform(this.player);
    if (ridingPlatform?.body?.body) {
      const body = ridingPlatform.body.body;
      return {
        startX: body.x,
        endX: body.x + body.width,
        topY: body.y
      };
    }

    const body = this.player.body;
    const bodyCenterX = body.x + body.width / 2;
    const bodyBottom = body.y + body.height;
    return this.platformRuns
      .filter((run) => {
        const overlaps = body.x + body.width > run.startX + 3 && body.x < run.endX - 3;
        const nearFeet = bodyBottom >= run.topY - 8 && bodyBottom <= run.topY + 16;
        return overlaps && nearFeet;
      })
      .sort((a, b) => {
        const edgeDistanceA = Math.min(Math.abs(bodyCenterX - a.startX), Math.abs(bodyCenterX - a.endX));
        const edgeDistanceB = Math.min(Math.abs(bodyCenterX - b.startX), Math.abs(bodyCenterX - b.endX));
        return edgeDistanceA - edgeDistanceB;
      })[0] || null;
  }

  shouldUseGabiDiveJump(left = false, right = false) {
    if (!this.anims.exists("gabi-dive") || !this.player?.body) return false;
    const direction = left !== right ? (left ? -1 : 1) : (this.player.flipX ? -1 : 1);
    const diveLedge = this.getPlayerManualDiveLedge(direction) || this.getPlayerManualDiveLedge(-direction);
    this.pendingDiveLedge = diveLedge || null;
    return Boolean(diveLedge);
  }

  getPlayerManualDiveLedge(direction = 1) {
    const ledges = this.level.manualDiveLedges || [];
    if (!ledges.length) return null;
    return ledges.find((ledge) => {
      if (!this.matchesDiveLedgeSide(ledge, direction)) return null;
      if (ledge.type === "final-elevator-top") return this.isPlayerOnFinalElevatorDiveLedge(direction) ? ledge : null;
      const run = this.getManualDiveLedgeRun(ledge);
      return run && this.isPlayerNearDiveRunEdge(run, direction, ledge) ? ledge : null;
    }) || null;
  }

  matchesDiveLedgeSide(ledge, direction = 1) {
    if (!ledge?.side || ledge.side === "both") return true;
    return direction > 0 ? ledge.side === "right" : ledge.side === "left";
  }

  getManualDiveLedgeRun(ledge) {
    if (!ledge || !Number.isFinite(ledge.row)) return null;
    const row = ledge.row;
    const startX = Number.isFinite(ledge.startColumn) ? ledge.startColumn * TILE : -Infinity;
    const endX = Number.isFinite(ledge.endColumn)
      ? ledge.endColumn * TILE
      : Number.isFinite(ledge.startColumn) && Number.isFinite(ledge.widthTiles)
        ? (ledge.startColumn + ledge.widthTiles) * TILE
        : Infinity;
    const topY = row * TILE;
    return this.platformRuns.find((run) => {
      const sameRow = Math.abs(run.topY - topY) < 1;
      const overlaps = run.endX > startX && run.startX < endX;
      return sameRow && overlaps;
    }) || null;
  }

  isPlayerOnFinalElevatorDiveLedge(direction = 1) {
    if (!this.finalElevatorCompleted || !this.isPlayerOnFinalElevator()) return false;
    const platformBody = this.finalElevator?.body?.body;
    if (!platformBody) return false;
    const run = {
      startX: platformBody.x,
      endX: platformBody.x + platformBody.width
    };
    return this.isPlayerNearDiveRunEdge(run, direction);
  }

  isPlayerNearDiveRunEdge(run, direction = 1, ledge = {}) {
    if (!run || !this.player?.body) return false;
    const body = this.player.body;
    const distanceToEdge = direction > 0
      ? run.endX - (body.x + body.width)
      : body.x - run.startX;
    const edgeDistance = ledge.edgeDistance ?? GABI_DIVE_EDGE_DISTANCE;
    return distanceToEdge >= -32 && distanceToEdge <= edgeDistance;
  }

  startGabiDive(time = 0) {
    if (!this.anims.exists("gabi-dive") || !this.player) return;
    const diveLedge = this.pendingDiveLedge;
    this.pendingDiveLedge = null;
    this.gabiDiveActive = true;
    this.gabiDiveUntil = time + GABI_DIVE_MIN_DURATION;
    this.diveWindStartedAt = time;
    this.nextDiveWindShakeAt = time + DIVE_WIND_FADE_DELAY_MS + 180;
    this.randomizeDiveWindLineProfile();
    this.startDiveWindSfx();
    this.startDiveCameraZoom();
    const direction = this.player.flipX ? -1 : 1;
    this.player.setAngle(0);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("dive");
    this.tweenGabiDiveAngle(direction, GABI_DIVE_ANGLE_DURATION);
    if (diveLedge?.scriptedHaystackDive) this.startScriptedHaystackDive();
  }

  tweenGabiDiveAngle(direction = 1, duration = GABI_DIVE_ANGLE_DURATION) {
    if (!this.player) return;
    this.gabiDiveAngleDirection = direction;
    this.gabiDiveTween?.remove?.();
    this.gabiDiveTween = this.tweens.add({
      targets: this.player,
      angle: direction * GABI_DIVE_ANGLE,
      duration,
      ease: "Sine.easeOut"
    });
  }

  syncGabiDiveAngleToFacing({ immediate = false } = {}) {
    if (!this.player || (!this.gabiDiveActive && !this.scriptedHaystackDive)) return;
    const direction = this.player.flipX ? -1 : 1;
    if (this.gabiDiveAngleDirection === direction && !immediate) return;
    this.tweenGabiDiveAngle(direction, immediate ? 0 : 180);
  }

  startDiveCameraZoom() {
    if (!this.player || !this.cameras?.main || this.birdAttackZoomActive) return;
    this.cancelDiveCameraZoom();
    const camera = this.cameras.main;
    const proxy = { zoom: camera.zoom || 1 };
    const focus = {
      x: camera.midPoint?.x ?? this.player.x,
      y: camera.midPoint?.y ?? this.player.y
    };
    this.diveCameraZoomActive = true;
    this.diveCameraZoomProxy = proxy;
    this.diveCameraFocus = focus;
    camera.stopFollow();
    this.updateDiveCameraZoom();
    this.diveCameraZoomTween = this.tweens.add({
      targets: proxy,
      zoom: DIVE_CAMERA_ZOOM,
      duration: DIVE_CAMERA_ZOOM_IN_MS,
      ease: "Sine.easeInOut",
      onUpdate: () => this.updateDiveCameraZoom()
    });
  }

  updateDiveCameraZoom() {
    if (!this.diveCameraZoomActive || !this.diveCameraZoomProxy || !this.player?.active || !this.cameras?.main) return;
    const camera = this.cameras.main;
    const focus = this.diveCameraFocus || { x: camera.midPoint?.x ?? this.player.x, y: camera.midPoint?.y ?? this.player.y };
    this.diveCameraFocus = focus;
    focus.x = Phaser.Math.Linear(focus.x, this.player.x, 0.055);
    focus.y = Phaser.Math.Linear(focus.y, this.player.y + 4, 0.12);
    camera.setZoom(this.diveCameraZoomProxy.zoom);
    camera.centerOn(Math.round(focus.x), Math.round(focus.y));
  }

  finishDiveCameraZoomImpact() {
    if (!this.cameras?.main || !this.player) return;
    if (!this.diveCameraZoomActive) {
      this.cameras.main.shake(220, 0.008);
      return;
    }
    const camera = this.cameras.main;
    const proxy = this.diveCameraZoomProxy || { zoom: camera.zoom || 1 };
    const focus = this.diveCameraFocus || { x: camera.midPoint?.x ?? this.player.x, y: camera.midPoint?.y ?? this.player.y - 12 };
    this.diveCameraFocus = focus;
    this.diveCameraZoomTween?.remove?.();
    camera.shake(260, 0.012);
    this.diveCameraZoomTween = this.tweens.add({
      targets: proxy,
      zoom: 1,
      duration: DIVE_CAMERA_SNAP_OUT_MS,
      ease: "Cubic.easeOut",
      onUpdate: () => {
        focus.x = Phaser.Math.Linear(focus.x, this.player.x, 0.2);
        focus.y = Phaser.Math.Linear(focus.y, this.player.y - 12, 0.2);
        camera.setZoom(proxy.zoom);
        camera.centerOn(Math.round(focus.x), Math.round(focus.y));
      },
      onComplete: () => {
        this.cancelDiveCameraZoom({ restoreCamera: true });
      }
    });
  }

  cancelDiveCameraZoom({ restoreCamera = true } = {}) {
    if (!this.diveCameraZoomActive && !this.diveCameraZoomTween && !this.diveCameraZoomProxy) return;
    this.diveCameraZoomTween?.remove?.();
    this.diveCameraZoomTween = null;
    this.diveCameraZoomProxy = null;
    this.diveCameraFocus = null;
    this.diveCameraZoomActive = false;
    if (restoreCamera && this.cameras?.main && this.player) {
      this.cameras.main.setZoom(1);
      this.cameras.main.roundPixels = true;
      this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
      this.cameras.main.setDeadzone(170, 110);
    }
  }

  startDiveWindSfx() {
    if (!isSfxEnabled()) return;
    if (this.diveWindSfx?.isPlaying || !this.cache.audio.exists(DIVE_FALL_WIND_SFX_KEY)) return;
    try {
      this.resumeAudioContext();
      this.diveWindSfx = this.sound.add(DIVE_FALL_WIND_SFX_KEY, { loop: true, volume: 0.42 });
      this.diveWindSfx.play();
    } catch (_error) {
      this.diveWindSfx = null;
    }
  }

  stopDiveWindSfx() {
    if (!this.diveWindSfx) return;
    try {
      this.diveWindSfx.stop();
      this.diveWindSfx.destroy();
    } catch (_error) {
      // Ignore audio cleanup failures during scene transitions.
    }
    this.diveWindSfx = null;
  }

  ensureDiveWindGraphics() {
    if (this.diveWindGraphics?.active) return this.diveWindGraphics;
    this.diveWindGraphics = this.add.graphics();
    this.diveWindGraphics.setScrollFactor(0);
    this.diveWindGraphics.setDepth(DARKNESS_DEPTH + 1.3);
    return this.diveWindGraphics;
  }

  randomizeDiveWindLineProfile() {
    this.diveWindLineProfile = Array.from({ length: DIVE_WIND_LINE_COUNT }, (_, index) => {
      const weightRoll = Phaser.Math.FloatBetween(0, 1);
      const width = weightRoll > 0.9 ? 4 : weightRoll > 0.72 ? 3 : weightRoll > 0.42 ? 2 : 1;
      return {
        x: Phaser.Math.FloatBetween(0, VIEW_WIDTH),
        phase: Phaser.Math.FloatBetween(0, 999),
        driftPhase: Phaser.Math.FloatBetween(0, Math.PI * 2),
        driftSpeed: Phaser.Math.FloatBetween(0.0014, 0.0042),
        driftAmount: Phaser.Math.FloatBetween(4, 18),
        width,
        length: Phaser.Math.FloatBetween(28, 78) * (0.7 + width * 0.45),
        speed: Phaser.Math.FloatBetween(0.48, 0.92) * (0.72 + width * 0.56),
        alpha: Phaser.Math.FloatBetween(0.065, 0.105) + width * 0.085,
        drawOrder: index
      };
    });
  }

  updateDiveWindLines(time = 0) {
    const isDiving = Boolean(this.gabiDiveActive || this.scriptedHaystackDive);
    if (!isDiving || !state.running || state.won) {
      this.diveWindGraphics?.clear();
      return;
    }

    const graphics = this.ensureDiveWindGraphics();
    graphics.clear();
    const ramp = Phaser.Math.Clamp(
      (time - (this.diveWindStartedAt || time) - DIVE_WIND_FADE_DELAY_MS) / DIVE_WIND_RAMP_MS,
      0,
      1
    );
    if (ramp <= 0) return;

    if (time >= (this.nextDiveWindShakeAt || 0)) {
      this.cameras.main.shake(70, 0.0004 + ramp * 0.0012);
      this.nextDiveWindShakeAt = time + 180;
    }

    if (!this.diveWindLineProfile?.length) this.randomizeDiveWindLineProfile();
    this.diveWindLineProfile.forEach((line) => {
      const drift = Math.sin(time * line.driftSpeed + line.driftPhase) * line.driftAmount;
      const y = PLAY_HEIGHT + 110 - ((time * line.speed + line.phase) % (PLAY_HEIGHT + 180));
      const alpha = Phaser.Math.Clamp(line.alpha * ramp, 0, 0.55);
      const x = line.x + drift;
      const width = line.width;
      graphics.lineStyle(width, 0xf5efe0, alpha);
      graphics.lineBetween(x, y, x, y + line.length);
    });
  }

  clearDiveWindLines() {
    this.diveWindGraphics?.clear();
  }

  startScriptedHaystackDive() {
    const haystack = this.getPrimaryHaystack();
    if (!haystack || !this.player?.body) return;
    this.scriptedHaystackDive = {
      haystack,
      lockAt: this.time.now + SCRIPTED_DIVE_LOCK_DELAY_MS
    };
    this.usingWingJump = false;
    this.resetGlideState();
    this.player.setAccelerationX(0);
  }

  stopScriptedHaystackDive() {
    if (!this.scriptedHaystackDive) return;
    this.scriptedHaystackDive = null;
    this.player?.setMaxVelocity(260, 620);
  }

  getPrimaryHaystack() {
    return this.haystacks?.children?.entries?.find((haystack) => haystack?.active) || null;
  }

  updateScriptedHaystackDive(time = 0) {
    const haystack = this.scriptedHaystackDive?.haystack;
    if (!haystack?.active || !this.player?.body) {
      this.stopScriptedHaystackDive();
      return false;
    }
    if (time < this.scriptedHaystackDive.lockAt) {
      this.gabiDiveActive = true;
      this.gabiDiveUntil = Math.max(this.gabiDiveUntil, time + 120);
      this.setGabiAnimation("dive");
      return false;
    }

    const dx = haystack.x - this.player.x;
    const direction = dx === 0 ? (this.player.flipX ? -1 : 1) : Math.sign(dx);
    const horizontalSpeed = Math.abs(dx) < 10
      ? 0
      : Phaser.Math.Clamp(Math.abs(dx) * 1.9, SCRIPTED_DIVE_MIN_SPEED_X, SCRIPTED_DIVE_MAX_SPEED_X);
    const downwardSpeed = Phaser.Math.Clamp(
      Math.max(this.player.body.velocity.y + 34, 280),
      280,
      SCRIPTED_DIVE_MAX_SPEED_Y
    );

    this.player.setAccelerationX(0);
    this.player.setMaxVelocity(SCRIPTED_DIVE_MAX_SPEED_X, SCRIPTED_DIVE_MAX_SPEED_Y);
    this.player.setVelocity(horizontalSpeed * direction, downwardSpeed);
    this.setGabiFlip(direction < 0);
    this.gabiDiveActive = true;
    this.gabiDiveUntil = Math.max(this.gabiDiveUntil, time + 120);
    this.setGabiAnimation("dive");
    return true;
  }

  resetGabiDiveState({ restoreCamera = true } = {}) {
    this.gabiDiveTween?.remove?.();
    this.gabiDiveTween = null;
    this.gabiDiveActive = false;
    this.gabiDiveUntil = 0;
    this.gabiDiveAngleDirection = 0;
    this.pendingDiveLedge = null;
    this.stopDiveWindSfx();
    this.clearDiveWindLines();
    this.diveWindStartedAt = 0;
    this.nextDiveWindShakeAt = 0;
    this.diveWindLineProfile = [];
    if (restoreCamera) this.cancelDiveCameraZoom({ restoreCamera: true });
    if (this.player) this.player.setAngle(0);
  }

  landInHaystack(_player, haystack) {
    if (!haystack?.active || !this.player?.body) return;
    const now = this.time.now;
    const touchSpeed = Phaser.Math.Distance.Between(
      this.player.body.velocity.x,
      this.player.body.velocity.y,
      0,
      0
    );
    const shouldSettle =
      Boolean(this.scriptedHaystackDive) ||
      this.gabiDiveActive ||
      this.isGliding ||
      this.player.body.velocity.y > 80;
    const diveImpact = Boolean(this.scriptedHaystackDive) || this.gabiDiveActive;
    if (shouldSettle) {
      if (diveImpact) {
        state.questProgress.leapOfFaith = true;
        updateQuestHud();
      }
      this.stopScriptedHaystackDive();
      if (diveImpact) this.finishDiveCameraZoomImpact();
      this.resetGabiDiveState({ restoreCamera: !diveImpact });
      this.settlePlayerOnHaystackPlatform(haystack);
      if (diveImpact) {
        this.animateHaystackImpact(haystack);
        this.playLevelSfx(HAYSTACK_LAND_SFX_KEY, 0.58);
      }
    }
    if (!shouldSettle && touchSpeed < HAY_BURST_MIN_TOUCH_SPEED) return;
    if (now - (haystack.getData("lastBurstAt") || -Infinity) < HAY_BURST_COOLDOWN_MS) return;
    haystack.setData("lastBurstAt", now);
    if (!diveImpact) this.playLevelSfx(HAYSTACK_WALKIN_SFX_KEY, 0.45);
    this.spawnHayBurst(haystack.x, haystack.y - haystack.displayHeight * 0.36);
  }

  animateHaystackImpact(haystack) {
    if (!haystack?.active) return;
    const baseScale = haystack.getData("baseScale") ?? HAYSTACK_SCALE;
    haystack.getData("impactTween")?.remove?.();
    haystack.setScale(baseScale * 1.025, baseScale * 0.94);
    const tween = this.tweens.add({
      targets: haystack,
      scaleX: baseScale,
      scaleY: baseScale,
      duration: 180,
      ease: "Elastic.Out"
    });
    haystack.setData("impactTween", tween);
  }

  settlePlayerOnHaystackPlatform(haystack) {
    if (!this.player?.body || !haystack) return;
    const floorTop = haystack.getData("floorTop") ?? this.findHaystackFloorTop(haystack);
    if (!Number.isFinite(floorTop)) return;
    const bodyBottom = this.player.body.y + this.player.body.height;
    const adjustment = floorTop - bodyBottom;
    if (Math.abs(adjustment) > TILE * 5) return;
    const nextY = this.player.y + adjustment - 1;
    const nextX = Phaser.Math.Clamp(
      this.player.x,
      haystack.x - Math.max(18, haystack.displayWidth * 0.28),
      haystack.x + Math.max(18, haystack.displayWidth * 0.28)
    );
    this.player.setPosition(nextX, nextY);
    this.player.body.reset(nextX, nextY);
    this.player.setVelocity(this.player.flipX ? -22 : 22, 0);
    this.player.setAccelerationX(0);
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    this.resetGlideState();
    this.setGabiAnimation("idle");
  }

  findHaystackFloorTop(haystack) {
    const platform = this.platformRuns
      .filter((run) => haystack.x >= run.startX - TILE && haystack.x <= run.endX + TILE)
      .sort((a, b) => Math.abs(a.topY - haystack.y) - Math.abs(b.topY - haystack.y))[0];
    return platform?.topY;
  }

  spawnHayBurst(x, y) {
    const pieces = 34;
    for (let index = 0; index < pieces; index += 1) {
      const color = Phaser.Math.RND.pick(HAY_BURST_COLORS);
      const width = Phaser.Math.Between(8, 24);
      const height = Phaser.Math.Between(1, 3);
      const piece = this.add.rectangle(
        x + Phaser.Math.Between(-48, 48),
        y + Phaser.Math.Between(-12, 12),
        width,
        height,
        color,
        Phaser.Math.FloatBetween(0.78, 1)
      );
      const direction = index % 2 === 0 ? -1 : 1;
      const targetX = piece.x + direction * Phaser.Math.Between(46, 132) + Phaser.Math.Between(-24, 24);
      const targetY = piece.y - Phaser.Math.Between(28, 112);
      piece.setDepth(HAY_BURST_DEPTH + Phaser.Math.FloatBetween(0, 0.2));
      piece.setRotation(Phaser.Math.FloatBetween(-0.85, 0.85));
      this.tweens.add({
        targets: piece,
        x: targetX,
        y: targetY,
        angle: Phaser.Math.Between(-210, 210),
        alpha: 0,
        duration: Phaser.Math.Between(620, 980),
        ease: "Quad.easeOut",
        onComplete: () => piece.destroy()
      });
    }
  }

  spawnAttackBirdFlock(target, time = 0) {
    const birdSprite = this.getBirdSpriteKey();
    const birdAnimation = this.getBirdAnimationKey(birdSprite);
    if (!this.textures.exists(birdSprite) || !this.anims.exists(birdAnimation)) return;
    const camera = this.cameras.main;
    const directionX = target?.active ? (target.x >= this.player.x ? 1 : -1) : (this.player.flipX ? -1 : 1);
    const baseX = camera.scrollX + (directionX > 0 ? -120 : VIEW_WIDTH + 120);
    const baseY = Phaser.Math.Clamp(this.player.y - 48, camera.scrollY + 62, camera.scrollY + PLAY_HEIGHT - 132);
    const targetX = target?.active ? target.x : camera.scrollX + (directionX > 0 ? VIEW_WIDTH + 240 : -240);
    const targetY = target?.active ? target.y - 16 : Phaser.Math.Clamp(this.player.y - 32, camera.scrollY + 62, camera.scrollY + PLAY_HEIGHT - 132);
    const baseSpeed = Phaser.Math.Between(96, 168) * directionX;
    const travelSeconds = Math.max(0.1, Math.abs(targetX - baseX) / Math.abs(baseSpeed));
    const baseVy = Phaser.Math.Clamp((targetY - baseY) / travelSeconds, -42, 42);
    const startDistance = Math.max(1, Phaser.Math.Distance.Between(baseX, baseY, targetX, targetY));
    const flock = {
      x: baseX,
      y: baseY,
      vx: baseSpeed,
      vy: baseVy,
      baseVx: baseSpeed,
      baseVy,
      target,
      targetPoint: { x: targetX, y: targetY },
      hitTriggered: false,
      startedAt: time,
      startDistance,
      rotation: Phaser.Math.Clamp(Math.atan2(baseVy, Math.abs(baseSpeed)) * 0.18, -0.16, 0.16) * directionX,
      birds: []
    };
    const count = Phaser.Math.Between(BIRD_MIN_FLOCK_SIZE, BIRD_MAX_FLOCK_SIZE);

    for (let index = 0; index < count; index += 1) {
      const bird = this.add.sprite(
        baseX,
        baseY,
        birdSprite,
        Phaser.Math.Between(0, 3)
      );
      bird.setScale(Phaser.Math.FloatBetween(0.055, 0.088) * this.getBirdScaleMultiplier());
      bird.setDepth(BIRD_ATTACK_DEPTH);
      bird.setAlpha(Phaser.Math.FloatBetween(0.58, 0.86));
      bird.setFlipX(directionX < 0);
      bird.play(birdAnimation, true);
      bird.formationX = Phaser.Math.Between(-74, 74);
      bird.formationY = Phaser.Math.Between(-24, 24);
      bird.wobble = Phaser.Math.FloatBetween(2.2, 6.5);
      bird.phase = Phaser.Math.FloatBetween(0, Math.PI * 2);
      bird.rotation = flock.rotation;
      bird.x = flock.x + bird.formationX;
      bird.y = flock.y + bird.formationY;
      flock.birds.push(bird);
    }

    this.birdAttackFlocks.push(flock);
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
    this.syncGabiDiveAngleToFacing();
  }

  setGabiAnimation(name) {
    if (this.currentGabiAnimation === name || !this.player) return;
    this.currentGabiAnimation = name;
    if (name === "dive" && this.anims.exists("gabi-dive")) {
      this.player.setScale(GABI_DIVE_SCALE);
      this.player.play("gabi-dive", true);
      return;
    }
    this.player.setScale(name === "glide" ? GABI_GLIDE_SCALE : GABI_SCALE);
    this.player.setAngle(0);
    const animationKey = name === "wing-jump"
      ? "gabi-wing-jump"
      : name === "glide"
        ? "gabi-glide"
        : `${this.playerAnimationPrefix || "gabi"}-${name}`;
    this.player.play(animationKey, true);
  }

  updateGabiAnimation(isMoving, onFloor) {
    if (this.gabiActionUntil && this.time.now < this.gabiActionUntil) return;
    const shouldHoldDive =
      (this.gabiDiveActive || this.scriptedHaystackDive) &&
      !this.usingWingJump &&
      !this.isGliding &&
      (!onFloor || this.scriptedHaystackDive);
    if (shouldHoldDive) {
      this.setGabiAnimation("dive");
      return;
    }
    if (this.gabiDiveActive) this.resetGabiDiveState();
    if (!onFloor) {
      this.setGabiAnimation(this.isGliding ? "glide" : this.usingWingJump ? "wing-jump" : "jump");
    } else if (isMoving) {
      this.setGabiAnimation("walk");
    } else {
      this.setGabiAnimation("idle");
    }
  }

  resetGlideState() {
    this.glideDescendingSince = 0;
    this.isGliding = false;
    this.glideDirection = this.player?.flipX ? -1 : 1;
    this.player?.setMaxVelocity(260, 620);
  }

  updateGlideState(time = 0, left = false, right = false, onFloor = false) {
    if (!this.player?.body || onFloor || !this.usingWingJump) {
      if (!this.usingWingJump || onFloor) this.resetGlideState();
      return;
    }

    if (this.player.body.velocity.y <= 20) {
      this.glideDescendingSince = 0;
      this.isGliding = false;
      return;
    }

    if (!this.glideDescendingSince) this.glideDescendingSince = time;
    if (time - this.glideDescendingSince < GLIDE_DELAY_MS) return;

    if (left !== right) this.glideDirection = left ? -1 : 1;
    this.isGliding = true;
    this.player.setAccelerationX(0);
    this.player.setMaxVelocity(GLIDE_HORIZONTAL_SPEED, 620);
    this.player.setVelocity(this.glideDirection * GLIDE_HORIZONTAL_SPEED, GLIDE_FALL_SPEED);
    this.setGabiFlip(this.glideDirection < 0);
  }

  cancelGlideToFall() {
    if (!this.player?.body) return;
    const horizontalVelocity = this.player.body.velocity.x;
    const verticalVelocity = Math.max(this.player.body.velocity.y, GLIDE_FALL_SPEED);
    this.usingWingJump = false;
    this.resetGlideState();
    this.resetGabiDiveState();
    this.player.setVelocity(horizontalVelocity, verticalVelocity);
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
    this.stopScriptedHaystackDive();
    this.resetPlayerMotion();
    this.resetGlideState();
    this.resetGabiDiveState();
    this.gabiActionRestoreTimer?.remove?.(false);
    this.gabiActionRestoreTimer = null;
    this.gabiActionUntil = 0;
    this.player.setPosition(this.spawnPoint.x, this.spawnPoint.y);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("idle");
  }

  switchPlayerToLanternSprite() {
    if (!this.level.lanternPlayerSheet || !this.player) return;
    this.resetGabiDiveState();
    this.playerAnimationPrefix = this.level.lanternAnimationPrefix || "gabi-lantern";
    this.player.setTexture(this.level.lanternPlayerSheet, this.player.frame?.name || 0);
    this.currentGabiAnimation = null;
    this.setGabiAnimation("idle");
  }

  showGabiSpeech(text) {
    if (!text) return;
    if (this.speechBubble) this.speechBubble.destroy(true);
    this.speechBubble = createWorldSpeechBubble(
      this,
      () => ({ x: this.player.x, y: this.player.y }),
      text,
      {
        width: 190,
        minHeight: 42,
        fontSize: 13,
        offsetY: -62,
        backgroundOpacity: 0.86
      }
    );
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
    this.oldLadySpeechBubble = createWorldSpeechBubble(
      this,
      () => ({ x: this.oldLady.x, y: this.oldLady.y }),
      this.oldLadySpeechText,
      {
        width: 238,
        minHeight: 56,
        fontSize: 13,
        offsetY: -46,
        backgroundOpacity: 0.9
      }
    );
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
    this.speechBubble.update();
  }

  maybeShowCatMeow() {
    const now = this.time?.now || 0;
    if (!this.cat || !this.level.catNpc || !state.running || now < (this.nextCatMeowAt || 0)) return;
    this.nextCatMeowAt = now + Phaser.Math.Between(CAT_MEOW_MIN_DELAY, CAT_MEOW_MAX_DELAY);
    if (Phaser.Math.FloatBetween(0, 1) > CAT_MEOW_CHANCE) return;
    this.playLevelSfx(Phaser.Utils.Array.GetRandom(CAT_MEOW_SFX_KEYS), 0.23);
    this.showCatSpeech("Meow!");
  }

  showCatSpeech(text) {
    if (!this.cat || !text) return;
    if (this.catSpeechBubble) return;
    this.catSpeechBubble = createWorldSpeechBubble(
      this,
      () => ({ x: this.cat.x, y: this.cat.y }),
      text,
      {
        width: 76,
        minHeight: 28,
        fontSize: 12,
        offsetY: -34,
        backgroundOpacity: 0.9
      }
    );
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
    this.catSpeechBubble.update();
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
      if (enemy.getData("dying")) return;
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

  updateFinalElevator(time = 0, delta = 0) {
    const elevator = this.finalElevator;
    if (!elevator) return;

    if (this.finalElevatorCompleted) {
      if (this.shouldResetFinalElevatorAfterFall({ allowCompleted: true })) {
        this.resetFinalElevator({ resetGuide: true });
      }
      return;
    }

    if (!this.finalElevatorActive) {
      if (!state.running || !state.hasKey || !this.preparePlayerForFinalElevatorStart(time)) return;
      this.startFinalElevator(time);
    }

    if (this.shouldResetFinalElevatorAfterFall()) {
      this.resetFinalElevator();
      return;
    }

    const carryPlayer = this.isPlayerOnFinalElevator();
    const previousY = elevator.body.y;
    const nextY = Math.max(elevator.topY, elevator.body.y - (elevator.speed * delta) / 1000);
    elevator.body.setPosition(elevator.body.x, nextY);
    elevator.body.body.updateFromGameObject();
    elevator.deltaY = nextY - previousY;
    elevator.lastY = nextY;
    if (carryPlayer) this.carryFinalElevatorPlayer(elevator.deltaY);
    this.positionFinalElevatorVisuals();
    this.positionFinalElevatorCat();
    this.updateFinalElevatorCredits();

    if (nextY > elevator.topY) return;
    this.finishFinalElevator();
  }

  isPlayerOnFinalElevator() {
    const elevator = this.finalElevator;
    if (!elevator?.body?.body || !this.player?.body) return false;
    const platformBody = elevator.body.body;
    const playerBody = this.player.body;
    const overlapsHorizontally =
      playerBody.x + playerBody.width > platformBody.x + 8 &&
      playerBody.x < platformBody.x + platformBody.width - 8;
    const restsOnTop =
      playerBody.y + playerBody.height >= platformBody.y - 8 &&
      playerBody.y + playerBody.height <= platformBody.y + 18;
    return overlapsHorizontally && restsOnTop;
  }

  isPlayerInsideFinalElevatorCabin() {
    const elevator = this.finalElevator;
    if (!this.isPlayerOnFinalElevator() || !elevator?.cabinLeft || !elevator?.cabinRight || !this.player?.body) return false;
    const centerX = this.player.body.x + this.player.body.width / 2;
    return centerX > elevator.cabinLeft && centerX < elevator.cabinRight;
  }

  preparePlayerForFinalElevatorStart(time = 0) {
    if (!this.isPlayerInsideFinalElevatorCabin() || !this.player?.body) {
      this.finalElevatorReadySince = 0;
      return false;
    }

    const settledVertically =
      (this.player.body.blocked.down || this.player.body.touching.down) &&
      Math.abs(this.player.body.velocity.y) < 24;
    if (!settledVertically) {
      this.finalElevatorReadySince = 0;
      return false;
    }

    this.player.setAccelerationX(0);
    this.player.setVelocity(0, 0);
    this.usingWingJump = false;
    this.airJumpsUsed = 0;
    this.resetGlideState();
    this.setGabiAnimation("idle");
    if (!this.finalElevatorReadySince) this.finalElevatorReadySince = time;
    return time - this.finalElevatorReadySince >= 180;
  }

  startFinalElevator(time = 0) {
    const elevator = this.finalElevator;
    if (!elevator) return;
    this.finalElevatorActive = true;
    this.finalElevatorReadySince = 0;
    this.finishCatGuideTravel();
    const elevatorStopIndex = this.catGuidePath?.findIndex((stop) => stop.kind === "e") ?? -1;
    if (elevatorStopIndex >= 0) this.catGuideIndex = elevatorStopIndex;

    if (this.cat) {
      this.cat.setVelocity(0, 0);
      this.cat.setAcceleration(0, 0);
      this.cat.play("cat-idle", true);
    }

    this.cameras.main.shake(360, 0.006);
    this.playLevelSfx(EARTHQUAKE_SFX_KEY, 0.38);
    this.finalElevatorStartedAt = time;
    this.positionFinalElevatorCat();
    this.showFinalElevatorCredits();
    this.nextBirdFlockAt = Math.min(this.nextBirdFlockAt || Infinity, time + 250);
  }

  finishFinalElevator() {
    const elevator = this.finalElevator;
    if (!elevator) return;
    this.finalElevatorActive = false;
    this.finalElevatorCompleted = true;
    state.questProgress.elevatorRidden = true;
    updateQuestHud();
    elevator.body.setVelocity(0, 0);
    elevator.body.setPosition(elevator.body.x, elevator.topY);
    elevator.body.body.updateFromGameObject();
    this.positionFinalElevatorRoof();
    this.positionFinalElevatorVisuals();
    this.positionFinalElevatorCat();
    this.fadeOutFinalElevatorCredits();
    this.cameras.main.shakeEffect?.reset();
    this.cameras.main.shake(300, 0.008);

    this.catGuideTravel = null;
    this.catFollowPlayerAfterElevator = true;
    this.playCatGuideIdle();
  }

  resetFinalElevator({ resetGuide = false } = {}) {
    const elevator = this.finalElevator;
    if (!elevator) return;
    this.finalElevatorActive = false;
    this.finalElevatorCompleted = false;
    state.questProgress.elevatorRidden = false;
    updateQuestHud();
    this.finalElevatorStartedAt = 0;
    this.finalElevatorReadySince = 0;
    elevator.body.setVelocity(0, 0);
    elevator.body.body.reset(elevator.body.x, elevator.baseY);
    elevator.body.body.enable = true;
    elevator.lastY = elevator.baseY;
    elevator.deltaY = 0;
    this.positionFinalElevatorRoof();
    this.positionFinalElevatorVisuals();
    this.cameras.main.shakeEffect?.reset();
    this.hideFinalElevatorCredits();
    this.catFollowPlayerAfterElevator = false;
    if (resetGuide) this.resetCatGuideToFinalElevator();
  }

  showFinalElevatorCredits() {
    if (!this.finalElevatorCredits?.length) return;
    this.finalElevatorCredits.forEach((entry) => {
      entry.setVisible(true);
      this.tweens.killTweensOf(entry);
      entry.setAlpha(1);
    });
  }

  updateFinalElevatorCredits() {
    if (!this.finalElevatorCredits?.length || !this.finalElevator) return;
    const elevator = this.finalElevator;
    const progress = Phaser.Math.Clamp((elevator.baseY - elevator.body.y) / Math.max(1, elevator.baseY - elevator.topY), 0, 1);
    const fade = progress < 0.88 ? 1 : Phaser.Math.Clamp(1 - (progress - 0.88) / 0.12, 0, 1);
    this.finalElevatorCredits.forEach((entry) => {
      entry.setVisible(this.finalElevatorActive && fade > 0.02);
      entry.setAlpha(fade);
    });
  }

  fadeOutFinalElevatorCredits() {
    if (!this.finalElevatorCredits?.length) return;
    this.finalElevatorCredits.forEach((entry) => {
      this.tweens.killTweensOf(entry);
      this.tweens.add({
        targets: entry,
        alpha: 0,
        duration: 420,
        ease: "Sine.out",
        onComplete: () => entry.setVisible(false)
      });
    });
  }

  hideFinalElevatorCredits() {
    this.finalElevatorCredits?.forEach((entry) => {
      this.tweens.killTweensOf(entry);
      entry.setAlpha(0);
      entry.setVisible(false);
    });
  }

  resetCatGuideToFinalElevator() {
    const elevatorStopIndex = this.catGuidePath?.findIndex((stop) => stop.kind === "e") ?? -1;
    if (elevatorStopIndex < 0) return;
    this.catGuideTravel = null;
    this.catTransition = null;
    this.catGuideIndex = elevatorStopIndex;
    this.positionFinalElevatorCat();
  }

  positionFinalElevatorVisuals() {
    const elevator = this.finalElevator;
    if (!elevator) return;
    this.positionFinalElevatorRoof();
    elevator.visuals.forEach(({ sprite, offsetX, offsetY }) => {
      sprite.setPosition(elevator.body.x + offsetX, elevator.body.y + offsetY);
    });
  }

  positionFinalElevatorRoof() {
    const elevator = this.finalElevator;
    if (!elevator?.roofBody?.body) return;
    elevator.roofBody.body.reset(elevator.body.x + elevator.roofOffsetX, elevator.body.y + elevator.roofOffsetY);
    elevator.roofBody.body.enable = true;
  }

  carryFinalElevatorPlayer(deltaY) {
    if (!this.player?.body || !Number.isFinite(deltaY) || deltaY === 0) return;
    this.player.y += deltaY;
    this.player.body.updateFromGameObject();
  }

  positionFinalElevatorCat() {
    const elevator = this.finalElevator;
    if (!elevator) return;
    if (this.cat) {
      this.setCatGuidePosition(
        elevator.body.x + elevator.catOffsetX,
        elevator.body.body.y - 2 - CAT_GUIDE_PLATFORM_Y
      );
      this.cat.setFlipX(this.player.x < this.cat.x);
      this.cat.play("cat-idle", true);
    }
  }

  constrainPlayerToActiveFinalElevator() {
    const elevator = this.finalElevator;
    if (!this.finalElevatorActive || !elevator?.body?.body || !this.player?.body) return;
    const platformBody = elevator.body.body;
    const body = this.player.body;
    const closeEnoughVertically =
      body.y + body.height > platformBody.y - 190 &&
      body.y < platformBody.y + platformBody.height + 42;
    if (!closeEnoughVertically) return;

    const minX = platformBody.x + 8 + body.width / 2;
    const maxX = platformBody.x + platformBody.width - 8 - body.width / 2;
    const clampedX = Phaser.Math.Clamp(this.player.x, minX, maxX);
    if (Math.abs(clampedX - this.player.x) < 0.01) return;
    this.player.x = clampedX;
    if ((clampedX <= minX && body.velocity.x < 0) || (clampedX >= maxX && body.velocity.x > 0)) {
      this.player.setVelocityX(0);
    }
    this.player.body.updateFromGameObject();
  }

  shouldResetFinalElevatorAfterFall({ allowCompleted = false } = {}) {
    const elevator = this.finalElevator;
    const canReset = this.finalElevatorActive || (allowCompleted && this.finalElevatorCompleted);
    if (!canReset || !elevator?.body?.body || !this.player?.body || !state.running || state.won) return false;
    if (this.isPlayerOnFinalElevator()) return false;
    if (!this.player.body.blocked.down && !this.player.body.touching.down) return false;
    const playerBottom = this.player.body.y + this.player.body.height;
    const elevatorFloor = elevator.body.body.y;
    return playerBottom > elevatorFloor + TILE * 1.15;
  }

  updateElevatorSignBubble() {
    const elevator = this.finalElevator;
    const sign = elevator?.sign;
    if (this.elevatorSignBubble && sign) {
      this.elevatorSignBubble.update();
    }
    if (!sign || this.elevatorSignPromptShown || state.hasKey || !state.running || state.won) return;
    const passedSign = this.player.x > sign.x + 14;
    const closeVertically = Math.abs(this.player.y - sign.y) < 145;
    if (!passedSign || !closeVertically) return;
    this.showElevatorSignBubble();
  }

  showElevatorSignBubble() {
    const sign = this.finalElevator?.sign;
    if (!sign) return;
    this.elevatorSignPromptShown = true;
    this.elevatorSignBubble?.destroy(true);
    this.elevatorSignBubble = createWorldSpeechBubble(
      this,
      () => ({ x: sign.x, y: sign.y }),
      "KEY PLEASE",
      {
        width: 98,
        minHeight: 28,
        fontSize: 12,
        offsetY: -82,
        backgroundOpacity: 0.9
      }
    );
    this.time.delayedCall(2600, () => {
      if (!this.elevatorSignBubble) return;
      this.tweens.add({
        targets: this.elevatorSignBubble,
        alpha: 0,
        duration: 220,
        onComplete: () => {
          this.elevatorSignBubble?.destroy(true);
          this.elevatorSignBubble = null;
        }
      });
    });
  }

  updateBirdFlocks(time = 0, delta = 0) {
    const ambientBirdsEnabled = this.level.finalElevator || this.level.ambientBirds;
    if ((!ambientBirdsEnabled && !this.birdAttackFlocks?.length) || !state.running || state.won) return;
    if (ambientBirdsEnabled && !this.nextBirdFlockAt) this.scheduleNextBirdFlock(time);
    if (ambientBirdsEnabled && time >= this.nextBirdFlockAt) {
      this.spawnBirdFlock(time);
      this.scheduleNextBirdFlock(time);
    }

    const seconds = delta / 1000;
    this.birdFlockGroups = (this.birdFlockGroups || []).filter((flock) => {
      flock.x += flock.vx * seconds;
      flock.y += flock.vy * seconds;
      const age = Math.max(0, time - flock.startedAt);
      flock.birds = flock.birds.filter((bird) => {
        if (!bird?.active) return false;
        const wobbleX = Math.sin(age * 0.0022 + bird.phase) * bird.wobble;
        const wobbleY = Math.cos(age * 0.0028 + bird.phase * 0.7) * bird.wobble * 0.38;
        bird.x = flock.x + bird.formationX + wobbleX;
        bird.y = flock.y + bird.formationY + wobbleY;
        bird.rotation = Phaser.Math.Linear(bird.rotation, flock.rotation, 0.05);
        return true;
      });

      const camera = this.cameras.main;
      const outside =
        flock.x < camera.scrollX - 260 ||
        flock.x > camera.scrollX + VIEW_WIDTH + 260 ||
        flock.y < camera.scrollY - 160 ||
        flock.y > camera.scrollY + PLAY_HEIGHT - BIRD_FLOCK_BASE_MARGIN;
      if (!outside && flock.birds.length) return true;
      flock.birds.forEach((bird) => bird.destroy());
      return false;
    });
    this.birdAttackFlocks = (this.birdAttackFlocks || []).filter((flock) => {
      const target = flock.target;
      let speedFactor = 1;
      const targetPoint = target?.active && !target.getData("dying")
        ? { x: target.x, y: target.y - 16 }
        : flock.targetPoint;
      if (!flock.hitTriggered && targetPoint) {
        const distance = Phaser.Math.Distance.Between(flock.x, flock.y, targetPoint.x, targetPoint.y);
        const progress = 1 - Phaser.Math.Clamp(distance / (flock.startDistance || 1), 0, 1);
        speedFactor = Phaser.Math.Linear(1, BIRD_ATTACK_SPEED_MULTIPLIER, progress);
      }
      flock.vx = (flock.baseVx ?? flock.vx) * speedFactor;
      flock.vy = (flock.baseVy ?? flock.vy) * speedFactor;
      flock.x += flock.vx * seconds;
      flock.y += flock.vy * seconds;
      const age = Math.max(0, time - flock.startedAt);
      flock.birds = flock.birds.filter((bird) => {
        if (!bird?.active) return false;
        const wobbleX = Math.sin(age * 0.0022 + bird.phase) * bird.wobble;
        const wobbleY = Math.cos(age * 0.0028 + bird.phase * 0.7) * bird.wobble * 0.38;
        bird.x = flock.x + bird.formationX + wobbleX;
        bird.y = flock.y + bird.formationY + wobbleY;
        bird.rotation = Phaser.Math.Linear(bird.rotation, flock.rotation, 0.05);
        return true;
      });

      if (!flock.hitTriggered && target?.active && !target.getData("dying") && this.isEnemyVisibleOnScreen(target)) {
        const distance = Phaser.Math.Distance.Between(flock.x, flock.y, target.x, target.y - 16);
        if (distance < BIRD_ATTACK_HIT_RADIUS) {
          flock.hitTriggered = true;
          flock.vx = flock.baseVx ?? flock.vx;
          flock.vy = flock.baseVy ?? flock.vy;
          this.defeatEnemy(target);
          awardScore(300);
          updateHud();
        }
      }

      const camera = this.cameras.main;
      const outside =
        flock.x < camera.scrollX - 260 ||
        flock.x > camera.scrollX + VIEW_WIDTH + 260 ||
        flock.y < camera.scrollY - 160 ||
        flock.y > camera.scrollY + PLAY_HEIGHT + 160;
      if (!outside && flock.birds.length) return true;
      flock.birds.forEach((bird) => bird.destroy());
      return false;
    });
    this.birdFlocks = this.birdFlockGroups.flatMap((flock) => flock.birds);
  }

  scheduleNextBirdFlock(time = 0) {
    const delayRange = this.finalElevatorActive ? BIRD_ELEVATOR_DELAY : BIRD_NORMAL_DELAY;
    this.nextBirdFlockAt = time + Phaser.Math.Between(...delayRange);
  }

  spawnBirdFlock(time = 0) {
    const birdSprite = this.getBirdSpriteKey();
    const birdAnimation = this.getBirdAnimationKey(birdSprite);
    if (!this.textures.exists(birdSprite) || !this.anims.exists(birdAnimation)) return;
    const camera = this.cameras.main;
    const count = Phaser.Math.Between(BIRD_MIN_FLOCK_SIZE, BIRD_MAX_FLOCK_SIZE);
    const fromLeft = Phaser.Math.Between(0, 1) === 0;
    const directionX = fromLeft ? 1 : -1;
    const baseX = camera.scrollX + (fromLeft ? -120 : VIEW_WIDTH + 120);
    const minY = camera.scrollY + BIRD_FLOCK_MIN_Y;
    const maxY = camera.scrollY + Math.max(BIRD_FLOCK_MIN_Y + 36, PLAY_HEIGHT - BIRD_FLOCK_BASE_MARGIN);
    const baseY = Phaser.Math.Between(minY, maxY);
    const baseSpeed = Phaser.Math.Between(96, 168) * directionX;
    const baseVy = Phaser.Math.Between(-42, -8);
    const flock = {
      x: baseX,
      y: baseY,
      vx: baseSpeed,
      vy: baseVy,
      startedAt: time,
      rotation: Phaser.Math.Clamp(Math.atan2(baseVy, Math.abs(baseSpeed)) * 0.18, -0.16, 0.16) * directionX,
      birds: []
    };
    if (this.level.birdSfx && Phaser.Math.FloatBetween(0, 1) < MAGPIE_AMBIENT_SFX_CHANCE) {
      this.playLevelSfx(this.level.birdSfx, MAGPIE_AMBIENT_SFX_VOLUME);
    }

    for (let index = 0; index < count; index += 1) {
      const bird = this.add.sprite(
        baseX,
        baseY,
        birdSprite,
        Phaser.Math.Between(0, 3)
      );
      bird.setScale(Phaser.Math.FloatBetween(0.055, 0.088) * this.getBirdScaleMultiplier());
      bird.setDepth(BIRD_DEPTH);
      bird.setAlpha(Phaser.Math.FloatBetween(0.58, 0.86));
      bird.setFlipX(directionX < 0);
      bird.play(birdAnimation, true);
      bird.formationX = Phaser.Math.Between(-74, 74);
      bird.formationY = Phaser.Math.Between(-24, 24);
      bird.wobble = Phaser.Math.FloatBetween(2.2, 6.5);
      bird.phase = Phaser.Math.FloatBetween(0, Math.PI * 2);
      bird.rotation = flock.rotation;
      bird.x = flock.x + bird.formationX;
      bird.y = flock.y + bird.formationY;
      flock.birds.push(bird);
    }
    this.birdFlockGroups.push(flock);
    this.birdFlocks = this.birdFlockGroups.flatMap((entry) => entry.birds);
    this.nextBirdFlockAt = Math.max(this.nextBirdFlockAt || 0, time + 200);
  }

  updateDiveIndicatorBirds(time = 0, delta = 0) {
    if (!this.diveIndicatorBirds?.length) return;
    const seconds = delta / 1000;
    const birdAnimation = this.getBirdAnimationKey(this.getBirdSpriteKey());
    this.diveIndicatorBirds = this.diveIndicatorBirds.filter((bird) => {
      if (!bird?.active) return false;
      const stateName = bird.getData("state");
      if (stateName === "perched") {
        bird.setPosition(bird.getData("homeX"), bird.getData("homeY"));
        if (
          state.running &&
          this.player?.active &&
          Math.abs(this.player.x - bird.x) <= DIVE_INDICATOR_TRIGGER_DISTANCE &&
          Math.abs(this.player.y - bird.y) <= 160
        ) {
          const direction = bird.getData("direction") || 1;
          bird.setData("state", "flying");
          bird.setData("vx", direction * Phaser.Math.Between(150, 210));
          bird.setData("vy", Phaser.Math.Between(-86, -46));
          bird.setData("startedAt", time);
          bird.setFlipX(direction < 0);
          bird.setAngle(0);
          bird.play(birdAnimation, true);
          if (this.level.birdSfx) this.playLevelSfx(this.level.birdSfx, MAGPIE_AMBIENT_SFX_VOLUME);
        }
        return true;
      }

      const age = time - (bird.getData("startedAt") || time);
      const direction = bird.getData("direction") || 1;
      const vx = bird.getData("vx") || direction * 180;
      const vy = (bird.getData("vy") || -60) + age * 0.018;
      bird.x += vx * seconds;
      bird.y += vy * seconds;
      bird.rotation = Phaser.Math.Clamp(vy / Math.max(1, Math.abs(vx)) * 0.18, -0.18, 0.18) * direction;
      const camera = this.cameras.main;
      const outside =
        bird.x < camera.scrollX - 180 ||
        bird.x > camera.scrollX + VIEW_WIDTH + 180 ||
        bird.y < camera.scrollY - 180 ||
        bird.y > camera.scrollY + PLAY_HEIGHT + 120;
      if (!outside) return true;
      bird.destroy();
      return false;
    });
  }

  updateAmbientLeaves(time = 0, delta = 0) {
    const config = this.level.ambientLeaves;
    if (!config || !state.running || state.won || !this.textures.exists(config.sprite)) return;
    if (!this.nextAmbientLeafAt) this.nextAmbientLeafAt = time + Phaser.Math.Between(120, 280);
    if (time >= this.nextAmbientLeafAt && (this.ambientLeaves?.length || 0) < AUTUMN_LEAF_MAX_COUNT) {
      const burst = Phaser.Math.FloatBetween(0, 1) < (config.burstChance ?? 0.35) ? Phaser.Math.Between(2, 4) : 1;
      for (let index = 0; index < burst; index += 1) this.spawnAmbientLeaf(time + index * 18);
      this.nextAmbientLeafAt = time + Phaser.Math.Between(config.minDelay || 160, config.maxDelay || 420);
    }

    const seconds = delta / 1000;
    const camera = this.cameras.main;
    this.ambientLeaves = (this.ambientLeaves || []).filter((entry) => {
      const leaf = entry.leaf;
      if (!leaf?.active) return false;
      const ageMs = time - entry.startedAt;
      const ageSeconds = Math.max(0, ageMs / 1000);
      const gust = Math.sin(ageSeconds * entry.gustFrequency + entry.phase) * entry.gustStrength;
      const curl = Math.sin(ageSeconds * entry.curlFrequency + entry.phase * 0.7) * entry.curlStrength;

      leaf.x += (entry.vx + gust) * seconds;
      leaf.y += (entry.vy + curl) * seconds;
      leaf.rotation += entry.spin * seconds;

      const outside =
        leaf.x < camera.scrollX - 220 ||
        leaf.x > camera.scrollX + VIEW_WIDTH + 260 ||
        leaf.y > camera.scrollY + PLAY_HEIGHT + 180 ||
        leaf.y < camera.scrollY - 260;
      if (!outside) return true;
      leaf.destroy();
      return false;
    });
  }

  createDiveFieldLeaves() {
    const config = this.level.ambientLeaves;
    const field = config?.diveField;
    if (!field || !this.textures.exists(config.sprite)) return;
    this.clearDiveFieldLeaves();
    const count = field.count ?? DIVE_FIELD_LEAF_COUNT;
    for (let index = 0; index < count; index += 1) {
      const leaf = this.add.sprite(
        Phaser.Math.FloatBetween(field.xMin, field.xMax),
        Phaser.Math.FloatBetween(field.yMin, field.yMax),
        config.sprite,
        Phaser.Math.Between(0, 2)
      );
      const scale = Phaser.Math.FloatBetween(0.046, 0.088);
      const mirrored = Phaser.Math.Between(0, 1) === 1 ? -1 : 1;
      leaf.setScale(scale * mirrored, scale * (Phaser.Math.Between(0, 1) === 1 ? -1 : 1));
      leaf.setFlipX(Phaser.Math.Between(0, 1) === 1);
      leaf.setFlipY(Phaser.Math.Between(0, 1) === 1);
      leaf.setDepth(Phaser.Math.FloatBetween(AUTUMN_LEAF_MIN_DEPTH, AUTUMN_LEAF_MAX_DEPTH));
      leaf.setAlpha(Phaser.Math.FloatBetween(0.42, 0.84));
      leaf.setAngle(Phaser.Math.Between(0, 359));
      this.diveFieldLeaves.push({
        leaf,
        field,
        vx: Phaser.Math.FloatBetween(DIVE_FIELD_LEAF_MIN_SPEED_X, DIVE_FIELD_LEAF_MAX_SPEED_X),
        vy: Phaser.Math.FloatBetween(DIVE_FIELD_LEAF_MIN_SPEED_Y, DIVE_FIELD_LEAF_MAX_SPEED_Y),
        spin: Phaser.Math.FloatBetween(-3.4, 3.4),
        phase: Phaser.Math.FloatBetween(0, Math.PI * 2),
        gustFrequency: Phaser.Math.FloatBetween(1.2, 3.4),
        gustStrength: Phaser.Math.FloatBetween(10, 42),
        curlFrequency: Phaser.Math.FloatBetween(2.6, 5.8),
        curlStrength: Phaser.Math.FloatBetween(8, 32)
      });
    }
  }

  clearDiveFieldLeaves() {
    this.diveFieldLeaves?.forEach((entry) => entry.leaf?.destroy?.());
    this.diveFieldLeaves = [];
  }

  updateDiveFieldLeaves(time = 0, delta = 0) {
    if (!this.diveFieldLeaves?.length || state.won) return;
    const seconds = delta / 1000;
    this.diveFieldLeaves = this.diveFieldLeaves.filter((entry) => {
      const leaf = entry.leaf;
      if (!leaf?.active) return false;
      const ageSeconds = Math.max(0, time / 1000);
      const gust = Math.sin(ageSeconds * entry.gustFrequency + entry.phase) * entry.gustStrength;
      const curl = Math.sin(ageSeconds * entry.curlFrequency + entry.phase * 0.7) * entry.curlStrength;
      leaf.x += (entry.vx + gust) * seconds;
      leaf.y += (entry.vy + curl) * seconds;
      leaf.rotation += entry.spin * seconds;

      const field = entry.field;
      if (leaf.x > field.xMax + 90) {
        leaf.x = field.xMin - Phaser.Math.Between(20, 90);
        leaf.y = Phaser.Math.FloatBetween(field.yMin, field.yMax);
      }
      if (leaf.y > field.yMax + 80) {
        leaf.y = field.yMin - Phaser.Math.Between(10, 70);
        leaf.x = Phaser.Math.FloatBetween(field.xMin, field.xMax);
      }
      return true;
    });
  }

  spawnAmbientLeaf(startedAt = 0) {
    const config = this.level.ambientLeaves;
    const camera = this.cameras.main;
    const fromLeft = Phaser.Math.FloatBetween(0, 1) > 0.18;
    const x = camera.scrollX + (fromLeft ? Phaser.Math.Between(-170, -34) : Phaser.Math.Between(20, VIEW_WIDTH - 40));
    const y = camera.scrollY + Phaser.Math.Between(-130, Math.max(-120, Math.floor(PLAY_HEIGHT * 0.42)));
    const leaf = this.add.sprite(x, y, config.sprite, Phaser.Math.Between(0, 2));
    const scale = Phaser.Math.FloatBetween(0.048, 0.09);
    const mirrored = Phaser.Math.Between(0, 1) === 1 ? -1 : 1;
    leaf.setScale(scale * mirrored, scale * (Phaser.Math.Between(0, 1) === 1 ? -1 : 1));
    leaf.setFlipX(Phaser.Math.Between(0, 1) === 1);
    leaf.setFlipY(Phaser.Math.Between(0, 1) === 1);
    leaf.setDepth(Phaser.Math.FloatBetween(AUTUMN_LEAF_MIN_DEPTH, AUTUMN_LEAF_MAX_DEPTH));
    leaf.setAlpha(Phaser.Math.FloatBetween(0.45, 0.82));
    leaf.setAngle(Phaser.Math.Between(0, 359));
    this.ambientLeaves.push({
      leaf,
      startedAt,
      vx: Phaser.Math.FloatBetween(78, 148),
      vy: Phaser.Math.FloatBetween(28, 72),
      spin: Phaser.Math.FloatBetween(-3.8, 3.8),
      phase: Phaser.Math.FloatBetween(0, Math.PI * 2),
      gustFrequency: Phaser.Math.FloatBetween(2.1, 4.6),
      gustStrength: Phaser.Math.FloatBetween(16, 58),
      curlFrequency: Phaser.Math.FloatBetween(3.5, 7.2),
      curlStrength: Phaser.Math.FloatBetween(16, 46)
    });
  }

  updateFinishZone() {
    const zone = this.level.finishZone;
    if (!zone || !this.player || !state.running || state.won) return;
    if (this.player.x >= zone.x && this.player.y >= zone.y) {
      this.completeLevel();
    }
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
    this.catFollowPlayerAfterElevator = false;
    this.nextCatMeowAt = this.time.now + Phaser.Math.Between(CAT_MEOW_MIN_DELAY / 2, CAT_MEOW_MAX_DELAY);
    const spawnRun = this.findGuidePlatformRun(this.spawnPoint.x, this.spawnPoint.y);
    if (spawnRun) {
      const x = this.getCatGuideXInRun(this.spawnPoint.x + CAT_START_OFFSET, spawnRun);
      this.setCatGuidePosition(x, this.getCatGuideY(spawnRun));
    }
    this.cat.play("cat-idle", true);
  }

  updateCatNpc(time = 0, delta = 0) {
    if (!this.cat || !this.cat.active || !this.cat.visible) return;
    if (this.finalElevatorActive) {
      this.cat.setVelocity(0, 0);
      this.cat.setAcceleration(0, 0);
      this.cat.play("cat-idle", true);
      return;
    }
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
      this.updateCatGuideNpc(time, delta);
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
        if (!["g", "j", "b", "k", "e", "d"].includes(cell)) return;
        const markerX = columnIndex * TILE + TILE / 2;
        const elevatorCenterX = cell === "e" && this.level.finalElevator
          ? (this.level.finalElevator.startColumn + this.level.finalElevator.widthTiles / 2) * TILE
          : markerX;
        const itemY = rowIndex * TILE + TILE / 2;
        const run = this.findGuidePlatformRun(elevatorCenterX, itemY) || this.findGuidePlatformRun(markerX, itemY);
        stops.push({
          kind: cell,
          row: rowIndex,
          column: columnIndex,
          x: run
            ? (cell === "e" ? this.getCatGuideXInRun(elevatorCenterX, run) : this.getCatGuideXBesideItem(markerX, run, cell))
            : elevatorCenterX,
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

  updateCatGuideNpc(time = 0, delta = 0) {
    if (this.catFollowPlayerAfterElevator || this.level.catFollowPlayer) {
      this.updateCatFollowPlayerAfterElevator(time, delta);
      return;
    }

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
    const elevatorIndex = this.catGuidePath.findIndex((stop) => stop.kind === "e");
    const doorIndex = this.catGuidePath.findIndex((stop) => stop.kind === "d");

    if (!state.hasAcornBasket && basketIndex >= 0) return basketIndex;
    if (!state.hasKey && keyIndex >= 0) return keyIndex;
    if (this.level.finalElevator && !this.finalElevatorCompleted && elevatorIndex >= 0) return elevatorIndex;
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

  updateCatFollowPlayerAfterElevator(time = 0, delta = 0) {
    if (!this.cat || !this.player) return;
    this.finishCatGuideTravel();
    const playerRun = this.getCatFollowSurfaceRun() || this.getCatGuideRunAt(this.cat.x, this.cat.y);
    if (!playerRun) {
      this.playCatGuideIdle();
      return;
    }

    const followOffset = this.player.flipX ? 70 : -70;
    const targetX = this.getCatGuideXInRun(this.player.x + followOffset, playerRun);
    const targetY = this.getCatGuideY(playerRun);
    const distanceX = targetX - this.cat.x;
    const distanceY = targetY - this.cat.y;
    const step = CAT_RUN_SPEED * Math.max(0, delta / 1000);
    const playerVelocityX = this.player.body?.velocity.x ?? 0;
    const playerMoving = Math.abs(playerVelocityX) > 12;

    if (Math.abs(distanceX) < 14 && Math.abs(distanceY) < 18) {
      this.setCatGuidePosition(targetX, targetY);
      if (playerMoving) {
        this.cat.setFlipX(playerVelocityX < 0);
        this.cat.play("cat-run", true);
      } else {
        this.cat.setFlipX(this.player.x < this.cat.x);
        this.cat.play("cat-idle", true);
        this.maybeShowCatMeow();
      }
      return;
    }

    const nextX = Math.abs(distanceX) <= step ? targetX : this.cat.x + Math.sign(distanceX) * step;
    const nextY = Math.abs(distanceY) <= step ? targetY : this.cat.y + Math.sign(distanceY) * Math.min(step, Math.abs(distanceY));
    this.setCatGuidePosition(nextX, nextY);
    this.cat.setFlipX(distanceX < 0);
    this.cat.play("cat-run", true);
  }

  getCatFollowSurfaceRun() {
    if (this.finalElevatorCompleted && this.isPlayerOnFinalElevator()) {
      const body = this.finalElevator?.body?.body;
      if (body) {
        return {
          startX: body.x,
          endX: body.x + body.width,
          topY: body.y,
          rowIndex: Math.floor(body.y / TILE),
          moving: false,
          speed: 0
        };
      }
    }

    const footY = this.player.body?.bottom ?? this.player.y;
    return this.platformRuns
      .filter((run) => {
        const withinRun = this.player.x >= run.startX - 24 && this.player.x <= run.endX + 24;
        const nearFeet = run.topY >= footY - 28 && run.topY <= footY + 52;
        return withinRun && nearFeet;
      })
      .sort((a, b) => Math.abs(a.topY - footY) - Math.abs(b.topY - footY))[0] || this.findGuidePlatformRun(this.player.x, this.player.y);
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
      if (!enemy.active || enemy.getData("dying")) {
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
    if (this.isItemPromptActive()) return;
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
    if (!isMusicEnabled()) {
      if (this.bgm?.isPlaying) this.bgm.stop();
      this.stopAmbientMusic({ destroy: false });
      return;
    }
    const soundtrack = this.level.soundtrack || "bgm";
    const volume = this.getSoundtrackVolume(soundtrack, 0.35);
    try {
      this.resumeAudioContext();
      if (this.bgm?.isPlaying && this.bgm.key === soundtrack) {
        this.bgm.setVolume(volume);
        this.startAmbientMusic();
        return;
      }
      this.sound.stopAll();
      if (this.bgm && this.bgm.key === soundtrack) {
        this.bgm.setVolume(volume);
        this.bgm.play();
        this.startAmbientMusic();
        return;
      }
      if (this.bgm) this.bgm.destroy();
      this.bgm = this.sound.add(soundtrack, { loop: true, volume });
      this.bgm.play();
      this.startAmbientMusic();
    } catch (_error) {
      this.bgm = null;
      this.ambientBgm = null;
    }
  }

  startAmbientMusic() {
    if (!isMusicEnabled()) {
      this.stopAmbientMusic({ destroy: false });
      return;
    }
    const soundtrack = this.level?.ambientSoundtrack;
    if (!soundtrack) {
      this.stopAmbientMusic({ destroy: true });
      return;
    }
    const volume = this.level.ambientVolume ?? this.getSoundtrackVolume(soundtrack, 0.18);
    try {
      if (this.ambientBgm?.isPlaying && this.ambientBgm.key === soundtrack) {
        this.ambientBgm.setVolume(volume);
        return;
      }
      if (this.ambientBgm && this.ambientBgm.key !== soundtrack) {
        this.ambientBgm.destroy();
        this.ambientBgm = null;
      }
      this.ambientBgm = this.ambientBgm || this.sound.add(soundtrack, { loop: true, volume });
      this.ambientBgm.setVolume(volume);
      this.ambientBgm.play();
    } catch (_error) {
      this.ambientBgm = null;
    }
  }

  stopAmbientMusic({ destroy = false } = {}) {
    if (this.ambientBgm?.isPlaying) this.ambientBgm.stop();
    if (destroy && this.ambientBgm) {
      this.ambientBgm.destroy();
      this.ambientBgm = null;
    }
  }

  playLevelSfx(key, volume = 0.6) {
    if (!isSfxEnabled()) return;
    if (!key || !this.cache.audio.exists(key)) return;
    try {
      this.resumeAudioContext();
      this.sound.play(key, { volume });
    } catch (_error) {
      // Ignore SFX failures so environmental events never interrupt gameplay.
    }
  }

  startMenuMusic() {
    if (!isMusicEnabled()) {
      if (this.bgm?.isPlaying) this.bgm.stop();
      this.stopAmbientMusic({ destroy: true });
      return;
    }
    try {
      this.resumeAudioContext();
      if (this.bgm?.isPlaying && this.bgm.key === "bgm-menu") {
        this.stopAmbientMusic({ destroy: true });
        return;
      }
      this.sound.stopAll();
      this.stopAmbientMusic({ destroy: true });
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
    if (!isMusicEnabled()) return;
    const volume = this.getSoundtrackVolume(track.key, 0.32);
    const play = () => {
      this.resumeAudioContext();
      this.sound.stopAll();
      this.stopAmbientMusic({ destroy: true });
      if (this.bgm && this.bgm.key !== track.key) {
        this.bgm.destroy();
        this.bgm = null;
      }
      this.bgm = this.bgm || this.sound.add(track.key, { loop: true, volume });
      this.bgm.setVolume(volume);
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

  applyAudioSettings() {
    if (!isSfxEnabled()) this.stopDiveWindSfx();
    if (!isMusicEnabled()) {
      if (this.bgm?.isPlaying) this.bgm.stop();
      this.stopAmbientMusic({ destroy: false });
      return;
    }
    if (this.levelReady && state.running && !state.won) {
      this.startMusic();
    } else if (!this.levelReady && (!hud.mainMenu.hidden || !hud.menuPanel.hidden)) {
      this.startMenuMusic();
    }
  }

  registerAudioLifecycle() {
    this.unregisterAudioLifecycle();

    this.handlePageHidden = () => {
      this.wasMusicPlayingBeforeHidden =
        this.wasMusicPlayingBeforeHidden || Boolean(this.bgm?.isPlaying || this.ambientBgm?.isPlaying);
      this.stopGameAudio();
    };

    this.handlePageVisible = () => {
      if (!this.wasMusicPlayingBeforeHidden) return;
      this.resumeAudioContext();
      if (this.levelReady && state.running && !state.won) {
        this.startMusic();
      } else if (!this.levelReady && (!hud.mainMenu.hidden || !hud.menuPanel.hidden)) {
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

  updateDomSpeechBubbles() {
    this.domSpeechBubbles?.forEach((bubble) => bubble?.update?.());
  }

  clearDomSpeechBubbles() {
    const bubbles = [...(this.domSpeechBubbles || [])];
    bubbles.forEach((bubble) => bubble?.destroy?.());
    this.domSpeechBubbles = [];
    hud.speechLayer?.replaceChildren();
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
    this.mysteriousManSpeechBubble?.destroy(true);
    this.mysteriousManSpeechBubble = null;
    this.elevatorSignBubble?.destroy(true);
    this.elevatorSignBubble = null;
    this.clearDomSpeechBubbles();
    this.cancelBirdAttackCameraZoom();
    this.cancelDiveCameraZoom();
    this.clearFinalElevatorCredits();
    this.birdFlocks?.forEach((bird) => bird?.destroy?.());
    this.birdFlocks = [];
    this.birdFlockGroups = [];
    this.birdAttackFlocks?.forEach((flock) => flock.birds?.forEach((bird) => bird?.destroy?.()));
    this.birdAttackFlocks = [];
    this.distantColossus?.object?.destroy?.();
    this.distantColossus = null;
    this.clearDiveIndicatorBirds();
    this.clearDiveFieldLeaves();
    this.stopDiveWindSfx();
    this.clearDiveWindLines();
    this.ambientLeaves?.forEach((entry) => entry.leaf?.destroy?.());
    this.ambientLeaves = [];
    this.nextAmbientLeafAt = 0;
    this.gabiActionRestoreTimer?.remove?.(false);
    this.gabiActionRestoreTimer = null;
    this.gabiActionUntil = 0;
    this.clearOldLadyNpc();
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.wingPromptActive = false;
    state.hasBirdControl = false;
    this.releaseBasketPromptControlLock();
    if (this.timerEvent) {
      this.timerEvent.remove(false);
      this.timerEvent = null;
    }
  }

  stopGameAudio() {
    this.stopDiveWindSfx();
    if (this.bgm?.isPlaying) this.bgm.stop();
    if (this.ambientBgm?.isPlaying) this.ambientBgm.stop();
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
    state.levelGems += 1;
    awardScore(100);
    this.playLevelSfx(COIN_PICKUP_SFX_KEY, 0.44);
    updateHud();
    this.maybeShowPickupSpeech("coin");
  }

  collectHeart(_player, heart) {
    if (this.time.now < (heart.getData("armedAt") || 0)) return;
    if (state.lives >= MAX_LIVES) return;
    heart.disableBody(true, true);
    state.lives = Math.min(MAX_LIVES, state.lives + 1);
    awardScore(150);
    this.playLevelSfx(HEART_PICKUP_SFX_KEY, 0.48);
    updateHud();
    this.maybeShowPickupSpeech("heart");
  }

  collectDoubleJump(_player, doubleJump) {
    doubleJump.disableBody(true, true);
    state.hasDoubleJump = true;
    awardScore(300);
    this.playLevelSfx(WING_PICKUP_SFX_KEY, 0.5);
    if (this.level.actionAbility === "command-birds") {
      state.hasBirdControl = true;
      this.lastBirdAttackAt = -Infinity;
      updateBirdCooldownHud(0);
    }
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
    this.playLevelSfx(MISC_PICKUP_SFX_KEY, 0.5);
    setItemPickupVisible(true, {
      name: "Lantern",
      instruction: "Its light cuts through the tunnel darkness. Press [ ENTER ] to continue.",
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
    this.playLevelSfx(MISC_PICKUP_SFX_KEY, 0.5);
    setItemPickupVisible(true, {
      name: "Acorn Basket",
      instruction: "Press [ ENTER ] to throw acorns.",
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
    this.playLevelSfx(KEY_PICKUP_SFX_KEY, 0.5);
    updateHud();
  }

  defeatEnemy(enemy) {
    if (!enemy?.active || enemy.getData("dying")) return;
    state.enemiesDefeated = Math.min(state.totalEnemies, state.enemiesDefeated + 1);
    this.playLevelSfx(KILL_SFX_KEY, 0.39);
    this.tryDropHeart(enemy.x, enemy.y);
    enemy.setData("dying", true);
    enemy.setVelocity(0, 0);
    enemy.setAcceleration(0, 0);
    enemy.body.enable = false;
    enemy.anims?.stop();
    const label = this.enemyLabels.get(enemy);
    if (label) label.setVisible(false);

    const originX = enemy.x;
    const flashTimer = this.time.addEvent({
      delay: 80,
      repeat: 11,
      callback: () => {
        if (!enemy.active) return;
        if (enemy.getData("deathTinted")) {
          enemy.clearTint();
          enemy.setData("deathTinted", false);
        } else {
          enemy.setTint(0xff2f2f);
          enemy.setData("deathTinted", true);
        }
      }
    });

    this.tweens.add({
      targets: enemy,
      x: { from: originX - 6, to: originX + 6 },
      duration: 58,
      yoyo: true,
      repeat: 8,
      ease: "Sine.inOut"
    });

    this.tweens.add({
      targets: enemy,
      alpha: 0,
      duration: 1000,
      ease: "Quad.in",
      onComplete: () => {
        flashTimer.remove(false);
        enemy.clearTint();
        enemy.disableBody(true, true);
      }
    });
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
    if (!state.running || enemy.getData("dying")) return;
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
    if (!state.running || !item.active || !enemy.active || enemy.getData("dying")) return;
    this.ricochetThrownItemFromEnemy(item, enemy);
    this.defeatEnemy(enemy);
    awardScore(350);
    updateHud();
  }

  hitAcorn(_player, acorn) {
    if (!state.running || this.isItemPromptActive() || acorn.getData("armed")) return;
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
    this.cancelBirdAttackCameraZoom();
    this.cancelDiveCameraZoom();
    state.lives -= 1;
    updateHud();
    this.cameras.main.shake(180, 0.012);
    if (state.lives <= 0) {
      this.showGameOverScreen({
        copy: "Gabi ran out of chances. The city was too demanding."
      });
      return;
    }
    state.timeLeft = Math.max(45, state.timeLeft);
    this.resetFinalElevator();
    this.resetMysteriousMan();
    this.resetPlayerToSpawn();
    this.showGabiSpeech(Phaser.Math.RND.pick(PICKUP_SPEECH_LINES.respawn));
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    this.resetGlideState();
    this.basketPromptActive = false;
    this.lanternPromptActive = false;
    this.wingPromptActive = false;
    setItemPickupVisible(false);
    this.releaseBasketPromptControlLock();
    this.thrownItems.clear(true, true);
    if (!state.hasKey) this.resetKeyReveal();
    this.resetCatNpc();
    this.createDiveIndicatorBirds();
  }

  enterDoor() {
    if (!state.running || !state.hasKey) return;
    if (this.level.finalElevator && !this.finalElevatorCompleted) return;
    this.completeLevel();
  }

  completeLevel() {
    if (!state.running || state.won) return;
    state.running = false;
    this.resetPlayerMotion({ freeze: true });
    this.setGabiAnimation("idle");
    if (this.timerEvent) this.timerEvent.remove(false);
    awardScore(state.levelGems === state.totalGems ? 1000 : 350);
    awardScore(state.timeLeft * 10);
    updateHud();
    if (state.levelIndex < LEVELS.length - 1) {
      this.advanceToNextLevel();
      return;
    }

    state.won = true;
    this.showGameOverScreen({
      copy: "Gabi cleared every route. Somehow, that counts as an achievement."
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
    this.stopAmbientMusic({ destroy: true });
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
      state.levelGems = 0;
      state.lives = 3;
    }
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.hasBirdControl = false;
    state.hasAcornBasket = false;
    state.hasLantern = false;
    state.totalEnemies = 0;
    state.enemiesDefeated = 0;
    state.questProgress = createQuestProgress();
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
    this.stopAmbientMusic({ destroy: true });
    this.scene.restart();
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game",
  width: VIEW_WIDTH,
  height: VIEW_HEIGHT,
  pixelArt: true,
  antialias: false,
  roundPixels: true,
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
  plugins: {
    scene: [
      { key: "SpinePlugin", plugin: getSpineRuntime()?.SpinePlugin, mapping: "spine" }
    ].filter((plugin) => Boolean(plugin.plugin))
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
hud.menuSettings.addEventListener("click", () => showSettingsPanel());
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
  scene.stopAmbientMusic?.({ destroy: true });
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
    button.disabled = !isMusicEnabled();
    button.addEventListener("click", () => {
      const scene = game.scene.getScene("PlayScene");
      if (!scene.scene.isActive()) return;
      scene.playMusicBoxTrack(track);
    });
    row.append(label, button);
    hud.menuPanelContent.appendChild(row);
  });
}

function createSettingsToggle(key, label, description) {
  const row = document.createElement("div");
  row.className = "settings-toggle-row";
  row.dataset.setting = key;

  const copy = document.createElement("div");
  copy.className = "settings-toggle-copy";
  const title = document.createElement("strong");
  title.textContent = label;
  const detail = document.createElement("span");
  detail.textContent = description;
  copy.append(title, detail);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "settings-toggle";
  button.addEventListener("click", () => {
    setAudioSetting(key, !state.audioSettings[key]);
  });

  row.append(copy, button);
  return row;
}

function updateAudioSettingsPanel() {
  hud.menuPanelContent
    ?.querySelectorAll(".settings-toggle-row")
    .forEach((row) => {
      const key = row.dataset.setting;
      const enabled = state.audioSettings?.[key] !== false;
      const button = row.querySelector(".settings-toggle");
      if (!button) return;
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = enabled ? "On" : "Off";
    });
}

function showSettingsPanel() {
  showMenuPanel("Settings", "Choose which audio layers should play. Your preferences are saved in this browser.", "settings");
  hud.menuPanelContent.append(
    createSettingsToggle("music", "Music", "Menu themes, level soundtracks, music box tracks, and ambient loops."),
    createSettingsToggle("sfx", "Sound Effects", "Pickups, attacks, dialogue sounds, impacts, and environmental effects.")
  );
  updateAudioSettingsPanel();
}

function showCreditsPanel() {
  showMenuPanel("Credits", "");
  hud.menuPanel.classList.add("credits-panel");
  const list = document.createElement("div");
  list.className = "credits-list";
  CREDITS_SECTIONS.forEach(([category, names]) => {
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
