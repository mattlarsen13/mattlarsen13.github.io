/* Image Array */
const images = [
    { src: 'images/birthday.jpg', name: 'Birthday', description: 'I am happy on my birthday!' },
    { src: 'images/clown.jpg', name: 'Clown', description: 'This clown honestly is kinda creepy.' },
    { src: 'images/rain.jpg', name: 'Rain', description: 'Thank goodness we brought an umbrella today.' },
    { src: 'images/read.jpg', name: 'Read', description: 'Hopefully it is Game of Thrones, I am hooked.' },
    { src: 'images/shovel.jpg', name: 'Shovel', description: 'Tough on your back, but honestly a good workout.' },
    { src: 'images/work.jpg', name: 'Work', description: 'He is probably doing the same assignment as me!' }
]

/* Putting images in index */
function loadImages() {
    const gallery = document.getElementById('gallery');
    const definition = document.getElementById('definition');

    // Iterates array and performs function on every element
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.classList.add('gallery-image');

        // Add click event to display name and description
        imgElement.addEventListener('click', () => {
            definition.innerHTML = `<h3>${image.name}</h3><p>${image.description}</p>`;
        });

        // Adds image by source and name
        gallery.appendChild(imgElement);
    });
}

// Loads images
window.onload = loadImages;