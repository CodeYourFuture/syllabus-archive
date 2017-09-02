# Introduction to SQL

_Structured Query Language_ (SQL) provides a means of creating and manipulating databases, or more specifically, _relational database management systems_ (RDBMS).

## Getting Started

For today's class, we're going to use [SQLBolt](https://sqlbolt.com/), a website that provides an overview of SQL and then allows one to practise writing queries in the browser.

The order of the lessons provided is intuitive, as it progresses from writing simple queries to creating new tables from scratch.

Let's study the [introduction to `SELECT` statements](https://sqlbolt.com/lesson/select_queries_introduction) together.

Please complete all of the exercises **until [lesson six](https://sqlbolt.com/lesson/select_queries_with_joins)**; we will cover the introduction of `JOIN`s together.

Some of the remaining exercises cover more advanced topics that we can skip for now. Therefore, once we've covered joins, please complete:

* [A short note on `NULL`s](https://sqlbolt.com/lesson/select_queries_with_nulls)
* [Inserting rows](https://sqlbolt.com/lesson/inserting_rows)
* [Updating rows](https://sqlbolt.com/lesson/updating_rows)
* [Deleting rows](https://sqlbolt.com/lesson/deleting_rows)
* [Creating tables](https://sqlbolt.com/lesson/creating_tables)
* [Altering tables](https://sqlbolt.com/lesson/altering_tables)
* [Dropping tables](https://sqlbolt.com/lesson/dropping_tables)

We will take the occasional break to assess how everyone is progressing, and to share answers to some of the exercises.


## Stretch Goals / Homework

[_SQLite_](https://en.wikipedia.org/wiki/SQLite) is a portable, file-based database format that supports a subset of SQL syntax.

Head over to the [SQLite Tutorial](http://www.sqlitetutorial.net/) website. Follow the instructions to download an SQLite GUI for your operating system and their sample database, which you will query in the subsequent exercises. Complete as many as possible.


In the next lesson, we will use an [_Object-Relational Mapper_](https://en.wikipedia.org/wiki/Object-relational_mapping) (ORM) in Node.js to query and alter an existing SQLite database.
