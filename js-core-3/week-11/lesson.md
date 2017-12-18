![](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core 3

** What we will learn today?**

* Intro to ES6
* Classes and Context
* Inheritance

---

# Intro to ES6

ECMAScript 2015 (or ES6) is a significant update to JavaScript that introduces
new syntax for writing complex applications including classes and modules and
other features.

## const and let

You have already come across the `var` keyword as a way to create new variables.
The `let` and `const` keywords are also used for variable creation, but the
variables created using these keywords have different scope. Var has "function
scope", whereas let and const have "block scope".

> Exercise: This **badly designed** function will throw the error `message is
> not defined`. What is the problem, and how could we fix it?

```js
function compareNumbers(m, n) {
  if (m < n) {
    let message = m + " is smaller than " + n;
  } else {
    let message = m + " is bigger than or equal to " + n;
  }

  return message;
}
```

The `const` keyword is similar to `let`, the only difference is that a variable
declared using `const` can't be changed after it is assigned.

> Exercise: What advantages might a block scope variable have over a function
> scope variable? In what situation might you want to use `const` instead of a
> variable that can be re-assigned?

> Exercise: Let's update this code to use `let` and `const` instead of `var`

```js
function getCircleArea(radius) {
  var pi = Math.PI;
  var rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

function getCircleAreas(radiusArr) {
  var areasArr = [];

  for (var i = 0; i < radiusArr.length; i++) {
    var circleArea = getCircleArea(radiusArr[i]);
    areasArr.push(circleArea);
  }

  return areasArr;
}
```

## Template literals

We do a lot of string concatenation in JavaScript - ES6 introduces a more
elegant way of accomplishing the same.

```js
function greeting(name) {
  return "Hello " + name + ", welcome to JS core 3!";
}
```

Rewriting this function in ES6, we have

```js
function greeting(name) {
  return `Hello ${name}, welcome to JS core 3!`;
}
```

## Arrow functions

> Exercise: ES6 also has a new way of declaring functions. Let's see how it
> works.

> Exercise: Refactor the previous code to have a separate function that checks
> if gender is 'female' or not, and use it in sayGreeting. Let's try and make
> the code as compact as possible together using ES6 features.

# Classes and Context

A class is an important concept in object-oriented programming. In general, a
class can be described as a "blueprint" or a "plan" for creating objects. After
a class is created, new objects with all of the features defined in that class
can then be created. These objects are called _instances_ of the class.

Secondly, It's hard to talk about objects without talking about context and the
`this` keyword. When we execute a function in javascript, that function is
associated with some enclosing object. That object could be one that we made
ourselves, or it could be the global scope (the `Window` object). Understanding
context allows us to understand when and where we can manipulate an object's
properties.

## A warning about javascript "classes"

Speaking strictly, javascript does not have proper classes. However ES6 provides
functionality that allows us to create things that usually look and act like
proper classes. At this point in your learning, this difference might not seem
important but it will be useful to remember when you are doing more complex work
in the future. Part of the homework after this class is to read about these
differences.

# Creating a class

I own a library and want to keep track of the books that people are borrowing
and returning. Using the style that we previously learned, we could implement a
system like this:

```js
let myBooks = [
  "Wild Swans",
  "The Dharma Bums",
  "Nausea",
  "The Very Hungry Caterpillar"
];
let library = {
  books: myBooks,
  availableBooks: myBooks,
  checkoutBook: function(book) {
    this.availableBooks = this.availableBooks.filter(b => b !== book);
  }
};
```

Now our book system has become popular in the library world, and we need to
represent a lot of different libraries, each one requiring a copy of the object
format we specified above. We might even need to extend our library object to
suit specific cases. We can prepare for this scenario by creating a class called
`Library`, provided a plan for our library objects.

```js
class Library {
  constructor(books) {
    this.books = books;
    this.availableBooks = books;
  }

  checkoutBook(book) {
    this.availableBooks = this.availableBooks.filter(b => b !== book);
  }
}

let myBooks = [
  "Wild Swans",
  "The Dharma Bums",
  "Nausea",
  "The Very Hungry Caterpillar"
];
let myLibrary = new Library(myBooks);
```

> Exercise: Add a `returnBook` function which appends a book onto the
> `availableBooks` variable in our `myLibrary` object.

> Exercise: check out "Nausea" and return it to the library.

> Exercise: Alter the `checkoutBook` function to return `false` when a book
> isn't available, and true otherwise.

## Using Inheritance to extend our library

We want to store information about a new library which contains audiobooks as
well as ordinary books. Audiobooks cannot be checked out, so they only need to
be stored. This new library should have all the same functionality regarding
ordinary books as our old `Library` object, but the class should be extended to
allow for the storage of an `audiobooks` array.

## More on `this`

> Exercise: what does `this` refer to in the following code snippets?

```js
function getThis() {
  console.log(this);
}
```

```js
class MyClass {
  getThis() {
    return this;
  }
}

let myClass = new MyClass();
console.log(myClass.getThis());
```

```js
class MyClass {
  getThis() {
    let myObject = {
      thisFunction: function() {
        return this;
      }
    };
    return myObject.thisFunction();
  }
}

let myClass = new MyClass();
console.log(myClass.getThis());
```

```js
class MyClass {
  getThis() {
    let myObject = { thisFunction: () => this };
    return myObject.thisFunction();
  }
}

let myClass = new MyClass();
console.log(myClass.getThis());
```

## More ES6

There are so many features in ES6. They're mostly what we call `syntax sugar`.
They don't provide new functionality, but new (more elegant) ways of
accomplishing the same tasks.

Since not all ES6 features are supported in all browsers, many developers and
projects use what is called `Transpilation` - a process that
transpiles/translates ES6 code to ES5 syntax that is supported by all browsers.

On Node, most ES6 features are now natively supported in Node 8.

> From now on, we expect you to use ES6 syntax in your assignments and the code
> you write.

# TDD again

> Exercise: Clone the repo https://github.com/CodeYourFuture/js-core-2-exercises

> Let's talk about TDD again?
>
> 1. Why do we do TDD
> 2. How do we run the tests? Read some of the tests
> 3. Notice we're separating our tests from our code now. We are making use of
>    **modules**
> 4. Also notice the **coverage**

## How do modules work?

So far, all our programs have been in their own single files. But Node programs
can become really large, and having all our code in only one file will not be
maintainable.

We can therefore split our code into so-called _modules_. A module is basically
a JavaScript file that makes its functionality available to other modules and
programs.

## Creating modules, exporting code

It is really simple to take existing JavaScript code and turn it into a module
by exporting its functionality:

```js
function printName(name) {
  console.log("My name is " + name);
}

module.exports = printName;
```

The key here is the line containing `module.exports`. As you see, this is an
assignment, and whatever is assigned to `module.exports` will be made available
to other modules and program when this file is imported.

## Using modules, importing code

But how do we make use of another module in our program? We need to _import_ it,
and this is done using a function called `require()`.

> There are different module formats for JavaScript. The one we are using here,
> which is natively supported by Node, is called **CommonJS**.

```js
var printName = require("./printName.js");
```

> The string passed to the `require()` function is a _path_ to the file you are
> importing. `./` signifies the current directory, so the above command will
> import a file called "printName.js" that is in the same directory as our
> program.

Assuming our program is in the same folder as `printName.js`, we can use the
above code to import the functionality provided by that module and store it in
the `printName` variable.

We can then continue to use the `printName` function as if it we defined it in
our own program!

```
var printName = require('./printName.js');

printName();
```

> Modules can not only export functions, but all variable types you already
> learned about. Most commonly, they export a function or an object containing
> multiple functions.

> _Together:_ Edit the file `modules/main.js` and follow the instructions.

## Separating code and tests

Exporting and importing modules is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is
therefore common to put them in separate files. We are going to call the file
containing the tests after the file containing the code to be tested, just
appending `.test` at the end of the filename. Like so:

```
main.js               # Our main program
main.test.js          # Tests for our main program
someOtherCode.js      # A module called "someOtherCode"
someOtherCode.test.js # Tests for the "someOtherCode" module
```

> The naming is really up to convention - you can even put your tests in a
> different folder! However, for Jest it is important to call test files
> "\*.test.js".

# Resources

* [ES6 features](http://es6-features.org/)
* [Let and const](http://wesbos.com/let-vs-const/)

{% include "./homework.md" %}
