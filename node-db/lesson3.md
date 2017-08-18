![](https://img.shields.io/badge/status-draft-darkred.svg) 
# Node 3
**What we will learn today?**
- Recap
- Express Generator
- Middleware
- Express.Router
- Promises
---

# Recap
What did we do [last time](https://github.com/CodeYourFuture/syllabus/blob/scotland/node-db/lesson2.md)? 
Do you remember anything from our [AWS class](https://github.com/Michael-Antczak/Introduction-to-Amazon-Web-Services)? 

### Exercise 
1. clone [Express workshop 3 project](https://github.com/CodeYourFuture/Express-workshop-3) as a starting point for today
1. replace the title heading with your name
1. start the local server and check in the browser that it all works properly
1. walk through the code, so we all understand what is in there

### Exercise - AMI 
1. make sure you have access to the AWS keys
1. spin up a server using Habiiba's AMI
1. ssh to the server and verify that Node.js is installed
1. go to the IP address in the browser

### Exercise - ftp
1. download [FileZilla](https://filezilla-project.org/download.php?type=client)
1. open FileZilla
1. setup up a [connection to EC2](https://stackoverflow.com/questions/16744863/connect-to-amazon-ec2-file-directory-using-filezilla-and-sftp)
1. upload (maybe everything exept `node_modules` folder and the run `npm install` on server)
1. start the server with `npm start`. Does it work? Why not? (Hint: what is the port?)
1. make small changes locally, upload and verify in the browser

### Exercise - save new post to file
We want to have an ability to create a new post when we go to `/admin`. When we click `Send` we want to add the new post to `data/posts.json`. Go!

1. add `body-parser` to the project
2. add the following lines inside the `server.js`
    ```javascript
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));
    ```
3. go to `admin.handlebars` and change the type of button from submit to just button. Why? 
4. add `id="addPostButton"` to the button
5. create a new JS file inside `js` folder called `add-post.js`
    ```javascript
    var addPostButton = document.querySelector('#addPostButton');
    addPostButton.addEventListener('click', function() {

        const title = document.getElementById("title").value;
        const summary = document.getElementById("summary").value;
        const contents = document.getElementById("contents").value;

        // create data object
        const postData= {
            title: title,
            summary: summary,
            contents: contents
        }

        // AJAX
        var url = '/admin';
        var oReq = new XMLHttpRequest();

        oReq.addEventListener('load', onLoad);
        oReq.open('POST', url);
        //Send the proper header information along with the request
        oReq.setRequestHeader("Content-type", "application/json");
        oReq.send(JSON.stringify(postData));
    });

    function onLoad() {
        // clear form 
        document.getElementById("title").value = "";
        document.getElementById("summary").value = "";
        document.getElementById("contents").value = "";

        // redirect to main page
        window.location.href = '/';
    }
    ```
6. link the file inside the HTML code
7. add `post` route for `/admin`. This is where we going to process the form data
    ```javascript
    app.post('/admin', function (req, res) {

        const filePath = __dirname + '/data/posts.json';

        const cb = function(error, file) {
            // we call .toString() to turn the file buffer to a String
            const fileData = file.toString();
            // we use JSON.parse to get an object out the String
            const postsJson = JSON.parse(fileData);
            // add new post to the file
            postsJson.push(req.body);

            // write back to file
            fs.writeFile(filePath, JSON.stringify(postsJson), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });

            res.end("Success.");
        };

        fs.readFile(filePath, cb);

    });
    ```
8. push to server

### Exercise - Handle "Page Not Found"
> Try to navigate to a url that doesn't exist. What do you get? Open the **Developer tools** and check what status code do you get back.

```js
app.use(function (req, res, next) {
  res.status(404).render('404');
});
```

# Persisting Data - Intro to DB

What is wrong with the solution above? Why is it not a good idea to save the data to the server's local file? What would happen if you restart the server, or kill it and spin up another one?  Discuss. 

Let's look at the [AWS Database](https://aws.amazon.com/products/databases/) section. What types of data storage can you see? What are the main two groups? 

SQL vs. NoSQL

### Exercise - Store posts to DynamoDB
1. create table in the AWS console
1. get keys
1. add SDK to the project

# Express Generator

Link to the tutorial https://expressjs.com/en/starter/generator.html

# Middleware
Middleware functions are functions that have access to the request object, `req`, the response object, `res`, and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

- Execute any code
- Make changes to the request and the response objects
- End the request-response cycle
- Call the next middleware function in the stack

> **Exercise**: We've already used one built-in middleware in our app - what was it?



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
