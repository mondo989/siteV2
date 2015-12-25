
angular.module('armandosApp')


.controller('indexCtrl', ['$scope', function($scope) {

  $scope.sticky = 'sticky';
  $scope.test = function(){
     alert('You have scrolled to an entry.');
 }


  console.log('indexCtrl loaded')
}])
