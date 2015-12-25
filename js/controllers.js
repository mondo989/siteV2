
angular.module('armandosApp')


.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {
  // $scope.sticky = 'sticky';
    // This is for waypoints !!!
    // This fires the portfolio view on a long scroll.
  $scope.portfolio = function(){
    document.getElementById("pfolio").className = "active";



    // $state.go("portfolio");
  }
  console.log('indexCtrl loaded');
}]);
