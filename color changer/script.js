const randomColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i=0;i<=5;i++){
      color = color+hex[Math.floor(Math.random()*16)]
    }
    return color
  }
  let intervalId;
  const startChangingColor = function(){
   if(intervalId==null){
     intervalId = setInterval(changeBgColor,1000)
   }
  
  function changeBgColor(){
    document.body.style.
    backgroundColor = randomColor();
  }
  }
  const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
  }
  
  document.querySelector("#start").addEventListener("click",startChangingColor)
  
  document.querySelector("#stop").addEventListener("click",stopChangingColor)