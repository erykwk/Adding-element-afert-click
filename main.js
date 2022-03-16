const btn = document.querySelector("button")
let number = 1;

const addElement = function () {
    
    const newDiv = document.createElement("div")
    newDiv.textContent = number;
     if (number%5==0) {
        newDiv.classList.add("circle")
    }
    document.body.appendChild(newDiv)
    number += 1
   
    // console.log(newDiv)

}



btn.addEventListener("click",addElement)