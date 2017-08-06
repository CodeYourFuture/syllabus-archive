## Value vs Reference Types

A variable can hold two types of values: primitives (value types) and reference types.
The distinction between them is very important and will be a fundamental addition
to your JavaScript arsenal.

Primitives are:
 - string (example: `John Doe`)
 - number (example: `100`)
 - boolean (example: `true` or `false`)


Reference types are:
- Objects (example: `{greeting: "hello"}`)
- Arrays (example: `[1,2,3]`)
- Functions (example: `function doNothing() { }`)

Variables can only hold a few bytes of data.
Because primitives have fixed sizes, when you assign a primitive to a variable,
it will hold the actual value of the primitive (hence the name "value type").
But reference types can have practically infinite sizes, so when you assign a reference type
to a variable, that variable will hold a reference to it only: an identifier which will tell our program
where to look for that object in memory.

![Memory assignment](assets/stack_heap.png)

## Pass by value / reference

Consider the example below.

``js

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

``js

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

> Let's look at the illustrations here: http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/ to understand this behavior better

> **Exercise**
> - Open up the [CodePen here](https://codepen.io/rarmatei/pen/EXraWG?editors=0012)
> - Create a new `index.html` and `main.js` file
> - Link the `main.js` from the `index.html` so that it runs in the browser
> - Copy the exercises from the CodePen above into `main.js` and follow the instructions in the comments
