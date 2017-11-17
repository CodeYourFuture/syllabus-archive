![](https://img.shields.io/badge/status-draft-darkred.svg) 
# JavaScript Core 6
** What we will learn today?**
- Intro to ES6
- ![](https://img.shields.io/badge/status-draft-darkred.svg) Promises
---

# Intro to ES6
ECMAScript 2015 (or ES6) is a significant update to JavaScript that introduces new syntax for writing complex applications including classes and modules and other features.

## const and let
on JS Bin, let's write this simple code snippet
``js
function sayGreeting(name, gender) {
    var greeting = 'Hello';
    var nameWithTitle;
    if (gender === 'female') {
        nameWithTitle = 'Ms. ' + name;
    } else {
        nameWithTitle = 'Mr. ' + name;
    }
    return greeting + name;
}
// sayGreeting('Rares', 'male') should return 'Hello Mr. Rares'
// sayGreeting('Irina', 'female') should return ' Hello Ms. Irina'
```
> Exercise: Let's update this code to use `let` and `const` instead of `var`

## Template literals

> Exercise: We do a lot of string concatenation in JavaScript - ES6 introduces a more elegant way of accomplishing the same. Let's try it.

## Arrow functions
> Exercise: ES6 also has a new way of declaring functions. Let's see how it works.

> Exercise: Refactor the previous code to have a separate function that checks if gender is 'female' or not, and use it in sayGreeting. Let's try and make the code as compact as possible together using ES6 features.

## More ES6
There are so many features in ES6. They're mostly what we call `syntax sugar`. They don't provide new functionality, but new (more elegant) ways of accomplishing the same tasks.

Since not all ES6 features are supported in all browsers, many developers and projects use what is called `Transpilation` - a process that transpiles/translates ES6 code to ES5 syntax that is supported by all browsers.

On Node, most ES6 features are now natively supported in Node 8.

> From now on, we expect you to use ES6 syntax in your assignments and the code you write.

# TDD again

> Exercise: Clone the repo https://github.com/CodeYourFuture/js-core-2-exercises

> Let's talk about TDD again?
> 1. Why do we do TDD
> 2. How do we run the tests? Read some of the tests
> 3. Notice we're separating our tests from our code now. We are making use of **modules**
> 4. Also notice the **coverage**

## How do modules work?

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

# Resources
- [ES6 features](http://es6-features.org/)
- [Let and const](http://wesbos.com/let-vs-const/)

# Homework

1. Watch Wes Bos videos about ES6 - https://es6.io/ (if you don't have access, let us know)

2. Fork, Clone and Do the exercises in this repo - https://github.com/CodeYourFuture/js-core-2-exercises

## Prepare for the next class
1. Finish this tutorial about Chrome Dev Tools(https://developers.google.com/web/tools/chrome-devtools/javascript/)
