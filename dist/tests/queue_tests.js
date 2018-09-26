exports.__esModule = true;
var assert_testing_1 = require("assert-testing");
var queue_js_1 = require("../src/queue.js");
function TestQueue() {
    var testing = new assert_testing_1.Testing("Queue");
    testing.StartTestingLog();
    //Numbers
    var queue1 = new queue_js_1.Queue();
    for (var i = 0; i < 10; i++)
        queue1.Push(i);
    testing.Assert(queue1.Back() === 9);
    testing.Assert(!queue1.Empty());
    testing.Assert(queue1.Size() === 10);
    for (var i = 0; i < 10; i++) {
        testing.Assert(queue1.Front() === i);
        queue1.Pop();
    }
    testing.Assert(queue1.Empty());
    for (var i = 0; i < 10; i++)
        queue1.Push(i);
    testing.Assert(!queue1.Empty());
    queue1.Clear();
    testing.Assert(queue1.Empty());
    testing.Assert(queue1.Front() === null);
    testing.Assert(queue1.Back() === null);
    queue1.Push(1);
    testing.Assert(queue1.Front() === 1);
    testing.Assert(queue1.Back() === 1);
    queue1.Pop();
    testing.Assert(queue1.Empty());
    testing.Assert(queue1.Front() === null);
    testing.Assert(queue1.Back() === null);
    //Strings
    var queue2 = new queue_js_1.Queue();
    for (var i = 0; i < 10; i++)
        queue2.Push(i.toString());
    testing.Assert(queue2.Back() === "9");
    testing.Assert(!queue2.Empty());
    testing.Assert(queue2.Size() === 10);
    for (var i = 0; i < 10; i++) {
        testing.Assert(queue2.Front() === i.toString());
        queue2.Pop();
    }
    testing.EndTestingLog();
}
TestQueue();
