console.log('stinkyController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('stinkyController', stinkyController);

    stinkyController.$inject = ['$http'];
    function stinkyController ($http) {
      var vm = this;
      var currentPage = 0;

      var stinkyPages = [{key: 0, img: '<img style="max-height: 60vmin" src="../images/stinky/stinky0.jpg"/>'}, {key: 1, img: '<img src="../images/stinky/stinky1.jpg"/>'}, {key: 2, img: '<img src="../images/stinky/stinky2.jpg"/>'}, {key: 3, img: '<img src="../images/stinky/stinky3.jpg"/>'}, {key: 4, img: '<img src="../images/stinky/stinky4.jpg"/>'}, {key: 5, img: '<img src="../images/stinky/stinky5.jpg"/>'}, {key: 6, img: '<img src="../images/stinky/stinky6.jpg"/>'}, {key: 7, img: '<img src="../images/stinky/stinky7.jpg"/>'}, {key: 8, img: '<img src="../images/stinky/stinky8.jpg"/>'}, {key: 9, img: '<img src="../images/stinky/stinky9.jpg"/>'}, {key: 10, img: '<img src="../images/stinky/stinky10.jpg"/>'}, {key: 11, img: '<img src="../images/stinky/stinky11.jpg"/>'}, {key: 12, img: '<img src="../images/stinky/stinky12.jpg"/>'}, {key: 13, img: '<img src="../images/stinky/stinky13.jpg"/>'}, {key: 14, img: '<img src="../images/stinky/stinky14.jpg"/>'}, {key: 15, img: '<img src="../images/stinky/stinky15.jpg"/>'}, {key: 16, img: '<img src="../images/stinky/stinky16.jpg"/>'}, {key: 17, img: '<img style="max-height: 60vmin" src="../images/stinky/stinky17.jpg"/>'}];


      vm.nextPage = function() {
        currentPage === 17 ? currentPage = 0 : currentPage += 1;
        $('img').remove();
        $('.stinky').prepend(stinkyPages[currentPage].img)
        if (currentPage !== 0) {
          $('.back-btn').attr('style', 'visibility:visible');
        };
      }

      vm.lastPage = function () {
        currentPage === 0 ? currentPage = 0 : currentPage -= 1
        $('img').remove();
        $('.stinky').prepend(stinkyPages[currentPage].img)
        if (currentPage == 0) {
          $('.back-btn').attr('style', 'visibility:hidden');
        };
      }

    } // End of controller TODO: remove before production
