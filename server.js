// server.js
// load the things we need
var express = require('express');
var bp = require('body-parser');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file



// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/', function(req, res) {
    console.log("inside get");
    res.render('pages/ajform');
});

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.post('/', function(req, res) {
   console.log("inside post");
   console.log(req.body.fname);
   //console.log(req.body.obj.fname);      // your JSON
   //var json = JSON.parse(req.body);
   var str= /^[A-Za-z]+$/;
   var ch=0;
   var obj={};
        if(!str.test(req.body.fname))
        {
           ch=1;
           obj.fname="invalid first name";
           
           
     
        }
        
        if(!str.test(req.body.lname))
        {
           ch=1;
           obj.lname="invalid last name";
        }

        if(ch==0)
        {
           obj.but="Form submitted";
           
        }


   res.set('Content-Type', 'application/json');
   res.send(JSON.stringify(obj));
    //res.render('pages/ajform');
});

app.listen(8080);
console.log('8080 is the magic port');



app.get('/index', function(req, res) {
    var cent = [
        { name: 'sachin', centuries: 30},
        {  name: 'sehwag', centuries: 16 },
        { name: 'sourav', centuries: 22 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/form', {
        cent: cent
        
    });
});
