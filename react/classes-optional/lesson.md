# React Classes (Optional)

**What will we learn today?**

<!-- TODO: Add ToC -->

## Class Components

So far we have looked at components which are just functions (which are called *function components*), but there is another way of creating React components using the `class` keyword. Let's look at an example ([interactive example](https://codesandbox.io/s/1zmoz1817j)):

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

// Function component
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

### When you should use function components or class components?

Classes are an older method for creating components in React. Even though they are older, they will still continue to work for a long time. Because of this, there are **many** React components written using classes. You will likely still encounter them when developing with React.

Before Hooks were released classes were the only way to access state and lifecycle (similar to effects). The rule of thumb now is that new components should be written using function components with Hooks, but class components don't need to be updated.

### Class Methods

Class *methods* are similar to nested "handler" functions inside function components. Let's take a look at an example ([interactive example](https://codesandbox.io/s/13omkro30j)):

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

Unlike nested functions, we can't use just the name of the function in the `onClick` prop. We have to use `this` first, because the method is attached to the class.

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
> 1. Add a `constructor` method to the `CaughtPokemon` component and remember to handle `props` correctly (hint: `super(props)`)
> 2. Set the initial state by assigning `this.state` in the `constructor` method to an object. Then make the initial state have 0 `caughtPokemon`
> 3. Change the `CaughtPokemon` component to render `this.state.caughtPokemon` instead of hard-coding 0. Do you expect anything to have changed in your web browser?
> 4. Add a `<button>` with the text "Catch Pokemon" to the `CaughtPokemon` component
> 5. Create an `catchPokemon` method within the `CaughtPokemon` class
> 6. Add a `onClick` handler to the `<button>` we just created that will call the `catchPokemon` method
> 7. Within the `catchPokemon` method, use `this.setState()` to change `caughtPokemon` to 1
> 8. Update the `catchPokemon` method to increase the number of `caughtPokemon` by 1 every time the button is clicked (hint: we need to use the previous state to calculate the new state)

## Unmounting

