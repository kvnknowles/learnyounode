var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(filePath) {
    if(path.extname(filePath) === "." + process.argv[3]) {
      console.log(filePath);
    }
  });
});
