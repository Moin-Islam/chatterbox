var app = angular.module("UserDashboard", []);

app.controller("UserDashboardCtrl", [
  "$scope",
  "$window",
  "$http",
  function ($scope, $http, $window) {
    const userId = sessionStorage.getItem("userId");
    $scope.UserName = sessionStorage.getItem("userName");
    $scope.UserStatus = sessionStorage.getItem("userStatus");
    $scope.UserImage = sessionStorage.getItem("userimage");

    $scope.OnlineUsers = JSON.parse(sessionStorage.getItem("onlineusers"));

    console.log($scope.OnlineUsers);

    $scope.OpenConversation = function (id, name, image,status) {
      const receiverInfo = {
        id: id,
        name: name,
        image: image,
        status: status
      };
      console.log(JSON.stringify(receiverInfo));
      sessionStorage.setItem("receiverInfo", JSON.stringify(receiverInfo));
      location.href = "chat.html";
    };
  },
]);
