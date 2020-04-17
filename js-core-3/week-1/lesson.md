# JavaScript Core III - Week 1

## Learning Objectives

- The learner should understand the value of thorough and comprehensive debugging
- The learner should be able to use error messages to debug simple logical or syntactical errors in their code
- The learner should be able to logically step through their code to find bugs and errors
- The learner should be able to predict where a program will fail
- The learner should be able to modify an existing program to solve errors

## Agenda

The purpose of this class is to introduce to the student:

1. Debugging your code
2. Consolidate learning for the project work

## 1. Debugging

### Vocabulary

- `Syntax` & `Syntactical`
- `Bug`
- `Error`

### Why is Debugging Important?

When are projects are very small it's easy to see the problems and when something does break it's not to much of an issue. This isn't true when we start working on larger projects.

The code that we write has real world uses and real world effects.

#### Fly-By-Wire Aviation

This was the first ever time that a fully automated flight had been flown and there was a bug in the way the maths was handled internally.

You can see an example of what happens [here](https://www.youtube.com/watch?v=BxlBhucGayA). This flight was a test flight and was unmanned.

#### Therac-25

Therac-25 was a machine used to administer radiation to cancer patients which malfunctioned because of a programmer error.

You can watch a quick video about the bug [here](https://www.youtube.com/watch?v=izGSOsAGIVQ) in a

### The Debugging Mindset

Debugging is a fact of life! Not everything will work the first time you do it and even when it does there will often be times when even if you feel like you've covered everything another bug may occur!

**Task (5 Minutes)**
In teams, the students should have quick discussion about the bugs that have occurred to them in the past. When they finish the class should regroup and gather together all the different types of bugs that have happened to them.

### Types of Errors

#### Syntax Errors

These errors are usually quite simple to fix and happen when you've typed some code wrong or missed a character. These will normally happen as soon as you run your code, this is often called `compile time`.

##### Examples of Syntax Errors

How would we fix these syntax errors? Post your answers in Slack!

- `SyntaxError: missing ) after condition`

```javascript
if (3 > Math.PI {
  console.log("wait what?");
}
```

- `SyntaxError: missing ; before statement`
  - Note: Ignore the // in this example

```javascript
// var obj = {}
```

- `SyntaxError: missing variable name`

```javascript
var = 1;
```

- `SyntaxError: missing } after function body`

```javascript
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

#### Reference Errors

These errors most commonly happen when you try to access variable that has not been defined anywhere.

##### Examples of Reference Errors

How would we fix these reference errors? Post your answers in Slack!

- `ReferenceError: "word" is not defined`

```javascript
var ward = "bar";
word.substring(1);
```

- `ReferenceError: "num1" is not defined`

```javascript
function numbers() {
  var num1 = 2;
  var num2 = 3;
  return num1 + num2;
}

console.log(num1);
```

- `ReferenceError: reference to undefined property "bar"`

```javascript
var foo = {};
foo.bar;
```

#### Type Error

Type errors usually occur when you are trying to access a method or variable from an object that doesn't have that in it.

##### Examples of Type Errors

- `TypeError: document.getElByID is not a function`

```javascript
var x = document.getElById("foo");
```

- `TypeError: numbers.map is not a function`
  - Hint: what `type` is the number variable

```javascript
var numbers = { a: 13, b: 37, c: 42 };

numbers.map(function (num) {
  return num * 2;
});
```

- `TypeError: Cannot read property 'substring' of undefined`

```javascript
var foo;
foo.substring(1);
```

### The Debugging Framework

- What did I expect to happen?
- What happened instead?

#### Tools

**Task (5 Minutes)**

In teams, the students should have quick discussion about the ways that they have solved bugs or errors they've had in the past.

When they finish the class should regroup and gather together all the different types of bugs that have happened to them.

##### Thinking like a computer

<!-- TO DO -->

##### Test Often

<!-- TO DO -->

##### Using `console.log()` and the Console

<!-- TO DO -->

##### JSHint in VSCode

It's a great skill to get good at recognizing these errors when they happen to you but you can also use tools to help you find these errors before you run your code. You can use the JSHint extension for VSCode which you can [download here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint).

### Exercise

In your groups we want you to go through this programme and find all of the errors that are happening in the code.

<!-- Add exercises here -->

## 2. Project Work

### Explanation

- Explain some key concepts that will be appearing in the homework this week

### Example

<!-- TODO -->

### Exercise

<!-- TODO -->
