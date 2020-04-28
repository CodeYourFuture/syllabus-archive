# JavaScript Core III - Week 3

## Learning Objectives

- The learner should understand the concept of variable scope and be able to define them in global, local, block and class scope
- The learner should understand the concept of a JavaScript ES6 class and describe examples of when they are useful
- The learner should be able to create a JavaScript ES6 class that represents a simple object
- The learner should be able to use `this` keyword to define variables specific to a class instance

## Agenda

The purpose of this class is to introduce to the student:

1. The scoping of variables, specifically in reference to:
   - Local
   - Block
   - Global
   - `this`
2. Classes
3. Project Work

## 1. Variable Scoping

## The Problem

After you declare or define a variable, you may refer to it later in your code using the variable name.

This is fine when your code is small like this

```javascript
let myNumber = 4282;
let yourNumber = 2181;
let anotherNumber = 2112;
```

But imagine if you code gets really long, you'll suddenly find it really hard to keep track of all of them or - worse yet - you'll get confused and start to re-declare variables that you've already used somewhere else.

Wouldn't it be good if certain variables could only be used in certain places? This is what we call `scope`

### A Scope Analogy

When thinking about scope you can imagine it in the way that countries set laws for themselves. For example, a country has Global Laws, National Laws and Local Laws - like this

[](https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1)

In this analogy the Human Rights laws apply to all countries but the specific laws for a state do not apply to the world. This is useful as different laws apply in different places!

This could be shown in some example code like this

```javascript
const unLawOne = "Slavery is prohibited";
const unLawTwo = "Chemical weapons are prohibited";

function unitedStates() {
  let drinkingAge = 21;
  console.log(drinkingAge); // 21
  console.log(unLawOne); // Slavery is prohibited
}

console.log(drinkingAge);
// error, drinkingAge not defined
```

As you can see the Global Laws defined at the top of the code apply everywhere but the local laws only apply when you are inside the function.

This is also true for laws inside countries - for example the times that bars close at. For example in this diagram

