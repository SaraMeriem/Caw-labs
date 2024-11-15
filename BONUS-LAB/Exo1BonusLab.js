//qst1
// Définir les variables v1 et v2
let v1 = 10;
let v2 = 20;

// Échanger les valeurs de v1 et v2
[v1, v2] = [v2, v1];

console.log("v1:", v1); // Affiche 20
console.log("v2:", v2); // Affiche 10


//qst2
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

const allItems = [...numbers, ...letters, ...foods];
console.log("allItems:", allItems);
//qst3
const str = "example";
const charArray = [...str];
console.log("charArray:", charArray);

//qst4
function fn(a, b, ...args) {
    console.log(args);
}


function fn(a, b, ...args) {
    console.log('a:', a);
    console.log('b:', b);
    console.log('args:', args);
}

console.log("Appel a) fn(1, 2, 3, 'A', 'B', 'C');");
fn(1, 2, 3, 'A', 'B', 'C');

console.log("Appel b) fn(1, 2);");
fn(1, 2);

console.log("Appel c) let x = ['a', 'b', 'c', 'd']; fn(...x);");
let x = ['a', 'b', 'c', 'd'];
fn(...x);
/*Appel a) fn(1, 2, 3, 'A', 'B', 'C');
a: 1
b: 2
args: [3, 'A', 'B', 'C']

Appel b) fn(1, 2);
a: 1
b: 2
args: []

Appel c) let x = ['a', 'b', 'c', 'd']; fn(...x);
a: 'a'
b: 'b'
args: ['c', 'd']
*/