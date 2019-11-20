var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('CREATE DATABASE ' + dbconfig.database);
console.log('Success: Database Created!')
connection.end();