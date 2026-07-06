import Phaser from 'phaser';
import { Grid } from './Grid';
import { Ant } from './Ant';
import { Food } from './Food';
import { GAME_CONFIG } from '../config/gameConfig';
import { HUD } from '../ui/HUD';

export class World {
  public ant: Ant;
  public foods: Food[] = [];
  public hud: HUD;

  constructor(private scene: Phaser.Scene) {
    // Create HUD
    this.hud = new HUD(scene);

    // Draw Grid
    const grid = new Grid(scene);
    grid.draw();

    // Spawn Ant
    this.ant = new Ant(scene, 5, 5);

    // Spawn Food
    for (let i = 0; i < 20; i++) {
      const x = Phaser.Math.Between(0, GAME_CONFIG.WORLD_WIDTH - 1);
      const y = Phaser.Math.Between(0, GAME_CONFIG.WORLD_HEIGHT - 1);

      this.foods.push(new Food(scene, x, y));
    }
  }

  checkFoodCollection() {
    const antPos = this.ant.getTilePosition();

    for (let i = this.foods.length - 1; i >= 0; i--) {
      const foodPos = this.foods[i].getPosition();

      if (foodPos.x === antPos.x && foodPos.y === antPos.y) {
        this.foods[i].destroy();

        this.hud.addFood();

        this.foods.splice(i, 1);

        console.log('Food collected!');
      }
    }
  }
}