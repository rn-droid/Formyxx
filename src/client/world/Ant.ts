import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class Ant {
  private ant: Phaser.GameObjects.Rectangle;

  constructor(
    private scene: Phaser.Scene,
    private tileX: number,
    private tileY: number
  ) {
    this.ant = scene.add.rectangle(
      this.tileX * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      this.tileY * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      GAME_CONFIG.TILE_SIZE * 0.7,
      GAME_CONFIG.TILE_SIZE * 0.7,
      0xff4444
    );
  }
}