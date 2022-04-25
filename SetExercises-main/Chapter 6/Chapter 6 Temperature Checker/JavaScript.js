let fahrenheit = document.getElementById("fahrenheit")

let celsius = document.getElementById("celsius")

function fahToCel() {
    //Used very complicated formula to convert Fahrenheit
    let output = (parseFloat(fahrenheit.value) 
        -32) * 0.555556;

    //Fixed the answer so that whenever we type a new number it'll change
    celsius.value = parseFloat(output.toFixed(2));

}