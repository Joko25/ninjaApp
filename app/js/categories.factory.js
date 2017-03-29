app.factory("categoriesFactory", function($http) {

	var factory = {};

	//all category
	factory.readCategory = function(){
		return $http({
			method: 'get',
			url: 'http://localhost/ninjaApp/api/category/read.php'
		})
	}

	factory.createCategory = function($scope){
		return $http({
			method: 'POST',
			data: {
				"name" : $scope.name,
				"description": $scope.description
			},
			url: "http://localhost/ninjaApp/api/category/create.php"
		});
	}

	factory.readOneCategory = function(id){
		return $http({
            method: 'GET',
            url: 'http://localhost/ninjaApp/api/category/read_one.php?id=' + id
        });
	}
	return factory;
});