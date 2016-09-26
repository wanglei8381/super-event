//@todo 测试

var Event = require('./');
var e = new Event();

e.on('start', function (msg) {
    console.log('---->', msg);
});

e.trigger('start', 'ABC');

e.pause('move');