![](https://img.shields.io/badge/status-draft-darkred.svg) 
# # JavaScript Core 7
** What we will learn today?**
- Debugging and Chrome Dev Tools (quick recap)
- Objects Again
- Value Vs reference types
- Scope
- Higher Order Functions
---

# Debugging
> **Exercise**: Trace some code on paper

# Objects Again
## Objects vs Arrays
A data structure is a specialized format for organizing and storing data. General data structure types include the array, the file, the record, the table, the tree, and so on.

We have been dealing mainly with two types of data structures so far - *Arrays* and *Objects*.

When we are you solving a problem, one of your main decisions as a developer is to choose the data structures you will use to solve it. So when do you use an Array and when do you use an Object.

> Let's talk about the differences between Arrays and Objects - when can you use or the other

1. Does the order of data matter? Then use Arrays.
2. Can the data be organised by a label? Then use Objects.

> Exercise: Let's say we're writing a program to model and display a Newspaper: what data structure would you use to model the different sections of the newspaper (sports, politics etc..)? Write a data structure in JavaScript to represent your newspaper

> Exercise: Now if we're going to model a Book with different chapters - what data strucuture would we use?

> Exercise: Think of a scenario where we might need to combine both?

## Object Exercises

Checking if Property or Value Exists

```js
// Exercise
// Write a function "printProperties" that takes an object and prints its properties
var student = { 
    name: "Simon", 
    age: "21", 
    interests : ["javascript", "react"]
};

printProperties(student);
// Output in this case should be name, age, interests
```

```js
// Exercise
// Write a function called hasProperty that takes an object and a property
// the function should return true if the property exists, false if it doesn't
var student = { 
    name: "Simon", 
    age: "21", 
    interests : ["javascript", "react"]
};

hasProperty(student, 'age'); // should return true
hasProperty(student, 'job'); // should return false
```

> Exercise: compare that to how you find an element in array?


```js
// Exercise
// Write a function called printObject that takes an object and iterates through
// all its properties and prints a string formatted property: value
// Bonus point if you can format the list of interests properly
var student = { 
    name: "Simon", 
    age: "21", 
    interests : ["javascript", "react"]
};

printObject(student); //output: "name is Simon, age is 21, interests are ["javascript", "react"]
```

```js
// Exercise
// Write a function called "printArray" that use the previous function "printObject"
// It should loop through the array of students and print each item
var students = [{ 
    name: "Etza", 
    age: "21", 
    interests : ["javascript", "css"]
}, {
    name: 'Mohamed',
    age: 22,
    interests: ["javascript", "c#"]
}];

printArray(student);
// output:
// "name is Simon, age is 21, interests are ["javascript", "react"]"
// "name is Mohamed, age is 22, interests are ["javascript", "c#"]"
```

# Value vs Reference Types

```js
var increaseAge = function(age) {
  age = age++;
}

var initialAge = 10;
increaseAge(initialAge);

// What is the value of initialAge after calling the function?
```

```js
var increasePersonAge = function(person) {
  person.age++;
}

var person = { name: 'Tom', age: 10 };
increasePersonAge(person);

// What is the value of person.age?
```

> Let's look at the illustrations here: http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/ to understand this behavior better

# Scope

Before we get into what scope is, let's try a little exercise.

Open up jsbin and write the following:

```js
function () {
    var name = "hello";
}
console.log(name);
```
> What do you think the first console.log will print?

```js
var hello = "outer";
function() {
    var hello = "inner";
    console.log(hello);
}
```
> What do you think calling the function will print?


Let's see another example

```js
var firstFunction = function() {
    var a = 10;

    var secondFunction = function() {
        console.log(a);
    }

    secondFunction();
};

firstFunction();
```

This should work fine, and the console should print `10`. But what if we swap the positions of `var a` and the `console.log()`?

```js
var firstFunction = function() {
    console.log(a);

    var secondFunction = function() {
        var a = 10;
    }

    secondFunction();
};

firstFunction();
```

This returns an error: `ReferenceError: a is not defined`. You might think that the problem is that we're trying to console log `a` before it's declared in the code order. So let's try putting the `console.log(a)` after `secondFunction`, where `a` is assigned:

```js
var firstFunction = function() {

var secondFunction = function() {
    var a = 10;
}

console.log(a);

secondFunction();
};

firstFunction();
```

Wait, we're still getting the `ReferenceError`! Even if we move the `console.log(a)` underneath where `secondFunction` is called, we _still_ get the error. What's going on?

What we're seeing here is the effect of **scope**. Take a look at the following diagram:

![Scope](./assets/scope_bubbles.png)


We can see from this picture that each function is like a 'bubble', and it has access to the variable assigned within it, and the variables assigned 'above' it, in it's surrounding function. But note that the 'global' scope doesn't have access to `var o`, and `function outer()` doesn't have access to `var i`. So each function can access the variables in its **parent scope**, and in it's **own, immediate scope**, but it cannot see the variables in its **child scope**.

If a variable is declared outside of a function, in the 'window', it has *'global' scope*. The scope within a function is *'local' scope*:

```js
var test = "I'm global";

function testScope() {
    var test = "I'm local";
    console.log (test);     
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global
```

# Higher Order Function
https://medium.com/functional-javascript/higher-order-functions-78084829fff4


# Resources
1. Objects vs Arrays - https://www.metaltoad.com/blog/javascript-understanding-objects-vs-arrays-and-when-use-them-part-1
2. JavaScript Arrays and Objects Are Just Like Books and Newspapers https://medium.freecodecamp.org/javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746

# Homework

1. 

# Research
1. Closures
2. .call and .apply
3. Higher Order Functions

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
