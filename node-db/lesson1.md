![](https://img.shields.io/badge/status-draft-darkred.svg) 
# Node 1
** What we will learn today?**
- Node and its ecosystem
- Express
- Http
- fs
- This class is based on the [Node Girls Express Workshop](https://github.com/node-girls/express-workshop)
---


# Express Workshop

## What is this?

This is an introductory workshop to Node.js and Express. You'll be building your own platform to write, publish and save blog posts (a basic content management system, or CMS).

## Why?

[Express](http://expressjs.com/) is one of the most widely-used frameworks for Node.js. It simplifies base features of Node.js, making it easier and faster to build your application's backend. Learning Express gives you a great foundation for becoming a Node.js developer :sparkles:

## Workshop Structure

This workshop is divided into a number of steps. At the end of each segment, you should find a link to continue onto the next step. We suggest you follow along with the tutorial online, and write your code in a separate repository.

You will see code snippets throughout the walkthrough. Try to resist the urge to copy and paste - you will learn much more if you get into the habit of typing things out. If you want to test out small bits of code before adding them to your project, [repl.it](repl.it) is a useful tool.

Throughout each step, we have **bolded** any jargon that you may or may not be familiar with. These terms are explained in the [Keywords](https://github.com/node-girls/express-workshop/#keywords) section at the bottom of each page. You'll also find a link to our cheatsheets under [Useful Links](https://github.com/node-girls/express-workshop/#useful-links).

## Before you Start

#### 1. Install Node

You will need Node.js installed. Download it from the Node.js website [here](https://nodejs.org/en/).

#### 2. Fork and clone this repository

Fork this repository to your own GitHub account.  Instructions for doing this can be found [here](https://help.github.com/articles/fork-a-repo/).

Then, clone your forked version of the repository to your desktop in the terminal. Instructions for doing this can be found [here](https://help.github.com/articles/cloning-a-repository/), or run the command below.

`$ git clone https://github.com/YOUR-USERNAME/express-workshop`

# Step 1 - Setting up your project

When creating a Node.js project, you will be installing a lot of different things along the way. If you want to share your project with others, you need to have a list of the things you installed, so that other people know what to install in order to run the project.

In Node.js, this 'list' file is called a `package.json`. The 'things you've installed' are referred to as **dependencies**. Creating this file is the first step in setting up your Node.js project.

## 1. Make a `package.json` file

Let's start by creating the `package.json` file. We can add things to it as the project grows. The `package.json` file is easy to create from the command line. Type the following command into your terminal to get started:

```
$ npm init
```

This command will initialise a step-by-step process for creating the `package.json`. You should see something like this:

![starting npm init](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step1-npm-init01.png)

It will ask you the following questions:

#### `name`
* npm suggests a default name for your project in brackets. If you want to give it your own name, just type it next to the brackets and press `Enter`.
* If you're happy with the name in brackets, simply press `Enter`.

#### `version`
* This is your first project, so it will be version 1.0.0! Nothing to change here, so just press `Enter`.

#### `description`
* A simple description of your project. Write whatever you want and press `Enter`.

#### `entry point`
* This file will be the starting point for your whole project.
* Let's change this from `(index.js)` to `server.js`, as we will be building a server later on!
* Type `server.js` and press `Enter`.

#### `test command`
* Skip this one for now...press `Enter`.

#### `git repository`
* This is where your project would live on GitHub.  Press `Enter`.

#### `keywords`
* (Optional) You can add keywords to help people find your project if they search for it.

#### `author`
* It's your project, so write your name! You can use your GitHub name or your actual name.

#### `license`
* You can add a license, but we'll skip this.

You will see a confirmation of your `package.json`. If you're happy with it, press `Enter` to finalise its creation.

![package.json confirmation](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step1-npm-init02.png)

Great! You should now see a new file called `package.json` in your project's folder.

# Step 2 - Installing Express

Before we write any code, you'll need to install the Express library. We're going to use the **[Node Package Manager (npm)](https://www.npmjs.com/)** to download it using the **`npm install`** command.

NPM is the place to go to download other Node code written by other people.  There are thousands of open-source, 3rd-party Node modules (also known as "packages") by other people that you can download and use in your own projects. 

As we install Express, we'll need to update the `package.json` to add Express as a dependency. We do this so that other people working on the project will know to install Express before running any of the code. This can be done by adding **`--save`** to the end of your command.

Run the following command in your terminal:

`$ npm install express --save`

Express should now be installed. Check your `package.json` file to make sure it has been added as a dependency. It will look like this:

![package.json screenshot](https://cloud.githubusercontent.com/assets/10683087/16382664/be35f0b4-3c79-11e6-82b6-ae9e4a037c3f.png)

# Step 3 - Building the server

The first thing we need to do is build our server. You will always need to build a server when writing back-end code. A server can be built in pure Node.js, but Express gives us simpler syntax to work with.

## What is a server?

Servers are computer programs that receive requests from other programs, the *clients* and send back a response e.g share data, information or hardware and software resources.

### ...and what is a server in plain English?

A server is a computer program. Its job is to send and receive data.

Let's take a website for example.  A website is just a collection of HTML and CSS files, images, maybe some javascript files. When you type a website address in your browser's address bar, the browser (client) sends a **request** to the server that lives at that address. The browser asks the server to give it the files it needs to display the website properly.


![Server flow](https://files.gitter.im/heron2014/FiiK/server.png)

## 1. Create a `server.js` file

Let's build our server! Before we do anything, let's create a new file called `server.js`. This is where all our server code is going to live.

## 2. `require` the `express` library

We already installed Express in Step 2, but we need to make sure it is included in this file specifically so we can make use of its methods. In Node.js, when you want to access the functionality of a library or module in another file, you `require` it.

To import Express, write the following inside `server.js`:

```js
var express = require('express');
```

## 3. Initialise the server

To initialise our server, we just need to call the `express()` function. This will create an Express application for us to work with.

Add the second line of code to your `server.js` file:

```js
var express = require('express');
var app = express();
```

## 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to. Think of a port as a door number; any requests that come to the server will come via that door. Setting a port will allow us to find where our server is running.

We use the **`app.listen`** method to do this. This method takes two arguments: a **port** and a **callback function** telling it what to do once the server is running. Need clarification? Read more about the `app.listen` method in the [Express documentation](http://expressjs.com/en/4x/api.html#app.listen).

We're going to run our server on port `3000`, and run a simple `console.log` as our callback function. Update your `server.js` file, calling the `app.listen` method:

```js
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
```

## 5. Switch the server on!

You've built your server, but it isn't running yet. We need to run a command in the terminal to do this. We are going to use the `node` keyword to run the server file.

Type the following command in your terminal:
```
$ node server.js
```

If you see this, congratulations! You have built yourself a server!

![success](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step2-server02.png)

# Step 4 - Communicating with the server

Now that we've built the server, we need to communicate with it. We're going to control the server with **handler functions**.

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the handler function. The handler function is just a function which receives requests and handles them, hence the name.

The handler function always takes a `request` and `response` object, and sends the response back to the client along with some information. You can decide what to send back in your response.

### What does a handler function look like in Express?

The `get()` method is used to define a handler function in Express. It takes two parameters: the **endpoint** at which to trigger an action (we'll explain more about this in the next step), and the handler function that tells it exactly what to do. Here's a simple "Hello World!" example:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});
```

 Here, we are telling our server to respond with "Hello World!" when someone tries to access the webpage.

## 1. Create your own handler function.

We are now making a handler function with a custom message in our response. You can write any message you want.

Update your `server.js` file with an empty `app.get()` function:


```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {

});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

Try to `console.log` the `req` object inside the handler function. Restart your server, refresh the browser, then go to your terminal to see what it looks like. You should see a lot of data come through.

## 2. Tell your handler function what to do

We want our handler function to send back a message to the client. To do that, we're going to use the Express `send()` method. This will update the response object with the message.

Update your handler function like so:

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Yay Node Girls!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

## 3. Check it out in your browser

Quit your server in the terminal with `ctrl + c`. Then restart it to run your new changes.

```
$ node server.js
```

Now, open your favourite browser (we like Chrome), and navigate to `http://localhost:3000`. If you see your message in the browser, congratulations! You just sent your first response from the server.

# Step 5 - Routing

At the moment our server only does one thing. When it receives a request from the `/` endpoint, it sends back the same response: "Yay Node Girls!".

Want to check? Try typing http://localhost:3000/nodegirls and see what happens.

However by making use of endpoints, we can make the server send different responses for different requests. This concept is called **routing**.

### What is an endpoint?

An endpoint is the part of the URL which comes after `/`. For example: `/chocolate` is the "chocolate" endpoint. It's the URL to which you send a request.

## 1. Create your own endpoints and send different responses

We're going to try sending different responses at different endpoints. Remember the `app.get()` method? To set up routing in your server, we just need to repeat this method with different endpoints.

For example:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});
```

*Challenge:* Add some code so that your server sends one message when the endpoint is `/node` and another one when it's `/girls`.

# Step 6 - Serving static files

So we know how to send back a simple message. But what if you want to send back a whole HTML page, or an image?

Things like HTML files, images etc are known as **static assets**. If you want your server to "serve" static assets back to the browser, you need to do something different than just using the `res.send()` method.

To be able to send any file from the server we need a special, built-in **middleware** function that comes with Express: `express.static()`. Read more about it [here](http://expressjs.com/en/starter/static-files.html).

Say we want to serve all the static assets in our "public" folder. The `express.static()` function will look like this:

```js
app.use(express.static("public"));
```

## 1. Serve static files from your server

Delete all your `app.get` endpoint functions, and replace them with the line of code above. Restart your server, refresh your browser and see what happens! If you see a Node Girls CMS, then your static assets have been successfully served.

### HTTP request methods
All requests use one of the HTTP methods. The main ones are: `GET, POST, PUT, DELETE`.


`app.get` deals with requests that use the `GET` HTTP method.  

### The `POST` http request method

When sending data to the server, we use the `POST` http request method, instead of `GET`.  To understand the difference, follow the "POST vs GET" link in the keywords section below.

Let's try `POST`ing some text to the server.

We're going to add a form to the `index.html` page, so that you can write your blogposts from there.

Open up the `index.html` file in your text editor.  If you have a look, you should see this:

```html
<div class="entry-container">
    <!--PASTE YOUR CODE HERE!! -->
</div>
```

**Replace the greyed-out comment with this code snippet:**

```html
<h3>Create a blog post</h3>
<form action="/create-post" method="POST">
    <textarea name="blogpost" rows="10" cols="14"></textarea>
    <button type="submit">Send</button>
</form>
```

* This form has a text area and a Send button.  
* The `action` attribute is the endpoint form data will be sent to.
* The `name` attribute will be used later to reference the data.

When you hit Send, the form will send a `POST` request to the server, using whatever is in the `action` attribute as the endpoint.  In our case it's `/create-post`.

### Receiving the blog post on the server

* Data doesn't come through the server in one go; it flows to the server in a **stream**.  Think of a stream as water flowing from a tap into a bucket.  Your job is to collect this water in the server.

* If we were writing a pure Node server, we would have to think about how to collect the stream of data properly.  But luckily for us, Express handles all of that stuff under the hood.  

* All you need to do is define a route to deal with requests that come through on the `/create-post` endpoint.

Let's remind ourselves of a simple `GET` route in Express:
```js
app.get('/my-lovely-endpoint', function (req, res) {
    res.send('Hello there!');
});
```

This time we want to define a route to deal with a `POST` request.  What do you think you would need to do differently?  Experiment and see if you can define a route for the `/create-post` endpoint!

For now, make your `/create-post` handler simply do this: `console.log('/create-post')`.

---

### Extracting the blog post

Now the contents of your blogpost is hidden in your `req` object somewhere.  Normally you would extract it using `req.body`.  Try to console.log `req.body` now.

Getting `undefined`?  Not to worry, that's normal.  When data has been `POST`ed to the server as `FormData`, we need to do things slightly differently to access the data that's come through in the request.

We need another middleware function.  Something that can get extract the contents out of the special `FormData` object.  For this we will use `express-formidable`.  `express-formidable` is another Express middleware. It will extract the form data from the request and make it available to you when you do `req.fields`.

This time though, `express-formidable` is not built-in, we need to explicitly install it.

**In your terminal, install express-formidable**
```bash
npm install express-formidable --save
```

`require` `express-formidable` so you can use it in your code.  You can't use dashes in JavaScript variable names, so just call it `var formidable`.
```js
var formidable = require('express-formidable');
```

Now add this towards the top of your server, after your `require`s and `app.use(express.static('public'))`, but before your `/create-post` endpoint:
```js
app.use(formidable());

```
Now inside your `/create-post` function, add:
```js
console.log(req.fields);
```
Refresh your server and have another go at writing a blogpost.

You should now see an object in the console.  The key should be `blogpost`, just like the name attribute in the form on the HTML page.  The value of `blogpost` will be your message!

# Step 8 - Saving your blog post

Right now, your precious blog posts aren't being saved anywhere, which is a bit of a shame.  Let's do something about that.

### JSON - the handy data format

You'll note that in the data folder there's a new file called `posts.json`.

JSON is a type of file for structuring data in a readable way. It is also a really popular format for sending data across the web.

JSON is a string representation of a Javascript object. JSON objects convert really easily to Javascript objects, and vice versa, with JSON.parse() and JSON.stringify().

(If you're not sure about Javascript objects, have a chat with your mentor and your team.)

If you look at `posts.json` will see there's already one blog post there. The format is:

```js
{
    [timestamp]: [blog post message]
}
```

We've used a timestamp as the key so that the blog posts are listed in chronological order. Also, it's a record of when the blog post was created.

### Writing to your hard drive

Anytime a blog post comes through to the server, we want to save the data on your computer's hard drive.  To do this, we need to use a built-in Node module: `fs`, which stands for 'file-system'.

Built-in Node modules (core Node modules) are rather like the built-in Express middleware functions.  Only difference is that where you need to have installed Express to use Express middleware functions, the core Node modules come automatically with Node itself.

To use `fs`, you'll need to require it at the top of your server file:

```js
var fs = require('fs');
```

The method we need to write to your hard drive is `fs.writeFile`.

```js
fs.writeFile('path/to/file', yourData, function (error) {
    // do something
});
```
* Argument 1: the location of the file you want to write to
* Argument 2: the data you want to write
* Argument 3: the callback function

The 'path/to/file' will be replaced with the actual path to the file you want to write to.  If it doesn't exist, `fs.writeFile` cleverly creates one for you.  But we already have `posts.json`, so not to worry.


### Reading from your hard drive
To read data that's already there, you would use `fs.readFile`.  The way to use `fs.readFile` is very similar to `fs.writeFile`:

```js
fs.readFile('path/to/file', function (error, file) {
    // do something
});
```
* Argument 1: the location of the file you want to write to
* Argument 2: the callback function


You'll notice that `fs.readFile`'s callback function takes a second argument.  That argument would be the file you're reading.



Let's read the data from the `posts.json` file.  Make sure you've `require`d the `fs` core Node module at the top of your server file somewhere.

Add this code to your server (put it anywhere after the `require`s for now):

```js
fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    console.log(file);
});
```


(`__dirname` is a Node global object that gives you a path to current working directory. It's handy if we want to avoid writing the whole path out in full.)


If you restart the server, you'll probably see something like this:
```bash
<Buffer 7b 0a 20 20 20 20 22 31 34 36 37 33 39 30 33 35 36 32 39 31 22 3a 20 22 54 68 69 73 20 69 73 20 6d 79 20 76 65 72 79 20 66 69 72 73 74 20 62 6c 6f 67 ... >
```
This is actually the contents of your `posts.json` file, but in a format called a **buffer**.  To make it a bit more human-readable, you can console.log the file to a string, like this:

```js
console.log(file.toString());
```

`file` is in JSON format right now.  If we want to access the blog post message inside `file`, we need to parse it from JSON back to a JavaScipt object.

Add this next bit of code to your `fs.readFile`'s callback function:
```js
var parsedFile = JSON.parse(file);
```

Now `parsedFile` is a normal JavaScript object, and we can access the data inside it.


Ok, so we've talked about JSON and we've talked about reading and writing files.  You now have the power to save new blog post data to your hard drive!  Work with your partner and your mentor to see if you can figure the next steps out on your own.

Here's a breakdown of what you want to achieve:
* When new blog post data comes through, read from `posts.json` to access its contents
* Add your new blog post data to the old ones.
* Write your new combined data back to the `posts.json` file.

### Things to remember
* `fs.writeFile()` normally overwrites the target file you've given it.  Chances are you don't want to lose all your old blog posts every time you get a new one, so think about how you can combine `fs.readFile()` and `fs.writeFile()` to prevent overwriting.

* You will need to convert between JSON and a JavaScript object several times.  `JSON.parse()` and `JSON.stringify()` are what you need.

Oh by the way, if you want to get the current timestamp, use the JavaScript `Date.now()` method.

Good luck!

# Step 9 - Displaying your blog posts

So now we're saving the blog posts to the server.  Time to get them and display them on the page!

If you look inside `public/script.js`, there's a whole bunch of JavaScript code in there.  Don't worry about what all the code means, just know that it's responsible for sending a request to GET old blog posts and display them on the page underneath "Recent Posts".

`script.js` is trying to load existing posts by making a GET request. Look inside `script.js` and see if you can find any useful endpoints.


Your `script.js` file will want to receive the JSON containing your blog posts.  Your job is to make that happen!

Express has a handy method called `res.sendFile()` that makes it easy to send files back to the client.  Feel free to use this with your JSON.


If all goes well, you should have a fully functional CMS!

### Homework

* Finish the tasks from the workshop
* Try adding an `/about` route to your app to serve some HTML. How is this different from using express's static middleware? We will add some supporting materials to help you with this task during the week. You can see one way of doing it here: http://stackoverflow.com/questions/4529586/render-basic-html-view
* Complete the nodeschool.io 'learnyounode' tutorial https://github.com/workshopper/learnyounode
* Research the following topics: blocking vs. non-blocking; RESTful APIs; templating engines; HTTP codes; asynchronous programming. Google them! We will be asking questions in next week's session.

**Important:** When you get stuck during the homework you should follow the following "escalation policy".
* First, search for answers on Google and Stack Overflow. If you have an error message, copy and paste it into Google.
* When you are stuck for longer than 20 minutes - no longer! - write a question to your fellow students in the #class1 channel on slack. Take a while to think carefully about the question. This is an important skill. There is a great guide to writing good questions here: http://stackoverflow.com/help/how-to-ask
* If you cannot get an answer from your fellow students, @ a mentor with your question and we will reply as soon as we can.

#### Resources
Take a look at the following links to learn more about Node.js.
* https://github.com/maxogden/art-of-node/#the-art-of-node
* https://www.youtube.com/watch?v=e8ZLfcHxrD8
* https://node.cool#resources
0Looking
