// You can add JavaScript for the sign-in page here.
// For example, to handle form submission and send data to a server.
// (This is a placeholder, you'll need server-side code to handle actual sign-in)
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic client-side validation (you should also have server-side validation)
            if (!username || !password) {
                alert('Please enter both username and password.');
                return;
            }

            // Simulate a successful sign-in (replace with actual server-side authentication)
            alert('Sign in successful!');
            window.location.href = 'index.html'; // Redirect to the main page
        });
    }
});