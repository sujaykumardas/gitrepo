var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sujay');
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open');

}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 


var Schema = mongoose.Schema;
var WorkerSchema = new Schema({
  fname:  { type: String, required: true, maxlength: 15,minlength:2,index: true,match: /^[A-Za-z]+$/},
  lname: { type: String, required: true , maxlength: 15,minlength:2,match: /^[A-Za-z]+$/},
  age: {type: Number,required: false,maxlength:100,minlength:10,match:/^[0-9]{2}$/},
  password: { type: String, required: true,minlength:8, select: false ,match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/},
  pincode: {type: Number,required: true,enum:[452106,452002]},
  email: {type: String,required:true,maxlength: 15,minlength:8,unique:true,match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
  dob: {type:Date,required:true,match:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](1[9][0-9][0-9]|2[0][10][0-6])$/}
});

//var Emp = db.model("funame",blogSchema);
var Employee = mongoose.model('Worker', WorkerSchema);
var Emp1 = new Employee({fname:"sujay",lname:"das",age:36,password:"e3$rt%tfh",pincode:452106,email:"das97549@gmail.com",dob:"10-10-1993"});

console.log(Emp1);
var x=Emp1.save(function (err) {
  if (!err) console.log('Success!');
  else console.log("error");
});


module.exports=Emp1;
