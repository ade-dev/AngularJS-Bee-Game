var beeGame = angular.module('beeGame', [])

beeGame.controller('GameCtrl', function($scope, $timeout) {
  $scope.bees = [
    {"type": "queen", "life_span": 100, "hit_points": 8, "active": true},
    {"type": "worker", "life_span": 75, "hit_points": 10, "active": true},
    {"type": "worker", "life_span": 75, "hit_points": 10, "active": true},
    {"type": "worker", "life_span": 75, "hit_points": 10, "active": true},
    {"type": "worker", "life_span": 75, "hit_points": 10, "active": true},
    {"type": "worker", "life_span": 75, "hit_points": 10, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true},
    {"type": "drone", "life_span": 50, "hit_points": 12, "active": true}
  ];
  $scope.beesClone = angular.copy($scope.bees);
  $scope.beesLength = $scope.bees.length;
  $scope.pos;
  $scope.isQueenActive = true;
  $scope.score = 875;

  $scope.selectBee = function() {
    $scope.pos = Math.floor(Math.random() * ((($scope.beesLength) - 1) - 0 + 1)) + 0;
    $scope.bees[$scope.pos].active === true ? $scope.pos : $scope.selectBee();
  }
  $scope.hitBee = function() {
    if($scope.bees[$scope.pos].life_span > $scope.bees[$scope.pos].hit_points) {
      $scope.bees[$scope.pos].life_span -= ($scope.bees[$scope.pos].hit_points);
    }
    else {
      $scope.bees[$scope.pos].life_span -= ($scope.bees[$scope.pos].life_span);
      $scope.bees[$scope.pos].active = false;
    }
  }
  $scope.reset = function() {
    $scope.bees = angular.copy($scope.beesClone);
    $scope.isQueenActive = true;
    $scope.score = 875;
  }
  $scope.updateResultView = function() {
    $scope.isQueenActive = false;
  }
  $scope.updateScore = function() {
    if($scope.bees[$scope.pos].active === false) {
      if($scope.bees[$scope.pos].type === "drone") {
        $scope.score -= 50;
      }
      else {
        if($scope.bees[$scope.pos].type === "worker") {
          $scope.score -= 75;
        }
      }
    }
  }

  $scope.play = function() {
    $scope.selectBee();
    $scope.hitBee();
    $scope.updateScore();
    if($scope.bees[0].active === false){
      $scope.updateResultView();
      $scope.resetTimeout = $timeout(function() {$scope.reset()}, 6000)
    }
  };
})
