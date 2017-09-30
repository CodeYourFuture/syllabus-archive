Component Life Cycle
---
![First Render](/images/firstrender.png "Life Cycle Methods on the first render of a component")

Components have `life cycle` events which are methods that run code at particular times in the process. According to the time that the methods are called, some of them are often prefixed with `will` and `did`.

The diagram below shows the full picture of what happens during the rendering of a component. Even though you have all these methods available to use at your disposal, the only `required` method is `render()`.

![Component Lifecycle](/images/componentlifecycle.jpg "All lifecycle Methods of a React component")

Mounting
--
These are called when a component is being mounted on the DOM such as:

- Constructor()
- componentWillMount()
- render()
- etc

Updating
--
When there are changes to the props or state:

- componentWillReceiveProps()
- componentDidUpdate()
- render()
- etc

Unmonting
--
When a component is being removed from the DOM:

- componentWillUnmount()

Other APIs
--
These include `setState()` and `forceUpdate()`. You cannot access the state in some lifecycle methods, refer to the diagram above to find out which.

The complete list of these methods with their descriptions can be found in the documentation [here](https://facebook.github.io/react/docs/react-component.html).


API calls
---

In order to make an API called you can call the functions same

```jsx
callAPI = () => {
  const APIAddress =
    'https://code-your-future.github.io/api-demo/area/All/index.json';
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
