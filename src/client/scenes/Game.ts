import { Scene } from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { Grid } from '../world/Grid';
import { Ant } from '../world/Ant';
import Phaser from 'phaser';

export class Game extends Scene {
  private ant!: Ant;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('Game');
  }

  create() {
    this.cameras.main.setBackgroundColor(GAME_CONFIG.BACKGROUND_COLOR);

    const grid = new Grid(this);
    grid.draw();

    this.ant = new Ant(this, 5, 5);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.add.text(30, 30, 'FORMYXX', {
      fontSize: '28px',
      color: '#ffffff',
    });
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.cursors.left!)) {
      this.ant.move(-1, 0);
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.right!)) {
      this.ant.move(1, 0);
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.up!)) {
      this.ant.move(0, -1);
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.down!)) {
      this.ant.move(0, 1);
    }
  }
}