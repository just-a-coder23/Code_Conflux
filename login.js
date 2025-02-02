
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));   
        window.location.href = 'welcome.html'; // Redirect to a welcome or dashboard page
    } else {
        alert('Invalid email or password!');
    }
});
