console.log('kAssociationsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kAssociationsController', kAssociationsController);

    kAssociationsController.$inject = ['$http'];
    function kAssociationsController ($http) {
      var vm = this;
      var random;
      var answer;

      var targetPictures = [{name:'bird', firstLetter: 'b', img:'../images/kAssociations/bird.png'}, {name:'carrot', firstLetter: 'c', img:'../images/kAssociations/carrot.png'}, {name:'elephant', firstLetter: 'e', img:'../images/kAssociations/elephant.png'}, {name:'dinosaurs', firstLetter: 'd', img:'../images/pkCounting/dinosaurs.png'}, {name:'fox', firstLetter: 'f', img:'../images/kAssociations/fox.png'}, {name:'grapes', firstLetter: 'g', img:'../images/kAssociations/grapes.png'}, {name:'lion', firstLetter: 'l', img:'../images/kAssociations/lion.png'}, {name:'rabbit', firstLetter: 'r', img:'../images/kAssociations/rabbit.png'}, {name:'snake', firstLetter: 's', img:'../images/kAssociations/snake.png'}, {name:'watermelon', firstLetter: 'w', img:'../images/kAssociations/watermelon.png'}, {name:'zebra', firstLetter: 'z', img:'../images/kAssociations/zebra.png'}];

      vm.randomize = function(arr) {
        var currentIndex = arr.length
        while (0 !== currentIndex) {
          var randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          var tempVal = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = tempVal
        }
        return arr;
      }

      vm.displayTargetImage = function() {
        $('.action').text('Next');
        random = vm.randomize(targetPictures);
        var randomMinimized = [random[0], random[1], random[2]];
        var finalPieces = vm.randomize(randomMinimized);
        answer = finalPieces.indexOf(random[1]);
        $('#question').text('Can you find the picture that begin with the letter "' + random[1].firstLetter + '" ?')
        for (var i = 0; i < finalPieces.length; i++) {
          $('#kPic-' + i).attr('src', finalPieces[i].img).attr('style', 'visibility:visible');
        };
      }

      vm.checkForWinner = function(num) {
        for (var i = 0; i < 4; i++) {
          $('#kPic-' + i).attr('src', ' ').attr('style', 'visibility:hidden');
        }
        if (num === answer) {
          $('#question').text('Great Job! You did it! The word ' + '"' + random[1].name + '"' + ' starts with the letter ' + '"' + random[1].firstLetter + '"!' );
        }
        else {
          $('#question').text('Woops! Not quite right, please try again');
        }
      }

  } // End of controller TODO: remove before production
