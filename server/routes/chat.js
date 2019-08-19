var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var server=require('http').createServer(app);
var io = require('socket.io')(server);
var Chat = require('../models/Chat');
server.listen(4000);

//connection start and disconnect
io.on('connection',(socket)=>{
console.log('User Connected');
socket.on('disconnect',()=>{
  console.log('User Disconnected');
})
socket.on('save-message',(data)=>{
  console.log(data);
  io.emit('new-message',{ message:data });
  });
});


/* Get All Chats*/
router.get('/:room', (req, res, next) => {
 Chat.find({room:req.params.room},(err,chats)=>{
  if(err) return next(err);
  res.json(chats)
 });
});

router.post('/',(req,res,next)=> {
Chat.create(req.body,(err,post)=> {
  if(err) return next(err);
  res.json(post);
})
})
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});


module.exports = router;
