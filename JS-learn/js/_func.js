/**
 * http://usejsdoc.org/
 */


// function - depth

/*
 *   we can create function(s) in 2 ways
 * 
 *   1. function declaration
 *   2. function expressions
 * 
 */

// function dec

//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));

//-----------------------------

// function expression

//console.log(add(12,13));   // throw error

//var add=function(n1,n2){
//	return n1+n2;
//};

//console.log(add(12,13));

//-----------------------------

// functions as values

//function sayHello(){
//	console.log('hello..');
//}
//
//var sayHi=sayHello;
//sayHi();

//-----------------------------

//functions as arg

//function greet(f){
//	if(f){
//		f();
//		return;
//	}
//	console.log('Hello...');
//}
//greet();
//greet(function(){console.log('Ola');});

//------------------------------------

//var arr=[1,3,5,7,9,2,4,6,8,10];
////arr.sort();
//arr.sort(function(a, b) {
//	return a-b;
//});
//console.log(arr);


//------------------------------------


function teach(){
	console.log('teach..');
	function learn(){
		console.log('learn...');
	}
	return learn;
}

var learnFunc=teach();
learnFunc();
learnFunc();


//------------------------------------

//
//function reflect(){
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12,13,14,15));



//function sum(){
//		var result=0,
//		    len=arguments.length,
//		    i=0;
//		while(i<len){
//			result+=arguments[i];
//			i++;
//		}
//		return result;
//}
//
//console.log(sum(1,2,3,4));


//------------------------------------

//function eat(){
//	console.log('Nothing to eat...');
//}
//var eat=new Function('...');
//

//function eat(food){
//	if(arguments.length===0){
//		console.log('Nothing to eat...');
//		return;
//	}
//	console.log('Eating '+food);
//}
////var eat=new Function('...');
//
//eat();
//eat('biryani');

//---------------------------------------




















