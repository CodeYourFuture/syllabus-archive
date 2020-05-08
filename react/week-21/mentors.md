# Mentor's Notes - React 3

{% include "./learning-objectives.md" %}

## Nots for mentors

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
  - This whole section can be dropped if short on time
- Useful to talk about the uncontrolled vs controlled components patterns
  - Uncontrolled component pattern uses refs to collect `<input>` data on form submission
  - Compare against controlled component pattern, e.g. by showing inputs that transform data

### Interactive Example Index

- [Recap](https://codesandbox.io/s/7j21mrq08x)
- [Unmounting](https://codesandbox.io/s/xmo8oo514)
- [Simple React Lifecycle](https://codesandbox.io/s/m5z2v36x1y)
- [Toggleable Clock](https://codesandbox.io/s/p9q2wq069j) (used in exercise)
- [Data fetching problem](https://codesandbox.io/s/4rkovwq0kw)
- [Data fetching with setState](https://codesandbox.io/s/5kk53yx6ll)
- [Data fetching with loading state](https://codesandbox.io/s/93zr0xz32r)
- [Data fetching with error state](https://codesandbox.io/s/6v9qo90r2r)
- [Intro to Refs](https://codesandbox.io/s/yw510x1l81)
- [Uncontrolled Component](https://codesandbox.io/s/04x2r6ko0p)
- [Controlled Component](https://codesandbox.io/s/4jq1yqy8kx)
