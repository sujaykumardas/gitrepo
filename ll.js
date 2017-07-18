var m=require('./mongconnect.js');
console.log(m);
var x=m.save(function (err) {
  if (!err) console.log('Success!');
  else console.log("error");
});
