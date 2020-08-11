var cheerio = require('cheerio');
var request = require('request');
var mysql = require('mysql');

function updateCountries(connection,ary){
  var promise= new Promise((resolve, reject) => {
 var sl=ary.forEach((value,index,array) => {
    var sql = "UPDATE country SET countryname='" + value+ "' WHERE id='" +index+ "'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
  });  resolve (sl);
});
return promise;
};

function getCountry(connection){
  var promise = new Promise((resolve, reject) => {
    connection.query("SELECT countryname FROM country", function (err, result) {
        if (err) reject (err);
        resolve(result);
    });
});
return promise;
};

module.exports = { updateCountries, getCountry };
