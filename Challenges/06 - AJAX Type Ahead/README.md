# Day 6 - AJAX Type Ahead
Today we built what Wes calls a "type ahead" feature. This is where you have a preset list and an input - then whenever someone types a value into the input that matches a value within the list, it shows the potential results. In this case, we were dealing with cities and

#### My Twist
I've built incremental searches before, but never steered the styling away from a traditional Google-type view. However, I'm into this stacked look that Wes has incorporated - so I kept the challenge as-is.

At the end, Wes mentions an additional challenge would be to find new ways to sort the data from the ```cities.json``` file. Particularly, using Geolocation and having the cities in results appear by whichever is closest to you. Planning to tackle that one as soon as we cover Geolocation.

## Takeaways

#### "Get Your Data First"
_Get all of your data and functionality in place first_ and then worry about hooking it up to event listeners or creating HTML or whatever.

#### ```fetch()```
The browser now has a built in AJAX request called ```fetch``` and it returns a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). This is what we used to retrieve our data. You can read more about the Fetch API, its concepts and uses [here](https://developer.mozilla.org/en/docs/Web/API/Fetch_API).

#### Regular Expressions
Regular expressions are patterns used to match character combinations in strings and in JavaScript, they are also objects. As you can see in my script file, we used ```RegExp``` to figure out when a location matches what was searched and to highlight the searched characters.

## Challenges
I love that throughout these videos, Wes addresses common misconceptions that people have when facing these challenges.  For instance, before revealing how to put our fetched data into the cities array, he tackled some incorrect - albeit logical - approaches. These included setting ```cities = data``` or pushing the items into cities using ```cities.push(data)``` without spreading it first.   
