const toggle=document.getElementById('switch');
const toggleMode=document.querySelector('.lightMode');

// toggle.onclick=function(){
//     toggle.classList.toggle('dark');
//     toggle.style.justifyContent='flex-end';
// }

toggle.onclick=function(){
    toggle.classList.toggle('toggle')
    toggleMode.classList.toggle('darkMode');
};