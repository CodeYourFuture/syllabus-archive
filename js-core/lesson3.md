<<<<<<< HEAD
# JavaScript Core 2
** What will we learn today?**
- Scope
- Closures
- ES6 functions
- What is `this`?

---
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
