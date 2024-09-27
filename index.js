// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function add_cat(cat){
    cats.push(name);
}
// // index.js
// let cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 2. Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 3. Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 4. Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 5. Appends a cat to the cats array and returns a new array
function appendCat(name) {
    return [...cats, name];
}

// 6. Prepends a cat to the cats array and returns a new array
function prependCat(name) {
    return [name, ...cats];
}

// 7. Removes the last cat in the cats array and returns a new array
function removeLastCat() {
    return cats.slice(0, -1);
}

// 8. Removes the first cat from the cats array and returns a new array
function removeFirstCat() {
    return cats.slice(1);
}

// Export the functions and the cats array for testing
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
