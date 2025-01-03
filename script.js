// Toggle between login and signup forms
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

// Theme toggle button
const themeToggleButton = document.getElementById('theme-toggle-button');
themeToggleButton.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme', !isDarkMode);
    this.textContent = isDarkMode ? 'Light Theme' : 'Dark Theme';
});
