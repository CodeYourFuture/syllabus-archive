React Lesson 3
---


Recap
---
* React
  * create-react-app magic
  * Important parts of a component:
    * Constructor, Render
    * Lifecycle methods: componentDidMount
  * Dumb and Smart Components (props and state)
  * JSX
    * React component always capitalised
    * Embedding code
    * Mapping arrays
  * ES6: Class, extends, constructor, modules (import/export), arrow functions, this, others: const/let
  * Thinking in React

In development you are often given specification of a piece work with example design and data:

![Inventory data table](https://facebook.github.io/react/img/blog/thinking-in-react-mock.png)

```json
[
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
];
```
Steps to conceptualise the solution with `React`:
- 1: [Break The UI Into A Component Hierarchy](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)
- 2: Build A Static Version
- 3: Identify the State and where it should live

[Exercise: Code Review](http://codepen.io/lacker/pen/vXpAgj)


Unit Testing
---
* Importance of testing: Why do we do need it?
 * The problem with Legacy code: Legacy code is any code that doesn't have tests
* Types of testing:
 * Manual: Smoke testing, QA testing
 * Automated: Functional/Unit, Integration, End-to-End
 * Regression testing
* Unit Tests: normally they are developer's responsibility
 * TDD/BDD
* Tool chain: Lots of tools, Jasmine, Mocha, Chai, Jest etc etc - Do not worry at this stage

[Exercise: Unit testing](https://codepen.io/kabaros/pen/bgWYVo)

Routing
----
React can be used as a `Single Page Application`, i.e. providing full experience of an application with many views within one page with several components.

However it is still possible to support `routing` by associating and displaying different components for different URLs.

Routing is usually achieved in React with a library such as `React Router`. You can find more information about this library with examples [here](https://github.com/ReactTraining/react-router).

[Exercise: Use React Router](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/01-setting-up)


HomeWork
----
Continue building last week's app. As we get familiar with retrieving data and displaying it, we take our project into the next step.

We want to break the app into different pages which the users can navigate around (with the Back/Forward button or typing a url) without losing context.

The App will consist of three pages:

1. Home: displays a list of all areas (url: / )
2. Area: shows the organisations in a specific area (url: /area/{areaName} )
3. Organisation View: shows once specific organisation information (url: /organisations/{organisationName})


In order to implement this behaviour, we will use [React-Router](https://github.com/ReactTraining/react-router) library.

Bonus:
* Implement a fuzzy search functionality in the Area page where users can search by name or website etc..
* Use a library called underscore, find it online, read its documentation and npm install it. And use it!
