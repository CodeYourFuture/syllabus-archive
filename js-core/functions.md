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
