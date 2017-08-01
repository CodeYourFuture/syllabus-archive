![](https://img.shields.io/badge/status-draft-darkred.svg) 
# Node 3
**What we will learn today?**
- Recap
- Middleware
- Express.Router
- Promises
- MVC
- Mongo
---

# Middleware
Middleware functions are functions that have access to the request object, `req`, the response object, `res`, and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

- Execute any code
- Make changes to the request and the response objects
- End the request-response cycle
- Call the next middleware function in the stack

> **Exercise**: We've already used one built-in middleware in our app - what was it?

## Handle Page Not found
> Try to navigate to a url that doesn't exist. What do you get? Open the **Developer tools** and check what status code do you get back.

```js
app.use(function (req, res, next) {
  res.status(404).render('404');
});
```

## Setup an error handler
You define error-handling middleware in the same way as other middleware, except with four arguments instead of three; specifically with the signature (err, req, res, next):

```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

### Let's write a custom middleware
```js
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
```

> **Exercise**: Follow the tutorial for writing `requestTime` at https://expressjs.com/en/guide/writing-middleware.html and add it to your own application

# Using Express.Router
We have lots of Routes in **server.js**, we can use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
https://expressjs.com/en/guide/routing.html#express-router

> **Exercise**: Use `express.Router` to organise the routes in **server.js** in a more *modular* fashion. Write your new file under `/routes/site-routes.js`.

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
