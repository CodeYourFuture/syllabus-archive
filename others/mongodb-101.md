# Week XX Lesson: MongoDB

**What we will learn today?**

* SQL vs NoSQL
* Why MongoDB?
* Mongo Shell Basic Commands
* MongoDB administration
   * Aggregation
   * Replication
   * Sharding
* What's next?

# Before we start

Download and install MongoDb from
https://www.mongodb.com/download-center#community . Follow the instructions for
your platform (Windows, Linux or OS X).

Open two instances of terminal. Run `mongod` in the first instance - this will start MongoDB.
 
In the second instance, first download the sample data script:
```curl https://gist.githubusercontent.com/agiamas/35b2b954cc942f95709273d3cb9d2cf3/raw/1a0b732594c5f5ae23f638c03519a98364f8b0ff/mongodb_data.js > mongo_data.js```

then import the data we just downloaded using 
```mongo < mongo_data.js```

Finally, run `mongo` in the second terminal instance.


# Lesson 1 - SQL and NoSQL
 
SQL is a well known paradigm in data storage and retrieval, serving us for decades. 
Our data was living in mainframes and being stored and processed in isolation. 
The nature of Web and mobile has created a paradigm shift in the past decade. Data has exploded in volume, veracity and velocity.
We have many times semi-structured data of varying quality and unpredictable volumes of them.
  
This has led to a new breed of databases, the NoSQL ones.
- Document databases, e.g. MongoDB
- Graph stores, e.g. Neo4J
- key-value stores, e.g. Redis
- Wide-column stores , e.g. Cassandra

In this class we will examine Document databases and its most popular one, MongoDB.

First of all, how does MongoDB compare with traditional SQL queries that we have learned in the past?
http://s3.amazonaws.com/info-mongodb-com/sql_to_mongo.pdf

# Lesson 2 - Why MongoDB?
MongoDB is a leader in NoSQL database space. 
- de facto leader in NoSQL database space.
- uses JSON, you are familiar with json in FE/Node, you can use it in DB layer too!
- one language to rule them all, part of MEAN stack
- mongodb data types as compared to JSON
   - https://docs.mongodb.com/manual/reference/bson-types/
   - We can even query by type! 
   https://docs.mongodb.com/manual/reference/operator/query/type/
   
   
# Lesson 3 - Basic Commands

Open the terminal that you ran `mongo`. 
First type `show dbs`

You should see something similar to:
```mongodb
admin          0.000GB
local          0.000GB
```

Then type `use cyf`

You should now get:
```mongodb
switched to db cyf
```
That's it! You have created a new database.

Now type again `show dbs`
```mongodb
admin          0.000GB
local          0.000GB
```

**??? Where is our new database? ???**

- Lazy initialisation.

## Databases

## Collections and Documents

Collections are like tables in SQL databases. Initialising a collection is also happening lazily like this:

```> db.Student.insert({name: 'alex'})```

now if we run again `show dbs` after we create a collection with a document we will see that the database appears in the list.
 This is because at the moment that we inserted this document, the document was created, which in turn created the collection which in turn created the database.
 
### Finding Documents
 
Finding a document by a single attribute:
 
```
> db.Student.find({name: 'alex')
```

Querying embedded attributes:
```
> db.Student.find({"scores.midterm": {$gte: 40}} )
```

AND / OR queries:
```
> db.Student.find({"$or": [{"scores.midterm": {$gt: 60}}, {"scores.final": {$lte: 75}}]} )
```

In these two examples above we can see the operators GreaterThanEquals >= , GreaterThan > and LessThanEquals <= in action.

All operators in MongoDB:
https://docs.mongodb.com/manual/reference/operator/query/

### Updating Documents

Updating documents has 2 parts. The first one is finding the document(s) we want to update and the second one is modifying their values.

(!) 
```
db.Student.update({name: 'alex'}, {name: 'alexander'})
```

What will this command do?

REPLACE the first instance of document matching {name:'alex'} with the new {name:'alexander'} !!!!

Definitely not what we want...

```
> db.Student.update({name: 'alex'}, {$set: {name: 'alexander'}})
```

We can also use other operators like $inc, $mul, $min, $max

https://docs.mongodb.com/manual/reference/operator/update/#fields

(!) Update by default will update only the first instance it matches.
multi:true

(!) We can get update to update or *create* the document by using upsert:true

# Deleting documents

Deleting a single or more documents is as simple as:
```mongodb
> db.Student.remove({"_id":ObjectId("5a99e1209056c9e237d071d9")})
WriteResult({ "nRemoved" : 1 })
```

Deleting a whole collection:
```db.Student.drop()```

Deleting a database:
```db.dropDatabase()``` to delete the current database


# Lesson 4 - Administration

## scripting the shell

There are several ways to write scripts for MongoDB shell:
- use `mongo < mongo_script.sh`
- use `mongo mongo_script.js`

What's the difference?

The first one will pipe in our script and execute its lines one by one as if we were typing them in Mongo shell.

The second one will evaluate our javascript and attempt to run it with Mongo shell.


**Always** test scripts locally in MongoDB (and in general).

**Always** test in staging before production.

**Always** keep backups in production. And test that you can restore from these backups regualarly.

All of these are important for every database system but even more important in MongoDB as...

THERE IS NO ROLLBACK! There are no transactions. Once you delete something, it's gone.



=======OPTIONAL==============

## Aggregation

SQL
Aggregation framework
WHERE / HAVING $match
GROUP BY $group
SELECT $project
ORDER BY $sort
LIMIT $limit
sum() / count() $sum
join $lookup

- showcase a simple aggregation pipeline
- NO EXERCISE

## Replication
- why do we need replication?
- diagram with setup of 3 servers
 
## Sharding
- what is sharding for?
- horizontal scaling examples
- diagram for scaling

# What's next?

Thanks to our sponsor MongoDB, we have this swag here. 
If you have time and interest, please register to either of these classes or any other class in MongoDB university. 

All classes are **free** and on average require 6-10 hours of time per week.

https://university.mongodb.com/courses/M101JS/about
https://university.mongodb.com/courses/M101P/about

_Shameless plug_

I am also the author of the Mastering MongoDB 3.x book by Packt publishing, available [here](https://www.packtpub.com/big-data-and-business-intelligence/mastering-mongodb-3x). 

Please use code XXXX for XX% off.
