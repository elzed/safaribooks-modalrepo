document.addEventListener("mouseup", function() {
    console.log("Mouse Upped!");
    var element = document.getElementsByClassName("annotator-adder");
    var topValue = element[0].style.top;
    console.log(topValue);
    var style = window.getComputedStyle(element);
    var foundTop = style.getPropertyValue("top");
    console.log(foundTop);
});