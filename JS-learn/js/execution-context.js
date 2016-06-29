/**
 * http://usejsdoc.org/
 */

/*
 *  when page loads, 
 *  JS-engine will create 'global execution-context'
 * 
 *  window === this
 * 
 * 
 *  Execution-Context - 2 phases
 *  ----------------------------
 *  
 *  1. creation
 *  
 *     --> all the variables/func will get hoisted(lifting-up) to top of context
 *         with default value ( undefined )
 *  
 *     --> if it is global-context, all global-var will become property of
 *         global-obj ( window ).
 *  
 *  2. execution
 *  
 *  //-------------------------------------------
 *  
 *  every function-call , also create one new execution-context,
 *  which is child of above context
 *  
 *  //--------------------------------------------
 * 
 */

//console.log(a);
//var a=12;


//f();

//function f(){
//	console.log('hello');
//}

//f();


//----------------------------------


//
//var a=12;
//
//function f(){
//	var a;
//	console.log(a);
//	function ff(){
//		console.log(a);
//	}
//	a=100;
//	return ff;
//}
//
//var ff=f();
//ff();

//---------------------------------






