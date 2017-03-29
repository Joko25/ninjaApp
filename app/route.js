app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'app/products/read_products.template.html',
		controller : 'productsController'
	})
	.when('/category',{
		templateUrl : 'app/category/read_category.template.html',
		controller : 'categoryController'
	})
	.otherwise({
		redirectTo : '/'
	})
});