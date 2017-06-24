<<<<<<< HEAD
# JavaScript Core 4
** What we will learn today?**
More functions
- Debugging
- Callbacks
- Pure functions
- Unit testing
- Modules

---

## Debugging
Start by cloning the repo at `https://github.com/codeyourfuture/debugging-js-exercises`. Also, check you have the latest version of Chrome (59). The exercise will still work with older versions, but some parts may look different.

Most code written will contain some errors commonly referred to as bugs. So far we have been using `console.log`s to check our application state. It's a quick and convenient method, but it

1. only shows the state we explicitly ask to show
2. at one location only
3. does not show how we arrived there
4. does not allow custom code execution

Here we will look at debugging which allows us to step through the code and inspect variables as every stage as well as step through the call stack.

Let's open the `index.html` file from `debugging-js-exercises` in Chrome. Launch `Developer Tools` by right clicking in the browser and selecting `inspect`. In `Developer Tools` window open the `sources` tab, it's the 3rd tab from the left. (TODO ADD PIC)

### Breakpoints
To step through our code we need first to tell the debugger where to stop. The location where the debugger is told to pause execution is called a `breakpoint`.  This can be done in two ways

1. writing `debugger;` in the code
2. clicking on the line number in source panel

### Inspect
Having stopped at a break point we can find out more about what is happening in our application. We can

1. Hover mouse over variables to see their values
2. Inspect the scope and variables in the panel on the left
3. Inspect call stack. This shows which functions have been called to arrive at current breakpoint. We can click on the functions in the call stack to inspect values from those locations.

### Controls
Once a breakpoint is set we can control the execution of the code.

Continue: resume normal code execution until next breakpoint is hit
Step over: move to the next line and pause
Step in: step into function being called and pause
Step out: exit function where execution has been halted and pause

### Error messages and stack traces
When an error occurs in your application, an `error message` and a `stack trace` will be displayed in the `console`. The error message will you what went wrong and the stack trace will tell you what functions were executed immediately before the error. The `error message` and `stack trace` will each have information about which file and line of code they refer to. Use this information to help you place your `breakpoints`.

**Key points**
* If you are not sure what your code is doing use a debugger to pause execution before the problem location and step through it line by line and inspect variables as you go.

> **Exercise**
> Open `debug-me.html` file from `debugging-js-exercises` repo using `Chrome`. The JavaScript file being imported and executed has 3 bugs in it. Use the debugger and error messages in console to help you find and fix the bugs.

# Callbacks
In JavaScript, functions are first-class objects. That means they can be used in a first class manner like any other object since they are objects themselves. We have seen how to assign a function to a variable and return a function from a function. Now we will look at passing functions into other functions and executing them. This is common technique in JavaScript for dealing with asynchronous behaviour. We have in fact already encountered callbacks when we looked at array methods such as `.forEach()`, `.map()` or `.filter`

```js
const evenNumbers = [2, 4, 6, 8];
evenNumbers.forEach(function( num ) {
    console.log(num);
});
```

Here we are passing the `function( num ) {console.log(num);}` function as an argument to `.forEach()` to execute with each item in the array `evenNumbers`.

```js
function x(y){
    return y + 1;
}

function z(a, callback){
    return callback(a);
}

const out = z(57, x);
console.log(out);
```

The above example is synchronous which means that code the callback is executed immediately. Let's look at an example where the code is executed asynchronously. We will use a `setTimeout` function to delay execution here. In most JavaScript applications asynchronous code execution could be in response to an event such as mouse click or data coming back from a server. We will at both of those cases in detail at a future class.

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
* Functions that are passed as arguments are called callbacks
* Callbacks may be executed immediately or later
* If callback is executed later, its return value is lost

> **Exercise**
> Create a function called `double` which will accept one number as its input parameter, multiply it by 2 and return the result. Pass the `double` function as an argument to the `.map()` method of `numbers` below to multiply apply function to each item in the `number` array.

> ```js
> const numbers = [ 6, 8, 18, 10 ];
> 
> function double /* create rest of the function */
> 
> const output = numbers.map(/* pass the double function here*/);
> 
> console.log( output );
> ```

## Pure functions
A function is considered a pure function if it does not depend on or modify state outside of its scope. In other words, it will always output the same result given same inputs and will not produce any side effects.

```js
// Pure function
function( a, b ){
    return a + b;
}
```

```js
// Not a pure function since output value will vary with each call
function( a, b ){
    return b * Math.random() + a ;
}
```

```js
// Not a pure function because it has changed the value outside its scope
function double( in ){
    in.value *= 2; 
}

const myObject = {value: 10};

double(myObject);
```

**Why is this important?**
* The result of pure functions can be cached. This is especially important if we have calculations that may take up a lot of time and resources to compute.
* Pure functions are easy to test. Because we know what output we will get for a set of inputs.

