var mongoose=require('mongoose');
var db=require('./createConnect');
var Schema = mongoose.Schema;
var psw= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var dofb= /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](1[9][0-9][0-9]|2[0][10][0-6])$/;

WorkerSchema = new Schema({
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
  	required: false, 
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
  	match: mail},
  dob: { 
  	type:Date, 
  	required:true, 
  	validate: {
          validator: function(v) {
            return dofb.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
  }
});

var Worker = mongoose.model('Worker', WorkerSchema);