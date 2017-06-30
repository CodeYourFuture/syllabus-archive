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

Abstraction is one of the four cornerstones of Computer Science. It involves ignoring the characteristics that we don't care about in order to concentrate on those that we do care about.

![](https://bam.files.bbci.co.uk/bam/live/content/zwvdwmn/large)
**Source: http://www.bbc.co.uk/education/guides/zttrcdm/revision**

> Exercise: http://www.bbc.co.uk/education/guides/zttrcdm/test


Abstraction is a technique for arranging code into different levels of complexity. At the highest level is code that can be easily understood by a person. At the very lowest level is binary code and electric signals (e.g. 00101010110) that can be understood by computer hardware. There are many levels of abstraction in between, so programmers don't have to interact with details of the system that are not revelant to them (such as how the programming language works, or how memory gets allocated).

So far, in the solutions we wrote, we think in terms of steps: DoStep1, DoStep2, DoStep3 until we solve a problem. We're thinking in the **Verbs** that constitute a solution. Our abstractions are **functions** that *do* things to reach a solution. We can use a function without knowing how it works (think about `console.log()`) - the abstraction of that function hides the complexity of how `console.log` actually works.

Now we will step into a new way of writing of abstractions - Object Oriented Programming (OOP).

> The basic idea of OOP is that we use objects to model things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

## OO overview

### Defining an object template (classes)

![](https://mdn.mozillademos.org/files/13889/person-diagram.png)

In OOP we create templates for objects that we will create. These are often called classes.


### Creating actual objects (instances)

![](https://mdn.mozillademos.org/files/15163/MDN-Graphics-instantiation-2-fixed.png)

From a class we can create (or instantiate) an object. This process is called instantiation. 

### Specialist classes

![](https://mdn.mozillademos.org/files/13881/MDN-Graphics-inherited-3.png)

> Exercise: On a paper, let's **model**  our class - what classes do we have, what objects, what properties do they have, can we create any specialised classes?

## Object literals

There are several ways to create objects - we've already used one before: it is called an `object literal`.

`var person = {}`

In the example above creates an empty object is created. Let's create a more sophisticated object.

```javascript
var person = {
  name: ['Simon', 'Muong'],
  age: 32,
  gender: 'male',
  interests: ['javascript', 'html'],
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

So what is going on here? Well, an object is made up of multiple _properties_, each of which have a _name_ (e.g. `name` and `age` above), and a _value_ (e.g. `['Bob', 'Smith']` and `32`). Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon. The syntax always follows this pattern.

The value of an object property can be pretty much anything — in our person object we've got a string, a number, two arrays, and two functions. The first four items are _data items_, and are referred to as the object's properties. The last two items are functions that allow the object to do something with that data, and are referred to as the object's `methods`.

> Methods are functions that allow the object to do something with its data.

> The `this` keyword refers to the context when the method is called. In this case, when calling `person.greeting()` the context is `person`, so `this` refers to that person object. `this` is a much more complicated and confusing topic in JavaScript but we will come back to it again and again.

An object like the one in our example is referred to as an object literal — we've **literally** written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at next.

> Exercise: write this Person object that we just implemented. Add a `method` called `printBio` that prints the interests of that person.

> Exercise: create another object for a different person with the same `methods` but different data (different name, interests etc...)

## Constructor functions

> Exercise: Let's create a function called `createPerson` that takes a `name` as a parameter and returns an object.

Some programming languages have a `class` keyword that allows programmers to create that template of an Object. 
JavaScript, instead, uses special functions called constructor functions to define objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

Let's look at how `constructor functions` work.


```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I am ' + this.name + '.');
  };
}
```
This is the *template* that defines what a Person should look like. Now let's create a specific object, an instance of Person.

```javascript
var sally = new Person('Sally');
console.log(sally); // { name: 'Sally': greeting: <Function> }
console.log(sally instanceof Person); // true
```

You'll see that the `this` keyword is being used again here. What exactly is `this`? When a constructor function is called with the `new` operator, a new object is created (called an instance), and the `this` keyword is a reference to that object. In our example we add a property (`name`) and a method (`greeting`) to `this`. Now, whenever Person is instantiated, it returns an object with a `name` property and a `greeting` method.

You'll also notice that the constructor function take a parameter, `name` (which gets passed to Person in the example above). When Person is instantiated the `name` parameter is assigned to `this.name` (as well as being used to configure the greeting method).

> Some people argue that JavaScript is not a true object-oriented language — for example, it doesn't have a class statement for creating classes, unlike many OO languages. JavaScript, instead, uses special functions called constructor functions to define objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

> Exercise: Let's add another property to that Person called `gender` that will take either 'male' or 'female' as values (these will be passed as parameters same as name).

> Exercise: add a method called `displayInfo` that will print the person's name with 'Mr' or 'Ms' depending on the gender of the Person.

# Homework
- Finish this tutorial from BBC - http://www.bbc.co.uk/education/topics/z7tp34j
- Finish this CodeAcademy course on OOP in JavaScript - https://www.codecademy.com/courses/javascript-beginner-en-vj8Tr/0/1
- Read Chapter 4 - Functions from the book: JavaScript: The Good Parts
- Read Chapter 5 of Code Complete 2 (Design In Construction)
- Read Chapter 7 (High Quality Routines)
- [Optional] Read this chapter of Eloquent JavaScript - http://eloquentjavascript.net/1st_edition/chapter8.html (up to the exercises). Try all the examples on Codepen.

# Resources
1. [JavaScript: The Good Parts by Douglas Crockford, chapter 4 - Functions](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
2. [MDN Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
3. [MDN OOP in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)


