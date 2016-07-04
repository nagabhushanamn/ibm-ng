/**
 * http://usejsdoc.org/
 */

/*
 * UnitTesting --> AAA
 * 
 * 
 * A --> Arrange A --> Act A --> Assert
 * 
 */

describe('calc-ctr; test suite', function() {

	//
	var scope;
	beforeEach(module('calc'));

	beforeEach(inject(function($controller) {
		scope = {};
		calcController = $controller('CalcController', {
			$scope : scope
		})
	}));

	beforeEach(function() {
		scope.first = 1;
		scope.second = 2;
	})

	it('shud 1+2=3', function() {
		scope.doArith();
		expect(scope.latest).toBe(3);
	});

	it('shud 1-2=-1', function() {
		scope.operator = '-';
		scope.doArith();
		expect(scope.latest).toBe(-1);
	});
	it('shud 1*2=2', function() {
		scope.operator = '*';
		scope.doArith();
		expect(scope.latest).toBe(2);
	});

	it('shud 1/2=0.5', function() {
		scope.operator = '/';
		scope.doArith();
		expect(scope.latest).toBe(0.5);
	});

});