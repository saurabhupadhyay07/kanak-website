function openMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


document.querySelectorAll(".mobile-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("mobileMenu")
            .classList.remove("active");

    });

});


document.getElementById("year").innerText =
    new Date().getFullYear();