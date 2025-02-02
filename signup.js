
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Store the user in local storage (if not already registered)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User already exists!');
    } else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
        window.location.href = 'login.html'; // Redirect to login page after successful sign-up
    }
});
