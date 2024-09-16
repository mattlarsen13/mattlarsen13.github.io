// Count
let count = 0;
document.getElementById("counter-column").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = count;
});

// Image
document.getElementById("random-image").addEventListener("click", function() {
    location.reload();
});

// Slider
document.getElementById("slider").addEventListener("input", function() {
    const sliderValue = this.value;
    const square = document.getElementById("square");
    const sliderColumn = document.getElementById("slider-column");
    const sliderColumnWidth = sliderColumn.offsetWidth;
    const squareWidth = square.offsetWidth;
    const maxLeftPosition = sliderColumnWidth - squareWidth;
    const newLeftPosition = (sliderValue / 100) * maxLeftPosition;
    square.style.left = newLeftPosition + "px";
    square.style.position = "absolute";
});
