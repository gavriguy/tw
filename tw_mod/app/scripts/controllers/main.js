
twModApp.controller('MainCtrl', function($scope, $http, $timeout) {
	//$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Testacular'];
  //Rerednser http://platform.twitter.com/widgets.js after tweets ware loaded
  $timeout(function() {
    $.ajax({ url: 'http://platform.twitter.com/widgets.js', dataType: 'script', cache:true});
}, 1000);

		var twitter_api_url = "http://api.twitter.com/1/statuses/user_timeline.json",
			username = "gavriguy",
			config = {
				params: {
					screen_name: username,
					callback: "JSON_CALLBACK",
					include_rts: true,
					count: 5,
					clientsource: "TWITTERINC_WIDGET",
					"1340767850386": "cachebus"
				}
			};
		$http.jsonp(twitter_api_url, config).success(

		function(data, status, headers, config) {
			$scope.tweets = data;
		});
  
	

});