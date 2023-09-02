const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultElement = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");
const multiplicationBtn = document.getElementById("multiplication");
const divisionBtn = document.getElementById("division");
let action = "+";

plusBtn.onclick = function () {
    action = "+";
};

minusBtn.onclick = function () {
    action = "-";
};

multiplicationBtn.onclick = function () {
    action = "*";
};

divisionBtn.onclick = function () {
    action = "/";
};

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "green";
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(num1, num2, actionSymbol) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (actionSymbol == "+") {
        return num1 + num2;
    } else if (actionSymbol == "-") {
        return num1 - num2;
    } else if (actionSymbol == "*") {
        return num1 * num2;
    } else if (actionSymbol == "/") {
        if (num2 === 0) {
            alert("Нельзя делить на ноль!");
            return NaN;
        }
        return num1 / num2;
    }
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1.value, input2.value, action);
    printResult(result);
};
