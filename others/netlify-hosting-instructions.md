# Hosting your React app on the web, using Netlify

Note: these instructions are for React apps that have been created with the command `create-react-app`.

## Getting set up

### Install the netlify-cli software, _once_:

In a terminal, from _any_ directory, run the following to install `netlify-cli` globally.

```
npm install netlify-cli -g
```

If this fails with errors, run it again with superuser privileges, using `sudo`:

```
sudo npm install netlify-cli -g
```

### Create a netlify account

Visit https://netlify.com/ and create a free account.

## "Build" your React app

First navigate with `cd` to the directory for your React app that you want to host. (Let's assume it's called cyf-hotel)

```
cd cyf-hotel
```

Now, `build` the app:

```
npm run build
```

This will create (or update) a `build` directory within your current directory. This contains a _prepared_ version of your app, ready to be hosted. (There are many ways to host it.)

### Host the app for the first time on netlify

```
netlify deploy --prod
```

It will ask some questions.

NOTE: You can _only_ use the _keyboard_ (UP/DOWN arrows, and ENTER) to input the answers to these questions.

First it will try to use your browser to authenticate you. Depending on your computer, it may launch a new browser tab or it may fail to do so.

If told to do so:

- open the given URL in the browser to authenticate

In all cases:

- Go to your browser, press "Authenticate" on the netlify tab that has just been opened.
- Go back to the terminal. It should display that auth was successful, and it should ask you more questions:

- Choose: `Create & Configure a new site`
- Choose a site name like: `cyf-ahmet-hotel`
- When asked for _team_, _DON'T_ select `CYF` if it is an option. Choose _your own user name_ as a team.
- When asked for deploy path, enter `build`.

_That's it, all done._

- Visit the live site URL that netlify reports at the end.
- Check your app is there and works!
- Test it on your phone!
- Share the url with someone in the class!

## What if I want to make changes to my app?

After you make changes, you will want to _build_ and _deploy_ again, in order to host your updated app. Here is how:

- Make changes to your app
- Test the changes

- If you're ready to update the hosted version:

```
npm run build
netlify deploy --prod
```

# Troubleshooting

# Deleting your hosted site

If you decide you don't want your site hosted:

- log in to https://netlify.com/
- select your site from the list
- click on site settings
- scroll down and choose _delete this site_
- follow the instructions to confirm

# Advanced Section: You can ignore this!

To make updating your site easier, you can make some small adjustments (suggested by Jon R Sharpe):

- You can specify the deploy directory in the Netlify `deploy` command, by adding `--dir ./build`. This way, it won't ask you to type it in.
  Example:

`netlify deploy --prod --dir ./build`

- You could make a custom command to do build and deploy together. Here's how:

Edit `package.json` to add `"deploy": "npm run build && netlify deploy --prod --dir ./build"` to the `scripts` object.
Then you can just run `npm run deploy` and the build and deploy step will both be done for you. Be careful when you edit that file, and copy and paste exactly from here!

# Notes for mentors

These notes focus on doing deployment via the command line.  For github-based repos, note that it is also possible to set up netlify using only github and the browser.
