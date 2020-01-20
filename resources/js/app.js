var App = angular.module('ChatRoom',['ngResource','ngRoute','ngStorage','socket.io','ngFileUpload','Controllers', 'angular-spinkit', 'ngAnimate'])
.run(["$rootScope", function ($rootScope, $location, $socket){

}]);
App.config(function ($routeProvider, $socketProvider, $locationProvider){

	$routeProvider	// AngularJS Routes
		.otherwise({		
			redirectTo: '/v1/',	// Default Route
			templateUrl: 'app/views/login.html',
			controller: 'loginCtrl'
		});

    //$locationProvider.html5Mode(true);
}).run(function ($location, $socket) {
	var nsp = "";
	if ($location.search().nsp)
    	nsp = "/"+$location.search().nsp;
    $socket.connect($location.host() +":"+ $location.port()+nsp);
});
