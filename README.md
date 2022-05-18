# Fitness Tracker Beta v.1
Originally, my vision for this project was to create a web page that lets users make a log of their exercises, calculate their BMI, keep track of their caloric intake
and macro nutrient intake.

This current version of the Fitness Tracker lets its users calculate their BMI by putting in their height and weight. The project is currently unfinished with a lot of
bugs and issues.

---

## Future Add-ons:
- Create a functional log where users can keep track of their exercises 
- Create a food log where users can keep track of their caloric intake and their macronutrients
- Integrate a feature where users can show off and compare their progress with other users
- Automatically calculate a user's BMI upon input in the registration process
- Personalized profile page where users can add photos of their progress

## Bugs or Issues:
- Form functionality: this version of the fitness tracker has issues with the login/registration process.
- SQL setup
- nav bar implementation using query selector
- Basically a lot...


##  ERD:
Compared to my original ERD model, this is a much simplified version of it. I initially underestimated the gravity of this project, hence the change.

<img src = "public/images/Blank diagram.jpeg">

## Techonologies Used:
### Frontend:
- html
- javascript
- css
### Backend:
- NodeJS
- ExpressJS
- MySQL


## How to Use:
1) Clone repository
2) **npm install** to download dependencies
3) use command **node index.js** to run and set up the environment variables for the database

## Overview of the Site:

### Homepage
starting point of the website; what the users sees upon entry

<img src ="public/images/home page.png">

### Registration
signup page that allows users to store their information within the system

<img src ="public/images/register page.png">

### Login
site for user identification in order to gain entry and have access to all the features within the website

<img src ="public/images/login page.png">

### BMI Calculator
<img src ="public/images/bmi page.png">
