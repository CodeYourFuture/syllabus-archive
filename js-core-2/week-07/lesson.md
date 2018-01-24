![](https://img.shields.io/badge/status-ready-green.svg)

# Array methods and callbacks

The most useful built in methods in JavaScript are the `Array.prototype`
methods. Every array has access to these methods (because Arrays are created by
the `Array` constructor function they inherit the the properties of
`Array.prototype`).

Of particular use are the `Array` methods that enable you to _iterate_ over an
array. We've covered iteration already when we learnt how to use `for` loops.
Well, I have some amazing news for you - you will probably never need to write a
`for` loop again!

Let's take a look at `Array.prototype.forEach` first. This is pretty much a
straight replacement for `for` loops.

```js
var myArr = [1, 2, 3];

myArr.forEach(function(item) {
  console.log(item);
});

// 1
// 2
// 3
```

OOOOF! Wasn't that glorious?! Much nicer than writing a `for` loop! So how
exactly does this work? `forEach` _iterates_ over each item the array. For each
item is calls a function - the one that was provided as an parameter to
`forEach`.

## Callback functions

Functions that are provided as parameters to another function are called
_callback functions_. Often we will write these functions inside the function
call like did in the `forEach` example, but we can also pass in reference to an
already defined function:

```js
function callback(item) {
  console.log(item);
}

myArr.forEach(callback);
```

Whether you define your function beforehand or write it straight into the
function call will depend on whether you intend on re-using that callback again.

> Exercise

> Let's create a function called `average` that receives an array of numbers.
> Implement the function using a `forEach` method calculate the average of all
> `numbers` passed in and return it.

## More array methods

Previously we've used for loops to create new versions of an array doing
something like this:

```js
var arr = [1, 2, 3];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
  var current = arr[i];
  newArr.push(current + 1);
}

console.log(newArr); // [2,3,4]
```

There are several methods on `Array.prototype` that can be used for this sort of
task.

The most popular method is `.map()`, which does the following:

* iterates over the array it is called on
* calls a callback function on every iteration
* passes in the current array item and its index to the callback function
* uses the returned value from the callback function to populate a new array
* returns the new array

That sounds like a lot but once you use `.map()` a few times it'll begin to feel
more intuitive. Let's try it and see if we can refactor the for loop example:

```js
var arr = [1, 2, 3];
var newArr = arr.map(function(num) {
  return num + 1;
});
console.log(newArr); // [2,3,4]
```

Another useful array method is `.filter()`. It works in a similar way to map
except that rather than return a value in the callback function, you return
`true` or `false` depending on whether you want the current item to be included
in the new array. Returning `true` means that you want to keep the item,
returning `false` means it should be omitted.

Let's create a new array with only numbers greater than 5:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.filter(function(num) {
  return num > 5;
});
console.log(newArr); // [5,6,7,8,9]
```

> Remember: Most array methods do not change the current array, they return a
> new array. Check the MDN documentation for the array method if you are not
> sure about this.

## Chaining methods

If we want to apply more than one array method to an array we might try
something like this, creating an intermediate variable after each
transformation.

```js
var arr = [1, 2, 3];
var arrMapped = arr.map(function(num) {
  return num + 1;
});
var arrFiltered = newArr.filter(function(num) {
  return num > 5;
});
```

This can get quite awkward though, especially when you have to think of a
variable name for each stage. Thankfully there is a much simpler way. We can
_chain_ methods together:

```js
var newArr = [1,2,3]
  .map(function (num) {
    return num + 1;
  });
  .filter(function (num) {
    return num > 5;
  });
```

There's nothing magical happening here. This works because:

* the array methods are returning new arrays
* every array has access to all the array methods on `Array.prototype`

As soon as an array is returned by an array method we can call another array
method on the return value.

> Exercise

> Transform the following array [4,5,3,6,7,8,9,1,2] by 1) sorting it, 2)
> doubling each number, and 3) filtering numbers less than 10 Write named
> functions that can be used as callbacks.

# Homework

{% include "./homework.md" %}
