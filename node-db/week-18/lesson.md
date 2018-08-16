# LESSON 3: DATA INTEGRITY AND ANALYTICS

**Recap of last lesson**

- What is the difference between user story, use case and user acceptance test.
- How to run a database query that retrieves tabular data in node express to an endpoint.
- Inserting data from an endpoint using postman.
- Updating data from an endpoint using postman.
- Using 'IN'
- Deleting data


**What we will learn today?**

* Joins
* SQL Injection
* LIMIT
* DISTINCT
* Sum / Avg / Count
* Group by
* HAVING


### LESSON 1 : JOIN ME, AND TOGETHER WE CAN RULE THE GALAXY AS FATHER AND SON!

Now let's say we want to get the *names* of customers who have a reservation *today*.

From what we know now, we *could* do it like this:

- select customer_id from reservations where date_started = '2018/12/31'
- write down the list of customer ids on paper (e.g. 3, 5, 7)
- select * from customers where id in (3, 5, 7)

However, we want the computer to figure out that we want ids 3, 5 and 7 by itself.

That's where a database "join" comes in handy. In real life, if you work with databases, you will be using this thing *all* of the time.

Now, we have data that spans two tables - we have reservations with a "customer_id" column that refers to the id column in the "customers" table.

```
select reservations.date_started, customers.firstname, customers.surname
from reservations JOIN customers ON reservations.customer_id = customer.id
WHERE reservation.date_started = '2018/12/31';
```

Note that:

- Because we are selecting columns from two tables and need to distinguish them, we use "table.column" syntax.
- We explicitly link reservations.customer_id and customer.id *even if they have a foreign key relationship*.
- reservations.customer_id and customer.id don't actually *have* to have a foreign key relationship, but they should.


##### EXERCISE 1.a

Get the list of rooms together with their room types.

##### EXERCISE 1.b: OPTIONAL STRETCH GOAL

Get the list of reservations together with the details of the title, first name and surname customer who made it.



### LESSON 2: SQL INJECTION

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

##### EXERCISE 2.a

You have five minutes. Work in teams. Figure out what happened between you and *why*.

Clue : You might want to use this https://meyerweb.com/eric/tools/dencoder/


### LESSON 3: ORDER BY SOMETHING

QUESTION FOR CLASS : What the difference is between *random* and *arbitrary*?

Up until now we've not been returning results in a *random* order, but we have been returning
them in an *arbitrary* order. The database has chosen what order to return records in. It's
generally the order you put them in but there is *no* guarantee it will be in that order.

Using 'order by' we can get records back in a specified order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '2018/12/31' order by customers.surname
```

We have Mrs Clinton, Mr Trump and me staying at the hotel? What order will will the reservations be displayed in?

If we want to get *explicit* the three of them in ascending order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '2018/12/31' order by customers.surname asc
```

Now, if we want them in descending order:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '2018/12/31' order by customers.surname desc
```

```
Date Started  Firstname  Surname
---------------------------------
2018/12/31    Melania    Trump
2018/12/31    Donald     Trump
2018/12/31    Bill       Clinton
2018/12/31    Hillary    Clinton
2018/12/31    Colm       O'Connor
```

This is just one way the results could come out. They could also come out (e.g. on a different computer, or done at a different time), for instance, like this:

```
Date Started  Firstname  Surname
---------------------------------
2018/12/31    Donald     Trump
2018/12/31    Melania    Trump
2018/12/31    Hillary    Clinton
2018/12/31    Bill       Clinton
2018/12/31    Colm       O'Connor
```

Note that Donald and Melania and Bill and Hillary are both reversed this time. This is because we said to sort by surname, which it does, but there are no guarantees about what order rows appear in where the surname is the same.

So, if we want to make it more *deterministic* (opposite of arbitrary), we can make it sort by surname *first* and first name *second*.

And, if we want to order by surname first and first name second, we can do this:

```
SELECT reservations.date_started, customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started = '2018/12/31' order by customers.surname desc, customers.firstname desc
```

```
Date Started  Firstname  Surname
---------------------------------
2018/12/31    Donald     Trump
2018/12/31    Melania    Trump
2018/12/31    Bill       Clinton
2018/12/31    Hillary    Clinton
2018/12/31    Colm       O'Connor
```

In this case, Donald always comes before Melania (D comes before M in the alphabet) and Bill comes before Hillary (because B comes before H in the alphabet).


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

##### EXERCISE 4.a

Select two rooms only.


##### Exercise 4.b: OPTIONAL STRETCH GOAL

Select the latest 5 reservations on the database.


##### Exercise 4.c: OPTIONAL STRETCH GOAL

Select the list reservations, primarily selecting the most recent ones, and secondarily selecting the longest ones.


### LESSON 5: DISTINCT

Remember the JOIN query from above? We're going to do another similar one.

```sql
select customers.firstname, customers.surname
from reservations join customers on reservations.customer_id = customer.id
where reservation.date_started > '2018/12/31' and order by customers.surname desc
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
where reservation.date_started > '2018/12/31' and order by customers.surname desc
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


