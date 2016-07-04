/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store', []);

	// --------------------------------

	// Service(s)

	mod.factory('storeService', function($http,$q) {
		
		var url="products.json"
		
		var service = {
			loadAll : function() {
				var defer=$q.defer();
				var promise=$http.get(url);
				promise.then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			}
		};

		return service;

	});

	// ----------------------------------

	// Controller - class

	mod.controller('StoreController', function($scope,storeService) {
		var promise=storeService.loadAll();
		promise.then(function(items) {
			$scope.products=items;
		}, function(reason) {
			$scope.message=reason;
		});
	});

	mod.controller('TabsController', function($scope) {
		$scope.tabs = [ 'Description', 'Specification', 'Reviews', 'Other' ];
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex) {
			$scope.tab = tabIndex;
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
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

	mod.directive('productTitle', function() {
		return {
			templateUrl : "templates/product-title.html",
			replace : true,
			link : function(scope, ele, attr) {

				ele.on('mouseenter', function(e) {
					ele.css('background-color', '#636363');
				});
				ele.on('mouseleave', function(e) {
					ele.css('background-color', '#fff');
				});

			}
		};
	});
	mod.directive('productTabs', function() {
		return {
			templateUrl : "templates/product-tabs.html",
			controller : 'TabsController'
		};
	});
	mod.directive('productReviewForm', function() {
		return {
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {
					// send to server with product-id ref
					product.reviews.push($scope.newReview);
					$scope.newReview = {
						author : 'nag@gmail.com'
					};
				};
			}
		};
	});

})();