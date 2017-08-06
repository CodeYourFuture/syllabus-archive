JSON - JavaScript Object Notation
---

- [Intro to JSON (w3schools)](http://www.w3schools.com/js/js_json_intro.asp)
- [Scott Lowe blog post on JSON](http://blog.scottlowe.org/2013/11/08/a-non-programmers-introduction-to-json/)

JSON is a way of transferring data.
It works directly with JavaScript, they are plain JavaScript objects.

```js
{
    "key": "value"
}
```

You can take a JavaScript object, and turn in into JSON, via the JSON api:
```js
var myObject = {"key": "value"};
var jsonString = JSON.stringify(myObject);
console.log(jsonString);

'{"key":"value"}'
```

You can also turn a string into JSON:
```js
var jsonString = '{"key": "value"}';
var myObject = JSON.parse(jsonString);
console.log(myObject.key);

"value"
```

## Exercise
Take the following JSON string, turn it into an object, then show the results.
If you have time format the results to show individual keys and their values.

    '{"type": "pizza","toppings":["cheese","tomatoe"],"size":15,"crust":"stuffed","base":"deep pan"}'