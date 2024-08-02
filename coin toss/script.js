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
  
  function changeBgColor(event){
   hel.style.
    color = randomColor();
  }
}
 const color =  document.querySelector(".head");
 const hel = document.querySelector("#hel")
 color.addEventListener("mouseout",startChangingColor)







  const headText = document.querySelector(".head")
  const btn = document.querySelector("#btn")
  const loading = document.querySelector("#loading")

 function tossHandler(){


  headText.style.display = 'none'
  btn.style.display = 'none'
  loading.style.display = 'flex'


  setTimeout(()=>{
    headText.style.display = 'block'
    btn.style.display = "flex"
    loading.style.display = 'none'
    headText.style.marginLeft = "575px"
  
  
  },7000)


  const random = Math.round(Math.random()) ;    //=> o se ek tak value return karta hai
  if(random==0){
    headText.innerText = "Tails" 
  }
  else{
    headText.innerText = "Heads"

  }
 }

  
  