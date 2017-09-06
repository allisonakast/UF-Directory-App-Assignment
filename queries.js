'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config')

mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri, {
  useMongoClient: true
});


var findLibraryWest = function() {
  Listing.find({ name: 'Library West' }, function(err, listing) {
    if (err) throw err;
  
    console.log(listing);
  });
};

var removeCable = function() {
  Listing.findOne({ code : 'CABL'}, function (err, listing) {
    if (err) throw err;
    
    listing.remove(function (err) {
        console.log(listing);
    });
});
};

var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: 'Updated address' }, function(err, listing) {
    if (err) throw err;
  
    console.log(listing);
  });
};

var retrieveAllListings = function() {
  Listing.find({}, function(err, listings) {
    if (err) throw err;
  
    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
