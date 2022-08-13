'use strict';
var mysql = require('mysql');

//prod
module.exports.connectionString = mysql.createConnection({
    host: 'phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'w9cd7pardli26fl9',
    password: 'z329ef7pejl199z2',
    database: 'gxhk0cnsu4ufi9ea',
    multipleStatements: true
});