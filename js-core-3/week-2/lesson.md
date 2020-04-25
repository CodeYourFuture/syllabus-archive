# JavaScript Core III - Week 2

## Learning Objectives

- The learner should understand what the acronym API means
- The learner can define what an `REST API`'s purpose is and why it is useful
- The learner should be able to edit the structure of a `REST API` URL and to change the data retrieved from the server
- The learner should be able to define what a `Promise` is
- The learner should understand what `fetch` is and what it is used for
- The learner should be able to use `fetch` to retrieve `JSON` from an `REST API`
- The learner should be able to parse the `JSON` and extract data from it
- The learner should be able to use `DOM` manipulation to add content to the `DOM`
- The learner should understand `window.onload` and `document.onload` and should be able to assign functions to run at specific life cycle events

## Agenda

The purpose of this class is to introduce to the student:

1. Debugging Quiz
2. What are `APIs` and how to interact with them
3. How to use the `fetch` API to do AJAX calls

## 1. Debugging Quiz

Let's see what you remember from last week!

_Answer in a thread on Slack_

1. What are the four questions we ask ourselves in the Debugging Framework?
2. What are three of the tools we could use to debug our programs?
3. What is a `syntax` error?
4. What is a `reference` error?
5. What is a `type` error?

## 2. What are APIs and how to interact with them

### Explanation

- API stands for `Application Programming Interface`
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

An API is a special type of program what acts as a **gatekeeper** to all of this information. Having an API means that I can control which information is shared about my users and who it is shared with. Perfect!

#### Types of APIs:

- Private: for employees only under a company network for internal use.
- Semi-private: for clients who paid for the API.
- Public: for everyone on the web (but may or may not need an account to use).

#### Basic structure of REST API

Let’s say you’re trying to find videos about Batman on Youtube. You open up Youtube, type “Batman” into a search field, hit enter, and you see a list of videos about Batman. A REST API works in a similar way. You search for something, and you get a list of results back from the service you’re requesting from.

An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it. An example of a server is the application on a computer hosting a website and an example of a client is the browser on the phone trying to access the website.

More APIs which you are likely to come across are called `REST` APIs and so these are they type which we will discuss here. `REST` determines what the `API` looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their `API`. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

Each URL is called a `request` while the data sent back to you is called a `response`. 

##### Examples

Here is the API endpoint for Transport For London

https://api.tfl.gov.uk

The data from this endpoint will be used by many apps that you use every day - Google Maps and Citymapper to name two.

This endpoint will get location of all of the Bikepoints in London.

https://api.tfl.gov.uk/BikePoint

That's a lot of Bikes! It would be better if we could search for a location. Luckily this API let's us search for places.

https://api.tfl.gov.uk/BikePoint/Search?query=Clerkenwell

This API also has lots of other endpoints that we can use to get other data. For example, lets find the Air Quality of London.

https://api.tfl.gov.uk/AirQuality

As you can see the URL changes the data that we get from the API. This can be broken down like this

![](./assets/api-breakdown.png)

### Exercise

**Task (5 mins):**

    Here is an API that gets you random pictures of dogs of different breeds

    https://dog.ceo/api/breed/{BREED_NAME}/images/random

    1. Write the URL of the endpoint to get a picture of a `greyhound` dog
    2. Write the URL of the endpoint to get a picture of a `pug` dog
    3. Write the URL of the endpoint to get a picture of a `shiba` dog

    You can test this is working by putting it in your browser

### POST vs GET

So far we've been using examples of `GET` requests which is the most common type of `request` that we'll be using at the moment.

It's also important that you understand that there are other types of requests that we can make to APIs.

One in particular is a `POST` request which is used to send information up to a server in order to change something on the website.

| GET                                 | POST                                      |
| ----------------------------------- | ----------------------------------------- |
| Used to retrieve data from a website | Used to send data to a website            |
| Parameters are in the URL           | Parameters are in the body of the request |
| Shouldn't change the server         | Should change the server                  |

#### Exercise

As a class, you should discuss three examples when you think that a `POST` request would be used and three examples when a `GET` request would be used.

#### Recap

**Question:**

    Which of the following statements below about APIs is false?

    A) Public APIs can be accessed by anyone on the Internet.
    B) You must use Javascript to access an API.
    C) APIs can control access to data or features of an application.
    D) You can change data via an API.

**Question:**

    Give an example of a company that uses an API to allow access to their data.

**Question:**

    What is the `myapi/` part of a url called in this url?
    http://www.google.com/**myapi**/

## 3. How to use `fetch` to do network requests

### Explanation

- A way for websites to request from other places on the internet
- Fetch is defined in the browser which means it can be used without using an external library (`window.fetch`)
- Fetch is available in nearly all browser but it's good to check which ones it won't work in
  - We can use this website to help us - [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by Mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### What is Fetch made of?

Fetch uses a javascript pattern called "Promises" which has a very specific structure.

Using Promises allows us to schedule functions to be called after some asynchronous code finishes running. We can specify different functions depending on whether the asynchronous code was successful or ran into an error.

Promises can make it easier to split our code into small well-named functions, and make code easier to read. They also make it easier to handle errors.

You can think of a Promise as you would think of a promise you make to another person - you make a promise that something will happen in the future. For example - I promise to call you later, I promise to go to the shops and buy milk later.

In this example we

1. Get the `Promise` that we will get the milk from the shops (this could take a long time so it's good that it's a `Promise`!)
2. When the milk has arrived from the shop `then` I should drink it and `return` the bottle so I can do something else with it
3. When I've drank the milk `then` I should recycle the bottle
4. If anything goes wrong with those steps I should `catch` the error and `warn` everyone what happened

```javascript
getMilkFromShops
  .then((milk) => {
    console.log(`I've got the milk`);
    milk.drink();
    return milk.bottle;
  })
  .then((bottle) => {
    console.log(`I'm going to recycle the bottle`);
    bottle.recycle();
  })
  .catch((error) => console.warn("Oh no, I dropped the milk"));
```

### Example

#### Example 1

_Live Coding Exercise_

Let's step through how the Fetch function is used and what it is comprised off

```javascript
//Retrieve the JSON
fetch("https://cat-fact.herokuapp.com/facts")
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

_Live Coding Exercise_

Wouldn't it be cool to make a new friend with just the click of a button?

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

```
Complete the following sentence:

Fetch is a web API that allows you to **\_** from **\_**.
```

**Task (5 mins):**

```
Complete the rest of this code to connect to the following API: `https://dog.ceo/api/breeds/image/random`

    fetch(_____)
    .then(_____)
    .then(body => console.log(body))
    .catch(error => console.log(error));

1. Post your code on Slack
2. Post the image you retrieved on Slack
```
