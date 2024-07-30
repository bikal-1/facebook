let form = document.querySelector('#form');
let body = document.querySelector('body');
let problem = document.querySelector(".error");
let submitBtn = document.querySelector('#logIn');
let email = document.querySelector("#email");
let pass = document.querySelector("#password");



document.addEventListener('DOMContentLoaded', (event) => {
  const passwordField = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');

  togglePassword.addEventListener('click', () => {
      // Toggle the type attribute
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);

      // Toggle the eye icon (optional, if you have different icons for show/hide)
      togglePassword.textContent = type === 'password' ? '👁' : '👁'; // Example icons
  });
})

document.addEventListener('DOMContentLoaded', (event) => {
form.addEventListener('submit', function(event){
  event.preventDefault();
})
});


submitBtn.addEventListener("click", ()=>{
  email = email.value;
  if (email.includes("@gamil.com")) {
    problem.style.display = "none";
    console.log('yep');
  } else {
    problem.style.display = "block";
    console.log("nop");
    
  }
  

})

