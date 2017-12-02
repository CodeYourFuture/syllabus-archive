# JavaScript Core 5

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

* [Callbacks and Asynchronous Functions](#callbacks-and-asynchronous)
* [Promises](#promises)
* [AJAX](#ajax)

## Callbacks and Asynchronous Functions

We have already seen callback functions - in the Array methods `forEach`, `map`, `filter` etc. They are functions that are passed as parameter to another function.

Callbacks have another purpose as **asynchronous** functions. For these type of functions, the callback is called once another function has completed. This allows you to run some other code while you're waiting for something to finish.

```js
function finished() {
  console.log("The task has finished");
}

function thingThatTakesALongTime(callback) {
  //... Task that takes a long time to complete

  callback(); // This is where the 'console.log' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
thingThatTakesALongTime(finished);
```

So far all of the callbacks you have been using have been **synchronous**. This means your code is executed one line at a time, at the same time, in order. Asynchronous code is not executed in order, and can run at any time, in any order.

An example of this in real life, are phone calls and text messages.

* Phone calls are `synchronous` because you can't (really) do anything while the
  other person is speaking. You are always waiting for your turn to respond
* Text messages are `asynchronous`. When you send a text, you can go away and do
  something else, until the other person responds.

A simple example of an asynchronous function is `setTimeout`. This allows you to run a function after a
given time period. The first argument is the function you want to run, the
second argument is the `delay` (in milliseconds)

```js
// Separate function definition
function myCallbackFunction() {
  console.log("Hello world!");
}
setTimeout(myCallbackFunction, 1000);

// Inline function
setTimeout(function() {
  console.log("Goodbye world!");
}, 500);
```

Exercise:

1. Using setTimeout, change the background color of the page after 5 seconds
   (5000 milliseconds).
2. Update your code to make the color change _every_ 5 seconds to something different
     ![](http://g.recordit.co/g2EqBccNzh.gif). Hint: try searching for `setInterval`.

## Promises

* [MDN docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [promisejs.org](https://www.promisejs.org/)
* [Google Developer](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

Promises are a new(ish) feature of JavaScript. They allow for
writing easier to understand code when dealing with asynchronous functions.
![](http://exploringjs.com/es6/images/promises----promise_states_simple.jpg)

Promises are more "abstract" than anything we have covered so far. They are a data structure that represents some result that is going to happen in the future. The result starts off as being unknown (pending) as the code has not completed yet. The result can then move to be successful (fulfilled) or failed (rejected).

The API is very simple. When you have a Promise, you can attach a `.then`
method with a callback and/or a `.catch` method with a callback. If the promise is successful, then the function
in the `.then` callback is called. If it fails, then the `.catch` callback is
called.

```js
// Call a function that returns a Promise
var myPromise = functionThatReturnsAPromise();

myPromise.then(function(value) {
  console.log("success: " + value);
});

myPromise.catch(function(value) {
  console.log("fail:" + value);
});
```

The `.then` and `.catch` methods can be chained, like with Array methods:

```js
myPromise.then(function(value) {
  console.log("success: " + value);
})
.catch(function(value) {
  console.log("fail: " + value);
})
```

You can even return a Promise from within a `.then` callback, and keep chaining on more `.then` callbacks. This allows you to process part of the value and keep passing it along the chain:

```js
// myPromise resolves with a value of 50
myPromise.then(function(value) {
  console.log(value) // Logs: 50
  return Promise.resolve(value + 50); // Returns a new Promise
})
.then(function(value) {
  console.log(value) // Logs: 100
})
```

We will look at some common functions that return a Promise in a bit, but you can also create your own Promise. This example shows a Promise being "resolved" (successful):

```js
var myPromise = new Promise(function(resolve, reject) {
  // Do some work in this function
  resolve(100); // Resolves the Promise with the value 100
});
```

This example shows a Promise being "rejected" (failed):

```js
var myPromise = new Promise(function(resolve, reject) {
  // Do some work in this function
  reject(50) // Rejects the Promise with the value 50
});
```

> **Exercise**
> 
> Complete the exercises this [this CodePen](https://codepen.io/fortythieves/pen/QOYgWb?editors=1010)

## AJAX

### What's a server?

A device or program that **provides functionality to other programs or
devices**. There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet.

They can take the form of industrial server farms that provide a service to
millions of users (used by Facebook, Google, etc.), to personal servers for
storing your files.

The server communicates with **clients**. Clients can be a web browser, a Slack
app, your phone, etc.

Client–server systems use the **request–response model**: a client sends a
request to the server, which performs some action and sends a response back to
the client, typically with a result or acknowledgement.

> An example: We can use the Slack app (the client) to put our messages or
> pictures on Slack. The content is stored on the Slack servers and other
> clients can then also access the pictures.

### HTTP requests

A server stores the data, and the client (other programs or computers) requests
data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language
(a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It
defines the methods you can use to communicate with a server and indicate your
desired actions on the resources of the server.

There are two main types of requests: `GET` and `POST`.

> With a **GET request** you can ask for specified resource (e.g. show me that
> Slack photo).

> With a **POST request** you can send content to the server to be appended to
> the web resource (e.g. post a photo on Slack).

HTTP is the language of the internet. In our case we're using JavaScript, but
you can send HTTP requests with other languages as well.

### AJAX (Asynchronous JavaScript And XML)

AJAX is a technique for implementing client-server communication in the browser. The word is a bit of a misnomer as generally we don't use XML any more, but it's still commonly used to describe this technique.

![AJAX Diagram](https://www.w3schools.com/xml/ajax.gif "AJAX Diagram")

Ajax just uses a combination of:

> * A browser built-in XMLHttpRequest object (to request data from a web server)
> * JavaScript and HTML DOM (to display or use the data)

Ajax works behind the scenes, helping the webpage communicate with the server
(with GET and POST requests).

> client --> GET request --> server returns data to client

> client --> POST request (with body content) --> server updates data with body content

Typically, the server holds the data, and only sends it to the client (web page) when there's a
request. Ajax requests are sent after the page has loaded, usually in response to an action by the user. For example when the user clicks a button, some JavaScript will trigger an Ajax request to fetch data.

### Why Ajax?

There are other ways you can write HTTP requests, such as using Web sockets.
What's great about Ajax is that it makes it look like magic! The server and the
client communicate effortlessly:

> Update a web page without reloading the page Request data from a server -
> after the page has loaded Receive data from a server - after the page has
> loaded Send data to a server - in the background

## Fetch

`fetch` is a way of creating HTTP requests in JavaScript. It uses of the Promise API.

This example shows a GET request that fetches some data and logs it out:

```js
fetch('http://www.mocky.io/v2/5a22e20a2f0000c00d5ec665')
  .then(function(response) {
    // Necessary line to parse the JSON (we'll cover this 
    // in more detail in upcoming weeks)
    // Returns another Promise
    return response.json();
  })
  .then(function(json) {
    // Do something with the json response object
    console.log(json.data); // Logs: 'Hello world!'
  });
```

To create a POST request, you can pass an options object as the second argument to `fetch` with the `method` property set to `'POST'`. Any data that you want to send should be set as the `body` property.

Here is an example showing a POST request:

```js
fetch('http://www.mocky.io/v2/5a22e20a2f0000c00d5ec665', {
  method: 'POST',
  body: 'I am sending a POST request!'
})
  .then(function(response) { return response.json() })
  .then(function(json) {
    console.log(json.data)
  })
```

Typically it is more useful to servers if they receive structured data like JSON. We will cover JSON more in upcoming weeks, but for now it is sufficient to know that it is a way of structuring data to send over the internet.

To send a POST request with JSON you need to add a little more information to the request - a `headers` property must be included which marks the request as contains JSON. This will give the server a hint that it needs to parse JSON in the request.

Here is an example showing a POST request with JSON:

```js
fetch('http://www.mocky.io/v2/5a22e20a2f0000c00d5ec665', {
  method: 'POST',
  headers: {
    // Mark the request as containing JSON
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ // Converts objects to JSON
    data: 'I am sending a POST request with JSON'
  })
})
```

> **Exercise**
> 
> Everyone should organise in pairs to write a very simple chat application. One person will write the code to **send data (with a POST request)** to a server and one to **fetch it (with a GET request)**.
> * Start with [this CodePen project](https://codepen.io/fortythieves/pen/mqvmYQ?editors=1010)
> * Create a function that makes a POST request that sends a new chat message to the server
> * Create a function that makes a GET request that fetches all messages from the server
> * Wire up the `#fetch-messages` button so that it makes the GET request then inserts the chat messages into the `#message-list` element
> * Wire up the `#create-message` button so that it makes the POST request
> The URL to send requests to is https://luxuriant-scorpion.glitch.me/chat (for both GET and POST). Note that it is a JSON API, so you'll need the `response.json()` method to parse responses and the `Content-Type` header for POST requests.

## Resources

1. [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
2. [JavaScript Callbacks Explained Using Minions](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.83dht6ta8)
3. [MDN AJAX docs](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
4. [MDN fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
5. [David Walsh blog post](https://davidwalsh.name/fetch)

{% include "./homework.md" %}
