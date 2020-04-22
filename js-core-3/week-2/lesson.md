# JavaScript Core III - Week 2

## Learning Objectives

- The learner should understand what the acronym API means
- The learner can define what an `REST API`'s purpose is and why it is useful
- The learner should understand the structure of a `REST API` URL and how it can be manipulated to change the data
- The learner should be able to define what a `Promise` is
- The learner should understand what `fetch` is and what it is used for
- The learner should be able to use `fetch` to retrieve `JSON` from an `REST API`
- The learner should be able to parse the `JSON` and extract data from it
- The learner should be able to use `DOM` manipulation to add content to the `DOM`
- The learner should understand `window.onload` and `document.onload` and should be able to assign functions to run at specific life cycle events

## Agenda

The purpose of this class is to introduce to the student:

1. What are `APIs` and how to interact with them
2. How to use the `fetch` API to do AJAX calls

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
- Public: for everyone on the web (but may or may not need an account to use).

#### Architecture styles of API:

- Single purpose: API that gives a direct and specific service.
- Aggregated API: one API as a wrapper for multiple APIs.
- Web services API: bunch of APIs working together to form a whole app.

#### Basic structure of REST API

Endpoint: `https://api.example.com`

Endpoint with version: `https://api.example.com/v1`

Resources:

- `https://api.example.com/v1/users`
- `https://api.example.com/v1/users/create`
- `https://api.example.com/v1/users/1`
- `https://api.example.com/v1/users/1/edit`

Query params:

- `https://api.example.com/v1/users?limit=10`
- `https://api.example.com/v1/users?limit=10&sort=top`

### Example

- Give real life example like (Devices like TV, any machine + electricity power socket interface which provides power to any external device)
- Give an example of an API in production
  - [Game Of Thrones API](https://api.tvmaze.com/singlesearch/shows?q=game%20of%20thrones)

### Exercise

**Task (5 mins):**

Here is an example of Spotify's REST endpoint to allow you to get the tracks from a playlist

    GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks

**Task (5 mins):**

    On Instagram, you can access a post via the following endpoint:

    https://api.instagram.com/v1/media/{media-id}

    1. Write the URL of the endpoint to get the list of comments on a given instagram post?
    2. What HTTP verb will you use to make requests to this endpoint?

#### Recap

**Question (5 mins):**

    Which of the following statements below about APIs is false?

    A) Public APIs can be accessed by anyone on the Internet.
    B) You must use Javascript to access an API.
    C) APIs can control access to data or features of an application.
    D) You can change data via an API.

**Question (5 mins):**

    Give an example of a company that uses an API to allow access to their data.

## 2. How to use `fetch` to do network requests

### Explanation

- A way for websites to request from other places on the internet
- Uses Promise structure
- The Fetch API is defined in the browser (window.fetch)
- Only modern browsers support it (show [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### What is Fetch made of?

Fetch uses a javascript pattern called "Promises" which has a very specific structure.

Using Promises allows us to schedule functions to be called after some asynchronous code finishes running. We can specify different functions depending on whether the asynchronous code was successful or ran into an error.

Promises can make it easier to split our code into small well-named functions, and make code easier to read. They also make it easier to handle errors.

```javascript
  let clickCount;

  document.querySelector("button").addEventListener("click", () => clickCount++);

  let promiseOfClicks = new Promise(function(resolve, reject) {
    clickCount = 0;
    console.log("Counting clicks for 5 seconds...");
    setTimeout(() => {
      if (clickCount > 0) {
        resolve(clickCount);
      } else {
        reject();
      }
    }, 5000)
  });

  promiseOfClicks
    .then(clicks => console.log(`Clicked ${clicks} times`)
    .catch(error => console.warn(error));
```

### Example

#### Example 1

```javascript
//Retrieve the JSON
fetch("https://seriousnews.com/api/headlines")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((headlines) => {
    console.log(headlines);
  })
  // If something goes wrong
  .catch((error) => console.log(error));
```

#### Example 2

Wouldn't it cool to make a new friend with just the click of a button?

Write a function that makes an API call using `fetch` to `https://www.randomuser.me/api`

- The function should make an API call to the given endpoint: `https://www.randomuser.me/api`
- Log the received data to the console
- Incorporate error handling
- Show how you can build a profile page for the user using the DOM
  - Add a name
  - Add a profile picture
  - Add some styling using CSS

### Exercises

#### Exercise 1

In groups the students should create a page of details about the United Kingdom.

The API endpoint can be found [here](https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true)

The website should include

- The name of the country
- The country's capital city
- An unordered list of the country's name in other all of the other returned languages

##### Steps

Example `html` and `javascript` files can be found in the section below

1. Create a `HTML`, `CSS` and `JavaScript` file to hold different types of code
2. In your `HTML` file, write a simple basis for your website (e.g. [this](https://www.sitepoint.com/a-basic-html5-template/))
   - Make sure all of your `HTML`, `CSS` and `JavaScript` files are linked together!
3. Write a function using fetch that retrieves the `JSON` from the _Country API_
   - To make sure it's working print the JSON to the console using `console.log()`
4. Create a `h1` tag on the website using DOM manipulation and add the country's name inside it
   - Go back to [Week 5](../../js-core-2/week-2/lesson.html) if you need a reminder
5. Create a `h2` tag on the website using DOM manipulation and add the capital city's name inside it
6. Create a `ul` tag on the website using DOM manipulation
   - For each of the translated names in the JSON, add a `li` tag
7. Uncomment the lines inside `onLoad()` to load other countries details!

**Extra**

- Load the country's flag into an `img` tag
- Add CSS to make your website look really nice
- Add other information from the JSON to your Country Details

##### Framework Files

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Country Information</title>
    <meta name="description" content="Country Information" />
    <meta name="author" content="Code Your Future" />

    <link rel="stylesheet" href="styles.css?v=1.0" />
  </head>

  <body>
    <div id="content"></div>
    <script src="scripts.js"></script>
  </body>
</html>
```

**scripts.js**

```javascript
// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(countryURL) {}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData(
    "https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true"
  );

  /** Remove this line when you have completed the task

    getData("https://restcountries.eu/rest/v2/name/France?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Germany?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Spain?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Portugal?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Hungary?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Russia?fullText=true");

    */ // Remove this line when you have completed the task
}

window.onload = onLoad;
```

##### Finished Example

You can find the finished example of this website [here](js-core-3\week-1\completed_country_website).

##### Recap

**Question (5 mins):**

    Which of the following statements about Promises is false?

    A) The function passed into a promise is executed as soon as the promise is created.
    B) You must always have a then method in a promise.
    C) A promise can return multiple values.
    D) Rejected is a valid promise state.

**Question (5 mins):**

    Complete the following sentence:

    Fetch is a web API that allows you to **\_** from **\_**.

**Task (5 mins):**

    Complete the rest of this code to connect to the following API: `https://dog.ceo/api/breeds/image/random`

        fetch(_____)
        .then(_____)
        .then(body => console.log(body))
        .catch(error => console.log(error));

    1. Post your code on Slack
    2. Post the image you retrieved on Slack
