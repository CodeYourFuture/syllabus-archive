# JavaScript Core 1

![Status: Draft](https://camo.githubusercontent.com/997591db1749880b8b23c96b8f788e69af09c04d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d64726166742d6461726b7265642e737667)

**What we will learn today?**

- Variables, assignment and comparison
- Conditionals: If/else, switch, ternary operator
- Arrays
- Loops: for, while
- Objects

---

## Conditionals

**TODO**

### Comparisons

**TODO**

- Introduce `==` and `!=`, `<` and `>`
- Introduce the concept of truthiness and falsiness for non-boolean types
- Introduce `===` and `!==`

### If/Else

**TODO**

### Switch

**TODO**

### The ternary operator

**TODO**

## Arrays

If you want to store a bunch of things, identifiers like `name1`, `name2`, `name3` and so on quickly become tiresome. **Arrays** to the rescue!

Imagine an array like a list of variables, but instead of each variable having its own name, only the array has a name. So how do you access a variable inside, then? How do you read and write? Using an *index*!

An index is just a whole number, such as `0`, `1`, `2` and so forth. As in many areas of computing, indices in JavaScript arrays start with `0` --- so `0` is the index of the first element of an Array, `1` is the index of the second element, and so forth.

### Creating an array

The easiest way to create an array is using the bracket (`[]`) syntax. Just put whatever elements you want in your array between the brackets, separated by comma:

```js
// Arrays can hold any data type
var countries = ['Scotland', 'Germany', 'Syria'];
var numbers = [7, 1, 23, 19, 11, 5, 16, 31];

// Data types can be mixed, but be wary of that!
var mixed = ['Tim', 27];

// Arrays can also be empty
var emptyArray = [];
```

### Reading, writing and length

Once you have an array, you might want to read values from it. You do this also using brackets, placed directly behind the array's variable name (identifier). The brackets hold the index of the element you want to read.

```js
var countries = ['Scotland', 'Germany', 'Syria'];

// Remember, the first index is 0
console.log(countries[0]); // 'Scotland'
console.log(countries[1]); // 'Germany'
console.log(countries[2]); // 'Syria'
```

In a similar fashion, you can write or overwrite values.

```js
var countries = ['Scotland', 'Germany', 'Syria'];

countries[1] = 'Sudan';

console.log(countries); // ['Scotland', 'Sudan', 'Syria']
```

You can also create new array elements by just writing to the respective index.

```js
var countries = ['Scotland', 'Germany', 'Syria'];

countries[3] = 'Sudan';

console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan']
```

You can also use other variables to store in an array, and integer variables to define the index you want to read from.

```js
var myCountry = 'Sudan';
var countries = ['Scotland', 'Germany', 'Syria', myCountry];
console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan']

var index = 2;
console.log(countries[index]); // 'Syria'
```

> Exercise/Homework: What happens when yo try to read from an index that is not there?

A really useful thing to know about an array is its *length*, i.e. the number of elements it contains. You can access it by appending `.length` to the arrays identifier. The length is always 1 more than the largest element index.

```js
var countries = ['Scotland', 'Germany', 'Syria'];

console.log(countries.length); // 3
```

### Useful array methods

#### Concatenating two arrays

You've learned how you can add two numbers and append two strings, but how does this work for arrays? A simple `arr1 + arr2` will not do, but there is a method you can use: `concat()`. It is a method that you call on the array (similar to how `console.log` is the `log` function called on `console`) and takes the array you want to append as a parameter.

```js
var countries = ['Scotland', 'Germany', 'Syria'];
var moreCountries = ['Sudan', 'Ethiopia', 'France'];

countries.concat(moreCountries);
console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan', 'Ethiopia', 'France']
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

> Homework: Learn about `.slice` and `.pop`

There are many more useful array functions, which you will learn in lesson 2.

## Loops

**TODO**

### `for` loops

**TODO**

#### Traversing an array

By now you might have noticed that `for` loops can be really useful for working with arrays.

Imagine you want to print out every item in an array:

```js
var countries = ['Scotland', 'Germany', 'Syria'];
var i;

for(i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
```

### `while` loops

**TODO**

## Objects

**TODO**

# Resources

**TODO**

1. [Resource 1 to learn more about Topic 1](https://google.com)
2. [Resource 2 for Topic 2](https://google.com)

# Homework

**TODO**

1. First part of Homework - Easy

2. Second part of Homework - Intermediate/Hard

3. **[Bonus/Optional]** Third part/optional - Hardest

4. **Research:**

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
