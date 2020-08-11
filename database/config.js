var mysql = require('mysql');
function createDBConnection(){
  var promise=new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "",
        password: "",
        database: "mydb"
    });
    connection.connect(function (err, result) {
        if (err) reject(err);
        console.log('finallyconnected');
    });
resolve(connection);
  });
return promise;
};
 module.exports={createDBConnection};
