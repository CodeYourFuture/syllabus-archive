![](https://img.shields.io/badge/status-draft-darkred.svg) 
# Node 1
**What we will learn today?**
- Recap
- Templating
    - MVC
- Callbacks
    - callback hell
    - promises
- Middleware and Error handling
- Deploying to Heroku

---

# Before we start
Fork and Clone the repo - https://github.com/CodeYourFuture/express-workshop-2

# Recap

- **Package.json**: Remember how in the last lesson we added a *package.json* file and added dependencies like *express* to it.

    - What command did we use to create a *package.json* file
    - How did we add dependencies to it?

    Today, the project comes with a package file already - this lists all the dependencies that we need to run the project (instead of adding them to the Git repo, we just communicate the fact that we need them). Now run `npm install` and your dependencies will be installed.

- **Server.js** - this is the entry point for our application. Let's walk through the code and remember what it does.
    - What is **Express Static Middleware** used for?
    - What routes are defined?
    - What **Port** does the server run on?

> Let's run the server and check it on the browser. This is what you should see on your browser
![](assets/blog-screenshot.png)

* The theme used for this website is based on Bootstrap. You can get more open source Bootsrap-based themese from [StartBootstrap](https://startbootstrap.com/template-categories/all/)

> **Exercise**: Notice how the link to **Contact me** doesn't return a page - Let's add an enpoint to return a simple string **this is a contact page**.

# Templating
> **Exercise**: At Let's change the text for the link for **Contact** from **Contact me** to **Contact Information**.

    - How many files do you have to change? Wouldn't be nice if we could change one file and that reflects in all pages.

At the moment, we're just serving static HTML files from the *public* folder. **NodeJS** and **ExpressJS** allows us to build dynamic web pages.

> A server-side dynamic web page is a web page whose construction is controlled by an application server processing server-side scripts. In server-side scripting, parameters determine how the assembly of every new web page proceeds, including the setting up of more client-side processing.

## Template Engines
A template engine enables you to use static template files in your application. At **runtime**, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page, as it reduces duplicate code (DRY).

Some popular template engines that work with Express are **Pug**, **Mustache**, and **EJS**.

## Handlebars Templating Engine

We will use [Handlebars](https://github.com/ericf/express-handlebars) as the templating engine for this class

To add it to your project
`npm install --save express-handlebars`

Then in your `server.js`, we need to configure the `middleware` for Handlebars.

```javascript

// Add this to the top of your file
const exphbs  = require('express-handlebars');

// Then these two lines after you initialise your express app 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
```

> Let's look at the folder `views/layouts/main.handlebars`
> - Notice the `{{{body}}}`. What do you think this is?
> - Notice the *index.handlebars*, *my-cv.handlebars* and *admin.handlebars*.


then add these routes

```javascript
app.get('/', function (req, res) {
    res.render('index');
});
```

> **Exercise**: Add similar endpoints for `/my-cv` and `/admin`.

> **Exercise**: Let's create a template called `contact` and delete the endpoint we created earlier for `/contact` - render a view instead similar to what we did with the previous endpoints.

## Template passing info from Controller to Template
When we were using the *static* HTML pages from *public/* folder - the heading text shown on top of the page (on the photo) used to change when we go to different pages. Now that we switched to the template, we've lost that behavior as the code for this part comes from the centralised **Layout** (views/layouts/main.handlebars)

How can we imitate that behavior without having to duplicate code or serve static files? **Express** and **Handlebars** allows to pass info between the **routes** and the **views**. Here is how we can do it.

1. Let's modify the `/` route to pass the title of the page.

    ```javascript
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Etzali Blog', // insert your name instead 
        });
    });
    ```
2. In `/views/layouts/main.handlebars`, let's use the data we're passing to the template

    ```html
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="site-heading">
                <!-- Notice the change in the next line -->
                <h1>{{title}}</h1>
                <hr class="small">
                <span class="subheading">A modern Website built in Node</span>
            </div>
        </div>
    </div>
    ```

> **Exercise**: Pass the `subheading` as well from the route to the View.

> **Exercise**: Change Title to default to "My Blog" if no title was provided. Look at #if helpers for Handlebars http://handlebarsjs.com/builtin_helpers.html

## partials
Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called directly by other templates. ([Handlebars documentation](http://handlebarsjs.com/partials.html))

Let's put the **Menu** in a partial.

1. Go to `layout/main.handlebars` and cut the `<nav>` with all its contents, and move it to a new file called `menu.handlebars` under `views/partials`.

Then to use the partial, add `{{> menu}}` in the place where you cut the original menu from.

## More Templating
There is much more that can be done with **Handlebars** templating engine. Skim through the [express-handlebars](https://github.com/ericf/express-handlebars) and [handlebars documentation](handlebarsjs.com)

For now, we will finish by using the **each** helper
### Dynamically loading the templates

```html
{{#each posts}}
    <div class="post-preview">
        <a href="post.html">
            <h2 class="post-title">
                {{this.title}}
            </h2>
            <h3 class="post-subtitle">
                {{this.summary}}
            </h3>
        </a>
    </div>
{{/each}}
```

in the `route`, let's load the file in `data/posts.json`

```javascript
app.get('/', function (req, res) {
    const filePath = __dirname + '/data/posts.json';
    const callbackFunction = function(error, file) {
        // we call .toString() to turn the file buffer to a String
        const fileData = file.toString();
        // we use JSON.parse to get an object out the String
        const postsJson = JSON.parse(fileData);
        // send the json to the Template to render
        res.render('index', {
          title: 'Etzali Blog', // insert your name instead
          posts: postsJson
        });
    };
    fs.readFile(filePath, callbackFunction);
});
```

# Callbacks
In JavaScript, functions are first-class objects. That means they can be used in a first class manner like any other object since they are objects themselves. We can pass them as arguments to functions which is common technique in JavaScript for dealing with **asynchronous** behaviour. We have in fact already encountered callbacks when we looked at array methods such as `.forEach()`, `.map()` or `.filter`

```js
const evenNumbers = [2, 4, 6, 8];
evenNumbers.forEach(function( num ) {
    console.log(num);
});
```

Here we are passing the `function( num ) {console.log(num);}` function as an argument to `.forEach()` to execute with each item in the array `evenNumbers`.

The above example is **synchronous** which means that code the callback is executed immediately. Let's look at an example where the code is executed **asynchronously**. We will use a `setTimeout` function to delay execution here. In most JavaScript applications asynchronous code execution could be in response to an event such as mouse click or data coming back from a server. We will at both of those cases in detail at a future class.

```js
function delay(callback){
    setTimeout( callback, 2000 );
}

function logRandom(){
    const value = Math.round( Math.random() * 10);
    console.log( value );
    return value;
}

delay(logRandom);
```

**Key points**
* Functions can be passed as arguments to other other function
* Functions that are passed as arguments are called **callbacks**
* Callbacks may be executed immediately or later
* If callback is executed later, its return value is lost

> **Exercise**: What other Asynchronous operations we've recently done in the Node code we've written?

> **Exercise**: On the CV page, there is a button **Get Repos List** that doesn't work. There is code to make it work at `js\github-client.js`. Add `js\github-client.js` to your pages.

The **client-side code** in *github-client.js* should look familiar.

> **Exercise**: Identify all the callbacks in this code. Refactor the **anonymous functions** to their own variables and use the variables instead. (Bonus point if you use arrow functions)

## Callback hell
In the Code where we are retrieving the Repos info from Github, imagine if we have a requirement that for each repo retrieved, we have to make another API call to retrieve all the available branches (there is a property called *branches_url* that we can use to get that info). Then get the info for each branch (another API call).

The code to do so, will look something similar to this:
```javascript
var oReq = new XMLHttpRequest();
oReq.addEventListener('load', function() {
    var oReq2 = new XMLHttpRequest();
    oReq2.addEventListener('load', function() {
        var oReq3 = new XMLHttpRequest();
        oReq2.addEventListener('load', function() {
            // 4. Now we finally have all the info we need and we can the info we retrieved from the three API calls.

        });
        oReq3.open('GET', url); // 3. third url for branch info
        oReq3.send();
    });
    oReq.open('GET', url); // 2. second url for branches
    oReq.send();
});
oReq.open('GET', url); // 1. first url for Repo
oReq.send();
```

The code above is very hard to understand and follow. Notice the pyramid shape `})` - This is often called the **callback hell**.

## Promises
Callbacks are a fundamental part of JavaScript - the fact that functions are *first-class citizens* and it's possible to pass them around is very powerful and makes JavaScript different from many other programming languages. You should learn how to read, write callbacks and be comfortable around them. Though, there are other more advanced solutions for tackling the callback hell.

**Promises** are a way to write async code that still appears as though it is executing in a top-down way, and handles more types of errors due to encouraged use of try/catch style error handling.

> **The Promise object** represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

This example from [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) helps to **promisify** the `setTimeout` example. 

```javascript
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

# Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

> **Exercise**: We've already used one built-in middleware in our app - what was it?

## Handle Page Not found
> Try to navigate to a url that doesn't exist. What do you get? Open the **Developer tools** and check what status code do you get back.

```javascript
app.use(function (req, res, next) {
  res.status(404).render('404');
});
```

## Setup an error handler
You define error-handling middleware in the same way as other middleware, except with four arguments instead of three; specifically with the signature (err, req, res, next):

```javascript
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

### Let's write a custom middleware
```javascript
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
```

> Exercise: Follow the tutorial for writing `requestTime` at https://expressjs.com/en/guide/writing-middleware.html and add it to your own application

# Using Express.Router
We have lots of Routes in **server.js**, let's use 

> Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
https://expressjs.com/en/guide/routing.html#express-router

> **Exercise**: Let's use `express.Router` to organise the routes in **server.js** in a more *modular* fashion. Write your new file under `/routes/site-routes.js`.

# MVC
Model–view–controller (MVC) is a software architectural pattern for implementing user interfaces on computers. It divides a given application into three interconnected parts in order to separate internal representations of information from the ways that information is presented to and accepted from the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development. (Wikipedia)

> Let's watch Wes Bos' video about MVC together
> **Exercise**: create a **controllers** folder, add a **blogController** and move the logic for your routes (currently in **routes/site-routes.js**) to this new file.

# APIs
APIs (Application Programming Interfaces) provide a way for applications to communicate with each other. We've already consument an API earlier in the day **Github API**, we've managed to *communicate* with Github and get important information. We - the client - can use this information in a various number of ways. Our client, in this case, is a Web page but it could have easily been a Mobile Application, or a TV setbox etc...

> **Let's** watch this video about APIs - [What is an API](https://www.youtube.com/watch?v=s7wmiS2mSXY)

> **Exercise**: Let's expose the posts.json as an api for other clients to consume through the url `/api/get-posts`.
> Hint: make use `res.sendFile`

## REST API
https://www.youtube.com/watch?v=7YcW25PHnAA - What is a REST API (up to 3 minutes)

> Go to the url `https://api.github.com/users/CodeYourFuture/repos`


# Deploying to Heroku

Heroku is a cloud platform as a service (PaaS) that lets companies build, deliver, monitor, and scale apps. Developers use Heroku to deploy, manage, and scale modern apps. Heroku is fully managed, giving developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure.

1. Go to https://signup.heroku.com/ and signup for an account
    - It will send a verification to your email so make sure you've entered a valid email
2. Download the Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. We need to do a small tweak to our app to be ready to be deployed on Heroku.

On server.js, add the `process.env.PORT` bit of code
```js
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

This tells our server to look for an **environment variable** called `PORT` and use it to run the server, otherwise use Port 3000. When the server runs on heroku, then Heroku sets the PORT to the correct value.

`git add` and `commit` your change.

4. Now open the command line in the folder where you have your **express-workshop** repo running. If you run the command `git remote -v`, you should see one remote **origin** pointing to your repo.

Run these commands:

`heroku login`

> This will ask you for your heroku email and password that you used to register. Once you're logged in,

`heroku create`

> The heroku create command creates a new application on Heroku – along with a git remote that must be used to receive your application source.

If you check `git remote -v`, you should see a second remote called **heroku**.

Now push your code to heroku `git push heroku master`. The push will run few commands from Heroku, then you should see a url similar to `https://some-random-name-XXXX.herokuapp.com` - go to the Url and if all goes well, your app should be up and running.

To read more about Heroku and deploying Node Apps to Heroku, check
https://devcenter.heroku.com/articles/git and https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

# Homework
- Deploy to Heroku if you haven't yet
- Implement the Admin page. Write a posts endpoint that you can hit and that should save to the JSON file (use the helper functions we added)
- Secure the Admin page so that it's only visible if a certain query parameter is provided
    - Can you go a bit further with adding proper security? Research the internet for solutions in **Express.js**
- Add a route posts/:postid that the displays a specific posts in
- Consume a `posts API` built by another colleague (and deployed to heroku) to display their latest blog posts on 

# Resources
- Callback hell - http://callbackhell.com/
- Fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- StackOverFlow answer to What is REST - https://stackoverflow.com/a/671132
- How I explained REST to my wife - http://web.archive.org/web/20130116005443/http://tomayko.com/writings/rest-to-my-wife