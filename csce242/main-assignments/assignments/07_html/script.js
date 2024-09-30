document.querySelector("#drawButton").onclick = () => {
    const errorMessage = document.getElementById("error-message");
    const numStars = document.querySelector(".answer").value;

    // Creates starBox and clears out starBox of stars
    const starBox = document.getElementById("starBox");
    starBox.innerHTML = '';

    // Validates it is a number and greater than 0
    errorMessage.style.visibility = 'hidden';
    if (numStars < 1 || isNaN(numStars)) {
        errorMessage.style.visibility = 'visible';
        return;
    }

    for (let i = 0; i < numStars; i++) {
        // Create div of star
        const star = document.createElement('div');
        star.classList.add('star');

        // Find the width and height of the box to make sure it does not go out of box
        const boxWidth = starBox.clientWidth;
        const boxHeight = starBox.clientHeight;
        const randomX = Math.random() * (boxWidth - 20); 
        const randomY = Math.random() * (boxHeight - 20);

        // Puts star in random position, absolute to ensure it displays
        star.style.position = 'absolute';
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        // Adds a star to box
        starBox.appendChild(star);
    }
};