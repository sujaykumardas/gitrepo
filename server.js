// server.js
// load the things we need
var express = require('express');
var bp = require('body-parser');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/', function(req, res) {
    //console.log("inside get");
    res.render('pages/ajform');
});

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.post('/', function(req, res) {
   
   var str= /^[A-Za-z]+$/;
   var num= /^[0-9]{2}$/;
   var yn= /^(y|n){1}$/;
   var dof= /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](1[9][0-9][0-9]|2[0][10][0-6])$/;
   var emid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var ph =/^\d{10}$/;
   var cgpaf= /^[0-9]{1}\.{1}[0-9]+$/;
   var pswd= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
   var cpat= /^sU8Nki$/i;
   var pin= /^[0-9]{6}$/;
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
        if(!ph.test(req.body.phn))
        {
           ch=1;
           obj.phn="invalid";
        }
        if(!pswd.test(req.body.pid))
        {
           ch=1;
           obj.pid="invalid";
        }
        if(!yn.test(req.body.ms))
        {
           ch=1;
           obj.ms="invalid";
        }
        if(!pin.test(req.body.pnc))
        {
           ch=1;
           obj.pnc="invalid";
        }
        if(!emid.test(req.body.mid))
        {
           ch=1;
           obj.mid="invalid";
        }
        if(!num.test(req.body.age))
        {
           ch=1;
           obj.age="invalid";
        }
        if(!cgpaf.test(req.body.gpa))
        {
           ch=1;
           obj.gpa="invalid";
        }
        if(!dof.test(req.body.dob))
        {
           ch=1;
           obj.dob="invalid";
        }
        if(!cpat.test(req.body.cpt))
        {
           ch=1;
           obj.cpt="invalid";
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
