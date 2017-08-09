# Intro to ES6
ECMAScript 2015 (or ES6) is a significant update to JavaScript that introduces new syntax for writing complex applications including classes and modules and other features.

## const and let
on JS Bin, let's write this simple code snippet
``js
function sayGreeting(name, gender) {
    var greeting = 'Hello';
    var nameWithTitle;
    if (gender === 'female') {
        nameWithTitle = 'Ms. ' + name;
    } else {
        nameWithTitle = 'Mr. ' + name;
    }
    return greeting + name;
}
// sayGreeting('Rares', 'male') should return 'Hello Mr. Rares'
// sayGreeting('Irina', 'female') should return ' Hello Ms. Irina'
```
> Exercise: Let's update this code to use `let` and `const` instead of `var`

## Template literals

> Exercise: We do a lot of string concatenation in JavaScript - ES6 introduces a more elegant way of accomplishing the same. Let's try it.

## Arrow functions
> Exercise: ES6 also has a new way of declaring functions. Let's see how it works.

> Exercise: Refactor the previous code to have a separate function that checks if gender is 'female' or not, and use it in sayGreeting. Let's try and make the code as compact as possible together using ES6 features.

## More ES6
There are so many features in ES6. They're mostly what we call `syntax sugar`. They don't provide new functionality, but new (more elegant) ways of accomplishing the same tasks.

Since not all ES6 features are supported in all browsers, many developers and projects use what is called `Transpilation` - a process that transpiles/translates ES6 code to ES5 syntax that is supported by all browsers.

On Node, most ES6 features are now natively supported in Node 8.

> From now on, we expect you to use ES6 syntax in your assignments and the code you write.
