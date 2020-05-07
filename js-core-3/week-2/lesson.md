![](https://img.shields.io/badge/status-draft-darkred.svg)

# JS Core III - 2

** What we will learn today?**

- [Debugging](#good-design)
- [Good Design](#good-design)
- [Async and Sync revisited](#async-vs-sync)
- [Intro to ES6](#intro-to-es6)

---

# Debugging

Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.

## Syntax bugs

A syntax bug is an error caused by something the programmer has typed – it could be a spelling mistake or a command that the computer doesn’t understand.

## Logical bugs

A logical bug is an error which means that even though the computer is able to carry out its instructions, it doesn’t act as the programmer intended or the user expects.

> Exercise: This website ([https://kabaros.github.io/dom-ajax-repo-solution](https://kabaros.github.io/dom-ajax-repo-solution)) has _bugs_. Use Chrome Developer Tools to find out what is causing these issues.

> Follow this tutorial about [Debugging with Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/)

> The terms "bug" and "debugging" are popularly attributed to Admiral Grace Hopper in the 1940s.[1] While she was working on a Mark II computer at Harvard University, her associates discovered a moth stuck in a relay and thereby impeding operation, whereupon she remarked that they were "debugging" the system

# Good Design

Design is important if we want our code to be understandable (both to other
humans, but also to us in the future), to be easy to use and easy to expand.

There are three main principles you need to know now: clarity, reusability and
extensibility. There are also others, but they are deeply related to these
three.

- Ease of Maintenance / Clarity

  - Naming
  - Commenting
  - Clear logic
  - Concise
  - Formatting
  - Avoiding Redundancy

- Reusability

  - DRY
  - Single Reponsibility
    - Avoiding global state (scope)
    - Predictability and Ease of testing

- Extensibility
  - Avoiding being unnecessarily specific (e.g. magic numbers)

Now let's take a look at a bigger example of a badly written function

```js
function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
  var totalIncomeTax = incomeTax1 + incomeTax2;
  var studentLoan = (salary - 17775) * 0.09;
  var originalSalary = salary;
  var nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } else {
    nationalInsurance = salary * 0.08;
  }

  var deductions = [nationalInsurance, totalIncomeTax, studentLoan];

  salary = salary - deductions[0];
  salary = salary - deductions[1];
  salary = salary - deductions[2];

  return (
    "Your gross income is £" +
    originalSalary.toString() +
    " and your net income is £" +
    salary.toString() +
    "."
  );
}

console.log(myFunction(28000, "1150L", 1000, 580, false));
```

What is wrong with this function?

1. Naming: the function has a bad name, myFunction() tells you nothing about
   what the function does. It's also considered bad practice to name variables
   vaguely by separating them through numbers (incomeTax1, incomeTax2, etc). If
   you find yourself doing this then you should either use an array (such as
   incomeTax[]).

2. Commenting: the function isn't documented at all. It's very difficult to
   understand what the function's purpose is and how each part of the code
   contributes to it. By writing comments, the coder communicates their
   reasoning and helps the function be human readable.

3. Layout/formatting: unnecessary spacing between the if and else statement.

4. Single responsibility: the function doesn't have a single purpose. It
   calculates national insurance and salary deductions. Maybe the national
   insurance calculation could be moved to a separate function.

5. Input variable being overwritten: the function requires gross salary (before
   deductions) and net salary (after deductions) the `salary` input variable is
   therefore copied into an `originalSalary` variable so that it can be changed.
   It would be much clearer to create a new `netSalary` variable and leave
   `salary` unmodified.

6. DRY principle: the function validates the DRY (Don't Repeat Yourself) rule.
   The line where a deduction is taken from the salary is repeated 3 times with
   different indices. This can be replaced with a `for` loop.

7. Magic numbers. The code contains a lot of magic numbers, including `17775`,
   `0.09` and `0.1`.

8. Useless parameters: the code contains a variable which isn't used. They
   should be removed because they are confusing. It is tempting when you're
   starting to code a function to add more parameters thinking that you might
   need them, but it's important to remove them if you don't end up using them.

> Exercise: Working in pairs, go through all of these issues and make
> appropriate improvements to the code.

# Async vs Sync

ToDO: Trace async code on paper

- Different ways of doing async in JavaScript

# Intro to ES6

ECMAScript 2015 (or ES6) is a significant update to JavaScript that introduces
new syntax for writing complex applications.

## const and let

You have already come across the `var` keyword as a way to create new variables.
The `let` and `const` keywords are also used for variable creation, but the
variables created using these keywords have different scope. Var has "function
scope", whereas let and const have "block scope".

> Exercise: This **badly designed** function will throw the error `message is not defined`. What is the problem, and how could we fix it?

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

ES6 also has a new way of declaring functions. Let's see how it works.

```js
// before
function sum(a, b, c) {
  return a + b + c;
}

// ES6
const sum = (a, b, c) => {
  return a + b + c;
};
```

If the function only contains one expression, the curly braces and the `return`
are optional and we can write the whole function in one line.

```js
const sum = (a, b, c) => a + b + c;
```

> Exercise: Refactor the previous code to have a separate function that checks
> if gender is 'female' or not, and use it in sayGreeting. Let's try and make
> the code as compact as possible together using ES6 features.

## Default parameters

ES6 allows us to declare defaults for function arguments. The default value is
used when the argument/parameter is either missing or `undefined`.

This function returns the sum of three numbers. Let's assume we want to use the
same function with only two arguments:

```js
// without default parameter
const sum = (a, b, c) => {
  c = c || 0;
  return a + b + c;
};

console.log(sum(1, 3, 4)); // 8
console.log(sum(2, 5)); // NaN

// with default parameter
const sum = (a, b, c = 0) => {
  return a + b + c;
};
console.log(sum(2, 5)); // 7
```

## Destructuring

In ES6 we can extract data from objects or arrays using destructuring.

```js
// before
var chicken = {
  name: "Maggie",
  age: 2,
};

var name = chicken.name;
var age = chicken.age;

var numbers = [1, 2];

var firstNumber = numbers[0];
var secondNumber = numbers[1];

// in ES6
const chicken = {
  name: "Maggie",
  age: 2,
};

const { name, age } = chicken;

const numbers = [1, 2];

const [firstNumber, secondNumber] = numbers;
```

# Resources

- [ES6 features](http://es6-features.org/)
- [Let and const](http://wesbos.com/let-vs-const/)

{% include "./homework.md" %}
