function logout() {
sessionStorage.removeItem('loggedInUser');
window.location.href = 'login.html'; 
}