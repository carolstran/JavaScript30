# Day 10 - Hold Shift and Check Checkboxes
This exercise focused on DOM and interfaces. We were given a regular todo list, with checkboxes in front of tasks that cross them off once selected. The goal for this challenge was to make it so if someone checks one box, then holds down the shift key and checks another box - all of the boxes _in between_ will also become checked.

## Takeaways

#### Sometimes tedious is more maintainable
For this exercise, we approached it by first looping through every single checkbox. From there, this loop looked for the first one that was checked, as well as the last, to determine which should ultimately be crossed through.

Some might assume that a better, "more advanced" way to approach this would be to manipulate elements, children, parents, etc. But as Wes pointed out, looping over everything instead of trying to figure out where the user is in the DOM is more maintainable. This way, your JavaScript code isn't dependent on the HTML structure.

#### `e.shiftKey`
Honestly had no idea that you could just type `shiftKey` instead of searching for the key code (which by the way for the shift key is _16_)

#### `this.checked`
Similar to above, I forget that you can just write `.checked`. I'm always a bit hesitant if it's too straightforward :wink:
