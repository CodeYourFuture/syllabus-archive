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
