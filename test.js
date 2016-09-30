var mongoose = require('mongoose');

/// create a connection to the DB    
mongoose.connect('mongodb://localhost/test_database');

mongoose.connection.on('open', function() {
    // connection established
    new mongoose.mongo.Admin(mongoose.connection.db).listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        var allDatabases = result.databases;    
        console.log("Databases: " + allDatabases);
        mongoose.connection.close();
    });
});