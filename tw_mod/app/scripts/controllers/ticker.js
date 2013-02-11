'use strict';

twModApp.controller('TickerCtrl', function($scope) {
  $scope.startTicker = function() {
    $('.ticker').addClass('long');
     window.addEventListener( 'webkitTransitionEnd', 
    function( event ) { 
      //alert('d');
      $('#webticker').append(' | <a>@username:</a> Samsungs Superbowl spot: Get-a-Macs revenge?: The creator of Apples best-known ad campaign left after <a href="#">qewq.co.ly</a>');
      var marquee = $('#webticker').marquee('marq');
      $('.ticker').bind('mouseover', function(){
        marquee.trigger('pause');
      });
  
      $('.ticker').bind('mouseout', function(){
        marquee.trigger('unpause');
      });



    }, false );
  }
});
