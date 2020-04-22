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

- API stands for `Application Programmer Interface`
- APIs are created by providers and used by consumers
- It is a specific part of a larger system that can be contacted from the internet.
- When we connect to an `API` we say that we are connecting to an `Endpoint`
- Some well-known APIs are [Facebook APIs](https://developers.facebook.com/), [Twitter APIs](https://developer.twitter.com/en/docs), [Maps APIs](https://developers.google.com/maps/documentation) and many many more
- In particular, an API doesn't care what language or technology is used in the consumer or the provider

#### Why do we need APIs?

Imagine that I am a big social network and I want to give developers all over the world access to the data on the people on my website.

What are some problems that I would have with sharing my data with everyone?

1. Some of the information that I have is public (for example, peoples names) whilst other information I have is private (for example, email addresses). I want to make sure that I only ever give developers access to peoples names but never to their email addresses - otherwise they could send them spam email.
2. I want to make sure that when developers ask for my data I can control who has access to it. I like that my users data is being used to make their lives better but I don't like it when companies try to sell them new stuff they don't need.
3. Some developers might want to change some of the users details on my social network and this would get very messy quickly if people where allowed to change whatever they wanted

An API is a special type of program what acts as a **gatekeeper** to all of this information. Having an API means that I can control which information is shared about my users and with who it is shared. Perfect!

#### Types of APIs:

- Private: for employees only under a company network for internal use.
- Semi-private: for clients who paid for the API.
- Public: for everyone on the web (but may or may not need an account to use).

#### Architecture styles of API:

- Single purpose: API that gives a direct and specific service.
- Aggregated API: one API as a wrapper for multiple APIs.
- Web services API: bunch of APIs working together to form a whole app.

#### Basic structure of REST API

Let’s say you’re trying to find videos about Batman on Youtube. You open up Youtube, type “Batman” into a search field, hit enter, and you see a list of videos about Batman. A REST API works in a similar way. You search for something, and you get a list of results back from the service you’re requesting from.

An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

`REST` determines how the `API` looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their `API`. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

Each URL is called a `request` while the data sent back to you is called a `response`.

##### Examples

This endpoint will generate a random person for us

https://randomuser.me/api/

We can Query params:

- We only want to generate women
  - `https://randomuser.me/api/?gender=female`
- We only want to generate British people
  - `https://randomuser.me/api/?nat=gb`
- We only want to generate British women
  - `https://randomuser.me/api/?gender=female&nat=gb`

### Exercise

**Task (5 mins):**

    Here is an API that gets you random pictures of dogs of different breeds

    https://dog.ceo/api/breed/{BREED_NAME}/images/random

    1. Write the URL of the endpoint to a picture of a `greyhound` dog
    2. Write the URL of the endpoint to a picture of a `pug` dog
    3. Write the URL of the endpoint to a picture of a `shiba` dog

    You can test this is working by putting it in your browser

### POST vs GET

So far we've been using examples of `GET` requests which is the most common type of `request` that we'll be using at the moment.

It's also important that you understand that there are other types of requests that we can make to APIs.

One in particular is a `POST` request which is used to send information up to a server in order to change something on the website.

| GET                                 | POST                                      |
| ----------------------------------- | ----------------------------------------- |
| Used to retried data from a website | Used to send data to a website            |
| Parameters are in the URL           | Parameters are in the body of the request |
| Shouldn't change the server         | Should change the server                  |

#### Exercise

As a class, you should discuss three examples when you think that a `POST` request would be used and three examples when a `GET` request would be used.

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
- Fetch is defined in the browser which means it can be used without using an external library (`window.fetch`)
- Only modern browsers support it (show [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by Mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

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
