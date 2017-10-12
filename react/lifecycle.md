Component Life Cycle
---
React components in a browser can be in one of three status: **mounted**, **updated**, and **unmounted**.

Components have `lifecycle` events which are methods that run code at particular times in the process.
Depending on which status of a component they are associated with, lifecycle methods are grouped into
three categories: **mounting**, **updating**, and **unmounting**. According to the time that the methods
are called, some of them are often prefixed with `will` and `did`.

Even though you have all these methods available to use at your disposal, the only `required` method is `render()`.

Mounting
--
These are called when a component is being mounted on the DOM.

- `constructor()`
- `componentWillMount()`
- `componentDidMount()`
- `render()`

Updating
--
These are called when a component is updated and being re-rendered, due to changes in props or state.

- `componentWillReceiveProps()`
- `componentDidUpdate()`
- `render()`
- etc

Unmonting
--
This method is called when a component is being removed from the DOM.

- `componentWillUnmount()`

Error Handling
--
The React `v.16.0.0` introduces better support for error handling.

This method is called when an error occurs during rendering, in a lifecycle method, or in the constructor
of any child component.

- `componentDidCatch()`

Other APIs
--
- `setState()`
- `forceUpdate()`

The complete list of these methods with their descriptions can be found in the documentation
[here](https://reactjs.org/docs/react-component.html).

[This counter](https://codepen.io/misaogura/pen/wrxJWy?editors=1111) demonstrates how some of the
lifecycle methods are called. Play around and even add some more lifecycle methods by yourself!

API calls
---

Here is a function to make an API call.
```jsx
callAPI = () => {
  const APIAddress =
    'https://codeyourfuture.github.io/api-demo/area/All/index.json';
    
  fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      this.setState({ orgData: jsonData });
    });
};
```

In order to use this function when the component first loads we will call it in the `componentDidMount()` lifecycle method.

```jsx
componentDidMount() {
    this.callAPI();
}
```

Once the state is updated with the data, your component will re-render.
