# JavaScript Core 2

![](https://img.shields.io/badge/status-review-orange.svg)

**What we will learn today?**

* [Arrays](#arrays)
* [Objects](#objects)
* [Useful Arrays methods](#useful-array-methods)

---

## Arrays

If you want to store a **bunch of things**, a **collection** or a **list** of
things, identifiers like `name1`, `name2`, `name3` and so on quickly become
tiresome. **Arrays** to the rescue!

Imagine an array like a list or a collection of variables, but instead of each
variable having its own name, only the array has a name. So how do you access a
variable inside, then? How do you read and write? Using an _index_!

An index is just a whole number, such as `0`, `1`, `2` and so forth. As in many
areas of computing, indices in JavaScript arrays start with `0` --- so `0` is
the index of the first element of an Array, `1` is the index of the second
element, and so forth.

The syntax is to list the values separated by commas, inside square brackets:

```js
[value1, value2, value3];
```

You can store any type of value inside an array: strings, numbers, booleans. You
can even store other arrays, or objects (which you will learn about next).

### Try it out

Defining an array as a variable looks something like this:

```js
var animals = ["tiger", "puppy", "snake", "llama"];
```

Pretty neat! Now you have all the animals grouped together rather than having to
define them separately. You can see how many animals there are by using
`.length`:

```js
console.log(animals.length);
```

If you want to refer to one specific member of the array, you can do so by using
their "index number" like so.

```js
console.log(animals[1]);
```

> Take a guess at which animal that will print out, and see if you're right.

Spoiler alert, it will print out "puppy". That might seem weird, until you learn
that JavaScript is a "0-index" language. What that means is that counting in
JavaScript starts at 0. So `animals[0]`will print out "tiger". We don't make the
rules...

> **Exercise:**
>
> 1. Create an array that contains the countries of all the students in the
>    class (at least five nationalities)
> 1. `console.log` the number of countries in the Array
> 1. Now, `console.log()` each country in the list. Hint: **For loops**
>
> **Don't ask a mentor - Google it!** Try googling to find the answer if you're
> stuck. Google skills are an essential part of being a developer.

## Objects

Now for the final data type: objects. Like arrays, they can store multiple bits
of information, except objects store the properties of something. For example,
you might want to save the name, model and colour of a car. Or the name, time
and location of a film playing at the cinema.

The syntax looks like this:

```js
{
  property1: "value1",
  property2: "value2",
  property3: "value3"
}
```

The names on the left ("property1") are known "keys". Any values can be given to
them: strings, booleans, integers.

### Try it out

Let's define an object that represents a person:

```js
var person = {
  firstName: "Nelson",
  lastName: "Mandela",
  occupation: "freedom fighter",
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
> _"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a
> {occupation}."_
>
> Hint: you can construct longer strings by adding them together. This includes
> variables. For example:
>
> ```js
> var name = "Jane";
> console.log("People call me " + name);
>
> // the previous line will print
> // "People call me Jane"
> ```

## Useful array methods

### Concatenating two arrays

You've learned how you can add two numbers and append two strings, but how does
this work for arrays? A simple `arr1 + arr2` will not do, but there is a method
you can use: `concat()`. It is a method that you call on the array (similar to
how `console.log` is the `log` function called on `console`) and takes the array
you want to append as a parameter.

```js
var countries = ["Scotland", "Germany", "Syria"];
var moreCountries = ["Sudan", "Ethiopia", "France"];

countries.concat(moreCountries);
console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan', 'Ethiopia', 'France']
```

### Appending an element

If you want to append an element to an array, you can just put it after the last
existing element like so:

```js
countries[countries.length] = "United States of America";
```

There is another way though, which is a bit more elegant: the `push` function.

```js
countries.push("United States of America");

// .push can also be called with multiple parameters
countries.push("United States of America", "France");
```

> **Exercise**: Search `.slice`, `.splice` and `.pop` and tell us what they do

## Resources

1. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
1. [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
1. [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

{% include "./homework.md" %}
