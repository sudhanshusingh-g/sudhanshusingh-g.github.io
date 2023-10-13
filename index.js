const toggleSwitch=document.querySelector(".lightMode");
const darkModeIcon=document.querySelector(".fa-sun");
const body=document.body;

const toggleMenu=document.getElementById("menuBar");

const menuDisplay=document.getElementById("menuDisplay");

const menuItem=document.querySelector(".menu-item");
toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark")
    darkModeIcon.classList.toggle("fa-moon");
    toggleSwitch.classList.toggle("darkMode");
})

toggleMenu.addEventListener("click",()=>{
    if(toggleMenu.classList.contains("fa-bars")){
        toggleMenu.classList.add("fa-close")
        toggleMenu.classList.remove("fa-bars");
        menuDisplay.style.left='0';
    }
    else{
        toggleMenu.classList.remove("fa-close");
        toggleMenu.classList.add("fa-bars");
        menuDisplay.style.left='-100%';
    }
    
})
menuItem.onclick=function(e){
    e.stopPropagation();
}



