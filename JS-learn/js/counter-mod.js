/**
 * http://usejsdoc.org/
 */

// function init() {
//	
// var count = 0; // private
//	
// // public
// var o = {
// doCount : function() {
// count++;
// },
// getCount : function() {
// return count;
// }
// };
// return o;
// }
//
// var counter = init();
// ------------------------------
// pattern : IIFE or Self Executable func
// ------------------------------------

var counter=(function() {

	var count = 0; // private

	// public
	var o = {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};
	
	return o;

})();
