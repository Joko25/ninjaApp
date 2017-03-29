var app = angular.module('ninjaApp', ['ngMaterial', 'ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);