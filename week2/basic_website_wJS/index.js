var navBar = document.createElement('nav')
document.body.appendChild(navBar)

var navlist1 = document.createElement('a')
navlist1.textContent = 'home'
navBar.appendChild(navlist1)
var navlist2 = document.createElement('a')
navlist2.textContent = ' content'
navBar.appendChild(navlist2)
var navlist3 = document.createElement('a')
navlist3.textContent = ' help'
navBar.appendChild(navlist3)
//-------------------------------------------------
var newH = document.createElement('h1')
newH.textContent = "welcome to my website"
document.body.appendChild(newH)
//-------------------------------------------------
var newP = document.createElement('p')
newP.textContent = "I am doing all of this with Javascript"
document.body.appendChild(newP)
//-------------------------------------------------
var newList = document.createElement('ul')
document.body.appendChild(newList)

var listItem1 = document.createElement('li')
listItem1.textContent = '1' 
newList.appendChild(listItem1)

var listItem2 = document.createElement('li')
listItem2.textContent = '2'
newList.appendChild(listItem2)

var listItem3 = document.createElement('li')
listItem3.textContent = '3' 
newList.appendChild(listItem3)
//-------------------------------------------------
var newF = document.createElement('footer')
newF.textContent = "this is the footer"
document.body.appendChild(newF) 