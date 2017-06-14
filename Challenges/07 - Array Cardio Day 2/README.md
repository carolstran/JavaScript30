# Day 7 - Array Cardio Day 2
We're now on the second day of Array Cardio and this time, Wes covers the following methods:

``` JavaScript
Array.prototype.some()
Array.prototype.every()
Array.prototype.find()
Array.prototype.findIndex()
```

Knowing all of these array methods will come in handy when you are massaging your data. So let's see what they actually do!

## Takeaways
Here's a quick recap of each method and what it does.

``` JavaScript
Array.prototype.some()
```
The ```.some()``` method tests whether _at least_ one element in your array matches what you're looking for - aka the test implemented by the provided function.

``` JavaScript
Array.prototype.every()
```
As the name implies, ```.every()``` checks _every_ element to see if it passes the test provided by your function.

``` JavaScript
Array.prototype.find()
```
A ```.find()``` method is very similar to ```.filter()``` - but instead of returning a subset of the array it's going to give you the first item that it finds.

``` JavaScript
Array.prototype.findIndex()
```
Returns the **index** of the first element in the array that satisfies the provided testing function. So basically, it finds where something is inside of the array. Great for instances like when you want to remove in element from an array because in order to delete something, you must know where it actually is within the array.  

Want to see these in action? Check out my [script.js](https://github.com/stranskycaro/JavaScript30/blob/master/Challenges/07%20-%20Array%20Cardio%20Day%202/script.js) file to find the complete exercise and additional annotations.
