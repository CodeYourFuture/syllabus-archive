# Browser events

Browser events are actions that take place on our web page. They could be user triggered such as a mouse being clicked, a key being pressed or a form submitted. Alternatively, they could be triggered by the system such as a resource being loaded or an error occurring.

We can subscribe to those events using by registering an `eventHandler` to perform a certain action when an event is detected. For example, we may want to update a letter count on a text input when a user types or we may want to perform validation on a form before submitting it.

For each event subscription we will need 3 things.
1. `target` - this is the object where we are listening for events on. For example, it could be a link on which we would like to listen to for clicks.
2. `eventType` - as the name suggests, this is the type of event we ar listening for. There are dozens of possible events (see https://developer.mozilla.org/en-US/docs/Web/Events for full list). Common ones include
 - `click` - mouse click
 - `submit` - form submit
 - `keydown` - keyboard key being pressed
 - `mouseenter` - a mouse cursor being moved onto an element
 - `change` - value of a form input changing
3. `eventHandler` - A function that we want to execute when the event is detected

To subscribe to the actual event we use the `addEventListener` method of our `target` element like below

```js
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
    }
```

In the above code `myButton` is the target on which we listen to for `click` events and call the event handler `alertSomething` when the click is detected.

> **Exercise**:
> - Set a click listener on the donate buttons and increment the donated bikes counter with each click


### Event object
Just knowing that an event has happened is not particularly useful in most cases. Usually, we will want to know more about what exactly happened such as the coordinates of a mouse `click` or the new `value` of an input after it has changed.

Keep in mind that different event types will have characteristics that are specific to them. For example, `key` events will have a `event.char` property indicating the key that was pressed. `mouse` events will have `event.clientX` and `event.clientY` properties indicating the location of the mouse event on the screen, where (0,0) is the top left hand corner in the browser.

Every event object has `event.preventDefault()` which when called will prevent the default action of the event from being triggered. This is particularly useful to intercepting events and altering the behaviour when needed. For example, we can call `event.preventDefault()` on a `submit` event if the data in the form is not valid.

We can find out which element the event was triggered on from the `event.target` property.

> **Exercise**:
> - Prevent clicks on links from triggering a url change in the browser and instead `console.log` the coordinates of the click as well as the text inside the link

### Bubbling
> **Together**:
> - Let's place a `click` listener on the `.jumbotron` element and `console.log` the `event`
> - What happens when we click on the buttons?

Most events, though not all, have a default behaviour know as `bubbling` which results in events being propagated to the target element's parents. That means an event listener placed on the parent will be triggered after the event listener placed on the child. Why is this behaviour desired?

We can distinguish between the elements on which the event was triggered vs the element on which the event was detected.

- `event.target` is the element on which received the initial event
- `event.currentTarget` is the element on which the event listener detected the event

In some cases we may want to prevent an event from bubbling up. We can do so by calling the `stopPropagation` method on the event. Once it has been called, any event handlers placed by parent elements will not be triggered.

> **Exercise**:
> - Place a single event listener on the `body` of the document
> - `console.log` the text inside each linked clicked, but perform no action for clicks originating from inside the jumbotron.


# Resources
1. [Introduction to browser events](https://javascript.info/introduction-browser-events)
2. [Events](https://developer.mozilla.org/en-US/docs/Web/Events)
