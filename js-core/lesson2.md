# JavaScript Core 2

**What we will learn today?**
- Arrays
- Objects

---


# Arrays

If you want to store a bunch of things, identifiers like `name1`, `name2`, `name3` and so on quickly become tiresome. **Arrays** are to the rescue!

Imagine an array like a list or a collection of variables, but instead of each variable having its own name, only the array has a name. So how do you access a variable inside, then? How do you read and write? Using an *index*!

An index is just a whole number, such as `0`, `1`, `2` and so forth. As in many areas of computing, indices in JavaScript arrays start with `0` --- so `0` is the index of the first element of an Array, `1` is the index of the second element, and so forth.

The syntax is to list the values separated by commas, inside square brackets:

```js
[value1, value2, value3]
```

You can store any type of value inside an array: strings, numbers, booleans. You can even store other arrays, or objects (which you will learn about next).

## Try it out

Defining an array as a variable looks something like this:

```js
var animals = ["tiger", "puppy", "snake", "llama"];
```

Pretty neat! Now you have all the animals grouped together rather than having to define them separately. You can see how many animals there are by using `.length`:

```js
console.log(animals.length);
```

If you want to refer to one specific member of the array, you can do so by using their "index number" like so.

```js
console.log(animals[1]);
```

Take a guess at which animal that will print out, and see if you're right.

Spoiler alert, it will print out "puppy". That might seem weird, until you learn that JavaScript is a "0-index" language. What that means is that counting in JavaScript starts at 0. So `animals[0]`will print out "tiger". We don't make the rules...

> **Exercise:** **Don't ask a mentor - Google it!**
How would you `console.log()` the name of every animal in the array?
If you're thinking a for loop, you're right. This is the perfect opportunity to use our newfound for loop skills for a higher purpose.
Try googling to find the answer if you're stuck. Google skills are an essential part of being a developer.


# Objects

Now for the final data type: objects. Like arrays, they can store multiple bits of information, except objects store the properties of something. For example, you might want to save the name, model and colour of a car. Or the name, time and location of a film playing at the cinema.

The syntax looks like this:

```js
{
  property1: "value1",
  property2: "value2",
  property3: "value3"
}
```

The names on the left ("property1") are known "keys". Any values can be given to them: strings, booleans, integers.

## Try it out

Let's define an object that represents a person:

```js
var person = {
  firstName: "Nelson",
  lastName: "Mandela",
  occupation: "freedom fighter",
  age: 95,
  alive: false
};
```

We can `console.log()` the entire object, but you can also reference just one of the properties. Run this code:

```js
console.log(person.firstName);
```

> **Exercise**
> Using an object representing a person, `console.log()` a sentence introducing the person. Print out the following:
>
> *"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."*
>
> Hint: you can construct longer strings by adding them together. This includes variables. For example:
>
>```js
>var name = "Jane";
>console.log("People call me " + name);
>
>// the previous line will print
>// "People call me Jane"
>```



# Resources


# Homework

4. **Research:**

## Prepare for the next class
1. Look over the MDN page on arrays and try to understand some of the methods arrays have (you can read up to the part on "Creating an array using the result of a match"): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

2. Watch the following video on "Value type vs. reference type": https://www.youtube.com/watch?v=mh-hPzDfb_Q .
If it makes sense, great! If not, don't worry, we'll be going over the same topic next week and discuss it until it makes sense.

3. Watch the following videos on the `.map` and `.filter` array operators:
- Map: https://www.youtube.com/watch?v=bCqtb-Z5YGQ
- Filter: https://www.youtube.com/watch?v=BMUiFMZr7vk

Again, don't worry if nothing makes sense. If you don't understand something, you can Google for more information, and if it still doesn't make sense, we'll be going through these topics next week!

4. Look over these examples for interacting with the DOM using JavaScript. We'll discuss these in more detail next week, but try to make an idea of the different API methods and what they do. [DOM Examples](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples)
