# Introduction to SQL

_Structured Query Language_ (SQL) provides a means of creating and manipulating databases, or more specifically, _relational database management systems_ (RDBMS).


## What's a Relational Database Management System?

An RDBMS is a representation of how rows in a table, known as _records_, are stored and related to each other.

Take a look at this table of patient appointments at a GP surgery:

![Flat file database](http://i.imgur.com/IlLazOJ.png)

What's wrong with this approach?

In order to accomodate for multiple appointment dates, this single-table approach requires the other columns to be duplicated; this introduces some major concerns:

* Larger storage footprint
* If a patient's doctor or phone number changes, then all copies must be updated
* Having multiple instances of the same data can result in incorrect input; take a look at the final record

It would be better to break this table down into respective tables for each entity:

![Separate tables](http://i.imgur.com/EBRmA3N.png)

Some of the tables contain IDs of related records, such as the appointment table's `id` column, but we still have to explicitly define our relationships. Before we jump into this, let's run some simple queries against the database.


## Browsing the database

For simplicity, our data is stored in an SQLite database; this is a self-contained file that can be read from and written to with no configuration, in contrast to MySQL that typically requires a connection string.

We're going to use [DB Browser for SQLite](http://sqlitebrowser.org/) to access our database, which is available for Windows, OS X, and Linux; please download it from the linked website.

Once it's installed and running, and you've cloned this repository, click _Open Database_, navigate to your copy of said repository, and open _surgery.sqlite_. You'll be greeted with the structure of our database. You may notice that there is a _Browse Data_ tab, but we will not be using this directly; instead, click the _Execute SQL_ tab so we can write our first query.


## `SELECT`

The `SELECT` statement returns a series of records, and specific columns, from one or more tables. To list the names of all the patients, we can select the `name` column from the `patient` table:

```sql
SELECT name from patient
```

Upon clicking the _play_ icon, you should see the names of the two patients in our database.

We can use a comma delimiter to select multiple columns from the table. Try running this query:

```sql
SELECT name, phoneNumber from patient
```

As one would expect, both the name and phone number associated with each record are returned.

An asterisk (`*`) wildcard can be used to select all of the columns in a table. Let's execute this against the `appointment` table:

```sql
SELECT * from appointment
```

This will return the `id`, `patientId`, and `date` fields of all of our appointments.


## The `WHERE` Clause

The `SELECT` statement also supports the `WHERE` clause, which limited the returned record based upon a number of criteria. This is useful for searching for rows based upon the values of certain fields.

To select any patients whose doctor is Peter Overmars (`id` = 1), we can specify this SELECT statement with a combined WHERE clause:

```sql
SELECT * from patient
WHERE doctorId = 1
```

We should only see Jimmie Vaughan's record.


## `AND` and `LIKE`

We can use the `AND` keyword to select a record based upon numerous fields. We can also use the `LIKE` keyword to find records by partial field matches. To see all of Jimmie Vaughan's appointments in July, run:

```sql
SELECT * FROM appointment
WHERE patientId = 1
AND date LIKE '%July%'
```

The `%` denotes a wildcard, representing any value; this allows us to accept any record by date field as long as it contains `July` in the middle of its value.


## `Insert Statement`

Thus far, we have only