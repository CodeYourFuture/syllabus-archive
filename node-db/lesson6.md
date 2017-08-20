# Class 6

# Content
- Promises


# Promises
Callbacks are a fundamental part of JavaScript - the fact that functions are *first-class citizens* and it's possible to pass them around is very powerful and makes JavaScript different from many other programming languages. You should learn how to read, write callbacks and be comfortable around them. Though, there are other more advanced solutions for tackling the callback hell.

**Promises** are a way to write async code that still appears as though it is executing in a top-down way, and handles more types of errors due to encouraged use of try/catch style error handling.

> **The Promise object** represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

This example from [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) helps to **promisify** the `setTimeout` example. 

``js
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
```

> **Exercise**: Let's rewrite the code above using `fetch` which provides an alternative to `XmlHttpRequest` that uses a Promise-based API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

# MVC
> Model–view–controller (MVC) is a software architectural pattern for implementing user interfaces on computers. It divides a given application into three interconnected parts in order to separate internal representations of information from the ways that information is presented to and accepted from the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development. (Wikipedia)

> Watch Wes Bos' video about MVC together
> **Exercise**: create a **controllers** folder, add a **blogController** and move the logic for your routes (currently in **routes/site-routes.js**) to this new file.
