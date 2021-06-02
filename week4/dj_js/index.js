var el = document.getElementById('box')

window.addEventListener('load', function(){
    el.style.backgroundColor='black'
})

el.addEventListener('mouseover', function(){
    el.style.backgroundColor='green'
})

el.addEventListener('mousedown', function(){
    el.style.backgroundColor='yellow'
})

el.addEventListener('mouseup', function(){
    el.style.backgroundColor='blue'
})

el.addEventListener('dblclick', function(){
    el.style.backgroundColor='red'
})
window.addEventListener("scroll",function(){
    el.style.backgroundColor='purple'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==87)
    el.style.backgroundColor='white'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==66)
    el.style.backgroundColor='black'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==71)
    el.style.backgroundColor='green'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==89)
    el.style.backgroundColor='yellow'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==66)
    el.style.backgroundColor='blue'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==82)
    el.style.backgroundColor='red'
})
addEventListener("keydown",function(event){
    if(event.keyCode ==80)
    el.style.backgroundColor='purple'
})