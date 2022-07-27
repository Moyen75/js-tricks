const name = 'Ajkerdeal';
const arr = Array.from(name);
console.log(arr.reduce((acc, curr) => acc + curr, ['']));