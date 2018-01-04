
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

## Create a Database

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

** Add a couple of customers, some of which with the same name/other columns
** Add Colm >> OConner << as one of the users

### How to extract data

Start with select from single table

```
SELECT * FROM Customer
```

Exercise:
- SELECT on Reservation
- SELECT on Room


#### Add the filtering

```
SELECT * FROM Customer WHERE something
```

Exercise:
- SELECT AND WHERE ROOM price > 50
- SELECT WHERE checkout date is between next thursday and sunday

*** Filter by name so that we can highlight the name ambiguity ***

*** Highlight the issue with multiple customers with the same name that cannot be distinguished properly when querying. ***


#### Deal with name ambiguity

- Remove existing table `DROP table`

Q: how could we deal with this issue?

A: Primary key to eliminate ambiguity

E.g. Passports and Driver's lisences have unique ids, because people can have same names and even be born on the same day.

We could in principle use one of these real unique identifiers, but they are not always available.

- Add autoincrementing ids to solve the problem and recreate table.
- Re-insert the same users


Q: What makes a good primary key?

A: passport, driver's lisence, auto generated identifiers

### Update data

We need to chane the data to fix misspelled name of Teacher. Colm. whose name is set originall in the databse to be be 'Oconner'

```
UPDATE Client set surname = 'O\'Connor' Client WHERE id = 1;
```


### Joining tables in SELECT


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
- make sure we have instructions to install it on Linux, MAC OS and Windows =/

Connect to SQLite from node

SELECT inside code

INSERT inside code

## Node server iteracting with the database
** Here we will have the node server querying the database to comply with the requests. Need base from previous classes.**


### Workon SQLite on the command line

- need to add snippets of sqllite commands
- and on line quick reference


### Recreate the same database as in the previous set of exercises


### Add more entries

Ask them to add relevat data to each of the tables `Costumer`, `Room` and `Reservation`.

Then, ask them to add more data with incomplete relationships - reservation without a room.

Highlight issue.

** Wait a minute! Wasn't this the issue that we were talking about? A reservation needs to have both a room and a costumer associated to. **

Ask class how to deal with this problem?

A1: Delete data

A2: Make it impossible to add invalid data in the first place.

### How to delete records from a table

We can now delete the wrong records.

We should probably highlicht the need to do a select before the delete so that we are only deleting what we want to delete - the `where` should be the same !!!

Start with the `SELECT`:

```
SELECT * FROM customers WHERE <...>
```

Then the delete.
```
DELETE FROM customers WHERE <...>
```


### How to make it impossible to add invalid data


#### Deal with imcomplete data - foreign keys

- Add reservations without either costumer or room
- Try to get the information for given reservation
  - things should break because there is missing data on the reservation
- Fix the table with the foreign keys

Alter the table to have contrains on the room and customer ids..

```
ALTER TABLE Reservation (for room)
```

#### Deal with incomplete data - not null
Use checkin date as an example

- Add reservations with no check-in date
- Bring up the scenario where the client comes up to the hotel and the reservation is missing the checking date, so the room is being used, because another customer extended the stay.
- Fix table with NOT NULL on all the required columns

```
ALTER TABLE Reservation (for room)
```

### Go over analysis through querying

- get all the reservations we have

- get all the reservations we have for room with number 3 - `where`

- get all the reservations we have by date - `order by`

- number of reservations for room number 3 - `count`

- number of reservations per room number - `group by`

- rooms that have more than 10 reservations - `having`

- 3 most reserver rooms on the database - `limit`

- search for onn wich is probably misspelled - `like` '%onn%'

- list dates we have check-ins on - `distinct`

- clients with surnames in [`O\'Connor`, `Silva`] - `in`

- list reservations for clients with surnames in [`O\'Connor`, `Silva`] - joining in addition to what we already have

- list all reservations for non deluxe rooms - `!= 2`

- number of reservations for room number 3 on the summer of 2017 - `date >= '21-06-2017' and date < '21-09-2017'`

- list reservations for clients with surnames not like [`O\'Connor`, `Silva`] - `NOT in`

- number of reservations for room number 3 on the summer and winter of 2017 - `date >= '21-06-2017' and date < '21-09-2017' or date >= '21-12-2017' and date < '21-04-2018'`

# Notes for next steps
- `<`, `>`, `>=`, `<=` ---- what are all the reservations after tomorrow?

- combining predicates (`AND`, `OR`, `NOT`)
- `ORDER BY`
- `LIMIT`
- add `LIKE`
- include `DISTINCT`
- `GROUP BY`, `HAVING`
- `COUNT(*)`, `SUM`, `AVG`, `MIN`, `MAX`
- `IN`


- sub-selects
- `!=`
- `IS NULL`
