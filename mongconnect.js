var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sujay');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Got connected");
});

var Schema = mongoose.Schema;
