![Draft lesson](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core 8

**What we will learn today?**

* [JS In the Browser (The DOM)](#js-in-the-browser)
* [AJAX](#ajax)
---

> Please make sure you're working on the [js-exercises repo](https://github.com/CodeYourFuture/js-exercises) **Week 5** during this class.

## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website.

### The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). But JavaScript doesn't know about any of that.

Thankfully, in JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
    <body>
        <h1> Welcome! </h1>
        <p> Hello world! </p>
    </body>
</html>
```

```js
var document = {
    body: {
        h1: "Welcome",
        p: "Hello world!"
    }
};
```

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```js
    document.querySelector('#mainHeader');
    document.querySelectorAll('p');
```

Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns an array).

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

```js
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
    }
```

You will notice in the example example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```js
    var myElement = document.querySelector('#myElement');
    myElement.style.backgroundColor = 'red';
```

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

```js
    var paragraph = document.createElement('p'); // here we're just creating it, element is not visible yet
    myElement.appendChild(paragraph); // now the element is added to our view, but it's empty
```

`document.createElement` accepts as an input any element type. So for example `document.createElement('article')` will create a new article element.

You can then change the text displayed inside elements using the `innerText` property:

```js
    paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```

We've been using `document.querySelector` to retrieve a single element.
To retrieve an array of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

```js
    //change the background of all the paragraph items on our page
    var paragraphs = document.querySelectorAll('p');
    for(var i=0; i<paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "blue";
    }
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the `className` property to set the class for an element instead of changing its styles directly:

```js
//before: <div id="myContainer"></div>
var container = document.querySelector('#myContainer');
container.className = "largeBlock";
//after: <div id="myContainer" class="largeBlock"></div>
```

To get the text from an Input field:

```js
var updateTitleBtn = document.querySelector('#updateTitleBtn');

updateTitleBtn.addEventListener('click', function() {
    var inputBox = document.querySelector('#titleInput');
    var title = inputBox.value;

    var titleElement = document.querySelector('#lessonTitle');
    titleElement.innerText = title;
    inputBox.value = title;
});
```

The above waits for click on a button. When the button is clicked, it gets the input box element (`inputBox` variable).
To get the entered text from it, we use the `value` property: `var title = inputBox.value`.

## AJAX

### Client/Server architecture

A **server** is a device or program that provides functionality to other programs or devices. There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet. They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The server communicates with **clients**. A client can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response** model: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.

![](client-server.png)

### HTTP Requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: **GET** and **POST**.

| Request type  | Description   |
| ------------- |:-------------:|
| GET          | Ask for a specified resource (e.g. show me that photo) |
| POST          | Send content to the server (e.g. post a photo) |


HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

### What is AJAX?

AJAX is a technique for implementing client-server communication in the browser.

Typically, the server holds the data, and only sends it to the client (web page) when there's a request. AJAX requests are sent after the page has loaded, usually in response to an action by the user. For example when the user clicks a button, some JavaScript will trigger an AJAX request to fetch data.

### Introduction to Fetch and asynchronous code

**fetch** is a way of creating HTTP requests in JavaScript.

```js
fetch('https://codeyourfuture.herokuapp.com/api/hello')
    .then(function(response) {
        return response.text(); // or response.json()
    })
    .then(function(text) {
        console.log(text); // Print 'Hello CodeYourFuture!'
    });
```

{% include "./homework.md" %}
