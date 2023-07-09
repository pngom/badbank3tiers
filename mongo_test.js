var MongoClient = require('mongodb').MongoClient;

// DELETE BELOW AND REPLACE WITH FOLLOWING AFTER LOCAL TESTING  
//const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://carmen:lolo33@badbankapp.w9xv5.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority';
const url = 'mongodb+srv://pngom:K8hKKQoFl04CNI9z@cluster0.u4odbyz.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority';

// DELETE BELOW AND REPLACE WITH FOLLOWING AFTER LOCAL TESTING 
// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
//    console.log("Connected successfully to server");
MongoClient.connect(url, function(err, client) {
    console.log('Connected!');
    
    const dbName = 'MyBadBankCapstone';
    const db = client.db(dbName);

// new user    
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

// insert into customer table    
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err,result) {
        console.log('Document insert');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

        // clean up
        client.close();
        });
});