# What is Node.js?

  > [Node.js®](https://nodejs.org/en/) is a **JavaScript runtime** built on Chrome's **V8 JavaScript engine**. Node.js uses an **event-driven**, **non-blocking** I/O model that makes it lightweight and efficient.

# What is it used for?

- web servers, so creating dynamic websites
- set up a local web development environment
- easier to build desktop applications with Electron: Slack, Visual Code, Atom
- some of the biggest companies use Node.js in production: Netflix, Walmart, IBM, etc.
- JavaScript everywhere (used to be PHP, Python, JavaScript, MySQL, Apache, now JavaScript full stack)

# A simple Node.js server

**Simple server**
``js
const http = require('http');

const server = http.createServer(function (req, res) {
	res.end("Hello World!")
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')
```

**Server with two routes**
``js
const http = require('http');

const server = http.createServer(function (req, res) {

	if (req.url === '/') { //check the URL of the current request

	console.log("New request to main page at " + Date())

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><h1>This is home Page.</h1></body></html>');
		res.write('<h2>The time is: ' + Date() + '</h2>');
        res.end();

    } else if (req.url === "/student") {

	console.log("New request to Student page at " + Date())

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is student Page.</h1></body></html>');
        res.end();

    } else {
        res.end('<html><body><h2>Invalid Request at ' + Date() + '</h2></body></html>');
    }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')
```
### Exercise
Can you add another route `/mentor`?
