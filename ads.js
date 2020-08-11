var cheerio=require('cheerio');
var request=require('request');
var parse=require('body-parser');
var ary =new Array();
//var result=require('./database/sql')

const url="https://www.worldometers.info/geography/how-many-countries-in-asia/";
request(url,function (err,resp,body) {
  if (err) throw err;
  const $=cheerio.load(body);
  //console.log(body);
   $('tbody a').each(function(i,element){
    const $element=$(element);
  //  console.log($element.text());
  var ske=$element.text();
  //console.log("this is it");
//console.log(ske);
ary.push(ske);
 module.exports = ary;
    });

  });
