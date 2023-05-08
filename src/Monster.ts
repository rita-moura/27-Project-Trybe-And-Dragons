import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints = 85,
    private _strength = 65,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const life = this._lifePoints - attackPoints;
    this._lifePoints = Math.max(life, -1);
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;
