function add(num1, num2){
    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value
    var added= +a + +b;
    document.getElementById("equals1").textContent = added;
    
}
function subtract(num3, num4){
    var c = document.getElementById("num3").value
    var d = document.getElementById("num4").value
    var subtracted = +c - +d
    document.getElementById("equals2").textContent = subtracted
}
function multiply(num5, num6){
    var e = document.getElementById("num5").value
    var f = document.getElementById("num6").value
    var multiplied = +e * +f
    document.getElementById("equals3").textContent = multiplied
}