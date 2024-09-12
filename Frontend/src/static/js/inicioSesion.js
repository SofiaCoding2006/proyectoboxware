
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') ==='text' ? 'password' : 'text';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    
});
