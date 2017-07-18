var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/sujay');
db.once('open', function() {
  console.log("We are connected");
  // we're connected!
});

module.exports=db;