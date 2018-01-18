# Homework

## Challenges

Go back to [the repo](https://github.com/Code-Your-Future/JS-Core-1-Exercises)
that you have forked during the last class:

* If you haven't attempted all the week 1 base challenges, go back and work on 
 them!
* If you're all done, challenge yourself with the week 1 advanced challenges, 
 and the ones present in week 2.

## Code style and best practices

As you might have noticed, there are often several _valid_ ways to write the
same code.

For example we can define a string with either single or double:
quotes:

```js
var singleQuotes = 'Hello';
var doubleQuotes = "Hello";  // exactly the same as singleQuotes

// check if they're actually the same
singleQuotes == doubleQuotes  // true
```

Another example, on spacing and newlines:

```js
function sayHello() {
  return 'Hello world!';
}

// is the same as
function sayHello (){
  return 'Hello world!';
}

// or
function sayHello()
{
  return 'Hello world!';
}

// and even
function sayHello(){return 'Hello world!';}
```

While functionally the same, good developer are **consistent** in the way they
write their code.

Consistency and predictability in the _visual structure_ of the code won't
change the way the computer will execute the code, but will make it way easier
to maintain the code and spot bugs for both you and other programmers.

To this end, many organisation and people develop a set of _conventions_ ,
or **style guide** on how to structure their code. While often one option is not strictly 'better' than others, it is tremendously helpful if all the people
working on a project write in the same style.

To get some more insight on the argument, read these links:

* [https://www.smashingmagazine.com/2012/10/why-coding-style-matters/](https://www.smashingmagazine.com/2012/10/why-coding-style-matters/) dig a bit 
 more on the *why* a style guide is a good thing. The publishing date is old and 
 the resources are mostly outdated, but the article itself is still very good.
* [https://webdesign.tutsplus.com/articles/css-documentation-best-practices--cms-30139](https://webdesign.tutsplus.com/articles/css-documentation-best-practices--cms-30139) 
 a recent article by a UX designer sharing tips on how she organise her css.
* [https://github.com/airbnb/javascript/tree/es5-deprecated/es5](https://github.com/airbnb/javascript/tree/es5-deprecated/es5) and 
 [https://github.com/airbnb/css](https://github.com/airbnb/css), the official airbnb styleguides for JavaScript 
 and css. Two notes here: first, just skim these. Like a foreign language 
 dictionary, a beginner can have the most benefit using it as a reference rather 
 than memorising it in its entirety. Second: the 'es5' link is _deprecated_ as 
 airbnb uses 'es6', which is a version of JavaScript with new syntax which you 
 will learn in the future.
* [https://en.wiktionary.org/wiki/bikeshedding](https://en.wiktionary.org/wiki/bikeshedding). This is sometime mentioned to 
 refer to developer spending huge amount of time fighting on which style of code 
 is 'better'
* [bbc styleguide](https://www.bbc.co.uk/cbbc/styleguide). Styleguides are not only about code, 
 but they are used for book writing, communication, and design.

## Code Testing

The styleguide section introduced us to the concept of 'maintainability' of our
code, which is the ability of going back to it at a later date and change it,
improve it of fix bugs.

As a project's size grows and more people work on it, it becomes more and more
complicated, and it's increasingly difficult for developers, especially juniors,
to have a mental map of every single line of code. Every change on the codebase
risks breaking the functionality in unexpected ways leading to a never-ending
loop of bugs.

One of the ways to mitigate this is testing: in essence, writing extra code,
often with the aid of specialised tools, to validate the functionality of the
actual program.

This will be a subject in future lessons and there are several other good
reasons to implement testing in software, but for now do some research on the
topic. Here are some starting links:

* [youtube](https://www.youtube.com/watch?v=UZy1Dj9JIg4&feature=youtu.be&t=356) start at 
 6 minute mark. A high-level overview on testing in general
* [codeproject.com](https://www.codeproject.com/Tips/351122/What-is-software-testing-What-are-the-different-ty)
* Look up 'TDD' (Test Driven Development) and try to get a basic understanding 
 of what it entails.
