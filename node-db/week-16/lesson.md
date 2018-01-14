# WEEK 16 LESSON 1 : BASIC SQL

**What we will learn today?**

* Why we need databases.
* Creating a database with SQL, storing data in it.
* Retrieving data from a database using SQL.
* Inserting data into a database using SQL.
* Joins

# EXERCISE 1 : Breaking your code with nulls

Start by checking out https://github.com/CodeYourFuture/cyf-hotel (branch - master?)

Go to API end point for add reservation.

1. Take existing code that stores reservation as a JSON snippet with subkeys for customer and rooms.

2. Put in null for customer id and room id.

3. Try it out.

# EXERCISE 2 : What happened?

1. What happened from the perspective of the *code*?

2. What happened from the perspective of the *user*?

3. What *should* happen when you enter invalid data into your programs?

4. How should you make that happen?


# LESSON 1 : What is the point of a database?

The database is a way to store *valid* structured data in a way that *cannot easily be violated* and then retrieve it.

The way we use a database is completely different to the way we store things in files. In a file, you can put anything in and get it out. How you get it out is up to you. The program needs to open, close, retrieve, store or modify everything itself. All the responsibility for that belongs to the program.

A Database is stored using a Relational Database Management system (RDBMS) which enfores:

- Data constraints (e.g. each reservation *must* have a customer)
- Data types (e.g. check in date *can only* be a date)
- Uniqueness of certain pieces of data (e.g. there is *only one* person with the driver's license ID 941413).
- Organizing how the data is retrieved and assembled (e.g. fetch me all reservations under customer "Donald Trump").
- Executes on a different process/machine, meaning that the queries can be parallelized, and work can be offloaded from the main server.

We're going to teach you a new programming language. It's called SQL. Pronounced "S - Q - L" or sequel,
as in "the sequel to the original 3 stars films were awful."

The language is *just* used for two things:

* Telling a big store of data (the database) to store data
* Telling a big store of data (the database) to retrieve data

## Create a Database

Students, first open up your browsers and visit [DB Fiddle](https://www.db-fiddle.com/)
at www.db-fiddle.com.

Then, select SQLite:

![Select SQLite 3.18](db-fiddle-select-sqlite.png)

So, on the left hand side here is where we write the code that *creates* the data.

On the right hand side is where we write the code that *retrieves* the data.

### LESSON: How to create a table

First thing we want to store is customers, since without customers,
you don't have a hotel.

Students. Type the following in:

What to put in the *left* hand side (data definition):

```sql
create table customers (
    title varchar,
    firstname varchar,
    surname varchar,
);

insert into customers (title, firstname, surname, email) values ('Mr', 'Donald', 'Trump',);
```

What to put on the *right* hand side (data retrieval):

```sql
select * from customers;
```

What we have here:

* Creating a table - this creates the *structure* which you can use to put data in. The items are *columns*.
* Insert into - puts data *into* that structure.
* Select * from - gets the entire contents of that table.

* 'title varchar' - this means we're creating a column with the name 'title' which holds a 'variable number of characters'. This is pretty much the same thing as a string in javascript.

## EXERCISE: Create tables and insert data

1. Add yourselves as *second* customers to Donald Trump.
2. Collect email addresses from yourself and Donald (donald.trump@whitehouse.gov) and have them displayed on screen.
3. Add me - "Colm O'Connor" - as your third customer. My email address is "colm.oconnor.github@gmail.com".

## LESSON : Data types

```sql
create table invoices (
    reservation_id      integer,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 3444.50, '01/01/2017', 1);

insert into invoices (reservation_id, total, invoice_date_time) values (124, 3445.50, '02/01/2017');
```

```sql
select * from invoices
```

* What we have here is an 'integer', a 'number', a 'datetime' and a boolean. These are all analogous to data types
which you have learned about in javascript.

* For "paid" which is either yes or no - we have a default of 'no', so you can insert data without it and it will just assume you mean 'no'.

* For 'invoice_date_time' we have a 'not null' constraint which means that you *have* to give a datetime and you can't give 'null' because it is meaningless to have a non-null datetime.

More reading : https://www.sqlite.org/datatype3.html

## EXERCISE : Data types

1. Create a reservations table with columns for customer ID, room ID, check in date, check out date and price per night.

2. [ TODO : 2nd exercise ]

3. [ TODO : 3rd exercise ]

## LESSON : Filtering

## EXERCISE : Filtering

## LESSON : Uniqueness

## EXERCISE : Uniqueness

## LESSON : Foreign keys

## EXERCISE : Foreign keys

## LESSON : Updating data

## EXERCISE : Updating data

## LESSON : Joins

TODO : 
--------
* Create table creates 

Exercises:
- CREATE TABLE Rooms
- CREATE TABLE Customers

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




