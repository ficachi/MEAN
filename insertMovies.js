var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri,function(error,db){
   if(error){
       console.log(error);
       process.exit(1);
   } 
   var doc =[{
       title: 'Shawnshank Redemption',
       year: 1994,
       director: 'Frank Darabont',
       rating: 'PG'
   },
   {
       title: 'Fight Club',
       year: 1999,
       director: 'David Fincher',
       rating: 'M' 
   }];
   db.collection('movies').insert(doc, function(error, result){
       if(error){
           console.log(error);
           process.exit(1);
       }
       process.stdout.write("added!");
       process.exit(0);
   });
});
