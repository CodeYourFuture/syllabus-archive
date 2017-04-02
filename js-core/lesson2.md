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

## More arrays and loops

todo:
mostly codepen exercises

## A taster of functional programming - forEach, map, filter

todo


## More on objects

todo:
the new keyword, creating objects with constructor functions, primitive types vs reference types

## Pass by value / reference

Consider the example below.

```javascript

function addFive(value) {
    value = value + 5;
}

var ten = 10;
addFive(ten);
console.log(ten);

```

We have a function that accepts a value as an argument. The function then adds five to the
argument and logs the value.
After invoking the function with the variable `ten`, the variable is logged.

What will be the values logged?
Answer: 10 (not 15)

Explanation:
In JavaScript, variables are always passed to function by value. That means only the value
the variables was holding is passed to the function, and not a reference to the variable's
location in memory. That means that inside a function call, any changes we make to its
arguments will only apply inside the function (as seen in the previous example).
 
**Be careful though**, as the value of an argument might be a reference to a JavaScript
object, in which case, changing a property on that object will also reflect everywhere
else we use a reference to that object.

For example:

```javascript

function a(primitive, object) {
    primitive = primitive + 5;
    object.greeting = "how are you?";
    object = {
      greeting: "holla!"  
    };
}
var primitive = 10;
var object = {
  greeting: 'hello'  
};
a(primitive, object);
console.log(primitive); // 10
console.log(object.greeting); // "how are you?" 
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
