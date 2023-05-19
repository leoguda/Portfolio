// Start - responsive nav
const navUl = document.querySelector(".nav-responsive-ul");
const open = document.querySelector(".burger-menu-open");
const close = document.querySelector(".burger-menu-close");

function openBurgerMenu(){
    navUl.style.transform = 'translateY(0px)';
    event.currentTarget.style.display="none";
}
function closeBurgerMenu(){
    navUl.style.transform = 'translateY(-250px)'
    open.style.display="block";
}
// End - responsive nav


// Start - main skills section tab while responsive
const contents = document.getElementsByClassName("skills-content");
const links = document.getElementsByClassName("skills-link");

function showContent(tabName){
    for(content of contents){
        content.classList.remove("active-tab")
    }
    document.getElementById(tabName).classList.add("active-tab")
    
    for(link of links){
        link.classList.remove("active-link")
    }
    event.currentTarget.classList.add("active-link");
}
// End - main skills section tab while responsive


// Start - footer svg hover
function hover(){    
    event.currentTarget.classList.add("footer-svg");
}
function noHover(){
    event.currentTarget.classList.remove("footer-svg");
}
// End - footer svg hover
