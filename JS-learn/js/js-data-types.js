/**
 * http://usejsdoc.org/
 */


//console.log('Hello , Welcome');


/*
 *  data-structure / data - types / variables
 *  ------------------------------------------
 *  
 *   a. simple types
 *   
 *      1. string
 *      2. number
 *      3. boolean
 *      4. null
 *      5. undefined
 *   
 *   b. complex types
 * 
 */

//----------------------------

//a. string

var name="Nag";
var selection='a';

//----------------------------

// b. number
var count=10;
var cost=12.12;

//----------------------------

// c. boolean

var found=true;

//----------------------------

// d. undefined

var v;

//----------------------------

// e. null

var person=null;

//console.log(person===null);

//----------------------------


// complex types  --> object

/*
 *  collection of key:value pairs.
 *  
 *  how to create objects in JS-lang?
 *  
 *  syntax
 *  
 *  var ref=new ConstructorFunction();
 * 
 */

//var person=new Object(); // creates obj-wrapper
//person.name='Nag';
//person.age=32;
//person.doWork=function(){
//console.log('teaching JS..');	
//};
//
//
//delete person.age;

//----------------------------------

/*
 * some built-in types
 * 
 *  1. Object
 *  2. Array
 *  3. RegExp
 *  4. Function
 * 
 */

//------------------------------------

// a. Object

//var person=new Object(); // creates obj-wrapper
//person.name='Nag';
//person.age=32;
//person.doWork=function(){
//console.log('teaching JS..');	
//};
//
//// literal-style
//
//var person={
//		name:'Nag',
//		age:32,
//		doWork:function(){
//			console.log('teaching Js');
//		}
//};

//-------------------------------


//	var arr=new Array();
//	arr.push('red');
//	arr.push('green');
//	arr.push('blue');
//	
//	// literal style
//	
//	var arr=["red","green","blue"];

//-------------------------------

//	var re=new RegExp('\\d{10}');
//	
//	// Literal style
//	
//	var ssnPattern=/\d{3}-\d{2}-\d{4}/;


//-------------------------------
//
//
//var add=new Function("n1","n2","var result=n1+n2;return result;");
//
//
//// Literal style
//
//function add(n1,n2){
//	var result=n1+n2;return result;
//}

//----------------------------------

// How to access obj's properties ?

/*
 *  way-1 : '.' notation , if it is valid identifier
 *  way-2 : '[]' notation 
 */

//var person={
//		name:'Nag',
//		'full-name':'Nag N'
//};
//
//console.log(person.name);
//console.log(person['name']);
//
//console.log(person['full-name']);
//
//var prop='name';
//console.log(person[prop]);


//--------------------------------------




