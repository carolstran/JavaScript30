# Day 1 - JavaScript Drum Kit
For the first exercise in the series, I was tasked with building a virtual drum kit activated by a keydown event listener. It is equip with audio tracks and CSS animations.

#### My Twist
Throughout this course, I will be using a separate script file rather than script tags within an HTML file. Additionally, I made the styling more sleek by eliminating the busy background and the drop shadow.

## Takeaways

#### Audio Elements
This exercise was my first dive into audio elements and the nuances that come with them. For instance, the ```.play()``` call. In order to make the audio play reiteratively without waiting for the initial sound to finish, you need to clarify that in your code. Fortunately, all you need is to set ```.currentTime = 0```. That way, if you hit the same key over and over again, the audio will just rewind to the start.

#### Data Attributes
A colleague of mine is also doing the challenge and mentioned how this exercise introduced him to data attributes. If anyone else is new to using data attributes, the Mozilla Developer Network has this [helpful resource](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to expand on what is talked about in this video.

## Challenges

Hands down the most difficult part was resisting the urge to use jQuery.

You'll never convince me that this...
``` javascript
document.querySelectorAll('.key');
```
beats this:
``` javascript
$('.key');
```
