import Phaser from 'phaser';
import Entity from './Entities';
import EnemyLaser from './Enemylaser';

export default class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy1', 'CarrierShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 2000,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }