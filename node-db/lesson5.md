(https://img.shields.io/badge/status-draft-darkred.svg) 
# Node 5
**What we will learn today?**
- Mongoose
- Modeling Data
- Saving Data with HTML forms
    - A note on Progressive Enhancement
- Modeling Relationships
- Debugging NodeJS
---
# Mongoose
Mongoose is a libray that provides a straight-forward, **schema-based** solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## What is a Schema?
The term "schema" refers to the organization of data as a blueprint of how the database is constructed. In a Relational Database, the schema will define - among other things - what tables exist in the database, what columns they contain and what type of data they can accept (numbers, strings etc...).

Databases like MongoDB are said to be **schema-less**. If we have a collection called *persons* containing *documents* looking like this:

```js
{
    name: "Anthony",
    age: 21,
    nationality: "Kenya"
}
```

and we decide to add a new field *profession* to the *persons* documents, then we can just add that field in the new document. So we can have two documents like this:

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

One document has the field *profession* while the other does not. The App consuming the documents can just handle not having that field (deciding for example that if there *profession* field then the Person is a Student).

In an RDBMS (Relational Database Management System), we have to update the schema first to add the *profession* column, decide what to do with the existing records (do we default to some value or leave it *null*), decide its type (integer, string, how many characters etc...) then we can use it. There are pros and cons to both types of databases. 

> One of the great benefits of these dynamic objects is that schema migrations become very easy. With a traditional RDBMS, releases of code might contain data migration scripts. Further, each release should have a reverse migration script in case a rollback is necessary. ALTER TABLE operations can be very slow and result in scheduled downtime.
>
> With a schemaless database, 90% of the time adjustments to the database become transparent and automatic. For example, if we wish to add GPA to the student objects, we add the attribute, resave, and all is well – if we look up an existing student and reference GPA, we just get back null. Further, if we roll back our code, the new GPA fields in the existing objects are unlikely to cause problems if our code was well written.

## Mongoose Schema
Even though being schema-less is one of the selling points of MongoDB, there is benefit to having a *schema* at the Application level, for example to do validation - at the moment, there is nothing stopping us from saving a *person* document as such

```js
{
    name: "Simon",
    age: "twenty three"
}
```

Mongoose helps us add a Schema to provide **validation**, business logic and also provides an easier interface in general to interact with MongoDB.

## Exercise
Let's use Mongoose for our project we've built so far.

1. `npm install --save mongoose`
2. First let's add a Schema for our Models
    - Create a file Post.js under `/models/Post.js`
    - We add the Schema to this file.

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

3. Then to use the Model, require the file and `mongoose` in the top of your file
```js

// Top of your file
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/profile';
const mongoose = require('mongoose');

const Post = require('../models/Post');
```

4. Then where you had the code to connect and get the posts - change it to:

```js
mongoose.connect(mongoConnection);
Post.find({}, callback);
// callback takes error as first argument, and posts as the second argument
```

# Form Data - POST
> **Discussion**: What are the HTTP verbs? which is used to save data?

Let's update our Admin HTML form to be able to save new Posts.

1. Go to `admin.handlebars` - let's remove the script at the end of the file `<script src="/js/posts-admin.js"></script>` <- Remove or comment this script

2. In the `form`, add the `action` and `method` attribute. It should something similar to this:
`<form action="/save-post" method="POST" name="sentMessage" id="contactForm" novalidate>`
    - Open the Developer tools, try to save a Post and see what happens.

    We also need to add a `name` attribute to our form elements i.e.

    `<input type="text" name="title" ....`

    Do the same for `contents` and `summary`.

    We can see that the browser is trying to perform a `POST` to `/save-post`
        - What HTTP status code is returned? What does it mean?

3. Let's create that endpoint `/save-post` to handle this request.

    To be able to receive POST data easily, we will use a package called *express-formidable*, so let's start by installing it. `npm install --save express-formidable` then add these two lines on top of `siteController` before defining the routes.

    ```js
    const formidable = require('express-formidable');
    router.use(formidable());
    ```

    Then let's define the endpoint
    ```js
    router.post('/save-post', (req, res) => {
    console.log(req.fields); // contains non-file fields 
    // req.files will contain files (if you upload images for example)
    });
    ```

    At this point, if you hit save on the form. Our endpoint should log to the console an object containing the data you submitted.

4. Now that we're receiving the data on the server, let's save it to MongoDB. We can make use of our Mongoose models again.

    ```js
    // require the model in the top of the file
    router.post('/save-post', (req, res) => {
    console.log(req.fields); // contains non-file fields
    const callback = (error, post) => {
        // Notice the Erorr handling
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
Notice how you can save a Post now without having a content, summary (or even a title), let's try to fix that.

### Exercise: Make Title mandatory
Update the Mongoose Model for Posts to be
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

Now let's try and save a post without a title and see the result.
- What is the result?
- Error Handling: Redirect to `/error` if an error is returned (the first argument to the callback is an error)
    - Happy Path
- Make `contents` and `summary` required as well.

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

# Modeling Data
What if we want to add a comments sections to our Posts.
- What are ways to model that data?
- What if each Post has one Comment only
- What if each Post has more than one Comment
- What if we need to have more information about the comment (data added, and user)

## Embedded documents
With MongoDB, you can take advantage of MongoDB rich documents to embed related data in a single structure or documents.
![](https://docs.mongodb.com/manual/_images/data-model-denormalized.bakedsvg.svg)

## Referencing documents
Another way of modeling data, is to use Reference documents.

![](https://docs.mongodb.com/manual/_images/data-model-normalized.bakedsvg.svg)

> References provides more flexibility than embedding. However, client-side applications must issue follow-up queries to resolve the references. In other words, normalized data models can require more round trips to the server.

**Discussion**: What do you think are the advantages and disadvantages of the approach?

## Reading
Let's read this blog post together[https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/](https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/)

## Exercise: Data Modeling
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


# Homework
Group project - https://github.com/CodeYourFuture/group-projects#expressmongodb-projects
