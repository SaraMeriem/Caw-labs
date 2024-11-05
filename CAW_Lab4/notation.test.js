const { mean } = require('./notation');

test('La fonction mean doit retourner la moyenne correcte pour un ensemble de scores', () => {
    const scores = [10, 20, 30, 40, 50];
    expect(mean(scores)).toBe(30);
});

test('La fonction mean doit gérer un tableau vide', () => {
    const scores = [];
    expect(mean(scores)).toBeNaN();
});

test('La fonction mean doit gérer un tableau avec un seul élément', () => {
    const scores = [25];
    expect(mean(scores)).toBe(25);
});
