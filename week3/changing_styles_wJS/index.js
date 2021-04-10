for (var i = 0; i < 5; i ++) {
    var newH = document.createElement("h2");
    newH.textContent = "Hello World"
    newH.style.color = "cornflowerblue"
    newH.style.fontFamily = "sans-serif"
    newH.style.fontWeight = "lighter"
    newH.style.fontSize = "20px"
    document.body.appendChild(newH);
    newH.classList.add("border")
}