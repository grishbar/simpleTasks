// можно решить в одну строчку вернув (number.toLocaleString('en-US'));
function main() {
    const input = require("fs").readFileSync("input.txt", "utf8");
    fs = require("fs").writeFileSync("output.txt", addСommasToNumber(BigInt(input)), "utf8")
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