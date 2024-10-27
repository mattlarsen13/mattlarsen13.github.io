document.querySelector("#hamburger").onclick = () => {
    document.getElementById("nav-menu").classList.toggle("active");
};

const getPlayers = async () => {
    try {
        const response = await fetch("https://mattlarsen13.github.io/csce242/main-projects/projects/part5/players.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.log("Failed to fetch player data:", error);
    }
};

const showPlayers = async () => {
    const players = await getPlayers();

    if (players) {
        const playersSection = document.querySelector(".players");
        players.forEach((player) => {
            // Create a player card
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");

            // Create player title
            const playerTitle = document.createElement("h2");
            playerTitle.innerHTML = player.name;
            playerTitle.classList.add("active");
            playerCard.appendChild(playerTitle);

            // Add Player Image
            const img = document.createElement("img");
            img.src = player.image; // Use the image field from JSON
            img.alt = player.name; // Add alt text for accessibility
            playerCard.appendChild(img);

            // Add Player Description
            const description = document.createElement("p");
            description.innerHTML = player.description; // Use the description field from JSON
            playerCard.appendChild(description);

            // Add link to player's YouTube highlight
            const playerLink = document.createElement("a");
            playerLink.href = player["image-link"]; // Use the image-link field from JSON
            playerLink.target = "_blank"; // Open link in a new tab
            playerLink.innerHTML = "Watch highlights";
            playerCard.appendChild(playerLink);

            // Append the player card to the players section
            playersSection.appendChild(playerCard);
        });
    }
};

showPlayers();

const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("form").onsubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Sending..."

    const httpResult = await sendEmail(json);

    if(httpResult.status == 200) {
        result.innerHTML = "Email successfully sent!"
        result.style.color = "green"
    } else {
        result.innerHTML = "Email not sent..."
        result.style.color = "red"
    }
}
