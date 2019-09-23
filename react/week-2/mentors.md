# Mentor's Notes - React 2

{% include "./learning-objectives.md" %}

## Notes for mentors

- Class components section
  - Students often get tripped on converting between functional & class components
  - Common problem - `render(props)` instead of using `this.props`
- Uses the `foo = () => {}` method style
  - For non-React-provided methods (e.g. lifecycle methods)
  - Avoids issues with `this`. Which is a huge pain to explain/understand, so we avoid it
  - This syntax isn't part of the spec yet, but CRA has babel plugin for it
  - Ensure that you cover the exception (lifecycle methods)
- Passing functions as props
  - This isn't really React specific, except that it's a common technique in React
  - The key is that functions in JS are first-class and can be passed around as values
  - This enables the "props down, calls up" pattern
  - The concept trips up a lot of students - will try to immediately call the function when passing to an event handler (e.g. `onClick={this.foo()})`
  - The console log example is to demonstrate the difference between a function *reference* and function *call*
- State section
  - This section takes a bit of a risk - it deliberately shows the wrong way trying to do state, then refactors to fix it
  - Before fixing the problem, something to emphasise is the moment when we start using the virtual DOM for the first time
    - When we trigger a manual re-render to `ReactDOM.render()`
    - But we are updating the DOM here - we mentioned in lesson 1 that this was hard, and now we've got an easy way of updating it. This is the true power of React
    - The demo is not very impressive, so it's easy for the students to miss
  - We cover the problems with using a global variable, so hopefully that is enough to prevent the students copy/pasting the wrong way
    - Ensure that you emphasise this is the wrong way to do state
  - Demonstrate the app with multiple counters
    - Shows that each components remembers their own state separate to other components
- When to use props or state?
  - My rule of thumb: use props until you need it to change over time, then switch to state
- Container components
  - To be honest I kept this in here as a hold over from previous lessons
  - Arguably it's less relevant recently in React
  - If you're short on time then it can be skipped

### Interactive Example Index

- [Recap](https://codesandbox.io/s/7zvk9n1950)
- [Class Components](https://codesandbox.io/s/1zmoz1817j)
- [Class Method in React](https://codesandbox.io/s/13omkro30j)
- [Passing Functions as Props](https://codesandbox.io/s/zqlnmo16y3)
- [Counter rendering with ReactDOM (not working)](https://codesandbox.io/s/voqzrx5ny)
- [Counter rendering with ReactDOM](https://codesandbox.io/s/llow115pll)
- [Counter (starting refactor)](https://codesandbox.io/s/pjlro5rop7)
- [Counter starting to use state](https://codesandbox.io/s/42y7xqj700)
- [Counter with class constructor](https://codesandbox.io/s/1oyxx4lzz7)
- [Counter with hard-coded setState](https://codesandbox.io/s/n714vmyk5l)
- [Multiple Counters with hard-coded setState](https://codesandbox.io/s/v8165mq503)
- [Multiple Counters with dynamic setState](https://codesandbox.io/s/qxz27q9y4)
- [When to use props or state](https://codesandbox.io/s/9wl90npk4)
