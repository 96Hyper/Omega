gsap.from(".headings",{
   opacity : 0 ,
   x : -100,
   delay : 1 , 
   duration : 1, 
   stagger: 1
  
})


gsap.from(".watch-right",{
   x : 100,
   delay : 1 , 
   duration : 1, 
   opacity : 0 ,
   
  
})

var main = document.querySelector("body")
var crsr = document.querySelector(".circle")


main.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  

})