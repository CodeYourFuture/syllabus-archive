# JavaScript Core 2
** What we will learn today?**
- JavaScript in the browser
  - DOM
  - DOM Events
- AJAX / API (REST)
  - Callbacks and Promises
  - JSON
- Callbacks

- More Arrays and loops
  - Functional utils (map, foreach, filter)

- Async - settimeout

---

# Callbacks

You probably noticed in last few exercises that JavaScript functions can be passed as arguments to other functions.

Callbacks are JavaScript functions that are passed as arguments to other functions
so they can be executed inside those functions once they're finished.

Example:

```javascript

function a(callback) {
    var x = 1000;
    if(callback) {
        callback();
    }
    return x;
}

```

> **Exercise**:
> - Look up the global `setTimeout` function
> - Write a function that takes a string as a parameter, waits 2 seconds, and then logs out the string


## More arrays and loops + tests

Before we dive into the exercises, a word on testing:
- All of us write buggy code. Thinking about what inputs our software is supposed to handle
and writing tests to verify that it behaves as expected for those inputs helps us
prevent most of those bugs.
- By writing good tests for our pieces of functionality helps ensure that no one else can
break it by mistake in the future
- Sometimes, just by thinking about what tests to write might bring up big flaws in our
initial logic

Testing example; consider the following code:

```javascript
function containsBob(a) {
    return a.includes("bob");
}
```

How might we test the above? Some example inputs we can test with:

```javascript
containsBob("aabobaa"); // expected: true, actual: true
containsBob("hello"); // expected: false, actual: false
containsBob("bob"); // expected: true, actual: true
containsBob("b ob"); // expected: false, actual: false
containsBob(""); // expected: false, actual: false

containsBob(1); // expected: false, actual: TypeError
```

> **Exercise**:
> Open [this CodePen](http://codepen.io/rarmatei/pen/EWJjrZ?editors=0012) and follow the instructions there




## Topic 1
High level explanation of Topic 1 - rely on the exercises
> **Exercise**: Always have exercises

## Topic 2
## Topic 3

 

# Resources
1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

# Homework

1. First part of Homework - Easy
- write a function that returns whether a number exists in a list
Example:
    [1,2,3,4] -> does 6 exist -> false
              -> does 3 exist -> true
- write a function that concatenates two lists together
Example:
    [1,2,3], [7,8,9] -> [1,2,3,7,8,9]

- given the following object shape:

    var person = {
        name: "Bob",
        age: 25
    };

    Write a function "growOlder()" that accepts a "person" as an argument and returns a new person with his/her age increased by 1.


2. Second part of Homework:
Implement solutions to solve the following problems:

Problem 1.
Given the following array
[2,5,7,2,3], and the number T = 8
Build a solution that finds the two numbers in the array that add up to T.

Problem 2.
Think about how you would represent an employee as a JavaScript object.

Create the following functions:
- addEmployee: adds an employee to the list of existing employees
- search: allows you to search for an employee by name
- fire: deletes an employee by ID from the list
- changeRole: accepts as parameters an employee ID and a string for the new role it should have. Finds the employee by ID and changes his/her role.

3. **[Bonus/Optional]**
- Try to finish as many exercises as you can from http://reactivex.io/learnrx/ (try to finish up to exercise 8 at least)
- They're difficult, the point is for you to read, learn and understand more about the `.map` and `.filter` functions. It's okay if you can't finish them all.

# Research
1. Watch the following video on "Value type vs. reference type": https://www.youtube.com/watch?v=mh-hPzDfb_Q .
If it makes sense, great! If not, don't worry, we'll be going over the same topic next week and discuss it until it makes sense.

2. Watch the following videos on the `.map` and `.filter` array operators:
- Map: https://www.youtube.com/watch?v=bCqtb-Z5YGQ
- Filter: https://www.youtube.com/watch?v=BMUiFMZr7vk

Again, don't worry if nothing makes sense. If you don't understand something, you can Google for more information, and if it still doesn't make sense, we'll be going through these topics next week!


## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
