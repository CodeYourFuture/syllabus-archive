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

# 1. Variable Scope

## The Problem

Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing.

As we know, after we declare or define a new variable we can refer to it later in our code using the variable name.

```js
let name = "mo";
let age = 42;
let favouriteFoods = ["pizza", "apples", "tofu"];

// lots of code here

// later
console.log("my name is " + name);
```

Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important.

Imagine a banking app being built by two developers. Developer 1 uses the variable name `money` to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name `money` to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank.

## The Solution

One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name `money`. We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not.

Instead, we need to find a way to make variables **safer**. We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase.

We call this `scope`.

## What is Scope?

Think about the way that laws are set in different countries. Most laws are set by the government of that country and are `local` to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are `global` laws.

In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws.

![Types of laws](https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1)

In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law.

But a pirate 🏴‍☠️ in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship).

In the same way we think about which laws apply to which **parts of a country** we must also think about which variables apply to which **parts of your code**. Variables, like laws, only apply to a certain area.

```js
let globalLaw = "no slavery";
// only 1 law applies here

function USA() {
  let nationalLaw = "drinking age is 21";
  // 2 laws apply here

  function Massachusetts() {
    let stateLaw = "bars closed at 2am";
    // all 3 laws apply here
  }
}

console.log(stateLaw); // Error: 'stateLaw' is not defined
```

In the example above, the State Law only applies to Massachusetts. When we try to `console.log` the `stateLaw` variable at the end, it is not defined. This part of your code does not even know this variable exists!

### Local Variables

Let's rewind and look at this in detail. We know that variables are declared using the `let` statement.

```js
let greeting = "Hi ";
```

If we define a variable inside a function, it becomes **local** to that function. If we want to use a fancy word, we can also say it becomes **scoped** to that function.

```js
function greetUser(name) {
  let greeting = "Hi "; // This variable only exists here
  console.log(greeting + name);
}

greetUser("Naima");
console.log(greeting); // It doesn't exist here
```

The `console.log(greeting)` on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable `greeting` was defined in the `greetUser` function, it **does not exist** outside the function.

This lets us do new things with variables. You cannot usually create two variables with the same name. For example:

```js
function greetUser(name) {
  let greeting = "Hi";
  let greeting = "Shalom";
  // Error: 'greeting' has already been declared
}
```

But in the same way countries have different laws, functions have different `scopes`! And so it becomes possible to use the same variable name for different situations.

```js
function greetOnce(name) {
  let greeting = "Hi ";
  console.log(greeting + name);
}

function greetAgain(name) {
  let greeting = "Shalom ";
  console.log(greeting + name);
}
```

We have used the variable name `greeting` twice but it's very important to remember that **these are not the same variable**! The two variables called 'greeting' do not even know each other exist.

## Scope to the rescue!

When do we get a new scope?

Basically any time we use curly brackets (`{}`). Not just functions but also `if` statements, `for` or `while` loops.

Together we call these things `blocks`. A block is anything inside curly brackets. An if statement is a block, a function is a block, a loop is a block.

**Any time you define a variable inside a block, that variable cannot escape that block.** We say the variable is `scoped` to that block.

#### Check-in

Complete this [scope task](https://codepen.io/DomVinyard/pen/YzyxrjR?editors=0012) to understand how different scope applies to different variables.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjE2Mzk4NTUxLDEzNTkxNjcwNjNdfQ==
-->

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

Functions defined within class are also be known as **methods**.

### Exercises

Try these exercises in your breakout groups.

#### Exercise 1

Implement the `add` and `getTotal` methods of the `RunningTotal` class below.

```javascript
class RunningTotal {
  constructor() {
    this.currentTotal = 0;
  }

  add(n) {
    // Implement this method
  }
  getTotal() {
    // Implement this method
  }
}

const runningTotal = new RunningTotal();

runningTotal.add(3);
runningTotal.add(7);
runningTotal.add(7);
runningTotal.getTotal();
// 17
```

#### Exercise 2

Implement the `constructor` method of the `StopWatch` class below.

```javascript
class StopWatch {
  constructor() {
    this.secondsElapsed = 0;

    //Finish implementing the rest of the constructor so that secondsElapsed is updated
  }

  getTime() {
    return `Seconds elapsed: ${this.secondsElapsed}`;
  }
}

const stopWatch = new StopWatch();

// Wait a few seconds...

stopWatch.getTime();
// 'Seconds elapsed: 3'

// Wait a few more seconds...

stopWatch.getTime();
// 'Seconds elapsed: 7'
```

#### Exercise 3

Implement the `constructor`, `store` and the `lookup` methods of the `AddressBook` class below.

```javascript
class AddressBook {
  // Implement the constructor method
  // Implement the store method
  // Implement the store lookup
}

const myAddresBook = new AddressBook();

myAddressBook.store("bart", "bart@simpsons.com");
myAddressBook.store("maggie", "maggie@simpsons.com");

myAddresBook.lookup("bart");
// 'bart@simpsons.com'

myAddresBook.lookup("homer");
// 'address not found'
```

Notice that when you come to using a class instance, you are only interacting with it through its methods, e.g. `store` and `lookup` for `AddressBook`. Similar to functions, classes provide a way of creating abstractions over lower-level implementations, which can help us better organise and maintain our code.

## 3. Project Work

### Explanation

For the test of the days we'll be working together on our group project

You can find the project [here](https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/tv-show-dom-project)

Students should group into teams based on the Level that they are working on currently.

{% include './homework.md' %}
