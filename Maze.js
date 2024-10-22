
//Exo1
/* window.onload = function() {
    // Select all boundary elements
    var boundaries = document.querySelectorAll(".boundary");

    // Loop over each boundary and add event listener
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            // When mouse is over a boundary, change its background color to red
            boundary.style.backgroundColor = "#ff8888";
        });
    });
};
*/
//Exo2
/*
window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");

    // Ajoute un écouteur d'événement à toutes les bordures pour qu'elles deviennent toutes rouges lorsque l'une d'elles est survolée
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "#ff8888";  // Toutes les bordures deviennent rouges
            });
        });
    });
};

*/
//Exo3
/*

window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");
    var end = document.getElementById("end");

    // Toutes les bordures deviennent rouges si l'une d'elles est survolée
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "#ff8888";
            });
        });
    });

    // Ajout d'un écouteur d'événement pour la fin du labyrinthe
    end.addEventListener("mouseover", function() {
        alert("Vous avez gagné!");  // Affiche le message de victoire
    });
};
*/

//exo4
/*
window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");

    // Toutes les bordures deviennent rouges si l'une d'elles est survolée
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "#ff8888";
            });
        });
    });

    // Réinitialisation du labyrinthe lorsque la zone de départ est cliquée
    start.addEventListener("click", function() {
        boundaries.forEach(function(boundary) {
            boundary.style.backgroundColor = "";  // Réinitialise la couleur des bordures
        });
    });

    // Ajout d'un écouteur d'événement pour la fin du labyrinthe
    end.addEventListener("mouseover", function() {
        alert("Vous avez gagné!");
    });
};
*/
// Exo6
/*
window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");

    // Toutes les bordures deviennent rouges si l'une d'elles est survolée
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "#ff8888";
            });
            status.textContent = "Vous avez perdu!";
        });
    });

    // Réinitialisation du labyrinthe lorsque la zone de départ est cliquée
    start.addEventListener("click", function() {
        boundaries.forEach(function(boundary) {
            boundary.style.backgroundColor = "";
        });
        status.textContent = "Déplacez votre souris sur le 'S' pour commencer.";
    });

    // Mise à jour du statut en cas de victoire
    end.addEventListener("mouseover", function() {
        status.textContent = "Vous avez gagné!";
    });
};
*/

//Exo7
/*

window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var maze = document.getElementById("maze");
    var hasLost = false;

    // Toutes les bordures deviennent rouges si l'une d'elles est survolée
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            if (!hasLost) {
                boundaries.forEach(function(b) {
                    b.style.backgroundColor = "#ff8888";
                });
                status.textContent = "Vous avez perdu!";
                hasLost = true;
            }
        });
    });

    // Réinitialisation du labyrinthe lorsque la zone de départ est cliquée
    start.addEventListener("click", function() {
        boundaries.forEach(function(boundary) {
            boundary.style.backgroundColor = "";
        });
        status.textContent = "Déplacez votre souris sur le 'S' pour commencer.";
        hasLost = false;
    });

    // Mise à jour du statut en cas de victoire
    end.addEventListener("mouseover", function() {
        if (!hasLost) {
            status.textContent = "Vous avez gagné!";
        }
    });

    // Détection de triche lorsque la souris sort du labyrinthe
    maze.addEventListener("mouseleave", function() {
        if (!hasLost) {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "#ff8888";
            });
            status.textContent = "Vous avez perdu!";
            hasLost = true;
        }
    });
};
*/


