
// Importer le module 'fs'
const fs = require('fs');

// Vérifier si un argument a été passé
if (process.argv.length < 3) {
    console.log('Veuillez spécifier le nom du fichier à lire.');
    process.exit(1);
}

// Récupérer le nom du fichier à partir des arguments de la ligne de commande
const fileName = process.argv[2];

// Lire le fichier de manière asynchrone
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erreur lors de la lecture du fichier: ${err.message}`);
        return;
    }
    // Afficher le contenu du fichier dans la console
    console.log(data);
});

// Exécution sur cmd
// node ReadFile.js test.txt
// Affichage : "Hello, this is a text example"
