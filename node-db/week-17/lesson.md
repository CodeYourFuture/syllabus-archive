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

TODO

### Dropping a table

To delete the table `customers`:

```sql
DROP TABLE customers;
```

#### Exercise 2:

TODO

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

TODO

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

TODO

### Join tables

```sql
SELECT A.column1, B.column2 FROM A INNER JOIN B ON A.b_id=B.id;
```

TODO

#### Exercise 5

TODO

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