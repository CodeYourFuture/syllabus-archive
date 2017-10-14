# React 3

### What we will learn today?

- Fetching data into components
- Installing React components from [npm](https://www.npmjs.com/search?q=react)
- How to build an app using [react-router](https://www.npmjs.com/package/react-router)

## Challenge 1: render a list of albums

- Go to https://github.com/djgrant/beyonce-app and follow the instructions to clone and install the app.

- You'll find in the components folder an `Album` component already written for you to use, and an `Albums` component that you need to complete

- In the `Albums` component fetch an array of albums from https://gist.githubusercontent.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json.

- Using the data returned from the API, render an array of `Album` components, passing in the necessary props.

Things you will need to know:
- Fetch
  - Example: http://jsbin.com/qafekejato/edit?js,console  
  - Tutorial: https://css-tricks.com/using-fetch/
- lifecycle methods
  - Tutorial/Exmaple: https://github.com/CodeYourFuture/syllabus/blob/scotland/react/lesson2.md#talking-to-an-api
- State
  - Example: https://codesandbox.io/s/q83vz50yl9
  - Tutorial: https://reactjs.org/docs/state-and-lifecycle.html


## Challenge 2: add routes to your app

In this challenge we'll split your app into 3 pages.

- In your app install react-router by running `npm install react-router --save`

- Open https://codesandbox.io/s/pj6v9x94x0 to see a basic example of a React app using react-router.

- Copy the `react-router` imports over to your app

- Wrap your app in a `<Router />` component

- Move the 3 sections in your app into `<Route>`s

- Add a navigation bar to your app with links to the routes you've created

- Move the content of each Route into individual files, and import them in `index.js` using the  `<Route>` `component` prop.


## Challenge 3: install components to style your app

React components can be configured with props, which makes them ideal for sharing with others.

There are [all sorts of React components](https://github.com/brillout/awesome-react-components#ui-components) that you can install and use in your projects.

In the challenge you'll add a video player to the `Album` component.

- Open the `Album` component

- Using npm, install [react-player](https://www.npmjs.com/package/react-player)

- Following the instructions on the [readme](https://www.npmjs.com/package/react-player) add a react-player component into `Album`

- Update your `Albums` component to pass in a `videoUrl` to the `Album` component

- Add `videoUrl` as a prop type to the `Album` component

## Homework

- Find some more content and add another route to your App
- Using react-router, show the About route content in tabs (see the how this is achieved in https://codesandbox.io/s/pj6v9x94x0)
- Enhance the pages using components provided by [reactstrap](https://reactstrap.github.io/) (Bootstrap for React)
- (Advanced) Abstract the tabs functionality into a component that you could share with other developers
