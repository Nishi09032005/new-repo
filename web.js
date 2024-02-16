
function loadingaAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
    
    })
    gsap.from("#page1 #image-container",{
        scale:0.9,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.3,
    
    })
}
loadingaAnimation()
document.addEventListener("mousemove",function(dets){
gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
})
})
// document.querySelector("#child1").addEventListener("mousenter",function(){
//     gsap.to("#cursor",{
//         transform:'translate(-50%,-50%)scale(0)'
//     })
// })
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
         transform:'translate(-50%,-50%)scale(1)'
        });
     });
     });


  