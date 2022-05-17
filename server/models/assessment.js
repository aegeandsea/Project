const assessment = [
{
    assessmentId: 53545,
    userId: 04213,
    bmi: 21
},
{
    assessmentId: 00023,
    userId: 02134,
    bmi: 27
},
{
    assessmentId: 76321,
    userId: 52155,
    bmi: 14
}
]

let getallBMI = () => assessment.map(a => a.bmi);

function getallBMI2() {
    const onlyBMIs = assessment.map(a => a.bmi)
    return onlyBMIs;
}

let getHealthState = (userId) => {
    let bmi = getBMI (userId);
    return calculateHealth(bmi)
};

function calculateHealth(bmi){
    let healthState;
    if (bmi < 18.5) {
        healthState = "underweight";
    } else if (bmi <= 25) {
        healthState = "normal";
    } else if (bmi <= 30) {
        healthState = "overweight";
    } else {
        healthState = "obese";
    }
    return healthState;
}

module.exports = { getallBMI, calculateHealth};