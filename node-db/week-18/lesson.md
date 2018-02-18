# LESSON 3: DATA INTEGRITY AND ANALYTICS

**Review of last lesson**

- Why NoSQL why SQL?
- Checking out a project and adding hotel.sql to the repo
- How to run SQLite *with node* on your machine - setting up a development environment.
- How to run a database query that retrieves tabular data in node express to an endpoint.
- Inserting data from an endpoint.
- Updating data from an endpoint.
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

The way we've learned so far (note the quotation marks):

```sql
select * from customers where surname = "O'Connor" or surname = 'Trump'
```

You can also do it like so:

```sql
select * from customers where surname in ("O'Connor", 'Trump')
```

This is might seem like a minor difference but:

- It is useful when you want your code to pass a list of things to the database and get a query which matches one or more of them.

- You can put *a whole select statement* in there if it returns one column. Your homework will require this.


##### EXERCISE 1.a

Write a query to get all of the customers with the first name "Colm" or "Hillary" using *IN*.


##### EXERCISE 1.b: OPTIONAL STRETCH GOAL

We're trying to locate a reservation for a customer. We know that:

- Their checkin date may have been June 1st, 2017 OR July 1st 2017
- Their checkout date may have been June 30th, 2017 OR July 30th 2017

Write a query using *IN* that is guaranteed to return their reservation.




### LESSON 2 : JOIN ME, AND TOGETHER WE CAN RULE THE GALAXY AS FATHER AND SON!

Now let's say we want to get the *names* of customers who have a reservation *today*.

From what we know now, we *could* do it like this:

- select customer_id from reservations where date_started = '01/01/2018'
- write down the list of customer ids on paper (e.g. 3, 5, 7)
- select * from customers where id = in (3, 5, 7)

However, that's stupid. We want the computer to figure out 3, 5, 7 by itself.

That's where a database "join" comes in handy. In real life, if you work with databases, you will be using this thing *all* of the time.

Now, we have data that spans two tables - we have reservations with a "customer_id" column that refers to the id column in the "customers" table.

```
select reservations.date_started, customers.firstname, customers.surname
from reservations JOIN customers ON reservations.customer_id = customer.id
WHERE reservation.date_started = '01/01/2018';
```

Note that:

- Because we are selecting columns from two tables and need to distinguish them, we use "table.column" syntax.
- We explicitly link reservations.customer_id and customer.id *even if they have a foreign key relationship*.
- reservations.customer_id and customer.id don't actually *have* to have a foreign key relationship, but they should.


##### EXERCISE 2.a

Get the list of rooms together with their room types.

##### EXERCISE 2.b: OPTIONAL STRETCH GOAL

Get the list of reservations together with the details of the title, first name and surname customer who made it.




### LESSON 3: ORDER BY SURNAME

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

##### EXERCISE 3.a

Select the list of reservations from the most recent to the oldest one.


##### Exercise 3.b: OPTIONAL STRETCH GOAL

Select the list reservations, primarily selecting the most recent ones, and secondarily selecting the longest ones.


### LESSON 4: SQL INJECTION

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

##### EXERCISE 4

You have five minutes. Work in teams. Figure out what happened between you and *why*.


### LESSON 5: LIMIT YOUR QUERIES

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

##### EXERCISE 5.a

Select two rooms only.


##### Exercise 5.b: OPTIONAL STRETCH GOAL

Select the latest 5 reservations on the database.


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


##### EXERCISE 6.a

Get the list of check in dates in the summer 2017.


##### EXERCISE 6.b: OPTIONAL STRETCH GOAL

Get the list of customers that made a reservation in the last year, including their details.


### LESSON 7: SUM, AVERAGE AND COUNT

Let us imagine that we want to know how many reservations we have on our database. Similarly to the previous lesson, we could get all the records and count them ourselves, but that sounds boring and irrealistic in real life cases, where databases can have several milions of entries. So, for that purpose we have aggregation functions:

```
COUNT, SUM or AVERAGE,
```

The usages of each are pretty obvious.
So, this means that we can count, sum and calculate the average of a set of values.

Let's check an example for `COUNT`:

`select count(*) from customers;`

This will return the number of customers on a database.

Wel call these aggregation functions, and we use them to modify the results while aggregating the table results - we had a list of rows for customers, now we have the count of customers: we aggregated the rows by counting them.


##### EXERCISE 7.a

Count the number of reservations for a given customer id.


##### EXERCISE 7.b: OPTIONAL STRETCH GOAL

Calculate the average paid ammount across all invoices.



### LESSON 8: GROUPING
Lets us say that we need to get the list of different surnames on our list of customers, and how many times each surname shows up on our database?

Here the idea is that we could group the columns by the surname and get a list of each different surname, and then we can apply an aggregation function to the rest.

For this we can user `GROUP BY` as follows:

```
select <column_to_aggregate_1>, <column_to_aggregate_2> from <table> group by <column_to_aggregate_1>, <column_to_aggregate_2>;
```

For instance, if we have the following entries on the customers:

| id | title | firsname | surname | email |
| --- | --- | --- | --- | --- |
|1|Doc.|Tom|Jones|tom.jones@sub-domain.domain|
|2|Mr.|Jorge|Silva|jorge-silva@sub-domain.com|
|3|Mr.|Jorge|Silva|jorge2-silva@sub-domain.com|
|16|Doc.|Pedro|Silva|pedro.silva@sub-domain.domain|
|17|Doc.|Colm|O'Conner|colm.oconner@sub-domain.domain|
|18|Doc.|James|Lennon|john.lennon@sub-domain.domain|
|19|Sir.|John|O'Conner|John.oconner@sub-domain.domain|

If we group by surname we have 4 different surnames: `O'conner`, `Silva`, `Jones`, `Lennon`, but for `Silva` and `O'Conner`, we have more than one entry, so we need to aggregate the rest of the columns. In this case, we want to count the occurrencies so we can simply do:

```
select surname, count(*) from customers group by surname;
```


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


Select the list of reservations from the most recent to the oldest one.



##### EXERCISE 8.a

Count the occurrencies of the DIFFERENT titles on the database.


##### EXERCISE 8.b

**User Story:** As a staff member, I want to check the number reservations for each customer, including their own details, so that we check who are our best customers.

Complete the endpoint to get from `/reservations-per-customer/` the number of reservations per customer, with details for the customer and the reservation.


##### EXERCISE 8.c: OPTIONAL STRETCH GOAL

Count the occurrencies of a combination of firstname and surname to get a list of customers with the same name.






### LESSON 9: HAVING YOUR TABLE AND EATING IT

Suppose that we want to filter the result of what we got on the previous exemple - count of customers each surname - to select only the surnames for which there are 3 or more customers?

To accomplish that we can use `HAVING` as follows:
```
select surname, count(*) from customers group by surname having count >= 3;
```

Note that `WHERE` would not work, because it enables us to filter data that will grouped, and we want to filter the result of that grouping. We want to filter by the count of customers.


##### EXERCISE 9.a

Get the list of custumers that have 5 or more reservations on our hotel.


##### EXERCISE 9.b: OPTIONAL STRETCH GOAL

Get the list of rooms that have had more than 3 reservations last year.
Create and endpoint `/detailed-invoices` from where we can get the list of invoices, together with the details for the reservation that they refer to.
