//@todo 测试

var Event = require('./');
var e = new Event();

function foo(msg) {
    console.log('---->', msg);
}

e.on('start', foo);

e.trigger('start', 'ABC');

e.pause('start', foo);


e.trigger('start', 'ABC');