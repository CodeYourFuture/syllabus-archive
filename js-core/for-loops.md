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
var i = 0;
```

**Statement 2** defines how long the loop will go on for (what needs to happen for the loop to stop running?). It most often uses the less than (`<`) or less than or equal to (`<=`) operators to set the length.

```js
i < 10
```

**Statement 3** defines by how much to increment the `i` variable each time the loop completes an iteration. If you just want it to increase by one, then put `i++`, or else you can increase by other numbers like so:

```js
i += 2
```

Inside the square brackets goes the code you wish to be executed each time the loop runs. You can refer to the variable `i` from inside the loop.

### Try it out

Here's an example of an actual for loop that prints out the numbers 1 to 10:

```js
for (var i = 1; i <= 10; i++) {
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