##### EXERCISE 5.a

Get the list of check in dates in the summer 2017.


##### EXERCISE 5.b: OPTIONAL STRETCH GOAL

Get the list of customers that made a reservation in the last year, including their details.


### LESSON 6: SUM, AVERAGE AND COUNT

Let us imagine that we want to know how many reservations we have on our database. Similarly to the previous lesson, we could get all the records and count them ourselves, but that sounds boring and irrealistic in real life cases, where databases can have several milions of entries. So, for that purpose we have aggregation functions:

```
COUNT, SUM or AVERAGE,
```

The usages of each are pretty obvious.
So, this means that we can count, sum and calculate the average of a set of values.

Let's check an example for `COUNT`:

`select count(*) from customers;`

This will return the number of customers on a database.

Well call these aggregation functions, and we use them to modify the results while aggregating the table results - we had a list of rows for customers, now we have the count of customers: we aggregated the rows by counting them.


##### EXERCISE 6.a

Count the number of reservations for a given customer id.


##### EXERCISE 6.b: OPTIONAL STRETCH GOAL

Calculate the average paid amount across all invoices.



### LESSON 7: GROUPING
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

If we group by surname we have 4 different surnames: `O'conner`, `Silva`, `Jones`, `Lennon`, but for `Silva` and `O'Conner`, we have more than one entry, so we need to aggregate the rest of the columns. In this case, we want to count the occurrences so we can simply do:

```
select surname, count(*) from customers group by surname;
```


##### EXERCISE 7.a

Count the occurrences of the DIFFERENT titles on the database.


##### EXERCISE 7.b: OPTIONAL STRETCH GOAL

Count the occurrences of a combination of first-name and surname to get a list of customers with the same name.



### LESSON 8: HAVING YOUR TABLE AND EATING IT

Suppose that we want to filter the result of what we got on the previous example - count of customers each surname - to select only the surnames for which there are 3 or more customers?

To accomplish that we can use `HAVING` as follows:
```
select surname, count(*) from customers group by surname having count >= 3;
```

Note that `WHERE` would not work, because it enables us to filter data that will grouped, and we want to filter the result of that grouping. We want to filter by the count of customers.


##### EXERCISE 8.a

Get the list of customers that have 5 or more reservations on our hotel.


# HOMEWORK

##### HOMEWORK 1

**User Story:** As a staff member, I want to see reservations and their respective invoices

Create an endpoint to get from `/reservations-and-invoices/` the list of reservations and respective invoices.


##### HOMEWORK 2

Calculate the total amount paid on invoices for the summer of 2017.


##### HOMEWORK 3

**User Story:** As a staff member, I want to check the number reservations for each customer, including their own details, so that we check who are our best customers.

Complete the endpoint to get from `/reservations-per-customer/` the number of reservations per customer, with details for the customer and the reservation.

##### HOMEWORK 4

Get the number of reservations for each room id and include the details for the room details.

##### HOMEWORK 5

Adapt the previous query (8.c) to include the details for the type of room.


##### HOMEWORK 6

Get the list of rooms with sea view that were reserved more than 5 times.


##### HOMEWORK 7

Create an endpoint for each previous exercise that doesn't have an endpoint yet. You will have to think about what is the context of the query, what parameters you need to receive in the end-point and what makes sense to return as a result and in which format.


##### HOMEWORK 8

**User Story** As a staff member, I want to get the list of reservations within a time period, including the room and customer details.

Create an endpoint to get from `/reservations/details-between/:from_day/:to_day` the list of reservations between a specified time period. this should include the customer and room details.


##### HOMEWORK 9

**User Story** As a staff member, I want to get the number of reservations per customer.

Create an endpoint to get from `/reservations-per-customer/` the number of reservations each client has.


###### HOMEWORK 10

**User Story** As a staff member I want to analyse the rentability of each room, getting the total amount earned for each room, the average per reservations, and the number of reservations it has had in the past.

Create an endpoint to get from `/stats-price-room/` the list of rooms, together with the amount the hotel has earned with each, the average value earned per stay, and the number of complete stays it has had in the past.


##### HOMEWORK 11

**User Story** As a client or staff member, I want to check the availability of a room within a given date range.

Create an endpoint to get from `/rooms/available-in/:from_day/:to_day` the list of available rooms.
