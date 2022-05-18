const nav = document.querySelector('nav');
if(getCurrentUser()) {
  /**nav bar for when user is logged in */
  nav.innerHTML = `
  <ul>
  <li> <a href="homepage.html">Home</a></li>
  <li class ="dropdown">
      <a href="#Track">Track</a>
      <div class = "dropdownbar">
      <a href="#Goals">Goals</a>
      <a href="Exercise.html">Exercise</a>
      <a href="#Food Macros">Food Macros</a>
   </div>
   </li>
   <li class="dropdown">
      <a href="profile.html">My Profile</a>
       <div class = "dropdownbar">
      <a href = "bmi.html">Calculate BMI</a>
     <a id ="logout">Logout</a>
       </div>
   </li>
</ul>
  `;
} /*nav bar for when user is not logged in*/ else {
  nav.innerHTML = `
  <ul>
  <li> <a href="homepage.html">Home</a></li>
      <a href = "bmi.html">Calculate BMI</a>
   </li>
   <div class = "entry">
   <a href="register.html">Register</a>
   <a> | </a>  
   <a href="login.html">Login</a>
   </div>
</ul>
`
}
  
//fetch method:
export async function fetchData(url = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${url}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}