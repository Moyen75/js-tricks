//replace all the spaces with %20
function replaceSpaces(str) {
    return str.replace(/\s/g, '-');
}
console.log(replaceSpaces('Mr John Smith'));
//remove all the vowels from a string
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels('Hello World'));

//replace all occurences of a string 
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
    // return str.replace(/find/g, replace);
}
console.log(replaceAll('Hello World', 'Hello', 'Gello'));