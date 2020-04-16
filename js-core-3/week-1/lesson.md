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

### Types of Errors

#### Syntax Errors

These errors are usually quite simple to fix and happen when you've typed some code wrong or missed a character. These will normally happen as soon as you run your code, this is often called *compile time*.

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

#### JSHint in VSCode

It's a great skill to get good at recognizing these errors when they happen to you but you can also use tools to help you find these errors before you run your code. You can use the JSHint extension for VSCode which you can [download here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint).

### The Debugging Mindset

Debugging is a fact of life! Not everything will work the first time you do it and even when it does there will often be times when even if you feel like you've covered everything another bug may occur!

In your teams, I want you to have a discussion about how might find out

#### The Debugging Framework

- What did I expect to happen?
- What happened instead?

### Tools

- Using `console.log()` to find the state of variables
- Understanding stack traces in the console
- Using Google well
- Using `debugger`

### Exercise

In your groups we want you to go through this program and find all of the bugs that are happening in this code.

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

## 2. Project Work

### Explanation

- Explain some key concepts that will be appearing in the homework this week

### Example

<!-- TODO -->

### Exercise

<!-- TODO -->
