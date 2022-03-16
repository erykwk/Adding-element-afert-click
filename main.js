const btn = document.querySelector("button")
const addElement = function () {
    const newDiv = document.createElement("div")
    document.body.appendChild(newDiv)
    // console.log(newDiv)

}



btn.addEventListener("click",addElement)