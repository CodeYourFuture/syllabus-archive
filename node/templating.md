# Templating
> **Exercise**: Let's change the text for the link, **Contact**, to **Contact Information**.

    - How many files do you have to change? Wouldn't be nice if we could change one file and that reflects in all pages.

At the moment, we're just serving static HTML files from the *public* folder. **NodeJS** and **ExpressJS** allows us to build dynamic web pages.

> A server-side dynamic web page is a web page whose construction is controlled by an application server that processes server-side scripts. In server-side scripting, parameters determine how the assembly of every new web page proceeds, including the setting up of more client-side processing.

## Websites - a small detour

What is wrong with this [website?](http://cyf-template-1.s3-website-eu-west-1.amazonaws.com/)

Is this one any [better?](http://cyf-template-2.s3-website-eu-west-1.amazonaws.com)

The final view is [here](http://cyf-template-3.s3-website-eu-west-1.amazonaws.com/)

What was missing in the first example?

![alt text](https://s3-eu-west-1.amazonaws.com/cyf-template-1/data.json.png)

So what is the point of all these?

![alt text](https://s3-eu-west-1.amazonaws.com/cyf-template-1/html-data-template.png)


## Template Engines
A template engine enables you to use static template files in your application. At **runtime**, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page, as it reduces duplicate code ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

Some popular template engines that work with Express are **Pug**, **Mustache**, and **EJS**.

## Handlebars Templating Engine

We will use [Handlebars](https://github.com/ericf/express-handlebars) as the templating engine for this class.

To add it to your project:
`npm install --save express-handlebars`

Then in your `server.js`, we need to configure the `middleware` for Handlebars.

```js

// Add this to the top of your file
const exphbs  = require('express-handlebars');

// Then these two lines after you initialise your express app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
```

> Let's look at the folder `views/layouts/main.handlebars`

- There is a **placeholder for body** where the "body" get injected - can you find it?
- Notice the *index.handlebars*, *my-cv.handlebars* and *admin.handlebars*.


Then add these routes:

```js
app.get('/', function (req, res) {
    res.render('index');
});
```

> **Exercise**: Add similar endpoints for `/my-cv` and `/admin`.

> **Exercise**: Let's create a template called `contact` and delete the endpoint we created earlier for `/contact` - render a view instead - similar to what we did with the previous endpoints.

> **Exercise**: Remember how we changed **Contact** to **Contact Information**? Try to change now **Contact Information** to **Get in touch**. Was it any easier?

## Template passing info from Controller to Template
When we were using the *static* HTML pages from *public/* folder - the heading text shown on top of the page (on the photo) used to change when we go to different pages. Now that we switched to the template, we've lost that behavior as the code for this part comes from the centralised **Layout** (views/layouts/main.handlebars).

How can we imitate that behavior without having to duplicate code or serve static files? **Express** and **Handlebars** allow you to pass data between the **routes** and the **views**. Here is how we can do it:

1. Let's modify the `/` route to pass the title of the page.

    ```js
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Etzali Profile', // insert your name instead
        });
    });
    ```
2. In `/views/layouts/main.handlebars`, let's use the data we're passing to the template

    ```html
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="site-heading">
                <!-- Notice the change in the next line -->
                <h1>{{title}}</h1>
                <hr class="small">
                <span class="subheading">A modern Website built in Node</span>
            </div>
        </div>
    </div>
    ```

> **Exercise**: Pass the `subheading` from the route to the view as well.

> **Exercise**: Change Title to default to "My Profile" if no title was provided. Look at #if helpers for Handlebars http://handlebarsjs.com/builtin_helpers.html

## Partials
Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called directly by other templates. ([Handlebars documentation](http://handlebarsjs.com/partials.html))

Let's put the **Menu** in a partial.

1. Go to `layout/main.handlebars` and cut the `<nav>` with all its contents, and move it to a new file called `menu.handlebars` under `views/partials`.

Then to use the partial, add `{{> menu}}` in the place where you cut the original menu from.

## More Templating
There is much more that can be done with **Handlebars** templating engine. Skim through the [express-handlebars](https://github.com/ericf/express-handlebars) and [handlebars documentation](handlebarsjs.com)

For now, we will finish by using the **each** helper.

### Dynamically loading the templates

```html
{{#each posts}}
    <div class="post-preview">
        <a href="post.html">
            <h2 class="post-title">
                {{this.title}}
            </h2>
            <h3 class="post-subtitle">
                {{this.summary}}
            </h3>
        </a>
    </div>
{{/each}}
```

In the `route`, let's load the file in `data/posts.json`:

```js
app.get('/', function (req, res) {
    const filePath = __dirname + '/data/posts.json';
    const callbackFunction = function(error, file) {
        // we call .toString() to turn the file buffer to a String
        const fileData = file.toString();
        // we use JSON.parse to get an object out the String
        const postsJson = JSON.parse(fileData);
        // send the json to the Template to render
        res.render('index', {
          title: 'Etzali Profile', // insert your name instead
          posts: postsJson
        });
    };
    fs.readFile(filePath, callbackFunction);
});
```
