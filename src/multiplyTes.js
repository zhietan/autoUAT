const perkalian = require('./multiply')
const assert = require('assert')


try {
    assert.strictEqual(perkalian(3, 5), 15)
    assert.strictEqual(perkalian(3, 2), 6)
    assert.strictEqual(perkalian(2, 10), 0)
    console.log('Semua pengecekan aman');
} catch (error) {
    console.log('Ada error fungsi',error.message);
}