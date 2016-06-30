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

	// Controller - class

	mod.controller('StoreController', function($filter) {
		// load model-data
		//this.products = items;
		this.products=$filter('orderBy')(items,'price',false);
		console.log($filter('priceDiscount')(1000,100));
		console.log($filter('uppercase')('nag'));
	});
	
	mod.controller('TabsController', function($scope) {
		$scope.tabs=['Description','Specification','Reviews','Other'];
		$scope.tab=1;  //  ng-init="tab=1"
		$scope.changeTab=function(tabIndex){
			$scope.tab=tabIndex;
		};
		$scope.isTabSelected=function(tabIndex){
		return $scope.tab===tabIndex;	
		};
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