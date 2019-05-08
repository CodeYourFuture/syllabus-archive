# React 2

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

**What will we learn today?**

- [Recap](#recap)
- [Class Components](#class-components)
- [Passing Functions as Props](#passing-functions-as-props)
- [Reacting to Changes](#reacting-to-changes)
- [State](#state)

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

## Class Components

So far we have looked at components which are just functions (which are called *functional components*), but there is another way of creating React components using the `class` keyword. Let's look at an example ([interactive example](https://codesandbox.io/s/1zmoz1817j)):

```js
import React, { Component } from 'react';

// Class component
class Greeting extends Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

// Functional component
const Greeting = () => {
  return (
    <div>Hello</div>
  )
};
```

Instead of getting props through the first argument of the component function, the class component gets props from `this.props`:

```js
class Mentor extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}
```

So when do we use the `class` keyword and when do we use function components? Class components have special super powers called *state* and *lifecycle* (which we will look at later). The rule of thumb is to use functional components, unless you need to use the special super powers of *state* or *lifecycle*.

Here are the steps to follow to convert from a functional component into a class component:

1. Import the `Component` variable by changing the React import to: `import React, { Component } from 'react';`
2. Create a new `class` that extends the component: `class MyComponentName extends Component {}`
3. Inside the class, create a render method: `render() {}`
4. Copy and paste the contents of the functional component into the `render` method
5. Replace any references to `props` with `this.props`
6. Delete the old functional component

> **Exercise A**
> Open the `pokedex` React application that you created last week
> 1. Convert the `Logo` component from a functional component into a class component
> 2. Convert the `CaughtPokemon` component into a class component
> 3. Convert the `BestPokemon` component into a class component

### Class Methods

One of the super powers that class components have is how we can add more functions within the class scope. These are called *methods* ([interactive example](https://codesandbox.io/s/13omkro30j)):

```js
import React, { Component } from 'react';

class Hello extends Component {
  sayHello = () => {
    console.log('Hello from Hello component!');
  }

  render() {
    return (
      <button onClick={this.sayHello}>Say hello</button>
    );
  }
}
```

Notice how we use a slightly different syntax for the `sayHello` method than the `render` method? There is a reason for this, but it is quite complicated and mostly irrelevant. The rule of thumb is to always use this syntax:

```js
methodName = () => {
  // ...
}
```
**Except** for the `render` method (and a handful of others which we'll talk about later).

> **Exercise B**
> Open the `pokedex` React application and open the `Logo.js` file
> 1. Add a method named `logWhenClicked` to the `Logo` component (hint: remember to use the correct syntax)
> 2. Within the `logWhenClicked` method, `console.log` a message (it doesn't matter what the message is)
> 3. Add a `onClick` handler to the `<img>` that will call `this.logWhenClicked` (hint: look at the `Hello` component above)
> 4. In your web browser, try clicking on the image. What do you see in the JavaScript console?

## Passing Functions as Props

Remember that functions in JavaScript are "first class" - that means we can pass a *reference* to a function (as a variable) and then call it elsewhere.

```js
function hello() {
  return 'Hello!';
}
```

In the example above `hello` is a *reference* to a function. The functions are not called until we use parentheses:

```js
console.log(hello);   // Logs: "ƒ hello() {}"
console.log(hello()); // Logs: "Hello!"
```

This is important in React as we can pass the reference to the function as a prop, and then call the function from the child component ([interactive example](https://codesandbox.io/s/zqlnmo16y3)):

```js
class App extends Component {
  logWhenClicked = () => {
    console.log('Button was clicked!');
  }

  render() {
    return (
      <div>
        <FancyButton handleClick={this.logWhenClicked} />
      </div>
    );
  }
}

const FancyButton = (props) => (
  <button
    className="my-fancy-classname"
    onClick={props.handleClick}
  >
    Click Me!
  </button>
);
```

> **Exercise C**
> Open the `pokedex` React application
> 1. Open the `Logo.js` component and copy the `logWhenClicked` method. Then delete it from the `Logo` component.
> 2. Change the `onClick` handler to `this.props.handleClick`
> 3. Paste the `logWhenClicked` method into the component in `App.js`
> 4. Then pass the `logWhenClicked` method as a prop to the `Logo` component (hint: look at the `App` example above)
> 5. Try clicking the image in your web browser again. Does it still work? Can you explain why to the person sitting next to you?

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
let count = 0

class Counter extends Component {
  // ...
}
function renderCounter(count) {
  // ...
}

renderCounter(count)

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
let count1 = 0
let count2 = 0
let count3 = 0
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

This code has a bug! `this.state` is initialised as an empty object, and so `this.state.count` is undefined. We need to initialise it. We can do this by assigning the state class property: ([interactive example](https://codesandbox.io/s/1oyxx4lzz7)):

```js
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    // ...
  }
}
```

Now the counter component is "remembering" its count, however it is stuck at 0. Next we'll look at how we change what the component is remembering ([interactive example](https://codesandbox.io/s/n714vmyk5l)):

```js
class Counter extends Component {
  // ...

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
  // ...

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
- We initialise state by assigning the `state` class property to an object with whatever initial state we want (e.g. `{ something: 'hello' }`)
- We can read or render state by using the `this.state` variable (e.g. `this.state.something`)
- We can change state using the `this.setState()` method and by passing the piece of state we want to update (e.g. `this.setState({ something: 'hi' })`)
- If we need to read the previous state to be able to calculate the new state, then we must use a callback function with `this.setState()` (e.g. `this.setState((previousState) => { return { something: previousState.something + 1 } })`)

> **Exercise D**
> Open the `pokedex` React application and open the `CaughtPokemon.js` file
> 1. Set the initial state by assigning the `state` class property to an object. Then make the initial state have `caughtPokemon: 0`
> 2. Change the `CaughtPokemon` component to render `this.state.caughtPokemon` instead of hard-coding 0. Do you expect anything to have changed in your web browser?
> 3. Add a `<button>` with the text "Catch Pokemon" to the `CaughtPokemon` component
> 4. Create an `catchPokemon` method within the `CaughtPokemon` class
> 5. Add a `onClick` handler to the `<button>` we just created that will call the `catchPokemon` method
> 6. Within the `catchPokemon` method, use `this.setState()` to change `caughtPokemon` to 1
> 7. Update the `catchPokemon` method to increase the number of `caughtPokemon` by 1 every time the button is clicked (hint: we need to use the previous state to calculate the new state)

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

## Further Reading

Fed up of having to provide a prop for every component? Do you want to make your component use a value most of the time, but it can be overriden with a prop? This is a good time to use `defaultProps`. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) describes in more detail.

# Homework

{% include "./homework.md" %}
