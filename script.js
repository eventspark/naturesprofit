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

      // route for the dojo page
      .when('/dojo', {
        title: 'Dojo',
        templateUrl : 'pages/dojo.html',
        controller  : 'dojoController'
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

    // core stats
    $rootScope.timer = 0;
    $rootScope.seconds = 0;
    $rootScope.steps = 0;
    // battle stats
    $rootScope.attackBase = 1;
    $rootScope.attackRange = 5;
    $rootScope.creepDamageRate = 0;

    $rootScope.creeps = {
      kills: 0,
      lastHits: 0,
      consecutiveLastHits: 0,
      baseBounty: 37
    }


    // resources
    $rootScope.gold = {
      count: 0,
      lifetime: 0,
      baserate: 1,
      totalrate: 0,
      ratepersec: 0,
      counter: 0
    }
    $rootScope.mana = {
      count: 100,
      max: 100,
      baserate: 1,
      totalrate: 0,
      ratepersec: 0,
      counter: 0
    }
    $rootScope.lumber = {
      enabled: false,
      count: 0,
      max: 100,
      baserate: 0,
      totalrate: 0,
      ratepermin: 0,
      counter: 0
    }


    $rootScope.counter = {
      mpRegenRate: 0,
    }


    // upgrades workshop
    $rootScope.workshop = {
      level: 0,
      name: "Build Workshop",
      description: "Create the Dota 2 Workshop",
      lumbercost: 50
    }
    $rootScope.reinforcedWood = {
      name: "Reinforced Wood",
      description: "Reinforce your Combat Treants to improve their damage rate",
      count: 0,
      lumbercost: 50,
      rate: 1
    }
    $rootScope.shed = {
      name: "Build Shed",
      description: "Build a wooden shed to store more lumber",
      count: 0,
      lumbercost: 25,
      rate: 50
    }


    // nature's call treants
    $rootScope.farmingTreants = {
      name: "Farming Treant",
      description: "A Treant will go farm neutrals, gaining you passive gold",
      count: 0,
      dead: 0,
      mpcost: 50,
      mptype: "flat",
      rate: 1
    }
    $rootScope.combatTreants = {
      name: "Combat Treant",
      description: "A Treant will help you fight, helping you deal damage to creeps",
      count: 0,
      dead: 0,
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
      dead: 0,
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
      dead: 0,
      mpcost: 500,
      mptype: "flat",
      rate: 1/30
    }
    $rootScope.shroomlingTreants = {
      name: "Shroomling",
      description: "Shroomlings polish off your creep kills, increasing the base bounty gold dropped",
      category: "recipe",
      recipe: false,
      goldcost: 100000,
      count: 0,
      dead: 0,
      mpcost: 1000,
      mptype: "flat",
      rate: 5
    }
    $rootScope.evergreenTreants = {
      name: "Evergreen Stalker",
      description: "Send off this warrior Treant to go hunt neutrals for materials",
      category: "recipe",
      recipe: false,
      goldcost: 500000,
      count: 0,
      dead: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.pumpkinTreants = {
      name: "Hallowed Pumpkin",
      description: "A Treant goes to set scary pumpkin traps to ward off enemy heroes",
      category: "recipe",
      recipe: false,
      goldcost: 1000000,
      count: 0,
      dead: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }
    $rootScope.shroomthingTreants = {
      name: "Shroom Thing",
      description: "What does he do? Nobody knows...",
      category: "recipe",
      recipe: false,
      goldcost: 10000000,
      count: 0,
      dead: 0,
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
      dead: 0,
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
      dead: 0,
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
      dead: 0,
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
      dead: 0,
      mpcost: 0,
      mptype: "flat",
      rate: 0
    }


    // skills
    $rootScope.wrathOfNature = {
      name: "Wrath of Nature",
      description: "Grants a gold bounty that scales with mana spent to cast",
      skillType: "active",
      mpcost: 80,
      mptype: "percentmax",
      learnAghsCost: 0,
      learned: true
    }
    $rootScope.greevilsGreed = {
      name: "Greevil's Greed",
      description: "Consecutive Last Hits grant bonus bounty",
      skillType: "passive",
      mpcost: 0,
      mptype: "flat",
      learnAghsCost: 1,
      learned: false
    }
    $rootScope.chakraMagic = {
      name: "Chakra Magic",
      description: "Restores 10% mana once every minute",
      skillType: "passive",
      mpcost: 0,
      mptype: "flat",
      learnAghsCost: 1,
      learned: false
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

      $rootScope.creeps.consecutiveLastHits = 0;
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
      $rootScope.mana.max = $rootScope.mana.max + 1000;
      $rootScope.mana.count = $rootScope.mana.max;
      $rootScope.lumber.count = $rootScope.lumber.max;
      $rootScope.aghanimsScepter.created++;
      $rootScope.aghanimsScepter.count++;
    }

    $scope.instance = 0;
    $scope.active = 0;
    $scope.moneyMaker = function(amount, force) {
      amount = Math.floor(amount);
      $rootScope.gold.count = $rootScope.gold.count + amount;
      $rootScope.gold.lifetime = $rootScope.gold.lifetime + amount;
      if ($rootScope.gold.lifetime > 1000000000) {
        if ($rootScope.rank != "Don Furion") {
          $rootScope.rank = "Don Furion";
          $scope.messageLogger("You've achieved rank: Don Furion");
        }
      } else if ($rootScope.gold.lifetime > 50000000) {
        if ($rootScope.rank != "Furion the Green") {
          $rootScope.rank = "Furion the Green";
          $scope.messageLogger("You've achieved rank: Furion the Green");
        }
      } else if ($rootScope.gold.lifetime > 1000000) {
        if ($rootScope.rank != "Sapling") {
          $rootScope.rank = "Sapling";
          $scope.messageLogger("You've achieved rank: Sapling");
        }
      } else if ($rootScope.gold.lifetime > 5000) {
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
        if (amount > 10)
          $scope.messageLogger("+" + amount + "g", "money");
      }
    }

    $scope.messageLogger = function(message, type) {
      $("#log").append("<div class='log" + type + "'>" + message + "</div>");
      $("#log").scrollTop(999999999);
    }

    $scope.restoreMana = function(amount) {
      $rootScope.mana.count = Math.floor($rootScope.mana.count + amount);
      if ($rootScope.mana.count > $rootScope.mana.max) {
        $rootScope.mana.count = $rootScope.mana.max;
      }
    }

    $scope.passives = function() {

      // passive gold rate
      $rootScope.gold.totalrate = 1/($rootScope.gold.baserate + ($rootScope.farmingTreants.count * $rootScope.farmingTreants.rate) + ($rootScope.handOfMidas.count * $rootScope.handOfMidas.rate)) * 100;
      $rootScope.gold.ratepersec = Math.floor(100/$rootScope.gold.totalrate);
      console.log("gold gain rate: " + $rootScope.gold.ratepersec + " gold/sec");

      // passive mana regen rate
      $rootScope.totalManaRate = 1/($rootScope.mana.baserate) * 100;
      $rootScope.mana.ratepersec = Math.floor(100/$rootScope.totalManaRate);
      console.log("mana regen rate: " + $rootScope.mana.ratepersec + " mp/sec");

      if ($rootScope.lumber.enabled) {
        $rootScope.lumber.totalrate = 1/($rootScope.lumber.baserate + ($rootScope.deadwoodTreants.count * $rootScope.deadwoodTreants.rate)) * 100;
        $rootScope.lumber.ratepermin = Math.floor(60 * (100/$rootScope.lumber.totalrate));
        console.log("lumber gain rate: " + $rootScope.lumber.ratepermin + " lumber/min");
      }
      
      $interval.cancel(timerInterval);
      timerInterval = $interval(function() {
        $rootScope.timer = $rootScope.timer + 1;
        $rootScope.seconds = Math.floor($rootScope.timer/100);

        if ($rootScope.chakraMagic.learned) {
          if ($rootScope.timer % (60 * 100) == 0) {
            $scope.restoreMana($rootScope.mana.max/10);
            $scope.messageLogger("Chakra Magic!", "sentry")
          }
        }

        if ($scope.gold.totalrate > 0) {
          $rootScope.gold.counter++;
          if ($rootScope.gold.counter > $scope.gold.totalrate) {
            var goldGained = Math.floor($rootScope.gold.counter/$scope.gold.totalrate);
            $scope.moneyMaker(goldGained);
            $rootScope.gold.counter = $rootScope.gold.counter % $scope.gold.totalrate;
          }
        }
        if ($scope.totalManaRate > 0) {
          $rootScope.mana.counter++;
          if ($rootScope.mana.counter > $scope.totalManaRate) {
            var manaGained = Math.floor($rootScope.mana.counter/$scope.totalManaRate);
            $rootScope.mana.counter = $rootScope.mana.counter % $scope.totalManaRate;
            $scope.restoreMana(manaGained);
          }
        }
        if ($rootScope.lumber.totalrate > 0) {
          $rootScope.lumber.counter++;
          if ($rootScope.lumber.counter > $rootScope.lumber.totalrate) {
            var lumberGained = Math.floor($rootScope.lumber.counter/$scope.lumber.totalrate);
            $rootScope.lumber.count = $rootScope.lumber.count + lumberGained;
            if ($rootScope.lumber.count > $rootScope.lumber.max) {
              $rootScope.lumber.count = $rootScope.lumber.max;
            }
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
        truempcost = $rootScope.mana.max * (data.mpcost / 100);
      } else if (data.mptype == "percentcurrent") {
        truempcost = $rootScope.mana.count * (data.mpcost / 100);
      } else if (data.mptype == "flat") {
        truempcost = data.mpcost;
      } else {
        console.log("undefined mptype");
      }
      
      if ($rootScope.mana.count >= truempcost) {
        $rootScope.mana.count = $rootScope.mana.count - truempcost;
        if (type == "farmingTreants") {
          data.count++;
          data.mpcost = Math.floor(data.mpcost * (Math.log(data.count + 100) - 3.6));
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "combatTreants") {
          data.count++;
          data.mpcost = Math.floor(data.mpcost * (Math.log(data.count + 100) - 3.6));
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "floweringTreants") {
          data.count++;
          data.mpcost = Math.floor(data.mpcost * 1.02);
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "deadwoodTreants") {
          data.count++;
          data.mpcost = Math.floor(data.mpcost * 1.02);
          $scope.messageLogger("You spawned a " + data.name + ".", "good");
        } else if (type == "shroomlingTreants") {
          data.count++;
          data.mpcost = Math.floor(data.mpcost * 1.02);
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

    // cancels battle cycle when not on farm route
    var disengage = $rootScope.$on('$locationChangeSuccess', function() {
      // console.log("Cancel Interval");
      $interval.cancel(passiveDamage);
      $timeout.cancel(autoSpawn);
      disengage();
    });

    $scope.generateEnemy = function() {
      battleReady = false;
      $timeout(function() {
        battleReady = true;
      }, 1000);

      $timeout.cancel(autoSpawn);
      $scope.msglog = "New creep appears.";
      $scope.enemymaxhp = Math.floor((Math.random() * 10) + 10 + $rootScope.creeps.kills);
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
              $scope.goldGain = (Math.random() * 7) + $rootScope.creeps.baseBounty;
              var shroomlingBonus = $rootScope.shroomlingTreants.count * $rootScope.shroomlingTreants.rate;
              $scope.goldGain = $scope.goldGain + shroomlingBonus;
              $scope.goldGain = $scope.goldGain * 0.5; // penalty for non last hit
              $scope.moneyMaker($scope.goldGain);
              $scope.msglog = "Creep killed.";
              console.log("Creep killed by passive damage");
              $rootScope.creeps.kills++;
              $rootScope.creeps.consecutiveLastHits = 0;
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
      console.log("Clicked attack");
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
            $interval.cancel(passiveDamage);
            $scope.enemyhp = 0;
            $scope.msglog = "Creep killed.";
            console.log("Creep killed by last hit");
            $rootScope.creeps.kills++;
            $rootScope.creeps.lastHits++;
            $scope.messageLogger("You last hit a creep!", "good");
            $scope.goldGain = (Math.random() * 7) + $rootScope.creeps.baseBounty;
            var shroomlingBonus = $rootScope.shroomlingTreants.count * $rootScope.shroomlingTreants.rate;
            $scope.goldGain = $scope.goldGain + shroomlingBonus;
            var floweringBonus = $rootScope.floweringTreants.count * $rootScope.floweringTreants.rate;
            $scope.goldGain = $scope.goldGain + floweringBonus;
            if ($rootScope.greevilsGreed.learned)
              $rootScope.creeps.consecutiveLastHits++;
            if ($rootScope.greevilsGreed.learned) {
              var greevilsBonus = (100 + ($rootScope.creeps.consecutiveLastHits * 3))/100;
              $scope.goldGain = $scope.goldGain * greevilsBonus;
              $scope.messageLogger("Greevil's Greed! " + $rootScope.creeps.consecutiveLastHits + "x chain.", "money");
            }
            $scope.moneyMaker($scope.goldGain);
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
      } else if ($rootScope.gold.count >= data.goldcost) {
        $rootScope.gold.count = $rootScope.gold.count - data.goldcost;
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
            $rootScope.mana.max = $rootScope.mana.max + 150;
            $rootScope.mana.count = $rootScope.mana.count + 150;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "ogreClub") {
            $rootScope.attackBase = $rootScope.attackBase + 10;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "bladeOfAlacrity") {
            $rootScope.attackRange = $rootScope.attackRange + 12;
            data.goldcost = Math.floor(data.goldcost * (Math.log(data.count + 50) - 2.75));
          } else if (item == "staffOfWizardry") {
            $rootScope.mana.baserate = $rootScope.mana.baserate + 2;
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

      if (item == "aghs") {

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
            $scope.restoreMana(150);
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

      console.log(upgrade);

      var data = $rootScope.$eval(upgrade);

      console.log(data);

      if ($rootScope.lumber.count >= data.lumbercost) {
        $rootScope.lumber.count = $rootScope.lumber.count - data.lumbercost;
        if (upgrade == "workshop") {
          $scope.messageLogger("You created the Dota Workshop. Create upgrades for your treants here.", "good");
          $rootScope.workshop.level = 1;
        } else {
          $scope.messageLogger("You created " + data.name + ".", "good");
           if (upgrade == "reinforcedWood") {
            $rootScope.combatTreants.rate = $rootScope.combatTreants.rate + data.rate;
            data.rate = data.rate * 2/3;
          } else if (upgrade == "shed") {
            $rootScope.lumber.max = $rootScope.lumber.max + data.rate;
          }
        }
      } else {
        $scope.messageLogger("Not enough resources.", "warning");
      }
    }
  });



  // dojo controller - learn new skills
  dotaApp.controller('dojoController', function($scope, $rootScope) {
    console.log("dojoController");
    $scope.message = 'Learn new skills from the grand magus.';
    $scope.train = function(skill) {

      console.log(skill);

      var data = $rootScope.$eval(skill);

      console.log(data);

      if (data.learned == true) {
        $scope.messageLogger("You already learned this skill.", "warning");
      } else if ($rootScope.aghanimsScepter.count >= data.learnAghsCost) {
        $rootScope.aghanimsScepter.count = $rootScope.aghanimsScepter.count - data.learnAghsCost;
        $scope.messageLogger("You learned " + data.name + "!", "good");
        data.learned = true;
      } else {
        $scope.messageLogger("Not enough for do this power.", "warning");
      }
    }

  });


  dotaApp.controller('testController', function($scope, $rootScope) {
    console.log("testController");
    $scope.moneyMaker(10000000000);
    $rootScope.mana.max = $rootScope.mana.max + 10000000000;
    $rootScope.mana.count = $rootScope.mana.max;
    $rootScope.floweringTreants.recipe = true;
    $rootScope.deadwoodTreants.recipe = true;
    $rootScope.shroomlingTreants.recipe = true;
    $rootScope.lumber.enabled = true;
    $rootScope.aghanimsScepter.count = 5;
    $rootScope.aghanimsScepter.created = 5;
  });
  
  dotaApp.controller('ShowOrderController', function($scope, $rootScope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
    $scope.message = 'Order.';
  });

  dotaApp.controller('errorController', function($scope, $rootScope) {
    $scope.message = 'Sorry, the page you are looking for is in another castle.';
  });