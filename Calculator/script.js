let result = document.getElementById("result");

function appendCharacter(character) {
    result.value += character;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Invalid input";
    }
}

function clearResult() {
    result.value = "";
}

function deleteLastCharacter() {
    result.value = result.value.slice(0, -1);
}