> *Together:* Let's rewrite the above code snippet to make `double` a pure function and have the same change be applied to the `value` of `myObject`.

# Unit testing
Start by cloning the repo at `https://github.com/codeyourfuture/unit-testing-london`. Once the repo is cloned run `npm install` from inside it to install the dependency libraries.

Unit testing is a substantial topic. There are many books written about it and many in-depth discussions online. Here we try to focus on the some of the core aspects, but please note that there will be more content than we may not cover here.

What are some of the aspects of unit tests
* Unit tests should ensure the correct behaviour or a small unit of code. In JavaScript that usually refers to a single function.
* Unit tests should be automated.
* Unit tests should be fast to run. That enables them to be run by developers in the background or before each commit and pick up any errors as early as possible. This can hugely speed up software development by correcting issues as soon as they are detected rather than wait til a tester or even worse, a customer, finds them.
* Unit tests should mock any external dependencies such as database calls or network access. This is because those operations can be slow, require a lot of effort to be put into the right state or produce non-deterministic results. For example, your code may be correct but if your test requires internet access and the network is down the test will fail, thus creating a false error.
* Unit tests should be easy to maintain. Because they cover only small parts of the code, they should not be affected by code changes outside of the segment being test.

It brings a number of benefits to your code
* Having unit tests allows us to make changes to our application with a high degree of confidence. The unit tests should tell us if we broke anything.
* Unit tests make it easy for us to notice when we have broken something in our code. Because each unit test covers a small piece of code, it makes it easy to spot where we broke the code.
* Writing testable code forces us to write small functions, with a clear purpose. That also makes our code easy to understand both by ourselves in future as well as other developers. It results in simpler, cleaner design.

Another approach to testing is end-to-end. Here you would want to test a whole feature of user journey from start to finish. Starting with a click, it may involve an API call over the internet and make changes in database. While they do provide a value and knowledge that your code is running correct, they also have some drawbacks.
* End-to-end tests can be slow. It can difficult to keep all layers of the test in sync and as a result the tests may end up being run in series rather than parallel. 
* They can break easily because they cover a large number of steps and may be affected by any changes even if those changes are valid.
* They can be costly to maintain because any changes in application code may require changes in all tests.
* Putting dependencies such as the database into a known state for each test can be tricky.

## Jest
We will be writing our unit tests using a framework called [Jest](https://facebook.github.io/jest/). It's created by Facebook and useful for all kinds of unit testing (especially testing React, which we will do in a later lesson).

## How do we write unit tests
Let's look at the anatomy of a unit test. 
```js
function sum(a, b){
    return a + b;
}

test('adds', () => {
  const result = sum(1, 2);

  expect( result ).toBe( 3 );
});
```


Each unit test will have the following parts.

### Code to be tested
This will usually be a function. Even if we are testing a large object we will usually do so one function at a time.
### test 
This is a function which will carry out our test. It expects 2 parameters. 
1. A string describing what we are testing
2. A `callback` that will contain the actual test code
### matcher
This is the part that compares the output of the function being tested with expected outcome. This is a series of chained function calls starting the function `expect` which takes the result of the execution as its parameter and returns an `expectation` object with lots of methods that we can use to validate our result.

The details of all of them are available at [https://facebook.github.io/jest/docs/expect.html]


> Our old friend `closure` revisited

> ```js
> function expect( result ){
>     return {
>         toBe: function( expected ){
>             validate( result === expected );
>         }
>     }
> }
> ```

`.toBe()` performs a `===` comparison. Works great for primitives such as `string`s, `number`s and `boolean`s. Fails when comparing `object`s and `array`s because `===` will check if they refer to the same memory location, not their actual values

```js
const a = {b: 'c'};
expect(a).toBe({b: 'c'}); // false
```

To compare actual values of an object we need a function that will iterate over all of the values making sure they all match.
```js
const a = {b: 'c'};
expect(a).toEqual({b: 'c'}); // true
```

We can also check the opposite of a match by inserting a `.not` property into our call chain to invert the result of a matcher.

```js
const x = {y: 1};
x.y++;
expect(x).not.toBe({y: 1}); // true
```

There are dozens of matching functions available. Please refer to the Jest documents for details.

### Single test execution
You will often have fairly large test suites and you may want to isolate one specific test. You can do so by appending the `.only()` method to the `test` object. Hence your test will look something like 

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});
```

# Modules

> This is a bit of an advanced topic at this point. Don't worry if you don't understand all of it - we are going to pick up modules again in a later lesson!

So far, all our programs have been in their own single files. But Node programs can become really large, and having all our code in only one file will not be maintainable.

We can therefore split our code into so-called *modules*. A module is basically a JavaScript file that makes its functionality available to other modules and programs.

## Creating modules, exporting code

It is really simple to take existing JavaScript code and turn it into a module by exporting its functionality:

```js
function printName(name) {
  console.log("My name is " + name);
}

