/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store', []);

	// --------------------------------

	// Model
	var items = [ {
		id:1,
		name : 'Laptop',
		price : 198000,
		description : 'New Model',
		canBuy : true,
		notAvailable : false,
		mfg : Date.now(),
		discount : 10000,
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'Good one'},
		         {stars:3,author:'indu@gmail.com',comment:'too costly'}
		         ]
	}, {
		id:2,
		name : 'Mobile',
		price : 18000,
		description : 'New Model',
		canBuy : true,
		notAvailable : false,
		mfg : Date.now(),
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'Good one'},
		         {stars:3,author:'indu@gmail.com',comment:'too costly'}
		         ]
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
	
	// Drective(s)
	
	mod.directive('productTitle', function(){
		return{
			templateUrl: "templates/product-title.html",
			replace: true,
			link:function(scope,ele,attr){
				
				
				ele.on('mouseenter',function(e){
					ele.css('background-color','#636363');
				});
				ele.on('mouseleave',function(e){
					ele.css('background-color','#fff');
				});
				
			}
		};
	});
	mod.directive('productTabs', function(){
		return{
			templateUrl: "templates/product-tabs.html",
			controller: 'TabsController'
		};
	});
	mod.directive('productReviewForm', function(){
		return{
			templateUrl: "templates/product-review-form.html",
			controller: function($scope) {
				$scope.newReview={author:'nag@gmail.com'};
				$scope.addNewReview=function(product){
					// send to server with product-id ref
					product.reviews.push($scope.newReview);
					$scope.newReview={author:'nag@gmail.com'};
				};
			}
		};
	});
	

})();