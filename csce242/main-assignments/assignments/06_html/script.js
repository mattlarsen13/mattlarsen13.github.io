// Button and Showing Function
function showExercise(exerciseNumber) {
    const colorSliderSection = document.getElementById('color-slider');
    const pictureChooserSection = document.getElementById('picture-chooser');

    if (exerciseNumber === 1) {
        colorSliderSection.classList.remove('hidden');
        pictureChooserSection.classList.add('hidden');
    } else if (exerciseNumber === 2) {
        pictureChooserSection.classList.remove('hidden');
        colorSliderSection.classList.add('hidden');
    }
}

// Update Color Function
function updateColor() {
    const slider = document.getElementById('slider');
    const sliderValue = slider.value;
    const message = document.getElementById('color-message');
    const colorSliderSection = document.getElementById('color-slider');
    const color = `rgb(${sliderValue}, 0, 0)`;
    colorSliderSection.style.backgroundColor = color;
    document.getElementById('slider-value').textContent = `Color: ${sliderValue}`;

    if (sliderValue < 85) {
        message.textContent = "This is a dark red.";
    } else if (sliderValue < 170) {
        message.textContent = "This is a medium red.";
    } else {
        message.textContent = "This is a light red.";
    }
}

//Choose Picture Function
function choosePicture(size) {
    let width, height;

    if (size === 'small') {
        width = 200;
        height = 200;
    } else if (size === 'medium') {
        width = 400;
        height = 400;
    } else if (size === 'large') {
        width = 600;
        height = 600;
    }

    const imageUrl = `https://picsum.photos/${width}/${height}`;
    document.getElementById('image-container').innerHTML = `<img src="${imageUrl}" alt="${size} picture">`;
}