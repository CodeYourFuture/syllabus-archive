<<<<<<< HEAD
# JavaScript Core 2
** What will we learn today?**
- Scope
- Closures
- ES6 functions
- What is `this`?

---

# Taking functions further
You've been working with functions for a few weeks now. Today we're going to dive deeper into working with functions, and cover some more advanced concepts.

# Scope

Before we get into what scope is, let's try a little exercise.

Open up jsbin and write the following:

  ```js
  var firstFunction = function() {
    var a = 10;

    var secondFunction = function() {
      console.log(a);
    }

    secondFunction();
  };

  firstFunction();
  ```

This should work fine, and the console should print `10`. But what if we swap the positions of `var a` and the `console.log()`?

  ```js
  var firstFunction = function() {
    console.log(a);

    var secondFunction = function() {
      var a = 10;
    }

    secondFunction();
  };

  firstFunction();
  ```

This returns an error: `ReferenceError: a is not defined`. You might think that the problem is that we're trying to console log `a` before it's declared in the code order. So let's try putting the `console.log(a)` after `secondFunction`, where `a` is assigned:

  ```js
  var firstFunction = function() {

    var secondFunction = function() {
      var a = 10;
    }

    console.log(a);

    secondFunction();
  };

  firstFunction();
  ```

Wait, we're still getting the `ReferenceError`! Even if we move the `console.log(a)` underneath where `secondFunction` is called, we _still_ get the error. What's going on?

What we're seeing here is the effect of **scope**. Take a look at the following diagram:

![Scope](./assets/scope_bubbles.png)


We can see from this picture that each function is like a 'bubble', and it has access to the variable assigned within it, and the variables assigned 'above' it, in it's surrounding function. But note that the 'global' scope doesn't have access to `var o`, and `function outer()` doesn't have access to `var i`. So each function can access the variables in its **parent scope**, and in it's **own, immediate scope**, but it cannot see the variables in its **child scope**.

If a variable is declared outside of a function, in the 'window', it has *'global' scope*. The scope within a function is *'local' scope*:

  ```js
  var test = "I'm global";

  function testScope() {
    var test = "I'm local";

    console.log (test);     
  }

  testScope();           // output: I'm local

  console.log(test);     // output: I'm global
  ```

# Closure
A closure is an inner function that retains access to its parent function's scope.

It can be used to emulate private properties

```js
function car(){
  var speed = 0;

  return {
    faster: function(){
      var topSpeed = 12;
      speed += 5;

      if(speed > topSpeed) speed = topSpeed;
    },
    getSpeed: function(){
      return speed;
    }
  };
}
var golfCart = car();
golfCart.faster();
golfCart.faster();
golfCart.faster();
console.log(golfCart.getSpeed());
```

Both `faster` and `getSpeed` functions retain access to the parent scope and thus the variable `speed`. While the function `car` returns both of those functions, it does not expose the variable `speed` directly. We can only access it using those functions essentially making it a private. It is a useful pattern to restrict access to certain variables and ensure that they can only manipulated via set functions. We can use these functions for example to ensure that only valid values are set.

Closures can also be used to create factories which can retain configuration and be invoked later.

```js
function carFactory(make){
  return function(){
    return {
      make: make
    };
  };
}

var fordFactory = carFactory('Ford');
var car = fordFactory();
console.log(car);
```

Please note how `fordFactory` does not receive any params. Instead it retains access to its parent scope and is able to refer to the parameters the parent was called with. Most importantly it retains access to the parent scope event after the parent function has returned.

> **Exercise**:
> 
> Create an outer function that accepts one parameter `greeting` (such as 'Hello', 'Hi' or anything else you like) 
> and returns a closure which accepts one parameter `name` and retuns the greeting including name. So final output of 
> the closure should be something like 'Hello, German'.


# ES6 - 'Fat arrow' functions
ES6 introduced a new way of structuring functions; the arrow function. Let's compare it against the ES5 syntax:

  ```js

  // ES5
  var multiply = function(x, y) {
    return x * y;
  };

  // ES6
  multiply = (x, y) => { return x * y };

  console.log(multiply(2, 3));

  ```

Arrow functions are quicker to write because they don't require variable assignment. Also, if you're only passing one argument into the arrow function, you don't need to use brackets around the parameter:

  ```js
  multiplyByTen = num => { return 10 * num };

  console.log(multiplyByTen(5));
  ```

