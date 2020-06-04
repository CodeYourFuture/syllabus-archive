![](https://img.shields.io/badge/status-review-orange.svg)

# Node - Week 1

---

**Teaching this lesson?**

Read the Mentors Notes [here](./mentors.md)

---

## Intro to Node on Glitch

### Exercise: Make your own node server (on glitch)

```
All students should "remix" this one for a simple start: https://glitch.com/~cyf-simple-express
Have them it read and modify it to do something different.
1. Login to Glitch and ‘remix’ this project and rename to be yours
2. e.g. say "Hello Miles", instead of "Hello Kash"
3. Make it return an array of strings as json.
4. Make it return the current time
5. Advanced: make it return whatever you want! 3 minutes.
6. Live Code
```

## Get Started

Fork and clone the repo [https://github.com/CodeYourFuture/node-api-workshop](https://github.com/CodeYourFuture/node-api-workshop).

It is an empty project that only includes a `.gitignore` file.

> `.gitignore` will tell Git to ignore certain files or folders and not commit them to the repository.

### Download Postman

Postman is a tool that helps us test and develop APIs.

> Download and install [Postman](https://www.getpostman.com/).

# Step 1 - Setting up your project

When creating a Node.js project, you will be installing a lot of different _packages_ along the way. Packages contain code written by someone else that we can use out of the box. They provide a service for us. For example, we can install a package to talk to a database, send emails, draw graphics... anything!

When you want to share your project with others, you need to have a list of the packages you installed, so that other people can install the same packages.

In Node.js, this 'list' lives in a file named `package.json`. The packages you've installed are referred to as **dependencies**. Creating this file is the first step in setting up your Node.js project.

## 1. Make a `package.json` file

Let's start by creating the `package.json` file. We can add things to it as the project grows. The `package.json` file is easy to create from the command line.

Type the following command into your terminal to get started:

```sh
$ npm init
```

This command will initialise a step-by-step process for creating a `package.json` file. You should see something like this:

![starting npm init](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step1-npm-init01.png)

It will ask you a bunch of questions.

> You can skip most of the questions but change the `entry point` from
> `(index.js)` to `server.js`.

> The wizard asks you for the following information: `name`, `version`,
> `description`, `main`, `test`, `repository`, `keywords`, `author`, `license` -
> do you understand all of them?

At the end of the wizard, you should see a new file called `package.json` in
your project's folder.

Here is an example `package.json` file for a project called
[Passport](https://github.com/jaredhanson/passport/blob/master/package.json).

### What is JSON?

- JSON is a file format for saving data in a readable way
- It is a really popular format for sending data across the web
- JSON is a string representation of a Javascript object
- JSON objects convert really easily to Javascript objects, and vice versa, with `JSON.parse()` and `JSON.stringify()`

# Step 2 - Installing Express

Before we write any code, you'll need to install the Express library. We're
going to use the **[Node Package Manager (npm)](https://www.npmjs.com/)** to
download it using the **`npm install`** command.

NPM is the place to go to download other Node code written by other people.
There are thousands of open-source, 3rd-party Node modules (also known as
_packages_) written by other people that you can download and use in your own projects.

As we install Express, we'll need to update the `package.json` to add Express as
a dependency. We do this so that other people working on the project will be able
to install Express before running any of the code. This can be done by adding
**`--save`** to the end of your command.

Run the following command in your terminal:

```sh
npm install express --save
```

Express should now be installed. Check your `package.json` file to make sure it
has been added as a dependency. It will look like this:

![package.json screenshot](../assets/package.png)

# Step 3 - Building the server

The first thing we need to do is build our server. You will always need to build
a server when writing back-end code. A server can be built in pure Node.js, but
Express is simpler to work with.

## 1. Create a `server.js` file

Let's build our server! Before we do anything, let's create a new file called
`server.js`. This is where all our server code is going to live.

## 2. `require` the `express` library

We already installed Express in Step 2, but we need to make sure it is included
in this file specifically so we can use its methods. In Node.js, when
you want to use a package in another file, you must `require` it.

To require Express, write the following inside `server.js`:

```js
const express = require("express");
```

> Let us get used to ES6 syntax - so use `const` and `let` instead of
> `var`, arrow methods instead of functions, etc...

## 3. Initialise the server

To initialise our server, we need to call the `express()` function. This
will create an Express application for us to work with.

Add the second line of code to your `server.js` file:

```js
const express = require("express");
const app = express();
```

## 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to. Think
of a port as a door number; any requests that come to the server will come via
that door. Setting a port will allow us to find where our server is running.

We use the **`app.listen`** method to do this. This method takes two arguments:
a **port** and a **callback function** telling it what to do once the server is
running.

> Need clarification? Read more about the `app.listen` method in the [Express documentation](http://expressjs.com/en/4x/api.html#app.listen).

We're going to run our server on port `3000`, and add a simple `console.log` in the callback function. Update your `server.js` file, calling the `app.listen` method:

```js
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

> Try to use ES6 arrow functions instead of `function`.

## 5. Switch the server on!

You've built your server, but it isn't running yet. We need to run a command in
the terminal to do this. We are going to use the `node` keyword to run the
server file.

Type the following command in your terminal:

```sh
node server.js
```

If you see this, congratulations! You have built yourself a server!

![success](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step2-server02.png)

## 6. npm script

To exit the running the server, type `crtl + c`. Instead of running the server with `node server.js` everytime, we can create an alias for it in `package.json`.

Under the `scripts` property, add `start: node server.js`. We can now run our server using `npm start` which will be an alias (a shortcut) to `node server.js`.

![npm start](../assets/package-npm-start.png)

Go to the terminal and type `npm start` and make sure that the server still runs.

# Step 4 - Communicating with the server

Now that we've built the server, we need to communicate with it. We are going to
control the server with **handler functions**.

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes
the handler function. The handler function is just a function which receives
requests and handles them, hence the name.

The handler function is always called with a `request` and `response` object. The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. You can decide what to send back in your response.

### What does a handler function look like in Express?

The `get()` [method](http://expressjs.com/en/api.html#app.get.method) is one of the methods used to
define a handler function in Express. It takes two parameters: the **endpoint**
at which to trigger an action (we'll explain more about this in the next step),
and the handler function that tells it exactly what to do. Here's a simple
"Hello World!" example:

```js
// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Here, we are telling our server to respond with "Hello World!" when someone
tries to access the webpage.

## 1. Create your own handler function.

Let us add a handler handler function to send back a message to the client. To do that,
we're going to use the Express `send()`
[method](http://expressjs.com/en/api.html#res.send). This will update the
response object with the message.

Update your handler function like so:

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

## 2. Check it out in Postman

Quit your server in the terminal with `ctrl + c`. Then restart it to run your
new changes.

```sh
node server.js
```

Now, open Postman, and send a `GET` request to
`http://localhost:3000`. If you see your message in Postman,
congratulations! You just sent your first response from the server.

> Checkpoint: Do you understand all these terms?

- [ ] Client
- [ ] Server
- [ ] Front-end
- [ ] Back-end
- [ ] Full stack developer
- [ ] Request
- [ ] Response
- [ ] HTTP
- [ ] HTTP Response Codes
- [ ] HTTP Request Methods (or Verbs)

> Exercise: Try to `console.log` the `request` object inside the handler
> function. Restart your server, send the request again with Postman, then go to your terminal
> to see what it looks like. You should see a lot of data come through.

# Step 5 - Routing

At the moment our server only does one thing. When it receives a request from
the `/` endpoint, it sends back the same response: "Yay Node!".

> Try typing http://localhost:3000/node and see what happens.

However by making use of endpoints, we can make the server send different
responses for different requests. This concept is called **routing**.

## What is an endpoint?

An endpoint is the part of the URL which comes after `/`. For example:
`/chocolate` is the "chocolate" endpoint. It's the URL to which you send a
request.

## What is URL?

![alt text](../assets/http1-url-structure.png)

## 1. Create your own endpoints and send different responses

We're going to try sending different responses at different endpoints. Remember
the `app.get()` method? To set up routing in your server, we just need to repeat
this method with different endpoints.

For example:

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});
```

> **Exercise:** Add some code so that your server sends one message when the
> endpoint is `/node` and another one when it's `/codeyourfuture`.

{% include "./homework.md" %}
{% include "../../others/escalation-policy.md" %}
