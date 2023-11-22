var app = angular.module("ChatWindow", []);

app.controller("ChatWindowCtrl", [
  "$scope",
  function ($scope) {
    const userId = sessionStorage.getItem("userId");
    const receiverInfo = JSON.parse(sessionStorage.getItem("receiverInfo"));
    console.log(receiverInfo);

    const { id, name, image,status } = receiverInfo;
    console.log(id,name,image);

    $scope.receiverName = name;
    $scope.receiverImage = image;
    $scope.receiverStatus = status;

    
    
  },
]);
