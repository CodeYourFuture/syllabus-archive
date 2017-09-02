![](https://img.shields.io/badge/status-draft-darkred.svg)

# Node 5
**What will we learn today?**
- Mongoose
- Modelling Data
- Saving Data with HTML forms
    - A note on Progressive Enhancement
- Modelling Relationships
- Debugging NodeJS
---
# Mongoose
Mongoose is a library that allow you to model your application data using a **schema**. It uses type casting, validation, query building, business logic hooks and more to help you manage your data.

## What is a Schema?
A "schema" is like a blueprint for your data. In a Relational Database, it will define what tables exist in the database, what columns they contain, and what type of data, like numbers or strings, each column can accept.

Databases like MongoDB are said to be **schema-less**. If we have a collection called *persons*, a document may look like this:

```js
{
    name: "Anthony",
    age: 21,
    nationality: "Kenya"
}
```

We can add a document to the *personss* collection with a new field: *profession*. Now we have two documents like this:

```js
[{
    name: "Anthony",
    age: 21,
    nationality: "Kenya"
}, {
    name: "Simon",
    age: 23,
    nationality: "South Africa",
    profession: "Software Engineer"
}]
```

One document has the field *profession* while the other does not. When we write our app to read the database, it will need to check if the *profession* field exists on a document before trying to use it.

In a Relational Database Management System (RDBMS), we can define the schema (or structure) of our documents and the database will ensure every document has the same structure.

In the schema, we would tell the database what to do if a document doesn't have a *profession* value. For instance, we could tell it to default to some value (`student`) or leave it `null`. We can also tell it what type it should be (eg - `integer` or `string`).

With a schema, our application can be certain that every document it retrieves from the database will have the same structure. There are pros and cons to using databases with and without schemas.

> One of the great benefits of these dynamic objects is that schema migrations become very easy. With a traditional RDBMS, releases of code might contain data migration scripts. Further, each release should have a reverse migration script in case a rollback is necessary. ALTER TABLE operations can be very slow and result in scheduled downtime.
>
> With a schemaless database, 90% of the time adjustments to the database become transparent and automatic. For example, if we wish to add GPA to the student objects, we add the attribute, resave, and all is well – if we look up an existing student and reference GPA, we just get back null. Further, if we roll back our code, the new GPA fields in the existing objects are unlikely to cause problems if our code was well written.

## Mongoose Schema
MongoDB is a schema-less database, which makes it easy to use without any configuration. But there is a benefit to having a *schema* at the Application level. For example, with a schema we can perform validation when we are saving data to the database.

At the moment, there is nothing stopping us from saving a *person* document like this:

```js
{
    name: "Simon",
    age: "twenty three"
}
```

> Group discussion: What problems might arise from entering the age as a `string` instead of an `integer`?

Mongoose is a library that provides an easier interface to interact with MongoDB. It also helps us implement a Schema to provide **validation** to our database, so that we can make sure the data we are entering matches our expectations.

## Exercise
Let's use Mongoose for the project we've built so far.

1. `npm install --save mongoose`
2. Add a Schema for our Models
    - Create a file, `Post.js` under `/models/Post.js`
    - Define the Schema for a post document in this file.

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    contents: String,
    summary: String
});

const Post = mongoose.model('posts', schema);

module.exports = Post;
```

3. To use the Model in our application, require the `Post.js` schema file and `mongoose` at the top of your file:

```js

// Top of your file
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/profile';
const mongoose = require('mongoose');

