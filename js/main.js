"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
	var petro;
	var vasyl;

	(function () {
		var Fighter = function () {
			function Fighter() {
				var name = arguments.length <= 0 || arguments[0] === undefined ? 'player' : arguments[0];
				var power = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
				var health = arguments.length <= 2 || arguments[2] === undefined ? 100 : arguments[2];

				_classCallCheck(this, Fighter);

				this.name = name;
				this.power = power;
				this.health = health;
			}

			_createClass(Fighter, [{
				key: "setDamage",
				value: function setDamage(damage) {
					this.health = this.health - damage;
					console.log(this.name + " health: " + this.health);
				}
			}, {
				key: "hit",
				value: function hit(enemy, point) {
					var damage = point * this.power;
					enemy.setDamage(damage);
				}
			}]);

			return Fighter;
		}();

		var ImprovedFighter = function (_Fighter) {
			_inherits(ImprovedFighter, _Fighter);

			function ImprovedFighter() {
				_classCallCheck(this, ImprovedFighter);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ImprovedFighter).apply(this, arguments));
			}

			_createClass(ImprovedFighter, [{
				key: "doubleHit",
				value: function doubleHit(enemy, point) {
					_get(Object.getPrototypeOf(ImprovedFighter.prototype), "hit", this).call(this, enemy, point * 2);
				}
			}]);

			return ImprovedFighter;
		}(Fighter);

		petro = new Fighter("petro", 6, 520);
		vasyl = new ImprovedFighter("vasyl", 6, 750);


		var shuffle = function shuffle(myArr) {
			var index = void 0,
			    valueIndex = void 0;
			for (var i = 0; i <= myArr.length - 1; i++) {
				index = Math.floor(Math.random() * i);
				valueIndex = myArr[index];
				myArr[index] = myArr[i];
				myArr[i] = valueIndex;
			}
			return myArr;
		};
		var getRandomPoints = function getRandomPoints(pointNum, minPoint, maxPoint) {
			var points = [];
			for (pointNum; pointNum != 0; pointNum--) {
				points.push(Math.floor(Math.random() * (maxPoint - minPoint + 1)) + minPoint);
			}
			return points;
		};

		var fight = function fight(fighter, improvedFighter, point) {
			for (var _len = arguments.length, elseParam = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
				elseParam[_key - 3] = arguments[_key];
			}

			point = point.concat(elseParam);
			point = shuffle(point);
			var fighters = [fighter, improvedFighter];

			while (fighters[0].health > 0 && fighters[1].health > 0) {
				fighters[0].hit(fighters[1], point.pop());
				fighters[1].hit(fighters[0], point.pop());
			}
			if (fighters[0].health > fighters[1].health && fighters[0].health > 0) {
				alert(fighters[0].name + " победил! После схватки у него осталось " + fighters[0].health + " HP!");
			} else if (fighters[1].health > fighters[0].health && fighters[1].health > 0) {
				alert(fighters[1].name + " победил! После схватки у него осталось " + fighters[1].health + " HP!");
			} else {
				alert("Ничья:( после схватки у " + fighters[0].name + " осталось " + fighters[0].health + " HP. У " + fighters[1].name + " осталось " + fighters[1].health + " HP.");
			}
		};

		fight(petro, vasyl, getRandomPoints(50, 1, 10), 666);
	})();
}