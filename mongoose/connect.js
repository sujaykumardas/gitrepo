
var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');
var Worker=require('./Worker.js');
var app = express();
var data=[];


app.set('view engine', 'ejs');

app.get('/mongo', function(req, res) {
    res.render('pages/mongoin');
});


app.get('/insert', function(req, res) {
    res.render('pages/insert');
    //console.log("inside insert");
});

app.get('/Worker', function(req, res) {
    
    //var i=0;
    Worker.find({}, function (err, docs) {
           if(err){
            console.log("error while reading");
           }
           data=docs;
           docs.forEach(function(u) {
              //data[i]=u;
              //i++;
           //console.log(u);
        });
           console.log(data);
           res.render('pages/Worker',{data:data});
      });
    
    //console.log("inside insert");
});

app.get('/read', function(req, res) {
    res.render('pages/Worker');
    //console.log("inside insert");
});

app.get('/update/:id', function(req, res) {
    // var data=[];
    var id = req.params.id;
    console.log(id);
    Worker.findById(id, function (err, docs) {
           if(err){
            console.log("error while reading");
           }
           
           res.render('pages/update', {data: docs});
        });
});

app.get('/delete/:id', function(req, res) {
    // var data=[];
    var id = req.params.id;
    console.log(id);
    var obj={};
    obj.ide=id;
    res.render('pages/delete', obj);
 }); 
    //console.log("inside insert");


app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());


app.post('/insert', function(req, res) {
  //console.log("inside post insert");  
  
  //console.log(model.Worker);
  var Emp1 = new Worker({
      fname:req.body.fname, 
      lname:req.body.lname, 
      age:req.body.age, 
      password:req.body.pid, 
      pincode:req.body.pnc, 
      email:req.body.mid
      
    });
  //console.log(Emp1);

  Emp1.save(function (err) {
    //console.log("inside save");
    var obj={};
    if (!err) {
      obj.cor="1";
      console.log("success");
    }
    else {
      obj.inc="2";
      console.log("not successful"+err);
    }
    res.set('Content-Type', 'application/json');
    console.log(obj);
    res.send(JSON.stringify(obj));
  });     

  
    
});

/*app.post('/read', function(req, res) {
   console.log("inside post read");
   var data=[];
   //console.log(Worker);  
   if(req.body.name=="worker"){
      console.log("inside worker");
      Worker.find({}, function (err, docs) {
           if(err){
            console.log("error while reading");
           }
           data=docs;
           console.log(data);
           docs.forEach(function(u) {
           //console.log(u);
        });
      });
   }

   else{
      console.log("No such collection exists");
   }
  
  
});   */  

app.post('/update', function(req, res) {
  //console.log("inside post insert");
   
  Worker.findByIdAndUpdate(req.body.ide,{$set:{
      fname:req.body.fname, 
      lname:req.body.lname, 
      age:req.body.age, 
      password:req.body.pid, 
      pincode:req.body.pnc, 
      email:req.body.mid
       }},function (err, docs) {
           if(err){
            console.log("error while updating");
            obj.inc="2";
            console.log("not successful"+err);
           }
           else{
            var obj={};
            obj.cor="1";
            console.log("success");

           }
           
           res.set('Content-Type', 'application/json');
           console.log(obj);
           res.send(JSON.stringify(obj));
           
           
      });
    
  
  
});  

app.post('/delete', function(req, res) {
  //console.log("inside post insert");
   
  Worker.findByIdAndUpdate(req.body.ide,{$set:{
      fname:req.body.fname, 
      lname:req.body.lname, 
      age:req.body.age, 
      password:req.body.pid, 
      pincode:req.body.pnc, 
      email:req.body.mid
       }},function (err, docs) {
           if(err){
            console.log("error while updating");
            obj.inc="2";
            console.log("not successful"+err);
           }
           else{
            var obj={};
            obj.cor="1";
            console.log("success");

           }
           
           res.set('Content-Type', 'application/json');
           console.log(obj);
           res.send(JSON.stringify(obj));
           
           
      });
    
  
  
});  
    

app.listen(3000);
console.log('3000 is the magic port');


