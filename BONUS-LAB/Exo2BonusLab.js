// Déclaration de `arr` et utilisation des fonctions fléchées
const arr = [3, 5, 8];
const plusOne = arr.map(n => n + 1);

// Fonction `double` avec une fonction fléchée
const double = (arr) => arr.map(val => val * 2);

// Utilisation de la déstructuration pour `a` et `b`
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;

// Fonction `add` réécrite en ES2015
const add = (a, b) => {
    a = (a === 0) ? 0 : (a || 10);
    b = (b === 0) ? 0 : (b || 10);
    return a + b;
};
