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
const PLATFORM_Y_OFFSET = 22;
const FENCE_Y_OFFSET = -52;
const PLATFORM_DEPTH = 2;
const FENCE_DEPTH = 1;
const ITEM_SCALE = 0.32;
const DOOR_SCALE = 0.34;
const ACORN_SCALE = 0.36;
const ROBOT_FRAME_WIDTH = 238;
const ROBOT_FRAME_HEIGHT = 238;
const ROBOT_SCALE = 0.22;
const ENEMY_NAMES = [
  "PEP LVL 2",
  "ECDD Manual Case Handling",
  "GSI BI First Attempt",
  "PEP LVL 1",
  "GCR Upload from Email to Pharos"
];
const ASSET_VERSION = "20260522-fence-depth";
const LEVEL_WIDTH_TILES = 148;
const LEVEL_HEIGHT_TILES = 18;
const LEVEL = createLevel();

function createLevel() {
  const rows = Array.from({ length: LEVEL_HEIGHT_TILES }, () => Array(LEVEL_WIDTH_TILES).fill("."));
  const put = (row, column, value) => {
    if (rows[row] && column >= 0 && column < LEVEL_WIDTH_TILES) rows[row][column] = value;
  };
  const run = (row, start, length, value = "#") => {
    for (let index = 0; index < length; index += 1) put(row, start + index, value);
  };

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

const state = {
  score: 0,
  gems: 0,
  totalGems: 0,
  lives: 3,
  timeLeft: TIME_LIMIT,
  hasKey: false,
  hasDoubleJump: false,
  running: false,
  won: false
};

const hud = {
  score: document.querySelector("#score"),
  gems: document.querySelector("#gems"),
  lives: document.querySelector("#lives"),
  time: document.querySelector("#time"),
  key: document.querySelector("#key"),
  message: document.querySelector("#message"),
  startButton: document.querySelector("#start-button")
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
    this.load.spritesheet("forest-tiles", `./public/assets/environment/forest-tileset.png?v=${ASSET_VERSION}`, {
      frameWidth: TILE,
      frameHeight: TILE
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
    this.load.image("parallax-city", `./public/assets/environment/paralax_city.png?v=${ASSET_VERSION}`);
    this.load.image("coin", `./public/assets/environment/golden-coin.png?v=${ASSET_VERSION}`);
    this.load.image("jump-item", `./public/assets/environment/double_jump_item.png?v=${ASSET_VERSION}`);
    this.load.image("door-key", `./public/assets/environment/door_key.png?v=${ASSET_VERSION}`);
    this.load.image("exit-door", `./public/assets/environment/exit_door.png?v=${ASSET_VERSION}`);
    this.load.image("falling-acorn", `./public/assets/environment/falling_acorn.png?v=${ASSET_VERSION}`);
    this.load.audio("bgm", `./public/assets/sound/bgm.mp3?v=${ASSET_VERSION}`);
  }

  create() {
    makeTextures(this);
    this.physics.world.gravity.y = 1150;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = LEVEL[0].length * TILE;
    this.levelHeight = LEVEL.length * TILE;

    this.createBackdrop();
    this.platforms = this.physics.add.staticGroup();
    this.movingPlatforms = this.physics.add.group({ allowGravity: false, immovable: true });
    this.movingPlatformRuns = [];
    this.platformVisuals = this.add.group();
    this.gems = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doubleJumps = this.physics.add.group({ allowGravity: false, immovable: true });
    this.enemies = this.physics.add.group({ allowGravity: true, immovable: false });
    this.acorns = this.physics.add.group({ allowGravity: false, immovable: true });
    this.keys = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doors = this.physics.add.staticGroup();
    this.enemyDirection = new Map();
    this.enemyLabels = new Map();
    this.enemyNames = [...ENEMY_NAMES];

    state.totalGems = 0;
    this.createAnimations();
    this.buildLevel();
    this.createPlayer();
    this.createInput();
    this.setupPhysics();
    this.registerAudioLifecycle();

    this.cameras.main.setBounds(0, 0, this.levelWidth, this.levelHeight);
    this.cameras.main.setViewport(0, 0, VIEW_WIDTH, PLAY_HEIGHT);
    this.physics.world.setBounds(0, 0, this.levelWidth, this.levelHeight + PLAY_HEIGHT);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.cameras.main.setDeadzone(170, 110);

    state.score = 0;
    state.gems = 0;
    state.lives = 3;
    state.timeLeft = TIME_LIMIT;
    state.hasKey = false;
    state.hasDoubleJump = false;
    state.running = false;
    state.won = false;
    updateHud();
  }

  createBackdrop() {
    const sourceHeight = 1314;
    const scale = PLAY_HEIGHT / sourceHeight;
    const tileWidth = Math.ceil(VIEW_WIDTH / scale);
    this.parallaxLayers = [
      {
        sprite: this.add.tileSprite(0, 0, tileWidth, sourceHeight, "parallax-city"),
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

  createAnimations() {
    if (this.anims.exists("gabi-idle")) return;
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

  buildLevel() {
    LEVEL.forEach((row, rowIndex) => {
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
          gem.setCircle(58, 61, 58);
          state.totalGems += 1;
          this.tweens.add({ targets: gem, y: y - 6, duration: 900, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "j") {
          const doubleJump = this.doubleJumps.create(x, y, "jump-item");
          doubleJump.setScale(ITEM_SCALE);
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
          acorn.setDepth(1);
          acorn.setCircle(70, 47, 52);
          acorn.body.allowGravity = false;
          acorn.body.immovable = false;
          acorn.setData("homeX", x);
          acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(300, 1800));
          acorn.setData("pace", Phaser.Math.Between(185, 295));
          acorn.setVelocity(0, 0);
        }
        if (cell === "k") {
          const key = this.keys.create(x, y, "door-key");
          key.setScale(ITEM_SCALE);
          key.setCircle(58, 59, 59);
          this.tweens.add({ targets: key, angle: 8, duration: 650, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "d") {
          const door = this.doors.create(x, y - 16, "exit-door");
          door.setScale(DOOR_SCALE);
          door.refreshBody();
        }
        if (cell === "p") this.spawnPoint = { x, y };
      });
    });
    this.createPlatformVisuals();
    this.createMovingPlatforms();
  }

  createPlatformVisuals() {
    LEVEL.forEach((row, rowIndex) => {
      let columnIndex = 0;
      while (columnIndex < row.length) {
        if (row[columnIndex] !== "#") {
          columnIndex += 1;
          continue;
        }

        const start = columnIndex;
        while (columnIndex < row.length && row[columnIndex] === "#") columnIndex += 1;
        this.addPlatformRun(start, columnIndex - start, rowIndex);
      }
    });
  }

  createMovingPlatforms() {
    LEVEL.forEach((row, rowIndex) => {
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
      const x = worldStart + index * PLATFORM_SEGMENT_WIDTH + PLATFORM_SEGMENT_WIDTH / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(x, topY + PLATFORM_Y_OFFSET, "platform-strip", platformFrame);
      platform.setScale(PLATFORM_SCALE);
      platform.setDepth(PLATFORM_DEPTH);
      this.platformVisuals.add(platform);

      if (Phaser.Math.Between(0, 100) < 68) {
        const fenceRoll = Phaser.Math.Between(0, 100);
        const fenceFrame = fenceRoll < 6 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(x, topY + FENCE_Y_OFFSET, "platform-fence", fenceFrame);
        fence.setScale(PLATFORM_SCALE);
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
      const offsetX = -worldWidth / 2 + index * PLATFORM_SEGMENT_WIDTH + PLATFORM_SEGMENT_WIDTH / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(centerX + offsetX, topY + PLATFORM_Y_OFFSET, "platform-strip", platformFrame);
      platform.setScale(PLATFORM_SCALE);
      platform.setDepth(PLATFORM_DEPTH);
      visuals.push({ sprite: platform, offsetX, offsetY: PLATFORM_Y_OFFSET - TILE / 2 });

      if (Phaser.Math.Between(0, 100) < 54) {
        const fenceFrame = Phaser.Math.Between(0, 100) < 5 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(centerX + offsetX, topY + FENCE_Y_OFFSET, "platform-fence", fenceFrame);
        fence.setScale(PLATFORM_SCALE);
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
    this.setGabiAnimation("idle");
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keysInput = this.input.keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
      jumpW: Phaser.Input.Keyboard.KeyCodes.W,
      restart: Phaser.Input.Keyboard.KeyCodes.R
    });
  }

  setupPhysics() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.movingPlatforms);
    this.physics.add.collider(this.enemies, this.platforms);
    this.physics.add.overlap(this.player, this.gems, this.collectGem, null, this);
    this.physics.add.overlap(this.player, this.doubleJumps, this.collectDoubleJump, null, this);
    this.physics.add.overlap(this.player, this.keys, this.collectKey, null, this);
    this.physics.add.overlap(this.player, this.enemies, this.hitEnemy, null, this);
    this.physics.add.overlap(this.player, this.acorns, this.hitAcorn, null, this);
    this.physics.add.overlap(this.player, this.doors, this.enterDoor, null, this);
  }

  startRun() {
    state.running = true;
    hud.message.hidden = true;
    this.player.setPosition(this.spawnPoint.x, this.spawnPoint.y);
    this.player.setVelocity(0, 0);
    this.airJumpsUsed = 0;
    this.usingWingJump = false;
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
    this.startMusic();
    this.startTimer();
  }

  update(time = 0) {
    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.scene.restart();
      return;
    }

    this.moveEnemies();
    this.updateEnemyLabels();
    this.updateMovingPlatforms();
    this.updateAcorns(time);
    this.updateParallax();
    if (!state.running || state.won) return;

    const left = this.cursors.left.isDown || this.keysInput.left.isDown;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown;
    const jump =
      Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jump) ||
      Phaser.Input.Keyboard.JustDown(this.keysInput.jumpW);
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

    if (this.player.y > this.levelHeight + 56) this.loseLife();
    this.updateGabiAnimation(left || right, onFloor);
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
    if (this.bgm?.isPlaying) return;
    this.resumeAudioContext();
    if (this.bgm) {
      this.bgm.play();
      return;
    }
    this.bgm = this.sound.add("bgm", { loop: true, volume: 0.35 });
    this.bgm.play();
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
      this.stopGameAudio();
    });
  }

  stopGameAudio() {
    if (this.bgm?.isPlaying) this.bgm.stop();
    if (this.sound?.context?.state === "running") this.sound.context.suspend();
  }

  resumeAudioContext() {
    if (this.sound?.context?.state === "suspended") this.sound.context.resume();
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

  collectKey(_player, key) {
    key.disableBody(true, true);
    state.hasKey = true;
    state.score += 500;
    updateHud();
  }

  hitEnemy(player, enemy) {
    if (!state.running) return;
    if (player.body.velocity.y > 120 && player.y < enemy.y - 5) {
      enemy.disableBody(true, true);
      const label = this.enemyLabels.get(enemy);
      if (label) label.setVisible(false);
      player.setVelocityY(-330);
      state.score += 250;
      updateHud();
      return;
    }
    this.loseLife();
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
    acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(450, 1800));
    acorn.setData("pace", Phaser.Math.Between(185, 295));
  }

  loseLife() {
    if (!state.running) return;
    state.lives -= 1;
    updateHud();
    this.cameras.main.shake(180, 0.012);
    if (state.lives <= 0) {
      state.running = false;
      this.setGabiAnimation("hurt");
      if (this.timerEvent) this.timerEvent.remove(false);
      setMessage("Try Again", "Gabi ran out of lives. Press Start for another run through the city.", "Restart");
      return;
    }
    state.timeLeft = Math.max(45, state.timeLeft);
    this.player.setPosition(this.spawnPoint.x, this.spawnPoint.y);
    this.player.setVelocity(0, 0);
  }

  enterDoor() {
    if (!state.running || !state.hasKey) return;
    state.won = true;
    state.running = false;
    if (this.timerEvent) this.timerEvent.remove(false);
    state.score += state.gems === state.totalGems ? 1000 : 350;
    state.score += state.timeLeft * 10;
    updateHud();
    setMessage("Level Clear", "You found the key and escaped. The next step is more city routes, ladders, and secret bonuses.", "Play Again");
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
  if (state.won || state.lives <= 0) {
    scene.scene.restart();
    window.setTimeout(() => game.scene.getScene("PlayScene").startRun(), 80);
    return;
  }
  scene.startRun();
});
