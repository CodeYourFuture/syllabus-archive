# JavaScript Core 1

![Status: Draft](https://camo.githubusercontent.com/997591db1749880b8b23c96b8f788e69af09c04d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d64726166742d6461726b7265642e737667)

**What will we learn today?**

- Hello World
- Data Types
- Variables
- Conditionals: If/else
- Loops

This class is based on the [Node Girls JS Workshop](https://github.com/node-girls/beginners-javascript)


---

# Getting Started

1. Download and install the latest Current version of NodeJS - from https://nodejs.org/en/download/current/

To test that it was installed and running properly, go to your terminal and run the command:
`node -v`
You should get the node version printed on your terminal, for example, `v7.3.0`


2. Fork the repository - https://github.com/Code-Your-Future/JS-Core-1-Exercises and **Clone** it locally.

3. Once you have the repo locally, go to the folder on your terminal and run `node main.js`

You should get **Hello World** printed on your Terminal.

# Hello World

It is programming tradition that the first thing you do in any language is make it say "Hello world!". This is the first thing we'll do in JavaScript, using something called a `console.log()`.

## `console.log()`

When we ran the command `node main.js` - that did **log** to the **console** printing the words **Hello World** to the terminal. 

Let's open the file **main.js** and investigate its contents

> **Exercises**
> - What do you notice about the code? Anything you don't understand? Notice the semicolon, the dot, the parantheses - these are all elements of JavaScript **Syntax**
>
> - Try to `console.log()` something different, for example, `Hello World. I just started learning JavaScript!`. (run `node main.js` after each change and look at the output in the console)
> - Try to `console.log()` several things at once.
> - What happens when you get rid of the quote marks?
> - What happens when you `console.log()` just a number without quotes?

## Comments

You can put comments to help you and others understand your code - use `//` to add a comment (or if it is a multi-line comment, then use `/*` and `*/` around your comment)
```js
// This is a comment for myself and other developers to understand the next line of code
console.log('Hello world!');

console.log('Hello World'); // comments can also be in the same line like this
/*
I can also make comments
over more than one line if necessary
*/
console.log('Hello World');
```
> **Exercises** What are the comments in that `main.js` script.

## Node?
We ran our JavaScript using `Node` -  Node is is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. [Wikipedia](https://en.wikipedia.org/wiki/Node.js)
> **Exercises** What are other "places" where we can **run** JavaScript code?

# Data Types

If you played around with `console.log()` in the last step, you might have noticed that words always have to be inside quotes or else the code breaks, whereas numbers can work without quotes. Why is this? Well these are different **data types** in JavaScript. You'll need to learn the three main data types to get started coding (later we'll look at some other data types, like objects and arrays).

## Strings

Strings are simple text, ranging anywhere from a single character to lengthy paragraphs. A string is always written inside a pair of quotes (single or double).

```js
'node girls'
```

## Numbers

Numbers do not need to be wrapped in quotes like strings, and can just be written as is.

```js
100 // an integer number
100.89 // a decimal number (floating point)
```

## Booleans

There is a special data type in JavaScript known as a "boolean" value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
true
```


You've seen what they look like, now make sure they are what you think they are. There is a built-in feature in JavaScript which allows you to check the type of a particular value: `typeof`.

Write this code in your `main.js`, and run it (using `node main.js` in the terminal):
```js
console.log(typeof 'Hello world!');
```
You should see `string` printed to the console.

> **Exercise** Now try that three times, once for each data type. Log the `typeof` for three different values: `"Code Your Future"`, `6` and `false`. You should get different output for each one.

# Variables

When you code, you'll want to create *shortcuts* so you can easily refer to things without writing out the same value every time. In JavaScript we have **variables**, which allow us to store values to use later.

> Think of variables names like **labels** on boxes, while the value of the variable are the **contents** of the box - you could change the contents of a box and leave the label intact, the contents of the boxes can have different types, the boxes should have good labels (a box of books being labeled pens would be very confusing),
>
> ![Variables are like boxes](http://2.bp.blogspot.com/-guGunS9ljms/Ui-sF7Q9yQI/AAAAAAAAACU/DdnRgAARYyI/s1600/box.png)
> Photo from [Khan Academy](http://cs-blog.khanacademy.org/2013/09/teaching-variables-analogies-and.html)

## Try it out

You create a variable using the keyword `var`, which lets the application know that you're about to store a value. You also have to give a name to your variable, which can be anything you like, so long as it doesn't include spaces.

Here's an example of creating a variable called "city", which is storing a string called "Glasgow".

```js
var city = 'Glasgow';

console.log(city);
```

You'll notice that once you've created the variable, you can then simply write the name of the variable wherever you want to refer to it, rather than writing out Glasgow every time. You don't put quotes around a variable name.

Try to run the above code, and see what is printed to the console.

> **Exercise**
>
> In the above example, what will happen if we change the second line to `console.log("city")` - Do you notice the difference? What do you think will be the output?

You should have some code left over from previous steps which looks something like this (maybe even with comments):
 ```js
console.log(typeof 'Code Your Future');
console.log(typeof 6);
console.log(typeof false);
```

> **Exercise:** Now that you know how to create variables, rewrite this code. This time, define these values as variables at the top of the file, create a **variable** called `courseName` and **assign** it the value `Code Your Future`. Then create a variable called courseDuration and assign it the value 6, and a variable called isHard and assign it the value false.
>
> Refer to the three variables that you just created to get their types (i.e. `console.log(typeof courseName)` etc...)
>
> Is your output the same?


# If/Else Statements

Now we're going to start adding in some **logic**. So far we have been logging the same thing every time we run the code, but what if we want to log according to different conditions? In programming there is something called an "if/else statement". It tests conditions, and will perform different actions based on the outcome of these tests.

The structure of an if/else statement in JavaScript is as follows:

```js
if (condition) {
  // do something
} else {
  // do something else
}
```

It basically translates to "if this condition is true, do this - or else do something else".

### Try it out

What if we want to `console.log()` "Hello world!" if we're feeling happy, and something else if we're sad?

Let's define a variable called `isHappy`, and assign it a boolean value of `true` or `false` (depending on how happy you're feeling).

```js
var isHappy = true;
```

Then let's write our if/else statement. In our condition, we want to test if the variable `isHappy` is equal to `true`. Note that in JavaScript, to test if two things are equal you need to use a triple equals (`===`) rather than just one (`=`).

```js
if (isHappy === true) {
  // do something
} else {
  // do something else
}
```

Now let's add in what will happen if the conditions are met. The comments are there to explain what is happening.

```js
if (isHappy === true) {
  // if I am happy, print "Hello world!"
  console.log('Hello world!');
} else {
  // if I am sad, print a frowny face
  console.log(':(');
}
```

Now run this code and see what happens! Try changing the value of your variable from `true` to `false`.

> **Exercise**
>
> Write an if/else statement that evaluates if a number is even or odd. If it is even, it will print the string `'even'`, and if it is odd, it will print `'odd'`.
>
> For this challenge, you might find it useful to use the "modulo" operator, which looks like this: `%`. The modulo operator finds the remainder after division of one number by another. For example:
>
> ```js
>13 % 2 === 1 // 13 divided by 2 leaves a remainder of 1
>100 % 10 === 0 // 100 divided by 10 leaves a remainder of 0
>```

> **Exercise**
> 
> Now improve your code so that it prints out if the number is positive or negative, as well as even or odd. For example, for `-5` it will print `'negative odd'`, while for `4` it will print `'positive even'`. 
>
> **Hint**: You can use the `>` or `<` signs.
>
> If you finish early, think about how you would test your code works correctly?


# For Loops

Coding is great because it makes it easy to automate boring tasks, like writing the same thing over and over again. A "**for** loop" lets you do that in JavaScript. "For loops" let you perform the same operation a certain number of times, each time with a different value.

A for loop has the following syntax:

```js
for (statement 1; statement 2; statement 3) {
  // code to be executed
}
```

**Statement 1** defines a variable for the loop and assigns it a starting value. It is usually a number, which will increase each time the loop completes an iteration. We can use this number inside the loop to keep track of where we're at. You can set the number to be whatever you want initially.

```js
var i=0
```

**Statement 2** defines how long the loop will go on for (what needs to happen for the loop to stop running?). It most often uses the less than (`<`) or less than or equal to (`<=`) operators to set the length.

```js
i < 10
```

**Statement 3** defines by how much to increment the `i` variable each time the loop completes an iteration. If you just want it to increase by one, then put `i++`, or else you can increase by other numbers like so:

```js
i+=2
```

Inside the square brackets goes the code you wish to be executed each time the loop runs. You can refer to the variable `i` from inside the loop.

### Try it out

Here's an example of an actual for loop that prints out the numbers 1 to 10:

```js
for (var i=1; i <= 10; i++) {
  console.log(i);
}
```

Notice the variable `i` is set to `1`, because we want counting to begin there. The length is set to be less than or equal to 10, as we want the loop to end there. And we are increasing the value of `i` by one each time.


> **Exercise**
>
> Write a for loop that loops over the numbers from 1 to 100, printing only every second number. So it should return `2, 4, 6, 8, 10...`.

> **Exercise**
>
> Write a for loop that prints out all the numbers between 1 and 100 divisble by 5. 
>
> See if you can think or more than one way to solve this.

> **Exercise**
>
> Write a for loop that prints out the sum of all the numbers between 1 and 100.

# Functions

We've been writing code that performs different actions, but sometimes you want to group code together to achieve a particular end. This is where functions come in.

A function is a block of code designed to perform a particular task. A function is executed when it is "invoked".

The syntax of a function looks like this:

```js
function functionName (parameters) {
  // code to be executed
}
```

You can call a function whatever you want, just like a variable. You can also give a function different values every time you run it which are called "parameters".

To make the function run, we invoke it like so:

```js
functionName();
```

### Try it out

Let's write a function that adds two numbers together. We'll call it `add`. We want to add together two different numbers every time, so let's define two parameters to represent this, `x` and `y`.

```js
function add (x, y) {
  // code to be executed
}

add(2, 3);
```

Notice I've invoked the function underneath, with the paremeters `2` and `3`. Inside the function, try to `console.log()` your parameters and see what happens.

Now, we want to add these two numbers together, but it isn't enough just to write `x + y`, since we haven't told the function to return anything. It's time for a `return` statement. The `return` statement specifies the value to output.

```js
function add (x, y) {
  return x + y;
}

add(2, 3);
```

Run this code, and hopefully you get the right answer!

> **Exercise** 
>
> Write a function called `multiply` that multiplies two numbers together. It should take two numbers as parameters and return the answer.

> **Exercise**
>
> Go back and copy the code to your previous solution for printing the sum of numbers between 1 and 100. Put this code inside a function.
> Change the function so it accepts any two limits and prints the sum of all the numbers between those limits.
>
> For example: `addBetween(1,3)` should print `6`


# Resources

1. [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Data_structures_and_types)
2. [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
3. [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#.25_.28Modulus.29)

# Homework

1. [The repo](https://github.com/Code-Your-Future/JS-Core-1-Exercises) that you have forked during this class contains few challenges - solve them in JavaScript!

2. Follow [this course](https://www.khanacademy.org/computing/computer-programming/programming) on Khan Academy. It will go through some of the basics that we covered in the class and beyond.

3. Complete the [Codecademy Learn JavaScript Path](https://www.codecademy.com/learn/learn-javascript)
