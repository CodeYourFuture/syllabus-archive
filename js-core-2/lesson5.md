![](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core 5
**What will we learn today?**
- Functions and  Good Design
- Object Oriented Programming
---

# Functions 
## Why Functions?

> Exercise: A function with lots console.logs, redundant repeated code, then one or two versions of the same. Talk about Design choices ... They give same result but the choice matters

## Good Design
- Ease of Maintenance / Clarity
    - Naming
    - Formatting
    - Commenting
    - Clear logic
    - Concise
    - Redundancy
- Reusability
    - DRY
    - Single Reponsibility
        - Avoiding global state (scope)
        - Predictability and Ease of testing
- Extensibility

> Exercise
Find all the bad design issues with this function

> Exercise
We have some problem to solve, write really bad code that gives the right result. Tell us why it is bad.

# Object Oriented Programming

**The contents of this section are based on the MDN articles mentioned inthe resources**

> What are abstractions?

In software engineering and computer science, abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level. 

> Abstractions help us with managing complexity, and achieve better reusability.

So far, in the solutions we wrote, we think in terms of steps: DoStep1, DoStep2, DoStep3 until we solve a problem. We're thinking in the **Verbs** that constitute a solution. Our abstractions are **functions** that *do* things to reach a solution. We can use a function without knowing how it works (think about `console.log()`) - the abstraction of that function hides the complexity of how `console.log` actually works.

Now we will step into a new level of abstractions - Objects.

> The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

## OO overview

### Defining an object template

![](https://mdn.mozillademos.org/files/13889/person-diagram.png)

### Creating actual objects

![](https://mdn.mozillademos.org/files/15163/MDN-Graphics-instantiation-2-fixed.png)

### Specialist classes

![](https://mdn.mozillademos.org/files/13881/MDN-Graphics-inherited-3.png)


> Some people argue that JavaScript is not a true object-oriented language — for example, it doesn't have a class statement for creating classes, unlike many OO languages. JavaScript, instead, uses special functions called constructor functions to define objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

> Exercise: On a paper, **model** how you would create a system to represent an **animal**  - what class do you have, what objects, what properties, create specialised classes for
(ToDo: better exercise)

## Object literals
There are several ways to create objects - we've already used one before. It is called `object literals`

`var person = {}`

The line before created an empty object. Let's create a more sophisticated object

```javascript
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

So what is going on here? Well, an object is made up of multiple members, each of which have a name (e.g. name and age above), and a value (e.g. ['Bob', 'Smith'] and 32). Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon. The syntax always follows this pattern:

The value of an object member can be pretty much anything — in our person object we've got a string, a number, two arrays, and two functions. The first four items are `data items`, and are referred to as the object's properties. The last two items are functions that allow the object to do something with that data, and are referred to as the object's `methods`.

> Methods are functions that allow the object to do something with its data.

> The *this* keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead? 

An object like this is referred to as an object literal — we've **literally** written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at next.

> Exercise: (ToDo)

## Constructor functions

> Exercise: Let's create a function called `createPerson` that takes a `name` as a parameter and returns an object.

Now let's look at another way for creating this object.

```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I am ' + this.name + '.');
  };
}
```

This is called a **constructor function**.
> The constructor function is JavaScript's version of a class. You'll notice that it has all the features you'd expect in a function, although it doesn't return anything or explicitly create an object — it basically just defines properties and methods. You'll see the this keyword being used here as well — it is basically saying that whenever one of these object instances is created, the object's name property will be equal to the name value passed to the constructor call, and the greeting() method will use the name value passed to the constructor call too.

> Exercise: (ToDO)

## Inheritance (maybe)

# Homework

- Read Chapter 5 of Code Complete 2 (Design In Construction)
- Read Chapter 7 (High Quality Routines)


# Resources
1. [JavaScript: The Good Parts by Douglas Crockford, chapter 4 - Functions](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
2. [MDN Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
3. [MDN OOP in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)


