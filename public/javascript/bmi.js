const form = document.getElementById("bmi-form");
form.addEventListener('submit', displayBMI);

function displayBMI(e){
    e.preventDefault();

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let bmi = getBMI(height, weight);

document.getElementById("calculation").innerHTML = `BMI: ${bmi.toFixed(2)}`;

document.getElementById("height").value = "";
document.getElementById("weight").value = "";
}

function getBMI(height, weight) {
    return ( 703 * weight ) / (height**2);
}