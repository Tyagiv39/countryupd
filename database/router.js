var scrapData =  require('./ads');
var {getCountry,updateCountries }=require('./mysql');
var{createDBConnection}=require('./config');

function suRu(){
  var promise= new Promise(async (resolve, reject) => {
const connection = await createDBConnection();
const ary = await scrapData();
const updatecountries = await updateCountries(connection,ary);
const getcountry = await getCountry(connection);
resolve(getcountry);
});
return promise;
};
module.exports=suRu;
