var elem1 = document.querySelectorAll(".elem")
elem1.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.style.backgroundColor = "red"
    });
    val.addEventListener("mouseleave",function(){
        val.style.backgroundColor = "transparent"
    });
    

});




