# HOMEWORK




##### EXERCISE 7.c

Calculate the total ammount paid on invoices for the summer of 2017.



##### EXERCISE 8.c

Get the number of reservations for each room id and include the details for the room details.

##### EXERCISE 8.d (STRETCH GOAL)

Adapt the previous query to include the details for the type of room


##### EXERCISE 8.f (STRETCH GOAL)

Adapt the endpoint, to include the details about the room and the room type on the query.


##### EXERCISE 9.c

Get the list of rooms with sea view that were reserved more than 5 times.



##### EXERCISE 2.c

**User Story:** As a staff member, I want to see reservations and their respective invoices

Create an endpoint to get from `/reservations-and-invoices/` the list of reservations and respective invoices.


##### EXERCISE 10

Create an endpoint for each previous exercise that doesn't have an endpoint yet. You will have to think about what is the context of the query, what parameters you need to receive in the enpoint and what makes sense to return as a result and in which format.


##### EXERCISE 10.a

**User Story** As a staff memer, I want to get the list of reservations within a time period, including the room and customer details.

Create an endpoint to get from `/reservations/details-between/:from_day/:to_day` the list of reservations between a specified time period. this should include the customer and room details.


##### EXERCISE 10.b

**User Story** As a staff member, I want to get the number of reservations per customer.

Create an endpoint to get from `/reservations-per-customer/` the number of reservations each client has.


###### EXERCISE 10.c

**User Story** As a staff member I want to analyse the rentability of each room, getting the total amount earned for each room, the average per reservations, and the number of reservations it has had in the past.

Create an endpoint to get from `/stats-price-room/` the list of rooms, together with the ammount the hotel has earned with each, the average value earned per stay, and the number of complete stays it has had in the past.


##### EXERCISE 10.d

**User Story** As a client or staff member, I want to check the availability of a room within a given date range.

Create an endpoint to get from `/rooms/available-in/:from_day/:to_day` the list of available rooms.
