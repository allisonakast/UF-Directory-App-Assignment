angular.module('listings').factory('Listings', ['$https', 
  function($https) {
    var methods = {
      getAll: function() {
        return $https.get('https://localhost:8080/api/listings');
      },

      create: function(listing) {
        return $https.post('https://localhost:8080/api/listings', listing);
      }, 

      read: function(id) {
        return $https.get('https://localhost:8080/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $https.put('https://localhost:8080/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $https.delete('https://localhost:8080/api/listings/' + id);
      }
    };

    return methods;
  }
]);