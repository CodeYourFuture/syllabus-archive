# Node 1

**What we will learn today?**

* Why we need databases.
* Creating a database with SQL, storing data in it.
* Retrieving data from a database using SQL.

THE PROBLEM
-----------

* Take existing code that stores reservation as a JSON snippet with subkeys for customer and rooms.

* Pretend to be an idiot junior programmer. Idiot junior programmer swaps out the code that puts a room in a reservation object and now it just puts null.

* Ask students what happens?

* Nobody notices anything initially.

* All the guests try to check in and there's chaos. [ FIND A PICTURE OR GIF OF A CHAOTIC HOTEL LOBBY ]

* Ask students how to solve this problem?

- If you try to enter invalid data into your program what should your program do? [ ANSWER : FAIL ]

* How do you make your program fail? [ Unit tests is an answer. Johnnny the junior programmer didn't actualyl write any. Tommy senior was too lazy. ]

THE SOLUTION
------------

The database is a way to enter structured data in a way that cannot easily be violated.

The way we use a database is completely different to the way we store things in files.

This lesson will be about taking what you have stored in a file currently and changing it such that it is stored in a database instead. Everything will look like it works exactly the same as before. But your software will be safer.


{ 
  "reservation id"
  "date"
  "customer": {
      "name": "blah",
      "last name": "blah",
  "room": {
      "thing"
  
  }
  
  
  Everything piece of data in a database is stored in a table.
  
  We're going to teach you a new language called SQL.
  
  CREATE TABLE Reservations
  
  Exercise: CRETE TABLE Rooms
  Exercise: CRETE TABLE Customers
  
  INSERT INTO Customer
  
  Exercise: INSERT INTO Room (with ID of 6)
  Exercise: INSERT INTO Reservation
   
  SELECT On Customer
  
  Exercise:
  SELECT on Reservation
  SELECT on Room
  
  SELECT AND WHERE ONE CUSTOMER
  
  Exercise:
  SELECT AND WHERE ROOM price > 50
  SELECT WHERE checkout date is between next thursday and sunday
  
  SELECT AND JOIN - reservations associated with customers
  
  DIAGRAM WHEN WE EXPLAIN IT
  
  Exercise:
  SELECT AND JOIN - reservations for a particular room
  SELECT AND JOIN - mix join AND where
  
  As an exercise: SELECT AND JOIN - rooms associated with reservations
  
  Install SQLite
  Connect to SQLite from node
  SELECT inside code
  INSERT inside code
