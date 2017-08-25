# Database Module

ToDo: Add an intro to DB first - this would be broken to two classes most likely

In this lesson, we'll write a Node.js and Express HTTP API that queries a relational database and exposes it as JSON.


## The Database

This is an SQLite database that is based upon the homework from the first database module. The design embraces various one-to-many and many-to-many relationships:

![ERD](http://i.imgur.com/e8No8Xt.png)

Note that **all of the IDs are auto-incrementing** - this means that when you add a new record to a table, SQLite will manage the primary key for you; there is no need to explicitly set this.

Perhaps the simplest means of understanding our database is to look at the [SQL query](https://github.com/Code-Your-Future/db-module-ii/blob/master/data/transactions/create-tables.sql) used to create our tables.

## The Server

This repository contains an [Express app](https://github.com/Code-Your-Future/db-module-ii/blob/master/src/server.js) that exposes a [series of routes](https://github.com/Code-Your-Future/db-module-ii/blob/master/src/routes/organisations.js) for interacting with the database.

There are some [end-to-end tests](https://github.com/Code-Your-Future/db-module-ii/blob/master/test/e2e-test.js) that will hit the endpoints exposes by the server and ensure that the data is updated as expected.


## Your Task

Implement the `GET /organisation` route so that the end-to-end test passes! :)

The server already opens the database, so you just need to query it; you can do this directly in the route file via the imported `db` object.

We're using the [`node-sqlite`](https://github.com/kriasoft/node-sqlite) module to connect to and manipulate the database. It follows the same [API as node-sqlite3](https://github.com/mapbox/node-sqlite3/wiki/API), only it returns `Promise`s in lieu of using callbacks.

Think carefully about the queries you should make and the joins that may be required.


### Woah, that's a lot of code!

By fulfilling the first route, you'll have observed that you require a lot of SQL as well as JavaScript operations to provide the data in the format required by the test.

Additionally, this technique is susceptible to [SQL injection](https://en.wikipedia.org/wiki/SQL_injection), a vulnerability via which malicious SQL code can be executed by an application
  * e.g. requesting `HTTP DELETE` to `http://localhost:8000/organisations/1 OR Id=2` will result in two organisations being deleted!

The best approach is to use an [object-relational mapper](https://en.wikipedia.org/wiki/Object-relational_mapping) (ORM) such as [Sequelize](http://sequelize.readthedocs.io/en/latest/api/sequelize/) or [Bookshelf.js](http://bookshelfjs.org/). By defining the models and queries in JavaScript, you can craft much cleaner code.

Reimplement `GET /organisation` to use an ORM, and then implement the remaining routes in this fashion.


### Local development

Make sure you install all of the project dependencies with `npm i` before you do anything else. Then you can run these scripts:

* `npm test` - runs ESLint followed by the end-to-end tests
* `npm start` - runs the server via nodemon, restarting on changes to the `src` directory

Note that this project requires **Node.js 6 or above** due to the use of ES6.


## Homework

Complete the class exercises; that should be enough!
0
