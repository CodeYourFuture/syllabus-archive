## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website.

## The DOM

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

```javascript
var document = {
    body: {
        h1: "Welcome",
        p: "Hello world!"
    }
};
```

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```javascript
    document.querySelector('#mainHeader');
    document.querySelectorAll('p');
```
Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns an array).

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

```javascript
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
    }
```

You will notice in the example example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.

> **Exercise**:
> - Fork the repo [here](https://github.com/CodeYourFuture/dom-ajax) and clone it locally.
> - Open `index.html` in your browser.
> - In `./js/main.js` write code so that when a user presses the **Donate a bike today** button, an **alert** pops up, thanking them for their donation.

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```javascript
    var myElement = document.querySelector('#myElement');
    myElement.style.backgroundColor = 'red';
```

> **Exercise**:
> Change your code, so that instead of **alerting** something when you press the button, it changes the background color of the Jumbotron to `red`.

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

```javascript
    var paragraph = document.createElement('p'); // here we're just creating it, element is not visible yet
    myElement.appendChild(paragraph); // now the element is added to our view, but it's empty
```

`document.createElement` accepts as an input any element type. So for example `document.createElement('article')` will create a new article element.

You can then change the text displayed inside elements using the `innerText` property:

```javascript
    paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```
> **Exercise**:
> When **Add to learn more** button is clicked it should:
> - create a new paragraph element
> - set its inner text property to some message you want
> - add the paragraph to the `#mainArticles` element just below **Learn more**

We've been using `document.querySelector` to retrieve a single element.
To retrieve an array of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

```javascript
    //change the background of all the paragraph items on our page
    var paragraphs = document.querySelectorAll('p');
    for(var i=0; i<paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "blue";
    }
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

> **Exercise**:
> Every time the **All images** button is clicked it should reduce and width and height of all images on the webpage by `10`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the `className` property to set the class for an element instead of changing its styles directly:

```javascript
//before: <div id="myContainer"></div>
var container = document.querySelector('#myContainer');
container.className = "largeBlock";
//after: <div id="myContainer" class="largeBlock"></div>
```

> **Exercise**:
> Remember the button that changes the color of the jumbotron to `red`? Go back and try to do that without modifying the styles. You can use the `.red` class.

> **Advanced Exercise**:
> - When you type something into the box below the **Jumbotron** and click the **Add** button it should add a new **Article** below **Learn More** with what you typed as the inner text. It should then clear the input.
> - Make sure you create a proper **article** that looks like the others above it (it should be an article element, that contains a paragraph element, that contains your text, it should also have the class **article**).

# Resources
1. DOM Examples and explanation on MDN - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
