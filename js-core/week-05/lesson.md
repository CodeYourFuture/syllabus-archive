![Lesson in review](https://img.shields.io/badge/status-review-orange.svg)

# JavaScript Core 2

**What we will learn today?**

* [Expressions](#expressions)
* [Boolean Filters](#boolean-filters)
* [Comparison operators](#comparison-operators)
* [Predicates](#predicates)
* [Conditionals](#conditionals)
* [Logical Operators](#logical operators)
* [More Conditionals](#more-conditionals)
* [Array literals](#array-literals)
* [Array properties](#array-properties)
* [Array getters and setters](#array-getters-and-setters)
* [Array methods](#array-methods)
* [More Array methods](#more-array-methods)
* [Array map](#array-map)

---
> Please make sure you're working on the [js-exercises repo](https://github.com/CodeYourFuture/js-exercises) **Week 2** folder during this class.

## Expressions

In JavaScript there are **expressions** and **statements**. We will use these words frequently to describe code.

### Expression

An expression returns a value. Sometimes we will say that an expression _evaluates to_ a value.

The following are all examples of expressions:

```js
1 + 1; // returns 2
("hello"); // returns "hello"
2 * 4; // returns 8
"hello" + "world"; // returns "helloworld"
```

We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement.

### Statement

A statement is some code that performs an action. Here are some examples:

```js
var sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`
var greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`
console.log(2 * 4); // action: logs the result of `2 * 4` to the console
sayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`
```

There are some other different types of statements that we will learn in the coming weeks.

### Exercise

You quickly find out the result of an expression by running node in a terminal window.

* Open a terminal window
* Run the command `node`
* _You have now opened a node console (also called a REPL)_
* Type an expression and press enter
* To exit the console type Ctrl+C or type the command `.exit`

Example from inside a terminal window:

```bash
$ node
> 1 + 2
3
> "hello"
'hello'
> var greeting = "hello"
undefined
> greeting
'hello'
> console.log(greeting)
hello
undefined
> .exit
$
```

> Notice how when we execute an expression the value it produces is printed below it. When we execute a statement, we see `undefined` printed below. This is because statements don't produce values like expressions, they _do something_.

* Write some more expressions in the node console
* Assign some expressions to variables
* Check the value of the variables

Further reading on using the node console: [https://hackernoon.com/know-node-repl-better-dbd15bca0af6](https://hackernoon.com/know-node-repl-better-dbd15bca0af6)

## Boolean Filters

There is a special data type in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
var codeYourFutureIsGreat = true;
```

### Exercise

Head over to `exercise.js` and follow the instructions in the comments.

## Comparison Operators

We can also write **expressions** that return boolean values.

Here's an expression that evaluates to a boolean.

```sh
1 > 2
```

* Can you work out what value this expression evaluates to?

The `>` symbol in the expression is a **comparison operator**. Comparison operators compare two values. This operator checks to see if the number on the left is bigger than the number on the right.

`1` is not bigger than `2` so this expression returns `false`.

## More comparison operators

```sh
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value
!== not the same value
```

### Exercise

* Open `exercise.js` and follow the instructions.
* Open a node console, and write some expressions that use comparison operators

## Predicates

**Predicate** is a fancy word for a function that returns a boolean value.

These functions are very useful because they let you test if a value satisifies certain requirements.

```js
function isNumber(value) {
  return typeof value === "number";
}

isNumber(10); // returns true
isNumber("hello"); // returns false
```

JavaScript programmers often give predicate functions a name that starts with a verb e.g. `isBig`, `isNegative`, `isActive`, `shouldUpdate`,

Calling a predicate function is like asking a question: "is this value a number". The return value is the answer to your question.

## Conditionals

Like humans, computer programs make decisions based on information given to them. **Conditionals** are a way of representing these decisions in code.

For example:

* In a game, if the player has 0 lives, then the game is over
* In a weather app, if rain is forecast, a picture of rain clouds is shown

The most common type of conditional is the **if statement**.

An if statment runs some code if a condition is met. If the condition is not met, then the code will be skipped.

```js
var isHappy = true;

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

An if statement runs code when a condition is met. What if the condition is not met? Sometimes you want to run an alternative bit of code.

An **if...else statement** also runs code when the condition is _not_ met.

```js
var isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
```

## Logical Operators

There are three logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

They let you write expressions that evaluate to a boolean value.

Suppose you want to test if a number if bigger than 3 and smaller than 10. We can write this using logical operators.

```js
var num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}
```

We can test expressions with logical operators in a node console too:

```sh
$ node
> var num = 10;
undefined
> num > 5 && num < 15
true
> num < 10 || num === 10
true
> false || true
true
> !true
false
> var greaterThan5 = num > 5
undefined
> !greaterThan5
false
> !(num === 10)
false
```

## More Conditionals

A common use of if statements is inside of functions.

```js
function getGrade(score) {
  if (score >= 80) {
    return "A";
  }
  if (score >= 60) {
    return "B";
  }
}
```

You can also write this using `else if`:

```js
function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  }
}
```

## Array Literals

If you ever find yourself writing code like this...

```js
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Rares";
```

...then it's probably time to use an **array**!

Arrays are data structures that hold a list of values.

```js
var mentors = ["Daniel", "Irina", "Rares"];
```

Arrays can hold any type of value (although almost always you only have one data type per array).

```js
var testScores = [16, 49, 85];
var grades = ["F", "D", "A"];
var greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];
```

## Array properties

Arrays, like strings, have a `length` property.

You can check this by starting a node console in your terminal.

```sh
$ node
> var arr = [1, 2, 3];
undefined
> arr
[1, 2, 3]
> arr.length
3
```

## Array Getters and Setters

You can **get** a single value out of an array using **bracket notation**.

```sh
$ node
> var ingredients = ["Flour", "Water", "Salt"];
undefined
> ingredients[0]
Flour
> ingredients[1]
Water
> ingredients.length
3
```

Did you notice how we use `[0]` to get the first value? In programming we count starting at zero.

> The number inside of the brackets is called an **index**. Index just means the position of the item within the array.

You can also **set** a value using bracket notation and an assignment operator (`=`).

```js
var scores = [80, 41, 47];

scores[2] = 29; // Change the last score
scores[3] = 51; // Add a new score
```

## Array methods

Do you remember how strings have special functions called methods? Don't worry if not! Here's an example to jog your memory:

```sh
$ node
> var name = "Daniel"
undefined
> name.toLowerCase()
daniel
```

Arrays also have several methods that you can use.

### `.sort()`

_An array method that sorts the values in an array into ascending alphabetical order._

```js
var unorderedLetters = ["z", "v", "b", "f", "g"];
var orderedLetters = unorderedLetters.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
```

> When you call an array method it uses the array on the left side of the dot as an input, and returns a new, transformed, array.

### `.concat()`

_Adds (or concatenates) another value or array to the array._

```sh
$ node
> var arr = [1, 2, 3]
undefined
> arr.concat(4)
[1, 2, 3, 4]
> arr
[1, 2, 3]
```

Did you notice how calling the concat method did not change `arr`? This is because `concat`, like most array methods, returns a _new_ array, it does not alter the one you called the method on.

If you wan to use the array returned by calling `.concat()` you should store it in a new variable.

```js
var arr = [1, 2, 3];
var newArr = arr.concat(4);

console.log(newArr); // logs [1, 2, 3, 4]
```

## More Array methods

Let's explore some more array methods.

### `.slice()`

_Returns a slice of the array._

You can tell `.slice()` where you want the slice to begin and end by passing it two parameters.

```sh
$ node
> var arr = [0, 1, 2, 3, 4]
undefined
> arr.slice(0, 2)
[0, 1]
> ["a", "b", "c", "d"].slice(1, 2)
['b']
```

### `.includes()`

_Returns true if a value is in the array._

```js
var mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name) {
  return mentors.includes(name);
}

consooe.log("Is Rukmuni a mentor?");
console.log(isAMentor("Rukmini")); // logs false
```

### `.join()`

_Returns all the array values joined together in a string._

```sh
$ node
> ["H", "e", "l", "l", "o"].join()
'Hello'
```

There is a string method `.split()`. In an interactive console try using the string `.split()` method and the array `.join()`. How could they work together?

## Array map

Imagine you have an array of names...

```js
var mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
```

You notice that he names are not formatted consistently. To fix the array you decide you need to trim whitespace and convert to lowercase. How do you do that for every value in the array?

We can write a function that changes one name:

```js
function tidy(name) {
  return name.trim().toLowerCase();
}
```

All you need to run every name in the array through this function and update the array values. Thankfully there is an array method that does just this!

## `.map()`

_Runs every item in the array through a function and returns a new array with the values returned by the function_.

```js
var tidyMentors = mentors.map(tidy);

console.log(tidyMentors); // logs ["daniel", "irina", "gordon", "ashleigh"]
```

{% include './homework.md' %}
