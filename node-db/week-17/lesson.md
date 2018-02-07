# LESSON 2: LINKING JAVASCRIPT AND SQL

**Review of last lesson**

What we did last lesson:

* Why we need databases
* Installing SQLite
* Creating a database with SQL and storing data in it.
* Inserting data into a database using SQL.
* Retrieving data from a database using SQL.
* Escaping

Homework:

![Hotel ER diagram](hotel-er-diagram.png "Hotel ER diagram")

- Did everybody finish hotel.sql so that it looks like the above diagram?
-
- About those foreign key constraints that weren't being enforced on SQLite
- review the concept of Foreign keys
- review the schema for everybody
- review if they have enough interesting data

**What we will learn today?**

- Checking out a project and adding hotel.sql to the repo
* How to install and run SQLite in node on your machine - setting up a development environment.
* How to read documentation (specifically: node-sqlite's documentation)
* How to run a database query that retrieves tabular data in node express to an endpoint.
* Inserting data from an endpoint.
* Updating data from an endpoint.
* Handling unclear specifications.

This lesson will primarily be about taking what you have stored in a *flat file*, and changing it such that it is stored in a database instead. This will be done to appease Marriott hotel manager grumpy cat. With all the constraints you have already added to the database, on your `hotel.sql` file, the application should be much safer now - if you screw up (and you will, because bugs are as inevitable as taxes), you can *see* the bugs getting deployed before they start affecting guests.

Use `/server/class2.js` for the exercises of this class.


### Setting up the environment

**Task** Clone the [repo](ADD THE LINK !!!), and follow the instructions to set the environment up.

You have already worked with back end servers using Express. This is just another yet another one, that we will be connecting to a database.

In order for us to interact with the server, we are going to use [Postman](https://www.getpostman.com/), which will accurately mimic API calls made from react. In the last three lessons you're going to make react do to this back end what postman is going to do today.

We're going to use it for debugging. Can anybody tell me what debugging is?

![Debugging](debugging.jpg "Debugging")

![postman-get-1](client-postman-server.jpg)

**Task** Download and install [Postman](https://www.getpostman.com/).

Now let us all try Postman by GETting from `http://localhost:8080/api/customers`, as is shown next.

![postman-get-1](postman-get-1.png)


### Revisiting SQL

How did we get data from the database?

### LESSON 1A

**User Story:** As a staff member, I want to be able to view a list of customers so that I can see who has visited our hotel.

Remove the code that is returning a JSON object on end point `/customers`, and use what you have learned about to SQL to fill in the query that fetches all the customers from the database.

- select everything

```javascript
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
```

Who can tell me what this is currently doing? What do we need to make it do?

So, the answer is here:

```javascript
router.get('/customers', function(req, res) {
  res.status(200).json({
    db.all(sql, [], (err, 'select * from customers' ) => {
      res.status(200).json({
        customers: rows
      });
    });
  });
});
```

### Exercise 1

**User Story:** As a staff member I need to check the details of a given customer given its id.

**User Acceptance test**: Complete the end-point `/customers/:id`, so that it extracts that customer information from the database, and replies back with that information as JSON.

- select and filter by id
- hint: simple select and filter by ID


### Exercise 2
**User Story:** As a staff member I want to search for a customer through its `surname`, but we don't know that it might be misspelled.

**User Acceptance test**: Complete the end-point `/customers/:surname`, so that it extracts that customer information from the database, and replies back with that information as JSON.

- select and filter through like
- hint: google for select and the "like" keyword


### Exercise 3
**User Story:** As a guest, I want to register my details in the system so that I can check availability for my stay.

**User Acceptance test**: Take the data being POSTed to the `/customers` endpoint and insert it into the database.


### Exercise 4
**User Story:** As a guest, I noticed that there is a typo on my details and wish to correct it.

Take the data being PUTed to the `/customers/:id` endpoint and update the corresponding entry on the database.

Note that the end-point should properly detect which customer properties are being updated, and generate the appropriate SQL update statement.

- update table
- remember your previous lesson
- hint: in the javascript code, instead of .all() you will need ... what?


### Exercise 5.a
**User Story:** As a staff member, I want to get a list of all the existing reservations.

Create an end-point to get from `/reservations` all existing reservations.

- create the endpoint from scratch


### Exercise 5.b
**User Story:** As a customer, I want to check the details of a reservation.

Create and end-point to get from `/reservations/:id` the details of a resrevation through its `id`.

- simple filtering
- create the enpoint from scratch


### Exercise 5.c
**User Story:** As a staff member, I want to get a list of all the reservations that start at a given date.

Create and end-point to get from `/reservations/starting-on/:startDate` all the reservations that start at a given date.

- simple filtering
- create the enpoint from scratch


### Exercise 5.d
**User Story:** As a staff member, i want to get a list of all the reservations that are active at a given date.

Create and end-point to get from `/reservations/active-on/:date` all the reservations that are active on a given date - some customer has a room reserved on that day.

- multiple filtering.
- create the enpoint from scratch


### Exercise 6
**User Story:** As a staff member, I want to create a new reservation.

Create and end-point to post a new reservation to `/reservations/`.

- insert into
- create the enpoint from scratch


### Joining 2 tables

Joining 2 tables in sql enables us to get data from two tables, that are related. Say we wanted to get the list of rooms, but get the information about an invoice, but include the data for the reservation that that invoice reffers to.

We would have to get the list of invoices, and at the same time the list of reservations. But this needs to be done in a way that the invoice matches the reservation. Does anybody know what piece of information we can use to make this possible?

A: `reservation_id` in invoices, matches `id` in reservations.

The syntax to join, and get the columns from two tables is the following:

```
SELECT invoices.*, reservations.* from invoices join reservations on invoices.reservation_id = reservations.id;
```

### Exercise 7
**User Story:** As a staff member, I want to get the list of all the invoices, and the details of the referring reservations.

Create and endpoint `/detailed-invoices` from where we can get the list of invoices, together with the details for the reservation that they reffer to.

- join


### Exercise 8
**User Story:** As a staff member, I want to consult reservations, but including the room and customer information.

Update the exercies 5.* to retreieve the information of the rooms and customers as well.


### Exercise 8.b
**User story:** As a staff member, I want ot retrieve the reservations and details for rooms and customers, that happened between a given date range.

Create and endpoint to get from `/reservations/details-between/:from_day/:to_day` all the reservations and details about customer and room, between a given date range.


///////////////////////////////////////////
Task 1: Add SQLITE dependency:


const filename = './database/database.sqlite';
const sqlite3    = require( 'sqlite3' ).verbose();

// open the database
let db = new sqlite3.Database(filename);


Task 2: Find and read /customers API and figure out which SQL query to use there (select * from customers)

Task 3: Read documentation carefully https://github.com/mapbox/node-sqlite3/wiki/API#databaseallsql-param--callback

Task 4: Read code again.


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
