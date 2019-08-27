![Draft lesson](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core II - 1

**What we will learn today?**

* [Objects](#objects)
* [Objects Get and Set](#objects-get-and-set)
* [More complex objects](#more-complex-objects)
* [Object methods](#object-methods)
* [Arrays of Objects](#arrays-of-objects)
* [Object.Keys()](#objectkeys)
---

> Please make sure you're working on the [js-exercises repo](https://github.com/CodeYourFuture/js-exercises) **Week 4** during this class.

## Objects

Objects in the real world have properties that describe how they are unique. Your laptop, for example, has a brand (Lenovo/Apple etc.), a screen size (13/15 inch), RAM (8/16GB) etc.

How would we describe the above laptop as a JavaScript object?

```js
var laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};
```

Useful words to remember when talking about objects:
- **object literal**: anything that has a set of `{...}` around a set of properties is an object literal
- **property** or **key**: `brand`, `screenSize` and `isTouchScreen` are properties/keys of the object
- **values**: `"Lenovo"`, `13` and `true` are values of the object's properties

## Objects Get and Set

### Getting the value of an object's property

Let's take one of the objects we looked at earlier..

```js
var laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};
```

> Try to `console.log(laptop)`. The output might depend on your environment!

To find out the value of an object's property, you can use the dot notation..

```js
console.log(laptop.brand);
```

You can also use the bracket notation (although this is rarely used, it's good to know):

```js
console.log(laptop['brand']);
```

### Setting the value of a property

Similar to reading, if we want to set a property:

```js
laptop.brand = "Apple";
```

It's strongly recommended you always use the same **type** when re-assigning an object's property (if it was a string before, keep it a string - and so on).

```js
var laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};

// DON'T DO THIS
laptop.screenSize = "15 inch";

// OK TO DO
laptop.screenSize = 15;
```

## More Complex Objects
 Object properties can even be assigned other objects or variables too. The example below shows an object with keys that have been assigned a variable, an array, and an object.

```js
var kittenName = "Feathers";

var kitten = {
    name: kittenName,
    toyCollection: ['blue ball', 'green ball', 'hoover box'],
    favoriteLocation: {
        roomName: 'Living room',
        napPlace: 'window',
        idealTemperatureCelsius: 24
    }
};
```

## Object Methods

Besides having specific properties, objects in the real world can also do things. For example, a computer can display something on the screen, a person can say their names etc... In Javascript, we do this using 'methods'. A method is a function attached to a particular object. You have already used some predefined methods before, for example *toUpperCase()* on a string or *filter()* on an array.

```js
var athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    sayHi: function() {
        return "Hi everybody!";
    }
};
```

How do we call this method? 

```js
athlete.sayHi(); // returns "Hi everybody!"
```

An object method can also rely on the other properties of the object to do more complex calculation. To reference the current object in the body of the method, we will use the keyword *this*. Let's take an example.

```js
var athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    sayName: function() {
        return "My name is " + this.name;
    }
};

athlete.sayName(); // returns "My name is Usain Bolt"
```

Knowing this, you can have methods which modify existing properties of your object.

```js
var athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    winNewMedal: function() {
        this.goldMedals = this.goldMedals + 1;
    }
};

athlete.winNewMedal();
console.log(athelete.goldMedals); // prints "26"
```

As methods are just functions attached to objects, they can also take parameters.

```js
var athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    silverMedals: 7,
    winNewMedal: function(medal) {
        if (medal === "gold") {
            this.goldMedals = this.goldMedals + 1;
        } else {
            this.silverMedals = this.silverMedals + 1;
        }
    }
};

athlete.winNewMedal("silver");
console.log(athlete.goldMedals); // prints "25"
console.log(athlete.silverMedals); // prints "8"
```

## Arrays of objects

In the past weeks, you've learned about using arrays of numbers, arrays of string etc... In the following, we will learn how to use arrays of objects.

```js
var kitten1 = {
    name: 'Fluffy',
    weeksOld: 2
};

var kitten2 = {
    name: 'Megatron',
    weeksOld: 1
};

var kitten3 = {
    name: 'Billy',
    weeksOld: 5
};

var kittens = [kitten1, kitten2, kitten3];
```

You can also use all the functions for arrays that you learned before: find, some, every, filter, map, forEach... As an example, we want to filter all the kittens who are less than 3 weeks old:

```js
function isYoungerThan3Weeks(kitten) {
    return kitten.weeksOld <= 3;
}

kittens.filter(isYoungerThan3Weeks);    // returns [kitten1, kitten2];
```

What if we want to get an array of all the kitties names?

```js
function getName(kitten) {
    return kitten.name;
}

kittens.map(getName);   // returns ["Fluffy", "Megatron", "Billy"]
```
## Object.Keys()

Since we started JavaScript, we have used `console.log` to print things to our console.

In week 2 and 3, you learned about array methods like `.map()`, and `.filter()`.

These are what we call built-in methods, and they're part of the JavaScript language. Someone else created these methods, and we can use them in our code.

Like arrays, objects have built-in methods that can help us. In this lesson, we will learn about `Object.keys()`. This method goes into our object, and returns the object property names as an array.

Here is an example output for using `.keys()`:

```js
var footballClubs = {
  chelsea_fc: 'England',
  fc_barcelona: 'Spain',
  ac_milan: 'Italy'
};

console.log(Object.keys(footballClubs));
// prints [ 'chelsea_fc', 'fc_barcelona', 'ac_milan' ]
```

{% include "./homework.md" %}
