import { Scene } from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { Grid } from '../world/Grid';
import { Ant } from '../world/Ant';
import Phaser from 'phaser';

export class Game extends Scene {
  private ant!: Ant;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  private moveDelay = 150; // milliseconds
  private lastMoveTime = 0;

  constructor() {
    super('Game');
  }

  create() {
    this.cameras.main.setBackgroundColor(GAME_CONFIG.BACKGROUND_COLOR);

    const grid = new Grid(this);
    grid.draw();

    this.cameras.main.setBounds(
  0,
  0,
  GAME_CONFIG.WORLD_WIDTH * GAME_CONFIG.TILE_SIZE,
  GAME_CONFIG.WORLD_HEIGHT * GAME_CONFIG.TILE_SIZE
  );

    this.ant = new Ant(this, 5, 5);

    this.cameras.main.startFollow(this.ant.getSprite(), true);

    this.cameras.main.setZoom(1);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.add.text(30, 30, 'FORMYXX', {
      fontSize: '28px',
      color: '#ffffff',
    });
  }

  update(time: number) {
  if (time - this.lastMoveTime < this.moveDelay) {
    return;
  }

  let moved = false;

  if (this.cursors.left.isDown) {
    this.ant.move(-1, 0);
    moved = true;
  } else if (this.cursors.right.isDown) {
    this.ant.move(1, 0);
    moved = true;
  } else if (this.cursors.up.isDown) {
    this.ant.move(0, -1);
    moved = true;
  } else if (this.cursors.down.isDown) {
    this.ant.move(0, 1);
    moved = true;
  }

  if (moved) {
    this.lastMoveTime = time;
  }
  }
}