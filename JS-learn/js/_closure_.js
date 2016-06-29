/**
 * http://usejsdoc.org/
 */

/*
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * why we need ?
 * 
 * --> to abstract public-behav of any module.
 * --> while executing func async, able to access parent-scoped data.
 */

var trainer = {
	doTeach : function(sub) {
		console.log('teaching ' + sub);
		var notes = sub + "-notes";
		var someVar='...';
		function learn() {
			console.log('learning ' + sub + ' with ' + notes);
		}
		console.log('teching - end');
		return learn;
	}
};

var learnFunc=trainer.doTeach('JS');

learnFunc();
learnFunc();