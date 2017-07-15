## WEEK 3 - Node CV App

### Morning!

We've set up another repository (https://github.com/Code-Your-Future/node-cv-app) for you to fork (grab a mentor if you're curious or confused about all the boilerplate).

## Goal

Remember the CV you made all those months ago? This week you will be building an updated version powered by Node.js. You will fetch data from a real-world API (the Github API), perform some operations on that data, and then use it to populate Handlebars templates (this should sound familiar, because you did a similar thing last week). Finally, you will deploy your CV to the internet.

## Practical tasks

### API client
 - complete the `fetchFromGithub` method in `/server/lib/github-client.js` so that the **should retrieve user profile information** test passes
 - `/users/{username}/events/public` is a github endpoint that returns all a user's activity on github. Use this, and the documentation about event types https://developer.github.com/v3/activity/events/types/, to add a `getUserPullRequests` method to the github client which retrieves a list of a user's pull requests. The **should retrieve user pull requests** test should pass.

### Controllers
 - Set up a CV controller that outputs your existing HTML CV, using Handlebars templates (if you don't have your existing CV, make a simple one)
 - Add your Github user profile and pull request information to this page by using the Github client

### Middleware
 - add error handling middleware to send a 404 if the user requests some url not supported by your app, or 503 error if anything goes wrong

#### Questions to think about
 - What approaches can you use to make it easier to work with complex data like the responses from the Github API?
 - Why haven't we written all the code in a single `app.js` file?
 - Why are we passing your Github user name from the controller to the github client? Why don't we just 'hard code' it into the github client?
 - How are controllers and middleware different? How are they similar?

### Extension tasks
 - use `?format=json` query string to send a json only response
 - set up a user controller to send the same information, minus your CV, for any user. Try to minimise how much you copy and paste code - can some of the code you wrote be extracted into another shared module in your `/lib` directory
 - using the documentation, find some other interesting data from the github api to put in your CV. Use `Promise.all()` to wait for all your api calls to respond, and output all the data in your CV page
 - extend your error middleware to send a custom 404 response if a user is not found

### Deploying to Heroku
- follow this guide to get your app running on a server: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction (skip the 'prepare your app' section)

## Important concepts

- Modular JavaScript:
  - D.R.Y.
  - `require` and `module.exports`
  - how and why to split your code out of `server.js` into `app.js`, `controllers/`, `lib/`
- Error handling
  - status codes: `404` vs `503`
- The lifecycle of a `request` and `response` in express
  - Middleware: `app.use()`
  - Routes: `app.get()`, `app.post()` etc.
  - Route handling with Controllers
  - sending a response: `response.render()`, `response.json()`, `response.send()` etc.
  - what are the `req` & `res` objects doing, really?
- Requesting and using complex data from real-world APIs
  - doing async operations with callbacks and promises
  - useful methods for dealing with JS data structures
  - using documentation
0Looking
