const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
const [f, g, ...h] = arr;

let i = 3;
let j = 4;

[i, j] = [j, i];

const obj = {
    name: 'John',
    age: 30
};
const { name, age } = obj;
const { name: n, age: y } = obj;
const { name: m, age: x, city = 'London' } = obj;

const newObj = {
    name: 'John',
    age: 30,
    city: 'London',
    country: 'UK',
    address: {
        street: 'Main St',
        city: 'London',
        country: 'UK',
        zip: 'W1',
        house: {
            number: '1',
            street: 'Main St',
            city: 'London',
            country: 'UK',
            zip: 'W1',
            flat: {
                number: '1',
                street: 'Main St',
                city: 'London',
                country: 'UK',
                zip: 'W1'
            }
        }
    }
}

const { country, address: { house: { street, flat: { number } } } } = newObj;
console.log(number);