var MongoClient = require('mongodb').MongoClient;
var i;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/sujay", function(err, db) {
  if(!err) {
    console.log("We are connected to sujay");
    /*db.createCollection('Employee', {strict:true}, function(err, collection) {
    	if(err){
    		console.log("Already a collection");
    	}
    });*/
	var col=db.collection('Employee');
	//console.log(col.find());
	var doc1 = {'hello':'doc1'};
  	col.find().toArray(function(err, items) {
  		for(i=0;i<items.length;i++){
  			console.log(items[i]);
  		}
  	});

  	col.insert(doc1);
  }
});
