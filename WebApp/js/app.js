/**
 * http://usejsdoc.org/
 */

//document.addEventListener('DOMContentLoaded', function() {
//	
//	console.log('DOM ready...');
//
//	// using DOM API
//	var box = document.querySelector('.jumbotron');
//	var showBtn = document.querySelector('.btn-primary');
//	var hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = '';
//	});
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//	
//
//});


//--------------------------------------------------------------

/*
 *  jQuery syntax
 *  -------------
 *  
 *  jQuery('selector').action1().action2()
 * 
 */

$(document).ready(function() {
	
	var $box=$('.jumbotron');
	
	$('.btn-primary').click(function(e) {
		$box.show();
	});
	$('.btn-danger').click(function(e) {
		$box.hide();
	});
	

	$("#up").click(function() {
		$box.slideUp("slow");
	});
	
});













