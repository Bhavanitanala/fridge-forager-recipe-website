document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    // Reset error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Email Validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Username Validation
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    // Password Validation
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        // In a real app, send the data to your server for account creation.
        console.log('Email:', email, 'Username:', username, 'Password:', password);
        alert('Account created successfully (in a real app, you would redirect).');
        // You would typically redirect to a logged-in page here:
        // window.location.href = "dashboard.html";
    }
});

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}