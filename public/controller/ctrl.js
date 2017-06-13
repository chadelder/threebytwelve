angular.module('myApp')

app.controller('ctrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	// get muzik
	$scope.get2Cents = function(){
		$http.get('/api/testget').then(function(months){
			$scope.months = months.data;
		})
  };

	// post muzik
	$scope.post2Cents = function(){
			console.log($scope.three);
			$http.post('/api/testpost/', $scope.three).then(function(response){
				$state.go('page1');
				//window.location.href='#/addOrder';
			});
		};

	// filter muzik - click
	$scope.reset = function() {
		$http.get('/api/testget').then(function(months){
			$scope.months = months.data;
		})
  };
}]);
