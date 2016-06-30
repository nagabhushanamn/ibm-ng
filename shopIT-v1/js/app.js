/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store', []);

	// --------------------------------

	// Model
	var items = [ {
		name : 'Laptop',
		price : 198000,
		description : 'New Model',
		canBuy : true,
		notAvailable : false,
		mfg : Date.now(),
		discount : 10000
	}, {
		name : 'Mobile',
		price : 18000,
		description : 'New Model',
		canBuy : true,
		notAvailable : false,
		mfg : Date.now()
	} ];

	// ----------------------------------

	// using DOM

	// a. using plain-js

	// document.querySelector('h4').innerHTML=item.name;
	// document.querySelector('h5').innerHTML=item.price;
	// document.querySelector('p').innerHTML=item.description;

	// b. using jQuery
	// $(function(){
	// $('h4').text(item.name);
	// $('h5').text(item.price);
	// $('p').text(item.description);
	// });

	// ----------------------------------

	// Controller - class

	mod.controller('StoreController', function($filter) {
		// load model-data
		//this.products = items;
		this.products=$filter('orderBy')(items,'price',false);
		console.log($filter('priceDiscount')(1000,100));
		console.log($filter('uppercase')('nag'));
	});

	// ----------------------------------

	// Filter(s)

	mod.filter('priceDiscount', function() {
		return function(originalPrice, discount) {
			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				throw new Error("price is not a number");
			}
		};
	});

	// ----------------------------------

})();