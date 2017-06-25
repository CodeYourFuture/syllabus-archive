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


# Resources

1. [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Data_structures_and_types)
2. [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
3. [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#.25_.28Modulus.29)
