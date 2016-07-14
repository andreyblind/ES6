{
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

var petro = new Fighter("petro", 6, 520);
var vasyl = new ImprovedFighter("vasyl", 6, 750);

let shuffle = myArr => {
	let index, valueIndex; 
	for (let i=0; i<=myArr.length-1; i++) {
		index = Math.floor(Math.random()*i);
		valueIndex = myArr[index];
		myArr[index] = myArr[i];
		myArr[i] = valueIndex;
  	}
  	return myArr;
}
let getRandomPoints = (pointNum, minPoint, maxPoint) =>{
	let points = [];
	for(pointNum; pointNum!=0; pointNum--){
		points.push(Math.floor(Math.random() * (maxPoint - minPoint + 1)) + minPoint);
	}
	return points;
}

let fight = (fighter, improvedFighter, point, ...elseParam )=> {
	point = point.concat(elseParam);
	point = shuffle(point);
	let fighters = [fighter, improvedFighter];

	while(fighters[0].health > 0 && fighters[1].health > 0){
		fighters[0].hit(fighters[1], point.pop());
		fighters[1].hit(fighters[0], point.pop());
	}
	if(fighters[0].health > fighters[1].health && fighters[0].health > 0){
		alert(`${fighters[0].name} победил! После схватки у него осталось ${fighters[0].health} HP!`);
	}
	else if(fighters[1].health > fighters[0].health && fighters[1].health > 0){
		alert(`${fighters[1].name} победил! После схватки у него осталось ${fighters[1].health} HP!`);
	}
	else{
		alert(`Ничья:( после схватки у ${fighters[0].name} осталось ${fighters[0].health} HP. У ${fighters[1].name} осталось ${fighters[1].health} HP.`);
	}
}

fight(petro, vasyl, getRandomPoints(50, 1, 10),666);
}