# Variables

When you code, you'll want to create *shortcuts* so you can easily refer to things without writing out the same value every time. In JavaScript we have **variables**, which allow us to store values to use later.

> Think of variables names like **labels** on boxes, while the value of the variable are the **contents** of the box - you could change the contents of a box and leave the label intact, the contents of the boxes can have different types, the boxes should have good labels (a box of books being labeled pens would be very confusing),
>
> ![Variables are like boxes](http://2.bp.blogspot.com/-guGunS9ljms/Ui-sF7Q9yQI/AAAAAAAAACU/DdnRgAARYyI/s1600/box.png)
> Photo from [Khan Academy](http://cs-blog.khanacademy.org/2013/09/teaching-variables-analogies-and.html)

## Try it out

You create a variable using the keyword `var`, which lets the application know that you're about to store a value. You also have to give a name to your variable, which can be anything you like, so long as it doesn't include spaces.

Here's an example of creating a variable called "city", which is storing a string called "Glasgow".

```js
var city = 'Glasgow';

console.log(city);
```

You'll notice that once you've created the variable, you can then simply write the name of the variable wherever you want to refer to it, rather than writing out Glasgow every time. You don't put quotes around a variable name.

Try to run the above code, and see what is printed to the console.

> **Exercise**
>
> In the above example, what will happen if we change the second line to `console.log("city")` - Do you notice the difference? What do you think will be the output?

You should have some code left over from previous steps which looks something like this (maybe even with comments):
 ```js
console.log(typeof 'Code Your Future');
console.log(typeof 6);
console.log(typeof false);
```

> **Exercise:** Now that you know how to create variables, rewrite this code. This time, define these values as variables at the top of the file, create a **variable** called `courseName` and **assign** it the value `Code Your Future`. Then create a variable called courseDuration and assign it the value 6, and a variable called isHard and assign it the value false.
>
> Refer to the three variables that you just created to get their types (i.e. `console.log(typeof courseName)` etc...)
>
> Is your output the same?
