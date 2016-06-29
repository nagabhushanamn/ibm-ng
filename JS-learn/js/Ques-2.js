/**
 * http://usejsdoc.org/
 */

function init(){
	
	var trainer = {
			name : 'Nag',
			doTeach : function() {
				console.log(this.name + " teaching JS");  // Nag .....
				var self=this;
				function learn() {
					console.log(this.name +' learning JS from ' + self.name); // ..... ??
				}
				//learn();
				//var emp={name:'emp'};
				//learn.call(emp);
				return learn;
			}
		};
		
		var learnFunc=trainer.doTeach();

		function Employee(name){
			this.name=name;
		}
		var emp1=new Employee('emp1');
		var emp2=new Employee('emp2');

		learnFunc.call(emp1);
		learnFunc.call(emp2);
}


init();
