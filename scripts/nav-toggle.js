document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarDropdown = document.getElementById('navbarDropdown');

    if (navbarToggle && navbarDropdown) {
        navbarToggle.addEventListener('click', function () {
            navbarDropdown.classList.toggle('active');
        });
    }
});