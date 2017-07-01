![](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core 5
**What will we learn today?**
- Functions and  Good Design
- Object Oriented Programming
---

# Functions
## Why Functions?

The function is considered one of the greatest inventions in computer science. It makes programs easier to read and to understand. It allows for us to more easily modify and extend code. It saves space and improves performance.

At the most basic level, a function is a series of instructions that can take an input and produce an output. Parameters dictate how the function behaves.


![Function Diagram](https://arthurleon.files.wordpress.com/2014/09/function_machine.png?w=240 "Function Diagram") ![Function & Parameters Diagram](https://i2.kknews.cc/large/19f00001508ee348ee0c "Function & Parameters Diagram")

We've used functions a bit, but now we need to know how to use them well.

There are many ways to write code that does the same thing. But are they all equal?


> Exercise: Let's look at a really obvious example of a function with redundant code. What could we do to improve it?

```JavaScript
function printHelloFiveTimes(){
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
}
```

Introducing a simple for loop makes our lives a lot easier. This way we can more easily see what the function does and make modifications.

```JavaScript
function printHelloFiveTimes(){
  for ( var i = 0; i < 5; i++ ){
    console.log("Hello");
}
```

> Exercise: Now, let's look at a different example. Let's say we wanted to welcome mentors:

```JavaScript
function welcomeMentors(){
  console.log("Hello Mozafar");
  console.log("Hello Rares");
  console.log("Hello Tim");
  console.log("Hello Ashleigh");
  console.log("Hello Gordon");
}
```

We could be lazy and change how we welcome the mentors.

```JavaScript
function welcomeMentors(){
  var mentorNames = "Mozafar, Rares, Tim, Ashleigh, Gordon";
  console.log("Hello " + mentorNames);
}
```

But it's not quite the output we wanted. And we can be smarter about it. Why not a loop?

```JavaScript
function welcomeMentors(){
  var mentorNames = ["Mozafar", "Rares", "Tim", "Ashleigh", "Gordon"];
  for ( var i = 0; i < mentorNames.length; i++ ){
    console.log("Hello " + mentorNames[i]);
  }
}
```

So functions help us to organise and enhance our code. But what makes good design? Is it just "shorter is always better"?

## Good Design

Design is important if we want our code to be understandable (both to other humans, but also to us in the future), to be easy to use and easy to expand.

There are three main principles you need to know now: clarity, reusability and extensibility. There are also others, but they are deeply related to these three.

To

- Ease of Maintenance / Clarity
    - Naming
    - Formatting
    - Commenting
    - Clear logic
    - Concise
    - Avoiding Redundancy

- Reusability
    - DRY
    - Single Reponsibility
        - Avoiding global state (scope)
        - Predictability and Ease of testing

- Extensibility
    - Avoiding being unnecessarily specific (e.g. magic numbers)

> Exercise: Find all the design issues with this function.

As an aside: if you try to run the code it won't work, but not because it's not correct. It's only because it is a fragment of a larger program and lacks some code such as the function updateCorpDatabase(), the initialisation of the global variables referenced (e.g. quarter, profit) and, of course, the HandlesStuff() function also hasn't been called.

```JavaScript
function HandlesStuff(inputRecord, savedrecord, income1, income2, expenseType, revenue, expense0, expense1, expense2, screenx, screeny, success){

  var i;
  for ( i = 0; i < 100; i++ ) {
    inputRecord[i] = 0;
    }

    updateCorpDatabase( savedrecord );
    income1 = income2 * 4.0 / quarter;

    if( expenseType == 0 ) {
      profit = revenue - expense0;
    }
    else if( expenseType == 1 ) {
      profit = revenue - expense1;
    }

    else if( expenseType == 2 ){
      profit = revenue - expense2;
    }
}
```

What is wrong with this function?

1. Naming: the function has a bad name, HandleStuff() tells you nothing about what the function does. It's also considered bad practice to name variables vaguely by separating them through numbers (debt1, expense1, etc). If you find yourself doing this then you should either use an array (such as expenses[]) or use a more specific name for each variable (such as pastIncome and currentIncome). There is also inconsistency in the use of camel casing (inputRecord versus savedrecord).

2. Commenting: the function isn't documented at all. It's very difficult to understand what the function's purpose is and how each part of the code contributes to it. By writing comments, the coder communicates their reasoning and helps the function be human readable.

3. Layout/ Formatting: the physical organisation of the code on the page gives few hints about its logical organisation. Layout strategies are used inconsistently throughout the code: incorrect indentation, unnecessary spacing (between the two else ifs) and the long list of parameters is unreadable. This makes the code look messy and confusing.

4. Input variables: the function's input variable, inputRecord, is set (hardcoded) within the function. If it's an input variable, its value should not be modified. If the value of the variable is supposed to be modified, then the variable should not be called inputRecord.

5. Global variables: the function reads and writes global variables - it reads from quarter and writes to profit. It should communicate with other functions more directly, rather than by reading and writing global variables.

6. Single Responsibility: the function does not have a single purpose. It initialises some variables, writes to a database, does some calculations - none of which seem to be related to each other in any way. A function should have a single, clearly defined purpose. This function looks like it needs restructuring: breaking it into multiple functions.

7. Data checks: the function doesn't defend itself against bad data. If quarter equals 0, the expression income2 * 4.0 / quarter causes a divide-by-zero error.

8. Magic numbers: the function uses several magic numbers: 100, 4.0, 1, 2 and 3. These are numbers that are used directly in an expression rather than saving them first in a variable. This is discouraged as it makes it more difficult to manipulate the values. If we were to save them in a variable they would be easier to find and modify.

```JavaScript
tenSquared =  10*10
tenCubed = 10*10*10

x = 10
xSquared =  x*x
xCubed = x*x*x
```

9. Useless parameters: some of the function's parameters are never used (screenx, screeny and success). They should be removed because they are confusing. It is tempting when you're starting to code a function to add more parameters thinking that you might need them, but it's important to remove them if you don't end up using them.

10. DRY principle: the function breaks the DRY (Don't Repeat Yourself) rule. The expression profit = revenue - expense0 is written 3 times unnecessarily, the only difference being whether it's the first, second or third expense. This variable can be restructured into an array.

```JavaScript
var expense = [expense1,expense2,expense3];
profit = revenue - expense[expenseType];
```

> Exercise: We have the following problem to solve, write really bad code that gives the right result. Tell us why it is bad.

Write a function that will print out the number of vowels that are in mentors' names.

> Exercise: Now, let's write it well together.


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

There are several ways to create objects - we've already used one before: _object literals_.

`var person = {}`

In the example above an empty object is created. Let's create a more sophisticated object.

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

<<<<<<< HEAD
Some programming languages will have a `class` keyword that allows programmers to create that Template of an Object.
=======
Some programming languages have a `class` keyword that allows programmers to create that template of an Object.
>>>>>>> 9aab3edd59772cf06a911dbcc63e3cdce86dfb2d
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
