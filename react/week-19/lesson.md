# React 1

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

**What will we learn today?**

- [What is React?](#what-is-react)
- [What is a component?](#what-is-a-component)
- [Rendering with React](#rendering-with-react)
- [JSX](#jsx)
- [Let's Create a React App](#lets-create-a-react-app)
- [React Components](#react-components)
- [Embedding JS into JSX](#embedding-js-into-jsx)
- [Importing/Exporting Components](#importingexporting-components)
- [Making an Argument for Props](#making-an-argument-for-props)
- [What Are Props?](#what-are-props)

## What is React?

React is a JavaScript library created by Facebook. It is used for making complex, interactive user interfaces. It has become very popular in the last 5 years.

Why has it become so popular?

- It is fast and efficient
- It is easy to understand & less verbose than "vanilla" JS api
- It helps separate functionality into small, understandable pieces

## What is a component?

React heavily relies on a concept called "components". Components are like small Lego blocks for designing and developing user interfaces. They can be stuck together in different ways to create new UI.

Let's have a look at an example: the GitHub header. What are the logical "pieces" of UI? What could be a component?

![GitHub header](../assets/components.png)

Here we've highlighted some elements that could be components:

![GitHub header with components highlighted](../assets/components-highlighted.png)

### Component tips

There are no hard & fast rules for making components. UIs can be split up into components in many different ways, requiring judgement based on your context.

- Components should follow the Single Responsibility Principle
  + Each component should only have 1 "responsibility"
  + Should only do 1 thing
- Components should have good, explicit names
  + This helps you to remember what the component's job is

> **Exercise**:
> Look at the example online shopping user interface in the [Thinking in React article](https://reactjs.org/docs/thinking-in-react.html) (the image at the top). Draw boxes around the components and give them names. Compare with the example components shown in the second image.

## Rendering with React

Remember how annoying it was to manage the DOM yourself in [our previous lesson](https://codeyourfuture.github.io/syllabus-master/js-core-2/week-08/lesson.html)? The "vanilla" JavaScript APIs for updating the DOM are quite long and difficult to remember. React makes this easier by manipulating each DOM element itself, instead of you doing it manually. You give React a "description" of the DOM that you want and it will update the DOM for you. React *abstracts* away the management of the DOM.

Let's take a look at an example. We are going to walk through how to render a `<div>` with the text "Hello World" within it.

First, lets recap how we could do this using "vanilla" JS ([interactive version](http://jsbin.com/motorexehu/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<div id="root"></div>

<script type="text/javascript">
  var divNode = document.createElement('div');
  var textNode = document.createTextNode('Hello World');
  divNode.appendChild(textNode);

  var rootElement = document.getElementById('root');
  rootElement.appendChild(divNode);
</script>
</body>
</html>
```

Now let's convert to using React ([interactive version](http://jsbin.com/recegadexu/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<!-- Load React & ReactDOM scripts -->
<!-- Don't worry about how we're doing this yet! -->
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>

<!-- Root element -->
<div id="root"></div>

<script type="text/javascript">
  const element = React.createElement('div', {
    children: 'Hello World'
  })

  const rootElement = document.getElementById('root')
  ReactDOM.render(element, rootElement)
</script>
</body>
</html>
```

## JSX

As you can see, React is already helping us a bit by cleaning up some of the verbose vanilla JS APIs. However in a typical React application you would still use a *lot* of the `React.createElement` function. To improve the developer experience the React team developed **JSX**.

JSX is a simple syntax *sugar* that looks like HTML, but is actually converted to the `React.createElement` function when you run it.

Using JSX ([interactive version](http://jsbin.com/gekahexige/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
<!-- Add Babel script, which compiles JSX to React.createElement -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

<div id="root"></div>

<script type="text/babel">
  const element = <div>Hello World</div>

  const rootElement = document.getElementById('root')
  ReactDOM.render(element, rootElement)
</script>

</body>
</html>
```

As you can see, this is much easier to read than both the straight `React.createElement` API and the vanilla JS API. Most people using React use JSX to write their components.

> **Exercises**
> 1. Change the [JSX example from above](http://jsbin.com/gekahexige/edit?html,output) to instead render a `h1` with an id of `"main-header"` and the text "Hello Ali"
> 2. Visit the [Babel REPL](https://babeljs.io/repl/) and copy/paste the `h1` that you just created

## Let's Create A React App

The Facebook team behind React have created a tool to help you create and set up React projects. It is called [Create React App](https://github.com/facebook/create-react-app). It sets up files like we saw in the previous example, so that you don't have to.

> **Exercise**: Install & set up a Create React App by following the steps below

```
npm install -g create-react-app

create-react-app pokedex
cd pokedex
npm start
```

The last command should open a web browser for you. This shows the application that we are going to be working on. Open the `pokedex` directory in your editor. Notice that create-react-app has created a bunch of folders for you. We will be working with the `pokedex` application for the rest of the module.

## React Components

We looked at the beginning of the lesson at the concept of components. Now let's look at how components are made in React.

```js
import React from 'react'
import ReactDOM from 'react-dom'

function HelloWorld() {
  return (
    <div>Hello World</div>
  )
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
```

There are 3 important parts in this code:

1. First we import `React`. This is important because JSX is converted to `React.createElement` calls. If the `React` variable is undefined then this will fail
2. We create a React component called `HelloWorld`
3. We *render* the `HelloWorld` component into a `div` with the id of `root`

> **Exercise**:
> Using the `pokedex` React app that you just created and open the `src/App.js` file
> 1. Delete everything in the file except the line containing `export default App`. You should see an error in your terminal and in your web browser - don't panic! We're going to remake the `App` component ourselves
> 2. Import React variable from the React package
> 3. Create a function named `App`, which will be our component
> 4. Within the `App` function, return a `<h1>` element with the text "Welcome to the Pokedex". What do you see in your web browser?
> 5. Create a `<div>` element that *wraps around* the `<h1>` you just created
> 6. Below the `<h1>` element (but within the `<div>`), create an `<img>` element. Then make its `src` attribute equal to `https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png`. What do you expect to see in your web browser?
> 5. Now create a `<header>` element to wrap both the `<h1>` element **and** the `<img>` element

#### Component Composition

A component can be combined with another component so that both are rendered. This is sometimes called *composition* ([interactive example](https://codesandbox.io/s/0x4wonqn00)):

```js
function Greeting() {
  return (
    <span>Hello</span>
  )
}

function Mentor() {
  return (
    <span>Ali</span>
  )
}

function HelloWorld() {
  return (
    <div>
      <Greeting />
      <Mentor />
    </div>
  )
}
```

In the `HelloWorld` component we are using a reference to the `Greeting` and `Mentor` components. React reads these references when rendering `HelloWorld` and so it renders the `Greeting` and `Mentor` *child* components.

We are also using some shorter syntax within the `HelloWorld` component. `<Greeting />` is just a shorter way of writing `<Greeting></Greeting>`, which is useful if we don't need to put anything inside the `Greeting` component.

Notice how the components that we write (`HelloWorld`, `Greeting`, `Mentor`) are `CamelCased` and always start with an uppercase letter? And "regular DOM" components (`div`, `span`) are always lowercase? This the convention to let you know whether you are using a "regular DOM component" or something that you have written.

> **Exercise**:
> Using the `pokedex` React app that you created earlier and open the `src/App.js` file
> 1. Create a new function named `Logo`
> 2. Copy `<header>` element and its contents and paste into the `Logo` component
> 3. Replace the `<header>` element in the `App` component with the new `Logo` component
> 4. Create a new component function named `BestPokemon` and return a `<p>` element with some text saying which is your favourite Pokemon (e.g. "My favourite Pokemon is Squirtle")
> 5. *Render* your new `BestPokemon` component below the `Logo` component within the `App` component

#### Arrow Functions for shorter syntax

Because a React component is just a function, we can also use the arrow function syntax:

```js
const HelloWorld = () => {
  return (
    <div>Hello World</div>
  )
}
```

This can be even shorter again if we use parentheses and implicit return:

```js
const HelloWorld = () => (
  <div>Hello World</div>
)
```

Although this is shorter, it is less flexible as we cannot insert code that is **not** JSX. Like for example, a `console.log`:

```js
// This DOES NOT work!
const HelloWorld = () => (
  console.log('Hello!')
  <div>Hello world</div>
)
```

If we want to do this, we can still use arrow functions but we can't use the implicit return.

> **Exercise**:
> Using the `pokedex` React app that you created earlier and open the `src/App.js` file
> Convert the `Logo` and `BestPokemon` functions into an arrow functions

## Embedding JS into JSX

So far all of the components we have looked at haven't been able to change - they are *hard-coded*. But this doesn't make very interesting websites, we want to be able to use variables with different data. We can insert variables (and some other things) into our React components.

Anything that is inside curly braces (`{` and `}`) is interpreted as a regular JavaScript *expression*. That means you can use every object or function from JavaScript that we have learned so far. Let's look at an example ([interactive example](https://codesandbox.io/s/l910pqnjql)):

```js
const Greeting = () => {
  const greetingWord = 'Hello'
  return (
    <span>{greetingWord}</span>
  )
}
```
Now instead of hard-coding the greeting in the `Greeting` component, we are using a variable. Remember that everything between the curly braces is just regular JavaScript. So we can use more than just variables ([interactive example](https://codesandbox.io/s/nw29kzx744)):

```js
const Mentor = () => {
  const mentors = ['Ali', 'Kash', 'Davide', 'German', 'Gerald']
  return (
    <span>{mentors.join(', ')}</span>
  )
}
```

Now we have modified the `Mentor` component to use the `Array.join` method so that it lists several mentor's names. This also works with other JS types:

```js
<span>{1 + 2 + 3}</span>
```

```js
const weather = {
  temperature: 5,
  location: 'London'
}
<p>The temperature in {weather.location} is {weather.temperature}</p>
```

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}
<span>{formatName(user)}</span>
```

A common pattern in React is to use `Array.map` to loop through a list of items and render a component for each one ([interactive example](https://codesandbox.io/s/7mw0mw3qx0)):

```js
const mentors = ['Ali', 'Kash', 'Davide', 'German', 'Gerald']

const List = () => (
  <ul>
    {mentors.map((name) => {
      return (
        <li>{name}</li>
      )
    })}
  </ul>
)
```

Here we are using `Array.map` to turn an array of strings into an array of components.

> **Exercise**:
> Using the `pokedex` React app that you created earlier and open the `src/App.js` file
> 1. Inside the `Logo` component create a new variable called `appName` and assign it to `"Pokedex"`
> 2. Now replace the hard-coded app name with `{appName}`. What do you see in your web browser? What would you do if you wanted to change the app name?
> 3. Create a new component named `CaughtPokemon`. Within this component return a `<p>` with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step)
> 4. Create a variable named `date` within the `CaughtPokemon` component, and assign it today's date (hint: `new Date().toLocaleDateString()`). Finally, render the `date` variable after the text
> 5. Render the `CaughtPokemon` component within the `App` component (below `BestPokemon`)
> 6. Within the `BestPokemon` component, create a variable named `pokemonNames` and assign it to an array with some Pokemon names (e.g. `['Squirtle', 'Bulbasaur', 'Charmander']`)
> 7. Change the `BestPokemon` component to return a `<ul>` element instead of a `<p>` element
> 8. Now use the `.map()` method on the `pokemonNames` variable to loop over each name and return a `<li>` element for each (hint: look at the mentors list example above)

## Keys

You may have noticed that we are now seeing a red error message in the Dev Tools: `Warning: Each child in a list should have a unique "key" prop.`. This error happens when you use `Array.map` to return a list of elements ([interactive example](https://codesandbox.io/s/pwp8ox4kn0)):

```js
const mentors = ['Ali', 'Kash', 'Davide', 'German', 'Gerald']

const List = () => (
  <ul>
    {mentors.map((name, index) => {
      return (
        <li key={index}>{name}</li>
      )
    })}
  </ul>
)
```

Here we're added a `key` prop the to element. A documentation page explaining in more depth is in the further reading section, but in brief, the `key` prop has has special meaning in React because it is used internally to keep track of which element is which.

## Importing/Exporting Components

To help organise your code, components can be imported and exported just like any other JavaScript code ([interactive example](https://codesandbox.io/s/1z6xozl81l)):

```js
import Greeting from './Greeting'
import Mentor from './Mentor'

const HelloMentor = () => (
  <div>
    <Greeting />
    <Mentor />
  </div>
)
```

We also need to export our components if we want to use them in other files:

```js
const Greeting = () => (
  <div>Hello</div>
)

export default Greeting
```

The convention is to name component files the exactly same as the component (including the capital letter).

> **Exercise**:
> Using the `pokedex` React app that you created earlier
> 1. Create a new file within the `src` directory named `Logo.js`
> 2. Copy and paste the `Logo` component from `App.js` into `Logo.js`
> 3. Remember to add `import React from 'react'` at the top of `Logo.js`
> 4. Export the `Logo` component from `Logo.js` (hint: look at the `Greeting` example above)
> 5. Delete the old `Logo` component from `App.js`
> 6. Import the `Logo` component into `App.js` (hint: look at the `HelloMentor` example above)
> 7. Repeat this process with the `BestPokemon` and `CaughtPokemon` components. What do you think the files should be called?

## Making an Argument for Props

What's the problem with our `HelloMentor` component above? Hint: imagine what our boss might ask for with this small application. What could our boss ask for which would mean we would have to make changes to the code?

Our components are very inflexible. They cannot say hello to other mentors, and they can only say "hello", not "hi" or "greetings". If our boss changes their mind, for example if they wanted to say hello to a different mentor, we would have to to change the code too. This is easy in our tiny application but for "real" applications this might be more difficult.

Instead wouldn't it be good if we could change which mentor we are saying hello to every time we render the component? This is what *props* are for.

## What Are Props?

Props are what we use in React to pass "arguments" to components. They are very similar to arguments in functions - you can "pass" props to components, and you can use those props within a component.

First let's look at passing props to your components ([interactive example](https://codesandbox.io/s/vmjy0o91m7)):

```js
<Greeting greeting="Hi" />
```

As you can see props are key-value pairs, in this example the key is `greeting` and the value is the string `'Hi'`. We can pass as many props as we like to a component.

We don't have to use strings, we can use any valid JavaScript data like numbers, arrays and objects. Remember that in JSX you can use curly braces (`{` & `}`) to inject data that is not a string:

```js
<HotelRoom price={123}>
```

This is identical to the [Embedding JS into JSX section](../week-19/lesson.md#embedding-js-into-jsx) we looked at earlier.

Now let's take a look at using props that we have passed to a component ([interactive example](https://codesandbox.io/s/vmjy0o91m7)):

```js
const Greeting = (props) => {
  console.log(props)
  return (
    <span>{props.greeting}</span>
  )
}
```

React gives you access to props in the **first argument** to the component function. We can then inject props into our component using curly braces.

The `props` variable is an just a normal object with key-value pairs that match what was passed to the component. Because it is just a variable, it can be used like any other variable. That includes injecting props into attributes:

```js
<div id={'my-id-' + props.id}>{props.content}</div>
```

Or calculating new values:

```js
<div>{props.counter + 1}</div>
```

> **Exercise:**
> Using the `pokedex` React app that you created earlier
> 1. Open the `App.js` file
> 2. Pass a prop `appName="Pokedex"` to the `Logo` component
> 3. Now open the `Logo.js` file
> 4. Delete the `appName` variable. What do you see in your web browser? Why?
> 5. Change the `Logo` function to access the first argument and call it `props`. Use `console.log` to inspect the `props` variable
> 6. Change the usage of `appName` in the `<h1>` to be `props.appName` instead. Does this fix the problem? Why?
> 7. Now open the `BestPokemon.js` file
> 8. Copy the `pokemonNames` variable and then delete it
> 9. Paste the `pokemonNames` variable into `App.js`
> 10. Pass the `pokemonNames` variable as a prop to `BestPokemon`
> 11. In the `BestPokemon.js` file replace the existing usage of `pokemonNames` with the `pokemonNames` prop. You should still see the Pokemon names in your web browser
> 12. **(STRETCH GOAL)** Repeat the process with the `date` variable in the `CaughtPokemon.js` file

#### Credits

Inspiration & examples for this module were taken from [Kent C. Dodd's](https://twitter.com/kentcdodds) [Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) course.

# Homework

{% include "./homework.md" %}
