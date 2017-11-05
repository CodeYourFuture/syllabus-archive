# JavaScript Core 2
<<<<<<< HEAD

**What will we learn today?**

- Arrays
- More Arrays methods
- Objects


=======

# Arrays

If you want to store a **bunch of things**, a **collection** or a **list** of things,  identifiers like `name1`, `name2`, `name3` and so on quickly become tiresome. **Arrays** are to the rescue!

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

> Take a guess at which animal that will print out, and see if you're right.

Spoiler alert, it will print out "puppy". That might seem weird, until you learn that JavaScript is a "0-index" language. What that means is that counting in JavaScript starts at 0. So `animals[0]`will print out "tiger". We don't make the rules...

> **Exercise:**
>
> 1. Create an array that contains the countries of all the students in the class (at least five nationalities)
> 2. `console.log` the number of countries in the Array
> 3. Now, `console.log()` each country in the list. Hint: **For loops**
>
> **Don't ask a mentor - Google it!** Try googling to find the answer if you're stuck. Google skills are an essential part of being a developer.


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


# Useful array methods

#### Concatenating two arrays

You've learned how you can add two numbers and append two strings, but how does this work for arrays? A simple `arr1 + arr2` will not do, but there is a method you can use: `concat()`. It is a method that you call on the array (similar to how `console.log` is the `log` function called on `console`) and takes the array you want to append as a parameter.

```js
var countries = ['Scotland', 'Germany', 'Syria'];
var moreCountries = ['Sudan', 'Ethiopia', 'France'];

countries.concat(moreCountries);
console.log(countries); // ['Scotland', 'Germany', 'Syria', 'Sudan', 'Ethiopia', 'France']
```

#### Appending an element

If you want to append an element to an array, you can just put it after the last existing element like so:

```js
countries[countries.length] = 'United States of America';
```

There is another way though, which is a bit more elegant: the `push` function.

```js
countries.push('United States of America');

// .push can also be called with multiple parameters
countries.push('United States of America', 'France');
>>>>>>> origin/scotland
```
Then, to make a new _instance_ of the object, we write:

<<<<<<< HEAD
```js
var firstBook = new Book("War and Peace", 1869);
var secondBook = new Book("Twilight", 2005);
```

> **Exercise**

> 1. Make an animal object using the object constructor syntax. The object should have key/value pairs for:
>
 - Name.
 - Family (mammal/reptile/bird etc)
 - Number of legs.
 - eatsMeat (_hint_: what data type can you use to represent a yes/no?)
 - sound

> Then make 5 new instances of the object with different animals.

> 2. A function within an object is called a _method_. Add a method to your animal object called `says`. When you `console.log(dog.says())`, the console should read, 'dog says woof'


# Resources
1. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
3. [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

# Homework
1. [The repo](https://github.com/Code-Your-Future/JS-Core-1-Exercises) that you have forked during the last class contains few challenges - solve them all in JavaScript. You should know all the needed information by now.

2. Complete [the Khan Academy course](https://www.khanacademy.org/computing/computer-programming/programming) if you haven't already. It will go through some of the basics that we covered in the class and beyond.

3. Complete the [Codecademy Learn JavaScript Path](https://www.codecademy.com/learn/learn-javascript) if you haven't already.

4. Alternatively you can watch week4 of [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers) tutorial. Highly recommended.

4. **Research:**

  Read these chapters from [JS: The Good parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf):

    - Chapter 9: Style - it's a short chapter, everyone start by reading that chapter.
    - ALL: Read the chapter about **Objects** (up to Reference)
    - Read the chapter about **Arrays**
    - Read the chapter about **Functions** up to the section about **Return**


  When reading always try the code snippets by yourself in Node. (change document.writeln to console.log)

  - Read this article on [Pair Programming](https://medium.com/@dickeyxxx/how-to-pair-program-d6741077e513)

  - Read this page on [Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes), a new feature in JavaScript introduced in ES6.


  Next class - we want you to do a presentation (including showing some code sample) for one of these concepts:

  - Switch Statements and Ternary Operators
  - Math methods in JavaScript
  - While loops (compare them to for Loops)
  - Array.slice and Array.splice
  - Array.map and Array.forEach
  - Array.find and Array.filter
  - Object classes.
  - ES6.
  - String.replace, String.search and other String methods
  - Object.keys (How to loop the properties of an object)
  - [Function arguments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments)
  - [Advanced] [Different ways of Creating objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects)
  - [Advanced] [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Inheritance)
  - [Advanced] [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)



  (Optional) Create an account on [Free Code Camp](https://www.freecodecamp.com/) and begin working through the exercises.


## Prepare for the next class

Look over these examples for interacting with the DOM using JavaScript. We'll discuss these in more detail next week, but try to make an idea of the different API methods and what they do. [DOM Examples](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples)
=======


## Prepare for the next class
1. Reserach **Unit Testing** (next time, know how to answer the question: **what is TDD?**)
>>>>>>> origin/scotland
