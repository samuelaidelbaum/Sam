angular.module('store', ['ngRoute'])
          .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/placeholder.html',
        controller: 'placeholderCtrl'
      })
      .when('/details/:itemID', {
        templateUrl: 'views/details.html',
        controller: 'StoreController'
      })
             
.otherwise( {redirectTo: '/'} )
})
     .controller('placeholderCtrl', function ($scope) {
    $scope.itemID = null
   
  })          
            
   .controller('StoreController', function($scope, $routeParams, $http){
                 $scope.itemID = $routeParams.itemID
                 
                 $http
                 .get('/data/items.json')
                 .then(function(res){
                     $scope.item = res.data.filter(function(row){
                      return row.id === $scope.itemID
                     })[0]
                 })})

