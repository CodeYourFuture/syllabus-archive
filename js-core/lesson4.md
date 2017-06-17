# JavaScript Core 4
** What we will learn today?**
More functions
- Debugging
- Callbacks
- Pure functions
- Unit testing
- Modules

Unit testing
- Introduce unit testing as a concept such as the why and the how
- Write some basic unit tests together with the students.
- Go over the material from previous classes by giving the class ready made unit tests and having them write code to make the unit tests pass
- Introduce some more advanced concepts such as mocking
- Look at some basic functional programming concepts such as pure functions and immutable data


---

## Debugging
Start by cloning the repo at `https://github.com/codeyourfuture/debugging-js-exercises`. Also, check you have the latest version of Chrome. The exercise will still work with older versions, but some parts may look different.

Most code written will contains some errors commonly referred to as bugs. So far we have been using `console.log`s to check our application state. It's a quick and convenient method, but it

1. only shows the state we explicitly ask to show
2. at one location only
3. does not show how we arrived there
4. does not allow custom code execution

Here we will look at debugging which allows us to step through the code and inspect variables as every stage as well as step through the call stack.

Let's open the `index.html` file from `debugging-js-exercises` in Chrome. Launch `Developer Tools` by right clicking in the browser and selecting `inspect`. In `Developer Tools` window open the `sources` tab, it's the 3rd tab from the left. (ADD PIC)

### Breakpoints
To step through our code we need first to tell the debugger where to stop. The location where the debugger is told to pause execution is called a `breakpoint`.  This can be done in two ways

1. writing `debugger;` in the code
2. clicking on the line number in source panel

### Inspect
Having stopped at a break point we can find out more about what is happening in our application. We

1. Hover mouse over variables to see their values
2. Inspect the scope and variables in the panel on the left
3. Inspect call stack. This shows which functions have been called to arrive at current breakpoint. We can click on the functions in the call stack to inspect values from those locations.

### Controls
Once a breakpoint is set we can control the execution of the code.

Continue: resume normal code execution until next breakpoint is hit
Step over: move to the next line and pause
Step in: step into function being called and pause
Step out: exit function where execution has been halted and pause

**Key points**
* If you are not sure what your code is doing use a debugger to pause execution before the problem location and step through it line by line. 

> **Exercise**
> Uncomment the line in `debug-me.js` and use the debugger to fix all errors in the code. You can see the stack traces in the `Console` tab in `Developer Tools`

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

const out = z(57);
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
> Create a basic exercise which involves passing functions around

## Pure functions
A function is considered a pure function if it does not depend on or modify state outside of its scope. In other words it will always output the same result given same inputs and will not produce any side effects.

```js
// Pure function
function( a, b ){
    return a + b;
}
```
not 
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


**Why do is this important?**
* The result of pure functions can be cached. This is especially important if we have calculations that may take up a lot of time and resources to compute.
* Pure functions are easy to test

> **Exercise**
> Rewrite the above code snippet to make the function double pure.

# Unit testing
Unit testing a substantial topic. There are many books written about it and many in-depth discussions online. Here we try to focus on the some of the core aspects, but please note that there will be more content that we may not cover here.

What are some of the aspects of unit tests
* Unit tests should be automated
* Unit tests should ensure the correct behaviour or a small unit of code. In JavaScript it usually refers to a single function.
* Unit tests should be fast to run. That enables them to be run by developers in the background or before each commit and pick up any errors as early as possible.
* Unit tests should mock any external dependencies such as database calls or network access. This is because those operations can be slow, require a lot of effort to be put into the right state or produce non-deterministic results. For example, your code may be correct but if your test requires internet access and the network is down the test will fail, thus creating a false error.
* Unit tests should be easy to maintain. Because they cover only small parts of the code, they should not be affect by code changes outside of that segment.

It brings a number of benefits to your code
* Having unit tests allows us to make changes to our application with a high degree of confidence. The unit tests will tell us if we broke anything.
* Unit tests make it easy for us to notice when we have broken something in our code. Because each unit test covers a small piece of code, it makes it easy to spot where we broke the code.
* Writing testable code forces us to write small functions, with a clear purpose. That also makes our code easy to understand both by ourselves in future as well as other developers. It results in simpler, cleaner design.

Another approach to testing is end-to-end. Here you would want to test a whole feature of user journey from start to finish. Starting with a click, it may involve an API call over the internet and make changes in database. While they do provide a value and knowledge that your code is running correct, they also have some drawbacks.
* End-to-end tests can be slow. It can difficult to keep all layers of the test in sync and as a result the tests may end up being run in series rather than parallel. 
* They can break easily because they cover a large number of steps and may be affected by any changes even if those changes are valid.
* They can be costly to maintain because any changes in application code may require changes in all tests.
* Putting dependencies such as the database into a known state for each test can be tricky

## How do we write unit tests










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

> *Together:* Let's do this: Edit the file `modules/findNeedle.js` and export the function defined there.

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

> *Together:* Edit the file `modules/main.js` and follow the instructions.

## Separating code and tests

Exporting and importing modules is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is therefore common to put them in separate files. We are going to call the file containing the tests after the file containing the code to be tested, just appending `.test` at the end of the filename. Like so:

```
main.js               # Our main program
main.test.js          # Tests for our main program
someOtherCode.js      # A module called "someOtherCode"
someOtherCode.test.js # Tests for the "someOtherCode" module
```

> The naming is really up to convention - you can even put your tests in a different folder! However, for Jest it is important to call test files "\*.test.js".

> *Exercise:* Edit `jest/sum.test.js`. Move the actual `sum` function to a different file (`jest/sum.js`) and export it from there. The go back to your test file and import the sum function from `sum.js`.

> *Exercise:* Do the above with the other test file (`findNeedle.test.js`) you should have in your `jest/` folder by now.









# Resources
1. [Primitives in JavaScript and type coercion] (https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
2. [What is a Pure Function? - Eric Elliot](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
3. [Unit testing discussion on StackOverflow - follow the links at the top] (https://stackoverflow.com/questions/652292/what-is-unit-testing-and-how-do-you-do-it)
4. [Unit testing on Wikipedia](https://en.wikipedia.org/wiki/Unit_testing)

# Homework

1. First part of Homework - Easy

2. Second part of Homework - Intermediate/Hard

3. **[Bonus/Optional]** Third part/optional - Hardest

4. **Research:**

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
