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

      // route for testing
      .when('/test', {
        title: 'Nature\'s Profit',
        templateUrl : 'pages/home.html',
        controller  : 'testController'
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
      .when('/build', {
        title: 'Build',
        templateUrl : 'pages/build.html',
        controller  : 'buildController'
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
    $rootScope.steps = 0;

    // $rootScope.gold = 10000;
    $rootScope.gold = 0;
    $rootScope.lifeTimeGold = 0;
    $rootScope.passiveGold = 0;

    $rootScope.currentmp = 100;
    $rootScope.maxmp = 100;
    $rootScope.mpregen = 1;

    $rootScope.lumber = {
      enabled: false,
      count: 0,
      max: 100,
      baserate: 0,
      totalrate: 0,
      ratepersec: 0,
      counter: 0
    }


    // battle stats
    $rootScope.attackBase = 1;
    $rootScope.attackRange = 5;
    $rootScope.creepDamageRate = 0;
    $rootScope.creepKills = 0;
    $rootScope.lastHits = 0;


    $rootScope.counter = {
      goldGainRate: 0,
      mpRegenRate: 0,
      passiveDamageRate: 0
    }


    // upgrades workshop
    $rootScope.workshop = {
      level: 0
    }


    // nature's call treants
    $rootScope.farmingTreants = {
      name: "Farming Treant",
      description: "A Treant will go farm neutrals, gaining you passive gold",
      count: 0,
      mpcost: 50,
      mptype: "flat",
      rate: 1
    }
    $rootScope.combatTreants = {
      name: "Combat Treant",
      description: "A Treant will help you fight, helping you deal damage to creeps",
      count: 0,
      mpcost: 50,
      mptype: "flat",
      rate: 1
    }
    $rootScope.floweringTreants = {
      name: "Flowering Treant",
      description: "A Lucky Treant blossoms, granting a bonus to last hit bounty",
      category: "recipe",
      recipe: false,
      goldcost: 10000,
      count: 0,
      mpcost: 250,
      mptype: "flat",
      rate: 40
    }
    $rootScope.deadwoodTreants = {
      name: "Deadwood Treant",
      description: "A Treant goes clearcutting, collecting you lumber resources",
      category: "recipe",
      recipe: false,
      goldcost: 25000,
      count: 0,
      mpcost: 500,
      mptype: "flat",
      rate: 1/30
    }
    $rootScope.evergreenTreants = {
      name: "Evergreen Stalker",
      description: "",
      category: "recipe",
      recipe: false,
      goldcost: 100000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.pumpkinTreants = {
      name: "Hallowed Pumpkin",
      description: "",
      category: "recipe",
      recipe: false,
      goldcost: 500000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.shroomlingTreants = {
      name: "Shroomling",
      description: "",
      category: "recipe",
      recipe: false,
      goldcost: 1000000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.shroomthingTreants = {
      name: "Shroom Thing",
      description: "",
      category: "recipe",
      recipe: false,
      goldcost: 10000000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.bonsaikoTreants = {
      name: "Bonsaiko Treant",
      description: "",
      category: "recipe",
      recipe: false,
      goldcost: 250000000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.primevalTreants = {
      name: "Primeval Treant",
      description: "Percentage damage up",
      category: "recipe",
      recipe: false,
      goldcost: 5000000000,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.lotusTreants = {
      name: "Living Lotus Treant",
      description: "Luck up",
      category: "recipe",
      recipe: false,
      goldcost: 11111111111,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.mangoTreants = {
      name: "Mango Treant",
      description: "Gain Mango Tangos per second",
      category: "recipe",
      recipe: false,
      goldcost: 999999999999,
      count: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }


    // skills
    $rootScope.wrathOfNature = {
      name: "Wrath of Nature",
      description: "Grants a gold bounty that scales with mana spent to cast",
      mpcost: 80,
      mptype: "percentmax"
    }


    // stackable items
    $rootScope.mangoTangos = {
      name: "Mango Tangos",
      description: "Restores 150 MP",
      category: "stackable",
      goldcost: 150,
      count: 0
    }
    $rootScope.handOfMidas = {
      name: "Hand of Midas",
      description: "Increases Passive Gold Gain",
      category: "stackable",
      goldcost: 1500,
      count: 0,
      rate: 5
    }
    $rootScope.pointBooster = {
      name: "Point Booster",
      description: "Max MP +150",
      category: "stackable",
      goldcost: 1200,
      count: 0
    }
    $rootScope.ogreClub = {
      name: "Ogre Club",
      description: "Base Damage +10",
      category: "stackable",
      goldcost: 1000,
      count: 0
    }
    $rootScope.bladeOfAlacrity = {
      name: "Blade of Alacrity",
      description: "Variance Damage +12",
      category: "stackable",
      goldcost: 1000,
      count: 0
    }
    $rootScope.staffOfWizardry = {
      name: "Staff of Wizardry",
      description: "MP Regen +2",
      category: "stackable",
      goldcost: 1000,
      count: 0
    }
    $rootScope.aghanimsScepter = {
      name: "Aghanim's Scepter",
      description: "Scepter of the Grand Magus",
      category: "stackable",
      goldcost: 0,
      created: 0,
      count: 0
    }

    // uniques
    $rootScope.boots = {
      name: "Boots",
      description: "Auto Spawn Creeps",
      category: "unique",
      purchased: false,
      goldcost: 420,
    }
    $rootScope.shadowBlade = {
      name: "Shadow Blade",
      description: "First Hit Criticals",
      category: "unique",
      purchased: false,
      goldcost: 2800,
    }
    $rootScope.quellingBlade = {
      name: "Quelling Blade",
      description: "Percentage Attack Bonus",
      category: "unique",
      purchased: false,
      goldcost: 5000,
    }

    $rootScope.currentRank = 0;
    $rootScope.rank = "Mushroom Cap";

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


    $scope.getmoney = function() {
      $scope.moneyMaker(1, true);
    }

    $scope.farm = function() {
      $scope.moneyMaker(1000000);
      $rootScope.maxmp = $rootScope.maxmp + 1000;
      $rootScope.currentmp = $rootScope.maxmp;
    }

    $scope.instance = 0;
    $scope.active = 0;
    $scope.moneyMaker = function(amount, force) {
      $rootScope.gold = $rootScope.gold + amount;
      $scope.lifeTimeGold = $scope.lifeTimeGold + amount;
      if ($scope.lifeTimeGold > 1000000000) {
        if ($rootScope.rank != "Don Furion") {
          $rootScope.rank = "Don Furion";
          $scope.messageLogger("You've achieved rank: Don Furion");
        }
      } else if ($scope.lifeTimeGold > 50000000) {
        if ($rootScope.rank != "Furion the Green") {
          $rootScope.rank = "Furion the Green";
          $scope.messageLogger("You've achieved rank: Furion the Green");
        }
      } else if ($scope.lifeTimeGold > 1000000) {
        if ($rootScope.rank != "Sapling") {
          $rootScope.rank = "Sapling";
          $scope.messageLogger("You've achieved rank: Sapling");
        }
      } else if ($scope.lifeTimeGold > 5000) {
        if ($rootScope.rank != "Seedling") {
          $rootScope.rank = "Seedling";
          $scope.messageLogger("You've achieved rank: Seedling");
        }
      }
      if (amount > 1 || force) {
        $scope.instance++;
        $scope.active++;
        var myEl = angular.element( document.querySelector( '#modals' ) );
        var gold = myEl.append('<div class="gold instance' + $scope.instance + '">+' + amount + ' gold</div>');
        $(".instance" + $scope.instance).css({
          "font-size": 12 + Math.log(amount) + "px"
        });
        $(".instance" + $scope.instance).css({
          top: "+=" + Math.floor((Math.random() * 20) - 10) + "px",
          left: (230 - $(".instance" + $scope.instance).width())/2 + Math.floor((Math.random() * 20) - 10) + "px"
        });
        $(".instance" + $scope.instance).animate({
          top: "-=20px",
          opacity: 0
        }, 500 + (Math.log(amount) * 10), function() {
          $(this).remove();
          $scope.active--;
        });
      }
    }

    $scope.messageLogger = function(message, type) {
      $("#log").append("<div class='log" + type + "'>" + message + "</div>");
      $("#log").scrollTop(999999999);
    }

    $scope.passives = function() {

      // passive gold rate
      $scope.totalGoldRate = 1/($rootScope.passiveGold + ($rootScope.farmingTreants.count * $rootScope.farmingTreants.rate) + ($rootScope.handOfMidas.count * $rootScope.handOfMidas.rate)) * 100;
      $rootScope.counter.goldGainRate = Math.floor(100/$scope.totalGoldRate);
      console.log("gold gain rate: " + $rootScope.counter.goldGainRate + " gold/sec");

      // passive mana regen rate
      $scope.totalManaRate = 1/($rootScope.mpregen) * 100;
      $rootScope.counter.mpRegenRate = Math.floor(100/$scope.totalManaRate);
      console.log("mana regen rate: " + $rootScope.counter.mpRegenRate + " mp/sec");

      if ($rootScope.lumber.enabled) {
        $rootScope.lumber.totalrate = 1/($rootScope.lumber.baserate + ($rootScope.deadwoodTreants.count * $rootScope.deadwoodTreants.rate)) * 100;
        $rootScope.lumber.ratepersec = Math.floor(100/$rootScope.lumber.totalrate);
        console.log("lumber gain rate: " + $rootScope.lumber.ratepersec + " lumber/sec");
      }
      
      $interval.cancel(timerInterval);
      timerInterval = $interval(function() {
        $rootScope.timer = $rootScope.timer + 1;
        $rootScope.seconds = Math.floor($rootScope.timer/100);

        if ($scope.totalGoldRate > 0) {
          $rootScope.goldCounter++;
          if ($rootScope.goldCounter > $scope.totalGoldRate) {
            var goldGained = Math.floor($rootScope.goldCounter/$scope.totalGoldRate)
            $scope.moneyMaker(goldGained);
            $rootScope.goldCounter = $rootScope.goldCounter % $scope.totalGoldRate;
          }
        }
        if ($scope.totalManaRate > 0) {
          $rootScope.manaCounter++;
          if ($rootScope.manaCounter > $scope.totalManaRate) {
            var manaGained = Math.floor($rootScope.manaCounter/$scope.totalManaRate)
            $rootScope.currentmp = $rootScope.currentmp + manaGained;
            $rootScope.manaCounter = $rootScope.manaCounter % $scope.totalManaRate;
            if ($rootScope.currentmp > $rootScope.maxmp) {
              $rootScope.currentmp = $rootScope.maxmp;
            }
          }
        }
        if ($rootScope.lumber.totalrate > 0) {
          $rootScope.lumber.counter++;
          if ($rootScope.lumber.counter > $rootScope.lumber.totalrate) {
            var lumberGained = Math.floor($rootScope.lumber.counter/$scope.lumber.totalrate)
            $rootScope.lumber.count = $rootScope.lumber.count + lumberGained;
            $rootScope.lumber.counter = $rootScope.lumber.counter % $scope.lumber.totalrate;
          }
        }

      }, 10);

    }

    $scope.passives();
  });


  dotaApp.controller('rootController', function($scope, $rootScope, $interval) {
    console.log("rootController");
  });


  // sprout create treants controller
  dotaApp.controller('sproutController', function($scope, $rootScope) {
    console.log("sproutController");
    $scope.message = "Expand your army.";

    $scope.cast = function(type) {

      console.log(type);

      var data = $rootScope.$eval(type);

      console.log(data);

      var truempcost = 0;
      if (data.mptype == "percentmax") {
        truempcost = $rootScope.maxmp * (data.mpcost / 100);
      } else if (data.mptype == "percentcurrent") {
        truempcost = $rootScope.currentmp * (data.mpcost / 100);
      } else if (data.mptype == "flat") {
        truempcost = data.mpcost;
      } else {
        console.log("undefined mptype");
      }
      
      if ($rootScope.currentmp >= truempcost) {
        $rootScope.currentmp = $rootScope.currentmp - truempcost;
        if (type == "farmingTreants") {
          $rootScope.farmingTreants.count++;
          $rootScope.farmingTreants.mpcost = Math.floor($rootScope.farmingTreants.mpcost * (Math.log($rootScope.farmingTreants.count + 100) - 3.6));
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "combatTreants") {
          $rootScope.combatTreants.count++;
          $rootScope.combatTreants.mpcost = Math.floor($rootScope.combatTreants.mpcost * (Math.log($rootScope.combatTreants.count + 100) - 3.6));
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "floweringTreants") {
          $rootScope.floweringTreants.count++;
          $rootScope.floweringTreants.mpcost = Math.floor($rootScope.floweringTreants.mpcost * 1.02);
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "deadwoodTreants") {
          $rootScope.deadwoodTreants.count++;
          $rootScope.deadwoodTreants.mpcost = Math.floor($rootScope.deadwoodTreants.mpcost * 1.02);
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "wrathOfNature") {
          spellGoldGain = Math.floor(Math.pow(1.07, truempcost.toString().length) * truempcost);
          $scope.moneyMaker(spellGoldGain);
          $scope.messageLogger("Wrath of Nature!", "money");
        }
      } else {
        $scope.messageLogger("Not enough mana.", "warning");
      }

      $scope.passives();
    }
  });


  // farming / battle controller
  dotaApp.controller('farmController', function($scope, $rootScope, $interval, $timeout) {
    console.log("farmController");
    $scope.message = "Last hit some creeps.";

    var passiveDamage, autoSpawn;
    var battleReady = true;

    $scope.generateEnemy = function() {
      battleReady = false;
      $timeout(function() {
        battleReady = true;
      }, 1000);

      $timeout.cancel(autoSpawn);
      $scope.msglog = "New creep appears.";
      $scope.enemymaxhp = Math.floor((Math.random() * 10) + 10 + $rootScope.creepKills);
      $scope.enemyhp = $scope.enemymaxhp;
      $scope.firstHit = false;

      $scope.totalDamageRate = $rootScope.creepDamageRate + ($rootScope.combatTreants.count * $rootScope.combatTreants.rate);
      console.log("passive damage rate: " + $scope.totalDamageRate);
      $interval.cancel(passiveDamage);
      if ($scope.totalDamageRate > 0) {
        damageRate = 1000/$scope.totalDamageRate;
        passiveDamage = $interval(function() {
          if (battleReady) {
            if ($scope.enemyhp > 0) {
              $scope.enemyhp = $scope.enemyhp - 1;
            }
            if ($scope.enemyhp <= 0) {
              $interval.cancel(passiveDamage);
              $scope.enemyhp = 0;
              $scope.goldGain = Math.floor((Math.random() * $scope.enemymaxhp) + 10);
              $scope.moneyMaker($scope.goldGain);
              $scope.msglog = "Creep killed.";
              $rootScope.creepKills = $rootScope.creepKills + 1;
              if ($rootScope.boots.purchased) {
                autoSpawn = $timeout(function() {
                  $scope.generateEnemy();
                }, 1000);
              }
            }
          }
        }, damageRate);
      }

    }
    $scope.generateEnemy();
    $scope.attack = function() {
      if (battleReady) {
        if ($scope.enemyhp > 0) {
          $scope.damage = Math.floor((Math.random() * $rootScope.attackRange) + $rootScope.attackBase);
          if ($rootScope.quellingBlade.purchased)
            $scope.damage = Math.floor($scope.damage * 1.15);
          if ($rootScope.shadowBlade.purchased && $scope.firstHit == false) {
            $scope.firstHit = true;
            $scope.damage = $scope.damage * 2;
            $scope.enemyhp = $scope.enemyhp - $scope.damage;
            $scope.msglog = "Critical! You dealt " + $scope.damage + " damage.";
          } else {
            $scope.enemyhp = $scope.enemyhp - $scope.damage;
            $scope.msglog = "You dealt " + $scope.damage + " damage.";
          }
          if ($scope.enemyhp <= 0) {
            $scope.enemyhp = 0;
            $scope.goldGain = Math.floor((Math.random() * $scope.enemymaxhp * 1.5) + 20) + ($rootScope.floweringTreants.count * $rootScope.floweringTreants.rate);
            $scope.moneyMaker($scope.goldGain);
            $scope.msglog = "Creep killed.";
            $rootScope.creepKills = $rootScope.creepKills + 1;
            $rootScope.lastHits = $rootScope.lastHits + 1;
            $scope.messageLogger("You last hit a creep!", "good");
            if ($rootScope.boots.purchased) {
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
    }
  });


  // shop controller
  dotaApp.controller('shopController', function($scope, $rootScope) {
    console.log("shopController");
    $scope.message = "Purchase items here.";
    $scope.purchase = function(item, cost) {

      var data = $scope.$eval(item);

      if (data.goldcost == false || data.purchased == true) {
        $scope.messageLogger("You already have that item.", "warning");
      } else if ($rootScope.gold >= data.goldcost) {
        $rootScope.gold = $rootScope.gold - data.goldcost;
        if (data.category == "recipe") {
          $scope.messageLogger("You bought " + data.name + " Recipe.", "good");
          data.recipe = true;
          data.goldcost = false;
          if (item == "deadwoodTreants") {
            $rootScope.lumber.enabled = true;
          }
        } else if (data.category == "stackable") {
          $scope.messageLogger("You bought " + data.name + ".", "good");
          data.count++;
          if (item == "handOfMidas") {
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 20) - 1.5));
          } else if (item == "pointBooster") {
            $rootScope.maxmp = $rootScope.maxmp + 150;
            $rootScope.currentmp = $rootScope.currentmp + 150;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "ogreClub") {
            $rootScope.attackBase = $rootScope.attackBase + 10;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "bladeOfAlacrity") {
            $rootScope.attackRange = $rootScope.attackRange + 12;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "staffOfWizardry") {
            $rootScope.mpregen = $rootScope.mpregen + 2;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          }
        } else if (data.category == "unique") {
          $scope.messageLogger("You bought " + data.name + ".", "good");
          data.purchased = true;
        }
        $scope.passives();
      } else {
        $scope.messageLogger("Not enough gold. Go farm some more.", "warning");
      }

      console.log(data);
    }
  });


  // stash controller - view inventory, combine items
  dotaApp.controller('stashController', function($scope, $rootScope) {
    console.log("stashController");
    $scope.message = 'Your stash.';
    $scope.consume = function(item) {

      if (item = "aghs") {

        if ($rootScope.pointBooster.count > 0 && $rootScope.ogreClub.count > 0 && $rootScope.bladeOfAlacrity.count > 0 && $rootScope.staffOfWizardry.count > 0) {
          $rootScope.pointBooster.count--;
          $rootScope.ogreClub.count--;
          $rootScope.bladeOfAlacrity.count--;
          $rootScope.staffOfWizardry.count--;
          $rootScope.aghanimsScepter.created++;
          $rootScope.aghanimsScepter.count++;
          $scope.messageLogger("You created Aghanim's Scepter!", "sentry");
        }

      } else {

        console.log(item);

        var data = $rootScope.$eval(item);

        console.log(data);

        if (data.count > 0) {
          if (item == "mangoTangos") {
            $rootScope.currentmp = $rootScope.currentmp + 150;
            if ($rootScope.currentmp > $rootScope.maxmp) {
              $rootScope.currentmp = $rootScope.maxmp;
            }
          }
          $scope.messageLogger("You consumed " + data.name + ".", "sentry");
          data.count--;
        }
      }
    }
  });

  // build controller - build upgrades
  dotaApp.controller('buildController', function($scope, $rootScope) {
    console.log("buildController");
    $scope.message = 'Your local Dota 2 Workshop.';
    $scope.build = function(upgrade) {

      if (upgrade == "level1") {
        if ($rootScope.lumber.count >= 50) {
          $rootScope.lumber.count = $rootScope.lumber.count - 50;
          $rootScope.workshop.level = 1;
        } else {
          $scope.messageLogger("Not enough resources.", "warning");
        }
      }
    }
  });

  dotaApp.controller('testController', function($scope, $rootScope) {
    console.log("testController");
    $scope.moneyMaker(10000000000);
    $rootScope.maxmp = $rootScope.maxmp + 10000000000;
    $rootScope.currentmp = $rootScope.maxmp;
  });
  
  dotaApp.controller('ShowOrderController', function($scope, $rootScope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
    $scope.message = 'Order.';
  });

  dotaApp.controller('errorController', function($scope, $rootScope) {
    $scope.message = 'Sorry, the page you are looking for is in another castle.';
  });