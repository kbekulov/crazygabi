const TILE = 32;
const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const HUD_HEIGHT = 86;
const PLAY_HEIGHT = VIEW_HEIGHT - HUD_HEIGHT;
const TIME_LIMIT = 150;
const GABI_FRAME_WIDTH = 238;
const GABI_FRAME_HEIGHT = 238;
const GABI_SCALE = 0.34;
const PLATFORM_FRAME_WIDTH = 238;
const PLATFORM_FRAME_HEIGHT = 238;
const PLATFORM_SCALE = 0.28;
const PLATFORM_SEGMENT_WIDTH = PLATFORM_FRAME_WIDTH * PLATFORM_SCALE;
const ASSET_VERSION = "20260521-platform-strips";
const LEVEL = [
  "........................................................................",
  ".................a........................a......................a......",
  "............................................................####....k...",
  "........................................................................",
  ".............................................gg.........................",
  "........................................############....................",
  "........................................................................",
  ".......................gg.................................m.............",
  "...................#########......................############..........",
  "........................................................................",
  "....p..j..gg...................m..............................d.........",
  "###########.................############..................###########...",
  "........................................................................",
  ".................................gg.............a.......................",
  ".........................################...............................",
  "........................................................................",
  "########################...#############################################"
];

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
    this.load.image("para-sky", `./public/assets/paralax/parallax_forest_assets/00_sky_gradient.png?v=${ASSET_VERSION}`);
    this.load.image("para-far", `./public/assets/paralax/parallax_forest_assets/01_far_forest_tileable.png?v=${ASSET_VERSION}`);
    this.load.image("para-mid", `./public/assets/paralax/parallax_forest_assets/02_mid_forest_tileable.png?v=${ASSET_VERSION}`);
    this.load.image("para-near", `./public/assets/paralax/parallax_forest_assets/03_near_forest_trunks.png?v=${ASSET_VERSION}`);
    this.load.image("para-ground", `./public/assets/paralax/parallax_forest_assets/04_ground_foliage_tileable.png?v=${ASSET_VERSION}`);
  }

  create() {
    makeTextures(this);
    this.physics.world.gravity.y = 1150;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = LEVEL[0].length * TILE;
    this.levelHeight = LEVEL.length * TILE;

    this.createBackdrop();
    this.platforms = this.physics.add.staticGroup();
    this.platformVisuals = this.add.group();
    this.gems = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doubleJumps = this.physics.add.group({ allowGravity: false, immovable: true });
    this.enemies = this.physics.add.group({ allowGravity: true, immovable: false });
    this.acorns = this.physics.add.group({ allowGravity: false, immovable: true });
    this.keys = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doors = this.physics.add.staticGroup();
    this.enemyDirection = new Map();

    state.totalGems = 0;
    this.createAnimations();
    this.buildLevel();
    this.createPlayer();
    this.createInput();
    this.setupPhysics();

    this.cameras.main.setBounds(0, 0, this.levelWidth, this.levelHeight);
    this.cameras.main.setViewport(0, 0, VIEW_WIDTH, PLAY_HEIGHT);
    this.physics.world.setBounds(0, 0, this.levelWidth, this.levelHeight);
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
    const scale = PLAY_HEIGHT / 144;
    this.parallaxLayers = [
      { sprite: this.add.tileSprite(0, 0, VIEW_WIDTH / scale, 144, "para-sky"), speed: 0.03 },
      { sprite: this.add.tileSprite(0, 0, VIEW_WIDTH / scale, 144, "para-far"), speed: 0.12 },
      { sprite: this.add.tileSprite(0, 0, VIEW_WIDTH / scale, 144, "para-mid"), speed: 0.24 },
      { sprite: this.add.tileSprite(0, 0, VIEW_WIDTH / scale, 144, "para-near"), speed: 0.42 },
      { sprite: this.add.tileSprite(0, 0, VIEW_WIDTH / scale, 144, "para-ground"), speed: 0.58 }
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
      key: "gabi-hurt",
      frames: this.anims.generateFrameNumbers("gabi-sheet", { frames: [4, 5] }),
      frameRate: 6,
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
          const gem = this.gems.create(x, y, "gem");
          gem.setCircle(10, 6, 6);
          state.totalGems += 1;
          this.tweens.add({ targets: gem, y: y - 6, duration: 900, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "j") {
          const doubleJump = this.doubleJumps.create(x, y, "double-jump");
          doubleJump.setCircle(12, 4, 4);
          this.tweens.add({ targets: doubleJump, y: y - 8, duration: 720, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "m") {
          const enemy = this.enemies.create(x, y, "mischief");
          enemy.setBounce(0);
          enemy.setCollideWorldBounds(true);
          enemy.body.setSize(24, 22).setOffset(4, 8);
          this.enemyDirection.set(enemy, columnIndex % 2 ? -1 : 1);
        }
        if (cell === "a") {
          const acorn = this.acorns.create(x, y, "acorn");
          acorn.setDepth(1);
          acorn.setCircle(10, 6, 8);
          acorn.body.allowGravity = false;
          acorn.body.immovable = true;
          acorn.setData("homeX", x);
          acorn.setData("homeY", y);
          acorn.setData("armed", true);
          acorn.setData("nextDrop", 0);
          this.tweens.add({
            targets: acorn,
            angle: { from: -4, to: 4 },
            duration: 700 + columnIndex * 12,
            yoyo: true,
            repeat: -1,
            ease: "Sine.inOut"
          });
        }
        if (cell === "k") {
          const key = this.keys.create(x, y, "key");
          key.setCircle(12, 4, 5);
          this.tweens.add({ targets: key, angle: 8, duration: 650, yoyo: true, repeat: -1, ease: "Sine.inOut" });
        }
        if (cell === "d") this.doors.create(x, y, "door");
        if (cell === "p") this.spawnPoint = { x, y };
      });
    });
    this.createPlatformVisuals();
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

  addPlatformRun(startColumn, length, rowIndex) {
    const worldStart = startColumn * TILE;
    const worldWidth = length * TILE;
    const topY = rowIndex * TILE;
    const segments = Math.ceil(worldWidth / PLATFORM_SEGMENT_WIDTH);

    for (let index = 0; index < segments; index += 1) {
      const x = worldStart + index * PLATFORM_SEGMENT_WIDTH + PLATFORM_SEGMENT_WIDTH / 2;
      const platformFrame = Phaser.Math.Between(0, 2);
      const platform = this.add.image(x, topY + 22, "platform-strip", platformFrame);
      platform.setScale(PLATFORM_SCALE);
      platform.setDepth(2);
      this.platformVisuals.add(platform);

      if (Phaser.Math.Between(0, 100) < 68) {
        const fenceRoll = Phaser.Math.Between(0, 100);
        const fenceFrame = fenceRoll < 6 ? 2 : Phaser.Math.Between(0, 1);
        const fence = this.add.image(x, topY - 28, "platform-fence", fenceFrame);
        fence.setScale(PLATFORM_SCALE);
        fence.setDepth(Phaser.Math.Between(0, 1) ? 3 : 7);
        this.platformVisuals.add(fence);
      }
    }
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
      restart: Phaser.Input.Keyboard.KeyCodes.R
    });
  }

  setupPhysics() {
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.enemies, this.platforms);
    this.physics.add.collider(this.acorns, this.platforms, this.resetAcorn, null, this);
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
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
    this.startTimer();
  }

  update(time = 0) {
    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.scene.restart();
      return;
    }

    this.moveEnemies();
    this.updateAcorns(time);
    this.updateParallax();
    if (!state.running || state.won) return;

    const left = this.cursors.left.isDown || this.keysInput.left.isDown;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown;
    const jump = Phaser.Input.Keyboard.JustDown(this.cursors.up) || Phaser.Input.Keyboard.JustDown(this.keysInput.jump);
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

    if (onFloor) this.airJumpsUsed = 0;

    if (jump && onFloor) {
      this.player.setVelocityY(-510);
    } else if (jump && state.hasDoubleJump && this.airJumpsUsed < 1) {
      this.airJumpsUsed += 1;
      this.player.setVelocityY(-490);
      this.cameras.main.flash(80, 104, 220, 255, false);
    }

    if (this.player.y > this.levelHeight - 12) this.loseLife();
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
      this.setGabiAnimation("jump");
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

  updateAcorns(time) {
    this.acorns.children.iterate((acorn) => {
      if (!acorn || !acorn.active || !state.running || state.won) return;
      if (!acorn.getData("armed") || time < acorn.getData("nextDrop")) return;

      const horizontallyClose = Math.abs(this.player.x - acorn.x) < 170;
      const playerBelow = this.player.y > acorn.y + 20;
      const visibleAhead = acorn.x > this.cameras.main.scrollX - 48 && acorn.x < this.cameras.main.scrollX + VIEW_WIDTH + 48;

      if (horizontallyClose && playerBelow && visibleAhead) {
        acorn.setData("armed", false);
        acorn.body.allowGravity = true;
        acorn.body.immovable = false;
        acorn.setVelocity(Phaser.Math.Between(-24, 24), 40);
        acorn.setAngularVelocity(Phaser.Math.Between(-180, 180));
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
    acorn.body.immovable = true;
    acorn.setVelocity(0, 0);
    acorn.setAngularVelocity(0);
    acorn.setAngle(0);
    acorn.setPosition(acorn.getData("homeX"), acorn.getData("homeY"));
    acorn.setData("armed", true);
    acorn.setData("nextDrop", this.time.now + Phaser.Math.Between(900, 1700));
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
      setMessage("Try Again", "Gabi ran out of lives. Press Start for another run through the bright forest.", "Restart");
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
    setMessage("Level Clear", "You found the key and escaped. The next step is more forest rooms, ladders, and secret bonuses.", "Play Again");
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
