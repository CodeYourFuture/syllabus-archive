![Draft lesson](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core I - 3

**What we will learn today?**

* [Array Find](#array-find)
* [Array Some](#array-some)
* [Array Every](#array-every)
* [Array Filter](#array-every)
* [Array Map](#array-map)
* [Array ForEach](#array-foreach)

---

> Please make sure you're working on the [js-exercises repo](https://github.com/CodeYourFuture/js-exercises) **Week 3** during this class.


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

## Manipulating arrays

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

_An array method that sorts the values in an array into ascending alphabetical or numerical order._

```js
var unorderedLetters = ["z", "v", "b", "f", "g"];
var orderedLetters = unorderedLetters.sort();

var unorderedNumbers = [8, 5, 1, 4, 2];
var orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]

console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
```

> When you call this array method it uses the array on the left side of the dot as an input, and it sorts that array also returning it. Note how both ordered and unordered arrays are sorted now!

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

_Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma `,`. If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:_

```sh
$ node
> ["H", "e", "l", "l", "o"].join();
'H,e,l,l,o'
> ["H", "e", "l", "l", "o"].join("--");
'H--e--l--l--o'
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

## Array find

Imagine you have an array of names:

```js
var names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
```

How would you find the first name that's longer than 6 characters?

You can write a predicate function that checks if a string is longer than 6 characters:

```js
function isLongName(name) {
  return name.length > 6;
}
```

To find the first item that satisfies the predicate you would have to go through each array item, and pass it into `isLongName`. Once it returns true, we can stop going through the array and grab the item that passed the predicate's test. Sounds complicated! Thankfully there is an array method that does just this!

### `.find()`

_Searches through the array and returns the value of the first item that satisfies a predicate function._

```js
var longName = names.find(isLongName);

console.log(longName); // logs Mozafar
```

## Array some

Imagine you have an array of numbers:

```js
var numbers = [1, 3, -1, 5, 9];
```

You know that the array is supposed to contain positive numbers, but you want to check if it also contains any negative numbers.

We can write a function that checks this:

```js
function isNegative(number) {
  return number < 0;
}
```

To check your array of numbers, you'd have to run this function against every number in the array. Thankfully there is an array method that does just this!

### `.some()`

_Searches through an array and returns true if at least one array item satisifies the predicate function you provided._

```js
var containsNegative = ages.some(isNegative);

console.log(containsNegative); // logs true
```

## Array every

Imagine you have an array of people's names:

```js
var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley"];
```

You want to check that every student in the array has a name longer than 3 characters. How do you do that for every value in the array?

We can write a function that returns true or false:

```js
function isAboveThreshold(name) {
  return name.length > 3;
}
```

To check that each name is longer than 3 characters, you'd have to run this function against every name in the array and return false if someone's name is 3 or fewer characters. Thankfully there is an array method that does just this!

### `.every()`

_Searches through an array and returns true if every item satisifies the predicate function you provided. Otherwise, it returns false_.

```js
var studentNameLength = students.every(isAboveThreshold);

console.log(studentNameLength); // logs true
```

## Array Filter

Imagine you have an array of students' test scores:

```js
var testScores = [90, 50, 100, 66, 25, 80, 81];
```

You want to show only the test scores that are higher than 80. How do you do that for every value in the array?

We can write a function that checks if one score is greater than 80:

```js
function isHighScore(score) {
  return score > 80;
}
```

To find out which scores were greater than 80, you'd have to run this function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!

### `.filter()`

_Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition_.

```js
var highTestScores = testScores.filter(isHighScore);

console.log(highTestScores); // logs [90, 100, 81]
```

## Array Map

We learnt about the `.map()` method in the previous week. This week we'll study how it works in more depth.

You might remember this example:

```js
function double(number) {
  return number * 2;
}

var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(double);
```

The `map()` method runs the function we provided (`double`) on each item in the array and uses the return values to create a new array. In the example `numbersDoubled` is a new array containing `[2, 4, 6]`.

### Callback functions

A function that we provide to a method is commonly called a _callback_ function. The term highlights that although we _provide_ the `double` function, the `.map()` method _calls_ it. (Notice how we never write `double()` to call the function).

We'll see callback functions used a lot more in the coming weeks. 

Often, when a function is only needed for a map operation, developers will declare the callback function inside of the method call. Let's try copying and pasting the function declaration inside of the `.map()` method call.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});
```

We can make this shorter by removing the function name. We can do this because we are not using the function anywhere else in the code, so we do not need the function name to reference it.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(function (number) {
  return number * 2;
});
```

We can make this code even shorter still. In the latest versions of JavaScript a way of declaring functions was introduced called _arrow functions_. 

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(number => {
  return number * 2
});
```

The arrow function syntax lets you declare a function without the `function` keyword. (There are some other subtle differences between arrow functions and regular functions that you will learn about at a much later stage).

There is one last thing you can do to make your code shorter. If you remove the braces (`{}`) from an arrow function, the body of the function will be returned without needing to write the `return` keyword.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(number => number * 2);
```

In the example above, the expression `number * 2` is automatically returned because it comes directly after the `=>` arrow (instead of coming after curly braces). This is called an `implicit return`.

## Array Foreach

The `.forEach()` method is similar to `.map()` except it does not return a new array. Therefore `.forEach()` is only useful if you want to perform _side effects_.

### Side effects

Generally, functions should take an input and return an output (based on that input), and not do anything else.

When functions meet this criteria they can be called _pure functions_.

A pure function does not:

* access any data unless it was passed in as a parameter
* change data declared outside the function
* interacts with anything outside of the function (e.g. logs a message to the console, shows a message on a website, saves data to disk)

These are all example of _side effects_. Of course, from time to time, we will need to perform side effects, but we should try to avoid side effects inside of functions and only have them when absolutely necessary.

### Example

Say we want to log to the console a list of names.

```js
var names = ["Daniel", "mozafar", "irina"];
```

We can use `.forEach()` to go through the array, item by item, and call a function we provide.

```js
names.forEach(function(name, index) {
  console.log(index + ": " + name);
});
```

This logs each name to the console as hoped, but we notice that the names are not formatted correctly. You might be tempted to format the name inside of the `forEach` function.

However, it is good practise to write small functions with a single responsibility. So instead, we can write a `formatName` function (which we can re-use in other places) and pass it to `.map()` before calling `.forEach()`.

```js
function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

names.map(formatName).forEach(function(name, index) {
  console.log(index + ": " + name);
});
```

### Chaining

Notice how we were able to write one method after another e.g. `names.map(formatName).forEach(log)`? This is called _method chaining_.

You can call `.forEach()` after `.map()` because `.map()` returns a new array.

Consider this code:

```js
var namesFormatted = names.map(format);
namesFormatted.forEach(log);
```

It can be written more simply (without assigning the array returned from `.map()` to a variable):

```js
names.map(format).forEach(log);
```

Be careful though! You can not call `.map()` after `.forEach`.

```js
names.forEach(log).map(formatName); // ERROR
```

This code does not work because `forEach()` does not return a new array (it returns `undefined`). The code is therefore attempting to call `.map()` on `undefined`, and `undefined` does not have a `.map()` method.

{% include "./homework.md" %}
