# Class components

React components are best understood in terms of parents and children.

Parent or `container` components may have access to the data that they need in order to pass it on to multiple child components. These larger components often contain the actions (e.g. API calls) or data processing functions that their child components require and thus are referred to as `smart` components.

These components are usually defined using ES6 classes. So instead of returning the JSX directly, it's returned as part of a `render()` function. Here's how we would define the button component we created above using ES6 classes:

```javascript
class GameButton extends React.Components {
  render() {
    return <button> Awesome button! </button>;
  }
}
```

The above is an equivalent component to what we defined using the function.

Child or "presentational" components are concerned with how things look. They contain very little logic. They are like a function: take some inputs, and return an element (and that's how they're usually written as well, as a function). They don't hold or remember any data: the element that they return is based only on the inputs they received, nothing else.

While functional components are a lot simpler to read and write, using ES6 classes allows us to create more powerful, smarter components.