If you're only going to `return` a single line in an arrow function, you don't even need the curly brackets (or the `return` keyword):

  ```js
  greet = name => `Hello, I am ${name}!`;

  console.log(greet('Ada Lovelace'));
  ```

However, there are some important differences between arrow functions and ES5 functions aside from syntax. Try the following exercise:

  ```js
  const ourClass = {
    members: ['Raymond', 'Adis', 'Flavia', 'Nabil', 'Kiya'],
    className: 'London Class 2',
    classSummary: function() {
      return this.members.map(function(member) {
        return `${member} is in ${this.className}`;
      });
    }
  };

  console.log(ourClass.classSummary());
  ```

The above code doesn't quite work. We've got an object, the `ourClass` object, and within it, and array, a string and a method. But `this.className` is returning as `undefined` - the code isn't seeing what we're trying to point it to. 

Let's try with an arrow function:

  ```js
  const ourClass = {
    members: ['Raymond', 'Adis', 'Flavia', 'Nabil', 'Kia'],
    className: 'London Class 2',
    classSummary: function() {
      return this.members.map((member) => {
        return `${member} is in ${this.className}`;
      });
    }
  };

  console.log(ourClass.classSummary());
  ``` 

With that one little change, the function is now working. Why? Well, arrow functions differ to ES5 functions in that they make use of something called 'lexical `this`'. JavaScript is a 'lexical' programming language; this means that how the code behaves depends on the order or placement of each piece of code. When we use an arrow function, the value of `this` is bound to the surrounding context. So unlike when we used the anonymous function in the ES5 version(`this.members.map(function(member) {`), the arrow function lets the JavaScript engine know where `this` is pointing to.

If this is confusing, don't worry; we're going to move onto `this` in greater depth shortly. But first, let's do a few exercises with arrow functions.


