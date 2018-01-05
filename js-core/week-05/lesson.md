# JavaScript Core 2

![](https://img.shields.io/badge/status-review-orange.svg)

**What we will learn today?**

* [Arrays](#arrays)
* [Objects](#objects)
* [Useful Arrays methods](#useful-array-methods)

---

## Arrays

If you want to store a **list of values**, declaring manually a number of
varibles becomes quickly tiresome and untenable:

```js
var name1 = 'Bill'
var name2 = 'Marta'
var name3 = 'Andrew'
...
```
**Arrays** to the rescue!

An Array is a native javascript data type, like the integers, strings and
boolean that you saw last week.

It contains a ordered list of values, and each of those values can be of any
data type (even another array and objects, which you will learn about next!).

Arrays are *ordered*, which means that each value has a specific position in it.
This is very useful, as it allows us to access and interact with the single
values present in the array. They are also *mutable*, which means that values
inside them can be changed, added and removed.

The syntax for an array is a number of variables separated by commas, with
square brackets and the start and end.
```js
['Bill', 'Marta', 'Andrew'] // an array of 3 strings

[1, 53, 135, 6, 2]  // an array of 5 integers

['Hello world', 98, true, 'Rachel']  // an array containing different data types

var myArrayOfFriends = ['Bill', 'Marta', 'Andrew'];  // assigning the array to a variable
```

### Interacting with the array
An array data type is only useful if we can interact with the values stored
within. Like other data type, arrays in Javascript have a number of methods
already defined to make our life easier.

Let's start by defining an array of animals!
```js
var animals = ['tiger', 'puppy', 'snake', 'llama'];
```

Pretty neat! Now you have all the animals grouped together rather than having to
define them separately. One of the useful methods that we get from arrays lets
us check the number of values present in it by accessing the `length` attribute.

We do that with a `.`, like so:
```js
console.log(animals.length);  // 4
```

We have the length, but how do you access a single value inside?
Using an _index_!

An index is an integer, such as `0`, `1`, `2`, etc. It indicates the
position of the values inside the array. As is common in many programming
languages, indices in JavaScript arrays start with `0` --- so `0` is
the index of the first element of an Array, `1` is the index of the second
element, and so forth.

If you want to refer to one specific member of the array, you can do so by using
their 'index number' like so:

```js
console.log(animals[1]); // Guess the output before running the command!
```

> Take a guess at which animal that will print out, and see if you're right.

Spoiler alert, it will print out `'puppy'`. That might seem weird, until you
remember the paragraph just before the example: arrays in Javascript are
0-indexed, which means that the first value is accessed with `animals[0]` :
```js
console.log(animals[0]);  // 'tiger'
console.log(animals[1]);  // 'puppy'
console.log(animals[2]);  // 'snake'
console.log(animals[3]);  // 'llama'
console.log(animals[4]);  // undefined! the array has 4 elements, animal[5] would try to access the 5th!
```

> **Exercise:**
>
> 1. Create an array that contains the countries of all the students in the
>    class (at least five nationalities)
> 2. `console.log` the number of countries in the Array
> 3. Now, `console.log()` each country in the list
> 4. Update point 3 to work for arrays of any length (hint: use for loops and the length property)
>
> Extra points: **Don't ask a mentor - Google it!** Try googling to find the answer if you're
> stuck. Google skills are an essential part of being a developer.

## Objects

Now for the final data type: objects. Like arrays, they can store multiple bits
of information, except objects store the properties of something. For example,
you might want to save the name, model and colour of a car. Or the name, time
and location of a film playing at the cinema.

The syntax looks like this:

```js
{
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
}
```

The names on the left ('property1') are known 'keys'. Any values can be given to
them: strings, booleans, integers.

### Try it out

Let's define an object that represents a person:

```js
var person = {
  firstName: 'Nelson',
  lastName: 'Mandela',
  occupation: 'freedom fighter',
  age: 95,
  alive: false
};
```

We can `console.log()` the entire object, but you can also reference just one of
the properties. Run this code:

```js
console.log(person.firstName);
```

> **Exercise** Using an object representing a person, `console.log()` a sentence
> introducing the person. Print out the following:
>
> _'Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a
> {occupation}.'_
>
> Hint: you can construct longer strings by adding them together. This includes
> variables. For example:
>
> ```js
> var name = 'Jane';
> console.log('People call me ' + name);
>
> // the previous line will print
> // 'People call me Jane'
> ```

## Useful array methods

### Concatenating two arrays

You've learned how you can add two numbers and append two strings, but how does
this work for arrays? A simple `arr1 + arr2` will not do, but there is a method
you can use: `concat()`. It is a method that you call on the array (similar to
how `console.log` is the `log` function called on `console`) and takes the array
you want to append as a parameter.

```js
var countries = ['Scotland', 'Germany', 'Syria'];
var moreCountries = ['Sudan', 'Ethiopia', 'France'];

countries.concat(moreCountries);
console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan', 'Ethiopia', 'France']
```

### Appending an element

If you want to append an element to an array, you can just put it after the last
existing element like so:

```js
countries[countries.length] = 'United States of America';
```

There is another way though, which is a bit more elegant: the `push` function.

```js
countries.push('United States of America');

// .push can also be called with multiple parameters
countries.push('United States of America', 'France');
```

> **Exercise**: Search `.slice`, `.splice` and `.pop` and tell us what they do

## Resources

1. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
1. [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
1. [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

{% include './homework.md' %}
