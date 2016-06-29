/**
 * http://usejsdoc.org/
 */

/*
 * why we need 'this' keyword ?
 * 
 */
//
//var person = {
//	name : 'Nag',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
//
//// person.sayName();
//
//var p = person;
//person = {
//	name : 'IBM'
//};
//
//p.sayName();

//-------------------------------------------

//
//
//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};


//function sayNameForAll(){
//	console.log('im '+this.name);
//}

// static function-binding
//-------------------------

//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//sayNameForAll(); // im ''   // function-invocation  ( this --> global-obj  )
//p1.sayName();    // im Nag  // method-invocation    ( this --> invoker-obj )
//p2.sayName();    // im Ria
//
//

//----------------------------------------------


// dynamic function-binding
//-------------------------

//var p1={name:'Nag'};
//var p2={name:'Ria'};
//
//
//
//var greetUtil={
//		sayName:function(message,from){
//			console.log(message+' im '+this.name +" : "+from);
//		}
//};

// eager invocation

//greetUtil.sayName.call(p1,"Hello","BLR");
//greetUtil.sayName.call(p2,"Hi","CHN");
//
//greetUtil.sayName.apply(p1,["Hello","BLR"]);
//greetUtil.sayName.apply(p2,["Hi","CHN"]);


// lazy ( on-event ) invocation

//var newF=greetUtil.sayName.bind(p1,"Hello","BLR");

// event..
//newF();

//---------------------------------------------------

//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}
//
//var p1=new Person('Nag', 32);  // constructor-invocation ( this --> new-obj )
//var p2=new Person('Ria', 1);

//---------------------------------------


// in JS , we can invoke func in 4 ways

/*
 *  a. function-invocation        ---> ( this --> global-obj  )
 *  b. method-invocation          ---> ( this --> invoker-obj )
 *  c. call/apply/bind invocation ---> ( this --> arg-obj )
 *  d. constructor invocation     ---> ( this ---> new-obj )
 * 
 */





