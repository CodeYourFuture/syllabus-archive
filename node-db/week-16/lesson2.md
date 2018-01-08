# LESSON 2: LINKING JAVASCRIPT AND SQL

**What we will learn today?**

* How to install and run SQLite in node on your machine - setting up an environment.
* How to read documentation (specifically: node-sqlite's documentation)
* How to swap out code that interacts with flat files with code that interacts with a database.
* How to run a database query that retrieves tabular data in node express to an endpoint.
* Inserting data from an endpoint.
* Updating data from an endpoint.

## Node server iteracting with the database
** Here we will have the node server querying the database to comply with the requests. Need base from previous classes.**

## LINKING UP JS CODE WITH SQL

Hooking up our first endpoint:

Install SQLite

* Ubuntu: apt-get install sqlite3
* Windows: blah
* Mac: brew install sqlite

Task 1: Add SQLITE dependency:

npm install -s sqlite

sqlite execute schema.sql

const filename = './database/database.sqlite';
const sqlite3    = require( 'sqlite3' ).verbose();

// open the database
let db = new sqlite3.Database(filename);


Task 2: Find and read /customers API and figure out which SQL query to use there (select * from customers)

Task 3: Read documentation carefully https://github.com/mapbox/node-sqlite3/wiki/API#databaseallsql-param--callback

Task 4: Read code again.

router.get('/customers', function(req, res) {
   res.status(200).json({
     customers: [{
       id: 2,
       title: 'Mr',
       firstname: 'Laurie',
       surname: 'Ainley',
       email: 'laurie@ainley.com'
     }
   ]});
})


^ Q FOR STUDENTS: TURN THIS INTO DB

Task 4: Implement!

Task 5: Get all the reservations

Task 6: Get all the rooms

## USING PARAMETERS

Add endpoint for look up reservations by room number

Task 1: Figure out the SQL statement required to look up reservations by room number.

Task 2: Read documentation again for #all 

Task 3: Implement

## USING PARAMETERS DO DATES

## DOING INSERT (ADD NEW CUSTOMER)

Task 1: Figure out which INSERT statement to do.

Task 2: Read https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback

Task 3: Implement

## DOING INSERT (RESERVE ROOM)

## DELETE RESERVATION

## UPDATE CUSTOMER


SELECT inside code

INSERT inside code


HOMEWORK
--------

Add tons of data using the web front end.
