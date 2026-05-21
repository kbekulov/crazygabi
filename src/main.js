const TILE = 32;
const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const LEVEL = [
  "........................................................................",
  "..................a.................a..............a....................",
  "........................................................................",
  "....................................cc..................................",
  ".............................###.............gg.........................",
  "..............gg...........................######.......................",
  ".........#########...................m..................................",
  "..........................gg.....#########......................k.......",
  ".....................#########.............a..................#####.....",
  "....p.....gg.................................gg........................",
  "########.................m..............###########.....................",
  ".................##############..................a......................",
  ".............................................m...............d..........",
  ".......................gg...............###########################......",
  "...............################.........................................",
  "........................................................................",
  "########################...#############################################"
];

const state = {
  score: 0,
  gems: 0,
  totalGems: 0,
  lives: 3,
  hasKey: false,
  running: false,
  won: false
};

const hud = {
  score: document.querySelector("#score"),
  gems: document.querySelector("#gems"),
  lives: document.querySelector("#lives"),
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
  hud.score.textContent = String(state.score).padStart(4, "0");
  hud.gems.textContent = `${state.gems}/${state.totalGems}`;
  hud.lives.textContent = String(state.lives);
  hud.key.textContent = state.hasKey ? "Yes" : "No";
}

function makeCharacter(scene, key, hair, dress) {
  const g = scene.make.graphics({ x: 0, y: 0, add: false });
  g.fillStyle(0x000000, 0.18).fillEllipse(16, 30, 24, 6);
  g.fillStyle(dress).fillRoundedRect(9, 12, 14, 16, 4);
  g.fillStyle(0xffd6a3).fillRoundedRect(10, 5, 12, 11, 5);
  g.fillStyle(hair).fillCircle(16, 7, 7).fillRect(9, 7, 14, 5);
  g.fillStyle(0x17130a).fillRect(13, 9, 2, 2).fillRect(19, 9, 2, 2);
  g.fillStyle(0xffe07a).fillRect(8, 14, 4, 6).fillRect(21, 14, 4, 6);
  g.fillStyle(0x40251b).fillRect(10, 27, 5, 4).fillRect(19, 27, 5, 4);
  g.generateTexture(key, 32, 32);
  g.destroy();
}

