
// Select the password input field and the password toggle icon
const passwordInput = document.getElementById('password');
const passwordToggleIcon = document.getElementById('toggle-password');

// Toggle the password visibility and apply the 'toggled' class
passwordToggleIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleIcon.classList.add('toggled');
    } else {
        passwordInput.type = 'password';
        passwordToggleIcon.classList.remove('toggled');
    }
});
