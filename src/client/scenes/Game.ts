import { Scene } from 'phaser';
import { Grid } from '../world/Grid';
import { GAME_CONFIG } from '../config/gameConfig';
import { Ant } from '../world/Ant';

export class Game extends Scene {

  constructor() {
    super('Game');
  }

  create() {
  this.cameras.main.setBackgroundColor(GAME_CONFIG.BACKGROUND_COLOR);

  const grid = new Grid(this);
  grid.draw();
  new Ant(this, 5, 5);

  this.add.text(30, 30, 'FORMYXX', {
    fontSize: '28px',
    color: '#ffffff',
  });
}
}
