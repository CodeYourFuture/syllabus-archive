# Database 2: 

**What will we learn today?**

* Revision from last week
* [More SQL](#more-sql)
  * Changing the definition of a table
  * Dropping a table
  * Updating a row
  * Deleting a row
  * Join tables
  * Other useful operations
* [Use a database from a NodeJS application](#use-a-database-from-a-nodejs-application)
  * Introduction to Knex.JS
  * Loading data from a database with a GET endpoint
* [Homework](#homework)

## More SQL

For the following, use the file [`cyf_hotels_exercise5.sql`](../week-16/cyf_hotels_exercise5.sql) from the previous class to reinitialise your database with `psql -d cyf_hotels -f cyf_hotels_exercise5.sql`.

### Changing the definition of a table

Sometimes, you may need to change the definition of a table you created before without deleting it. Such changes include renaming the table, adding/removing a column, changing the name of a column, changing the type of a column etc... The general syntax to perform these operations is:

```sql
ALTER TABLE table_name action;
```

For example, to add a new column to the existing `customers` table:

```sql
ALTER TABLE customers ADD COLUMN date_of_birth DATE;
```

To delete an existing column from the `customers` table:

```sql
ALTER TABLE customers DROP COLUMN date_of_birth;
```

To rename the table `customers` into `clients`:

```sql
ALTER TABLE customers RENAME TO clients;
```

For more examples, you can consul the following tutorial: [Postgres alter table](http://www.postgresqltutorial.com/postgresql-alter-table/).

#### Exercise 1

- Add a column `date_of_birth` of type `DATE` in the `customers` table.
- Rename the column `date_of_birth` to `birthdate` in the `customers` table.
- Delete the column `birthdate` from the `customers` table.

### Dropping a table

To delete the table `customers`:

```sql
DROP TABLE customers;
```

#### Exercise 2:

- Create a new table `test`
- Drop the table `test`


### Updating a row

The general construction to update a row is:

```sql
UPDATE table SET column1 = value1, column2 = value2 WHERE condition;
```

For example, to update the name and country of the customers with ID 3:

```sql
UPDATE customers SET name='Bob Marley', country='Jamaica' WHERE id=3;
```

#### Exercise 3

- Update the postcode of the hotel named `Elder Lake Hotel` to `L10XYZ`
- Update the number of rooms of `Cozy Hotel` to `25`
- For the customer named `Nadia Sethuraman`, update her address to `2 Blue Street`, her city to `Glasgow` and her postcode to `G11ABC` in one query
- Update all the bookings of customer with ID `1` for the hotel with ID `1` to `5` nights in one query

### Deleting a row

The syntax to delete a row is:

```sql
DELETE FROM table WHERE condition;
```

For example, to delete the booking with ID 4:

```sql
DELETE FROM bookings WHERE id=4;
```

#### Exercise 4

- Delete the booking of customer ID `8` for the date `2020-01-03`
- Delete all the bookings of customer ID `6`
- Delete the customer with ID `6`

### Joining tables

Sometimes, you will need to retrieve data which are spread in different tables in a single response. For this purpose, you will need to join tables together. Below is the general syntax:

```sql
SELECT A.column1, B.column2 FROM A INNER JOIN B ON A.b_id=B.id;
```

For example, to load all the bookings along customer data:

```sql
SELECT * FROM customers INNER JOIN bookings ON customers.id=bookings.customer_id;
```

To load all the bookings along customer data and hotel data:

```sql
SELECT * FROM bookings 
INNER JOIN customers ON customers.id=bookings.customer_id 
INNER JOIN hotels ON hotels.id=bookings.hotel_id;
```

To load the bookings date of customer ID `1` along with the customer name and the hotel name:

```sql
SELECT bookings.checkin_date,customers.name,hotels.name FROM bookings
INNER JOIN customers ON customers.id=bookings.customer_id
INNER JOIN hotels ON hotels.id=bookings.hotel_id
WHERE customers.id=1;
```

#### Exercise 5

- Try and understand each of the query above in your `psql` prompt
- Retrieve all the bookings along customer data for bookings starting in 2020
- Retrieve the customer names, booking start dates and number of nights for all customers who booked the hotel name `Jade Peaks Hotel`
- Retrieve all the booking start dates with customer names and hotels names for all bookings for more than 5 nights


### Other useful operations

Ordering the result:

```sql
SELECT * FROM table ORDER BY column (DESC);
```

Limiting the number of results returned:

```sql
SELECT * FROM table LIMIT 10;
```

Returning all customers whose ID is 1, 2, 3 or 4:

```sql
SELECT * FROM customers WHERE id IN (1,2,3,4);
```

Query by pattern matching, for example retrieve all customers whose name starts with Bob:

```sql
SELECT * FROM customers WHERE name LIKE 'Bob%';
```

You can combine different operations together, for example, if you want to retrieve all the booking start dates with the customer names, hotel names and number of nights booked, for customer names starting with the letter `M` ordered by hotel name with a limit of 3 results:

```sql
SELECT bookings.checkin_date,customers.name,hotels.name FROM bookings
INNER JOIN customers ON customers.id=bookings.customer_id
INNER JOIN hotels ON hotels.id=bookings.hotel_id
WHERE customers.name LIKE 'M%' 
ORDER BY hotels.name
LIMIT 3;
```

#### Exercise 6

TODO


## Use a database from a NodeJS application

### Introduction to Knex.JS

https://knexjs.org/

TODO: we'll use knex.raw all the time, we don't use the Knex query builder, so students can still practice writing SQL query also with knex.

### Loading data from a database with a GET endpoint

TODO, small workshop to create a brand new nodejs app with a get endpoint and load data from a database with knex.raw and call the endpoint with Postman to try.


## Homework

TODO