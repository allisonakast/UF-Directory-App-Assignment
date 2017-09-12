
/* Dependencies */
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);

  /* save the coordinates (located in req.results if there is an address property) */
  if(req.results) {
    listing.coordinates = {
      latitude: req.results.lat, 
      longitude: req.results.lng
    };
  }

  /* Then save the listing */
  listing.save(function(err) {
    err ? res.status(400).send(err) : res.json(listing);
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) {
  var listing = req.listing;

  listing.name = req.body.name;
  listing.code = req.body.code;
  listing.address = req.body.address;
  
  if (req.results) listing.coordinates = req.results;
  
  listing.save(function(err) {
    err ? res.status(400).send(err) : res.json(listing);
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;

  listing.remove(function(err) {
    err ? res.status(400).send(err) : res.end();
  })
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Listing.find().sort('code').exec(function(err, listings) {
    err ? res.status(400).send(err) : res.json(listings);
  });
};

/* Middleware: find a listing by its ID, then pass it to the next request handler. */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) res.status(400).send(err);
    
    else {
      req.listing = listing;
      next();
    }
  });
};