# LESSON 3: DATA INTEGRITY AND ANALYTICS

**Review of last lesson**

- Why NoSQL why SQL?
- Checking out a project and adding hotel.sql to the repo
- How to run SQLite *with node* on your machine - setting up a development environment.
- How to run a database query that retrieves tabular data in node express to an endpoint.
- Inserting data from an endpoint.
- Updating data from an endpoint.
- Dealing with unclear user stories. There was a TRAP in one of these user stories.
- What is the difference between user story, use case and user acceptance test.


**What we will learn today?**

* SQL - 'IN'
* Joins
* SQL Injection
* Order by
* LIMIT
* DISTINCT
* Sum / Avg / Count
* Group by
* HAVING



### LESSON 1: IN IT

Now let's say that you want to see all of the customers who have the surname O'Connor or Trump.

The way we've learned so far:

```sql
select * from customers where surname = "O'Connor" or surname = 'Trump'
```

You can also do it like so:

```sql
select * from customers where surname in ("O'Connor", 'Trump')
```

This is might seem like a minor difference but:

- It is useful when you want your code to pass a list of things to the database and get a query which matches one or more of them.

- You can put other select statements in there. Your homework will require this.


### EXERCISE 1: IN IT

Get all of the customers with the first name "Colm" or "Hillary".


### LESSON 2 : JOIN ME, AND TOGETHER WE CAN RULE THE INTERNET AS FATHER AND SON!

Now let's say we want to get the *names* of customers who have a reservation *today*.

From what we know now, we *could* do it like this:

- select customer_id from reservations where date_started = '01/01/2018'
- write down the list of customer ids on paper (e.g. 3, 5, 7)
- select * from customers where id = in (3, 5, 7)

However, that's stupid. We want the computer to figure that out. That's where a database "join" comes in handy. In real life, if you work with databases, you will be using this thing *all* of the time.

Now, we have data that spans two tables - we have reservations with a "customer_id" column that refers to the id column in the "customers" table.

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '01/01/2018';
```




### EXERCISE 2A

Write and run the SQL to get invoice IDs and 'paid' status for reservation starting after Janurary 1st this year.

### EXERCISE 2B

**User Story** As a staff member, I want see a list of all the rooms and their details.

**Use Case** Call /all-rooms/ and return the room ids, their types, their original and current prices.

**User acceptance test** / **Acceptance criteria** Call /all-rooms/ and return:

[
  {"id": 1, "room_type": "suite", "original_price": 150.55, "current_price": 165.55, "sea_view": true},
  ...
  ...
]

### LESSON 2: ORDER BY SURNAME

Can anybody tell me what the difference is between random and arbitrary?

Up until now we've not been returning results in a *random* order, but we have been returning
them in an *arbitrary* order.

Using 'order by' we can get records back in a specified order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '01/01/2018' order by customers.surname
```

We have Mrs Clinton, Mr Trump and me staying at the hotel? What order will will the reservations be displayed in?

If we want to get *explicit* the three of them in ascending order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '01/01/2018' order by customers.surname asc
```

Now, if we want them in descending order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '01/01/2018' order by customers.surname desc
```

And, if we want to order by surname first and first name second, we can do this:


```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '01/01/2018' order by customers.surname desc, customers.firstname desc
```

### EXERCISE 2: ORDER BY

Write and run the SQL to get all of the reservations, ordered by check in date primarily, and check out date secondarily.


### LESSON 3: SQL INJECTION

So, the hotel has a new guest:

![Hackerman](hackerman.jpg "Hackerman")

Now, Mr Hackerman has a problem with our hotel. He booked a room and then decided he didn't want it. That's fine, no problem, he can cancel using the DELETE reservations endpoint you created.

However, he's decided that he wants to stay

So you should all have a delete reservations endpoint.

So, try calling the end point in postman with:

```
DELETE http://localhost:8080/api/reservation/6%20or%201%3D1
```

Now, enter your database in sqlite and run the command:

```
sqlite> select * from reservations;
```

