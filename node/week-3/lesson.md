![](https://img.shields.io/badge/status-draft-darkred.svg)

# Node - Week 3

---

**Teaching this lesson?**

Read the Mentors Notes [here](./mentors.md)

---

## Learning Objectives

By the end of this lesson students should be able to:

- Process an UPDATE request using Express and Node to update data in memory
- Upload your Node APP

---

## CRUD Review

## Exercises

So what will we build? we will build a **CRUD** API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:

- Create some "resources"
- Retrieve them (GET them)
- Update them
- Delete them

> Which of these have we learnt so far?

## (1) Using Update exercise

This is an Teacher led exercise which can be used to show how we might retrieve an element by ID using a GET request.

### Objective

Change a quote API server to allow updating a quote according to the given ID.

The route should use the HTTP method PUT and should use the URL:

> /quotes

You should use the starting project: [cyf-quotes-id-start](https://glitch.com/~cyf-quotes-id-start). This is because this project has quotes with IDs.

When you remix the starting project, immediately rename it as your own.

## Updating Data

**Complete in-class (1) Using Update exercise at this point**

Lets look back at our original objectives.

> `PUT /albums/:albumId` should update the album (that matches the passed albumId)

This means that `PUT /albums/2` should update an album with the id `2` and return `200` with JSON `{ success: true }` to the user.

The code will look like this

```js
// notice .put
app.put("/albums/:albumID", function (req, res) {
  console.log("PUT /albums route");
});
```

Remember, you have got to **update** the album, not add it to the list

{% include "./homework.md" %}

{% include "../../others/escalation-policy.md" %}
