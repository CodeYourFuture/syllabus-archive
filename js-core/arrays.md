# Arrays

If you want to store a **bunch of things**, a **collection** or a **list** of things in variables,  identifiers like `name1`, `name2`, `name3` and so on quickly become tiresome. **Arrays** are to the rescue!

Imagine an array like a list or a collection of variables, but instead of each variable having its own name, only the array has a name. So how do you access a variable inside, then? How do you read and write? Using an *index*!

An index is just a whole number, such as `0`, `1`, `2` and so forth. As in many areas of computing, indices in JavaScript arrays start with `0` --- so `0` is the index of the first element of an Array, `1` is the index of the second element, and so forth.

The syntax is to list the values separated by commas, inside square brackets:

```js
[value1, value2, value3]
```

You can store any type of value inside an array: strings, numbers, booleans. You can even store other arrays, or objects (which you will learn about next).

## Try it out

Defining an array as a variable looks something like this:

```js
var animals = ["tiger", "puppy", "snake", "llama"];
```

Pretty neat! Now you have all the animals grouped together rather than having to define them separately. You can see how many animals there are by using `.length`:

```js
console.log(animals.length);
```

If you want to refer to one specific member of the array, you can do so by using their "index number" like so.

```js
console.log(animals[1]);
```

> Take a guess at which animal that will print out, and see if you're right.

Spoiler alert, it will print out "puppy". That might seem weird, until you learn that JavaScript is a "0-index" language. What that means is that counting in JavaScript starts at 0. So `animals[0]`will print out "tiger". We don't make the rules...

> **Exercise:**
>
> 1. Create an array that contains the countries of all the students in the class (at least five nationalities)
> 2. `console.log` the number of countries in the Array
> 3. Now, `console.log()` each country in the list. Hint: **For loops**
>
> **Don't ask a mentor - Google it!** Try googling to find the answer if you're stuck. Google skills are an essential part of being a developer.

# Useful array methods

#### Concatenating two arrays

You've learned how you can add two numbers and append two strings, but how does this work for arrays? A simple `arr1 + arr2` will not do, but there is a method you can use: `concat()`. It is a method that you call on the array (similar to how `console.log` is the `log` function called on `console`) and takes the array you want to append as a parameter.

```js
var countries = ['Scotland', 'Germany', 'Syria'];
var moreCountries = ['Sudan', 'Ethiopia', 'France'];

countries.concat(moreCountries);
```

#### Appending an element

If you want to append an element to an array, you can just put it after the last existing element like so:

```js
countries[countries.length] = 'United States of America';
```

There is another way though, which is a bit more elegant: the `push` function.

```js
countries.push('United States of America');

// .push can also be called with multiple parameters
countries.push('United States of America', 'France');
```

> **Exercise**: Google `.slice`, `.splice`, `.push` and `.pop`.

> 1. Use `.push` to add another country to your country array.
> 2. Use `.pop` to remove the last two countries.
> 3. Using `.push`, add enough countries to your array so that `countries.length` is 10. Now use `.slice` to return the first 3 countries from the array.
> 4. Use `.splice` to remove the two countries at index positions 5 and 6.
> 5. Use `.splice` to add a new country at index position 2.

> **Exercise (advanced)**

> 1. Google the `.map` and `.filter` methods.
> 2. Create an array of numbers. Use the `.map` method to triple every number in the array.
> 3. Create an array of words. Use `.filter` to remove every word which is less than 4 letters long.

# Resources
1. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
