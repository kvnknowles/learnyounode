http = require('http')

http.get(process.argv[2], function(response) {
  message = ""
  response.setEncoding('utf8')
  response.on('data', function(data) {
    message += data;   
  });
  response.on('end', function(data) {
    console.log(message.length);
    console.log(message);
  });

  response.on('error', console.error)
});
