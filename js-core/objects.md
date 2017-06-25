# Objects

Like arrays objects can store multiple bits of information, except objects store the properties of something. For example, you might want to save the name, model and colour of a car. Or the name, time and location of a film playing at the cinema.

There are several ways to write objects. Object literals (literal notation) look like this:

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

## Object Constructors

We can also use the object constructor syntax to make a new object. It looks like this:

```js
function Book(name, year) {
  this.name = name;
  this.year = '(' + year + ')';
}

# Resources
1. [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
