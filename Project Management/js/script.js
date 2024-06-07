function shopNow() {
    alert("Shop Now button clicked!");
}

function logIn() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if (user && password) {
        alert(`Logged in as ${user}`);
    } else {
        alert("Please enter both username and password.");
    }
}
