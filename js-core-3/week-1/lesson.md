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

These errors are usually quite simple to fix and happen when you've typed some code wrong or missed a character. These will normally happen as soon as you run your code, this is often called _compile time_.

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

#### Type Errors

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

When debugging you should always ask yourself a few key questions

1. What did I expect to happen?

You should very clearly be able to say exact what you expected to happen when you run your code. If you cannot do this, then you do not understand the problem well enough.

2. Is it actually broken?

Sometime what you think is broken is actually working fine but not what you thought was going to happen. You should confirm with what the program is trying to do.

3. What happened instead?

You should be able to quickly state what you were expecting to happen. Just saying "It Didn't Work" isn't enough! The more carefully you dissect the problem the more easily you'll be able to fix it.

4. What have I tried so far?

Debugging is a process of loops and iteration. Think about what you've done so far and work out other ways that the code could have broken.

#### Tools

**Task (5 Minutes)**

In teams, the students should have quick discussion about the ways that they have solved bugs or errors they've had in the past.

When they finish the discussion we should regroup and gather together all the ways that they have solved bugs in the past.

##### Thinking like a computer

The most important skill you can develop is thinking analytically and logically - exactly the same as a computer. In the exercises soon we will be using our logical skills to slowly step through a program to see what is going wrong.

##### Test Often

It is important when working on your code to test each part of your code separately and carefully. Make sure everything is working before you move on to the next part otherwise problems become harder to debug.

##### Using `console.log()` and the Console

By this point you will have seen `console.log()` quite a lot when we see what is happening in our programs - this tool can also be one of the key tools in debugging our programs!

When we're working on websites you can view the `Console` tool in Chrome by

- Right Click
- Inspect
- Click the `Console` tab

Here you'll see all of the messages that have been printed by the website when it was loading and running.

##### Using the Chrome Debugger

<!-- TO DO -->

##### JSHint in VSCode

It's a great skill to get good at recognizing these errors when they happen to you but you can also use tools to help you find these errors before you run your code. You can use the JSHint extension for VSCode which you can [download here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint).

### Exercise 1

As a class we should step through solving all of the issues in this small piece of code. You should copy it into a code editor (e.g. VS Code) in a `.js` file so you can debug and run it easily. **Be sure to use The Debugging Framework that we discussed earlier**

<!--

These are the errors:

• Homer string syntax: apostrophe not escaped (syntax)
• for loop: off-by-one error on check (logical)
• Incorrect calling of the function (other)
• Typo (typerror on k) (other)

-->

```javascript

let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[k]);
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd'oh!',
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined

```

Try to categorise the bugs found under:

1. Logical
2. Syntactical
3. Other (programmer/user error)

### Exercise 2

In your groups we want you to go through this program and find all of the bugs that are happening in this code.

You can find the project [here](https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/week-1/debugging-code)

## 2. Project Work

### Explanation

Over the next three weeks we're going to be building a website that will consolidate all of your knowledge so far in the course.

You can find the project [here](https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/tv-show-dom-project)

### Getting Setup

In your groups you should get the project setup using the exact instructions found [here](https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/tv-show-dom-project/getting-started.md). Make sure you use your Teaching Assistants to help you!
