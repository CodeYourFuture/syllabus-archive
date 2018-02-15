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



### LESSON 1: QUERIES WITHIN QUERIES

Now let's say that you have a group of customers that you want to

```sql
select * from customers where suname = in ("O'Connor", 'Trump')
```


### EXERCISE 1: QUERIES WITHIN QUERIES


### LESSON 1 : JOIN ME, AND TOGETHER WE CAN RULE THE INTERNET AS FATHER AND SON!

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




### EXERCISE 1A

**User Story:** As a staff member, I want to consult reservations, but including the room and customer information.

Update the exercies 5.* to retreieve the information of the rooms and customers as well.


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


### LESSON 3: SQL INJECTION

So, the hotel has a new guest:

![Hackerman](hackerman.jpg "Hackerman")

Now, Mr Hackerman has a problem with our hotel. He booked a room and then decided he didn't want it. That's fine, no problem, he can cancel using the DELETE reservations endpoint you created.

```
DELETE http://localhost:8080/api/reservation/6
```

However, he's decided that he wants to stay when the hotel is booked out. So, he grabs postman and he does this:

```
DELETE http://localhost:8080/api/reservation/6%20or%201%3D1
```

Now, enter your database in sqlite and run the command:

```
sqlite> select * from reservations;
```

### EXERCISE 3: SQL INJECTION

You have five minutes. Work in teams. Figure out what happened between you.


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

### LESSON 7: SUM, AVERAGE AND COUNT

### LESSON 8: GROUPING

### LESSON 9: HAVING




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



