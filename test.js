const index = require('./index');
let assert = require('assert');

describe('getResultArray', function () {
    it('должен возврашать массив с правильными значениями для таблицы', function () {
        let areArrsSame = true;
        let actualResult = index.getResultArray('+', 4);
        let expectedResult = [
            ['+', 0, 1, 2, 3, 4],
            [0, 0, 1, 2, 3, 4],
            [1, 1, 2, 3, 4, 5],
            [2, 2, 3, 4, 5, 6],
            [3, 3, 4, 5, 6, 7],
            [4, 4, 5, 6, 7, 8]
        ];
        assert.equal(compareArrays(actualResult, expectedResult), true);
    });
});

function compareArrays(actualResult, expectedResult){
    let areArrsSame = true;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            areArrsSame = (actualResult[i][j] === expectedResult[i][j]);
        }
    }
    return areArrsSame;
}

//простой тест для проверки в действительности нужно намного больше