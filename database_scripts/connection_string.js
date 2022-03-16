'use strict';
var mysql = require('mysql');

//prod
module.exports.connectionString = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    multipleStatements: true
});