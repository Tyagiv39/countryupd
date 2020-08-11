const express = require('express');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const path =require('path');
var cron=require('node-cron');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (req, res,next){
   res.sendFile(__dirname +'/'+'database/fron.html' );
  });
   io.on('connect',function(socket){
   console.log('1 connected');
//   cron.schedule("*/30 * * * * *", async function(){
const emiter = () => new Promise(async (resolve, reject) => {
     console.log('entering emiter');
      var suRu=  require('./database/router');
      var getcountry= await suRu();
       socket.emit('fet',getcountry);
});
emiter();
});
  server.listen(8080,function(){
    console.log('listening on port 8080');
});
