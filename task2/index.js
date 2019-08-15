// можно решить в одну строчку вернув (number.toLocaleString('en-US'));
// происходит проблема с памятью бигинт не до конца спасает, если вводить число в инпут и запускать то работает исправно 
// и если передавать число с 'n' на конце, то всё пройдёт нормально, возможно нужно написать какой-то хитрый конструктор с 
// умным геттером
function main() {
    const input = require("fs").readFileSync("input.txt", "utf8");
    fs = require("fs").writeFileSync("output.txt", addСommasToNumber(BigInt(input)), "utf8")
    console.log(typeof(input));
}

function addСommasToNumber(number) {
    let numberString = number.toString();
    let numberLength = numberString.length;
    if (numberLength % 3 !== 0 && numberLength > 3) {

        return numberString.substr(0, numberLength % 3) + ',' + 
        addComaEveryThreeDigits(numberLength - numberLength % 3, numberString.slice(numberLength % 3 , numberLength));
    }

    return addComaEveryThreeDigits(numberLength, numberString);
}

function addComaEveryThreeDigits(numberLength, numberString) {
    let result = [];
    for (let i = 0; i < numberLength; i += 3) {
        result.push(numberString.substr(i, 3));
    }

    return result.join(',');
}

module.exports = {
    addСommasToNumber,
    addComaEveryThreeDigits
}

main();
//addСommasToNumber(BigInt(3474902022344556634));