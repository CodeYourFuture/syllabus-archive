# WEEK 16 LESSON 1 : BASIC SQL

**What we will learn today?**

* Why we need databases
* Installing SQLite
* Creating a database with SQL and storing data in it.
* Inserting data into a database using SQL.
* Retrieving data from a database using SQL.
* Escaping

# LESSON 1A: Why we need databases

So, in your previous lessons you have been taught how to store and retrieve data
using files. This is fine and works well for some data - particularly simple data -
but it can quickly cause issues with your data.

TEACHER STORY:

Back in 2013 I used to work for a company that ran hotel wifi systems for five star hotels.
We did Intercontinentals, Sheratons, Marriotts and a whole bunch of others. This company had been
going for a long time and hails back to the times when wifi used to be very expensive.

The code for this system had the notion of "invoices", "wifi enrollments" and "guests" and
stored data on each. We would store data on each and we would run reports on each and send them
to the hotels who would use them to bill guests.

All fine so far. Except we would sometimes send reports with invoices which didn't have enrollments,
enrollments which didn't have guests. Sometimes the amounts on those invoices would rack up to
tens even hundreds of thousands of dollars. Of invoices *without* customers.

This was how the face of the hotel manager looked:

![Hotel manager](grumpy-cat.jpg "Hotel manager's face")

This was a very, very serious problem. We were >.< this close to losing Marriott as a customer - and
a large part of it was because of this.

This was a problem because our system was buggy, so we had what are generally called "data integrity"
issues. Data integrity issues are like normal bugs except much, much worse. You can almost always fix
a normal bug. For bad data the chances are you will *never* fix it.

These lessons are about storing and retrieving data safely such that you won't have the same problems
I did.


# LESSON 1B : What is the point of an SQL database?

We're going to teach you a new programming language. It's called SQL. Pronounced "S - Q - L" or sequel, either is fine.

Databases are simply programs that take data and stuff it in files just like you were doing in the previous lesson.

However, the way we use a database is different to the way we store things in files. In a file, you can put any random jumble of data in and get it out again. How you put it in and get it out is up to you. Your code needs to open the file, close the file, retrieve, store or modify and validate everything itself. Offloading some of that responsibility to another program means that your code can achieve all the same things but be simpler.

You interact with almost all of them using the same programming language which is called "SQL". It's been around for 31 years and is still completely dominant. Computing moves fast, but SQL doesn't change. This kind of lesson will probably still be taught in 50 years. Probably 4 out of 5 software jobs involve SQL In some way.

SQL is a different, and usually simpler kind of programming language that you use *with* a database (sometimes called an RDBMS) to:

* Store data in a way such that its structure cannot be violated.

* Retrieve data (get me all the reservations under the name "Trump") and answer questions about data ("what was the sum total of all of the invoices in february?").

An RDBMS (relational database management system) will do this by, for example:

