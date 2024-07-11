const navbar = document.querySelector("nav");
let currentScrollPos = window.scrollY;
document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let newScrollPos = window.scrollY;
    if(currentScrollPos < newScrollPos) {
        navbar.classList.add("show-nav");
    }
    else {
        navbar.classList.remove("show-nav");
    }
    currentScrollPos = newScrollPos;
})