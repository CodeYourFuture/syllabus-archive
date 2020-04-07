# Lesson Plan JavaScript3 Week 1

## Agenda

The purpose of this class is to introduce to the student:

- What are `APIs` and how to interact with them
- What is `AJAX` and how to apply it using `Fetch`

## Core concepts

## 1. What are APIs and how to interact with them

### Explanation

- APIs are created by providers and used by consumers (BE provider, FE consumer)
- Part of an application that can be communicated with from an outside source
- Connect to it using "endpoints"
- Software well-known APIs (Fb APIs, Twitter APIs, Maps APIs, weather APIs);
- API doesn't care which language or technology is used in the consumer or the provider

#### Types of APIs:

- Private: for employees only under a company network for internal use.
- Semi-private: for clients who paid for the API.
- Public: for everyone on the web.

#### Architecture styles of API:

- Single purpose: API that gives a direct and specific service.
- Aggregated API: one API as a wrapper for multiple APIs.
- Web services API: punch of APIs working together to forma whole app.

#### Basic structure of REST API

- Endpoint: https://api.example.com
- Endpoint with version: https://api.example.com/v1
- Resources:

* https://api.example.com/v1/users
* https://api.example.com/v1/users/create
* https://api.example.com/v1/users/1
* https://api.example.com/v1/users/1/edit

- Query params:

* https://api.example.com/v1/users?limit=10

### Example

- Give real life example like (Devices like TV, any machine + electricity power socket interface which provides power to any external device)
- Give an example of an API in production
  - [Game Of Thrones API](https://api.tvmaze.com/singlesearch/shows?q=game%20of%20thrones)

### Exercise

## 2. How to use the `fetch` API to do AJAX calls

### Explanation

- Modern replacement of XMLHttpRequest
- Uses Promise structure
- The Fetch API is defined in the browser (window.fetch)
- Only modern browsers support it (show [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Example

#### Exercise 1

```javascript
fetch("https://seriousnews.com/api/headlines")
  .then(function (response) {
    response.json();
  })
  .then((headlines) => {
    console.log(headlines);
  })
  .catch((error) => console.log(error));
```

#### Exercise 2

Wouldn't it cool to make a new friend with just the click of a button?

Write a function that makes an API call using `fetch` to `https://www.randomuser.me/api`

- The function should make an API call to the given endpoint: `https://www.randomuser.me/api`
- Log the received data to the console
- Incorporate error handling
- Show how you can build a profile page for the user using the DOM