- Data constraints (e.g. each reservation *must* have a customer)
- Data types (e.g. check in date *can only* be a date)
- Uniqueness of certain pieces of data (e.g. there is *only one* person with the driver's license ID 941413).
- Organizing how the data is retrieved and assembled (e.g. fetch me all reservations under customer "Donald Trump").
- Executes on a different process/machine, meaning that the queries can be parallelized, and work can be offloaded from the main server.

## EXERCISE 1B: INSTALLING SQLITE ON YOUR LAPTOP AND CREATING YOUR FIRST DATABASE

The RDBMS we are going to teach you first is called "sqlite". It's pretty much the industry standard for creating small, self contained database that fit in one file - quite a common task.

* Windows: https://sqlite.org/download.html
* Ubuntu: apt-get install sqlite
* Mac OS: brew install sqlite

To run SQLite, open a command prompt and run "sqlite mydatabase.sqlite".

This should give you a prompt like this:

```sql
SQLite version 2.8.17
Enter ".help" for instructions
sqlite> 
```

This is a command prompt where you can run snippets of SQL and load files containing SQL.

### LESSON 1C: CREATING A TABLE

The first thing we want to store is customers, since without customers, you don't have a hotel.

First, open a file in any text editor and put the following in a file called 'hotel.sql':

```sql
create table customers (
    title varchar,
    firstname varchar,
    surname varchar
);

insert into customers (title, firstname, surname, email) values ('Mr', 'Donald', 'Trump');
```

What we have here:

* Creating a table - this creates the *structure* which you can use to put data in. The items are *columns*.
* Insert into - puts data *into* that structure.
* Select * from - gets the entire contents of that table.

* 'title varchar' - this means we're creating a column with the name 'title' which holds a 'variable number of characters'. This is pretty much the same thing as a string in javascript.

Now, in the command prompt run the following:

```
$ sqlite mydatabase.sqlite

sqlite> .read hotel.sql
```

Now that the file has been loaded with one table containing one row of data, you can read it back
out again like this:

What to put on the *right* hand side (data retrieval):

```sql
sqlite> select * from customers;
```

Now that you've done all that, DELETE the mydatabase.sqlite file, run it again and make sure you get the same result again.

## EXERCISE 1C: Create tables and insert data

1. Amend hotel.sql create the database again and add yourselves as *second* customer using INSERT - so you're now staying in a hotel with Donald Trump. Run select * and ensure that you see yourself both as guests. Then delete mydatabase.sqlite again.

2. Change hotel.sql again to store email addresses from yourself and Donald (donald.trump@whitehouse.gov) and have them displayed on screen. Run select * and ensure you are both guests. Then delete mydatabase.sqlite again.

3. Change hotel.sql again. Add teacher - "Colm OConner" - as your third customer. My email address is "colm.oconner.github@gmail.com".

## LESSON 1D: Data types

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

And in the command box:

```sql
sqlite>  select * from invoices
```

What we have here:

* An 'integer', a 'number', a 'datetime' and a boolean. These are all analogous to data types which you have learned about in javascript but there are sometimes subtle differences that you will eventually run in to.

* For "paid" which is either yes or no - we have a default of 'no' - it's saying that if you insert data and don't specify 'paid' as a column when you INSERT data, it will assume you meant 'no'.

* For 'invoice_date_time' you must store the data in the form of a combination of date and time. It has a 'not null' constraint which means that you *have* to give a datetime when you insert data, it will refuse to let you insert an invoice without specifying invoice_date_time and refuse to let you explicitly give your invoice_date_time as null.

```sql
Further reading : https://www.sqlite.org/datatype3.html
```

## EXERCISE 1D : Data types

In your "hotel.sql" create a reservations table with columns for customer ID, room ID, check in date, check out date and price per night and insert a bunch of example data - maybe you and 10 friends or celebrities.

The hotel manager has told you:

- Customers *do* have to give a check in date, but they don't have to give a check out date.
- Reservations need a customer ID and a room ID
- Reservations have a check in date, a check out date and a price per night.

## LESSON 1E : SELECT

Currently we've just put data in to a table and gotten *all* of it out. What about if we only want *specific* data?

For this we will introduce a SQL key word called 'WHERE'.

Lets go back to the invoices table. Make your SQL files have a create table for invoices in like this:

```sql
create table invoices (
    reservation_id      integer,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);
```

And put in a bunch of data like this:

```sql
insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 143.50, '01/01/2017', 1);

insert into invoices (reservation_id, total, invoice_date_time) values (124, 250.50, '02/01/2017');

insert into invoices (reservation_id, total, invoice_date_time) values (150, 431.50, '03/01/2017');

insert into invoices (reservation_id, total, invoice_date_time) values (155, 300.50, '04/01/2017', 1);

insert into invoices (reservation_id, total, invoice_date_time) values (156, 284.35, '04/01/2017', 1);
```

So, if you do a regular query you just get all of the data:

```sql
select * from invoices
```

If you do 

```sql
select * from invoices where reservation_id = 123;
```

```sql
select * from invoices where invoice_date_time < '03/01/2017';
```

## EXERCISE 1F : SELECT

Write SQL for the following:

1. Which invoices were paid?

2. Which invoices were for under 300 pounds?

3. Which invoices paid on 3rd January 2017 or after?

## LESSON 1G : Primary Keys

Ok, now we're going to introduce a problem. Let's say a secretary types in a bunch of invoice IDs and values:

```sql
create table invoices (
    reservation_id      integer,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 143.50, '01/01/2017');

insert into invoices (reservation_id, total, invoice_date_time) values (123, 250.50, '02/01/2017');
```

```sql
select * from invoices;
```

QUESTION FOR CLASS : What is the problem here? [ A business calls up and says they need to pay invoice 123 ]

We solve this problem with something called a "primary key" - what this does is make it so the database will absolutely refuse to accept a number if you enter in a duplicate.

```sql
create table invoices (
    reservation_id      integer primary key,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 143.50, '01/01/2017');
```

Try entering an invoice with ID 123 now:

sqlite> insert into invoices (reservation_id, total, invoice_date_time) values (123, 250.50, '02/01/2017');



```sql
create table invoices (
    reservation_id      integer primary key,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 143.50, '01/01/2017', 1);

insert into invoices (reservation_id, total, invoice_date_time) values (124, 250.50, '02/01/2017');

insert into invoices (reservation_id, total, invoice_date_time) values (999, 250.50, '03/01/2017');
```

Now, picking primary keys is a tricky problem. You need to make sure that you pick some kind of
identifier which you know will always be *unique*.


QUESTION FOR CLASS:

* Is first name a good candidate for a primary key?
* Is first name and surname together a good candidate for a primary key?
* Is a driver's license ID a good candidate for a primary key? [ if and only if everybody is from the same country ]
* Is a passport ID a good candidate for a primary key? [ if and only if everybody is from europe ]
* Is just coming up with an arbitrary number that is unique a good candidate for a primary key?

## LESSON 1H: AUTOINCREMENTING PRIMARY KEYS

We still have a problem here. Joe the office manager who is entering invoices doesn't really want to 
keep coming up with random numbers every time he enters an invoice. Why not just get the database to give
us an ID?

We can do that with a magic feature called autoincrementing numbers. You don't specify the ID and the
database will just give your row a new ID. What ID will it give it? The ID of the last row plus one.

```sql
create table invoices (
    reservation_id      integer primary key,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into invoices (total, invoice_date_time, paid) values (143.50, '01/01/2017', 1);

insert into invoices (total, invoice_date_time) values (250.50, '02/01/2017');
```

## EXERCISE 1H : PRIMARY KEYS

1. Recreate customer table with a primary key. Bear in mind that you don't have a driver's license or passport ID.

2. Recreate reservations table with a primary key.

## LESSON 1I : FOREIGN KEYS

Now, as we've seen two tables that have an intrinsic relationship to one another. Every invoice has
a reservation ID.


```sql
create table reservations (
  `id`                    integer primary key,
  `customer_id`           integer,
  `room_id`               integer,
  `check_in_date`         datetime not null,
  `checkout_out_date`,    datetime,
  `room_price_per_night`  real
);

create table invoices (
    id                  integer primary key,
    reservation_id      integer,
    total               number,
    invoice_date_time   datetime not null,
    paid                boolean default false
);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, room_price_per_night) values (123, 55, '01/01/2017', '02/01/2017', 100);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, room_price_per_night) values (124, 55, '03/01/2017', '05/01/2017', 100);

insert into invoices (reservation_id, total, invoice_date_time, paid) values (123, 100, '03/01/2017', 1);

insert into invoices (reservation_id, total, invoice_date_time) values (124, 50, '06/01/2017', 0);

insert into invoices (reservation_id, total, invoice_date_time) values (124, 50, '06/01/2017', 1);
```

Point out that the reservation ID corresponds with the ID on the reservations table.

```sql
sqlite> insert into invoices (reservation_id, total, invoice_date_time) values (125, 50, '06/01/2017);
```

QUESTION FOR CLASS: What's the problem with the last statement? 

A: Invoice isn't going to get paid because we don't know who it's for.

To fix this problem we place an additional restriction on the data - you can only add IDs that *exist* to columns referencing other tables.


```sql

create table reservations (
  `id`                    integer primary key,
  `customer_id`           integer,
  `room_id`               integer,
  `check_in_date`         datetime not null,
  `checkout_out_date`,    datetime,
  `room_price_per_night`  real
);

create table invoices (
    id                           integer primary key,
    reservation_id               integer not null,
    total                        number,
    invoice_date_time            datetime not null,
    paid                         boolean default false
    foreign key(reservation_id)  references reservations(id),
);

```

Note that:

- 'foreign key(reservation_id)' means that we're putting a foreign key relationship on the *reservation_id* column.
- 'references reservations(id)' means that it's referring to the 'id' column in the reservations table.
- reservation_id is a row on invoices. It is a number, like 3 - referring to the 'id' of a row in reservations.
- reservation_id can *not* be null because it must *always* reference an existing row.

Remember:

- If you removed "foreign key(reservation_id)  references reservations(id)" it will let you insert invalid data without giving you an error - you will be able to create an invoice with a reservation_id of 9435454 without a corresponding reservation with id 9435454 in the reservations table.

- We DON'T WANT errors like this, which is why we put the foreign key there.

## EXERCISE 1I : Foreign keys

1. Change the file to insert the data from above without IDs.

2. Change the file to add foreign key relationship for reservations table and customers table.

## LESSON 1J : Updating data

Let's say that we made a mistake with one of the invoices created above.

First get the ID of an invoice entered earlier:

```sql
sqlite> select * from invoices where invoice_date_time = '01/01/2017';
```

If you want to change this invoice to be £300, you need to use 'UPDATE'.

```sql
sqlite> update invoices where id = [ ID FROM ABOVE ] set room_price_per_night = 300.0;
```

## EXERCISE 1J : Updating data

1. Run SQL from lesson 1C where my surname was entered as OConner. My name is actually O'Connor. Fix it using 'UPDATE'.