[](https://i1.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/d7905-1cdqas_85deas-team241aq.png?w=730&ssl=1)

In this example the state of New York has a drinking age of 21 and all bars must close at 2am. In other states and countries they have different laws. This diagram could be shown by this example code

```javascript
function unitedStates() {
  let drinkingAge = 21;
  let state = "massachusetts";

  if (state == "massachusetts") {
    let closingTime = "2AM";
    console.log(drinkingAge); //21
    console.log(closingTime); // 2AM
  }

  if (state == "newYork") {
    let closingTime = "4AM";
    console.log(closingTime); // 4AM
  }

  console.log(closingTime); //undefined
}
```

_You can read more about this analogy [here](https://blog.codeanalogies.com/2017/11/22/how-javascript-variable-scoping-is-just-like-multiple-levels-of-government/)_

### Local Variables

These variables are declared using the `let` statement as you've been familiar with:

```javascript
let greeting = "Hello, ";
```

However, if these definitions are done within a function, they become **local** to it:

```javascript
function greetUser(username) {
  let greeting = "Hello, ";

  console.log(greeting, username);
}

greetUser("Jenny");
// Prints "Hello, Jenny"

// However, the greeting variable cannot be referenced here, since it's been declared within the greetUser function and we are currently trying to reference it outside the function:

console.log(greeting);
// Uncaught ReferenceError: greeting is not defined
```

You cannot define another variable with the same name inside the function:

```javascript
let greetUser = (username) => {
  let greeting = "Hello";

  let greeting = "Howdy";
  // SyntaxError: Identifier 'greeting' has already been declared
};
```

Any time you use `{}`s (e.g. when you make an `if` statement, a `function`, or a loop), you're creating a new "block". You can even just add `{}`s in just to make a block. Variables declared using `let` are also block scoped, meaning that you are free to reuse a variable name within a block and it won't affect the outer variable.

```javascript
let x = 1;

function numberSetting() {
  let x = 2; // different x variable
  x = 3; // assigning to inner x variable
  console.log(x); // 3
}

console.log(x); // 1
```

This block scoping behaviour will apply in contexts such as `for` loops, `while` and `if` statements (i.e. anything within curly brackets).

Every time you nest a

```javascript
function grandfather() {
  var name = "Hammad";
  // likes is not accessible here
  function parent() {
    // name is accessible here
    // likes is not accessible here
    function child() {
      // Innermost level of the scope chain
      // name is also accessible here
      var likes = "Coding";
    }
  }
}
```

### Global Variables

A variable that needs to be accessed everywhere (e.g. by many functions) can be defined as a global variable. You can do this by omitting the `let` (or `const`) keyword:

```javascript
// The variable VERSION can be subsequently be referenced anywhere in your code.
VERSION = "1.0.4";
```

Alternatively in the browser, you can also assign it only the `window` object, e.g.:

```javascript
window.VERSION = "1.0.4";
```

Global variables are handy but can hurt code readability, especially if your code is in a big file or spread across multiple files.

#### Check-in

**Questions**

What would be printed to the console in this code?

```javascript
let number = 1;

function firstFunction() {
  number += 1;
  console.log(number);
}

function secondFunction() {
  let number = 5;

  number += 1;
  console.log(number);

  firstFunction();
}

firstFunction();
secondFunction();
```

What’s the result of executing this code and why?

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

What is the result of the following code? Explain your answer?

```javascript
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  inside: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.fullName);
console.log(obj.inside.getFullName());
```

## 2. Classes

Variables can be used to hold information about the state your code is in, e.g. how many times someone has clicked on a button:

```javascript
let timesClicked = 0;

let whenButtonClicked = () => {
  timesClicked++;
  console.log(`Button has been clicked ${timesClicked} times`);
};

document
  .querySelector("#myButton")
  .addEventListener("click", whenButtonClicked);
```

However, you may end up being in a situation where you'll have to keep track of the click state of multiple buttons, or even a dynamic number of buttons:

```javascript
let timesClicked1 = 0;
let timesClicked2 = 0;

let whenButtonClicked1 = () => {
  timesClicked1++;
  console.log(`Button has been clicked ${timesClicked1} times`);
};

let whenButtonClicked2 = () => {
  timesClicked2++;
  console.log(`Button has been clicked ${timesClicked2} times`);
};

document
  .querySelector("#myButton1")
  .addEventListener("click", whenButtonClicked1);
document
  .querySelector("#myButton2")
  .addEventListener("click", whenButtonClicked2);
```

We can reduce this code duplication by using a JavaScript `class` (not the same as a class in CSS), a structure that ties together the state (`timesClicked`) and any functions that reference it (`whenButtonClicked`):

```javascript
class Counter {
  constructor() {
    this.timesClicked = 0;
  }

  whenClicked() {
    this.timesClicked++;
    console.log(`Button has been clicked ${this.timesClicked} times`);
  }
}

let counter1 = new Counter();
let counter2 = new Counter();

document
  .querySelector("#myButton1")
  .addEventListener("click", counter1.whenClicked);
document
  .querySelector("#myButton2")
  .addEventListener("click", counter2.whenClicked);
```

We can create instances of a class using the `new` operator, followed by the class name. When a class instance is created, its `constructor` function is called. We can pass the constructor arguments to use during initialisation.

For example, here is a `CounterFromN` class that starts counting from a number that's passed in:

```javascript
class CounterFromN {
  constructor(n) {
    this.timesClicked = n;
  }

  whenClicked() {
    this.timesClicked++;
    console.log(`Button has been clicked ${this.timesClicked} times`);
  }
}

let counterFromTen = new CounterFromN(10);

counterFromTen.whenClicked();
// Button has been clicked 11 times
```

Variables specific to a particular instance of a class are defined and referenced using the `this` keyword (e.g. `this.timesClicked`) within that instance.

### Check-in

**Question (5 mins):**
Create you own analogy:

```
    A class is like _____ because _____.
```

## 3. Project Work

### Explanation

For the test of the days we'll be working together on our group project

You can find the project [here](https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/tv-show-dom-project)

Students should group into teams based on the Level that they are working on currently.

{% include './homework.md' %}
