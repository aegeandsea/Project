class User{
const (id, name, height, weight) {
this.userId = id;
this.userName = name;
this.userHeight = height;
this.userWeight = weight;
}

getuserName() {
    return this.userName;
}

getuserHeight() {
    return this.userHeight;
}

getuserWeight() {
    return this.userWeight;
}

setUserName(name) {
    this.userName = name;
}

setUserHeight(height) {
    this.userHeight = height;
}

setUserWeight(weight){
    this.userWeight = weight;
}
}

/*BMI Calculator */
let weight = 132;
let height = 69;
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

console.log(`BMI is ${bmi.toFixed(2)}: ${healthState}`);
