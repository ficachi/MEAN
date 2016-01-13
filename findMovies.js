var mongodb = require('mongodb');
var readline = require('readline');
var uri = "mongodb://localhost:27017/example";

mongodb.MongoClient.connect(uri,function(error,db){
    if(error){
        console.log(error);
        process.exit(1);
    }
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question ('what year it is?', (answer) => {
        db.collection('movies').find({ year: parseInt(answer) }).toArray(function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
            console.log(docs);
            process.exit(0);
        });
    });
});