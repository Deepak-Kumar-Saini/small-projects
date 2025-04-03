const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const randomBtn = document.querySelector(".random-btn");

btns.forEach((btn)=>{
    btn.style.background = btn.id;
    btn.addEventListener("click",()=>{
        body.style.backgroundColor = btn.id;
    })
})

randomBtn.addEventListener("click",()=>{
        body.style.backgroundColor = btns[Math.floor(Math.random()*6)].id;
})