### EXERCISE 3: SQL INJECTION

You have five minutes. Work in teams. Figure out what happened between you and *why*.


### LESSON 4: LIMIT YOUR QUERIES

Now, the database you're working with right now is essentially just a toy. However,
when you work with a real database you're often going to have a number of problems

1) select * from table is going to return thousands of rows. This take ages
to load and display and if you just want to see a representative sample it's overkill.

2) You want to return the top 10 of something.

3) You want to show results 1-10 on page 1, results 2-20 on page 2, etc.

SQL has a keyword called "LIMIT" which you can put at the end of a query to cut down
on the number of returned rows:

```sql
select * from customers order by surname asc limit 2;
```

### EXERCISE 4: LIMIT

Using the order by query from earlier, just get the top 5 rows.

### LESSON 6: DISTINCT

Remember the JOIN query from above? We're going to do another similar one.

```sql
select customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started > '01/01/2018' and order by customers.surname desc
```

QUESTION FOR CLASS : What does this do?

ANS : Get a list of all customers who have a reservation that begins this year

Now, this is going to work with one exception. The list in my database
is going to look a bit like this:

```
Firstname  Surname
-------------------
Hillary    Clinton
Colm       O'Connor
Colm       O'Connor
Colm       O'Connor
Donald     Trump
```

QUESTION FOR CLASS : Why?

ANS : Because I love this hotel more than Hillary and Donald and I've arranged to stay there a few times.

Of course, we only want to know *IF* I've stayed there once, not that I'm their most popular guest.

```sql
select DISTINCT customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started > '01/01/2018' and order by customers.surname desc
```

Will output:

```
Firstname  Surname
-------------------
Hillary    Clinton
Colm       O'Connor
Donald     Trump
```

Problem solved.

### EXERCISE 6: DISTINCT

Sometimes you just want to get a list of the different values present on a column.

For instance, say that you want to get the rooms reserved under a period of time. How could we do that?

One way to do that would be to select everything and check the different values that show up, but being careful not to double count a room that is reserver more than once in that period of time.

However, by specifying that we want the distinct room_id:

```
select distinct room_id from reservations where check_in_date <= '2018-05-31' and check_out_date >= '2018-05-01';
```

##### EXERCISE 6.a

Get the list of customers that made a reservation in the last year, including their details.


##### EXERCISE 6.b

Get the list of check in dates in the summer 2017.


### LESSON 7: SUM, AVERAGE AND COUNT

Let us imagine that we want to know how many reservations we have on our database. Similarly to the previous lesson, we could get all the records and count them ourselves, but that sounds boring and irrealistic in real life cases, where databases can have several milions of entries. So, for that purpose we have aggregation functions:

```
COUNT, SUM or AVERAGE,
```

The usages of each are pretty obvious.
So, this means that we can count, sum and calculate the average of a set of values.

Let's check an example for `COUNT`:

`select count(*) from customers;`

This will return the numebr of customers on a database.

##### EXERCISE 7.a

Count the number of reservations for a given customer id.

##### EXERCISE 7.b

Calculate the average paid ammount across all invoices.

##### EXERCISE 7.c

Calculate the total ammount paid on invoices for the summer of 2017.


### LESSON 8: GROUPING

What would you do if you needed to get the list of different surnames on our list of customers, and how many have a shared surname?

Here we introduce the concept of grouping by a given column. So, we ass

### LESSON 9: HAVING YOUR TABLE AND EATING IT



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



### HOMEWORK 1B

**User Story:** As a staff member, I want to get the list of all the invoices, and the details of the related reservations.

Create and endpoint `/detailed-invoices` from where we can get the list of invoices, together with the details for the reservation that they refer to.

- join


### HOMEWORK 1C: STRETCH GOAL

**User story:** As a staff member, I want ot retrieve the reservations and details for rooms and customers, that happened between a given date range.

Create and endpoint to get from `/reservations/details-between/:from_day/:to_day` all the reservations and details about customer and room, between a given date range.
