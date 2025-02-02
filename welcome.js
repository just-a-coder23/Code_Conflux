
        window.onload = function() {
        // Retrieve the logged-in user information from sessionStorage
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (loggedInUser) {
        // Display the user information on the page
        document.getElementById('welcome-message').innerHTML = `Welcome, ${loggedInUser.username}!, get ready to create a Portfolio which showcases your skills, projects and achievements.<br> Whether you are a developer, a proffesional coder, a designer, just to name a few, we provide all the tools to help you create a basic Portfolio that will help you stand out.`;
        } else {
        // Redirect to login if no user is logged in
        window.location.href = 'login.html';
    }
};
