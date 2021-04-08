var newH = document.createElement('h1')
newH.textContent = "Welcome to my JS site."
document.body.appendChild(newH)

var newP = document.createElement('p')
newP.textContent = "All of this was created in Javascript."
document.body.appendChild(newP)

var newList = document.createElement('ol')
document.body.appendChild(newList)
newList.id = "myList"

var listItem1 = document.createElement('li')
listItem1.textContent = '1'
var my_list = document.getElementById('myList')
myList.appendChild(listItem1)

var listItem2 = document.createElement('li')
listItem2.textContent = '2'
var my_list = document.getElementById('myList')
myList.appendChild(listItem2)

var listItem3 = document.createElement('li')
listItem3.textContent = '3'
var my_list = document.getElementById('myList')
myList.appendChild(listItem3)
