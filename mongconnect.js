var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/sujay')


var Schema = mongoose.Schema;
var EmpSchema = new Schema({
  fname:  String,
  lname: String,
  
});

//var Emp = db.model("funame",blogSchema);
var Employee = mongoose.model('Employ', EmpSchema);
var Emp1 = new Employee({fname:"sujay",lname:"das"});

console.log(Emp1);
var x=Emp1.save(function (err) {
  if (!err) console.log('Success!');
  else console.log("error");
});

module.exports=Emp1;
