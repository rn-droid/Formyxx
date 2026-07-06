import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class Ant {
  private ant: Phaser.GameObjects.Rectangle;

  private tileX: number;
  private tileY: number;

  constructor(scene: Phaser.Scene, startX: number, startY: number) {
    this.tileX = startX;
    this.tileY = startY;

    this.ant = scene.add.rectangle(
      this.getPixelX(),
      this.getPixelY(),
      GAME_CONFIG.TILE_SIZE * 0.7,
      GAME_CONFIG.TILE_SIZE * 0.7,
      0xff4444
    );
  }

  private getPixelX(): number {
    return this.tileX * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2;
  }

  private getPixelY(): number {
    return this.tileY * GAME_CONFIG.TILE_SIZE + GAME_CONFIG.TILE_SIZE / 2;
  }

  move(dx: number, dy: number): void {
    const newX = this.tileX + dx;
    const newY = this.tileY + dy;

    if (
      newX < 0 ||
      newX >= GAME_CONFIG.WORLD_WIDTH ||
      newY < 0 ||
      newY >= GAME_CONFIG.WORLD_HEIGHT
    ) {
      return;
    }

    this.tileX = newX;
    this.tileY = newY;

    this.ant.setPosition(this.getPixelX(), this.getPixelY());
  }

  getTilePosition() {
    return {
      x: this.tileX,
      y: this.tileY,
    };
  }
  getSprite() {
  return this.ant;
  }
}