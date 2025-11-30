const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the form from refreshing the page

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Hardcoded credentials check
  if (user === 'Zidan' && pass === '123456') {
    
    // START NEW CODE
    // Save a "logged in" flag to the browser session
    sessionStorage.setItem('isLoggedIn', 'true');
    // END NEW CODE

    // Redirect to your main home page
    window.location.href = 'index.html'; 
  } else {
    // Show error message
    errorMsg.style.display = 'block';
  }
});