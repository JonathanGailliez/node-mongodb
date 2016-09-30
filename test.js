var mongoose = require('mongoose');

/// create a connection to the DB    
var connection = mongoose.createConnection('mongodb://localhost/test_database');

connection.on('open', function() {
    // connection established
    new Admin(connection.db).listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        var allDatabases = result.databases;    
        console.log("Databases: " + allDatabases);
    });
});