import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class Grid {
  constructor(private scene: Phaser.Scene) {}

  draw() {
    const graphics = this.scene.add.graphics();

    graphics.lineStyle(1, GAME_CONFIG.GRID_COLOR, 0.3);

    const worldWidth = GAME_CONFIG.WORLD_WIDTH * GAME_CONFIG.TILE_SIZE;
    const worldHeight = GAME_CONFIG.WORLD_HEIGHT * GAME_CONFIG.TILE_SIZE;

    // Vertical lines
    for (let x = 0; x <= worldWidth; x += GAME_CONFIG.TILE_SIZE) {
      graphics.lineBetween(x, 0, x, worldHeight);
    }

    // Horizontal lines
    for (let y = 0; y <= worldHeight; y += GAME_CONFIG.TILE_SIZE) {
      graphics.lineBetween(0, y, worldWidth, y);
    }
  }
}