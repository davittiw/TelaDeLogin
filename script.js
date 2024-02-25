function togglePasswordVisibility() {
    var eyeIcon = document.getElementById("eye-icon");
    var passwordInput = document.getElementById("password-input");

    if (passwordInput.type === "password"){
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}