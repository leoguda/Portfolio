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