function makeTextures(scene) {
  const g = scene.make.graphics({ x: 0, y: 0, add: false });

  g.fillStyle(0x4e5e50).fillRect(0, 0, TILE, TILE);
  g.fillStyle(0x8b734b).fillRect(0, 5, TILE, TILE - 5);
  g.fillStyle(0xb6975c).fillRect(0, 0, TILE, 7);
  g.lineStyle(2, 0x3d3328, 1).strokeRect(0, 0, TILE, TILE);
  g.generateTexture("tile-ground", TILE, TILE);
  g.clear();

  g.fillStyle(0x72d6c9).fillTriangle(16, 2, 29, 17, 16, 31).fillTriangle(16, 2, 3, 17, 16, 31);
  g.fillStyle(0xe9fff6, 0.82).fillTriangle(16, 4, 23, 16, 16, 29);
  g.generateTexture("gem", 32, 32);
  g.clear();

  g.fillStyle(0xf9d36c).fillRect(7, 14, 14, 6).fillCircle(8, 17, 6);
  g.fillStyle(0x4f3320).fillCircle(8, 17, 2).fillRect(19, 18, 8, 3).fillRect(24, 20, 3, 5);
  g.generateTexture("key", 32, 32);
  g.clear();

  g.fillStyle(0x633a2e).fillRoundedRect(5, 2, 22, 30, 4);
  g.fillStyle(0x2a1715).fillRoundedRect(9, 7, 14, 25, 3);
  g.fillStyle(0xf9d36c).fillCircle(22, 17, 2);
  g.generateTexture("door", 32, 32);
  g.clear();

  g.fillStyle(0x20171a).fillEllipse(16, 21, 26, 16);
  g.fillStyle(0xb94337).fillEllipse(16, 15, 22, 17);
  g.fillStyle(0xffffff).fillCircle(12, 12, 3).fillCircle(20, 12, 3);
  g.fillStyle(0x181818).fillCircle(12, 12, 1).fillCircle(20, 12, 1);
  g.fillStyle(0xf9d36c).fillRect(6, 24, 7, 4).fillRect(19, 24, 7, 4);
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

  makeCharacter(scene, "gabi", 0x7d3c35, 0xf27869);
  g.destroy();
}

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {}

  create() {
    makeTextures(this);
    this.physics.world.gravity.y = 1150;
    this.spawnPoint = { x: 96, y: 120 };
    this.levelWidth = LEVEL[0].length * TILE;
    this.levelHeight = LEVEL.length * TILE;

    this.createBackdrop();
    this.platforms = this.physics.add.staticGroup();
    this.gems = this.physics.add.group({ allowGravity: false, immovable: true });
    this.enemies = this.physics.add.group({ allowGravity: true, immovable: false });
    this.acorns = this.physics.add.group({ allowGravity: false, immovable: true });
    this.keys = this.physics.add.group({ allowGravity: false, immovable: true });
    this.doors = this.physics.add.staticGroup();
    this.enemyDirection = new Map();

    state.totalGems = 0;
    this.buildLevel();
    this.createPlayer();
    this.createInput();
    this.setupPhysics();

    this.cameras.main.setBounds(0, 0, this.levelWidth, this.levelHeight);
    this.physics.world.setBounds(0, 0, this.levelWidth, this.levelHeight);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.cameras.main.setDeadzone(170, 110);

    state.score = 0;
    state.gems = 0;
    state.lives = 3;
    state.hasKey = false;
    state.running = false;
    state.won = false;
    updateHud();
  }

  createBackdrop() {
    const sky = this.add.graphics();
    sky.fillGradientStyle(0x1b2431, 0x1b2431, 0x364553, 0x26354a, 1);
    sky.fillRect(0, 0, this.levelWidth, this.levelHeight);

    for (let i = 0; i < 34; i += 1) {
      const x = i * 130;
      const y = 120 + Math.sin(i * 0.9) * 28;
      sky.fillStyle(i % 2 ? 0x2c655d : 0x3a705a, 0.38);
      sky.fillTriangle(x - 80, this.levelHeight, x + 55, y, x + 210, this.levelHeight);
    }
  }

  buildLevel() {
    LEVEL.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        const x = columnIndex * TILE + TILE / 2;
        const y = rowIndex * TILE + TILE / 2;
        if (cell === "#") this.platforms.create(x, y, "tile-ground");
        if (cell === "g" || cell === "c") {
          const gem = this.gems.create(x, y, "gem");
          gem.setCircle(10, 6, 6);
          state.totalGems += 1;
          this.tweens.add({ targets: gem, y: y - 6, duration: 900, yoyo: true, repeat: -1, ease: "Sine.inOut" });
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
  }

  createPlayer() {
    this.player = this.physics.add.sprite(this.spawnPoint.x, this.spawnPoint.y, "gabi");
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(20, 29).setOffset(6, 3);
    this.player.setDragX(1200);
    this.player.setMaxVelocity(260, 620);
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
    this.acorns.children.iterate((acorn) => this.resetAcorn(acorn));
  }

  update(time = 0) {
    if (Phaser.Input.Keyboard.JustDown(this.keysInput.restart)) {
      this.scene.restart();
      return;
    }

    this.moveEnemies();
    this.updateAcorns(time);
    if (!state.running || state.won) return;

    const left = this.cursors.left.isDown || this.keysInput.left.isDown;
    const right = this.cursors.right.isDown || this.keysInput.right.isDown;
    const jump = Phaser.Input.Keyboard.JustDown(this.cursors.up) || Phaser.Input.Keyboard.JustDown(this.keysInput.jump);
    const onFloor = this.player.body.blocked.down;

    if (left) {
      this.player.setAccelerationX(-1250);
      this.player.setFlipX(true);
    } else if (right) {
      this.player.setAccelerationX(1250);
      this.player.setFlipX(false);
    } else {
      this.player.setAccelerationX(0);
    }

    if (jump && onFloor) {
      this.player.setVelocityY(-510);
    }

    if (this.player.y > this.levelHeight - 12) this.loseLife();
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

  collectGem(_player, gem) {
    gem.disableBody(true, true);
    state.gems += 1;
    state.score += 100;
    this.cameras.main.flash(80, 114, 214, 201, false);
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
      setMessage("Try Again", "Gabi ran out of lives. Press Start for another run through the gem workshop.", "Restart");
      return;
    }
    this.player.setPosition(this.spawnPoint.x, this.spawnPoint.y);
    this.player.setVelocity(0, 0);
  }

  enterDoor() {
    if (!state.running || !state.hasKey) return;
    state.won = true;
    state.running = false;
    state.score += state.gems === state.totalGems ? 1000 : 350;
    updateHud();
    setMessage("Level Clear", "You found the key and escaped. The next step is more rooms, ladders, toys, and secret bonuses.", "Play Again");
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
