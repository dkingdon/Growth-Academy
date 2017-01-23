console.log('stinkyController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('stinkyController', stinkyController);

    stinkyController.$inject = ['$http'];
    function stinkyController ($http) {
      var vm = this;
      var currentPage = 0;

      var stinkyPages = [{key: 0, img: '<img style="max-height: 60vmin" src="https://i.imgur.com/x7LppZR.jpg"/>'}, {key: 1, img: '<img src="https://i.imgur.com/hQnldKw.jpg"/>'}, {key: 2, img: '<img src="https://i.imgur.com/SAZgts4.jpg"/>'}, {key: 3, img: '<img src="https://i.imgur.com/gDQahXx.jpg"/>'}, {key: 4, img: '<img src="https://i.imgur.com/76YlSLb.jpg"/>'}, {key: 5, img: '<img src="https://i.imgur.com/6V7tjsH.jpg"/>'}, {key: 6, img: '<img src="https://i.imgur.com/dNdMjBn.jpg"/>'}, {key: 7, img: '<img src="https://i.imgur.com/HJqV7vY.jpg"/>'}, {key: 8, img: '<img src="https://i.imgur.com/cPvSEzg.jpg"/>'}, {key: 9, img: '<img src="https://i.imgur.com/waqbqrK.jpg"/>'}, {key: 10, img: '<img src="https://i.imgur.com/g728H9n.jpg"/>'}, {key: 11, img: '<img src="https://i.imgur.com/tFR5d58.jpg"/>'}, {key: 12, img: '<img src="https://i.imgur.com/1uZIQve.jpg"/>'}, {key: 13, img: '<img src="https://i.imgur.com/cRXX8Z6.jpg"/>'}, {key: 14, img: '<img src="https://i.imgur.com/KlA5D45.jpg"/>'}, {key: 15, img: '<img src="https://i.imgur.com/S4eUi5K.jpg"/>'}, {key: 16, img: '<img src="https://i.imgur.com/g3rcNpl.jpg"/>'}, {key: 17, img: '<img style="max-height: 60vmin" src="https://i.imgur.com/oi4xjHC.jpg"/>'}];


      vm.nextPage = function() {
        currentPage += 1;
        $('img').remove();
        $('.stinky').prepend(stinkyPages[currentPage].img)
      }

      vm.lastPage = function () {
        currentPage -= 1
        $('img').remove();
        $('.stinky').prepend(stinkyPages[currentPage].img)
      }

    } // End of controller TODO: remove before production
