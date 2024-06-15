// let byn = document.querySelector("#byn")

// // byn.onclick = (e) =>{
// //     console.log("Handler")
// //     let a = 25;
// //     a++;
// //     console.log(a)
// // }

// byn.addEventListener("click", ()=>{
//     console.log("Button was clicked")
// })


// byn.addEventListener("click", (e)=>{
//     console.log("Button was clicked - Handler 2")
//     console.log(e.type)
// })

// let dic = document.querySelector("div")


let b  = document.querySelector("#aech")
let currMode = "light";
let body = document.querySelector("body")
b.addEventListener("click",()=>{
    console.log("You are trying to change thee mode")
    if(currMode==="light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("white")
    }
    else{
        currMode = "light"
        body.classList.add("white")
        body.classList.remove("dark")
    }
    console.log(currMode)
})


