const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact")
const factPara2 = document.querySelector("#fact2")
const but = document.querySelector("#btn")
const but2 = document.querySelector("#btn2")

const getFacts = async ()=>{
    console.log("Getting data ......")
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    factPara.innerText = data[0].text + "\n"
}
but.addEventListener("click", getFacts)

// function getfa(){
//     fetch(URL).then((response)=>{
//         return response.json()
//     }).then((data) =>{
//         console.log(data)
//         factPara2.innerText = data[2].text
//     })
// }



// but2.addEventListener("click", getfa)
