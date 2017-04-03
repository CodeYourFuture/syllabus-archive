# JavaScript Core 1

![Status: Draft](https://camo.githubusercontent.com/997591db1749880b8b23c96b8f788e69af09c04d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d64726166742d6461726b7265642e737667)

**What we will learn today?**
- Getting started with JavaScript
- Variables, assignment and comparison
- Conditionals
  - if/else, switch and ternary operator
- Arrays and loops
- Objects
---

## Simple data types, variables, assignments

High level explanation of Topic 1 - rely on the exercises
> **Exercise**: Always have exercises

- go to [codepen.io/pen/](codepen.io/pen/) to create a new Codepen. On the bottom left, click the "Console" button to open the console.
  ![Codepen console](assets/codepen-console.png)
- Simple data types: Strings, numbers, boolean
- Complex data types: objects, arrays (including builtins, like Date etc)

### Expressions

- Introduce numbers
- Introduce number operators
- Do math exercise,
- Introduce operator precedence

- Introduce strings
- Introduce string concatenation
(- Don't use strings functions yet, as the `.` syntax looks weird with string literals)

- Introduce booleans: `true` and `false`
- Introduce `&&` and `||` and `!`
- (When to introduce truthiness and falsiness? Probably in `comparisons`?)

> **Exercise**: Put simple mathematical expressions into the console: `2 * 2`, `2 + 2`, `5 * 7 - 13`
> **Exercise**: Calculate the area of a circle (`r * r * pi`). Do a quick Google search on how to use PI in JavaScript.

> See what happens when you "add" two strings together

> Research the JS Math library. sqrt, floor, ceil, round

> Write an expression that outputs the percentage of students who are female. Make it so it outputs it as `58%`, and make sure you use the actual numbers of women and the total number of students.
> Solution: `console.log(Math.round(7 / 17 * 100) + "%");`

### From REPL to console.log

- Single expressions are not very useful, you want to write applications
- More than one statement? Move it to the `JS` box in Codepen
- Now you don't get any immediate feedback
- Use `console.log` to print to the console: `console.log(3 + 3);`
- Write statements below each other

> **THOUGHT:** Codepen does not have a "run" button, so it's quite intransparent when it actually re-runs a program. Maybe a different tool is better? A simple jsbin configuration, maybe?

### Variables and assignments

For an expression or a value to be of any use to us, we need to store it in a variable:

```
var x = 3;
^   ^ ^ ^
|   | | value
|   | assignment operator
|   identifier
declaration statement
```

Now you can use the identifier instead of the actual value in an expression:

`x + x`, `x * x`, `console.log(x)`

## Conditionals

### Comparisons

- Introduce `==` and `!=`, `<` and `>`
- Introduce the concept of truthiness and falsiness for non-boolean types
- Introduce `===` and `!==`

## Arrays

If you want to store a bunch of things, identifiers like `name1`, `name2`, `name3` and so on quickly become tiresome. **Arrays** to the rescue!

Arrays


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
