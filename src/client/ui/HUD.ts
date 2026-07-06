import Phaser from 'phaser';

export class HUD {
  private food = 0;
  private foodText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    this.foodText = scene.add.text(20, 20, 'Food: 0', {
      fontSize: '28px',
      color: '#ffffff',
    });

    this.foodText.setScrollFactor(0);
  }

  addFood() {
    this.food++;

    this.foodText.setText(`Food: ${this.food}`);
  }
}