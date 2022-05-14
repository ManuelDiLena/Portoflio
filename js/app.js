// Menu Responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    links = document.getElementById("links");

    // Click Open
    btnMenuOpen.addEventListener("click", function() {
        menuResponsive.classList.add("active");
    });

    // Click Close
    btnMenuClose.addEventListener("click", function() {
        menuResponsive.classList.remove("active");
    });

    // Close menu with link elements
    links.addEventListener("click", function() {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });

// Scroll Top Button
var btnTop = document.getElementById("btnTop"),
    logo = document.getElementById("logo");

    // We detected scroll on our page
    window.addEventListener("scroll", function() {
        var scroll = document.documentElement.scrollTop,
            fullsize = document.documentElement.offsetHeight,
            sizeVP = document.documentElement.clientHeight;

        if (scroll > 100) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }

        // Modify element when it reaches the bottom of the page
        if (fullsize == (scroll + sizeVP)) {
            btnTop.classList.add("finalscroll");
        } else {
            btnTop.classList.remove("finalscroll");
        }
    });

    // Button click event
    btnTop.addEventListener("click", function() {
        window.scrollTo(0,0);
    });

    // Logo click event
    logo.addEventListener("click", function() {
        window.scrollTo(0,0);
    });
