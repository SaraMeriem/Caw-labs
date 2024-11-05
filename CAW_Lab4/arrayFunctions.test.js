const { first, last, chunk } = require('./arrayFunctions'); 

describe('Fonctions de tableau', () => {
    describe('first', () => {
        test('devrait retourner les n premiers éléments du tableau', () => {
            expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        });
        test('devrait retourner un tableau vide si n <= 0', () => {
            expect(first([1, 2, 3], 0)).toEqual([]);
        });
        test('devrait retourner le premier élément si n n\'est pas fourni', () => {
            expect(first([1, 2, 3])).toEqual(1);
        });
        test('devrait retourner un tableau vide si le tableau est null', () => {
            expect(first(null, 3)).toEqual([]);
        });
    });

    describe('last', () => {
        test('devrait retourner les n derniers éléments du tableau', () => {
            expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
        });
        test('devrait retourner le dernier élément si n n\'est pas fourni', () => {
            expect(last([1, 2, 3])).toEqual(3);
        });
        test('devrait retourner un tableau vide si le tableau est null', () => {
            expect(last(null, 3)).toEqual([]);
        });
    });

    describe('join', () => {
        test('devrait concaténer tous les éléments du tableau en une chaîne', () => {
            const myColor = ["Red", "Green", "White", "Black"];
            expect(myColor.join()).toEqual("Red,Green,White,Black");
            expect(myColor.join('')).toEqual("RedGreenWhiteBlack");
        });
    });

    describe('chunk', () => {
        test('devrait diviser un tableau en morceaux de taille spécifiée', () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
            expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
            expect(chunk([], 2)).toEqual([]);
        });
    });
});
