# LESSON 3: DATA INTEGRITY AND ANALYTICS

**What we will learn today?**

* Adding invalid data.
* How to fix invalid data with foreign keys.
* Database Nulls
* Combining SQL predicates with AND and OR
* Order by
* Count / Sum / Avg
* Group by
* HAVING
* LIMIT
* like
* DISTINCT
* 'IN'
* !=

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
