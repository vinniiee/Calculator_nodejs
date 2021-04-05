const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  // console.log(req.body.num1);
  var opr = req.body.operation;
  console.log(num1, num2, opr);
  if (opr == "add") {
    res.send("The result of calculation is " + (num1 + num2).toString());
  } else if (opr == "sub") {
    res.send("The result of calculation is " + (num1 - num2).toString());
  } else if (opr == "mul") {
    res.send("The result of calculation is " + (num1 * num2).toString());
  } else if (opr == "div") {
    res.send("The result of calculation is " + (num1 / num2).toString());
  }
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
