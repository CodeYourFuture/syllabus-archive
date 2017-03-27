# JavaScript Core 2
** What we will learn today?**
- Functions
- More Arrays and loops
  - Functional utils (map, foreach, filter)
- Objects
- Callbacks

---

## Functions
Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process 
it, and "return" a result. Once a function is written, it can be used over and over and over again. (Utah University)


```javascript

//Function declarations

function sayHello() {
    console.log("hello");
}

function square(number) {
    return number*number;
}

square(5); // returns 25

//Function expressions

var addTen = function(number) { 
    return number + 10;
};

addTen(5); // return 15

```


> **Exercise**:
> Open [this CodePen](http://codepen.io/rarmatei/pen/jBpdzx?editors=0012) and follow the instructions there

## Callbacks

You probably noticed in last few exercises that JavaScript functions can be passed
 as arguments to other functions.
 
 Callbacks are JavaScript functions that are passed as arguments to other functions
 so they can be executed inside those functions.
 
 Example:

## Pass by value / reference

```javascript

function addFive(value) {
    value = value + 5;
    console.log(value);
}

var ten = 10;
addFive(ten);
console.log(ten);

// will output:
// 15
// 10

```

# Resources
1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

# Homework

1. First part of Homework - Easy

2. Second part of Homework - Intermediate/Hard

3. **[Bonus/Optional]** Third part/optional - Hardest

4. **Research:**

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
