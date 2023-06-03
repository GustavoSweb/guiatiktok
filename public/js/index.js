const telacarregamento = document.querySelector(".telacarregamento")
telacarregamento.style.opacity="0%"
setTimeout(()=>{
    telacarregamento.style.display ="none"
}, 6000)
const tops = document.querySelectorAll(".topAni")
const arrow = document.querySelector("#arrow")
window.addEventListener("scroll", ()=>{
    
    const trigerbox = window.innerHeight / 5*4;
    const arrowposition= arrow.getBoundingClientRect().top
        
        if(arrowposition+100 < trigerbox){
            arrow.style.display = "none"
            
        }
    tops.forEach(a =>{
        const boxtop = a.getBoundingClientRect().top
        
        if(boxtop < trigerbox){
            a.classList.add('top')
            
        }else{
            a.classList.remove('top')
        }
    })
})