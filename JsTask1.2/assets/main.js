var x = document.getElementsByClassName("secondimgs");

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", myFunction);
}

function myFunction(event) {
    var clickedElement = event.target;
    document.getElementById("firstimg").src = clickedElement.src;
}