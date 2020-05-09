# Mentor's Notes - React 2

{% include "./learning-objectives.md" %}

## Notes for mentors

### Handling Events

- Function references vs function calls is a very common source of confusion
  - It is worth recapping again to ensure that students really do understand it
- Passing event handler function references
  - The concept trips up a lot of students - will try to immediately call the function when passing to an event handler (e.g. `onClick={this.foo()})`
- Passing functions as props
  - This concept isn't really that much different from the section above, but passing across components does often confuse students

### State

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
- [Function reference vs function call recap](https://jsbin.com/xudukezaje/edit?js,console)
- [Event Handlers](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)
- [Passing Functions as Props](https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js)
- [Counter rendering with ReactDOM (not working)](https://codesandbox.io/s/voqzrx5ny)
- [Counter rendering with ReactDOM](https://codesandbox.io/s/llow115pll)
- [Counter (starting refactor)](https://codesandbox.io/s/pjlro5rop7)
- [Counter starting to use state](https://codesandbox.io/s/42y7xqj700)
- [Counter with class constructor](https://codesandbox.io/s/1oyxx4lzz7)
- [Counter with hard-coded setState](https://codesandbox.io/s/n714vmyk5l)
- [Multiple Counters with hard-coded setState](https://codesandbox.io/s/v8165mq503)
- [Multiple Counters with dynamic setState](https://codesandbox.io/s/qxz27q9y4)
- [When to use props or state](https://codesandbox.io/s/9wl90npk4)

### Exercise solutions

- [`BestPokemonFetcher` exercise (completed)](https://codesandbox.io/s/bestpokemonfetcher-exercise-finishing-point-ght8k?file=/src/BestPokemonFetcher.js)
