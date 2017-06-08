# JavaScript Core 2
** What we will learn today?**
- JavaScript in the browser
  - DOM
  - DOM Events
- Async - settimeout
- AJAX / API (REST)
  - Callbacks and Promises
  - JSON

---

# Taking functions further
High level explanation of Topic 1 - rely on the exercises

## 'Fat arrow' functions
ES6 introduced a new way of structuring functions; the arrow function. Let's compare it against the ES5 syntax:

```js

// ES5
var multiply = function(x, y) {
  return x * y;
};

// ES6
multiply = (x, y) => { return x * y };

console.log(multiply(2, 3));

```

Arrow functions are quicker to write because they don't require variable assignment. Also, if you're only passing one argument into the arrow function, you don't need to use brackets around the parameter:

```js
multiplyByTen = num => { return 10 * num };

console.log(multiplyByTen(5));
```

If you're only going to `return` a single line in an arrow function, you don't even need the curly brackets (or the `return` keyword):

```js
greet = name => `Hello, I am ${name}!`;

console.log(greet('Ada Lovelace'));
```

However, there are some important differences between arrow functions and ES5 functions aside from syntax. Try the following exercise:

> **Exercise**: Always have exercises

# Topic 2
> **Exercise**: Always have exercises

# Topic 3
> **Exercise**: Always have exercises


# Resources
1. [Resource 1 to learn more about Topic 1](https://google.com)
2. [Resource 2 for Topic 2](https://google.com)

# Homework

1. First part of Homework - Easy

2. Second part of Homework - Intermediate/Hard

3. **[Bonus/Optional]** Third part/optional - Hardest

4. **Research:**

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
