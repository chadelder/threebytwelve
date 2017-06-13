var mongoose = require('mongoose');

// Order Schema
var orderSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },

  artist: {
    type: String,
    required: true
  },

  album: {
    type: String,
    required: true
  },

  click: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  create_date: {
    type: Date,
  },
});

var ThreebyTwelve = module.exports = mongoose.model('ThreebyTwelve', orderSchema);

// get data
module.exports.getTest = function(callback, limit, options){
ThreebyTwelve.find(callback).limit(limit);
};

// Add data
module.exports.postTest = function(test, callback){
	ThreebyTwelve.create(test, callback);
}
