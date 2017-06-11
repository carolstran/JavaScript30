// Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some()

// is at least one person 19 or older?
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    // You could also take the current year (2017) and subtract people.year from it, but then you've limited yourself by hardcoding the date
    if (currentYear - person.year >= 19) {
        return true;
    }
});

// Here's an easier way to do it
const adult = people.some(person => {
    const thisYear = (new Date()).getFullYear();
    return thisYear - person.year >= 19;
});

// If you want to be a "total hot shot" according to Wes, write it like this:
const actualAdult = people.some(person => ((new Date()).
getFullYear()) - person.year >= 19); // This works because it uses an implicit return

console.log({isAdult}); // Putting curly brackets makes it so you see the name of the object in the console
console.log({adult});
console.log({actualAdult});



// Array.prototype.every()

// is everyone 19 or older?
const allAdults = people.every(person => ((new Date()).
getFullYear()) - person.year >= 19);
// All we did was change the variable name and the method from .some() to .every()

console.log({allAdults});



// Array.prototype.find()

// find the comment with the ID of 823423
 const comment = comments.find(function(comment) {
     if (comment.id == 823423) {
         return true;
     }
 });

// Here's the same thing written with an arrow function and implicit return
 const theComment = comments.find(comment => (comment.id == 823423));

 console.log(comment);
 console.log(theComment);



// Array.prototype.findIndex()

// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => (comment.id == 823423));

console.table(index); // It will return 1, which means it is the second item in our array.

// There are two ways to delete this from the array.

// First option
comments.splice(index, 1);

// Second option - very popular in the redux world
// Create a new array of updated comments
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newComments);
