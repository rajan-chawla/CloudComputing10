var mysql = require('mysql');

var pool = mysql.createConnection({
    host: "hsfuldaccdb.crvnlzgtz8dz.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "CCDEMO10",
    database: "hsfuldaccdb",
    port: 3306
});
pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    pool.query("CREATE DATABASE", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});  

module.exports = pool;