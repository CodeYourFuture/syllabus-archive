# Homework

* Deploy to Heroku if you haven't yet
* Add a route `posts/:postid` that displays a specific post - Read about route
  parameters on
  [Express documentation](https://expressjs.com/en/guide/routing.html#route-parameters)
  * When the user clicks on a route in the home page, navigate them to your
    route.
  * Amend your JSON structure to have a **postId** that you can use it to
    identify which post we want to display.
* Implement the Admin page.
  * Write a posts endpoint that you can hit and that should save to the JSON
    file (use the helper functions we added under **helpers/savePost**)
  * Make an AJAX call from the **front end** (the admin page) to your new
    endpoint.
  * You might need to use `formidable` or `body-parser` middleware to get the
    data on the server.
* Consume a posts API built by another colleague (and deployed to Heroku) to
  display their latest blog posts. You can display the posts on any page that
  you see suitable (or add a new page).
* Secure the Admin page so that it's only visible if a certain query parameter
  is provided
  * Can you go a bit further with adding proper security? Research the internet
    for solutions in **Express.js**

# Resources

* Read: [Callback hell](http://callbackhell.com/)
* Review: [MDN - Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* Read: [StackOverFlow answers to What is REST](https://stackoverflow.com/a/671132)
* Read: [How I explained REST to my wife](http://web.archive.org/web/20130116005443/http://tomayko.com/writings/rest-to-my-wife)
