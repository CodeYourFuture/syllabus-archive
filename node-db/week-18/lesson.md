# LESSON 3: DATA INTEGRITY AND ANALYTICS

**What we will learn today?**

* How to add invalid relational data to a database
* How to prevent invalid relational data with foreign keys
* Database nulls
* Predicates
* Combining SQL predicates with AND and OR
* SQL - Order by
* SQL - Count / Sum / Avg
* SQL - Group by
* SQL - HAVING
* SQL - LIMIT
* SQL - like
* SQL - DISTINCT
* SQL - 'IN'

# LESSON : Installing SQLite on the command line

* Windows: https://sqlite.org/download.html
* Ubuntu: apt-get install sqlite
* Mac OS: brew install sqlite


>>> sqlite temp.sqlite

sqlite> create table rooms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type_name varchar(50),
  original_price integer,
  current_price int,
);

sqlite> insert into rooms (1, 'seaview', 50.0, 55.0);

>>> sqlite temp.sqlite < example.sql


# EXERCISE 1: Recreate the hotel database and add some entries

* Recreate customer, room and reservation tables
* Insert some example data making sure that the IDs match


# LESSON 2: Data integrity

Try this in your database:

INSERT INTO Invoices (reservation_id, total, surcharges, invoice_date_time, paid) values (9999, 35.0, 0, '01/01/2018', 0);

# QUESTIONS FOR CLASS:

* What's the problem with the above SQL statement?

* What happens to the application and the end user if you accidentally do this?

* How can you deal with a problem like this? There are 2/3 answers to this question - what are they?

A1: Delete data

A2: Make it impossible to add invalid data in the first place in the code.

A3: Make it impossible to add invalid data in the first place in the database.

# LESSON: Deleting records from a table

To fix the invalid data we can first delete the data from the database. This is as
good a time as any to tell you about deleting, so here goes:

  DELETE FROM [ TABLE ] WHERE id = [ ID ];

# EXERCISE: First find the row with select, then delete it

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
