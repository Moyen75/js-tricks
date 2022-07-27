//clouser
const myFunc = a => {
    return function (b) {
        return a + b;
    }
}
const add5 = myFunc(5);
console.log(add5(10));