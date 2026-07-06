import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class Food {
  private sprite: Phaser.GameObjects.Circle;

  private tileX: number;
  private tileY: number;

  constructor(scene: Phaser.Scene, tileX: number, tileY: number) {
    this.tileX = tileX;
    this.tileY = tileY;

    this.sprite = scene.add.circle(
      tileX * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      tileY * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2,
      GAME_CONFIG.TILE_SIZE * 0.25,
      0x00ff00
    );
  }

  getPosition() {
    return {
      x: this.tileX,
      y: this.tileY,
    };
  }
  destroy() {
  this.sprite.destroy();
  }
}