# JavaScript Core 5

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

* [Callbacks](#callbacks)
* [Asynchronous functions](#asynchronous%20functions)
* [Promises](#promises)

## Callbacks

* [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [JavaScript Callbacks Explained Using Minions ](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.83dht6ta8)

Callbacks are functions, that are called once another function has completed.
They are used to allow you code to run in the background (asynchronously).

We have already seen an example of this when working with APIs. The
`request.onreadystatechange` is a callback function.

```js
function finished() {
  alert("The task has finished");
}

function thingThatTakesALongTime(callback) {
  //... Task that takes a long time to complete

  callback(); // This is where the 'alert' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
thingThatTakesALongTime(finished);
```

Sometimes callbacks are used, so you can handle errors separately.

```js
function handleError(problem) {
  alert("There was an error: " + problem);
}

function task(x, errorCallback) {
  if (x !== 0) {
    errorCallback("X is not 0!");
    return;
  }
  return x + 100;
}

task(0, handleError); // Causes an alert to appear
task(1, handleError); // Returns 101
```

## Asynchronous functions

* [w3schools](http://www.w3schools.com/jsref/met_win_settimeout.asp)

So far everything you have been doing has been synchronous. This means your code
is executed one line at a time, in order. Asynchronous code is not executed in
order, and can run at any time, in any order.

An example of this in real life, are phone calls and text messages.

* Phone calls are `synchronous` because you cant (really) do anything while the
  other person is speaking. You are always waiting for your turn to respond
* Text messages are `asynchronous`. When you send a text, you can go away and do
  something else, until the other person responds.

A simple example is `setTimeout`. This allows you to run a function after a
given time period. The first argument is the function you want to run, the
second argument is the `delay` (in milliseconds)

```js
function myFunction() {
  console.log("Hello world!");
}

setTimeout(myFunction, 1000);
setTimeout(function() {
  console.log("Goodbye world!");
}, 500);
```

Exercise:

1. Go through this tutorial: https://www.learn-js.org/en/Callbacks
2. Using setTimeout, change the background color of the page after 5 seconds
   (5000 milliseconds).
   * Bonus, have the color change _every_ 5 seconds to something different
     ![](http://g.recordit.co/g2EqBccNzh.gif)

## `.map` function

Using callbacks, you can easily apply a function to every element in an array
using the map function; The following snippet, will take an array, and return a
new array, where every element in the array is double.

Before:

```js
var myArray = [1, 5, 10]; // The starting array
var newArray = []; // The final array

for (var i = 0; i < myArray.length; i++) {
  var doubleValue = myArray[i] * 2; // Get the value and double it
  newArray.push(doubleValue); // Add the new value, to the final array
}

console.log(newArray);

[2, 10, 20];
```

```js
var myArray = [1, 5, 10];

function double(x) {
  // Return double of x
  return x * 2;
}

// Applies the `double` function to every element in the array
var newArray = myArray.map(double);

console.log(newArray);

[2, 10, 20];
```

## Promises

* [MDN docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [promisejs.org](https://www.promisejs.org/)
* [Google Developer](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

Promises are a new feature of JavaScript (Chrome only for now). They allow for
writing easier to understand code when dealing with asynchronous functions.
![](http://exploringjs.com/es6/images/promises----promise_states_simple.jpg) The
API is very simple, when you have a promise, you can attach either a `then`
callback or a `catch` callback. If the promise is successful, the the function
in the `then` callback is called. If it fails, then the `catch` callback is
called.

```js
var myPromise = new Promise(function(resolve, reject) {
  // Do some work in this function

  resolve(100); // If the function was successful
  //reject(50) // If the function failed
});

myPromise.then(function(value) {
  console.log("success: " + value);
});

myPromise.catch(function(value) {
  console.log("fail:" + value);
});
```

## Fetch

* [MDN fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
* [David Walsh blog](https://davidwalsh.name/fetch)

`fetch` is a nicer (more modern) way of creating HTTP requests. It makes heavy
use of Promises.

```js
// Chaining for more "advanced" handling
fetch("http://www.mocky.io/v2/584c3d2d1200001b1e372b01")
  .then(function(response) {
    return response.json(); // returning another Promise
  })
  .then(function(json) {
    // Do something with the json object
    console.log(json.data); //Prints 'Hello world!'
  });
```

Exercise: Rewrite your homework from last week, using `fetch` and `Promises`

# AJAX

### What's a server?

A device or program that **provides functionality to other programs or
devices**. There are database servers, mail servers, game servers, etc.

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

There are two main types of requests: GET and POST.

> With a **GET request** you can ask for specified resource (e.g. show me that
> Slack photo).

> With a **POST request** you can send content to the server to be appended to
> the web resource (e.g. post a photo on Slack).

HTTP is the language of the internet. In our case we're using Javascript, but
you can send HTTP requests with other laguages as well.

### AJAX (= Asynchronous JavaScript And XML)

AJAX is a set of useful methods for implementing client-server communication.

![AJAX Diagram](https://www.w3schools.com/xml/ajax.gif "AJAX Diagram")

AJAX just uses a combination of:

> * A browser built-in XMLHttpRequest object (to request data from a web server)
> * JavaScript and HTML DOM (to display or use the data)

**Ajax works behind the scenes, helping the webpage communicate with the server
(with GET and POST requests).**

> client ----------GET request----------> server returns data to client

> client ----------POST request (with content)--------->server updates data with
> content

The server holds the data, but it only sends it to the webpage when there's a
request. The request can be sent after the page has loaded, for example when a
user clicks a button.

### Why Ajax?

There are other ways you can write HTTP requests, such as using Web sockets.
What's great about AJAX is that it makes it look like magic! The server and the
client communicate effortlessly:

> Update a web page without reloading the page Request data from a server -
> after the page has loaded Receive data from a server - after the page has
> loaded Send data to a server - in the background

### AJAX Example

The instant update: we can write code that makes the web page instantly update
its contents (without reloading the page).

Let's try sending some data from Rares’ phone to the server and see whether it
will update the webpage.

> [http://zero-point.github.io/](http://zero-point.github.io/)

### Let's Code!

How does the code work? Let's break it down into parts and see what each does.

#### POST Code

```javascript
var request = new XMLHttpRequest(); //creating a request object

request.onreadystatechange = function() {
  if (request.readyState === 4) {
    // check if a response was sent back
    if (request.status === 200) {
      // check if request was successful
      textBox.innerHTML = request.responseText;
    } else {
      textBox.innerHTML =
        "An error occurred during your request: " +
        request.status +
        " " +
        request.statusText;
    }
  }
};
var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf"; //server location
var params = "Here is some content"; // content we want to send
request.open("POST", url, true); // adding them to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(params); // sending the request
```

#### GET Code

```javascript
var request = new XMLHttpRequest(); //creating a request object

request.onreadystatechange = function() {
  if (request.readyState === 4) {
    // check if a response was sent back
    if (request.status === 200) {
      // check if request was successful
      textBox.innerHTML = request.responseText;
    } else {
      textBox.innerHTML =
        "An error occurred during your request: " +
        request.status +
        " " +
        request.statusText;
    }
  }
};
var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf"; //server location
request.open("GET", url); // adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); // sending the request
```

### AJAX Exercise

Everyone should organise in pairs, one person writing code to **send data
(POST)** and one to **receive it (GET)**. Once you’ve finished your code,
combine it and put it into a html page. Now, try sending each other messages
this way.

Don’t forget to use a **unique id** at the end of the url (not 'cyf') and let
your partner know what it is!

## Resources

1. AJAX - https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

{% include "./homework.md" %}
