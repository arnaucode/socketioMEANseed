'use strict';

angular.module('app.chat', [
  'btford.socket-io', 'ngRoute', 'ngAnimate'
])
.controller('ChatCtrl', function ($scope, socket,
    $filter) {
    $scope.msgs=[];

  socket.on('newmsg', function (data) {
      console.log(data);
    $scope.msgs.push(data);
  });
  $scope.msg={};
  $scope.send = function(){
      if($scope.msg.text)
      {
          console.log("emitting");
          socket.emit("msg", $scope.msg, function(data){

          });
          $scope.msg={};
      }
  };
});
