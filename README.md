
![Queue class - banner](images/queue-heading-image.png?raw=true "Queue - simple and light queue")

# Queue

"Queue" is a **simple queue class**. This module is easy to use, light, small and has **minimum dependencies**.

The module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 27182818284 modules and does not offer unseen JavaScript magic. Download this, save 10 minutes of your time and use it to create something awesome and efficient. We #keepItSimple.**

## Download

You can download the module on [GitHub/simple-fifo-queue](https://github.com/drozdik-m/simple-fifo-queue) or using [npm/simple-fifo-queue](https://www.npmjs.com/package/simple-fifo-queue) service.

```
npm install simple-fifo-queue --save
```

## Queue - What is that?

Queue is a **way to queue your actions, data or whatever**. You will probably use a queue of some sort in BFS path searching algoritms. 

Queue is FIFO (first-in, first-out) structure. Queue remembers all added values in its inserted order. You can pick up the first and the last added element, delete the first (front) element and push a new element, at the end of the queue.

```javascript

//Create a queue
var queue = new Queue();

//> Queue status:
//-----queue empty-----

//Push a number
queue.Push(10);

//> Queue status:
// |FRONT| 10 |BACK|

//Push a number
queue.Push(16);

//> Queue status:
// |FRONT| 10---16 |BACK|

//Push a number
queue.Push(1);

//> Queue status:
// |FRONT| 10---16---1 |BACK|

//Get the front number
var numberFront = queue.Front(); // == 10

//Get the back number
var numberBack = queue.Back(); // == 1

//Pop the front number
queue.Pop();

//> Queue status:
// |FRONT| 16---1 |BACK|


```


Summary: **This software implementation of queue is very useful in specific situations and algorithms**, but you probably won't use it in everyday code. 

## Usage

### Import and create new queue

You can import the module using __import__ keyword or __require__ function. In TypeScript, the Queue class is a generic class ("<>" thingies).

```javascript
import { Queue } from "simple-fifo-queue";

//Instantiate new and empty Queue
var queue = new Queue();

//For TypeScript programmers: Queue is a generic class, so declaration in TypeScript would look like:
let queue = new Queue<string>(); //<string> or whatever data type you want to store and work with

```

```javascript
var Q = require("simple-fifo-queue");

//Instantiate new and empty Queue
var queue = new Q.Queue();

```

### Queue

Class Queue does not come with an iterator, because that would go against its logic. 

All method have constant complexity O(1) (the best one).

Working with the Queue is easy. Here are all implemented methods:


```javascript

//Instantiate new and empty Queue
var queue = new Queue();

queue.Front(); //Returns the element in the front
//Returns "null" if the queue is empty

queue.Back(); //Returns the element in the back
//Returns "null" if the queue is empty

queue.Pop(); //Removes the element in the front

queue.Push(); //Pushes a new element in the back

```

### More examples

There is a testing file included in this module ("simple-fifo-queue/tests/queue_tests.ts" for TypeScript or "simple-fifo-queue/dist/tests/queue_tests.js" for JavaScript). You may find few useful examples there.

___

Sorry for my English, I hope it's readable.