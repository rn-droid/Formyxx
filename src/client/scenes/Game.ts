import { Scene } from 'phaser';

export class Game extends Scene {

  constructor() {
    super('Game');
  }

  create() {
  this.cameras.main.setBackgroundColor('#1a1a1a');

  this.add
    .text(
      this.scale.width / 2,
      this.scale.height / 2,
      'FORMYXX',
      {
        fontFamily: 'Arial',
        fontSize: '64px',
        color: '#ffffff',
      }
    )
    .setOrigin(0.5);
}
}
