// arrayfunctions.js

// 1. Récupérer les premiers n éléments d'un tableau
function first(array, n) {
    if (array == null || n <= 0) return [];
    if (n == null) return array[0];
    return array.slice(0, n);
}

// 2. Récupérer les derniers n éléments d'un tableau
function last(array, n) {
    if (array == null) return [];
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

// 3. Concaténer tous les éléments d'un tableau de chaînes
function joinStrings(array) {
    return array.join(', ');
}

// 4. Diviser un tableau en plusieurs sous-tableaux de taille prédéfinie
function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}

// Exporter les fonctions pour pouvoir les tester
module.exports = { first, last, joinStrings, chunk };
