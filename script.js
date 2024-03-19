// Function to handle login
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Remember Me logic
    let rememberMe = document.getElementById('remember-me').checked;
    if (rememberMe) {
        // Save username and password to local storage
        localStorage.setItem('rememberedUsername', username);
        localStorage.setItem('rememberedPassword', password);
    } else {
        // Clear saved username and password from local storage
        localStorage.removeItem('rememberedUsername');
        localStorage.removeItem('rememberedPassword');
    }

    // Email validation using regular expression
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        alert('Invalid email address!');
        return;
    }
    
    // Password validation   
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).*$/;
    if (!passwordPattern.test(password)) {
        alert('Password should not contain any special character other than @ and must contain an uppercase letter and a number!');
        return;
    }
    if (password === 'ZenTradesTest@123') {
        window.location.href = "dashboard.html";
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Function to initialize the form with remembered username and password
function initRememberedValues() {
    let rememberedUsername = localStorage.getItem('rememberedUsername');
    let rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedUsername && rememberedPassword) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('password').value = rememberedPassword;
        document.getElementById('remember-me').checked = true;
    }
}

// Call initRememberedValues on page load
window.onload = function() {
    initRememberedValues();
};
