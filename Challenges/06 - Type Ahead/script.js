const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); // ES6 spread syntax

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // This is where we figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi'); // 'g' stands for global and 'i' means insensitive (matches lowercase or uppercase)
        return place.city.match(regex) || place.state.match(regex); // Checks both city and state
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
} // Found online, displays population numbers with nice looking commas

function displayMatches() { // This is going to be called whenever someone changes the value
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // Replaces value with highlighted version
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join(''); // We add this to the end because .map() returns an array, when all we need is a single string
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // Fires whenever you go off that input, not just on keyup or keydown
searchInput.addEventListener('keyup', displayMatches); // Here it fires on keyup! So whenever someone is done typing a character
