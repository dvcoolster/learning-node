var book = require ('./lib/grades').book;

var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send("Hello World");
});

app.get('/grade', function (req, res) {
  book.reset();
  var grades = req.query.grades.split(',');
  for (var i = 0; i < grades.length; i++) {
    book.addGrade(parseInt(grades[i]));
  }
  var average = book.getAverage();
  res.send("The average is " + average);

});

//
// for (var i = 2; i < process.argv.length; i++) {
//   book.addGrade(parseInt(process.argv[i]));
// };
//
// book.setAverage();
// console.log(book.getAverage());

app.listen(3000);
console.log("Server Ready");
