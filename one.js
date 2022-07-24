// remove falsy values from any array
const arr = [1, 0, false, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arrow fuction
const removeFalsy = arr => arr.filter(Boolean);

// simple function
function bouncy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy(arr));

// [note: Boolean(expression) in javascript returns true/false ]