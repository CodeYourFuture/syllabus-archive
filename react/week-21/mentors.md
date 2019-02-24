# Mentor's Notes - React 3

- Unmounting
  - Open dev tools and show how DOM updates - shows that the DOM is changing in response to React
- Lifecycle
  - The lifecycle diagram has been edited to simplify to just the lifecycle methods that we're interested in
- Clock exercise
  - Make sure they copy/paste the example code - post in Slack
  - Demonstrates the need to tear down subscriptions set up
  - Might need to touch on memory leaks
    - this is hard for them to grasp as "just a console.log" seems like it wouldn't take much memory
- Data fetching
  - Touch on `.then(res => res.json())` - turns response into JSON
  - API is from Nasa - fetches Curiosity rover image from the given date
  - Error handling code to get fetch to throw an error on a non-200 response:

```js
.then((res) => {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    throw new Error('HTTP error')
  }
})
```

- Refs
  - The example we show is for input focusing
- Useful to talk about the uncontrolled vs controlled components patterns
  - Uncontrolled component pattern uses refs to collect `<input>` data on form submission
  - Compare against controlled component pattern, e.g. by showing inputs that transform data
  - [CodeSandbox example](https://codesandbox.io/s/n53127o16p)
