## Reacting to Changes

MOVE THIS TO STATE LESSON?
WANTED TO INCLUDE IT EARLY IF POSSIBLE BECAUSE IT DEMOS VIRTUAL DOM

Now let's write a more interesting app that responds to some user input. We'll see how React will take care of updating the DOM for you.

A counter is a common React example, showing the number of times a button has been clicked. First lets render a button and a counter which set to 0 clicks:

```js
let count = 0

class Counter extends React.Component {
    render() {
        return (
            <div>
                Count: {this.props.count}
                <button id="click-me">Click me!</button>
            </div>
        )
    }
}
function renderCounter() {
    ReactDOM.render(<Counter count={count} />, document.getElementById('root'))
}

renderCounter(count)
```

Now let's listen for clicks on the button and increment the counter ([interactive version](http://jsbin.com/nebatulaka/edit?js,output)):

```js
let count = 0

class Counter extends React.Component {
    // ...
}
function renderCounter(count) {
    // ...
}

renderCounter(count)

document.getElementById('click-me').addEventListener('click', () => {
    count = count + 1
    renderCounter(count)
})
```

As you can see, the DOM automatically updates when you render. This is an incredibly powerful feature of React. Even better, React will figure out exactly the right bits of the DOM that need to be changed. This makes it extremely efficient and fast. This is concept is called the "virtual DOM".
