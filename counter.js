//counter
const counter = () => {
    let count = 0;
    const changeCount = (val) => {
        count += val;
    }
    increment = () => {
        changeCount(1);
    }
    decrement = () => {
        changeCount(-1);
    }
    value = () => {
        return count;
    }
    return {
        // increment: () => {  
        //     changeCount(1);
        // },
        // decrement: () => {
        //     changeCount(-1);
        // },
        // value: () => count
        increment,
        decrement,
        value
    }
};
const count = counter();
count.increment();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
count.decrement();
console.log(count.value());