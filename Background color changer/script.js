const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btns.forEach((btn)=>{
    btn.style.background = btn.id;
    btn.addEventListener("click",()=>{
        body.style.backgroundColor = btn.id;
    })
})