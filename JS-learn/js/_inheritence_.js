/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};
Person.prototype.sayAge = function() {
	console.log('im ' + this.age + " old");
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);


var p11=Object.create(p1);
