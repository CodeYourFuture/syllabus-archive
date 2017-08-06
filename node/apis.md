# APIs
APIs (Application Programming Interfaces) provide a way for applications to communicate with each other. We already consumed an API earlier in the day: **Github API**. We managed to *communicate* with Github and get important information. We - the client - can use this information in a number of different ways. Our client, in this case, is a Web page but it could have easily been a Mobile Application, or a TV setbox etc...

> **Let's** watch this video about APIs - [What is an API](https://www.youtube.com/watch?v=s7wmiS2mSXY)

> **Exercise**: Let's expose the `posts.json` as an API for other clients to consume through the url `/api/get-posts`.
> Hint: make use `res.sendFile`

## REST API
REST (REpresentational State Transfer) and RESTful APIs provide a way (an architecture) for building APIs that is simple and scalable.

There are many constraints and aspects to building a REST API, but one fundamental constraint is the use of a URL (Uniform Resource Locator) and HTTP Methods (GET, POST, PUT, DELETE etc..)

In our *endpoint* that we just created `/api/get-posts`, the *get* part of the URL is redundant as the HTTP Method `GET` already tells that we are *GETting* a *Resource*. The Resource in this case is called **posts**.

> Exercise: Let's rename our endpoint to `/posts` so that it follows RESTful architecture.
>
> **What would the endpoint for creating posts be called?**

> **Watch**: https://www.youtube.com/watch?v=7YcW25PHnAA - What is a REST API (up to 3 minutes)

REST is a big topic that we will revisit again. The table below from Wikipedia shows how a typical RESTful API would look like.

![](assets/REST.png)
[Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer#Uniform_interface)

For now, remember when building APIs, to use **Resource** names to identify your endpoints and make use of the **HTTP methods (Verbs)** to describe operations performed on those resources.
