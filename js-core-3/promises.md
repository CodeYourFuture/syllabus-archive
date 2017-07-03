Callbacks and Promises
---
 - [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
 - [JavaScript Callbacks Explained Using Minions ](https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.83dht6ta8)

Callbacks are functions, that are called once another function has completed.
They are used to allow you code to run in the background (asynchronously).

We have already seen an example of this when working with APIs.
The `request.onreadystatechange` is a callback function.

```JavaScript
function finished() {
    alert('The task has finished');
}

function thingThatTakesALongTime(callback) {
    //... Task that takes a long time to complete

    callback(); // This is where the 'alert' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
thingThatTakesALongTime(finished);
```


Sometimes callbacks are used, so you can handle errors separately.
```JavaScript
function handleError(problem) {
    alert('There was an error: ' + problem);
}

function task(x, errorCallback) {
    if (x !== 0) {
        errorCallback('X is not 0!')
        return;
    }
    return x + 100;
}

task(0, handleError); // Causes an alert to appear
task(1, handleError); // Returns 101
```

## Asynchronous functions
 - [w3schools](http://www.w3schools.com/jsref/met_win_settimeout.asp)

So far everything you have been doing has been synchronous.
This means your code is executed one line at a time, in order.
Asynchronous code is not executed in order, and can run at any time, in any order.

An example of this in real life, are phone calls and text messages.
- Phone calls are `synchronous` because you cant (really) do anything while the other person is speaking.
    You are always waiting for your turn to respond
- Text messages are `asynchronous`.
    When you send a text, you can go away and do something else, until the other person responds.

A simple example is `setTimeout`.
This allows you to run a function after a given time period.
The first argument is the function you want to run, the second argument is the `delay` (in milliseconds)

```JavaScript

function myFunction() {
    console.log('Hello world!');
}

setTimeout(myFunction, 1000);
setTimeout(function() { console.log('Goodbye world!'); }, 500)
```

Exercise:
1. Go through this tutorial: https://www.learn-js.org/en/Callbacks
2. Using setTimeout, change the background color of the page after 5 seconds (5000 milliseconds).
    - Bonus, have the color change *every* 5 seconds to something different
    ![](http://g.recordit.co/g2EqBccNzh.gif)

## `.map` function
Using callbacks, you can easily apply a function to every element in an array using the map function;
The following snippet, will take an array, and return a new array, where every element in the array is double.

Before:
```JavaScript
var myArray = [1, 5, 10]; // The starting array
var newArray = []; // The final array

for (var i = 0; i < myArray.length; i++) {
    var doubleValue = myArray[i] * 2; // Get the value and double it
    newArray.push(doubleValue) // Add the new value, to the final array
}

console.log(newArray);

[2, 10, 20]
```

```JavaScript
var myArray = [1, 5, 10];

function double(x) {
    // Return double of x
    return x * 2;
}

// Applies the `double` function to every element in the array
var newArray = myArray.map(double);

console.log(newArray);

[2, 10, 20]
```

## Promises

 - [MDN docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 - [promisejs.org](https://www.promisejs.org/)
 - [Google Developer](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

Promises are a new feature of JavaScript (Chrome only for now).
They allow for writing easier to understand code when dealing with asynchronous functions.
![](http://exploringjs.com/es6/images/promises----promise_states_simple.jpg)
The API is very simple, when you have a promise, you can attach either a `then` callback or a `catch` callback.
If the promise is successful, the the function in the `then` callback is called. If it fails, then the `catch` callback is called.

```JavaScript
var myPromise = new Promise(function(resolve, reject) {
    // Do some work in this function

    resolve(100) // If the function was successful
    //reject(50) // If the function failed
});

myPromise.then(function(value) {
    console.log('success: ' + value);
})

myPromise.catch(function(value) {
    console.log('fail:' + value);
})
```

## Fetch
 - [MDN fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
 - [David Walsh blog](https://davidwalsh.name/fetch)

`fetch` is a nicer (more modern) way of creating HTTP requests. It makes heavy use of Promises.

```JavaScript
// Chaining for more "advanced" handling
fetch('http://www.mocky.io/v2/584c3d2d1200001b1e372b01').then(function(response) {
	return response.json(); // returning another Promise
}).then(function(json) {
    // Do something with the json object
    console.log(json.data); //Prints 'Hello world!'
})
```

Exercise: Rewrite your homework from last week, using `fetch` and `Promises`