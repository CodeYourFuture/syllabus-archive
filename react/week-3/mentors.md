# Mentor's Notes - React 3

{% include "./learning-objectives.md" %}

## Notes for mentors

### Unmounting

Open dev tools and show how DOM updates - shows that the DOM element is completely removed when component is unmounted.

### Cleaning up effects

They should have encountered `setInterval`/`clearInterval` previously on the course, so don't spend too much on them. It is mostly for recap of the API. TAs should focus on the React specific parts of the exercise. Give lots of help if stuck on the timers API to prevent distraction.

The purpose of the Exercise A is to demonstrate the problem of memory leaks. It can be hard for students to grasp as "just a console.log" seems like it wouldn't cause many problems. So it is worth discussing how memory leaks are worse if doing some calculation, which is common for subscriptions.

Emphasise how cleaning up effects not limited to timers only: there are many other things that could cause memory leaks. We don't want students to assume that this pattern is only useful for timers.

### Updating data when props change

### "Lifecycle" of a component

With Hooks, we don't really talk about the "lifecycle" of a component any more, but this section is intended to show exactly what happens at each step in the code.

Walking through the code like this is sometimes called "playing computer". A step-by-step description has been provided in the syllabus, but this was intended as revision material. It is recommended to keep the code example on the screen and walk through each line together with the students.

To keep students engaged, it can be useful to ask them to predict what the next step does. This also allows you to get feedback on whether a student is following or not.

At the end of the "playing computer" ask whether the students have spotted the bug in the logic: the effect is not updating when the prop changes. Therefore the key point to emphasise is that `useEffect` is **not** queued when the component re-renders.

### ESLint rule for React Hooks

Emphasise that the rule likely knows best, so if it suggests adding a dependency it is recommended to add it.

### Interactive Example Index

- Recap (TODO)
- [Unmounting](https://codesandbox.io/s/toggleable-details-component-j96sl?file=/src/Toggle.js)
- [Timers recap](https://jsbin.com/sinayazuhi/edit?js,console)
- [Toggleable Clock exercise (starting point)](https://codesandbox.io/s/toggleable-clock-with-hooks-starting-point-gtqif?file=/src/Clock.js)
- [Toggleable Clock exercise (end of Exercise A)](https://codesandbox.io/s/toggleable-clock-with-hooks-mid-point-xqjn1?file=/src/Clock.js)
- [Toggleable Clock exercise (end of Exercise B)](https://codesandbox.io/s/toggleable-clock-with-hooks-finishing-point-9ir6w?file=/src/Clock.js)
- [Effects with prop updates (not working)](https://codesandbox.io/s/fetch-with-prop-updates-starting-point-x1dox?file=/src/App.js) (used in "playing computer" exercise)
- [Effects with prop updates (working)](https://codesandbox.io/s/fetch-with-prop-updates-working-64vw3?file=/src/App.js)
- [`BestPokemonSelector` component](https://codesandbox.io/s/bestpokemonselector-component-mdz0o?file=/src/BestPokemonSelector.js) for copying into dependencies array exercise
- [Fetch with loading state (on initial load)](https://codesandbox.io/s/fetch-with-loading-state-part-1-7bi9z?file=/src/FetchWithLoadingState.js)
- [Fetch with loading state (between prop changes)](https://codesandbox.io/s/fetch-with-loading-state-part-2-dvu6k?file=/src/FetchWithLoadingState.js)
<!-- TODO: add form examples here -->
