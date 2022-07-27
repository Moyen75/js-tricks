
function modifier(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        return acc + str + (values.length ? "Mr. " + values.shift() : "");
    }, '');
}

const name = "moyen";
const name2 = "moyen75";

console.log(modifier`This is ${name} and ${name2}`);