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

After you declare or define a variable, you may refer to it later in your code using the variable name.

Depending on how you declare the variable, you can limit the context in which the variable name can be referenced. This can help with the readability of your code.

### Local Variables

These variables are declared using the `let` statement as you've been familiar with:

```javascript
let greeting = "Hello, ";
```

However, if these definitions are done within a function, they become **local** to it:

```javascript
let greetUser = (username) => {
  let greeting = "Hello,";

  console.log(greeting, username);
};

greetUser("Jenny");
// Prints "Hello, Jenny"

// However, the greeting variable cannot be referenced here, since it's been declared within the greetUser function and we are currently trying to reference it outside the function:

console.log(greeting);
// Uncaught ReferenceError: greeting is not defined
```

Variables declared using `let` are also block scoped, meaning that you are free to reuse a variable name within a block and it won't affect the outer variable.

```javascript
let x = 1;

{
  let x = 2; // different x variable
  x = 3; // assigning to inner x variable
  console.log(x); // 3
}

console.log(x); // 1
```


This block scoping behaviour will apply in contexts such as `for` loops, `while` and `if` statements (i.e. anything within curly brackets).

Another way of declaring block (and locally) scoped variables is with the `const` keyword; this prevents that variable from being redefined later, and can help with readability.

```javascript

const VALUE_THAT_WONT_CHANGE = 'VALUE_THAT_WONT_CHANGE';

VALUE_THAT_WONT_CHANGE = 123;
// Uncaught TypeError: Assignment to constant variable.
```

If you need variable to be globally accessible, you can also omit declaring them with the `let` keyword.

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

**Question (5 mins):**

What would be the output of the following code:

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

##### Check-in

**Question (5 mins):**
Create you own analogy:

```
    A class is like _____ because _____.
```

## 3. Project Work

### Explanation

- Explain some key concepts that will be appearing in the homework this week

### Example

<!-- TODO -->

### Exercise

<!-- TODO -->

```

```
