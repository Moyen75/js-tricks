//know performance of the following code
//1. for loop
//2. while loop
//3. do while loop
//4. forEach loop
//5. map loop
//6. filter loop
//7. reduce loop
//8. for in loop
//9. for of loop

//know performance of a task
const start = performance.now();
for (let i = 0; i < 1000000; i++) {
    // do something
}
const end = performance.now();
console.log(end - start);