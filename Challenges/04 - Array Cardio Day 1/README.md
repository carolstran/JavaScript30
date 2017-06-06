# Day 4 - Array Cardio Day 1
I fell a bit behind during the holiday weekend, so I'm going to have to do double-time the next couple of days. And what better way to jump back in than with some arrays!

Right off the bat, Wes describes arrays as "the gateway drugs to functional programming." This is partially because they are usual, but mainly because they are impossible to avoid. In this exercise, we reviewed these array methods:

``` JavaScript
Array.prototype.filter()
Array.prototype.map()
Array.prototype.sort()
Array.prototype.reduce()
```

Committed on: June 6, 2017

## Takeaways

#### These Array Methods (naturally)
Here's a quick recap of each method and what it does.

``` JavaScript
Array.prototype.filter()
```
The ```.filter()``` method loops over the array and creates a new array based on the params you set within the callback function. Note that it does not _mutate_ the existing array, but rather produces a new one entirely.

``` JavaScript
Array.prototype.map()
```
This is the one I always mix up because the ```.map()``` method takes a callback function just like the ```.filter()```. However, ```.map()``` uses that callback function to create a new array that displays the function results _and_ will always return the same amount of items as you give it.

``` JavaScript
Array.prototype.sort()
```
As you may have assumed, the ```.sort()``` method allows you to sort an array by taking a callback function with two arguments. How you decide to compare these arguments will determine how the array is sorted.

``` JavaScript
Array.prototype.reduce()
```
The ```.reduce()``` method is basically a ```for``` loop which you can use to create a total. This total will be based on an expression that uses all of the items within your array. The method takes two arguments, a callback function and an initial value. _Note: The initial value is optional, but recommended to prevent erratic results._

Want to see these in action? Check out my [script.js](https://github.com/stranskycaro/JavaScript30/blob/master/Challenges/04%20-%20Array%20Cardio%20Day%201/script.js) file to find the complete exercise and additional annotations. Please note that the individual tasks are not in the original order, but rather sorted based on the method used to accomplish the task.

#### Keeping Longer Code
Something else that really resonated was that while Wes provides options to refactor and shorten your code - he also mentions that sometimes it's alright to leave longer code in if that means better readability. Most of my colleagues agreed with that point, which is refreshing especially for someone who is new to coding.

## Challenges

Keeping up. This, in part, is because my technical vocabulary isn't very extensive. For instance, I've worked with [conditional operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) before, but when Wes pulled out the term 'ternary' - I was lost. If anyone has any suggestions for learning more development vocabulary, I'd love to hear it.
