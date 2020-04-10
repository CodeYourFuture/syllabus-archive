# JavaScript Core III - Week 2

## Learning Objectives

- Understand the use of the `this` keyword in JavaScript
- Understand the concept of scope and be able to define `Global`, `Function` and `Block` scope

## Agenda

The purpose of this class is to introduce to the student:

1. The `this` keyword and its relationship with `scope`
2. Project Work

## 1. The `this` keyword and its relationship with `scope`

### Explanation

- The environment(or scope) in which the line is being executed is know as “Execution Context”
- The object that `this` refers to, changes every time execution context is changed.
- Whatever is calling the function passes the `this` value to it by default.
- We can pass specific `this` by `.bind`, `.call` or `.apply`
- By default, “this” refers to global object which is `global` in case of NodeJS and `window` object in case of browser

### Example

#### “this” refers to global object

```javascript
// Immediately Invoked Function Expression (IIFE)
(function () {
  // First Example
  function foo() {
    console.log("Simple function call");
    console.log(this === window);
  }

  foo(); //prints true on console
  console.log(this === window); //Prints true on console.
})();
```

As you see in the example, the `foo()` function is called based on `window`, this makes the default `this` inside this `foo` function get the value `window`

> Note: we say a function is called based on window when there's no object calling it, like `obj.foo()`, but calling `foo()` acts if it was `window.foo()`

> Note: If `strict mode` is enabled for any function then the value of “this” will be “undefined” as in strict mode, global object refers to undefined in place of windows object.

```javascript
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //prints false on console as in “strict mode” value of “this” in global execution context is undefined.
```

#### this refers to new instance (constructors)

```javascript
function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams
```

- In Javascript, property of an object can be a method or a simple value.
- When an Object’s method is invoked then “this” refers to the object which contains the method being invoked.

```javascript
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1;
fun1(); // Prints true as this method is invoked as a simple function.
user.foo1(); // Prints false on console as foo1 is invoked as a object’s method
```

> Note: the value of “this” depends on how a method is being invoked as well.

## 2. Project Work

### Explanation

- Explain some key concepts that will be appearing in the homework this week

### Example

<!-- TODO -->

### Exercise

<!-- TODO -->
