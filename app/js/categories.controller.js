app.controller("categoryController", function($scope, $mdDialog, $mdToast, categoriesFactory){

	$scope.readCategory = function(){
		categoriesFactory.readCategory().then(function successCallback(response){
			$scope.categories = response.data.records;
		}, function errorCallback(response){
			$scope.showToast("Unable to read record.");
		});
	}

	$scope.showCreateForm = function(){
		$mdDialog.show({
			controller: DialogController,
            templateUrl: './app/category/create_category.template.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true // Only for -xs, -sm breakpoints.
		});
	}

	function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }

    $scope.createCategory = function(){
    	categoriesFactory.createCategory($scope).then(function successCallback(response){
    		// tell the user new product was created
            $scope.showToast(response.data.message);
     
            // refresh the list
            $scope.readCategory();
     
            // close dialog
            $scope.cancel();
     
            // remove form values
            $scope.clearCategoryForm();
    	}, function errorCallback(response){
    		console.log(response);
    		$scope.showToast("Unable to create record.");
    	});
    }

    $scope.clearCategoryForm = function(){
        $scope.name = "";
        $scope.description = "";
    }

    $scope.readOne = function(id){

        categoriesFactory.readOneCategory(id).then(function successCallback(response){
            $scope.id = response.data.id;
            $scope.name = response.data.name;
            $scope.description = response.data.description;
            // $scope.price = response.data.price;

            $mdDialog.show({
                controller: DialogController,
                templateUrl: './app/category/read_one_category.template.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            }).then(
                function(){},
     
                // user clicked 'Cancel'
                function() {
                    // clear modal content
                    $scope.clearCategoryForm();
                }
            );


        }, function errorCallback(response){

        });

    }
});