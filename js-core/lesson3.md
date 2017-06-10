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

# Context
When a function is invoked, it receives the parameters that were passed in as well two other objects

1. `arguments` - an array-like object which lists all the parameters which were pass into function
2. `this` - is an object that refers to the current execution context

What the actual object `this` refers to will depend on how the function was called.

## constructor
A function called using `new` operator is called a `constructor`. It creates a new object inheriting from
its prototype and sets the value of `this` to the new object.

```js
var Car = function(color){
  this.color = color;
}

var myCar = new Car('red');
console.log(myCar.color) // red
```

## method
A function which is a property of an object is called a `method`. When a function is invoked as a method `this` will refer to the parent object.

```js
var library = {
  numberOfBooks: 0,
  addBooks: function(books){
    this.numberOfBooks += books;
  }
}

library.addBooks(7);
console.log(library.numberOfBooks) //7
```

## function
A function which does not belong to a method will have its context set to the global object, which is `window` in the browser and `global` in Node.

That causes several issues.

1. Inner functions cannot see the context of parent methods
```js
var library = {
  numberOfBooks: 0,
  addBooks: function(books){
    this.numberOfBooks += books;
 
    function double(){
      this.numberOfBooks *= 2;
    }

    double();
  }
}

library.addBooks(5)// 5
console.log(library.numberOfBooks);
```
This is because `double` is a function and it get's passed the `global` object as the value of this

2. When a method is called a function we lose our original scope because `this` becomes `window` rather than the parent object.
```js
var library = {
  numberOfBooks: 0,
  addBooks: function(books){
    this.numberOfBooks += books;
  }
}

var detached = library.addBooks;
detached(7);
console.log(library.numberOfBooks) // 0
```
Also, your global object has now acquired a `numberOfBooks` property which is not ideal :(

We can resolve this in two ways.

1. Use a temporary variable to capture `this` which will remain visible to the inner function

```js
var library = {
  numberOfBooks: 0,
  addBooks: function(books){
    var that = this;
    this.numberOfBooks += books;

    function double(){
      that.numberOfBooks += books;
    }

    double();
  }
}

library.addBooks(5) // 10
console.log(library.numberOfBooks);
```

2. `bind` the value of `this` so it is retained. `bind` is a method of `function` which returns a function that has `this` set to the value passed in as a param.

```js
var library = {
  numberOfBooks: 0,
  addBooks: function(books){
    this.numberOfBooks += books;
  }
}

var detached = library.addBooks;
detached = detached.bind(library);
detached(7);
console.log(library.numberOfBooks) // 7
```

## apply / call
Another way to invoke functions is using `apply` or `call` methods. They both accept the context, the value that will become this as their first param. The difference is that `apply` takes the params that will be passed into the method as an `array`, whereas `call` takes them as individual params.

```js
var book = {
  author: 'JK Rowling'
}

function addTitle(title){
  this.title = title;
}

addTitle.call(book, 'Harry Potter');
console.log(book.title) // Harry Potter
```

> **Exercise**


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
