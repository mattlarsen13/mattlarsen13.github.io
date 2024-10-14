const getIceCream = async() => {
    try {
        const response = (await fetch("https://portiaportia.github.io/json/ice-creams.json"));
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch(error) {
        console.log("Failed to fetch ice cream data:", error);
    }
}

const showIceCream = async() => {
    const icecreams = await getIceCream();

    icecreams.forEach((icecream) => {
        const section = document.createElement("section");
        document.getElementById("icecreams-section").append(section);
        
        // Create name
        const type = document.createElement("h3");
        type.innerHTML = icecream.name;
        section.append(type);
    
        // Add Ice cream image
        const img = document.createElement("img");
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${icecream.image}`;
        section.append(img);

        // Add Hover Name
        const hoverBox = document.createElement("div");
        hoverBox.classList.add("hover-box", "hidden");
        hoverBox.innerHTML = icecream.name;
        section.append(hoverBox);

        // Show hover box on mouseover
        section.onmouseover = () => {
            hoverBox.classList.remove("hidden");  
        };
        section.onmouseout = () => {
            hoverBox.classList.add("hidden");  
        };

    });
}

showIceCream();