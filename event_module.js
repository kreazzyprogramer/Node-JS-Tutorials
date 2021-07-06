//importing event
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myEvent', () => {
    setTimeout(() => {
        console.log("Event sucefull");
        
    }, 3000);
    console.log('MY EVENT STARTED');
});
myEmitter.emit('myEvent');