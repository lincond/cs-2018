import Day from '../day.js';
const day = new Day();

QUnit.test('Data de nascimento', (assert) => {
    assert.equal(day.dayOfWeek(9, 7, 1998), 3);
});
