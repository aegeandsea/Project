function user (id, name, height, weight, age, gender, bmi) {
this.userId = id;
this.userName = name;
this.userHeight = height;
}
 
//get methods

/*BMI Calculator */
let weight = 175;
let height = 65;
let bmi = ( 703 * weight ) / (height**2);
let healthState;

if (bmi < 18.5){
    healthState = "underweight";
}   else if (bmi <=25)  {
    healthState = "normal";
}   else if (bmi <=30)  {
    healthState = "overweight";
}   else    {
    healthState = "obese";
}

console.log('BMI is ${bmi.toFixed(2)}: ${healthState}');
