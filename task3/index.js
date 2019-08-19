function moveArrow(inputDegree) {
    let arrowContainer = document.getElementsByClassName("arrow-container")[0];
    arrowContainer.style.transform = "rotate(" + inputDegree + "deg)";
}

function changeDegrees() {
    let degreeNumber = document.getElementById("degree-number");
    let inputDegree = document.getElementById("set-degree").value;
    if (inputDegree.toString().length < 1) {
        degreeNumber.innerHTML = 0;
    } else {
        degreeNumber.innerHTML = inputDegree;
    }
    moveArrow(getRealDegree(inputDegree));
}

//так как наш контрол находится в диапозоне от 90 до 270 градусов 
// а вводимые значения должны колебатся от 0 до 500, то
function getRealDegree(inputDegree) {
    if (inputDegree < 0) {
        return 90;
    }

    return inputDegree > 500 ? 270 : 90 + Math.ceil(inputDegree * (180 / 500));
}

/* //вначале отрисовать страницу, создать все элемнты только потом запускать скрипт 
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
}); */