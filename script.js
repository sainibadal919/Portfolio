var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    } 
    for(tabcontent of tablinks){
        tabcontent.classList.remove("active-tab")
    }
}
