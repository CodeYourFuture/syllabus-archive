
# Node 1

**What we will learn today?**

* Why we need databases.
* Creating a database with SQL, storing data in it.
* Retrieving data from a database using SQL.

THE PROBLEM
-----------

* Take existing code that stores reservation as a JSON snippet with subkeys for customer and rooms.

* Pretend to be an idiot junior programmer. Idiot junior programmer swaps out the code that puts a room in a reservation object and now it just puts null.

* Ask students what happens?

* Nobody notices anything initially.

* All the guests try to check in and there's chaos. [ FIND A PICTURE OR GIF OF A CHAOTIC HOTEL LOBBY ]

* Ask students how to solve this problem?

- If you try to enter invalid data into your program what should your program do? [ ANSWER : FAIL ]

* How do you make your program fail? [ Unit tests is an answer. Johnnny the junior programmer didn't actualyl write any. Tommy senior was too lazy. ]

* Explicit validation in one way to do it. Ideally this is a requirement that you embed.

THE SOLUTION
------------

The database is a way to enter structured data in a way that cannot easily be violated.

The way we use a database is completely different to the way we store things in files.
- Files just store the data, and the program needs to open, close, retrieve, store or modify everything itself. All the responsabilities are on the side of the program
- A Database is stored under an Relational Database Management System (RSGBD), which enforces:
    - data constraints (E.g. required fields, data types, uniqueness of identifiers)
    - executes on a different process/machine, meaning that the queries can be parallelized, and work can be offloaded from the main program.

This lesson will be about taking what you have stored in a file currently and changing it such that it is stored in a database instead. Everything will look like it works exactly the same as before. But your software will be safer.

```
{
  "reservation id"
  "date"
  "customer": {
      "name": "blah",
      "last name": "blah",
  "room": {
      "thing"

}
```

Everything piece of data in a database is stored in a table.

We're going to teach you a new language called SQL.

### How to create a table :
```
CREATE TABLE Reservations
```

Exercises:
- CRETE TABLE Rooms
- CRETE TABLE Customers

### How to insert into a table
```
INSERT INTO Customer
```

Exercises:
- INSERT INTO Room (with ID of 6)
- INSERT INTO Reservation

Wait a minute! Wasn't this the issue that we were talking about? A reservation needs to have both a room and a costumer associated to.

### How tup update a table

Update a table to have constraints on the room and costumer ids.

```
ALTER TABLE Reservation (for room)
```

Exercises:
- ALTER TABLE Reservations (for customer)


### How to extrat data

Start with select from single table

```
SELECT * FROM Customer
```

Exercise:
- SELECT on Reservation
- SELECT on Room

Add the filtering

```
SELECT * FROM Customer WHERE something
```

Exercise:
- SELECT AND WHERE ROOM price > 50
- SELECT WHERE checkout date is between next thursday and sunday


##### Joining tables in SELECT


// DIAGRAM WHEN WE EXPLAIN IT

```
SELECT * from Reservation JOIN Customer - reservations associated with customers
```

Exercise:
- SELECT AND JOIN - reservations for a particular room
- SELECT AND JOIN - mix join AND where

As an exercise: SELECT AND JOIN - rooms associated with reservations


## Preparing the set up
Install SQLite

Connect to SQLite from node

SELECT inside code

INSERT inside code
