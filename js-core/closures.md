# Closures
A closure is an inner function that retains access to its parent function's scope.

It can be used to emulate private properties

```js
function car(){
  var speed = 0;

  return {
    faster: function(){
      var topSpeed = 12;
      speed += 5;

      if(speed > topSpeed) speed = topSpeed;
    },
    getSpeed: function(){
      return speed;
    }
  };
}
var golfCart = car();
golfCart.faster();
golfCart.faster();
golfCart.faster();
console.log(golfCart.getSpeed());
```

Both `faster` and `getSpeed` functions retain access to the parent scope and thus the variable `speed`. While the function `car` returns both of those functions, it does not expose the variable `speed` directly. We can only access it using those functions essentially making it a private. It is a useful pattern to restrict access to certain variables and ensure that they can only manipulated via set functions. We can use these functions for example to ensure that only valid values are set.

Closures can also be used to create factories which can retain configuration and be invoked later.

```js
function carFactory(make){
  return function(){
    return {
      make: make
    };
  };
}

var fordFactory = carFactory('Ford');
var car = fordFactory();
console.log(car);
```

Please note how `fordFactory` does not receive any params. Instead it retains access to its parent scope and is able to refer to the parameters the parent was called with. Most importantly it retains access to the parent scope event after the parent function has returned.

> **Exercise**:
>
> Create an outer function that accepts one parameter `greeting` (such as 'Hello', 'Hi' or anything else you like)
> and returns a closure which accepts one parameter `name` and retuns the greeting including name. So final output of
> the closure should be something like 'Hello, German'.
