var crime=angular.module('crime',['search','ngRoute']);
crime.controller('crimed',function crimed($scope,$http){
$scope.emp=[-1];
$scope.count=0;
$scope.value1=-1;
$scope.some=0;
$scope.ele=0;

          $http.get('crimedata/crime1.json').then(function(response) {
        $scope.crime = response.data;

            $scope.need=4;

            $scope.buttonCount = function(index) {
              $scope.count = (index) * $scope.need;
              return $scope.count;
            }

            $scope.val = function(index) {
              $scope.emp.push(index);
              $scope.total=$scope.total-1;
              return index;
            }


          $scope.fill=function(box,sort){
            $scope.prop=sort;
            $scope.prop=orderBy()
          }


//console.log($scope.ele);
$scope.tot=($scope.crime).length;
$scope.total=$scope.tot;
//
$scope.but=$scope.tot/$scope.need;

$scope.round = function(tot,need) {
  //console.log(Math.ceil(tot/need));

  return Math.ceil(tot/need);
}


      });
  });


  crime.directive('mytable', function() {
  return {
    templateUrl:'mytable.html'
  }});



  crime.directive('myform', function() {
  return {
    templateUrl:'myform.html'
  }
});

crime.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'index.html',
              controller  : 'crimed'
            })});
