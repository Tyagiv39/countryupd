var cheerio=require('cheerio');
var request=require('request');

 function scrapData(){
  var promise= new Promise((resolve, reject) => {
  var ary =new Array();
      const url="https://www.worldometers.info/geography/how-many-countries-in-asia/";
    request(url,function(err,resp,body){
    if (err) throw err;
   const $=cheerio.load(body);

    $('tbody a').each(function(i,element){
    const $element=$(element);
    var ske=$element.text();
     ary.push(ske);
});
resolve(ary);
});

});
 return promise;
};
module.exports=scrapData;
