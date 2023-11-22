var app = angular.module("Login", []);

app.controller("LoginCtrl", [
  "$scope",
  "$window",
  function ($scope) {
    $scope.email = "";
    $scope.password = "";

    $scope.HandleAction = function (event) {
      event.preventDefault();

      var loginInfo = {
        email: $scope.email,
        password_hash: $scope.password,
      };

      // Simple GET request example:
      $.ajax({
        type: "POST",
        url: "http://localhost/api/services/UserServices.php?service=authentication",
        data: JSON.stringify(loginInfo),
        success: function (response) {
          console.log(response);
          alert("Signing in was successful");
          if (response.code == 200) {
            console.log(response.userid);
            sessionStorage.setItem("userId", response.userid);
            sessionStorage.setItem("userName", response.username);
            sessionStorage.setItem("userimage", response.userimage);
            sessionStorage.setItem("userStatus", response.userStatus);
            sessionStorage.setItem(
              "onlineusers",
              JSON.stringify(response.onlineUsers.records)
            );
            location.href = "users.html";
          }
        },
      });
    };
  },
]);
