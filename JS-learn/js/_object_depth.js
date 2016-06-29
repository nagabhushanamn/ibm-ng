/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 * falsy values
 * 
 * 
 * false,null,undefined,0,""
 * 
 * 
 */

//var person = {
//	name : 'Nag'
//};

//if (person.name) {
//	console.log('name property exist');
//}

//if("name" in person){
//	console.log('name property exist');
//}

//------------------------------

//var person = {
//	name : 'Nag',
//	age:32
//};
//
//
//for(var prop in person){
//	if(person.hasOwnProperty(prop)){
//	console.log(prop +":"+person[prop]);
//	}
//}

//---------------------------------


/*
 *  JS objects can have 2 types of properties
 *  
 *  1. data property
 *  2. accessor property
 * 
 */

//var person={
//		_name:'Nag', // data property
//		set name(newName){
//			if(newName){
//				this._name=newName;
//			}
//		},
//		get name(){
//			return this._name;
//		}
//};
//
//person.name="New Nag"; // set
//console.log(person.name); // get


//-----------------------------------




var person={
		name:'Nag',
		age:32
};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//delete person.name;
//person.name='';

//person.asdasdad="asdasdad";

console.log(person.name);




