module.exports = printName;
```

The key here is the line containing `module.exports`. As you see, this is an assignment, and whatever is assigned to `module.exports` will be made available to other modules and program when this file is imported.

> *Together:* Let's do this: Edit the file `test/sum.test.js` and export the function defined there into `src/sum.js`

## Using modules, importing code

But how do we make use of another module in our program? We need to *import* it, and this is done using a function called `require()`.

> There are different module formats for JavaScript. The one we are using here, which is natively supported by Node, is called **CommonJS**.

```js
var printName = require('./printName.js');
```

> The string passed to the `require()` function is a _path_ to the file you are importing. `./` signifies the current directory, so the above command will import a file called "printName.js" that is in the same directory as our program.

Assuming our program is in the same folder as `printName.js`, we can use the above code to import the functionality provided by that module and store it in the `printName` variable.

We can then continue to use the `printName` function as if it we defined it in our own program!

```
var printName = require('./printName.js');

printName();
```

> Modules can not only export functions, but all variable types you already learned about. Most commonly, they export a function or an object containing multiple functions.

> *Together:* Import `src/sum.js` into `test/sum.test.js` and run the test

## Separating code and tests

Exporting and importing modules is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is therefore common to put them in separate files. We are going to call the file containing the tests after the file containing the code to be tested, just appending `.test` at the end of the filename. Like so:

```
sum.js                # Our main program
sum.test.js           # Tests for our main program
someOtherCode.js      # A module called "someOtherCode"
someOtherCode.test.js # Tests for the "someOtherCode" module
```

> The naming is really up to convention - you can even put your tests in a different folder! However, for Jest it is important to call test files "\*.test.js".

> *Exercise:* Edit `test/sum.test.js`. Move the actual `sum` function to a different file (`src/sum.js`) and export it from there. The go back to your test file and import the sum function from `sum.js`.

> *Exercise:* Run `npm test function` inside `unit-testing-london`. We have 10 failing tests. 
1. To begin with export the `functions` object from `src/functions.js` and import it into `test/functions.test.js`. 
2. Implement all the functions in `src/functions.js` so all the unit test pass when you run `npm test function`. Do not make remove or change any tests in `test/functions.test.js`. 
3. Create a function `src/functions.js` that accepts 2 arrays as arguments and returns a new array which contains all the items from the two inputs. Write a test for that function in `test/functions.test.js`.

# Resources
1. [Primitives in JavaScript and type coercion] (https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
2. [What is a Pure Function? - Eric Elliot](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
3. [Unit testing discussion on StackOverflow - follow the links at the top] (https://stackoverflow.com/questions/652292/what-is-unit-testing-and-how-do-you-do-it)
4. [Unit testing on Wikipedia](https://en.wikipedia.org/wiki/Unit_testing)
5. [Jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html)
6. [Understanding callbacks and using them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

# Homework

1. Finish the exercises from class and make sure `npm test function` passes all tests.
2. Read the above resources and make sure you understand the key concepts.
3. Read up about other module types such as AMD and ES6 modules. How do they differ?
4. Solve the exercises in this repo https://github.com/CodeYourFuture/js-tdd-exercises

=======
![](https://img.shields.io/badge/status-draft-darkred.svg)
# JavaScript Core 4
** What we will learn today?**
- JS in the Browser
- DOM
- AJAX
---

## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website.

## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). But JavaScript doesn't know about any of that.

Thankfully, in JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
    <body>
        <h1> Welcome! </h1>
        <p> Hello world! </p>
    </body>
</html>
```

```javascript
var document = {
    body: {
        h1: "Welcome",
        p: "Hello world!"
    }
};
```

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```javascript
    document.querySelector('#mainHeader');
    document.querySelectorAll('p');
```
Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns an array).

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

```javascript
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
    }
```

You will notice in the example example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.

