import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class Nest {
  private sprite: Phaser.GameObjects.Rectangle;

  private tileX: number;
  private tileY: number;

  constructor(scene: Phaser.Scene, tileX: number, tileY: number) {
    this.tileX = tileX;
    this.tileY = tileY;

    this.sprite = scene.add.rectangle(
      tileX * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      tileY * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      GAME_CONFIG.TILE_SIZE,
      GAME_CONFIG.TILE_SIZE,
      0x8b4513
    );
  }

  getPosition() {
    return {
      x: this.tileX,
      y: this.tileY,
    };
  }
}