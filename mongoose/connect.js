//var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var obj;
var name;
var WorkerSchema;

// Connect to the db
app.set('view engine', 'ejs');

app.get('/mongo', function(req, res) {
    res.render('pages/mongoin');
});

app.get('/create', function(req, res) {
    res.render('pages/create');
    console.log("inside create");
});
app.get('/insert', function(req, res) {
    res.render('pages/insert');
    console.log("inside insert");
});
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
var obj={};
app.post('/create', function(req, res) {
   
  

  var db = mongoose.connect('mongodb://localhost/sujay')

  var Schema = mongoose.Schema;
  WorkerSchema = new Schema({
  fname:  { type: String, required: true, maxlength: 15,minlength:2,index: true,match: /^[A-Za-z]+$/},
  lname: { type: String, required: true , maxlength: 15,minlength:2,match: /^[A-Za-z]+$/},
  age: {type: Number,required: false,max:100,min:10,match:/^[0-9]{2}$/},
  password: { type: String, required: true,minlength:8, select: false ,match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/},
  pincode: {type: Number,required: true,enum:[452106,452002]},
  email: {type: String,required:true,maxlength: 15,minlength:8,unique:true,match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
  dob: {type:Date,required:true,match:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](1[9][0-9][0-9]|2[0][10][0-6])$/}
});
  name=req.body.name;
  obj = mongoose.model(name, WorkerSchema);
        

   console.log("inside post");
   res.send("send");
   //res.set('Content-Type', 'application/json');
   //res.send(JSON.stringify(obj));
    //res.render('pages/ajform');
});
app.post('/insert', function(req, res) {
   
  //var mongoose = require('mongoose');

  var db = mongoose.connect('mongodb://localhost/sujay')
  var Schema = mongoose.Schema;
  WorkerSchema = new Schema({
  fname:  { type: String, required: true, maxlength: 15,minlength:2,index: true,match: /^[A-Za-z]+$/},
  lname: { type: String, required: true , maxlength: 15,minlength:2,match: /^[A-Za-z]+$/},
  age: {type: Number,required: false,max:100,min:10,match:/^[0-9]{2}$/},
  password: { type: String, required: true,minlength:8, select: false ,match:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/},
  pincode: {type: Number,required: true,enum:[452106,452002]},
  email: {type: String,required:true,maxlength: 15,minlength:8,unique:true,match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
  dob: {type:Date,required:true,match:/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](1[9][0-9][0-9]|2[0][10][0-6])$/}
});
  
  obj = mongoose.model('coll', WorkerSchema);
  var Emp1 = new obj({fname:req.body.fname,lname:req.body.fname,age:req.body.age,password:req.body.pid,pincode:req.body.pnc,email:req.body.mid,dob:req.body.dob});
  Emp1.save(function (err) {
  if (!err) console.log('Success!');
  else console.log("error");
});     

   console.log("inside post");
   res.send("send");
   //res.set('Content-Type', 'application/json');
   //res.send(JSON.stringify(obj));
    //res.render('pages/ajform');
});

app.listen(8080);
console.log('8080 is the magic port');

/*MongoClient.connect("mongodb://localhost:27017/sujay", function(err, db) {
  if(!err) {
    console.log("We are connected to sujay");
    
	
	
	var doc1 = {'hello':'doc1'};
  	col.find().toArray(function(err, items) {
  		for(i=0;i<items.length;i++){
  			//console.log(items[i]);
  		}
  	});

  	col.insert(doc1);
  }
});*/
