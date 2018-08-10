document.addEventListener("mouseup", function() {

    const element = document.getElementsByClassName("annotator-adder");
    const topValue = element[0].style.top;

    console.log("Property 'top' value: " + topValue);
    console.log("Type: " + (typeof topValue));

    const floatVal = parseFloat(topValue);
    const newTopValue = ((floatVal - 100) + "px");

    console.log("Recalculated 'top' value: " + newTopValue);

    element[0].style.top = newTopValue;

});

// calculate the subtrahend based on browser window height
// use window.innerHeight