So far we've looked at components that are always rendered in the browser. However (and this is often the case in large applications), we might want to control whether components are shown or not. Let's look at a Toggle component ([interactive example](https://codesandbox.io/s/xmo8oo514)):

```js
const Message = () => (
  <p>I'm shown when this.state.isShown is true ✅</p>
);

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
  }

  toggle = () => {
    this.setState((previousState) => {
    	return { isShown: !previousState.isShown }
	 });
  };

  render() {
    return (
      <div>
        {this.state.isShown ? <Message /> : null}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
```

If you open up dev tools, you will see that the element changes based on the `isShown` state. The hidden element is not hidden with CSS, it is actually removed from the DOM. This is because `this.state.isShown` is `false` which means the Toggle component returns `null` for that part of the JSX. If you return `null` in JSX then React will render nothing at all.

## The Circle of Life

When a component is within the DOM, we call it *mounted*. When a component is removed from the DOM, we call it *unmounted*. When we change state like in the unmounting example above, we can switch between these statuses. This gives us a clue that components go through a *lifecycle* of different statuses. We have seen 2 of the statuses: mounting and unmounting, there is also a third called *updating*.

We can hook into this lifecycle through special component methods that are added by React's `Component` class. They are run at different points of the lifecycle, often before and after they change to a different status. The method names contain `will` or `did` based on whether they run before or after a status change.

This diagram shows the React component lifecycle:

![React component lifecycle](../assets/lifecycle.png)

Let's look at how we can use one of the lifecycle methods ([interactive example](https://codesandbox.io/s/m5z2v36x1y)):

```js
class Lifecycle extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return <div>Hello World</div>;
  }
}
```

> **Exercise A**
> Open the `pokedex` application that we have been working on for the last 2 weeks and open the `CaughtPokemon.js` file
> 1. Add a `constructor` method to the `CaughtPokemon` component. Within this method add a `console.log('constructor')`
> 2. Add a `componentDidMount` method to the `CaughtPokemon` component. Within this method add a `console.log('componentDidMount')`. You don't need to return anything from this method
> 3. Repeat the same step above with the `componentDidUpdate` and `componentWillUnmount` methods
> 4. Try interacting with the `CaughtPokemon` component in your web browser (clicking the button) while looking at the JavaScript console. What order do the logs appear?
> 5. The `componentWillUnmount` method will never be called. Can you explain why?

We'll now focus on a few of the lifecycle hooks and see how they are used.

### `componentDidMount` and `componentWillUnmount`

The `componentDidMount` method runs after a component has finished rendering to the DOM. The component is now waiting for a props change or input from the user. It is called only once. We use this lifecycle hook to make changes outside of the component (sometimes these are called *side effects*).

The `componentWillUnmount` method runs when a component has been unmounted from the DOM. It is used to "clean up" the component as it is no longer being shown. Often we need to close down or cancel the changes we made in `componentDidMount`.

To look at these in more detail, we'll create a Clock component in an exercise.

> **Exercise B**
> Open the `pokedex` React application again
> 1. Create a new file called `Clock.js` in the `src` directory
> 2. Copy and paste in the code below ([interactive version](https://codesandbox.io/s/p9q2wq069j)):

```js
import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick = () => {
    console.log('tick');
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingClock: true };
  }

  toggle = () => {
    this.setState((previousState) => {
      return { isShowingClock: !previousState.isShowingClock };
    });
  };

  render() {
    return (
      <div>
        {this.state.isShowingClock && <Time />}
        <button onClick={this.toggle}>Toggle time</button>
      </div>
    );
  }
}

export default Clock;
```

> 3. In `App.js` import the `Clock` component with `import Clock from './Clock'`
> 4. Then render the `Clock` component in the `App` component (hint: `<Clock />`)
> 5. Now change the `Time` component (notice that there are 2 components defined in this file) add a `componentDidMount` method
> 6. Within the `componentDidMount` method use `setInterval` to call `this.tick` every 1000 milliseconds (hint: `setInterval(this.tick, 1000)`)
> 7. Now open the JavaScript console your web browser. What is happening? Can you explain why?
> 8. Keep looking at the JavaScript console and try clicking the "Toggle time" button. What do you think the problem is here? How can we fix it?
> 9. Change the `componentDidMount` method to assign `this.timer` to the output of `setInterval` (hint: `this.timer = setInterval(this.tick, 1000)`)
> 10. Add a `componentWillUnmount` method to the `Time` component
> 11. In the `componentWillUnmount` method, remove the timer by calling `clearInterval(this.timer)`
> 12. Try clicking the "Toggle time" button again, like in step 9. How have we solved the problem?

## Fetching Data in React

Most web applications will load data from the server. How do we do this in React? The component lifecycle is very important - we don't want to be calling our API at the wrong time, or multiple times with the same data!

If we tried to fetch data in our `render` method, it would make a request every time props or state changed. This would create lots of unnecessary requests. As we saw above, `componentDidMount` is called only once when the component is first rendered and so it is an ideal place for making requests. Let's look at an example ([interactive example](https://codesandbox.io/s/4rkovwq0kw)):

```js
class MartianPhotoFetcher extends Component {
  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}`);
  }

  render() {
    // We don't don't what the img src is when we render :(
    return <img src={src} />;
  }
}
```

This example isn't very useful! We can't use the data returned from the server in `render` because the request is asynchronous :( We need React to re-render once the request is resolved - a perfect use for state! Let's look at an example ([interactive example](https://codesandbox.io/s/5kk53yx6ll))

```js
class MartianPhotoFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null
    };
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imgSrc: data.photos[0].img_src
        })
      });
  }

  render() {
    return <img src={this.state.imgSrc} />;
  }
}
```

Now we can see the Martian photo that we fetched from the server!

However we have a bit of a problem - when we first render the component, we don't have the photo `src` yet. We first have to initialise it to `null` in the constructor. This shows us that we're missing something from our UI - a *loading status*.

Let's look at showing a different UI when the request is loading ([interactive example](https://codesandbox.io/s/93zr0xz32r)):

```js
class MartianPhotoFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imgSrc: null
    };
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          imgSrc: data.photos[0].img_src
        })
      });
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading... 👽</span>;
    } else {
      return <img src={this.state.imgSrc} />;
    }
  }
}
```

Here are the steps that the component takes:

- Initialise `isLoading` to `true`
- In `render`, show a loading message because `isLoading` is true
- Once rendered, `componentDidMount` will trigger the API request
- When the request resolves, we set the `isLoading` state to false and set the data that we want
- Changing state triggers a re-render, and because `isLoading` is false we render the Martian photo

We can still improve our component! What happens if we make a request that fails? Our request will error, but we won't show the error in the browser. Let's see how we can fix it ([interactive example](https://codesandbox.io/s/6v9qo90r2r)).

First we have to deal with annoying quirk of `fetch` - it doesn't reject the promise on HTTP errors. We can fix this by adding another `.then` before we convert to JSON:

```js
.then((res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw new Error('HTTP error');
  }
})
```

Now we can add our solution - a `.catch` on the `fetch` call. Here we reset the loading state and add the error to state.

```js
.catch((err) => {
  this.setState({
    isLoading: false,
    err: err
  });
})
```

Now we can check if there's an error in state and render out an error message:

```js
render() {
  if (this.state.isLoading) {
    return <span>Loading... 👽</span>;
  } else if (this.state.error) {
    return <span>Something went wrong 😭</span>;
  } else {
    return <img src={this.state.imgSrc} />;
  }
}
```

> **Exercise C**
> Open the `pokedex` React application again and open the `src/BestPokemon.js` file
> 1. If you haven't already, convert the `BestPokemon` component to a class component
> 2. Create a `constructor` method (hint: remember to call `super(props)`)
> 3. Set the initial state to have a key named `pokemonNames` that is assigned to an empty array `[]`
> 4. Add a `componentDidMount` method to the component
> 5. Within the `componentDidMount` method call the `fetch()` function with this URL: `https://pokeapi.co/api/v2/pokedex/1/`. What will this do?
> 6. Add a `.then()` handler into the `fetch` function (hint: remember this needs to come immediately after the `fetch()` call) which converts the response from JSON (hint: `.then(res => res.json())`)
> 8. Add a second `.then()` handler after the one we just added, where the callback function will receive an argument called `data`
> 9. Within the second `.then()` callback function, log out the data that we just received (hint: `console.log(data.pokemon_entries[0].pokemon_species.name)`)
> 10. Now change the `console.log()` to log out an array instead, with the first, fourth and seventh Pokemon (hint: `console.log([data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name])`)
> 11. Now again within the `.then()` callback function, call `this.setState()` to set the `pokemonNames` key and assign it to the array that we just logged out (you can copy/paste it)
> 12. Inside the `render` method, remove the old `pokemonNames` variable and replace it with `this.state.pokemonNames`. What do you see in your web browser?
> 13. Add an `isLoading` piece of state, which is initialised to `true`
> 14. When calling `this.setState()` inside the `.then()` handler, also set `isLoading` to `false`
> 15. In the `render` method check if `this.state.isLoading` is `true` and return a loading message (e.g. `<span>Loading...</span>`). Otherwise if `this.state.isLoading` is `false` then render the loop as we did before
> 16. **(STRETCH GOAL)** Add some error handling which renders an error message
> 17. **(STRETCH GOAL)** Explore the data returned from the API. See if you can show some more interesting Pokemon information in your app (hint: try `console.log`ging different data returned from the API)
