const toggleSwitch=document.querySelector(".lightMode");
const darkModeIcon=document.querySelector(".fa-sun");
const body=document.body;
toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark")
    darkModeIcon.classList.toggle("fa-moon");
    toggleSwitch.classList.toggle("darkMode");
})