> **Exercise**:
> - Fork the repo [here](https://github.com/CodeYourFuture/dom-ajax) and clone it locally.
> - Open `index.html` in your browser.
> - In `./js/main.js` write code so that when a user presses the **Donate a bike today** button, an **alert** pops up, thanking them for their donation.

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```javascript
    var myElement = document.querySelector('#myElement');
    myElement.style.backgroundColor = 'red';
```

> **Exercise**:
> Change your code, so that instead of **alerting** something when you press the button, it changes the background color of the Jumbotron to `red`.

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

```javascript
    var paragraph = document.createElement('p'); // here we're just creating it, element is not visible yet
    myElement.appendChild(paragraph); // now the element is added to our view, but it's empty
```

`document.createElement` accepts as an input any element type. So for example `document.createElement('article')` will create a new article element.

You can then change the text displayed inside elements using the `innerText` property:

```javascript
    paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```
> **Exercise**:
> When **Add to learn more** button is clicked it should:
> - create a new paragraph element
> - set its inner text property to some message you want
> - add the paragraph to the `#mainArticles` element just below **Learn more**

We've been using `document.querySelector` to retrieve a single element.
To retrieve an array of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

```javascript
    //change the background of all the paragraph items on our page
    var paragraphs = document.querySelectorAll('p');
    for(var i=0; i<paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "blue";
    }
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

> **Exercise**:
> Every time the **All images** button is clicked it should reduce and width and height of all images on the webpage by `10`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the `className` property to set the class for an element instead of changing its styles directly:

```javascript
//before: <div id="myContainer"></div>
var container = document.querySelector('#myContainer');
container.className = "largeBlock";
//after: <div id="myContainer" class="largeBlock"></div>
```

> **Exercise**:
> Remember the button that changes the color of the jumbotron to `red`? Go back and try to do that without modifying the styles. You can use the `.red` class.

> **Advanced Exercise**:
> - When you type something into the box below the **Jumbotron** and click the **Add** button it should add a new **Article** below **Learn More** with what you typed as the inner text. It should then clear the input.
> - Make sure you create a proper **article** that looks like the others above it (it should be an article element, that contains a paragraph element, that contains your text, it should also have the class **article**).

## AJAX

### What's a server?

A device or program that **provides functionality to other programs or devices**. There are database servers, mail servers, game servers, etc.

They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The server communicates with **clients**. Clients can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response model**: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.


>An example: We can use the Slack app (the client) to put our messages or pictures on Slack. The content is stored on the Slack servers and other clients can then also access the pictures.


### HTTP requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: GET and POST.

>With a **GET request** you can ask for specified resource (e.g. show me that Slack photo).

>With a **POST request** you can send content to the server to be appended to the web resource (e.g. post a photo on Slack).

HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

### AJAX (= Asynchronous JavaScript And XML)

AJAX is a set of useful methods for implementing client-server communication.

![AJAX Diagram](https://www.w3schools.com/xml/ajax.gif "AJAX Diagram")


AJAX just uses a combination of:

> - A browser built-in XMLHttpRequest object (to request data from a web server)
> - JavaScript and HTML DOM (to display or use the data)


**Ajax works behind the scenes, helping the webpage communicate with the server (with GET and POST requests).**

>client ----------GET request----------> server returns data to client

>client ----------POST request (with content)--------->server updates data with content

The server holds the data, but it only sends it to the webpage when there's a request. The request can be sent after the page has loaded, for example when a user clicks a button.

### Why Ajax?

There are other ways you can write HTTP requests, such as using Web sockets. What's great about AJAX is that it makes it look like magic! The server and the client communicate effortlessly:

>Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background


### AJAX Example

The instant update: we can write code that makes the web page instantly update its contents (without reloading the page).

Let's try sending some data from Rares’ phone to the server and see whether it will update the webpage.

> [http://zero-point.github.io/](http://zero-point.github.io/)


### Let's Code!

How does the code work? Let's break it down into parts and see what each does.


#### POST Code

 ```javascript
  var request = new XMLHttpRequest(); 		//creating a request object

  request.onreadystatechange = function() {
    if(request.readyState === 4) {  // check if a response was sent back
      if(request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                        //server location
  var params = "Here is some content"; 		// content we want to send
  request.open("POST", url, true);			// adding them to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(params); 							// sending the request
```


#### GET Code

 ```javascript
  var request = new XMLHttpRequest(); 	    //creating a request object

  request.onreadystatechange = function() {
    if(request.readyState === 4) {  // check if a response was sent back
      if(request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                    //server location
  request.open("GET", url);					// adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); 								// sending the request
 ```



### AJAX Exercise

Everyone should organise in pairs, one person writing code to **send data (POST)** and one to **receive it (GET)**. Once you’ve finished your code, combine it and put it into a html page. Now, try sending each other messages this way.

Don’t forget to use a **unique id** at the end of the url (not 'cyf') and let your partner know what it is!



# Resources
- DOM Examples and explanation on MDN - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
- AJAX - https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

# Homework
- Continue working on [the repository](https://github.com/CodeYourFuture/dom-ajax) you forked in this lesson
    - Open up **readme.md** and follow the instructions in there.
    - Submit Pull Request after completing each part.
- Follow Intro to AJAX course by udacity - https://classroom.udacity.com/courses/ud110 (register and signin if you need to)
    - Follow the Requests and API lesson
- Fork [this repo](https://github.com/CodeYourFuture/WebDeveloperTest) and follow the instructions
    - This is a project with several deadlines, make sure you understand the requirements very well and start as soon as possible. Also communicate regularly using both **email** and Slack.
>>>>>>> origin/scotland
