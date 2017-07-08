![](https://img.shields.io/badge/status-draft-darkred.svg)
# JavaScript Core 4
** What we will learn today?**
- HTTP
- JSON
- AJAX
---

## HTTP

### What's a server?

A device or program that **provides functionality to other programs or devices**. There are database servers, mail servers, game servers, etc.

They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The server communicates with **clients**. Clients can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response model**: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.


>An example: We can use the Slack app (the client) to put our messages or pictures on Slack. The content is stored on the Slack servers and other clients can then also access the pictures.


### HTTP requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: GET and POST.

>With a **GET request** you can ask for specified resource (e.g. show me that Slack photo).

>With a **POST request** you can send content to the server to be appended to the web resource (e.g. post a photo on Slack).

HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

### AJAX (= Asynchronous JavaScript And XML)

AJAX is a set of useful methods for implementing client-server communication.

![AJAX Diagram](https://www.w3schools.com/xml/ajax.gif "AJAX Diagram")


AJAX just uses a combination of:

> - A browser built-in XMLHttpRequest object (to request data from a web server)
> - JavaScript and HTML DOM (to display or use the data)


**Ajax works behind the scenes, helping the webpage communicate with the server (with GET and POST requests).**

>client ----------GET request----------> server returns data to client

>client ----------POST request (with content)--------->server updates data with content

The server holds the data, but it only sends it to the webpage when there's a request. The request can be sent after the page has loaded, for example when a user clicks a button.

### Why Ajax?

There are other ways you can communicate between a client a server, such as using Web sockets. What's great about AJAX is that it makes it look like magic! The server and the client communicate effortlessly:

>Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background


### AJAX Example

Visit http://cyf-api.herokuapp.com and check if there is a message for Andrew.
Visit http://cyf-api.herokuapp.com and send a message to Andrew. You can use standard HTML form submission or an AJAX submission - see what the difference is.


### Let's Code!

How does the code work? Let's break it down into parts and see what each does.


#### POST Code

 ```javascript
  var request = new XMLHttpRequest(); 		//creating a request object

  request.onreadystatechange = function() {
    if (request.readyState === 4) {  // check if a response was sent back
      if (request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText; // the DOM change we would like to make once the request is finished
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText; // the DOM change to make if there is an error with the request
      }
    }
  }
  var url = 'http://cyf-api.herokuapp.com/chatroom?id=cyf';	                                        //server location
  var params = 'Here is some content'; 		// content we want to send
  request.open('POST', url, true);			// adding them to the request

request.setRequestHeader('Content-type', 'text/plain'); //header info
request.send(params); 							// sending the request
```


#### GET Code

 ```javascript
  var request = new XMLHttpRequest(); 	    //creating a request object

  request.onreadystatechange = function() {
    if (request.readyState === 4) {  // check if a response was sent back
      if (request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = 'http://cyf-api.herokuapp.com/chatroom?id=cyf';	                                    //server location
  request.open('GET', url);					// adding it to the request

request.setRequestHeader('Accepts', 'text/plain'); //header info
request.send(); 								// sending the request
 ```



### AJAX Exercise

Everyone should organise in pairs, one person writing code to **send data (POST)** and one to **receive it (GET)**. Once you’ve finished your code, combine it and put it into a html page. Now, try sending each other messages this way.

Don’t forget to use a **unique id** at the end of the url **(not 'cyf')** and let your partner know what it is!

## JSON - JavaScript Object Notation
---

- [Intro to JSON (w3schools)](http://www.w3schools.com/js/js_json_intro.asp)
- [Scott Lowe blog post on JSON](http://blog.scottlowe.org/2013/11/08/a-non-programmers-introduction-to-json/)

JSON is a text-based open standard designed for human-readable data interchange.
So what? This means JSON provides a way to communicate data in a common way - it is language independant.
It should look quite familiar to you, as it shares the same format as JavaScript Objects.

```JavaScript
{
    "key": "value"
}
```

You can take a JavaScript object, and turn in into JSON, via the JSON api:
```JavaScript
var myObject = {"key": "value"};
var jsonString = JSON.stringify(myObject);
console.log(jsonString);

'{"key":"value"}'
```

You can also turn a string into JSON:
```JavaScript
var jsonString = '{"key": "value"}';
var myObject = JSON.parse(jsonString);
console.log(myObject.key);

"value"
```

## Exercise
Take the following JSON string, turn it into an object, then show the results.
If you have time format the results to show individual keys and their values.

    '{"type": "pizza","toppings":["cheese","tomatoe"],"size":15,"crust":"stuffed","base":"deep pan"}'

# Resources
- DOM Examples and explanation on MDN - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
- AJAX - https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

# Homework
- Continue working on [the repository](https://github.com/CodeYourFuture/dom-ajax) you forked in this lesson
    - Open up **readme.md** and follow the instructions in there.
    - Submit Pull Request after completing each part.
- Follow Intro to AJAX course by udacity - https://classroom.udacity.com/courses/ud110 (register and signin if you need to)
    - Follow the Requests and API lesson
- Fork [this repo](https://github.com/CodeYourFuture/WebDeveloperTest) and follow the instructions
    - This is a project with several deadlines, make sure you understand the requirements very well and start as soon as possible. Also communicate regularly using both **email** and Slack.
