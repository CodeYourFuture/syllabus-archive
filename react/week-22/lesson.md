# React 4

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)


## Introduction to React-Router

In the past few weeks, you've learned how to build applications with React and the different applications and examples were all built on a single page. However, what if you wanted to have different pages with each page having its own URL? This is what React-Router can help you with!

Let's look at a first example ([interactive example](https://codesandbox.io/s/react-router-1-lk44e)):

```js
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}
```

Here you can see that React-Router provides some default React component that you can use to enable routing in your application. First, notice the top level `<Router>` component which wraps everything else. Then you define your navigation with the `<Link>` component and define each route with the `<Route>` component. The `<Route>` component maps a URL (defined with the `path` props) with a React component (defined with the `component` props).

## Dynamic parameters

Often, URLs are not static and you will need to be able to pass parameters. For example, imagine you build an online shopping application. You will have one page for each product and it would be great to have a unique URL for each page. React-Router let you define dynamic parameter ([interactive example](https://codesandbox.io/s/compassionate-https-jsf59)):

```js
function Product({ match }) {
  return <h2>Product: {match.params.name}</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <h2>Product List</h2>
          <ul>
            <li>
              <Link to="/products/laptop">Laptop</Link>
            </li>
            <li>
              <Link to="/products/tv">TV</Link>
            </li>
            <li>
              <Link to="/products/teddy-bear">Teddy Bear</Link>
            </li>
          </ul>
        </nav>

        <Route path="/products/:name" component={Product} />
      </div>
    </Router>
  );
}
```

> **Exercise **

TODO


## Further Reading

A lot of examples are available on the [official React-Router website](https://reacttraining.com/react-router/web/guides/quick-start).

