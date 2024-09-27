// Write your solution here!
//const of cats... function you add cat then call back the function
const cats = ["Milo", "Otis", "Garfield"]

function add_cat(cat){
    cats.pop(name);
}
//index js
// let cats = ["Milo", "Otis", "Garfield"];

// Append a cat to the end of the cats array
// function destructivelyAppendCat(cat_name){
//     cats.unshift(cat_name);
//Error found and rectified.............
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    //add items in the beginning of an array. using unshift
    cats.unshift(name);
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    //remove items at the end of an array using the pop..
    //we'll add cats.pop.. when we input the names of the cat pop will add names later if we need to add
    cats.pop();//POP array
}

//  Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//  Appends a cat to the cats array and returns a new array
function appendCat(name) {
    //use return to call a function..
    return [...cats, name];
}

// Prepends a cat to the cats array and returns a new array
function prependCat(name) {
    //use return to call a function..
    return [name, ...cats];
}

// Removes the last cat in the cats array and returns a new array
function removeLastCat() {
    //slice the names will slice out the last two since its a negative index..
    //to print the first two use a positive integer to do so
    return cats.slice(0, -1);
}

// Removes the first cat from the cats array and returns a new array
function removeFirstCat() {
    //t'will slice out the name that will be on the first index..
    return cats.slice(1);
}

// Export the functions and the cats array for testing
module.exports = {
    //Use module export function to transfer data and test...
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
