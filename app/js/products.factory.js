app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost/ninjaApp/api/product/read.php'
        });
    };
     
    // createProduct will be here

    // create product
    factory.createProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: 'http://localhost/ninjaApp/api/product/create.php'
        });
    };
     
    // readOneProduct will be here

    // read one product
    factory.readOneProduct = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost/ninjaApp/api/product/read_one.php?id=' + id
        });
    };
     
    // update product
    factory.updateProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'id' : $scope.id,
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: 'http://localhost/ninjaApp/api/product/update.php'
        });
    };
     
    // deleteProduct will be here

    factory.deleteProduct = function(id){
        return $http({
            method: 'POST',
            data: { 'id' : id },
            url: 'http://localhost/ninjaApp/api/product/delete.php'
        });
    };
    
    // search all products
    factory.searchProducts = function(keywords){
        return $http({
            method: 'GET',
            url: 'http://localhost/ninjaApp/api/product/search.php?s=' + keywords
        });
    };

    return factory;
    
});