class Fighter{
	constructor(name='player', power=100, health=100){
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage(damage){
		this.health = this.health - damage;
		console.log(`${this.name} health: ${this.health}`);
	}

	hit(enemy, point){
		let damage = point * this.power;		
		enemy.setDamage(damage);	
	}
}

class ImprovedFighter extends Fighter{
	doubleHit(enemy, point){
		super.hit(enemy, point * 2);
	}
}