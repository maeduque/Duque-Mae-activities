function register() {
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   const confirmPassword = document.getElementById("confirmPassword").value;
   const fullName = document.getElementById("fullName").value;

   const error = document.getElementById("error");

   if ((username == "mae") && (password == "12345") && (confirmPassword == "12345") && (fullName == "Mae")) {
      error.innerHTML = "Register successful";
      error.style.color = 'green';
      error.style.backgroundcolor = 'yellow'
      error.style.visibility = 'visible';
   }

   else {
      error.innerHTML = "Invalid username or password";
      error.style.color = 'red';
      error.style.visibility = 'visible';
   }
}