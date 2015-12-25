
angular.module('armandosApp')


.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {
  // $scope.sticky = 'sticky';
    // This is for waypoints !!!
    // This fires the portfolio view on a long scroll.


    //   document.getElementById("pfolio").className = "active";

    $scope.leavingFold = function() {
       document.getElementById("hero").className = "active";

    }

  $scope.portfolio = function(){
    // $state.go("portfolio");
  }
  console.log('indexCtrl loaded');
}]);
