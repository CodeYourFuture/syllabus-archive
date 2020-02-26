![Lesson in review](https://img.shields.io/badge/status-review-orange.svg)

# JavaScript Core I - 2

**What we will learn today?**

* [Expressions](#expressions)
* [Booleans](#boolean-filters)
* [Comparison Operators](#comparison-operators)
* [Conditionals](#conditionals)
* [Logical Operators](#logical-operators)
* [Loops](#loops)
* [Arrays](#arrays)
* [Extra exercises](#extra-exercises)

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
"Hello" + "World"; // returns "HelloWorld"
```

We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement.

Expressions can also contain variables.

```js
let planet = "Earth"

`Hello ${planet}` // returns Hello Earth
```

You can also use expressions inside a string interpolation or as a `return` value.

```js
console.log(`2 + 4 is ${2 + 4}`) // 2 + 4 is 6

function double(num) {
  return num * 2 // expression being returned
}
```

### Statement

A statement is some code that performs an action. Here are some examples:

```js
var sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`
var greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`
console.log(2 * 4); // action: logs the result of `2 * 4` to the console
sayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`
```

There are some other different types of statements that we will learn in the coming weeks.

You can run `node` by itself, which will open a _node console_, also called a _Read–Eval–Print Loop (REPL)_. This console allows you to run expressions in the console line by line and is a great way of testing bits of code before writing it in a script.

### Exercise (5 mins)

In your VS Code terminal, run the command `node` and run the following expressions. What are their outputs? Is there anything you didn't expect? (To exit the node REPL, you have to click Ctrl+D or Cmd+D on Mac)

* `1 + 2`
* `"hello"`
* `let favouriteColour = "purple"`
* `favouriteColour`
* `console.log(favouriteColour)`

## Booleans

There is another _primitive type_ in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
let codeYourFutureIsGreat = true
let thisIsATerribleClass = false
```

### Exercise (10 mins)

1. In a node REPL, what is the `typeof` a `true` or `false`?
2. Pair up and correct the following function so that the output returns `"You've given me a bool, thanks!"`

```js
function boolChecker(bool) {
  if (typeof boolVar === ) {
    return "You've given me a bool, thanks!"
  }

  return "No bool, not cool."
}
```

3. As a class, can you step through the function and explain what each line does?

## Comparison Operators

In the previous exercise, you used an an **expression** that returns a boolean value. This was possible because of the **comparison operator** `===`. You can use comparison operators to force an expression to be either `true` or `false`.

Here's an expression that evaluates to a boolean.

```sh
1 > 2
```

* Can you work out what value this expression evaluates to?

The `>` symbol in the expression is a **comparison operator**. Comparison operators compare two values. This operator checks to see if the number on the left is bigger than the number on the right.

```sh
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
```

### Exercise (5 mins)

1. Modify the parameters of these functions to return either `true` or `false` depending on what's in the comments above it:

```js
// true
function moreStudentsThanMentors(mentorCount, studentCount) {
  return mentorCount < studentCount
}

// false
function enoughSpaceInRoom(capacity) {
  return capacity > 25
}

// true
function personEquality(personA, personB) {
  return personaA === personB
}

// false
function numberEquality(numberA, numberB) {
  return numberA !== numberB
}
```

## Conditionals

Like humans, computer programs make decisions based on information given to them. **Conditionals** are a way of representing these decisions in code (remember, you saw this in a previous exercise!)

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
let isHappy = true
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
var isHappy = true;

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
    return `${num} is greater than 20`
  } else if (num === 20) {
    return `${num} is equal to 20`
  } else if (num < 20) {
    return `${num} is less than 20`
  } else {
    return `${num} isn't even a number :(`
  }
}
```

### Exercise (10 mins)
Create a function that gives you message depending on your mood! It should:
* take one input
* return "Good job, you're doing great!" if you pass in "happy"
* return "Every cloud has a silver lining" if you pass in "sad"
* return "Beep beep boop" if you pass in a number
* return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

## Logical Operators

There are three logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

They let you write expressions that evaluate to a boolean value.

Suppose you want to test if a number is bigger than 3 and smaller than 10. We can write this using logical operators.

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
* `let num = 10`
* `num > 5 && num < 15`
* `num < 10 || num === 10`
* `false || true`
* `!true`
* `let greaterThan5 = num > 5`
* `!greaterThan5`
* `!(num === 10)`

### Exercise (15 mins)
In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:
* take two parameters: one for the username and one for the user type
* if the username starts with a capital letter _and_ has length between 5 and 10 characters long, it must return `"Username valid"`; otherwise, it must return `"Username invalid"`
* **BONUS:** if the user type is an `admin` or a `manager`, all usernames must return `"Username valid"`


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

It's important that the condition inside the parenthesis becomes false at some point - otherwise we'll have what's known as an infinite loop!

The `for` loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like `i` above), incrementing them by some amount, and checking that they're less than a value. A `for` loop syntax has special places for each of those three things. Here's the same loop as the first while loop above, as a for loop:

```js
for (let i = 0; i < 20; i++) {
  someFunction(i);
}
```

### Exercise (15 minutes)

Write two functions that:

* Take one number `n` as a parameter
* Add all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
* The first version of the function should use `while` and the second one `for`.


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

You can access elements in an array using the **index** of an element with **bracket notation** (remember: all arrays start at position 0! So to access the first element in an array, you need to access index 0!)

```js
let students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"]

students[0] // Ahmed
students[3] // Nahidul
```

You can also _assign_ new values to parts of an array:

```js
let students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"]

students[2] = "Bianca"

console.log(students) // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]
```

### Exercise (5 mins)
In the node REPL, enter the following array:

```sh
> let fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange']
```

1. Which index do you need to return:
* strawberry
* kiwi
* orange
* banana

2. Replace 'apple' with 'raspberry' and 'fig' with 'pineapple'

### Exercise (5 mins)
Complete this function so that, if the second index in array contains the name "Amy", it returns `"Second index matched!"`

```js
function secondMatchesAmy(array) {
  if ( ) {
    return "Second index matched!"
  }
  
  return "Second index not matched"
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

const multiplyNumbers = function(a, b) {
  return a * b;
};

const addNumbers = function(a, b, c) {
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

const f1 = function(a, b) {
  return a * b;
};

const f2 = function(a, b, c) {
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

{% include './homework.md' %}
