# Deploying to Heroku

Heroku is a cloud platform as a service (PaaS) that lets companies build, deliver, monitor, and scale apps. Developers use Heroku to deploy, manage, and scale modern apps. Heroku is fully managed, giving developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure.

1. Go to https://signup.heroku.com/ and signup for an account
    - It will send a verification to your email so make sure you've entered a valid email
2. Download the Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. We need to do a small tweak to our app to be ready to be deployed on Heroku.

On server.js, add the `process.env.PORT` bit of code
```js
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

This tells our server to look for an **environment variable** called `PORT` and use it to run the server, otherwise use Port 3000. When the server runs on heroku, then Heroku sets the `PORT` to the correct value.

`git add` and `commit` your change.

4. Now open the command line in the folder where you have your **express-workshop** repo running. If you run the command `git remote -v`, you should see one remote **origin** pointing to your repo.

Run these commands:

`heroku login`

> This will ask you for your heroku email and password that you used to register.

Once you're logged in:

`heroku create`

> The heroku create command creates a new application on Heroku – along with a git remote that must be used to receive your application source.

If you check `git remote -v`, you should see a second remote called **heroku**.

Now push your code to heroku `git push heroku master`. The push will run few commands from Heroku, then you should see a url similar to `https://some-random-name-XXXX.herokuapp.com` - go to the URL and if all goes well, your app should be up and running.

To read more about Heroku and deploying Node Apps to Heroku, check
https://devcenter.heroku.com/articles/git and https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
