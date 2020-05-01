# JavaScript Core II - 3

**What we will learn today?**

- [JavaScript Core II - 3](#javascript-core-ii---3)
  - [Synchronous and Asynchronous programming](#synchronous-and-asynchronous-programming)
    - [A real life example](#a-real-life-example)
    - [A Javascript example](#a-javascript-example)
    - [The Callstack](#the-callstack)
    - [Callbacks](#callbacks)
      - [Exercise (1)](#exercise-1)
  - [How does the web work?](#how-does-the-web-work)
    - [Client/Server architecture](#clientserver-architecture)
    - [HTTP Requests](#http-requests)
      - [Exercise (2)](#exercise-2)

---

![](https://img.shields.io/badge/status-draft-darkred.svg)

## Synchronous and Asynchronous programming

In a synchronous programming model, tasks run one at a time. When a long running action starts, the program waits for it to finish and return the result before it moves to the next action.

Asynchronous programming allows multiple actions to happen at the same time. When a long running action starts, the program can continue to run. When the action finishes the program will get notified and get access to the result returned.

![](sync-vs-async.jpg)

### A real life example

An example of this in real life, are phone calls and text messages.

- Phone calls are `synchronous` because you can't (really) do anything while the
  other person is speaking. You are always waiting for your turn to respond
- Text messages are `asynchronous`. When you send a text, you can go away and do
  something else, until the other person responds.

### A Javascript example

```js
//synchronous
console.log("First action");
console.log("Second action");
console.log("Third action");
```

```js
//asynchronous
console.log("First action");
setTimeout(function () {
  console.log("Second action");
}, 1000);
console.log("Third action");
```

### The Callstack

How does JavaScript 'know' what order its code should be run in?

JavaScript is a single-threaded language, which means that normally it can handle one task at a time or a piece of code at a time. It orders what it needs to do using something called the `call stack`.

The call stack is a data structure that works by the "Last in, First out" principle (LIFO) to store and run functions. Whenever you call a function, it gets pushed onto the stack, and when the function returns, it is popped off of the call stack.

This is why when you get an error in Javascript, you may see multiple lines with line numbers in the error, like:

```
$ node my.js
/home/dwh/my.js:2
    console.log(message);
                ^

ReferenceError: message is not defined
    at logSomething (/home/dwh/my.js:2:17)
    at computeSomething (/home/dwh/my.js:6:5)
    at Object.<anonymous> (/home/dwh/my.js:9:1)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:266:19)
```

This error happened because of a problem in the `logSomething` function on line 2, which was called by the `computeSomething` function on line 6, and so on. Each line represents one entry on the call stack.

Since there is only one call stack in Javascript, function execution is done one at a time from top to bottom. This means that the last function that gets pushed into the call stack is always the one to be executed when the call stack is popped. Think of it like pushing to, and popping from, an array; it's always the last item of the array that is affected.

> [Let's use this tool to see how the Callstack works!](http://latentflip.com/loupe/)

> So, how to the `call stack` and `asynchronous` work together? Asynchronous programming essentially helps us to make JavaScript act like a multi-threaded language -- although JavaScript only has a single call stack managing function execution, coding our JavaScript asynchronously means that we can have several functions executing at the same time.

### Callbacks

We have already seen callback functions - in the Array methods `forEach`, `map`, `filter` etc. They are functions that are passed as parameter to another function.

In order to achieve asynchronicity, callbacks can be passed on functions that perform a slow action. By doing so, the callback function can be called with the result.
This allows you to run some other code while you're waiting for something to finish.

```js
function finished() {
  console.log("The task has finished");
}

function thingThatTakesALongTime(callbackFunction) {
  //... Task that takes a long time to complete

  callbackFunction(); // This is where the 'console.log' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
thingThatTakesALongTime(finished);
```

A simple example of an asynchronous function is `setTimeout`. This allows you to run a function after a given time period. The first argument is the function you want to run, the second argument is the `delay` (in milliseconds)

```js
// Separate function definition
function myCallbackFunction() {
  console.log("Hello world!");
}
setTimeout(myCallbackFunction, 1000);

// Inline function
setTimeout(function () {
  console.log("Hello world!");
}, 500);
```

Now let's use a timeout and a callback function together:

```js
function mainFunction(callback) {
  console.log("Starting!");
  setTimeout(function () {
    callback();
  }, 1000);
  console.log("Continuing!");
}
function myCallbackFunction() {
  console.log("Finished!");
}
mainFunction(myCallbackFunction);
```

#### Exercise (1)

> - Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
> - Update your code to make the colour change _every_ 5 seconds to something different. Hint: try searching for `setInterval`.
>
> ![](http://g.recordit.co/g2EqBccNzh.gif)
>
> Complete the exercises in this [CodePen](https://codepen.io/makanti/pen/abOreLg?editors=1011)

## How does the web work?

### Client/Server architecture

![](client-server.png)

A **Client** is the typical web user's internet-connected devices and apps. This can be a web browser, a Slack app, your phone, etc.

A **Server** is a computer or program that manages access to resources such as webpages, sites, or apps.

There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet. They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The **server** communicates with **clients**.

Client–server systems use the **request–response** model: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.

![](request-response-architecture.png)

### HTTP Requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: **GET** and **POST**.

| Request type |                      Description                       |
| ------------ | :----------------------------------------------------: |
| GET          | Ask for a specified resource (e.g. show me that photo) |
| POST         |     Send content to the server (e.g. post a photo)     |

HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

#### Exercise (2)

> Complete the exercises in this [CodePen](https://codepen.io/textbook/pen/MWwMgmW?editors)
>
> - You are given a list of movie objects to work with<br/>
> - Use setTimeout to imitate that some actions take time
> - Remember that setTimeout behaves asynchronously
>
> All set, go! Work on the tasks given. Your result html will look like this:
>
> <img alt="preview-exercise-2-result" src="https://i.imgur.com/wbrtLNL.png" width="500">

{% include "./homework.md" %}
