# React 1

![](https://img.shields.io/badge/status-draft-darkred.svg)

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

Let's have a look at an example: the GitHub header. What are logical "pieces" of UI? What could be a component?

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

Remember how annoying it was to manage the DOM yourself in [week 8](https://codeyourfuture.github.io/syllabus-master/js-core-2/week-08/lesson.html)? The "vanilla" JavaScript apis for updating the DOM are quite long and difficult to remember. React makes this easier by manipulating each DOM element itself, instead of you doing it manually. You give React a "description" of the DOM that you want and it will update the DOM for you. React "abstracts" away the management of the DOM.

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

JSX is a simple syntax "sugar" that *looks* like HTML, but is actually converted to the `React.createElement` function when you run it.

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
> 2. Visit the [Babel REPL](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=DwEwlgbgfAEgpgGwQewAQHVkCcEmAenGiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=) and copy/paste the `h1` that you just created

## Let's Create A React App

The Facebook team behind React have created a tool to help you create and set up React projects. It is called [Create React App](https://github.com/facebook/create-react-app). We will use it for the rest of the module.

> **Exercise**: Install & set up a Create React App by following the steps below

```
npm install -g create-react-app

create-react-app my-hotel
cd my-hotel/
npm start
```

Notice that create-react-app has created a bunch of folders for you in the `my-hotel` directory.

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

#### Component Composition

Components get more powerful when you combine (or "compose") several components together ([interactive example](https://stackblitz.com/edit/react-nxhe2q)):

```js
const Greeting = () => (
  <span>Hello</span>
)
const Mentor = () => (
  <span>Ali</span>
)

const HelloWorld = () => (
  <div>
    <Greeting />
    <Mentor />
  </div>
)
```

Notice how the components that we write (`HelloWorld`, `Greeting`, `Mentor`) are `CamelCased` and always start with an uppercase letter? And "regular DOM" components (`div`, `span`) are always lowercase? This the convention to let you know whether you are using a "regular DOM component" or something that you have written.

## Embedding JS into JSX

Like Handlebars, you can insert variables (and some other things) into React components. Anything that is inside curly braces (`{` and `}`) is interpreted as a regular JavaScript *expression*. That means you can use every object or function from JavaScript that we have learned so far. Let's look at an example ([interactive example](https://stackblitz.com/edit/react-byupse)):

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

A common pattern in React is to use `Array.map` to loop through a list of items and render a component for each one ([interactive example](https://stackblitz.com/edit/react-z51fpz)):

```js
const mentors = ['Ali', 'Kash', 'Davide', 'German', 'Gerald']

const List = () => (
  <ul>
    {mentors.map((name) => (
      <li>{name}</li>
    ))}
  </ul>
)
```

Here we are using `Array.map` to turn an array of strings into an array of components. We are using a "real" map function, not just special syntax like `{{> each}}` from Handlebars.

> **Exercise**:
> Using the `my-hotel` React app that you created earlier, edit `src/App.js` to create a hotel welcome page.
> 1. Change the title to say "Welcome to CYF Hotel" and change the `img` to have `src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"`
> 2. Copy the content of the `header` to a new component called `Logo`
> 3. Replace the `header` with a usage of the new `Logo` component
> 4. Replace the `p` with a message saying that there are bookings available for today's date (hint `new Date().toLocaleDateString()`)
> 5. Extract the `p` to a component named `BookingsMessage`
> 6. Create a new component `SpecialDeals` and render an empty `div`
> 7. Within the `SpecialDeals` components, use an array containing some special deal strings and render each one as a `<p>` within the `div`

## Importing/Exporting Components

To help organise your code, components can be imported and exported just like any other JavaScript code ([interactive example](https://stackblitz.com/edit/react-jnkuqk)):

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
> Using the `my-hotel` app, edit `src/App.js` to extract the `Logo`, `BookingsMessage` and `SpecialDeals` components to new files `src/Logo.js` and `src/SpecialDeals.js`
> Hint: you will need to import React

## Making an Argument for Props

What's the problem with our `HelloMentor` component above? Hint: imagine what our boss might ask for with this small application. What could our boss ask for which would mean we would have to make changes to the code?

Our components are very inflexible. They cannot say hello to other mentors, and they can only say "hello", not "hi" or "greetings". If our boss changes their mind, for example if they wanted to say hello to a different mentor, we would have to to change the code too. This is easy in our tiny application but for "real" applications this might be more difficult.

Instead wouldn't it be good if we could change which mentor we are saying hello to every time we render the component? This is what "props" are for.

## What Are Props?

Props are what we use in React to pass "arguments" to components. They are very similar to arguments in functions - you can "pass" props to components, and you can use those props in a component.

First let's look at passing props to your components ([interactive example](https://stackblitz.com/edit/react-k4upkw?file=index.js)):

```js
<Greeting greeting="Hi" />
```

As you can see props are key-value pairs, in this example the key is `greeting` and the value is the string `'Hi'`. We can pass as many props as we like to a component.

We don't have to use strings, we can use any valid JavaScript data like numbers, arrays and objects. Remember that in JSX you can use curly braces (`{` & `}`) to inject data that is not a string:

```js
<HotelRoom price={123}>
```

This is identical to the [Embedding JS into JSX section](../week-19/lesson.md#embedding-js-into-jsx) we looked at earlier.

Now let's take a look at using props that we have passed to a component ([interactive example](https://stackblitz.com/edit/react-k4upkw?file=Greeting.js)):

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

Or calculate new values:

```js
<div>{props.counter + 1}</div>
```

Components are just regular functions and props are just regular variables, so we can use destructuring to pull variables out of props. This can make our components even shorter:

```js
const Greeting = ({ greeting }) => (
  <span>{greeting}</span>
)
```

> **Exercise:**
> Open the `my-hotel` React application once again
> 1. Edit the `Logo` component so that the hotel name in the welcome message is passed as a prop
> 2. Edit the `SpecialDeals` component so that the array is passed as a prop

#### Credits

Inspiration & examples for this module were taken from [Kent C. Dodd's](https://twitter.com/kentcdodds) [Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) course on Egghead.io. It's a free course, so check it out :)

# Homework

{% include "./homework.md" %}
