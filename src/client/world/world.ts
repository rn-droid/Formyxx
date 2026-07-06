import Phaser from 'phaser';
import { Grid } from './Grid';
import { Ant } from './Ant';
import { Food } from './Food';
import { GAME_CONFIG } from '../config/gameConfig';
import { HUD } from '../ui/HUD';
import { Nest } from './Nest';

export class World {
  public ant: Ant;
  public foods: Food[] = [];
  public hud: HUD;
  public nest: Nest;

  constructor(private scene: Phaser.Scene) {
    // Create HUD
    this.hud = new HUD(scene);

    // Draw Grid
    const grid = new Grid(scene);
    grid.draw();

    // Spawn Ant
    this.ant = new Ant(scene, 5, 5);
    // Spawn Nest
    this.nest = new Nest(scene, 5, 8);

    // Spawn Food
    for (let i = 0; i < 20; i++) {
        this.spawnFood();
    }
  }

  private spawnFood() {
  const x = Phaser.Math.Between(0, GAME_CONFIG.WORLD_WIDTH - 1);
  const y = Phaser.Math.Between(0, GAME_CONFIG.WORLD_HEIGHT - 1);

  this.foods.push(new Food(this.scene, x, y));
    }

  checkFoodCollection() {

    console.log("Checking food...");

    console.log("Carrying:", this.ant.isCarryingFood());

    if (this.ant.isCarryingFood()) {
        return;
    }

    const antPos = this.ant.getTilePosition();

    for (let i = this.foods.length - 1; i >= 0; i--) {
      const foodPos = this.foods[i].getPosition();

      if (foodPos.x === antPos.x && foodPos.y === antPos.y) {

        this.foods[i].destroy();

        this.ant.pickUpFood();
        
        this.foods.splice(i, 1);

        this.spawnFood();

        console.log('Food collected!');
      }
    }
  }

  checkNestDelivery() {
  if (!this.ant.isCarryingFood()) {
    return;
  }

  const antPos = this.ant.getTilePosition();
  const nestPos = this.nest.getPosition();

  console.log("Ant:", antPos, "Nest:", nestPos);

  if (antPos.x === nestPos.x && antPos.y === nestPos.y) {
    console.log("Reached nest!");

    this.ant.dropFood();
    this.hud.addFood();

    console.log("Food delivered!");
  }
}
}