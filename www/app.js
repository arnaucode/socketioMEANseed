'use strict';

angular.module('app', [
        'ngRoute',
        'btford.socket-io',
        'app.chat'
    ])
    .factory('socket', function(socketFactory) {
        return socketFactory({
            ioSocket: io.connect('localhost:3000')
        });
        //return socketFactory();
    })
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/chat/chat.html',
                controller: 'ChatCtrl'
            });

        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
