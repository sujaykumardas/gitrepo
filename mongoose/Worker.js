var mongoose=require('mongoose');
var db=require('./createConnect');
var Schema = mongoose.Schema;
var psw= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var WorkerSchema = new Schema({
  fname: { 
  	type: String, 
  	required: true, 
  	maxlength: 15, 
  	minlength:2, 
  	index: true, 
  	match: /^[A-Za-z]+$/
  },
  lname: { 
  	type: String, 
  	required: true , 
  	maxlength: 15, 
  	minlength:2, 
  	match: /^[A-Za-z]+$/
  },
  age: { 
  	type: Number, 
  	required: true, 
  	max:100, 
  	min:10, 
  	match:/^[0-9]{2}$/ 
  },
  password: { 
  	type: String, 
  	required: true, 
  	minlength:8, 
  	select: false , 
  	match: psw
  },
  pincode: { 
  	type: Number, 
  	required: true, 
  	enum:[452106,452002]
  },
  email: { 
  	type: String, 
  	required: true, 
  	maxlength: 15, 
  	minlength: 8, 
  	unique: true, 
  	match: mail
  }
});

var Worker = db.model('Worker', WorkerSchema);

 
module.exports= Worker ;