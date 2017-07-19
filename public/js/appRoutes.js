angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider

  //homepage
  .when("/", {
    templateUrl: "views/home.html",
    controller: "MainController"
  })

  //nerds page that will use nerd controller
  .when("/nerds", {
    templateUrl: "views/nerd.html",
    controller: "NerdController"
  });

  $locationProvider.html5Mode(true);
}]);
