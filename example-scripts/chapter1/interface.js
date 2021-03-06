/*
 *  Inserts "doc" into the collection "movies".
 */
var doc = require("./movies.json");

exports.insert = function(db, doc, callback) {
    
    db.collection('movies').insert(doc,function(error,result){
        if(error){
            console.log(error);
            callback(new Error('BAD REQUEST'));
        }
        callback(null);
    });

};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
    db.collection('movies').find({"director" : director}).sort({"title":1}).toArray(function(error,doc){
        if(error){
            console.log(error);
            callback(new Error('BAD REQUEST'));
             }
             console.log(doc);
               callback(null, doc);
    });

};