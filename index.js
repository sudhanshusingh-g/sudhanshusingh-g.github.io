const body=document.querySelector('body');
const themeBtn=document.getElementById('theme')
themeBtn.addEventListener("click",()=>{
    body.classList.toggle('dark')
    themeBtn.classList.toggle('fa-moon')
})

let currTime=new Date()
console.log(currTime.getHours());

if(currTime.getHours()>=18 && currTime.getHours()<=23 || currTime.getHours()>=0 && currTime.getHours<=6){
    body.classList.add('dark')
}