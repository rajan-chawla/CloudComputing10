var mysql = require('mysql');

var pool = mysql.createConnection({
    host: "hsfuldaccdb.crvnlzgtz8dz.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "CCDEMO10",
    port: 3306
});
pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});  

module.exports = pool;