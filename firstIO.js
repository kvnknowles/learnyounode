var fs = require('fs')
var numOfLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(numOfLines)
