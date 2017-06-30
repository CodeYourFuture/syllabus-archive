APIs
---
- [Zapier course](https://zapier.com/learn/apis/)

API stands for Application Programming Interface, it as a way for programs to talk to each other, and exchange information.

Normally this involves a 'client' (your browser) asking a 'server' for information, the server then returns a response (usually in JSON).
![](./images/request-response-cycle.gif)

To use an API, we send HTTP requests.
A HTTP request is made up of 4 things:

1. URL (Uniform Resource Locator)
    - The location of data we want, e.g. http://www.google.com/
2. Method
    - Information about what we want to do with the data
        - GET: Get the data from the server
        - POST: Change the data
3. List of Headers
    - Extra information the server might want. (Don't worry about this for now)
4. Body
    - If we are sending a POST request, we can put the data we want to change inside the body


Once you have made a request, the server will return a response.
Responses contain two main things:

1. Status Code
    - A number that represents the status of the response
        - 200 = OK
        - 400 = Bad request
        - 404 = Not found
    - Full list: [http://www.restapitutorial.com/httpstatuscodes.html](http://www.restapitutorial.com/httpstatuscodes.html)
2. Body
    -  Normally this is the JSON data you requested



## Performing HTTP requests in JavaScript
- [w3schools documentation on XMLHttpRequest](http://www.w3schools.com/xml/ajax_intro.asp)

```JavaScript
var http = new XMLHttpRequest()

// Specify the Method and the URL we want to access
http.open('GET', 'http://www.mocky.io/v2/584c3d2d1200001b1e372b01')

// Function to be called as the request happens
http.onreadystatechange = function() {
    // readyState === 4 means the request has finished (http://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)
    // status === 200  means the request was OK
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); // The body returned by the server (as a string)
    }
}

http.send(); // Make the request
```

## REST
REST stands for Representational State Transfer. It is a method of organising APIs, in a consistent way.

https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340


## Exercise

1. Call http://www.mocky.io/v2/584c3d2d1200001b1e372b01 and display the contents of 'data'

1. Call https://jsonplaceholder.typicode.com/posts and display the title of the posts.
    Using the 'id' field in the posts, when a user clicks on a title, make a second request to `https://jsonplaceholder.typicode.com/posts/<id>` (where `<id>` is the number from the post), and display the body and the title of the post (from the response)


## Extra
Watch: https://www.youtube.com/watch?v=s7wmiS2mSXY
Read: https://www.mobapi.com/apis-introduction-and-context/