var app = angular.module("SignUp", []);

app.controller("SignUpCtrl", [
  "$scope",
  "$http",
  "$window",
  function ($scope, $http, window) {
    $scope.fname = "";
    $scope.lname = "";
    $scope.email = "";
    $scope.password = "";
    $scope.image = "";

    $scope.HandleImage = function (elm) {
      $scope.image = elm.files[0].name;
      $scope.$apply();
    };

    $scope.HandleAction = function (event) {
      event.preventDefault;
      console.log(
        $scope.fname,
        $scope.lname,
        $scope.email,
        $scope.password,
        $scope.image
      );
      var userInfo = {
        username: $scope.fname + " " + $scope.lname,
        email: $scope.email,
        password_hash: $scope.password,
        image: $scope.image,
      };
      console.log(userInfo);

      $http
        .post(
          "http://localhost/api/services/UserServices.php?service=create",
          userInfo
        )
        .then(function (response) {
          console.log(response.status);
          if(response.status == 200) {
            location.href = "login.html";
          }
        });
    };
  },
]);
