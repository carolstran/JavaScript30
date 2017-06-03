# Day 2 - JS and CSS Clock
A quick second exercise, focused on creating a clock object out of various ```<div>``` elements and then using JavaScript to move the hands according to the time of day. Hours, minutes _and_ seconds.

Committed on: June 2, 2017

#### My Twist
###### Update: June 3, 2017
It's the weekend, so I had the opportunity to go back and tackle the issue Wes proposes before the video ends. The problem is that whenever the second hand hits zero, the hands reset and create a visible glitch. This is because with the ```transition: all 0.05s``` - the hand must go backwards to get from 60 seconds (450 degrees) to 0 seconds (90 degrees).

To tackle this, I implemented a simple ```if/else``` statement that first checks if the ```secondDegrees``` equals 90, then resetting the inline style. The code looks like this:

``` javascript
if(secondsDegrees === 90) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
```

The minute and hands still jerk a little when they change, but I'll take it.

Another addition I made today was adding a **digital clock** component, an idea I stumbled across after googling ways to expand these exercises. In order to create this digital clock, I took the following steps:

* Created an HTML structure similar to the original, adding ```-digital``` to the end of each class name
* Added ```const``` variables for these new elements using ```document.querySelector()```
* Create a ```checkTime()``` function that accepts an integer, checks if that integer is less than 10 (and if so, adding a 0 in front) then returns the integer that will display on the clock
* Finally, chain the function to the innerHTML property

You can see the code for this in my [script.js](https://github.com/stranskycaro/JavaScript30/blob/master/Challenges/02%20-%20JS%20and%20CSS%20Clock/script.js) file for this exercise.

## Takeaways

#### Working With Time (JS)
I didn't know that there was a way to get the current time using a JavaScript function! But it's literally as easy as:
``` javascript
now.getSeconds();
now.getMinutes();
now.getHours();
```

#### Other Rotation Patterns (CSS)
By default, objects will rotate from their center when you style them with ```rotate(20deg)```. In most cases, this is great - however for a clock, this doesn't work. So today, we had to change the ```transform-origin``` property, aka where the rotation begins.  For this exercise, we set it as ```transform-origin: 100%``` so that it travels along the x-axis and the pivot point lands on the very righthand side of the ```<div>```, which is the center of the clock face.

Another option I learned about through this exercise is the ```transition-timing-function```, which allows you to change the way the ```<div>``` moves when the rotation happens. For this clock, we used a variation of ```cubic-bezier``` to give it that authentic, ticking effect.

## Challenges
Honestly... the biggest challenge for me this exercise was figuring out the math to determine the rotation patterns. Luckily, once you find one then you basically have them all.  
