/*var events=require('events');
var eventEmitter=new events.EventEmitter();
function ringbell(){
    console.log('ring ring ring');
}
event.Emitter.on('door open',ringbell);
event.Emitter.emit('door open');*/

const EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on("myevent",(arg1,arg2)=>{ // if once use in place of on that than it will execute only one time
    console.log("id is"+arg1+"and nme"+arg2)
})
emitter.emit('myevent',1,'rahul');


