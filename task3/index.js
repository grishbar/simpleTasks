function moveArrow(inputDegree) {
    let arrowContainer = document.getElementsByClassName("arrow-container")[0];
    arrowContainer.style.transform = "rotate(" + inputDegree + "deg)";
    //secElt.style.webkitTransform = "rotate(" + turnSec + "deg)";
}
function changeDegrees() {
    let degreeNumber = document.getElementById("degree-number");
    let inputDegree = document.getElementById("set-degree").value;
    degreeNumber.innerHTML = inputDegree;
    moveArrow(getRealDegree(inputDegree));
}

//так как наш контрол находится в диапозоне от 90 до 270 градусов 
// а вводимые значения должны колебатся от 0 до 500, то
function getRealDegree(inputDegree) {
    Math.ceil(inputDegree * (500/180))
    if (inputDegree < 0) {
        return 90;
    } 

    return inputDegree > 500 ? 270 : 90 + Math.ceil(inputDegree * (180/500));
}

function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    moveArrow();
});
