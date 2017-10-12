# React 3

### What we will learn today?

- Fetching data into components
- Installing React components from [npm](https://www.npmjs.com/search?q=react)
- How to build an app using [react-router](https://www.npmjs.com/package/react-router)

## Challenge 1: render a list of albums

- Open [TODO]. You'll find a simple React app with an `Album` component already written for you.

- Fetch an array of albums from https://gist.githubusercontent.com/djgrant/d465b89610f7047c759bdfed087bb4c4/raw/bee48fc79be3df912908d59bcde538f3d1b00edf/beyonce-albums.json.

- Using the date returned from the API, render a list of `Album` components, passing in the necessary props.

Things you will need to know:
- Fetch
  - Example: http://jsbin.com/qafekejato/edit?js,console)
  - Tutorial: https://css-tricks.com/using-fetch/
- State
  - Example: https://codesandbox.io/s/q83vz50yl9
  - Tutorial: https://reactjs.org/docs/state-and-lifecycle.html)


## Challenge 2: add routes to your app

In this challenge we'll split your app into 3 pages.
[TODO: Starting point should include content for the 3 pages in `<section>` elements]

- In your the app install react-router by running `npm install react-router`

- Open https://codesandbox.io/s/r0wXp0Njw to see a basic example of a React app using react-router.

- Copy the `react-router` imports over to your app

- Wrap your app in a `<Router />` component

- Move the 3 sections in your app into `<Route>`s

- Move the content of each Route into individual files, and import them in `index.js`


## Challenge 3: install components to style your app

React components can be configured with props, which makes them ideal for sharing with others.

You can install [all sorts of React components](https://github.com/brillout/awesome-react-components#ui-components)

- Install a React UI library

- TODO

## Homework

- Add another route with content to your App
- Using react-router, show the About route content in tabs
- Add a form to the [TODO] page that posts to an API [TODO]
- (Advanced) Abstract the tabs functionality into a component that you could share with other developers
