
angular.module('armandosApp')


.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {


    $scope.CarouselDemoCtrl = function(){
    $scope.myInterval = 4000;
    $scope.slides = [
      {
        image: 'http://lorempixel.com/400/100/',
        title: 'Entercom',
        content: 'dedede lorem lorem lroemeosf seifsoef'
      },
      {
        image: 'http://lorempixel.com/400/500/',
        title: 'TeamWork Online',
        content: 'TeamWork Online is a global sports network which connects over 3 million sports enthusiasts with executives and professionals at over 800 sports teams and venues.'
      },
      {
        image: 'http://lorempixel.com/400/200/',
        title: 'Cryptup.org',
        content: 'gtggt lorem lorem lroemeosf seifsoef'
      }
      // {
      //   image: 'http://lorempixel.com/400/200/',
      //   title: 'Sameple Image 1',
      //   content: 'lorempixel lorem lorem lroemeosf seifsoef'
      // }
    ];
  }



  // $scope.sticky = 'sticky';
    // This is for waypoints !!!
    // This fires the portfolio view on a long scroll.


    //   document.getElementById("pfolio").className = "active";

    $scope.leavingFold = function() {
       document.getElementById("hero").className = "active";
       document.getElementById("portfolio").className = "active";
    }
    // $state.go("portfolio");

  $scope.carouselControls = function(){
    document.getElementById("carouselHolder").className = "active";
    console.log('workd')
  }


  console.log('indexCtrl loaded');
}]);
