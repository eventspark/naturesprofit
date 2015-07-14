  // create the module and name it dotaApp
  var dotaApp = angular.module('dotaApp', ['ngRoute']);

  // configure our routes
  dotaApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        title: 'Nature\'s Profit',
        templateUrl : 'pages/home.html',
        controller  : 'rootController'
      })

      // route for the home page
      .when('/sprout', {
        title: 'Sprout',
        templateUrl : 'pages/sprout.html',
        controller  : 'sproutController'
      })

      // route for the farm page
      .when('/farm', {
        title: 'Farm',
        templateUrl : 'pages/farm.html',
        controller  : 'farmController'
      })

      // route for the shop page
      .when('/shop', {
        title: 'Shop',
        templateUrl : 'pages/shop.html',
        controller  : 'shopController'
      })

      // route for the stash page
      .when('/stash', {
        title: 'Stash',
        templateUrl : 'pages/stash.html',
        controller  : 'stashController'
      })

      // route for the hp page
      .when('/ShowOrder/:orderId', {
        title: 'Order Status',
        templateUrl : 'pages/clock.html',
        controller  : 'ShowOrderController'
      })

      // redirect to not found
      .otherwise({
        title: '404 Page Not Found',
        templateUrl : 'pages/error.html',
        controller  : 'errorController'
      });

      $locationProvider.html5Mode(true);
  });


  dotaApp.run(['$location', '$rootScope', function($location, $rootScope) {

    $rootScope.timer = 0;
    $rootScope.seconds = 0;
    $rootScope.goldCounter = 0;
    $rootScope.manaCounter = 0;

    // core stats
    // $rootScope.gold = 10000;
    $rootScope.gold = 0;
    $rootScope.steps = 0;
    $rootScope.currentmp = 100;
    $rootScope.maxmp = 100;
    $rootScope.mpregen = 1;
    $rootScope.passiveGold = 0;

    // battle stats
    $rootScope.attackBase = 1;
    $rootScope.attackRange = 5;
    $rootScope.creepDamageRate = 0;
    $rootScope.creepKills = 0;
    $rootScope.lastHits = 0;


    // treant recipes purchased
    $rootScope.flowering = false;
    $rootScope.deadwood = false;
    $rootScope.evergreen = false;
    $rootScope.pumpkins = false;
    $rootScope.shroomling = false;
    $rootScope.shroomthing = false;
    $rootScope.bonsaiko = false;
    $rootScope.primeval = false;
    $rootScope.lotus = false;

    // basic treants
    $rootScope.farmingTreants = 0;
    $rootScope.farmingGoldRate = 1;
    $rootScope.combatTreants = 0;
    $rootScope.combatDamageRate = 1;

    // treants count
    $rootScope.floweringTreants = 0;
    $rootScope.deadwoodTreants = 0;
    $rootScope.evergreenTreants = 0;
    $rootScope.pumpkinsTreants = 0;
    $rootScope.shroomlingTreants = 0;
    $rootScope.shroomthingTreants = 0;
    $rootScope.bonsaikoTreants = 0;
    $rootScope.primevalTreants = 0;
    $rootScope.lotusTreants = 0;

    // agh's item count
    $rootScope.pointBoosters = 0;
    $rootScope.ogreClubs = 0;
    $rootScope.alacrityBlades = 0;
    $rootScope.wizardryStaffs = 0;
    $rootScope.aghsCreated = 0;
    $rootScope.aghsScepters = 0;

    // one time items
    $rootScope.lothars = false;
    $rootScope.boots = false;

    $rootScope.currentRank = 0;
    $rootScope.ranks = [
        {rank: "Mushroom Cap"}, 
        {rank: "Seedling"},
        {rank: "Sapling"}, 
        {rank: "Ye Old Prophet"},
        {rank: "Don Furion"}
    ];

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.steps++;
      $rootScope.title = current.$$route.title;
    });
  }]);


  // create the controller and inject Angular's $scope
  // main page controller (persists throughout all pages)
  dotaApp.controller('mainController', function($scope, $rootScope, $interval) {
    console.log("mainController");
    var passiveGain, passiveMP, timerInterval;
    // create a message to display in our view
    $scope.message = "---";

    $scope.farm = function() {
      $rootScope.gold = $rootScope.gold + 10000;
      $rootScope.maxmp = $rootScope.maxmp + 1000;
      $rootScope.currentmp = $rootScope.maxmp;
    }

    $scope.passives = function() {

      // gold = 1234;
      // goldrate = (1/gold * 100)
      // goldcounter = 0;
      // $interval.cancel(time);
      // time = $interval(function() {
      //   $rootScope.timer = $rootScope.timer + 1;
      //   $rootScope.seconds = Math.floor($rootScope.timer/100);
      //   goldcounter++;
      //   if (goldcounter > goldrate) {
      //     goldGained = Math.floor(goldcounter/goldrate)
      //     $rootScope.gold = $rootScope.gold + goldGained;
      //     goldcounter = goldcounter % goldrate;
      //   }
      // }, 10);

      // passive gold rate
      $scope.totalGoldRate = 1/($rootScope.passiveGold + ($rootScope.farmingTreants * $rootScope.farmingGoldRate)) * 100;
      console.log("gold gain rate: " + 100/$scope.totalGoldRate + " gold/sec");

      // passive mana regen rate
      $scope.totalManaRate = 1/($rootScope.mpregen) * 100;
      console.log("mana regen rate: " + 100/$scope.totalManaRate + " mp/sec");
      
      $interval.cancel(timerInterval);
      timerInterval = $interval(function() {
        $rootScope.timer = $rootScope.timer + 1;
        $rootScope.seconds = Math.floor($rootScope.timer/100);

        if ($scope.totalGoldRate > 0) {
          $rootScope.goldCounter++;
          if ($rootScope.goldCounter > $scope.totalGoldRate) {
            goldGained = Math.floor($rootScope.goldCounter/$scope.totalGoldRate)
            $rootScope.gold = $rootScope.gold + goldGained;
            $rootScope.goldCounter = $rootScope.goldCounter % $scope.totalGoldRate;
          }
        }
        if ($scope.totalManaRate > 0) {
          $rootScope.manaCounter++;
          if ($rootScope.manaCounter > $scope.totalManaRate) {
            manaGained = Math.floor($rootScope.manaCounter/$scope.totalManaRate)
            $rootScope.currentmp = $rootScope.currentmp + manaGained;
            $rootScope.manaCounter = $rootScope.manaCounter % $scope.totalManaRate;
            if ($rootScope.currentmp > $rootScope.maxmp) {
              $rootScope.currentmp = $rootScope.maxmp;
            }
          }
        }

      }, 10);


      // passive gold rate
      // $scope.totalGoldRate = $rootScope.passiveGold + ($rootScope.farmingTreants * $rootScope.farmingGoldRate);
      // console.log("gold gain rate: " + $scope.totalGoldRate);
      // if ($scope.totalGoldRate > 0) {
      //   $interval.cancel(passiveGain);
      //   goldRate = 600/$scope.totalGoldRate;
      //   passiveGain = $interval(function() {
      //     $rootScope.gold = $rootScope.gold + 1;
      //   }, goldRate);
      // }

      // passive mana regen rate
      // if ($rootScope.mpregen > 0) {
      //   $interval.cancel(passiveMP);
      //   mpRate = 1000/$rootScope.mpregen;
      //   passiveMP = $interval(function() {
      //     if ($rootScope.currentmp < $rootScope.maxmp) {
      //       $rootScope.currentmp = $rootScope.currentmp + 1;
      //     } 
      //     if ($rootScope.currentmp > $rootScope.maxmp) {
      //       $rootScope.currentmp = $rootScope.maxmp;
      //     }
      //   }, mpRate);
      // }
    }

    $scope.passives();
  });


  dotaApp.controller('rootController', function($scope, $rootScope, $interval) {
    console.log("rootController");
  });


  // sprout create treants controller
  dotaApp.controller('sproutController', function($scope, $rootScope) {
    $scope.message = "Expand your army.";
    $scope.msglog = "---";
    $scope.cast = function(type, mpcost, special) {
      if (special) {
        if (type == "Wrath of Nature") {
          mpcost = mpcost/100 * $rootScope.maxmp;
          if ($rootScope.currentmp >= mpcost) {
            $rootScope.currentmp = $rootScope.currentmp - mpcost;
            spellGoldGain = Math.floor(Math.pow(1.07, mpcost.toString().length) * mpcost);
            $rootScope.gold = $rootScope.gold + spellGoldGain;
            $scope.msglog = "Wrath of Nature!";
          } else {
            $scope.msglog = "Not enough mana.";
          }
        }
      } else {
        if ($rootScope.currentmp >= mpcost) {
          $rootScope.currentmp = $rootScope.currentmp - mpcost;
          if (type == "farming") {
            $scope.msglog = "You spawned a treant!";
            $rootScope.farmingTreants++;
          }
          if (type == "combat") {
            $scope.msglog = "You spawned a treant!";
            $rootScope.combatTreants++;
          }
          if (type == "flowering") {
            $scope.msglog = "You spawned a flowering treant!";
            $rootScope.floweringTreants++;
          }
        } else {
          $scope.msglog = "Not enough mana.";
        }
      }
      $scope.passives();
    }
  });


  // farming / battle controller
  dotaApp.controller('farmController', function($scope, $rootScope, $interval, $timeout) {
    $scope.message = "Last hit some creeps.";
    $scope.msglog = "---";

    var passiveDamage, autoSpawn;

    $scope.generateEnemy = function() {
      $timeout.cancel(autoSpawn);
      $scope.msglog = "New creep appears.";
      $scope.enemymaxhp = Math.floor((Math.random() * 10) + 10 + $rootScope.creepKills);
      $scope.enemyhp = $scope.enemymaxhp;
      $scope.firstHit = false;

      $scope.totalDamageRate = $rootScope.creepDamageRate + ($rootScope.combatTreants * $rootScope.combatDamageRate);
      console.log("passive damage rate: " + $scope.totalDamageRate);
      $interval.cancel(passiveDamage);
      if ($scope.totalDamageRate > 0) {
        damageRate = 1000/$scope.totalDamageRate;
        passiveDamage = $interval(function() {
          if ($scope.enemyhp > 0) {
            $scope.enemyhp = $scope.enemyhp - 1;
          }
          if ($scope.enemyhp <= 0) {
            $interval.cancel(passiveDamage);
            $scope.enemyhp = 0;
            $scope.goldGain = Math.floor((Math.random() * 5) + 10);
            $rootScope.gold = $rootScope.gold + $scope.goldGain;
            $scope.msglog = "Creep killed.";
            $rootScope.creepKills = $rootScope.creepKills + 1;
            if ($rootScope.boots) {
              autoSpawn = $timeout(function() {
                $scope.generateEnemy();
              }, 1000);
            }
          }
        }, damageRate);
      }

    }
    $scope.generateEnemy();
    $scope.attack = function() {
      if ($scope.enemyhp > 0) {
        if ($rootScope.lothars && $scope.firstHit == false) {
          $scope.firstHit = true;
          $scope.damage = Math.floor((Math.random() * $rootScope.attackRange) + $rootScope.attackBase) * 2;
          $scope.enemyhp = $scope.enemyhp - $scope.damage;
          $scope.msglog = "Critical! You dealt " + $scope.damage + " damage.";
        } else {
          $scope.damage = Math.floor((Math.random() * $rootScope.attackRange) + $rootScope.attackBase);
          $scope.enemyhp = $scope.enemyhp - $scope.damage;
          $scope.msglog = "You dealt " + $scope.damage + " damage.";
        }
        if ($scope.enemyhp <= 0) {
          $scope.enemyhp = 0;
          $scope.goldGain = Math.floor((Math.random() * 10) + 20) + ($rootScope.floweringTreants * 40);
          $rootScope.gold = $rootScope.gold + $scope.goldGain;
          $scope.msglog = "Creep killed.";
          $rootScope.creepKills = $rootScope.creepKills + 1;
          $rootScope.lastHits = $rootScope.lastHits + 1;
          if ($rootScope.boots) {
            autoSpawn = $timeout(function() {
              $scope.generateEnemy();
            }, 1000);
          }
        }
      } else {
        $timeout.cancel(autoSpawn);
        $scope.generateEnemy();
      }
    }
  });


  // shop controller
  dotaApp.controller('shopController', function($scope, $rootScope) {
    $scope.message = "Purchase items here.";
    $scope.msglog = "---";
    $scope.purchase = function(item, cost) {
      if ($rootScope.gold >= cost) {
        $scope.msglog = "You bought " + item;
        if (item == "Mango Tangos") {
          if ($rootScope.currentmp < $rootScope.maxmp) {
            $rootScope.currentmp = $rootScope.currentmp + 150;
          } 
          if ($rootScope.currentmp > $rootScope.maxmp) {
            $rootScope.currentmp = $rootScope.maxmp;
          }
        }
        if (item == "Hand of Midas") {
          $rootScope.passiveGold = $rootScope.passiveGold + 5;
        }
        if (item == "Boots") {
          $rootScope.boots = true;
        }
        if (item == "Shadow Blade") {
          $rootScope.lothars = true;
        }
        if (item == "Pointer Booster") {
          $rootScope.pointBoosters++;
          $rootScope.maxmp = $rootScope.maxmp + 150;
          $rootScope.currentmp = $rootScope.currentmp + 150;
        }
        if (item == "Ogre Club") {
          $rootScope.ogreClubs++;
          $rootScope.attackBase = $rootScope.attackBase + 10;
        }
        if (item == "Blade of Alacrity") {
          $rootScope.alacrityBlades++;
          $rootScope.attackRange = $rootScope.attackRange + 12;
        }
        if (item == "Staff of Wizardry") {
          $rootScope.wizardryStaffs++;
          $rootScope.mpregen = $rootScope.mpregen + 2;
        }

        if (item == "Flowering Treant Recipe") {
          $rootScope.flowering = true;
        }
        $rootScope.gold = $rootScope.gold - cost;
        $scope.passives();
      } else {
        $scope.msglog = 'Not enough gold. Go farm some more.';
      }
    }
  });


  // stash controller - view inventory, combine items
  dotaApp.controller('stashController', function($scope, $rootScope) {
    $scope.message = 'Your stash.';
  });


  
  dotaApp.controller('ShowOrderController', function($scope, $rootScope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
    $scope.message = 'Order.';
  });

  dotaApp.controller('errorController', function($scope, $rootScope) {
    $scope.message = 'Sorry, the page you are looking for is in another castle.';
  });