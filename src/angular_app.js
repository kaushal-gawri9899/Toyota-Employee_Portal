
var app = angular.module('myApp', []);
app.controller('myCtrl',
function($scope, $http) {
	$scope.formParams = {};
	$scope.stage = "stage1";
	$scope.formValidation = true;
	
	
    $scope.body = selectElement(".item")
    
	$scope.formParams = {
		indigenous: '',
		gender:"m",
		agree:'yes',
		applicationNumber:"SCAP0001013",
		gname:'Abel Tutor',
		//pname:'Abel Tutor',
		sname:'Tutor',
		address:'161 collins Street',
		suburb:'Melbourne',
		state:'Victoria',
		zcode:'3000',
		phone:'0418417357'
		//email:'girish@gmail.com'
	};

	// Navigation functions
	$scope.next = function (stage,event) {
		$scope.direction = 1;
		$scope.stage = stage;
		$scope.formValidation = true;
		if ($scope.multiStepForm.$valid) {
			$scope.direction = 1;
			$scope.stage = stage;
			$scope.formValidation = false;
		}
	};

	$scope.back = function (stage,event) {
		$scope.direction = 0;
		$scope.stage = stage;
	};


	// Post to desired exposed web service.
	$scope.submitForm = function () {
		var wsUrl = "someURL";

		// Check form validity and submit data using $http
		if ($scope.multiStepForm.$valid) {
			$scope.formValidation = true;

			$http({
				method: 'POST',
				url: wsUrl,
				data: JSON.stringify($scope.formParams)
			}).then(function successCallback(response) {
				if (response&& response.data&& response.data.status&& response.data.status === 'success') {
					$scope.stage = "success";
				} else {
					if (response&& response.data&& response.data.status&& response.data.status === 'error') {
						$scope.stage = "error";
					}
				}
			}, function errorCallback(response) {
				$scope.stage = "error";
			});
		}
	};

	$scope.reset = function() {
		$scope.formParams = {};
		$scope.stage = "";

	
		
	
}
	

});