# React 3

**What will we learn today?**

<!-- TODO: update these after making the changes -->

- [Recap](#recap)
- [Unmounting](#unmounting)
- [The Circle of Life](#the-circle-of-life)
- [Fetching Data in React](#fetching-data-in-react)
- [Working with forms in React](#working-with-forms-in-react)

## Recap

<!-- TODO: check this after reviewing updates to week 2 -->

Last week we looked at using props and state to create React components that change with user input ([interactive example]()): <!-- TODO: update with relevant interactive example -->

```js
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Click me!</button>
    </div>
  );
}
```

We also looked at fetching data in our React components: <!-- TODO: update with relevant interactive example -->

```js
function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('URL')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setError(null)
      })
      .catch(err => {
        setError(err)
        setData(null)
      })
  }, []);

  if (!data) {
    return 'Loading...'
  } else {
    return (
      <div>
        Your data is {data.thing}
      </div>
    )
  }
}
```

## Unmounting

So far we've looked at components that are always rendered in the browser. However (and this is often the case in large applications), we might want to control whether components are shown or not.

| **Exercise** |
| :--- |
| 1. Open [this CodeSandbox](https://codesandbox.io/s/toggleable-details-component-j96sl?file=/src/App.js) (it works just like VS Code, but in the browser). |
| 2. Take 5 minutes to read the code (in the middle panel). Try interacting with the app (in the right-hand panel). |
| 3. Open your browser dev tools and inspect the element that can be shown or hidden. |
| 4. While watching the dev tools, click the "Show Details" button. |
| 5. What happens to the `Details` component? Can you explain why this happens? |

Here is the code if you want to look at it later:

```js
function App() {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <div className="app">
      <button onClick={handleClick} className="details-btn">
        <span>ⓘ</span>Show Details
      </button>

      {isShown ? <p>{loremIpsum()}</p> : null}
    </div>
  );
}
```

The `isShown` state variable switches between `true` and `false` when you click on the "Show Details" button. The component then decides whether to render the `<Details>` component or `null` based on the value of `isShown`, using a ternary statement. If you return `null` in JSX then React will render nothing at all. When switching from showing an element to nothing (`null`), then the element is completely removed from the DOM.

When `isShown` is `true`, we say that the `Details` component is *mounted*. When `isShown` is `false`, we instead say that the `Details` component is *UNmounted*.

## Cleaning Up Effects

Sometimes we need to "clean up" our components when they are unmounted or when props change. As we have just seen React does most of the hard work for us, but when using `useEffect()` you sometimes have to some things yourself.

We're going to use an example of a clock. To make a clock, we first recap how *timers* work ([interactive example](https://jsbin.com/sinayazuhi/edit?js,console)):

```js
// Create a timer that calls the function every 1000 milliseconds (or 1 second)
let timer = setInterval(() => {
  console.log('tick');
}, 1000);

// Stop the timer immediately
clearInterval(timer);
```

Now let's try to make a real clock!

| **Exercise A** |
| :--- |
| 1. Open [this CodeSandbox](https://codesandbox.io/s/toggleable-clock-with-hooks-starting-point-gtqif?file=/src/Clock.js). The code is very similar to the previous unmounting exercise. The main difference is that a `useEffect()` has been added to the `Time` component. |
| 2. Edit the `useEffect()` in the `Time` component, so that the `console.log` and `setDate` are wrapped in a `setInterval` callback. Remember you can look at the previous exercises for examples of `setInterval`. |
| 3. You've just made a working clock! Pat yourself on the back 🙂 |
| 4. Now open the JavaScript console your web browser. What is happening? Can you explain why? <details><summary>Click here if you're stuck</summary>The string "tick" is logged every second by the setInterval in the Time component</details> |
| 5. Keep looking at the JavaScript console and try clicking the "Toggle time" button. What do you think is happening? Why is this a problem? |

Situations like this are common bugs in frontend applications. When the `Time` component is unmounted, the `setInterval` timer is still running, so it keeps logging "tick" in the console.

This might not seem like a big problem, but if we kept this running for a really long time, it might start to cause a *memory leak*. This can make your website slow down or even break entirely. If we were doing something that was more intensive to calculate, this problem may happen faster and be worse.

To fix this we need to clean up our timer so that it does not run when the `Time` component is unmounted. You can do this with `useEffect` by returning a clean-up function:

```js
useEffect(() => {
  // Set up...
  const intervalTimer = setInterval(() => {
    // ...
  });

  // Return a clean-up function
  return () => {
    // Clean up...
    clearInterval(intervalTimer);
  };
}, []);
```

The clean-up function is run when the component is unmounted, allowing us to tear down our timer after it is no longer needed. Let's try implementing this ourselves.

| **Exercise B** |
| :--- |
| 1. Continue with the CodeSandbox we used in Exercise B. |
| 2. Declare an `intervalTimer` variable inside the `useEffect` callback and assign it to the `setInterval`. If you're stuck, try looking at the timers example above. |
| 3. Still inside the `useEffect` callback, create a clean-up function and return it. |
| 4. Inside the clean-up function, run `clearInterval(intervalTimer)`. If you're stuck, try looking at the timers example above. |
| 5. Try clicking the "Toggle time" button again, like in Exercise B: Step 5. Have we solved the problem? |

We have looked at an example using `setInterval`, but there are lots of similar situations where we need to "clean up" after a component unmounts. An example might be *subscribing* to the status of a friend in a chat application. When the chat is closed, you want to ensure that the connection to the friend's status is stopped.

## Updating Data Fetching when Props Change

Last week we looked at how we could fetch data from an API and render it in our React applications. However, there was a problem with the method that we learned before. To understand this problem we first have to understand the *lifecycle* of a component.

### The Circle of Life

Let's take a look at an example:

| **Exercise A** |
| :--- |
| 1. Open [this CodeSandbox](https://codesandbox.io/s/fetch-with-prop-updates-starting-point-x1dox?file=/src/App.js). |
| 2. Take 5 minutes to read the code. |
| 3. Click the "Fetch image for 2019" button. **If you're feeling confident**: predict what is going to happen before you click the button. |
| 4. Now click the "Fetch image for 2020" button. What did you expect to happen? What actually happened? Can you explain why? |

Together let's "play computer" to break down exactly what is happening with these components:

1. When the page loads, the `App` function component is called
2. It doesn't have any `date` state already, so we initialise it to an empty string (`""`) with `useState`
3. It renders the 2 buttons, but because `date` is an empty string, it does **not** render the `MartianImageFetcher` component. Instead `null` is returned, which means that nothing is rendered
  ```js
    function App() {
      const [date, setDate] = useState("");

      ...

      return (
        <div>
          <button onClick={handle2019Click}>Fetch image for 2019</button>
          <button onClick={handle2020Click}>Fetch image for 2020</button>

          {date ? <MartianImageFetcher date={date} /> : null}
        </div>
      );
    }
  ```
4. When we click the "Fetch image for 2019" button, the `handle2019Click` click handler is called
5. The state is set by `setDate` to be `"2019-01-01"`, and a re-render is triggered
6. The `App` function component is called again
7. This time, `useState` remembers that we have `date` state and it is set to `"2019-01-01"`
  ```js
    function App() {
      ...

      function handle2019Click() {
        setDate("2019-01-01");
      }

      ...

      return (
        ...
        <button onClick={handle2019Click}>Fetch image for 2019</button>
        ...
      );
    }
  ```
8. Now `App` **does** render `MartianImageFetcher` and passes the `date` state as a prop (also named `date`)
9. The `MartianImageFetcher` function component is called for the first time
10. `useState` knows that we haven't got any `imgSrc` state so initialises it to `null`
11. We queue an effect, which will run after we render for the first time
12. Because the `imgSrc` state is set to `null`, we return `null`. This means that nothing is rendered
  ```js
    function MartianImageFetcher(props) {
      const [imgSrc, setImgSrc] = useState(null);

      useEffect(() => {
        ...
      }, []);

      if (!imgSrc) {
        return null;
      } else {
        return <img src={imgSrc} />;
      }
    }
  ```
13. Now that the component has rendered for the first time, the effect is run
14. A `fetch` request is made to the NASA API (🚀!)
15. When the request data comes back, we set the `imgSrc` state to a piece of the data, which triggers a re-render
  ```js
    function MartianImageFetcher(props) {
      ...

      useEffect(() => {
        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${
            props.date
          }&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`
        )
          .then(res => res.json())
          .then(data => {
            setImgSrc(data.photos[0].img_src);
          });
      }, []);

      ...
    }
  ```
16. The `MartianImageFetcher` function component is called again
17. `useState` remembers that the `imgSrc` state is set to the data from the API
18. This time, we do **not** queue an effect. We used an empty array (`[]`) as the `useEffect` dependencies argument which means that we only queue effects on the **first** render
19. We do have `imgSrc` state set, so we render the image using the data from the API 🎉
  ```js
    function MartianImageFetcher(props) {
      const [imgSrc, setImgSrc] = useState(null);

      ...

      if (!imgSrc) {
        return null;
      } else {
        return <img src={imgSrc} />;
      }
    }
  ```

Phew! That was a lot of work just to render an image! But we're not quite done yet, we still need to find out what happens when we click the "Fetch image for 2020" button:

1. In the `App` component, the `handle2020Click` click handler is called
2. The `date` state is set to `"2020-01-01"` and a re-render is triggered
3. The `App` function component is called again and the `date` state is set to `"2020-01-01"`
4. The `date` prop that is passed to `MartianImageFetcher` is **different** which means that it has to re-render
  ```js
    function App() {
      ...

      function handle2020Click() {
        setDate("2020-01-01");
      }

      ...

      return (
        ...
        <div>
          ...
          <button onClick={handle2020Click}>Fetch image for 2020</button>
          ...
          {date ? <MartianImageFetcher={date} /> : null}
          ...
        </div>
        ...
      );
    }
  ```
5. In the `MartianImageFetcher` component `useState` remembers that we already had `imgSrc` state. It is set to the image from 2019
6. Again, we do **not** queue the effect because this is a re-render and `useEffect` has been passed an empty array `[]`
7. Because `imgSrc` state has been set previously we render the image from 2019
  ```js
    function MartianImageFetcher(props) {
      const [imgSrc, setImgSrc] = useState(null);

      useEffect(() => {
        ...
      }, []);

      return <img src={imgSrc} />;
    }
  ```

Did you spot where the bug was? The key that the `useEffect` in `MartianImageFetcher` is **only run once**. This is because we told React that the queue should be queued on the first render only. However, as we saw, sometimes you need the effect to run again when some data changes. In this case the `date` prop, changed from `"2019-01-01"` to `"2020-01-01"`, meaning that we have to fetch data different data. We call this a *dependency* of the effect.

### `useEffect` dependencies array

To solve this problem, we can tell React to queue the effect on the first render **and** when a dependency changes. We do this by adding the dependency variable to the array:

```js
function MartianImageFetcher(props) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    ...
  }, [props.date]);

  ...
}
```

Now when the `date` prop changes, React knows that the effect must be run again, this time with the 2020 data. Because of this behaviour, the second argument to `useEffect` is called the *dependencies argument*. We use it whenever we have something in our effect that *depends* on a variable outside of the effect function.

To help you understand this better, try "playing computer" again, but this time think about what happens when we use `[props.date]` for the dependencies argument. Think carefully about what changes with step 6 after we click the 2020 button.

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application from last week and open the `src/BestPokemon.js` file. |
| 2. Copy the `BestPokemonSelector` component from [this CodeSandbox](https://codesandbox.io/s/bestpokemonselector-component-mdz0o?file=/src/App.js). Then paste it into `src/BestPokemon.js`. |
| 3. Change the `default export` so that it exports `BestPokemonSelector` instead of `BestPokemonFetcher`. |
| 4. Take a few minutes to read what the `BestPokemonSelector` component does. If you have questions, ask a Teaching Assistant to help. |
| 5. In the `BestPokemonFetcher` component change the URL to use backticks (`` `...` ``) instead of double-quotes (`"`). Then replace the number 1 with `${props.pokemonId}`. What will this do? <details><summary>Click here if you don't know</summary>The URL will contain the pokemonId instead of always fetching the pokemon with id of 1</details> |
| 6. Open your browser and find the `BestPokemonSelector` component. **Before you click the buttons**, think about what you expect will happen. Then click the "Fetch Bulbasaur" button to find out what actually happens. |
| 7. Refresh the page. What happens now if you click the "Fetch Bulbasaur" button, then click the "Fetch Charmander" button? Is this what you expected? Explain to someone why this happens. |
| 8. Fix the bug by adding `props.pokemonId` to the `useEffect` dependencies array in `BestPokemonFetcher`. Remember that you can test if the bug still happens by refreshing the page, clicking one of the buttons, then the other button. |

### ESLint rules for React Hooks

As you may have noticed, VSCode highlighted the empty dependencies array when you changed the URL passed to `fetch` in `BestPokemonFetcher`. This is because your React application is using the rules from [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks), a package created by the developers who make React. It helps you to find bugs in React Hooks code by highlighting places where you might be missing dependencies.

If you see a red squiggly line underneath your `useEffect` dependencies array, you can hover your mouse over and it will tell you which variable is missing so you can add it to the dependencies array. Here's an example:

![React Hooks eslint rule](../assets/eslint-hooks-rule.png)

### Loading state

| **Exercise A** |
| :--- |
| Open [this CodeSandbox](https://codesandbox.io/s/fetch-with-prop-updates-mid-point-64vw3?file=/src/App.js). |
| Click the "Fetch image for 2019" button and wait for the image to load. |
| Now click the "Fetch image for 2020" button. Do you think this is a good user experience? Explain what you think is wrong to a Teaching Assistant. |

In the application above, the image from 2020 takes a while to load. This makes it feel like the app is broken: the user might think that they didn't actually click the 2020 button or that it is not working correctly. We are not telling the user that *something* is happening, it's just taking a bit of time to load.

We can fix this by adding a *loading state*. Let's take a look ([interactive example](https://codesandbox.io/s/fetch-with-loading-state-part-1-7bi9z?file=/src/App.js)):

```js
function MartianImageFetcher(props) {
  ...

  if (!imgSrc) {
    return "Loading...";
  } else {
    return <img src={imgSrc} />;
  }
}
```

Previously, we were just rendering nothing (by returning `null`) when we didn't have any `imgSrc`. We can tell the user that this by instead rendering something telling them that we're still waiting for the data to come back.

There is still a problem though: when we click to fetch another image, we still have `imgSrc` set to the previous image. What we could do instead is set the `imgSrc` back to `null` when we know that we're fetching another image ([interactive example](https://codesandbox.io/s/fetch-with-loading-state-part-2-dvu6k?file=/src/App.js)):

```js
function MartianImageFetcher(props) {
  ...

  useEffect(() => {
    setImgSrc(null);

    ...
  }, [props.date]);

  ...
}
```

| **Exercise B** |
| :--- |
| 1. Open the `pokedex` React application again and open the `src/BestPokemon.js` file. |
| 2. In the `BestPokemonFetcher` component, instead of returning `null` if there is no `pokemon`, return `"Loading..."`. |
| 3. Now add `setPokemon(null)` inside the `useEffect` callback, before the call to `fetch`. |
| 4. Try clicking on the "Fetch Bulbasaur" and "Fetch Charmander" buttons quickly. Do you see the loading state? (It may only appear for a flash, the Pokemon API is very fast). |

## Working with forms in React

Modern web applications often involve interacting with forms such as creating an account, adding a blog post or posting a comment. This would involve using inputs, buttons and various form elements and being able to get the values entered by users to do something with it (like display them on a page or send them in a POST request). So, how do we do this in React?

A popular pattern for building forms and collect user data is the *controlled component* pattern. A pattern is a repeated solution to a problem that is useful in multiple similar cases. Let's have a look at an example ([interactive example](https://codesandbox.io/s/4jq1yqy8kx)):

```js
class SimpleReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: ""
    };
  }

  handleChange = event => {
    this.setState({
      reminder: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Some reminder"
          value={this.state.reminder}
          onChange={this.handleChange}
        />
        <p>Today I need to remember to... {this.state.reminder}</p>
      </div>
    );
  }
}
```

We're controlling the `value` of the input by using the value from the `reminder` state. This means that we can only change the value by updating the state. It is done using the `onChange` attribute and the method `handleChange` which is called every time the input value changes (typically when a new character is added or removed). If you didn't call `this.setState()` in the `handleChange` method, then the input's value would never change and it would appear as if you couldn't type in the input! Finally, the value we keep in the `reminder` state is displayed on the screen as today's reminder. 

In addition, instead of just saving the value of the input in the state, we could have also transformed the string before we set it with `this.setState()`, for example by calling `toUpperCase()` on the string.

Let's have a look at a more complex example where we want to build a form to let users enter information to create a personal account ([interactive example](https://codesandbox.io/s/m7p083zn6p)):

```js
class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = () => {
    console.log("Do something with the form values...");
    console.log(`Username = ${this.state.username}`);
    console.log(`Email = ${this.state.email}`);
    console.log(`Password = ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" onClick={this.submit}>
          Create account
        </button>
      </div>
    );
  }
}
```

We now have three different inputs named `username`, `email` and `password`, and we keep each entered value in a state with the same name. The method `handleChange` is reused to keep track of each change of value. The trick here is to use the name of the input element to update the corresponding state. Finally, when the user clicks on the submit button, the `submit` method is called to process the values. They are currently just displayed in the console but you could imagine validating the format of these values and sending them in a POST request.

**Additional note:** Have you seen this strange syntax in the `setState` of `handleChange`? It's called a computed property name. In a Javascript object, you can use a variable wrapped in square brackets which acts as a dynamic key, such as: 

```
const myFirstKey = "key1";
const myFirstValue = "value1";
const dynamicKeyObject = { [myFirstKey]: myFirstValue };
console.log(dynamicKeyObject); // => { key1: "value1" }
```

> **Exercise D**
> Open the `pokedex` React application again and open the `src/CaughtPokemon.js` file. In this exercise, instead of recording the number of caught Pokemons, we are going to record the names of each Pokemon you caught.
> 1. Make sure the `CaughtPokemon` component is written as a class component
> 2. Add an `<input>` in the `render` method before the `button` (hint: `<input type="text" />`)
> 3. Add a `value` property to the `<input>` set to the state `pokemonNameInput`
> 4. Initialize the state `pokemonNameInput` in the constructor to an empty string `''` (you can try to set something else than an empty string and verify that this value is correctly displayed in your input)
> 5. Create a new `handleInputChange` method
> 6. Add a `onChange` handler to the `<input>` that will call `this.handleInputChange`
> 7. Add a parameter called `event` to the `handleInputChange` method and add a `console.log` with `event.target.value`. In your browser, try writting something in the `<input>`. What do you see in the JavaScript console?
> 8. Use `setState` in `handleInputChange` to record `event.target.value` in the state `pokemonNameInput`. In your browser, try writting something in the `<input>`. What do you see this time in the JavaScript console?
> 9. We are now going to save the user input when clicking on the `<button>`. Initialize `caughtPokemon` to an empty array `[]` instead of 0 in the `constructor`. In the `render`, use `.length` to display the number of items in the state array `caughtPokemon` (hint: it should still display `0` on the screen). Finally, delete the content of `catchPokemon` method (it should be empty, we will rewrite it later).
> 10. In `catchPokemon` method, create a variable `newCaughtPokemon` set to the state `caughtPokemon` and add the value of the state `pokemonNameInput` to it (hint: use `push()` to add a new item in an array).
> 11. In `catchPokemon` method, use `setState` to record the variable `newCaughtPokemon` in the state `caughtPokemon`. Open your browser, enter a pokemon name in the `<input>` and click on the button. Can you see the number of caught pokemon incrementing as you click on the button?
> 12. We are now going to display the names of the caught pokemon. In the `render` method, add a `<ul>` element and use the `.map()` method on the `caughtPokemon` state to loop over each pokemon and return a `<li>` element for each.
> 13. Empty the `<input>` after clicking on the button. For this, in `catchPokemon` method, set the state of `pokemonNameInput` to an empty string `''`.
> 14: **(STRETCH GOAL)** Make sure the user cannot add a pokemon to the `caughtPokemon` state if the value of `pokemonNameInput` state is empty.


## Further Reading

There is a new update to React, which adds a new feature called *Hooks*. It allows you to access the special super powers of state and lifecycle in regular function components. There is an extensive guide in the [official React tutorial](https://reactjs.org/docs/hooks-intro.html).

# Homework

{% include "./homework.md" %}
