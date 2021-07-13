import Phaser from 'phaser';
import setScoreToStore from '../../localStorage';
import Entity from './Entities';
import PlayerLaser from './Playerlaser';

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');

    this.setData('speed', 200);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
    this.score = 0;
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  updateScore(enemy) {
    localStorage.clear();
    if (enemy.getData('type') === 'CarrierShip') {
      this.setData('score', this.getData('score') + 25);
    } else if (enemy.getData('type') === 'GunShip') {
      this.setData('score', this.getData('score') + 15);
    } else if (enemy.getData('type') === 'ChaserShip') {
      this.setData('score', this.getData('score') + 10);
    } else {
      this.setData('score', this.getData('score') + 5);
    }
  }

  updateScoretoLocal() {
    setScoreToStore(this.getData('score'));
  }