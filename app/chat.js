var app = angular.module("ChatWindow", []);

app.controller("ChatWindowCtrl", [
  "$scope",
  function ($scope) {
    const userId = sessionStorage.getItem("userId");
    const receiverInfo = JSON.parse(sessionStorage.getItem("receiverInfo"));
    console.log(userId);
    //console.log(sessionStorage);

    const { id, name, image,status } = receiverInfo;
    console.log(id);

    $scope.receiverName = name;
    $scope.receiverImage = image;
    $scope.receiverStatus = status;

    $scope.FetchUserMessage = function (){

      console.log("aa");
      $.ajax({
        type: "POST",
        url: "http://localhost/api/services/MessageServices.php?service=FetchUserMessage",
        data: JSON.stringify({
          "sender_id" : userId,
          "receiver_id" : id
        }),
        success: function (response) {
          console.log(response.message);
          $scope.$applyAsync();
          $scope.UserMessages = response.message;
        }
      });
    }
    $scope.FetchUserMessage();
    console.log($scope.UserMessages);
    
    
  },
]);
