![Lesson in review](https://img.shields.io/badge/status-review-orange.svg)

# JavaScript Core I - 2

**Teaching this lesson?**

Read the [Mentor Notes here](./mentors.md)

**Contents**

- [Expressions](#expressions)
- [Booleans](#booleans)
- [Comparison Operators](#comparison-operators)
- [Conditionals](#conditionals)
- [Logical Operators](#logical-operators)
- [Loops](#loops)
- [Arrays](#arrays)
- [Extra exercises](#extra-exercises)

**Learning Objectives**

By the end of this class, you should be able to answer these questions:

- What are expressions and statements (and what's the difference)?
- What are conditionals?
- What are `for` and `while` loops (and what's the difference)?
- How do you use expressions with conditionals?
- What are comparator operators and how do you use them?
- What are logical operators and how do you use them?
- What functionality does the `assert` module provide?
- What are arrays and how can you interact with them?

---

## Expressions

In JavaScript, there are **expressions** and **statements**. We will use these words frequently to describe code.

### Expression

An expression returns a value. Sometimes we will say that an expression _evaluates to_ a value.

The following are all examples of expressions:

```js
1 + 1; // returns 2
("hello"); // returns "hello"
2 * 4; // returns 8
"Hello" + "World"; // returns "HelloWorld"
```

We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement.

Expressions can also contain variables.

```js
function greetingPlanet() {
  const planet = "Earth";
  return `Hello ${planet}`; // returns Hello Earth
}
```

You can also use expressions inside a string interpolation or as a `return` value.

```js
console.log(`2 + 4 is ${2 + 4}`); // 2 + 4 is 6

function double(num) {
  return num * 2; // expression being returned
}
```

### Statement

A statement is some code that performs an action. Here are some examples:

```js
let sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`
let greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`
console.log(2 * 4); // action: logs the result of `2 * 4` to the console
sayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`
```

There are some other different types of statements that we will learn in the coming weeks.

You can run `node` by itself, which will open a _node console_, also called a [Read–Eval–Print Loop (REPL)](https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm).

This console allows you to run expressions in the console line by line and is a great way of testing bits of code before writing it in a script.

### Exercise (5 mins)

In your VS Code terminal, run the command `node` and run the following expressions. What are their outputs? Is there anything you didn't expect? (To exit the node REPL, you have to click <kbd>Ctrl+d</kbd> or <kbd>Cmd+D</kbd> on Mac)

- `1 + 2`
- `"hello"`
- `let favouriteColour = "purple"`
- `favouriteColour`
- `console.log(favouriteColour)`

## Booleans

There is another _primitive type_ in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
```

### Exercise (10 mins)

1. In a node REPL, what is the `typeof` a `true` or `false`?
2. Pair up and correct the following function so that the output returns `"You've given me a bool, thanks!"`

```js
function boolChecker(bool) {
  if (typeof bool === ) {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

boolChecker(true);
```

3. As a class, can you step through the function and explain what each line does?

## Comparison Operators

In the previous exercise, you used an **expression** that returns a `boolean` value. This was possible because of the **comparison operator** `===`. Using a comparison operator will always return a `boolean` value.

### Assert
We will also be using a new keyword to make sure the comparisons we do below return `true`. This is the `assert`.

When given `true`, it does nothing. Nice. When given `false`, it will error. It is very good for testing things you expect to be `true`.

Here's an expression that evaluates to a `boolean`.

**Can you work out what will happen with the code below?**

```js
assert(1 > 2);
// and...
assert(2 < 1);
```

The `>` symbol in the expression is a **comparison operator**. Comparison operators compare two values. This operator checks to see if the number on the left is bigger than the number on the right.

```sh
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
```

You might see people use two other comparison operators. They are valid, but are the evil twins of `===` and `!==` and it is generally considered bad practice because of the bugs the can cause.

**&#10008; - Do not use == and !=**

```sh
== equal compares only value
!= unequal compares only value
```

**&#10004; - Do use === and !==**

```sh
=== equal compares both value and type
!== unequal compares both value and type
```

If you see these, suggest people change them in pull requests.

### Exercise (5 mins)

1. Modify the values below to have the compare function return the desired value:

```js
const assert = require("assert");

const mentorCount = // TODO
const studentCount = // TODO
assert(mentorCount < studentCount);

const capacity = 25
const people = // TODO
assert(capacity > people);

const name1 = // TODO
const name2 = // TODO
assert(name1 === name2);

const number1 = // TODO
const number2 = // TODO
assert(number1 !== number2);

const thisNumber = // TODO
const thatNumber = // TODO
assert(thisNumber === thatNumber);

const thisArray = [1, 2, 3, 4, 5];
const thatArray = [1, 2, 3, 4, 5];
assert(thisArray === thatArray);
```

The array comparison doesn't work because JavaScript comparison only works as expected on `number`s, `string`s, and `boolean`s.

You need to be aware of this, and its possible for you to go deeper into array comparisons outside of the lesson, though generally remember that only `number`s, `string`s, and `boolean`s work with equality.

MDN has some slightly in-depth documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

## Conditionals

Like humans, computer programs make decisions based on the information given to them. **Conditionals** are a way of representing these decisions in code (remember, you saw this in a previous exercise!)

For example:

- In a game, if the player has 0 lives, then the game is over
- In a weather app, if rain is forecast, a picture of rain clouds is shown

The most common type of conditional is the **if statement**.

An if statement runs some code if a condition is met. If the condition is not met, then the code will be skipped.

```js
let isHappy = true;

if (isHappy) {
  console.log("I am happy");
}
```

The code in paratheses - e.g. `(isHappy)` - is the condition. The condition can be _any_ expression. The following are all valid conditions:

```js
// boolean value
if (true) {
  // do something
}

// variable assigned to boolean value
let isHappy = true;
if (isHappy) {
  // do something
}

// equality operator returns a boolean value
if (1 + 1 === 2) {
  // do something
}

// comparison operator returns a boolean value
if (10 > 5) {
  // do something
}

// function call returns boolean value
if (greaterThan10(5)) {
  // do something
}
```

An `if` statement runs code when a condition is met. What if the condition is not met? Sometimes you want to run an alternative bit of code.

An **if...else statement** also runs code when the condition is _not_ met.

```js
let isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
```

What if there is more than one condition you want to handle in your function? For example, what if you can be confused as well? You can use **else if** to handle multiple conditions.

### Exercise (5 mins)

Can you explain what this function does line by line? What happens when you pass in a string?

```js
function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
```

### Exercise (10 mins)

Create a function that gives you a message depending on your mood! It should:

- take one input
- return "Good job, you're doing great!" if you pass in "happy"
- return "Every cloud has a silver lining" if you pass in "sad"
- return "Beep beep boop" if you pass in a number
- return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

## Logical Operators

There are three logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

They let you write expressions that evaluate to a boolean value.

Suppose you want to test if a number is bigger than 3 and smaller than 10. We can write this, using different logical operators.

```js
let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}
```

We can test expressions with logical operators in a node console too.

### Exercise (5 mins)

Type the following expressions into your node REPL and note the output. Anything you didn't expect?

- `let num = 10`
- `num > 5 && num < 15`
- `num < 10 || num === 10`
- `false || true`
- `!true`
- `let greaterThan5 = num > 5`
- `!greaterThan5`
- `!(num === 10)`

### Exercise (15 mins)

In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:

- take two parameters: one for the username and one for the user type
- if the username starts with a capital letter _and_ has length between 5 and 10 characters long, it must return `"Username valid"`; otherwise, it must return `"Username invalid"`
- if the user type is an `admin` _or_ a `manager`, all usernames must return `"Username valid"`

## Loops

When we're writing programs, we often find that we want to repeat a bit of code over and over, or repeat it but change something about it each time. To save ourselves from writing all that code, we can use a **loop**. JavaScript has two kinds of loops, a `while` loop and a `for` loop.

A `while` loop is a way to repeat code until some condition is evaluated to `false`. For example:

```js
let i = 0;
while (i < 20) {
  someFunction(i);
  i++;
}
```

It's important that the condition inside the parenthesis becomes false at some point - otherwise, we'll have what's known as an infinite loop!

The `for` loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like `i` above), incrementing them by some amount, and checking that they're less than a value.

The `for` loop syntax has special places for each of those three things. Here's the same loop as the first while loop above, as a for loop:

![For loop](https://user-images.githubusercontent.com/31692/75388870-9213a880-58dd-11ea-90e6-4e67eabf390b.png)

```js
for (let i = 0; i < 20; i++) {
  someFunction(i);
}
```

### Exercise (15 minutes)

Write two functions that:

- Take one number `n` as a parameter
- Add all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
- The first version of the function should use `while` and the second one `for`.

## Arrays

If you ever find yourself writing code like this...

```js
let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Rares";
```

...then it's probably time to use an **array**!

Arrays are data structures that hold a list of values.

```js
let mentors = ["Daniel", "Irina", "Rares"];
```

Arrays can hold any type of value (although almost always you only have one data type per array).

```js
let testScores = [16, 49, 85];
let grades = ["F", "D", "A"];
let greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];
```

You can access elements in an array using the **index** of an element with **bracket notation**

**🔔 Remember:** All arrays start at position 0! To access the first element in an array, you need to access index `0`, the second element at `1`, the fifth at `4` and so forth. This is called zero-based indexed arrays. There are some [very intense reasons for this](http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html), but most people just accept it and move on.

```js
let students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

students[0]; // "Ahmed"
students[3]; // "Nahidul"
```

You can also _assign_ new values to parts of an array:

```js
let students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

students[2] = "Bianca";

console.log(students); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]
```

### Exercise (5 mins)

In the node REPL, enter the following array:

```sh
> let fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
```

1. Which index do you need to return:

- strawberry
- kiwi
- orange
- banana

2. Replace 'apple' with 'raspberry' and 'fig' with 'pineapple'

### Exercise (10 mins)

1. Write a function to remove the duplicate elements of a given array and return the new length of the array.
   Sample array: [20, 20, 30, 40, 50, 50, 50]
2. After removing the duplicate elements the function should return 4 as the new length of the array.

### Exercise (5 mins)

Complete this function so that, if the second index in the array contains the name "Amy", it returns `"Second index matched!"`

```js
function secondMatchesAmy(array) {
  if ( ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
```

### Exercise (20 mins)

In pairs, write a function which squares all numbers in an array and returns the array of squared numbers.

Write a second function which takes an input of arrays and only returns an array of even numbers.

How can you combine the two functions to return an array of even and squared numbers?

## Extra exercises

### Playing computer I

1. Working in pairs or groups, you have to predict the output of this program without executing it.
2. What is printed to the console?
3. Have you learned anything new during this exercise?

```js
let a = 4;
let b = 8;

const multiplyNumbers = function (a, b) {
  return a * b;
};

const addNumbers = function (a, b, c) {
  return a + b + c;
};

for (let i = 0; i < 5; ++i) {
  if (i < 3) {
    const d = addNumbers(i, 2, a);
    console.log(d);
  } else {
    const e = multiplyNumbers(i, 4);
    console.log(e);
  }
}
```

### Playing computer II

1. Again, working in pairs or groups, you have to predict the output of this program without executing it.
2. What is printed to the console?
3. What was difficult about this exercise?
4. Have you learned anything new?

```js
let x = 2;
let y = 4;
let a = 2;
let b = 20;

const f1 = function (a, b) {
  return a * b;
};

const f2 = function (a, b, c) {
  return a + b + c;
};

console.log(x);
x = 3;
y = f1(x, 2);
console.log(y);

for (let i = 0; i < 10; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, y, a);
    console.log(d);
  } else {
    const e = f1(i, 2);
    console.log(e);
  }
}
```

## Glossary

- Assert: to determine whether something is `true` or not `true`, more precisely `false`
- Duplicate: exact copies of something (e.g. two or more files, numbers, directory can be exactly the same)
- Index: numbers that let you know an item's position inside an array
- REPL: (Read-Eval-Print-Loop) an interactive way to execute code you write inside the console
- Zero-based Index: an `array` starting at `0` and not at `1`

For words like **Terminal**, **Primitive Types** please see [Glossary: JavaScript Core I - 2](../week-1/lesson.md#Glossary)

{% include './homework.md' %}
