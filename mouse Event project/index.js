// eventListener = Listen for specific events interactive web pages
//                   event: click, mouseover, mouseout
//                   .addEventListener(event,callback);




// const myBox = document.querySelector("#myBox")
// const myButton = document.querySelector("#myButton")


// myButton.addEventListener("click",(event)=>{
//         event.target.style.backgroundColor = "tomato"
//         event.target.textContent = "ouch🤕"
// })



// myButton.addEventListener("mouseover",(event)=>{
//         event.target.style.backgroundColor = "yellow"
//         event.target.textContent = " Dont't do it🙄 "
// })


// myButton.addEventListener("mouseout",(event)=>{
//         event.target.style.backgroundColor = "lightgreen"
//         event.target.textContent = " click me🥳 "
// })








const myBox = document.querySelector("#myBox")
const myButton = document.querySelector("#myButton")


myButton.addEventListener("click",(event)=>{
        myBox.style.backgroundColor = "tomato"
        myBox.textContent = "ouch🤕"
})



myButton.addEventListener("mouseover",(event)=>{
        myBox.style.backgroundColor = "yellow"
        myBox.textContent = " Dont't do it🙄 "
})


myButton.addEventListener("mouseout",(event)=>{
        myBox.style.backgroundColor = "lightgreen"
        myBox.textContent = " click me🥳 "
})