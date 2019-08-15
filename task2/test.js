const index = require('./index');
let assert = require('assert');

describe('addСommasToNumber', function () {
    it('метод должен вернуть отфарматированное число с запятыми', function () {
        assert.equal(index.addСommasToNumber(30000000), '30,000,000');
        assert.equal(index.addСommasToNumber(3474902022344556634), '3,474,902,022,344,556,634');
        assert.equal(index.addСommasToNumber(300), '300');
        assert.equal(index.addСommasToNumber(30), '30');
        assert.equal(index.addСommasToNumber(3), '3');
        assert.equal(index.addСommasToNumber(0), '0');
        assert.equal(index.addСommasToNumber(100000), '100,000');
    });
});


//простой тест для проверки в действительности нужно намного больше