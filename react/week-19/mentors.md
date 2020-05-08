# Mentor's Notes - React 1

{% include "./learning-objectives.md" %}

## Notes for mentors

- Components - talk about the conceptual idea components, not just React components
  - E.g. bootstrap components
- Why React?
  - Updating the DOM is potentially buggy, verbose, slow
  - In complex web apps (like Facebook), updating the DOM is common
  - React solves a lot of those problems
- Thinking in React exercise - useful to print out the screenshot, so they can draw on it
- Rendering in React section
  - Build towards component usage from vanilla DOM
  - This hopefully reduces the "magic" that React is
  - Although don't spend too much time on it - the student's don't know about other frameworks, and so don't really care about other approaches
  - Also useful to identify why the React api is improved over the vanilla DOM apis
- JSX section
  - Open the Babel REPL (https://babeljs.io/repl/) - demonstrate that there isn't any magic in JSX
  - Just React.createElement calls with syntax sugar
- CRA exercise - can take time as everyone is downloading from npm at the same time
- React components section
  - Originally this was written with class components first
    - However, students went home and googled and saw alternative syntaxes
    - This is a common theme in this first lesson - have to teach some stuff that is perhaps unnecessary just so that they're prepared when they see it at home
- Making an argument for props section
	- Relate to a situation in real life, something like: imagine what our boss might ask for with this small application. What could our boss ask for which would mean we would have to make changes to the code? 
- Exercises
  - Written to be quite step-by-step deliberately
    - Some students were distracted by the wording and not getting to the useful part of the exercise
    - This is a tricky balance though - now some students will be distracted by the wordy-ness of the exercises. Feedback welcome
  - Exercises in lessons 2 & 3 depend on the completing the exercises in lesson 1
    - So ensure students have completed most of them before moving on
    - We may want to introduce a way of "catching them up" - have tagged "checkpoints" on a git repo?
- Interactive examples
  - All of the examples should have an associated CodeSandbox with identical code
  - This is so that you can change the example to help demonstrate if necessary
    - I have found this very useful in the past, especially when answering questions like "what happens if you do X?"
    - You can type up exactly what they're asking about and demo it
  - Props section
    - Makes a common analogy of "props as arguments" to a function
    - Students often get tripped on up on the `props` argument to a functional component
      - They tend to forget to add it to the function signature
      - Or they think that each prop is given as a separate argument
  - The first class may be a little short. But not short enough to start getting into state
    - If you have extra time, PropTypes/defaultProps might be worth covering
    - There is a Further Reading section at the very end of lesson 2 about this

### Interactive Example Index

- [Vanilla DOM "Hello World"](http://jsbin.com/motorexehu/edit?html,output)
- [React.createElement "Hello World](http://jsbin.com/recegadexu/edit?html,output)
- [JSX "Hello World"](http://jsbin.com/gekahexige/edit?html,output)
- [Component composition](https://codesandbox.io/s/0x4wonqn00)
- [Interpolation in JSX](https://codesandbox.io/s/l910pqnjql)
- [Interpolation with methods in JSX](https://codesandbox.io/s/nw29kzx744)
- [Interpolation with .map in JSX](https://codesandbox.io/s/7mw0mw3qx0)
- [Key prop for lists in React](https://codesandbox.io/s/pwp8ox4kn0)
- [Importing/Exporting React Components](https://codesandbox.io/s/1z6xozl81l)
- [Intro to Props](https://codesandbox.io/s/vmjy0o91m7)
