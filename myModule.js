var fs = require('fs');
var path = require('path');

function foo(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if(err) {
      return callback(err);
    }
    list = list.filter(function(filePath) {
      if(path.extname(filePath) == "." + extension) {
        return filePath;
      }
    });
    callback(null, list);
  });
}

module.exports = foo;
