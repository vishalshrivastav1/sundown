const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemc = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "none"
})

