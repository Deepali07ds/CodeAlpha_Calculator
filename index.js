// CALCULATOR PROGRAM

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById("display");

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    // Make these functions accessible globally
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});

// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }
