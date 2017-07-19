angular.module("NerdService", []).factory("Nerd", ["$http", function($http){

  return {
    //call to all nerds
    get: function() {
      return $http.get("/api/nerds");
    },
    //call to post and create new nerd
    create: function(nerdData){
      return $http.post("/api/nerds", nerdData);
    },

    //call to delete a nerd
    delete: function(id){
      return $http.delete("/api/nerds/"+ id);
    }
  };
}]);
