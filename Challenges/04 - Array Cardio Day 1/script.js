const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
    'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];




// Array.prototype.filter()

// * Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year <= 1599) {
        return true; // This means we keep the inventor and it will be part of our new Array.
    } // You don't need an else statement that returns false here. If it doesn't return true, it won't return anything.
});

console.log(fifteen); // You can also use console.table to show results in a table format

//Here's how you can reduce the amount of code...
const fifteenAgain = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599);
    // Created arrow function and did everything else in-line

console.log(fifteenAgain); // Same result!




// Array.prototype.map()

// * Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); // You could also concatinate the space like: inventor.first + ' ' + inventor.last
console.log(fullNames);


// * Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a')); // You can call querySelector against any DOM element, it doesn't always have to be document. This allows you to look inside any existing DOM element.
// We have to wrap this in Array.from because querySelector returns a NodeList, not an array.
// We could have also used an ES6 spread list: const links = [...category.querySelectorAll('a')];
const de = links
           .map(link => link.textContent) // No semicolon because we're chaining these methods
           .filter(streetName => streetName.includes('de'));




// Array.prototype.sort()

// * Sort the inventors by birthdate, oldest to youngest
// You return 1 and -1 to bubble these items up in the array
const ordered = inventors.sort(function(firstPerson, secondPerson) { // Many people also use 'a' and 'b' as their arguments
    if (firstPerson.year > secondPerson.year) {
        return 1;
    } else {
        return -1;
    }
});
console.log(ordered);

// You can also condense it:
const order = inventors.sort((a, b) => a.year > b.year ? 1 : -1); // This uses a ternary operator, which is basically a reduced if/else statement
console.log(order); // Same result!


// * Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if (lastGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
});

console.log(oldest);

// Keep it long or clean it up:
const older = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.log(older); // Saaaame thing


// * Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', '); // Here we're deconstructing the array produced by the .split method (which breaks up the names by the ',' and turns it into its own array with two separate variables)
    const [bLast, bFirst] = nextOne.split(', '); // Notice that we're not using this data, it's just for conversion. Instead, we're using the string that we were originally working with
    return aLast > bLast ? 1 : -1;
});




// Array.prototype.reduce()

// * How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); // You need to this 0 because the first time you loop around, the total will be undefined. Adding the 0 will prevent strange objects in the console results

console.log(totalYears);


// * Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce(function(obj, item) { // item in this case meaning each form of transportation
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++; // Adds an increment of each item instance to the object
    return obj;
}, {});

console.log(transportation);
