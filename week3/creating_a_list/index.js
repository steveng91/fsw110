for (var i = 0; i < 10; i ++) {
    var newH = document.createElement("h1");
    newH.textContent = "Hello World"
    newH.style.color = "red"
    document.body.appendChild(newH);
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
for(var i = 0; i < names.length; i++){
var nameList = document.createElement('li')
nameList.textContent = names[i]
document.body.appendChild(nameList)
}