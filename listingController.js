angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
        if ($scope.listing.code && $scope.listing.name){
          $scope.listing.code = $scope.listing.code.toUpperCase();
          $scope.listings.push($scope.listing);
          $scope.listing = "";
        }
    };

    $scope.deleteListing = function(index) {
        for(i in $scope.listings) {
          if($scope.listings[i].code == index.code) {
            $scope.listings.splice(i, 1);
          }
        }
    };

    $scope.showDetails = function(index) {
        $scope.detailedInfo = index;
        $scope.detailedInfo.coordinate
        if (!$scope.detailedInfo.code) $scope.detailedInfo.code = "N/A";
        if (!$scope.detailedInfo.name) $scope.detailedInfo.name = "N/A";
        if (!$scope.detailedInfo.coordinates) $scope.detailedInfo.coordinates = "N/A";
        if (!$scope.detailedInfo.address) $scope.detailedInfo.address = "N/A";
    };

    $scope.clearDetails = function(){
        $scope.detailedInfo = "";
    }
  }
]);