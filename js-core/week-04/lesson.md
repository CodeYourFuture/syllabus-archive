![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

# JavaScript Core 1

**What we will learn today?**

* [Install Node](#install-node)
* [Setup IDE](#setup-ide)
* [Hello World](#hello-world)
* [Variables](#variables)
* [Strings](#strings)
* [String concatenation](#string-concatenation)
* [Numbers](#numbers)
* [Floats](#floats)
* [Functions](#functions)
* [Function Parameters](#function-parameters)
* [Function Nested](#functions-nested)

---

> Please make sure you've forked [the js-exercises repo](https://github.com/CodeYourFuture/js-exercises) at the start of the class. This is the repo we will use during the class, and for homework.

## Install Node

**Windows and Mac users**

Download the _installer_ (.msi or .pkg) from https://nodejs.org/en/download

---

**Linux (Ubuntu) users**

Run the following commands in your terminal:

```sh
  curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

Source: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

> A note on security: This will require you to enter a password. Don't execute a script on your terminal if you don't trust its source, especially if they use the `sudo` command to get admin access to your machine.

### 2. Test installation

Go to your terminal and run the command: `node -v`.

You should get the node version printed on your terminal. For example, `v8.9.3`.

## Setup IDE

There are some tools that will help you to write code. One of these, [Prettier](https://prettier.io/), formats your code, making it easier for you and others to read.

### 1. Install prettier

* In Visual Studio open the extensions panel (see https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions)
* Search for `Prettier - Code formatter`
* Click install on the top result

### 2. Enable formatting on save

* In Visual Studio open the settings file (see https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
* Search for `editor format`
* Set `editor.formatOnSave` and `editor.formatOnPaste` to true

## Hello World

It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using something called `console.log()`.

Inside of `exercise.js` there's a line of code that will print "Hello world!".

### 1. Run the program

* Open a terminal window
* Change directory to this folder (`cd week-1/C-hello-world`)
* Run the program using node (`node exercise.js`)

### 2. Experiment

* Try to `console.log()` something different. For example, 'Hello World. I just started learning JavaScript!'.
* Try to console.log() several things at once.
* What happens when you get rid of the quote marks?
* What happens when you console.log() just a number without quotes?

## Variables
It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using something called `console.log()`.

Inside of `exercise.js` there's a line of code that will print "Hello world!".

### 1. Run the program

* Open a terminal window
* Change directory to this folder (`cd week-1/C-hello-world`)
* Run the program using node (`node exercise.js`)

### 2. Experiment

* Try to `console.log()` something different. For example, 'Hello World. I just started learning JavaScript!'.
* Try to console.log() several things at once.
* What happens when you get rid of the quote marks?
* What happens when you console.log() just a number without quotes?

## Variables
When you write code, you'll want to create shortcuts to data values so you can don't have to write out the same value every time.

We can use _variable_ to create a reference to a value.

```js
var greeting = "Hello world";

console.log(greeting);
```

The program above will print "Hello world" to the console. Notice how it uses the value assigned to the variable `greeting`.

### Exercise

* Add a variable `greeting` to exercise.js (make sure it comes _before_ the console.log)
* Print your `greeting` to the console 3 times

> Remember: to run this exercise you must change directory to the `D-variables`. If you already have a terminal window open for the previous exercise you can do this by running the command `cd ../D-variables`.

### Expected result

```
Hello world
Hello world
Hello world
```

## Strings
In programming there are different _types of_ data. You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```js
var message = "This is a string";
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```js
var message = "This is a string";
var messageType = typeof message;

console.log(messageType); // logs 'string'
```

### Exercise

* Write a program that logs a message and its type

### Expected result

```
This is a string
string
```

## String concatenation
You can add two strings together using the plus operator (`+`):

```js
var greetingStart = "Hello, my name is ";
var name = "Daniel";

var greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

### Exercise

* Write a program that logs a message with a greeting and your name

### Expected result

```
Hello, my name is Daniel
```

## Numbers
The next data type we will learn is **number**.

Unlike strings, numbers do not need to be wrapped in quotes.

```js
var age = 30;
```

You can use mathematical operators to caclulate numbers:

```js
var sum = 10 + 2; // 12
var product = 10 * 2; // 20
var quotient = 10 / 2; // 5
var difference = 10 - 2; // 8
```

### Exercise

* Create two variables `numberOfStudents` and `numberOfMentors`
* Log a message that displays the total number of students and mentors

### Expected result

```
Number of students: 15
Number of mentors: 8
Total numnber of students and mentors: 23
```

## Floats
Numbers can be integers (whole numbers) or floats (numbers with a decimal).

```js
var preciseAge = 30.612437;
```

Floats can be rounded to the nearest whole number using the `Math.round` function:

```js
var preciseAge = 30.612437;
var roughAge = Math.round(preciseAge); // 30
```

### Exercise

* Using the variables provided in the exercise calculate the percentage of mentors and students in the group

### Expected result

```
Percentage students: 65%
Percentage mentors: 35%
```

## Functions
Functions are blocks of code that can do a task as many times as you ask it to. They take an input and return an output.

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

### Exercise

* Complete the function in exercise.js so that it halves the input
* Try calling the function more than once with some different numbers

> Remember to use the return keyword to get a value out of the function

### Expected result

```
6
```

### Exercise 2

* Complete the function in exercise2.js so that it triples the input

### Expected result

```
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

### Exercise

* Write a function that multiplies two numbers together

### Expected result

```
12
```

### Exercise 2

* From scratch, write a function that divides two numbers

### Expected result

```
0.75
```

### Exercise 3

* Write a function that takes a name (a string) and returns a greeting

### Expected result

```
Hello, my name is Daniel
```

### Exercise 4

* Write a function that adds two numbers together
* Call the function, passing `13` and `124` as parameters, and assigning the returned value to a variable `sum`

### Expected result

```
137
```

### Exercise 5

* Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

### Expected result

```
Hello, my name is Daniel and I'm 30 years old
```

## Functions nested

Functions are very powerful.

* You can write more than one line of code inside of functions.
* You can use variables inside of functions.
* You can call other functions inside of functions!

```js
function getAgeInDays(age) {
  return age * 365;
}

function createCreeting(name, age) {
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

## Expected result

```
Percentage students: 65%
Percentage mentors: 35%
```

## Exercise 2

* In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
* Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
* Log each greeting to the console.

## Expected result

```
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
```

{% include "./homework.md" %}