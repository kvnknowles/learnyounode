var result = 0;
var numbers = process.argv.slice(2);
numbers.map(function (number) {
  result += Number(number);
})
console.log(result);
