// Constructor, getting regular section as well as modal expanded section
class Bird {
    constructor(title, size, lifespan, food, habitat, fact, image) {
        this.title = title;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    getSection() {
        return `
            <div class="bird-card" onclick="showDetails('${this.title}')">
                <h2>${this.title}</h2>
                <img src="images/${this.image}" alt="${this.title}" class="bird-img" />
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <div class="modal-content-wrapper">
                <div class="bird-info">
                    <h2>${this.title}</h2>
                    <p><strong>Size:</strong> ${this.size}</p>
                    <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                    <p><strong>Food:</strong> ${this.food}</p>
                    <p><strong>Habitat:</strong> ${this.habitat}</p>
                    <p><strong>Interesting Fact:</strong> ${this.fact}</p>
                </div>
                <div class="bird-image">
                    <img src="images/${this.image}" alt="${this.title}" />
                </div>
            </div>
        `;
    }
}

// Constants for all 4 birds
const birds = [];
birds.push(new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar(sugar water)", "Trees", "Nicknamed 'Hummers'", "hummingbird.jpg"));
birds.push(new Bird("Blue Jay", "9-12 inches", "7 years", "Omnivorous", "Trees", "Can mimic calls of hawks.", "bluejay.jpg"));
birds.push(new Bird("Cardinal", "8-9 inches", "3 years", "Seeds", "Trees", "Males are bright red, females are subdued brown to camouflage.", "cardinal.jpg"));
birds.push(new Bird("Robin", "9-11 inches", "2 years", "Insects", "Trees", "First birds to return after winter.", "robin.jpg"));

const birdList = document.getElementById('bird-list');
birds.forEach(bird => {
    birdList.innerHTML += bird.getSection();
});

// Arrow function for showing bird details in the modal
const showDetails = (birdTitle) => {
    const selectedBird = birds.find(bird => bird.title === birdTitle);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = selectedBird.getExpandedSection();
    const modal = document.getElementById('birdModal');
    modal.style.display = 'block';
};

// Close the modal when the user clicks the 'x' button or outside the modal
const modal = document.getElementById('birdModal');
const span = document.getElementsByClassName('close')[0];
span.onclick = () => {
    modal.style.display = 'none';
};
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