const Post = require('../models/Post');
```

4. Find the code where you connected to the database to retrieve the posts and change it to:

```js
mongoose.connect(mongoConnection);
Post.find({}, callback);
// callback is a function that takes an error as first argument and the posts as the second argument
```

# Form Data - POST

> **Discussion**: What are the HTTP verbs? Which verbs are used to save data?

Let's update the HTML form on our admin page to be able to save new Posts.

1. Open the `admin.handlebars` file. Remove or comment the script at the end of the file:

    ```
    <script src="/js/posts-admin.js"></script>
    ```

2. Find the `<form>` tag. Add the `action` and `method` attributes. It should look like this:

    ```
    <form action="/save-post" method="POST" name="sentMessage" id="contactForm" novalidate>
    ```

3. We also need to add a `name` attribute to our form input fields. For example, the title will look like this:

    ```
    <input type="text" name="title" ...>
    ```

    Add a `name` attribute to the `contents` and `summary` input fields.

4. Open the Developer tools. Try to save a Post and see what happens.

    > Discussion: The browser is trying to perform a `POST` to `/save-post`. What HTTP status code is returned? What does it mean?

5. Create the endpoint `/save-post` to handle this request.

    We will use a package called `express-formidable` to handle the form requests. Let's start by installing it:

    ```
    npm install --save express-formidable
    ```

    Add these two lines to the top of the `siteController`:

    ```js
    const formidable = require('express-formidable');
    router.use(formidable());
    ```

    Then define the route:

    ```js
    router.post('/save-post', (req, res) => {
      console.log(req.fields); // contains non-file fields
      // req.files will contain files (if you upload images for example)
    });
    ```

    Now, if you save the form, our endpoint should log to the console an object containing the data you submitted.

4. Let's save the data to MongoDB. We will use our Mongoose `Post` model.

    ```js
    // require the model in the top of the file
    router.post('/save-post', (req, res) => {
      console.log(req.fields); // contains non-file fields
      const callback = (error, post) => {
          // handle any errors which might ocur
          if(error) {
              console.error(error);
              return res.redirect('/error');
          }

          console.log('post saved successfully', post);
          res.redirect('/');
      }

      mongoose.connect(mongoConnection);
      // This is using the Model to create an object
      // based on the fields submitted from the form
      const newPost = new Post(req.fields);
      newPost.save(callback);
    });
    ```

## Mongoose Validation
You can still save a Post without having any content, summary or title. Let's fix that:

### Exercise: Make Title mandatory

Update the Mongoose Model for Posts:

```js
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    contents: String,
    summary: String
});
```

Try to save a post without a title and look at what happens:
- What is the result?
- How is the error handled? It redirects to `/error` if an error is returned (the first argument to the callback is an error)
    - Happy Path
- Make the `contents` and `summary` fields required.

# Form Data - Using AJAX

Now let's go to `admin.handlebars` and uncomment or add the script at the end of file
`<script src="/js/posts-admin.js"></script>`

Open the Developer Tools and notice what happens.
 - What is happening when you click on `Send`.

**Exercise**:
- Update your `POST /posts` endpoint in `apiController` to use Mongoose
    - Don't forget to *require* the modules that you need

```js
router.post('/posts', (req, res, next) => {
  const callback = (error, post) => {
      if(error) {
          console.error(error.toString());
          return res.sendStatus(500);
      }

      console.log('post saved successfully', post);
      res.send(post);
  }

  mongoose.connect(mongoConnection);
  // we can access req.body because we're using body-parser middleware
  const newPost = new Post(req.body);
  newPost.save(callback);
});
```

- Notice how we're not rendering a view - we are just returning an HTTP response. **Why is that**?

## Note on Progressive Enhancement

Go to Chrome Developer tools and Disable JavaScript. Does our *Save Post* functionality still work?

> Progressive Enhancement is a powerful methodology that allows Web developers to concentrate on building the best possible websites while balancing the issues inherent in those websites being accessed by multiple unknown user-agents. Progressive Enhancement (PE) is the principle of starting with a rock-solid foundation and then adding enhancements to it if you know certain visiting user-agents can handle the improved experience.

# modelling Data
What if we want to add a comments sections to our Posts.
- What are ways to model that data?
- What if each Post has one Comment only
- What if each Post has more than one Comment
- What if we need to have more information about the comment (data added, and user)

## Embedded documents
With MongoDB, you can take advantage of MongoDB rich documents to embed related data in a single structure or documents.
![](https://docs.mongodb.com/manual/_images/data-model-denormalized.bakedsvg.svg)

## Referencing documents
Another way of modelling data, is to use Reference documents.

![](https://docs.mongodb.com/manual/_images/data-model-normalized.bakedsvg.svg)

> References provides more flexibility than embedding. However, client-side applications must issue follow-up queries to resolve the references. In other words, normalized data models can require more round trips to the server.

**Discussion**: What do you think are the advantages and disadvantages of the approach?

## Reading
Let's read this blog post together[https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/](https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/)

## Exercise: Data modelling
Requirements: We're building a System for a Hospital. We want to keep track of Doctors and their Appointments with Patients. We need to have the basic information about the doctor (name, contact information and address), the patients (name, age, contact information). Each appointment will have a date, notes from the doctor and a list of prescriptions. A patient is assigned one doctor, and all the appointments will be with the same doctor. A doctor can have up to 20 patients.

- What collections do we need in our database
- Write a document representing a Patient. How will it look like?
- What will the other collections (if any) contain?
- Stretch: What if each prescription has one or more Medicines and we want to keep information about the Medicine including its price.

## Exercise: Adding comments
In the `view single post` view, add this form
```html
 <form method="POST">
    <textarea rows="5" name="comment" class="form-control" placeholder="Contents" id="contents" required data-validation-required-message="Please enter the contents of the blog post."></textarea>
    <button class="btn btn-default">Add Comment</button>
</form>
```
- Notice that the form does not an `action` attribute - what does that mean? Open the Developer tools and see what happens when you click the button

Update the Post model to have an array of Comments

```js
comments: [{
    content: String
}]
```

**Exercise**:
- Add a route that handles the data being sent by the Client and saves it to the database
    - Use the technique using `findById` described in this [documentation entry](http://mongoosejs.com/docs/documents.html)
    - Also look at the documentation of $push to know how to add to an array https://docs.mongodb.com/manual/reference/operator/update/push/#up._S_push
- Are there more way we could have modeled our comments?

# Resources
Why Schemaless - https://www.mongodb.com/blog/post/why-schemaless
Progressive Enhancement - https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
Mongoose CRUD - https://coursework.vschool.io/mongoose-crud/

# Homework
Group project - https://github.com/CodeYourFuture/group-projects#expressmongodb-projects
