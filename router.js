var scrapData =  require('./ads');
var {getCountry,updateCountries }=require('./mysql');
var{createDBConnection}=require('./config');

function suRu(){
  var promise= new Promise(async (resolve, reject) => {
console.log('entering start');
const connection = await createDBConnection();
console.log('connection ');
const ary = await scrapData();
const updatecountries = await updateCountries(connection,ary);
console.log('updated');
const getcountry = await getCountry(connection);
console.log('getcountry');
resolve(getcountry);
});
return promise;
};
module.exports=suRu;
