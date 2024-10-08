const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.forEach((brewery) => {
        const section = document.createElement("section");
        section.classList.add(brewery);
        document.getElementsById("breweries-section").append(section);

        //create heading
        const a = document.createElement("a");
        a.href = brewery.website.url;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        //brewery type
        const p = document.createElement("p");
        p.innerHTML = brewery.brewery_type + " brewery";
        section.append(p);
    });
}

showBreweries();
