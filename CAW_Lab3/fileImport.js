

// Importer la fonction mean de notation.js
const { mean } = require('./notation');

const scores = [10, 20, 30, 40, 50];

// Calculer la moyenne des scores en utilisant la fonction mean
const Moyenne = mean(scores);

// Afficher la moyenne des scores
console.log(`La moyenne des scores est : ${Moyenne}`);


// Exécution sur cmd
// node fileImport.js
// Affichage : La moyenne des scores est : 30

