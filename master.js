const btn=document.querySelector('.btn');
const icon=document.getElementById('icon');

function setTheme(){
    const body=document.querySelector("body");

    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        icon.classList.remove('fa-toggle-off');
        icon.classList.add('fa-toggle-on');
    }
    else{
        if(body.classList.contains('dark')){
            body.classList.remove('dark');
            body.classList.add('light');
            icon.classList.remove('fa-toggle-on');
            icon.classList.add('fa-toggle-off');
    }
}
}

/* Navbar */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}