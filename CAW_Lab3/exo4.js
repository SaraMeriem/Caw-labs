
// Importer le module 'fs'
const fs = require('fs');

// Vérifier si un argument a été passé
if (process.argv.length < 3) {
    console.log('Veuillez spécifier le texte à ajouter au fichier.');
    process.exit(1);
}

// Récupérer le texte à partir des arguments de la ligne de commande
const textToWrite = process.argv[2];

// Définir le nom du fichier
const fileName = 'f.txt';

// Écrire le texte dans le fichier
fs.writeFile(fileName, textToWrite, (err) => {
    if (err) {
        console.error(`Erreur lors de l'écriture dans le fichier: ${err.message}`);
        return;
    }
    console.log('Le fichier a été enregistré !');
});
