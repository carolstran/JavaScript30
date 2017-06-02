# Day 2 - JS and CSS Clock
A quick second exercise, focused on creating a clock object out of various ```<div>``` elements and then using JavaScript to move the hands according to the time of day. Hours, minutes _and_ seconds.

Committed on: June 2, 2017

#### My Twist
Again, I created separate files for the script and styling. Everything else remained the same besides making the border of the clock and its hands thinner.

I'm hoping to come back to this exercise to add some ```if``` statements to prevent the second hand from restarting at 0. When I do, I'll be sure to update that here.

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
