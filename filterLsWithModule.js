var fs = require('fs');
var path = require('path');
var myModule = require('./myModule.js');

myModule(process.argv[2], process.argv[3], function(err, list) {
  if(err) {
    throw err;
  }
  list.forEach(function(filePath) {
    console.log(filePath);
  });
});
