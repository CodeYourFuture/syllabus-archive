# React 2

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

**What will we learn today?**

- [React 2](#react-2)
  - [Recap](#recap)
  - [Class Components](#class-components)
    - [Class Methods](#class-methods)
  - [Passing Functions as Props](#passing-functions-as-props)
  - [Reacting to Changes](#reacting-to-changes)
  - [State](#state)
    - [When do you use Props or State?](#when-do-you-use-props-or-state)
    - [Container components](#container-components)
  - [React Hooks](#react-hooks)
    - [What are hooks?](#what-are-hooks)
    - [Why React hooks, over Class component state and methods?](#why-react-hooks-over-class-component-state-and-methods)
    - [Counter Example - with hooks](#counter-example---with-hooks)
    - [Setting multiple states](#setting-multiple-states)
  - [Fetching data in React](#fetching-data-in-react)
    - [The `useEffect` hook](#the-useeffect-hook)
  - [Further Reading](#further-reading)
- [Homework](#homework)

---

{% include "./learning-objectives.md" %}

---

## Recap

Last week we looked at how to write a `HelloMentor` React component ([interactive example](https://codesandbox.io/s/7zvk9n1950)):

```js
// Greeting.js
const Greeting = () => (
  <span>Hello</span>
);

// Mentor.js
const Mentor = (props) => (
  <span>{props.name}</span>
);

// index.js
import Greeting from './Greeting';
import Mentor from './Mentor';

const HelloMentor = () => (
  <div>
    <Greeting />
    <Mentor name="Ali" />
  </div>
);
```

## Handling events

So far we have only looked at React apps that are "static": they don't respond to user input. This week we will look at making our apps *dynamic*.

### Recap: First Class Functions in JavaScript

Before we look more at React we need to recap a concept in JavaScript. You may remember that functions in JavaScript are "first class" - that means we can pass a *reference* to a function (as a variable) and then call it elsewhere. Let's look at an example ([interactive example](https://jsbin.com/xudukezaje/edit?js,console)):

```js
function hello() {
  return "Hello!";
}

console.log(hello);   // Logs: "ƒ hello() {}"
console.log(hello()); // Logs: "Hello!"
```

In the example above `hello` is a **reference** to a function. In the first `console.log` we log out the whole function. The function is **not called** until we use parentheses (`()`), so we only log the string `"Hello!"` in the second `console.log`.

This is a really important and useful in React, as we can make a function and pass it to React so that it can call it when a user interacts with our app.

### Event Handlers in Components

In previous lessons we learned how to attach event listeners with `addEventListener`:

```js
// Create an event handler
function logWhenClicked() {
  console.log('buttonElement was clicked!')
}

// Listen for events and call the event handler when triggered
buttonElement.addEventListener('click', logWhenClicked)
```

We still need to listen events in React, but event handlers are set up in a slightly different way ([interactive example](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)):

```js
function ClickLogger() {
  function logWhenClicked() {
    console.log("Button was clicked!")
  }

  return <button onClick={logWhenClicked}>Click me!</button>
}
```

You might find it a little strange that we have a function inside a function. But this is a normal thing to do in JavaScript! `logWhenClicked` is within the *scope* of our `ClickLogger` component.

Every element in React has some special props that start with `on` that can be assigned to a function which will be called when the event is triggered. In this example we are using `onClick`, but we'll also see `onSubmit` later in the module. A full list of special event handler props is available [here](https://reactjs.org/docs/events.html#reference).

Just like with `addEventListener` we pass the function reference to `onClick` instead of calling the function. Think of it like this: we give the function to React, so that React can call our function when the element is clicked.

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application from last week and open the `Logo.js` file. |
| 2. Add a function named `logWhenClicked` within the `Logo` component. (Hint: look at the example above). |
| 3. In the `logWhenClicked` function, `console.log` a message (it doesn't matter what the message is). |
| 4. Add an `onClick` handler to the `<img>` that will call `logWhenClicked`. (Hint: look at the `ClickLogger` component above). |
| 5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console? |
| 6. In a group of 2 - 3 students, discuss what would happen if you changed your code to `onClick={logWhenClicked()}`. Can you explain why? |
| 7. Report your discussion back to the rest of the class. |

### Passing Functions as Props

Sometimes we need to pass a function to another component as a prop, so that it can handle the event.

A common example for this is a Button component. This component adds some styling to a normal `<button>`, but still needs to be able to pass an event handler function to `onClick`. Let's look at an example ([interactive example](https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js)):

```js
const ClickLoggerApp = () => {
  function logWhenClicked() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <FancyButton handleClick={logWhenClicked} />
      <p>Then look in the console.</p>
    </div>
  );
};

const FancyButton = props => (
  <button className="my-fancy-classname" onClick={props.handleClick}>
    Click Me!
  </button>
);
```

Notice how this is very similar to the example above where we created the handler and used it in the same component? The only difference here is that we are passing the function reference through a prop. We could even pass it through multiple components as props.

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application and open the `Logo.js` file. |
| 2. Copy and paste the `logWhenClicked` function from the `Logo` component to the `App` component. |
| 3. Pass the `logWhenClicked` function **reference** as a prop to the `Logo` component. (Hint: look at the `ClickLoggerApp` component above for an example). |
| 4. In the `Logo` component change the `onClick` prop so that it passes `props.handleClick`. (Hint: look at the `FancyButton` component above for an example). |
| 5. In a group of 2 - 3 students, discuss what you think will happen when you click the logo image now. Can you explain why? |
| 6. Report back to the rest of the class what you thought was going to happen and why. |

## Reacting to Changes

Now let's write a more interesting app that responds to some user input. We'll see how React will take care of updating the DOM for you.

A counter is a common React example, showing the number of times a button has been clicked. First lets render a button and a counter which set to 0 clicks ([interactive example](https://codesandbox.io/s/voqzrx5ny)):

```js
let count = 0;

const Counter = (props) => (
  <div>
    Count: {props.count}
    <button id="click-me">Click me!</button>
  </div>
);

function renderCounter() {
  ReactDOM.render(<Counter count={count} />, document.getElementById('root'));
}

renderCounter(count);
```

Note that this example is simplified compared to your `pokedex` application. To keep the code clean, some parts are split into separate files. In the `pokedex` application, you'll find the `ReactDOM.render` call in `index.js`.

This example isn't very useful yet as it doesn't do anything when clicking the button. Now let's listen for clicks on the button and increment the counter ([interactive version](https://codesandbox.io/s/llow115pll)):

```js
let count = 0;

class Counter extends Component {
  // ...
}
function renderCounter(count) {
  // ...
}

renderCounter(count);

document.getElementById('click-me').addEventListener('click', () => {
  count = count + 1
  renderCounter(count)
})
```

As you can see, the DOM automatically updates when you render. This is an incredibly powerful feature of React. Even better, React will figure out exactly the right bits of the DOM that need to be changed. This makes it extremely efficient and fast. This is concept is called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html).

## State

Let's take another look at the the counter example. What if you wanted to create multiple counters on the same page? How would you add another counter?

You could add some more `count` global variables:

```js
let count1 = 0;
let count2 = 0;
let count3 = 0;
```

What might be the problem here?

- It's quite verbose
- It's hard to make sure that you're updating the correct counter
- It's stuck at 3 counters - to add more, we'd have to do more work

What other approaches can we take?

The solution that React provides for us is called *state*. It allows a component to "remember" some variables. Let's take a look at how we could rewrite the counter with React *state*.

Let's start over and get rid of the global variables. **Generally having global variables is a bad idea**, since it is very easy to create a bug which affects the whole application.

```js
const Counter = (props) => {
  return (
    <div>
      Count: {props.count}
      <button>Click me!</button>
    </div>
  )
};

ReactDOM.render(<Counter count={0} />, document.getElementById('root'));
```

Now we need to use one of the class component super powers - state. That means we'll have to convert our `Counter` component to use a class ([interactive example](https://codesandbox.io/s/pjlro5rop7)):

```js
class Counter extends Component {
  render() {
    return (
      <div>
        Count: {this.props.count}
        <button>Click me!</button>
      </div>
    );
  }
}
```

Next we'll change the component to use the count from `this.state` instead of `this.props` ([interactive example](https://codesandbox.io/s/42y7xqj700)):

```js
class Counter extends Component {
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button>Click me!</button>
      </div>
    );
  }
}
```

This code has a bug! `this.state` is initialised as an empty object, and so `this.state.count` is undefined. We need to initialise it from props. We can do this in the class constructor ([interactive example](https://codesandbox.io/s/1oyxx4lzz7)):

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  render() {
    // ...
  }
}
```

Now the counter component is "remembering" its count, however it is stuck at 0. Next we'll look at how we change what the component is remembering ([interactive example](https://codesandbox.io/s/n714vmyk5l)):

```js
class Counter extends Component {
  constructor(props) {
    // ...
  }

  increment = () => {
    this.setState({
      count: 1
    });
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increment}>Click me!</button>
      </div>
    );
  }
}
```

There's a couple of things happening here. We've added an click handler to the button, which will call the `increment` function when the button gets clicked. When the `increment` function is called, it calls `this.setState` function with the `count` set to 1.

`this.setState` is a special function provided by React's `Component`, and it is used to change what the component is "remembering". It will also tell React that the old value that is still shown in the DOM is outdated and needs to be updated. This will trigger React to re-render, like we did manually with the `renderCounter` function.

Now that we have refactored to use React state, we can easily add multiple counters ([interactive example](https://codesandbox.io/s/v8165mq503)):

```js
const App = () => {
  return (
    <div>
      <Counter count={0} />
      <Counter count={0} />
      <Counter count={0} />
    </div>
  );
};
```

This still isn't a particular useful application, because we can only still only count to 1! We need to change our `Counter` component so that it reads the previous state, then adds 1 onto that. We can do this by passing a callback function to `this.setState` ([interactive example](https://codesandbox.io/s/qxz27q9y4)):

```js
class Counter extends Component {
  constructor(props) {
    // ...
  }

  increment = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  }

  render() {
    // ...
  }
}
```

Now we can count up as many times as we like! 

So when do we need to use a callback function for `this.setState`? If we are computing the new state based on the old state, then we need to use a callback function. Otherwise we can just use an object. This is because React can 'delay' `this.setState` executing for performance reasons. By using a callback function, we ensure that we are computing the new state with the correct version of the old state and not an outdated one.

Let's recap what we've learnt about React state:

- State is one of the class component super powers - you must use a class component to use state
- We initialise state in the `constructor` method by assigning the `this.state` variable to an object with whatever initial state we want (e.g. `{ something: 'hello' }`)
- We can read or render state by using the `this.state` variable (e.g. `this.state.something`)
- We can change state using the `this.setState()` method and by passing the piece of state we want to update (e.g. `this.setState({ something: 'hi' })`)
- If we need to read the previous state to be able to calculate the new state, then we must use a callback function with `this.setState()` (e.g. `this.setState((previousState) => { return { something: previousState.something + 1 } })`)

> **Exercise D**
> Open the `pokedex` React application and open the `CaughtPokemon.js` file
>
> 1. Add a `constructor` method to the `CaughtPokemon` component and remember to handle `props` correctly (hint: `super(props)`)
> 2. Set the initial state by assigning `this.state` in the `constructor` method to an object. Then make the initial state have 0 `caughtPokemon`
> 3. Change the `CaughtPokemon` component to render `this.state.caughtPokemon` instead of hard-coding 0. Do you expect anything to have changed in your web browser?
> 4. Add a `<button>` with the text "Catch Pokemon" to the `CaughtPokemon` component
> 5. Create an `catchPokemon` method within the `CaughtPokemon` class
> 6. Add a `onClick` handler to the `<button>` we just created that will call the `catchPokemon` method
> 7. Within the `catchPokemon` method, use `this.setState()` to change `caughtPokemon` to 1
> 8. Update the `catchPokemon` method to increase the number of `caughtPokemon` by 1 every time the button is clicked (hint: we need to use the previous state to calculate the new state)

### When do you use Props or State?

We've looked at the 2 main ways of managing data in our React components. But when should we use props and when should we use state?

Remember that props are like "arguments" to a component. It's good practice to make sure that you don't modify arguments after you receive them. In fact, React makes it impossible to modify (or *mutate*) props. Let's have a look at an example ([interactive example](https://codesandbox.io/s/9wl90npk4)):

```js
class Hello extends Component {
  render() {
    this.props.name = 'Ali';

    return (
      <p>Hello {this.props.name}</p>
    );
  }
}

render(<Hello name="Mona" />, document.getElementById('root'));
```

You'll see that we get an error. This is because React has made props *read-only*, which is a reminder to you that we shouldn't change props. If we were allowed to change props, React doesn't have a way of telling that you've changed the data. Our UI is now *stale* - not up-to-date with the latest data - and has no way of knowing that it has to re-render.

From this we can get a clue about when to use state. If data *changes over time*, then we need to use state. My rule of thumb is that I always use props until I know that it needs to change over time, then I convert it to state. As you get more experience with React, you'll know sooner what should be props and what should be state.

### Container components

In real world applications, the things we want to remember in state follow the *business logic* required by our users. So for example the number of caught Pokemon in the exercise  increases when you click on the button *Catch Pokemon*. Most of the time, business logic is about figuring out when and how to change state.

To help us cleanly split up code that performs business logic from code that shows the user interface we split components into *presentational* and *container* components. Often we have components that don't do anything except manage state according to the business rules and render the right presentational components. On the other hand, we often have components that don't change any state, and just render using the provided props.

Container components usually have some state and handler methods. Because of this they must use the `class` syntax. Presentational components on the other hand don't require the more verbose syntax. Instead they usually use the functional syntax.

## React Hooks

React is continously updated with features all the time, one that stands out the most are **React Hooks**, released in React v16.8.

### What are hooks?

**Hooks** are functions that enable you manipulate the React state (and other lifecycle features, which you will be learning next week).

### Why React hooks, over Class component state and methods?

- Code is less complex - being able to make your code more readable in the long term, make it more maintainable
- Hooks are reusable - unlike methods that scoped within in a class components, you are able to create your own and reuse them elsewhere you in the code. Keeping your code DRY (Don't Repeat Yourself)


### Counter Example - with hooks

```js
import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, `useState` is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the current state i.e. `count` and a function that lets you update it i.e. `setCount`.

Note that variable `count` and function `setCount` come from destructured arrays (a JavaScript feature). The initial value of count is `0` and whenever we press on the button, it will fire the setCount function to increment by 1.

### Setting multiple states

```js
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(0);
  const [fruit, setFruit] = useState('Oranges');
  
  return (
    <div>
      <p> Hi! I am Alex </p>
      <p> {`I am ${age} years old`} </p>
      <p> {`I prefer to eat ${fruit}`} </p>      
      <button onClick={() => setAge(age + 1)}>Add 1 year</button>
      <button onClick={() => setFruit('Apples')}>Change to Apples</button>
    </div>
  )
}
```

Notice that as before the initial state to a value inside `useState` in this case we have `0` and `Oranges`, with value `0` has the same behaviour as the counter example before. With value `Oranges`, it can turned into the value `Apple`. Stick to using the same data type, as it is best practice.

## Fetching data in React

Often when you create a React app, you will want to get data from an API, and display it inside your components.
How do we do this in React? Where does the API call go, and when should we trigger it?

**Where:** Usually in a parent component, at the top of the component tree (see the note about 'container' components above). You can then flow the data down into your child components as props.
**When:** When the component is first loaded into the DOM. We call this 'mounting'.
**How:** With a handy new hook called `useEffect`.

### The `useEffect` hook

Just like `useState`, the `useEffect` hook is a special function that all function components can import and use as needed. This is the syntax to follow to fetch data when the component is first mounted:

```js
useEffect(() => {
  // Make your API call here
}, []); // Don't forget the empty array here!
```

And here is a more complete example:

```js
import React, { useState, useEffect } from 'react'; // remember to import the hook(s) you need!

const MartianPhotoFetcher = () => {
  const [marsPhotos, setMarsPhotos] = useState();

  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`)
      .then(res => res.json())
      .then(data => setMarsPhotos(data));
    });
  });

  return (
    <div>
      // TODO: update this example
    </div>
  );
};

export default MartianPhotoFetcher;
```

In the code above, we're saying to React “When this component is mounted, call the NASA photos API, and when you receive a response, save it inside of the 'marsPhotos' state”.

This is a very common pattern which will come in very useful!

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application again and open the `src/BestPokemon.js` file. |
| 2. Create a new component called `BestPokemonFetcher`. |
| 3. Change the `export default` to export `BestPokemonFetcher` instead of `BestPokemon`. We **don't** need to make any changes to the `BestPokemon` component. |
| 4. In the new `BestPokemonFetcher` component, create a new state variable called `pokemon` and initialise it to `null`. <details><summary>Click here if you are stuck.</summary>Look at the State section to see how to create state variables.</details> |
| 5. If there is no `pokemon` state (hint: `if (!pokemon) {}`), then return `null` so that the component renders nothing. |
| 6. If there is some `pokemon` state (`else {}`), then render the `BestPokemon` component and pass the `pokemon` state variable as the `pokemon` prop (hint: `<BestPokemon pokemon={pokemon} />`). |
| 7. Now add a `useEffect` to the `BestPokemonFetcher` component. Make sure you remember to add the empty array after the callback function. <details><summary>Click here if you are stuck.</summary>Look at the examples above to see how to add <code>useEffect</code>.</details> |
| 8. Inside the `useEffect` callback, call the `fetch` function with this URL: `https://pokeapi.co/api/v2/pokemon/1/`. |
| 9. Add a `.then` handler into the `fetch` function (remember this needs to come immediately after the `fetch` call) which converts the response from JSON (hint: `.then(res => res.json())`). |
| 10. Add a second `.then` handler after the one we just added, where the callback function will receive an argument called `data`. |
| 11. Within the second `.then` callback function, log out the data that we just received (hint: `console.log(data)`). Inspect the data in the dev tools console. Can you see any interesting values? (Hint: think about what the `BestPokemon` component expects as a prop) |
| 12. Still within the second `.then` callback function, update the `pokemon` state variable. <details><summary>Click here is you are stuck.</summary>:ppl at the State section again to see how to set state variables to new values.</details> |
| 13. What happens in your browser? Do you understand why? If not, discuss it with another student. If you are both stuck, ask a Teaching Assistant. |

## Further Reading

What happens if you forget to pass a prop to a component? Or if you pass the wrong type of data to a component? Sometimes React will just render an empty element but sometimes it could throw an error! This is why `propTypes` are useful. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html) describes how to use `propTypes` in more detail.

> **Exercise E**
> Complete the FreeCodeCamp [exercise](https://learn.freecodecamp.org/front-end-libraries/react/) on `propTypes`:
>
> 1. [Use PropTypes to Define the Props You Expect](https://learn.freecodecamp.org/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect/)

# Homework

{% include "./homework.md" %}
