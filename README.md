#super-event
 <h5>event给予对象绑定和触发自定义事件的能力</h5>
##Install
npm install super-event
##Use
<code>
<pre>
var Event = require('super-event');
var e = new Event();
</pre>
</code>

##Inherit
<code>
<pre>
var Event = require('super-event');
function Sub(){
    Event.call(this);
}
<br>
<br>
Sub.prototype = new Event();
//或
Sub.prototype = Object.create(Event.prototype);
<br>
<br>
Sub.prototype.otherMethods = function(){};
</pre>
</code>

##Api
1. on  object.on(event, callback, [context])
   <pre>绑定事件,多个事件用空格隔开</pre>
2. off object.off([event], [callback], [context])
    <pre>卸载事件,多个事件用空格隔开</pre>
3. trigger object.trigger(event, [*args])
    <pre>触发事件,多个事件用空格隔开</pre>
4. once object.once(event, callback, [context])
    <pre>绑定一个事件</pre>
5. pause  object.pause(event, callback, [context])
    <pre>暂停事件,多个事件用空格隔开</pre>
6. resume  object.resume(event, callback, [context])
    <pre>恢复事件,多个事件用空格隔开</pre>

##Exaple
<code>
<pre>
//on,once,off,pause,resume
//用法类似,context函数执行上下文,默认是当前对象
//在new Event([cxt]),也可以统一指定上下文

var Event = require('super-event');
var e = new Event();

e.on('touch:start', function (args) {
    console.log('touch:start',args);
})

e.on('touch:move', function (args) {
    console.log('touch:start',args);
},e)

e.on('touch:end touch:cancle', function (args) {
    console.log('touch:end',args);
})

e.trigger('touch:start','abc');

e.off('touch:cancle');

</pre>
</code>