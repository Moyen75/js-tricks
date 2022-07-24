// convert any value to Boolean

console.log(!!'hello'); // true
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!false); // false
console.log(!!Infinity); // false
console.log(!!(function () { })); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!new Date()); // true
console.log(!!new RegExp()); // true
console.log(!!new Error()); // true
console.log(!!new Promise(() => { })); // true
console.log(!!new Map()); // true
console.log(!!new Set()); // true
console.log(!!new WeakMap()); // true
console.log(!!new WeakSet()); // true