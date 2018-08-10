document.addEventListener("mouseup", function() {
    var element = document.getElementsByClassName("annotator-adder");
    var topValue = element[0].style.top;
    console.log("Property 'top' value: " + topValue);
    console.log("Type: " + (typeof topValue));
    var numberify = parseFloat(topValue);
    var newTopValue = ((numberify - 100) + "px");
    console.log("Recalculated 'top' value: " + newTopValue);
    element[0].style.top = newTopValue;
});

// calculate the number to subtract based on the window height