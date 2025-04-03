document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const navCollapse = document.querySelector("#navbarCollapse");

    toggler.addEventListener("click", function () {
        navCollapse.classList.toggle("show");
    });

    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!toggler.contains(event.target) && !navCollapse.contains(event.target)) {
            navCollapse.classList.remove("show");
        }
    });
});
