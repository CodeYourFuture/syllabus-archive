# React 3

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

**What will we learn today?**

- [Recap](#recap)
- [Unmounting](#unmounting)
- [The Circle of Life](#the-circle-of-life)
- [Fetching Data in React](#fetching-data-in-react)
- [Refs](#refs)

## Recap

Last week we looked at using props and state to create React components that change with user input ([interactive example](https://codesandbox.io/s/7j21mrq08x)):

```js
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increment}>Click me!</button>
      </div>
    )
  }
}
```

## Unmounting

So far we've looked at components that are always rendered in the browser. However (and this is often the case in large applications), we might want to control whether components are shown or not. Let's look at a Toggle component ([interactive example](https://codesandbox.io/s/xmo8oo514)):

```js
const IsShown = () => (
  <p>I'm shown when true ✅</p>
)
const IsNotShown = () => (
  <p>I'm shown when false ☑️</p>
)

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isShown: false }
  }

  toggle = () => {
    this.setState({ isShown: !this.state.isShown })
  }

  render() {
    return (
      <div>
        {this.state.isShown ? <IsShown /> : <IsNotShown />}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
```

If you open up dev tools, you will see that the element changes based on the `isShown` state. The hidden element is not hidden with CSS, it is actually removed from the DOM. This is important in larger applications as it can free up resources (CPU & memory) that aren't being used any more.

## The Circle of Life

When a component is within the DOM, we call it *mounted*. When a component is removed from the DOM, we call it *unmounted*. When we change state like in the unmounting example above, we can switch between these statuses. This gives us a clue that components go through a *lifecycle* of different statuses. We have seen 2 of the statuses: mounting and unmounting, there is also a third called *updating*.

We can hook into this lifecycle through special component methods that are added by React's `Component` class. They are run at different points of the lifecycle, often before and after they change to a different status. The method names are contain `will` or `did` based on whether they run before or after a status change.

This diagram shows the React component lifecycle:

![React component lifecycle](../assets/lifecycle.png)

Let's look at how we can use one of the lifecycle methods ([interactive example](https://codesandbox.io/s/m5z2v36x1y)):

```js
class Lifecycle extends Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return <div>Hello World</div>
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
import React, { Component } from 'react'

class Time extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  tick = () => {
    console.log('tick')
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}
class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingClock: true }
  }
  toggle = () => this.setState({ isShowingClock: !this.state.isShowingClock })
  render() {
    return (
      <div>
        {this.state.isShowingClock && <Time />}
        <button onClick={this.toggle}>Toggle time</button>
      </div>
    )
  }
}

export default Clock
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
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}`)
  }

  render() {
    // We don't don't what the img src is when we render :(
    return <img src={src} />
  }
}
```

This example isn't very useful! We can't use the data returned from the server in `render` because the request is asynchronous :( We need React to re-render once the request is resolved - a perfect use for state! Let's look at an example ([interactive example](https://codesandbox.io/s/5kk53yx6ll))

```js
class MartianPhotoFetcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: null
    }
  }
  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imgSrc: data.photos[0].img_src
        })
      })
  }
  render() {
    return <img src={this.state.imgSrc} />
  }
}
```

Now we can see the Martian photo that we fetched from the server!

However we have a bit of a problem - when we first render the component, we don't have the photo `src` yet. We first have to initialise it to `null` in the constructor. This shows us that we're missing something from our UI - a *loading status*.

Let's look at showing a different UI when the request is loading ([interactive example](https://codesandbox.io/s/93zr0xz32r)):

```js
class MartianPhotoFetcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      imgSrc: null
    }
  }
  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          imgSrc: data.photos[0].img_src
        })
      })
  }
  render() {
    if (this.state.isLoading) {
      return <span>Loading... 👽</span>
    } else {
      return <img src={this.state.imgSrc} />
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
    return res
  } else {
    throw new Error('HTTP error')
  }
})
```

Now we can add our solution - a `.catch` on the `fetch` call. Here we reset the loading state and add the error to state.

```js
.catch((err) => {
  this.setState({
    isLoading: false,
    err: err
  })
})
```

Now we can check if there's an error in state and render out an error message:

```js
render() {
  if (this.state.isLoading) {
    return <span>Loading... 👽</span>
  } else if (this.state.error) {
    return <span>Something went wrong 😭</span>
  } else {
    return <img src={this.state.imgSrc} />
  }
}
```

> **Exercise C**
> Open the `pokedex` React application again and open the `src/BestPokemon.js` file
> 1. If you haven't already, convert the `BestPokemon` component to a class component
> 2. Create a `constructor` method (hint: remember to call `super(props)`)
> 3. Set the initial state to have a key named `pokemonNames` that is assigned to `null`
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

## Refs

As we have seen, React manages the DOM for us. That means we generally don't have to worry about keeping track of DOM nodes, or manipulating them directly. However sometimes you need to be able to access a DOM node that React is managing. Some common use cases are managing browser focus and integrating with third party libraries like a jQuery plugin.

We can do this with a *ref*. Let's look at an example that will change browser focus to an input when a button is clicked ([interactive example](https://codesandbox.io/s/yw510x1l81)):

```js
class InputFocuser extends Component {
  setInputRef = (input) => {
    this.input = input
  }

  focusInput = () => {
    this.input.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setInputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    )
  }
}
```

The key method here is `setInputRef`. It is called by React when rendering the `<input>`, and passes a reference to the real DOM node as an argument. We remember the reference by assigning it to `this.input`. Then when the button is clicked we can call the `focus` method (a vanilla method, not part of React) on the input DOM node.

### Uncontrolled & Controlled Components

Refs are also useful when building forms to collect user data. We can use them in a *pattern* called an *uncontrolled component*. A pattern is a repeated solution to a problem that is useful in multiple similar cases.

Let's look an example of an uncontrolled component ([interactive example](https://codesandbox.io/s/04x2r6ko0p)):

```js
class UncontrolledComponent extends Component {
  inputRef = (inputEl) => {
    this.inputRef = inputEl
  }

  handleSubmit = (event) => {
    console.log(this.inputRef.value)
    event.preventDefault() // Prevents form submission
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
```

By using a ref, we can gather all of the input data in the form at once and do something with it, for example send it in a POST request.

In contrast, we can get more control over our input data by using the *controlled component* pattern. Let's look at an example ([interactive example]()):

```js
class ControlledComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleChange}
      />
    )
  }
}
```

Now we're controlling the `value` of the input by using the value from state. This means that we can only change the value by updating state. If you didn't call `this.setState()` in the `handleChange` method, then the input's value would never change and it would appear as if you couldn't type in the input!

This pattern is useful if you need to keep track of what the user is typing in the input. We could transform the string before we set it with `this.setState()`, for example by calling `toUpperCase()` on the string.

Both of these patterns are useful when working with forms, but in general the uncontrolled component pattern is most common, unless you know that you need the controlled component pattern.

# Homework

{% include "./homework.md" %}