> **Exercise**: 
> 
> Use [JSBin](https://jsbin.com/) for today's exercises.
> 
> 1. Write an arrow function that returns the string, `Hello, I am ${name}, and I am ${age} years old.`
> 2. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. Google and use the built-in `reduce` array method for this.
> 3. The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?
> ```js
>  let eye = "eye";
> 
>   const fire =
>  (
> 
>  ) =
>  >
>   {
>     return `bulls-`;
>   }
>   ```
> 4. Refactor the following ES5 function to use an arrow function:
> ```js
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```


# Context
When a function is invoked, it receives the parameters that were passed in as well two other objects

1. `arguments` - an array-like object which lists all the parameters which were pass into function
2. `this` - is an object that refers to the current execution context

What the actual object `this` refers to will depend on how the function was called.

## constructor
A function called using `new` operator is called a `constructor`. It creates a new object inheriting from
its prototype and sets the value of `this` to the new object.

  ```js
  var Car = function(color){
    this.color = color;
  }

  var myCar = new Car('red');
  console.log(myCar.color) // red
  ```

## method
A function which is a property of an object is called a `method`. When a function is invoked as a method `this` will refer to the parent object.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  library.addBooks(7);
  console.log(library.numberOfBooks) //7
  ```

## function
A function which does not belong to a method will have its context set to the global object, which is `window` in the browser and `global` in Node.

That causes several issues.

1. Inner functions cannot see the context of parent methods

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
   
      function double(){
        this.numberOfBooks *= 2;
      }

      double();
    }
  }

  library.addBooks(5)// 5
  console.log(library.numberOfBooks);
  ```

This is because `double` is a function and it gets passed the `global` object as the value of `this`.

2. When a method is called a function we lose our original scope because `this` becomes `window` rather than the parent object.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  var detached = library.addBooks;
  detached(7);
  console.log(library.numberOfBooks) // 0
  ```

Also, your global object has now acquired a `numberOfBooks` property which is not ideal :(

We can resolve this in two ways.

1. Use a temporary variable to capture `this` which will remain visible to the inner function

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      var that = this;
      this.numberOfBooks += books;

      function double(){
        that.numberOfBooks += books;
      }

      double();
    }
  }

  library.addBooks(5) // 10
  console.log(library.numberOfBooks);
  ```

2. `bind` the value of `this` so it is retained. `bind` is a method of `function` which returns a function that has `this` set to the value passed in as a param.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  var detached = library.addBooks;
  detached = detached.bind(library);
  detached(7);
  console.log(library.numberOfBooks) // 7
  ```

## apply / call
Another way to invoke functions is using `apply` or `call` methods. They both accept the context, the value that will become this as their first param. The difference is that `apply` takes the params that will be passed into the method as an `array`, whereas `call` takes them as individual params.

  ```js
  var book = {
    author: 'JK Rowling'
  }

  function addTitle(title){
    this.title = title;
  }

  addTitle.call(book, 'Harry Potter');
  console.log(book.title) // Harry Potter
  ```

> **Exercise**

> Above we solved the issue 1. with internal method `double` using tempory variable `that` and we solved issue 2. with detached context using `bind`. Please solve issue 1. using `bind` instead and issue 2. using temporary variable `that`.

> Below we turn the `push` method of the array `films` into a standalone function and remove the `push` method from `films`. However, we still have both the array `films` and `push`, they are just separate entities now. Inside `addMissionImpossible` Calling `push('Mission Impossible')` throws an error because it no longer has a reference to its context. Also, calling `films.push('Mission Impossible')` beacuse films no longer has the method `push`. Use `call` or `apply` to invoke to function `push` with the context `films` to insert another film title into the array films.

> ```js
> function addMissionImpossible(films, push){
>   // push('Mission Impossible'); // throws error
>   // Array.prototype.push called on null or undefined
>   
>   // films.push('Mission Impossible'); // throws error
>   // films.push is not a function
> }

> var films = ['Batman', 'Wonder Woman'];

> var push = films.push;
> films.push = null;

> addMissionImpossible(films, push);

> console.log(films);
> ```
=======
# JavaScript Core 3

** What we will learn today?**

- Unit Testing
- The _Jest_ testing framework
  - The `test()` function
  - `expect()` and `toBe()`
  - `npm test`
  - Test coverage
- Test-driven development (TDD)
  - Red, green, refactoring
- Modules
  - `require()`
  - `module.exports`

---

# Before we get started

> **Fork** [this repository](https://github.com/CodeYourFuture/js-core-3-exercises) to your own Github account, then **clone** it to your computer.  
> Today's exercises will be based on this repository.
>>>>>>> origin/scotland

# Unit Testing

<<<<<<< HEAD
# Resources
1. [ES6 - Arrow Functions](https://codetower.github.io/es6-features/#Arrow Functions)
2. [You Don't Know JavaScript - Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md)
3. [MDN - Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
4. [Understanding scope and context](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
5. [JavaScript: The Good Parts by Douglas Crockford, chapter 4 - Functions](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
6. [You Don't Know Javascript - this or That?](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md)
7. [You Don't Know JavaScript - this all makes sense now!](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)
=======
Testing is a key skill for any software programmer. We need to make sure our software is thoroughly tested, otherwise bad things happen. Testing makes sure our programs behave like we intend them to do - **if we don't test, we can cause severe bugs**. Bad software can make planes crash, companies bankrupt, and users of your software really frustrated.
>>>>>>> origin/scotland

There are different levels on which we can test software, for example integration testing, end-to-end testing, and unit testing. Today we will deal with unit testing, which is probably the most universal testing discipline.

A unit test is exactly that - it tests a _unit_ of code. "Unit" can mean different things, but in JavaScript it usually refers to a single function.

Remember when we talked about functions? Functions take _input_ (as arguments), do something with it (in the function body), and return _output_ (using the `return` statement). Ideally, a function should always return the same output if the same input is given. It makes it predictable and testable - and that's what we want!

```
         |-----------------|
input => | doing something | => output
         |-----------------|
```

So, when unit testing a function, we want to make sure that _for a certain input, we get the expected output_. For this we need to make sure that the output matches our expectations. In the simplest form that means we do an equality check:

```js
myFunction(input) === expectedOutput
```

We can formalise this using another function that compares two values and complains when they do not match. Such a function is prepared in `unit-testing/equals.js`.

We can use this function to simply compare to values:

```js
equals(1, 1); // This should pass
equals(1, 2); // This should fail
equals("Hello", "Hello"); // This should pass
```

Now we can use this `equals()` function to test our own code by comparing a function result to an expected value.

> *Together:* Follow the instructions in `unit-testing/sum.js`!

> *Exercise:* Now you! Take the provided `unit-testing/findNeedle.js` and turn it into a function that returns a result instead of
> printing it. Then run it using multiple inputs and make sure it returns the correct results each time!

## Test-driven development (TDD)

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. ([Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development))

A key principle in TDD is that we write think about our requirements before we dive into code: What should our program be able to do? What are our edge cases?

We formalise those requirements by writing tests - _even before our program is written_! At this time, all our tests will fail, because we haven't written any code yet. Our tests are now **RED** (the colour represents a failing test).

Now we want to turn this **RED** into **GREEN**. We do this by implementing our function in a way that covers all our test cases.

> *Exercise:* Follow the instructions in `tdd/findNeedle.js`!

## Refactoring

There are times when we want to make our code better without changing any functionality, for example because we just learnt about a better way to solve a certain problem (like, finding needles in haystacks). This is called *refactoring*.

When previously **GREEN** code - working code! - suddenly does not work anymore, we call this a *regression*. Our existing tests can make sure that when we refactor, the functionality of our code actually stays the same, and does not regress.

> *Together:* Refactor the `findNeedle` function we just wrote to be implemented using `.map()` and `.filter()`.

## Unit testing frameworks

There are lots of other things you might want to test for than two things being equal. You might want to test if a number is smaller or greater than another, if a function was called, if an error happened, or if one thing happened before another thing, or how long a function call took to execute.

We don't have to build all these things ourselves. Instead there are _unit testing frameworks_ that take all that work off our shoulders. All we need to do is provide the code and the tests.

### Jest

The unit testing framework we are trying to day is called [Jest](https://facebook.github.io/jest/). It's created by Facebook and useful for all kinds of unit testing (especially testing React, which we will do in a later lesson).

Look into your `jest/` folder. You will find a file there, `sum.test.js`. The suffix `.test.js` tells Jest that this file contains tests it should execute. To execute the test, run the following command in your terminal:

```sh
npm test
```

This command runs the test in `sum.test.js`, which tests the `sum()` function. You can see the test output and the fact that the test passed.

Tests cases in Jest have the following structure:

```js
test('test description', function() {
  // Test instructions
});
```

Jest provides a set of functions that you can use to write your actual tests. They are created in a way that imitates natural language, for example:

```
_Expect_ sum of 1 and 2 _to be_ 3
```

becomes

```js
expect(sum(1, 2)).toBe(3);
```

<<<<<<< HEAD
1. Watch all of the videos in Wes Bos's ES6 course.

2. If you finish that you can move on to [JavaScript30](https://javascript30.com/), another course by WesBos. In this course you'll build something in JavaScript every day, which means lots of cool projects! 

3. Work through this quiz: [Scope quiz](http://madebyknight.com/javascript-scope/)

4. Next week we'll be moving on to more advanced JavaScript. The key to becoming a good developer is constant practice. Practice your JavaScript basics by signing up for [Codewars](https://www.codewars.com/) and try to do a couple of exercises every day.

## Prepare for the next class
1. Read this [on Test Driven Development](https://www.tutorialspoint.com/software_testing_dictionary/test_driven_development.htm)
=======
You can add multiple test statements in the same test case (a test case is one call of the `test` function, but you can also create multiple test cases in one file. It is important that you give all your test cases meaningful descriptions.

> *Exercise:* Add another test case to `sum.test.js`. Is the sum of 10 and -10 really zero? Run the tests using Jest.

> *Exercise:* Take the `findNeedle` function you have tested previously, copy it into the `jest/` folder and call it `findNeedle.test.js`. Then write a test to be used with Jest, similar to `sum.test.js`. Make sure you cover multiple inputs and give all tests meaningful descriptions! Run the tests using Jest.

### Test coverage

Test coverage describes the extent to which a code base is tested. When Jest runs your tests, it generates a so-called _coverage report_. This report tells you how many of your *lines of code* are covered by tests, how many functions, statements, and branches.

> A branch is one of multiple ways a code control flow can go. For example, if you have an `if() ... else ...`, both the "if" and the "else" branch must be covered by tests.

We want to keep our code coverage as high as possible. Jest allows us to generate a coverage report when we run the following command in the terminal:

```sh
npm test -- --coverage
```

> *Exercise:* Check your code coverage for the tests you wrote. Is any of the numbers below 100%? If so, try and bring it up to 100%!

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
1. [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)
2. [Jest](https://facebook.github.io/jest/)
3. [Modules](https://nodejs.org/api/modules.html)

# Homework
1. Read the Wikipedia article about [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)
2. Solve the exercises in this repo (using TDD) https://github.com/CodeYourFuture/js-tdd-exercises

**TODO**

## Research

- Research other module formats than CommonJS. What is AMD? What are ES6 modules and how do their differ from CommonJS?
- What are other test frameworks for JavaScript?
- More parts of the Jest (Jasmine) DSL than just `.toBe()`
>>>>>>> origin/scotland
