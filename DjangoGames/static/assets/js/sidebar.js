window.onload = function (e) {

    if (sessionStorage.getItem('isCollapsedSidebar') === "true") {
        collapseNav();
    } else {
        openNav();
    }

    document.getElementById("nav-toggler").addEventListener('click', () => {
        if (sessionStorage.getItem('isCollapsedSidebar') === "true") {
            openNav();
        } else {
            collapseNav();
        }
    })
}

function collapseNav() {

    document.getElementById("sidenav-main").style.width = "59px";
    document.getElementById("sidenav-main").style.overflowX = "hidden";
    document.getElementById("main-container").style.marginLeft = "59px";

    document.getElementById("footer-img").src = url_logo_mini

    for (let element of document.getElementsByClassName("nav-link-text")) {
        element.style.display = "none";
    }
    for (let element of document.getElementsByClassName("sidenav-mini-icon")) {
        if (element.className.includes("icon-first-letter")) {
            element.style.display = "block";
        }
        element.parentElement.style.paddingLeft = "24px";
    }
    document.getElementById("nav-toggler-icon").className = "ni ni-bold-right"
    sessionStorage.setItem('isCollapsedSidebar', "true");
}

function openNav() {

    document.getElementById("sidenav-main").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";

    document.getElementById("footer-img").src = url_logo

    for (let element of document.getElementsByClassName("nav-link-text")) {
        element.style.display = "block";
    }
    for (let element of document.getElementsByClassName("sidenav-mini-icon")) {
        if (element.className.includes("icon-first-letter")) {
            element.style.display = "none";
        }
        element.parentElement.style.paddingLeft = "60px";
    }
    document.getElementById("nav-toggler-icon").className = "ni ni-bold-left"
    sessionStorage.setItem('isCollapsedSidebar', "false");
}
