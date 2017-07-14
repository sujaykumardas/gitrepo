var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/sujay');
var db = mongoose.createConnection('mongodb://localhost/sujay')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Got connected");
});

var Schema = mongoose.Schema;
var blogSchema = new Schema({
  fname:  String,
  lname: String,
  
});

var funame = db.model("funame",blogSchema);
