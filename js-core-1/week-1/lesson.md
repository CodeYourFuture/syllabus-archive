![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

# JavaScript Core I - 1

[Mentor Notes](./mentors.md)

**What we will learn today?**

* [Setup IDE](#setup-ide)
* [Hello World](#hello-world)
* [Variables](#variables)
* [Strings](#strings)
* [String concatenation](#string-concatenation)
* [Numbers](#numbers)
* [Floats](#floats)
* [Functions](#functions)
* [Function Parameters](#function-parameters)
* [Nested Functions](#functions-nested)

---

> Please make sure you've forked [the js-exercises repo](https://github.com/CodeYourFuture/js-exercises) at the start of the class. This is the repo we will use during the class, and for homework.


## Setup IDE

There are some tools that will help you to write code. One of these, [Prettier](https://prettier.io/), formats your code, making it easier for you and others to read.

### 1. Install prettier

* In Visual Studio open the extensions panel (see [https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions))
* Search for `Prettier - Code formatter`
* Click install on the top result

### 2. Enable formatting on save

* In Visual Studio open the settings file (see [https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings](https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings))
* Search for `editor format`
* Set `editor.formatOnSave` and `editor.formatOnPaste` to true

## Hello World

It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using a command called `console.log()`, the `console.log()` method writes a message to the console.

The Console is a tool which is mainly used to log information it's useful for testing purposes

Inside of `exercise.js` there's a line of code that will print "Hello world!".

### 1. Run the program

* Open a terminal window
* Change directory to this folder (`cd week-1/C-hello-world`)
* Run the program using node (`node exercise.js`)

### 2. Experiment

Write 10 statements like these, but in different languages.

For example:

```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

## Variables

When you write code, you'll want to create shortcuts to data values so you don't have to write out the same value every time.

We can use _variable_ to create a reference to a value. Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with _let_ and _const_ keywords as follows.

```js
let greeting = "Hello world";

console.log(greeting);
```

```js
const name = "Irina";

console.log(name);
```

The program above will print "Hello world" to the console. Notice how it uses the value assigned to the variable `greeting`.

### Exercise

* Add a variable `greeting` to exercise.js (make sure it comes _before_ the console.log)
* Print your `greeting` to the console 3 times

> Remember: to run this exercise you must change directory to the `C-variables`. If you already have a terminal window open for the previous exercise you can do this by running the command `cd ../C-variables`.

#### Expected result

```sh
Hello world
Hello world
Hello world
```

## Strings

In programming there are different _types of_ data. You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```js
const message = "This is a string";
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```js
const message = "This is a string";
const messageType = typeof message;

console.log(messageType); // logs 'string'
```

### Exercise

* Write a program that logs a variable `colors` which contains the primary colors that make Orange color as a string separated by comma and also logs it's type using `typeof`.

#### Expected result

```sh 
color1, color2
string
```

## String concatenation

You can add two strings together using the plus operator (`+`) or `String interpolation`, String interpolation is a useful javascript feature that allows you to inject variables directly into a string.:

```js
// Here is example using the plus operator to concat strings
const greetingStart = "Hello, my name is ";
const name = "Daniel";

const greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

```js
// Here is example using the String interpolation to concat strings
const greetingStart = "Hello, my name is ";
const name = "Daniel";

const greeting = `${greetingStart} + ${name}`;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

### Exercise

* Write a program that logs a message with a greeting and your name using the two concatenation methods we had.

#### Expected result

```sh
Hello, my name is Daniel

Hello, my name is Daniel
```

## Numbers

The next data type we will learn is **number**.

Unlike strings, numbers do not need to be wrapped in quotes.

```js
const age = 30;
```

You can use mathematical operators to calculate numbers:

```js
const sum = 10 + 2; // 12
const product = 10 * 2; // 20
const quotient = 10 / 2; // 5
const difference = 10 - 2; // 8
```

### Exercise

* Create two variables `numberOfStudents` and `numberOfMentors`
* Log a message that displays the total number of students and mentors

#### Expected result

```sh
Number of students: 15
Number of mentors: 8
Total number of students and mentors: 23
```

Numbers can be written with, or without decimals:

```js
const preciseAge = 30.612437;
```

Numbers with decimals can be rounded to the nearest whole number using the `Math.round` function:

```js
const preciseAge = 30.612437;
const roughAge = Math.round(preciseAge); // 30
```

### Exercise

* Using the variables provided in the exercise calculate the percentage of mentors and students in the group

#### Expected result

```sh
Percentage students: 65%
Percentage mentors: 35%
```

## Functions

Functions are blocks of code that can do a task as many times as you ask them to. They take an input and return an output.

Here's a function that doubles a number:

```js
function double(number) {
  return number * 2;
}
```

To use the function we need to:
a) _call_ it with an input and
b) assign the returned value to a variable

```js
var result = double(2);

console.log(result); // 4
```

### Exercise 1

* Complete the function in exercise.js so that it halves the input
* Try calling the function more than once with some different numbers

> Remember to use the return keyword to get a value out of the function

#### Expected result

```sh
6
```

### Exercise 2

* Complete the function in exercise2.js so that it triples the input

#### Expected result

```sh
24
```

## Function Parameters

The input given to a function is called a **parameter**.

A function can take more than one parameter:

```js
function add(a, b) {
  return a + b;
}
```

When you write a function (sometimes called _declaring a function_) you assign names to the parameters inside of the parentheses (`()`). Parameters can be called anything.

This function is exactly the same as the on above:

```js
function add(num1, num2) {
  return num1 + num2;
}
```

### Exercise 1

* Write a function that multiplies two numbers together

#### Expected result

```sh
12
```

### Exercise 2

* From scratch, write a function that divides two numbers

#### Expected result

```sh
0.75
```

### Exercise 3

* Write a function that takes a name (a string) and returns a greeting

#### Expected result

```sh
Hello, my name is Daniel
```

### Exercise 4

* Write a function that adds two numbers together
* Call the function, passing `13` and `124` as parameters, and assigning the returned value to a variable `sum`

#### Expected result

```js
137
```

### Exercise 5

* Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

#### Expected result

```sh
Hello, my name is Daniel and I'm 30 years old
```

## Nested Functions

Functions are very powerful.

* You can write more than one line of code inside of functions.
* You can use variables inside of functions.
* You can call other functions inside of functions!

```js
function getAgeInDays(age) {
  return age * 365;
}

function createGreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}
```

## Exercise 1

* In `exercise.js` write a program that displays the percentage of students and mentors in the group
* The percentage should be rounded to the nearest whole number (use a search engine to find out how to this with JavaScript)
* You should have one function that calculates the percentage, and one function that creates a message

> Consider: should your percentage function do the rounding, or should it be done when the greeting is created?

### Expected result

```sh
Percentage students: 65%
Percentage mentors: 35%
```

## Exercise 2

* In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
* Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
* Log each greeting to the console.

### Expected result

```sh
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
```

{% include "./homework.md" %}
