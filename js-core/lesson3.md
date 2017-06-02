# JavaScript Core 3

** What we will learn today?**

- Modules
- Unit Testing
- Test-driven development (TDD)

---

# Modules

So far, all our program has been in a single file. But Node programs can become really large, and having all our code in only one file will not be maintainable.

We can therefore split our code into so-called *modules*. A module is basically a JavaScript file that makes its functionality available to other modules and programs.

## Importing modules

But how do we make use of another module in our program? We need to *import* it, and this is done using a function called `require()`.

> There are different module formats for JavaScript. The one we are using here, which is natively supported by Node, is called **CommonJS**.

```js
var findNeedle = require('./findNeedle.js');
```

Assuming our program is in the same folder as `findNeedle.js`, we can use the above code to import the functionality provided by that module and store it in the `findNeedle` variable.

We can then continue to use the `findNeedle` function as if it we defined it in our own program!

```
var haystack = ['hay', 'hay', 'needle', 'hay'];
console.log("Found needle at position " + findNeedle(haystack));
```

> Modules can not only export functions, but all variable types you already learned about. Most commonly, they export a function or an object containing multiple functions.

> *Exercise:* In your `main.js` file, import the provided `third-party.js` and console.log its result.

## Creating modules

As mentioned, it is good practice to split your code into different modules. You do not need one file per function, but you can group similar functionality together.

It is really simple to take existing JavaScript code and turn it into a module by exporting its functionality:

```
function printName(name) {
  console.log("My name is " + name);
}

module.exports = printName;
```

The key here is the line containing `module.exports`. As you see, this is an assignment, and whatever is assigned to `module.exports` will be made available to other modules and program when this file is imported (remember, using `require()`).

> *Exercise:* Take a function that you created in last week's homework (other than `findNeedle()`). Put it in a separate file and _export_ it, as described above. Name the file like your function, so when your function is called `myGreatFunction`, name your file `myGreatFunction.js`.
>
> Then `require()` and use it in `main.js` and make sure this program runs.

# Unit Testing

Testing is a key skill for any software programmer. We need to make sure our software is thoroughly tested, otherwise bad things happen. Testing makes sure our programs behave like we intend them to do - if we don't test, we can cause severe bugs. Bad software can make planes crash, companies bankrupt, and users of your software really frustrated.

There are different levels on which we can test software, for example integration testing, end-to-end testing, and unit testing. Today we will deal with unit testing, which is probably the most universal testing discipline.

A unit test is exactly that - it tests a _unit_ of code. "Unit" can mean different things, but in JavaScript it usually refers to a single function.

Remember when we talked about functions? Functions take _input_ (as arguments), do something with it (in the function body), and return _output_ (using the `return` statement). Ideally, a function should always return the same output if the same input is given. It makes it predictable and testable - and that's what we want!

So, when unit testing a function, we want to make sure that _for a certain input, we get the expected output_. For this we need to make sure that the output matches our expectations. In the simplest form that means we do an equality check:

```
myFunction(input) === expectedOutput
```

We can formalise this using another function that compares two values and complains when they do not match.

- We go through the problems they've already solved in the last week, refactor and do them in a testable way - introduce TDD etc..

- Use a bad version of the "needle in haystack" code
  - First version isn't even a function (red)
  - Second version is a function (green)
  - Third version uses `.indexOf`

> *Exercise:* Now you! Take the provided `magic.js` and turn it into a function that returns a result instead of
> printing it. Then run it using multiple inputs and make sure it returns the correct results *TODO: ELABORATE*

*TODO:* Let them write their own "expectEqual" function, maybe?

## Test-driven development (TDD)

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. ([Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development))

- What is TDD? Red, Green, Refactor

## Separating code and tests

Remember when we talked about exporting and importing code using modules? This is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is therefore common to put them in separate files. We are going to call the file containing the tests after the file containing the code to be tested, just appending `.test` at the end of the filename. Like so:

