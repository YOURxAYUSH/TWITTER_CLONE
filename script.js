menu.addEventListener("click", () =>{
    document.querySelector(".first").style.display="block";
    document.querySelector(".first").style.backgroundColor="black";
 })

 let home = document.querySelector(".home")


home.addEventListener("click", ()=>{
    document.querySelector(".first").style.display="none";
})

let explore = document.querySelector(".explore")

explore.addEventListener("click", ()=>{
    document.querySelector(".first").style.display="none";
    document.querySelector(".third").style.display="block";
    document.querySelector(".second").style.display="none";

})



back.addEventListener("click", ()=>{
    document.querySelector(".first").style.display="block";
    home.addEventListener("click",()=>{
       document.querySelector(".third").style.display="none";
       document.querySelector(".second").style.display="block";
    })

   

})