function main() {
    const input = require("fs").readFileSync("input.txt", "utf8");
    // допустим, что ввод всегда правильный. 
    let operation = (input.match(/[+?-?*?/?]/)).toString();
    let tableSize = Number(input.slice(input.search(/[0-9]/),input.length));
    fs = require("fs").writeFileSync("output.txt", getOutput(operation, tableSize), "utf8")
}

function getResultArray(operation, tableSize) {
    let resultArr = [
        []
    ];
    resultArr[0][0] = operation;
    for (let i = 0; i < tableSize + 1; i++) {
        resultArr[0][i + 1] = i;
        resultArr[i + 1] = []; // добавляем масиив в наш двумерный массив
        resultArr[i + 1][0] = i;
    }
    for (let i = 1; i < tableSize + 2; i++) {
        for (let j = 1; j < tableSize + 2; j++) {
            resultArr[j][i] = (eval(resultArr[j][0] + operation + resultArr[0][i]));
            ((resultArr[j][i] ^ 0) !== resultArr[j][i] && resultArr[j][i].toString().length !== 3) ?
            resultArr[j][i] = resultArr[j][i].toFixed(2): resultArr[j][i];
        }
    }
    console.log(resultArr);
    return resultArr;
    
}

function getOutput(operation, tableSize) {
    let resultArr = getResultArray(operation, tableSize);
    let resultOutput = '';
    let maxColumnLength = 0;
    for (let i = 0; i < resultArr[0].length - 1; i++) { // не берём последний столбец так как его менять не надо
        maxColumnLength = 0;
        for (let j = 0; j < resultArr[0].length; j++) {
            (resultArr[j][i].toString().length > maxColumnLength) ?
            maxColumnLength = resultArr[j][i].toString().length: maxColumnLength;
        }
        for (let j = 0; j < resultArr[0].length; j++) {
            let spaces = '';
            let k = resultArr[j][i].toString().length;
            for (; k <= maxColumnLength; k++) {
                spaces += ' ';
            }
            resultArr[j][i] += spaces + '| ';
        }
    }
    for (let i = 0; i < resultArr[0].length; i++) {
        resultOutput += resultArr[i].join('') + '\n';
        if (i === 0) {
            let k =resultOutput.length - resultArr[0][resultArr[0].length - 1].toString().length +  maxColumnLength;  // длинна всей первой строки + максимальна длинна последнего столбца
            for (let j = 0; j < k; j++) {
                resultOutput += '-';
            }
            resultOutput += '\n';
        }
    }

    return resultOutput;
}

module.exports = {
    main,
    getOutput,
    getResultArray
};
//main();