```
main.js
main.test.js
someOtherCode.js
someOtherCode.test.js
```

> This is really up to convention - you can even put your tests in a different folder!

> *Exercise:* Take the test you have just created and put it into a separate file. Then import the function to be tested in the test file and run the test file (instead of the file containing your function).

## Unit testing frameworks

There are lots of other things you might want to test for than two things being equal. You might want to test if a number is smaller or greater than another, if a function was called, if an error happened, or if one thing happened before another thing, or how long a function call took to execute.

We don't have to build all these things ourselves. Instead there are _unit testing frameworks_ that take all that work off our shoulders. All we need to do is provide the code and the tests.

### Jest

The unit testing framework we are trying to day is called [Jest](https://facebook.github.io/jest/). It's created by Facebook and useful for all kinds of unit testing (especially testing React, which we will do in a later lesson).

Look into your `jest/` folder. You will find two files there, `sum.js` and `sum.test.js`. The suffix `.test.js` tells Jest that this file contains tests it should execute. To execute the test, run the following command in your terminal:

> npm test

This command runs the test in `sum.test.js`, which tests the `sum()` function exported by `sum.js`. You can see the test output and the fact that the test passed.

> *Exercise:* Add another test to `sum.test.js`. Is the sum of 10 and -10 really zero? Run the tests using Jest.

> *Exercise:* Take the function you have tested previously and copy it into the `jest/` folder. Then write a test file to be used with Jest, similar to `sum.test.js`. Make sure you cover multiple inputs and give all tests meaningful descriptions! Run the tests using Jest.

### Test coverage

Test coverage describes the extent to which a code base is tested.

*TODO: More*

> `npm test -- --coverage`

# TODO

- find good npm module to install and demonstrate use of 3rd party modules


# Resources
1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

# Homework


## Research

- Research other module formats than CommonJS. What is AMD? What are ES6 modules and how do their differ from CommonJS?
- What are other test frameworks for JavaScript?

* * *

1. First part of Homework - Easy
- write a function that returns whether a number exists in a list
Example:
    [1,2,3,4] -> does 6 exist -> false
              -> does 3 exist -> true
- write a function that concatenates two lists together
Example:
    [1,2,3], [7,8,9] -> [1,2,3,7,8,9]

- given the following object shape:

    var person = {
        name: "Bob",
        age: 25
    };

    Write a function "growOlder()" that accepts a "person" as an argument and returns a new person with his/her age increased by 1.


2. Second part of Homework:
Implement solutions to solve the following problems:

Problem 1.
Given the following array
[2,5,7,2,3], and the number T = 8
Build a solution that finds the two numbers in the array that add up to T.

Problem 2.
Think about how you would represent an employee as a JavaScript object.

Create the following functions:
- addEmployee: adds an employee to the list of existing employees
- search: allows you to search for an employee by name
- fire: deletes an employee by ID from the list
- changeRole: accepts as parameters an employee ID and a string for the new role it should have. Finds the employee by ID and changes his/her role.

3. **[Bonus/Optional]**
- Try to finish as many exercises as you can from http://reactivex.io/learnrx/ (try to finish up to exercise 8 at least)
- They're difficult, the point is for you to read, learn and understand more about the `.map` and `.filter` functions. It's okay if you can't finish them all.

# Research
1. Watch the following video on "Value type vs. reference type": https://www.youtube.com/watch?v=mh-hPzDfb_Q .
If it makes sense, great! If not, don't worry, we'll be going over the same topic next week and discuss it until it makes sense.

2. Watch the following videos on the `.map` and `.filter` array operators:
- Map: https://www.youtube.com/watch?v=bCqtb-Z5YGQ
- Filter: https://www.youtube.com/watch?v=BMUiFMZr7vk

Again, don't worry if nothing makes sense. If you don't understand something, you can Google for more information, and if it still doesn't make sense, we'll be going through these topics next week!


## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
