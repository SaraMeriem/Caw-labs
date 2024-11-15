const setOne = arr => [...new Set(arr)];

// Exemple d'utilisation
console.log("le resultat de la fonction setOne",setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); // Résultat : [4, 5, 2, 3, 1]




const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));

// Exemple d'utilisation
console.log("le resultat de la fonction getRidOf",getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x')); // Résultat : ['a', 'c', 'd', 'f', 'g']
