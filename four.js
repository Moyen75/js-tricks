// how to flatten an array of multidimensional arrays

const arr = [[1, 2, 3], [4, [5], 6], [7, 8, 9]];

const flatte = arr.flat(Infinity); // pass Infinity to flatten all arrays.else it will flatten only first array
console.log(flatte);

const flatten = (arr) => arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatten(arr));
