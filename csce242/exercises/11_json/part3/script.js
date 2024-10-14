const getCocktails = async() => {
    //async: do functions in the background
    console.log("getCocktails");
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
    try {
      //http request results in a http response
      const response = await fetch(url);
      return response.json();
    } catch(error) {
      console.log(error);
    }
  };
  
  //needs to be async to call an async function
  const showCocktails = async() => {
    console.log("showDrinks");
    const drinks = await getCocktails();
    const cocktails = drinks.drinks;
    console.log(cocktails);
  
    cocktails.forEach((cocktail) => {
      document.getElementById("cocktails").append(getCocktailSection(cocktail));
    });
  
  };
  
  const getCocktailSection = (cocktail) => {
    // create main section1
    const section1 = document.createElement("section1");
    section1.classList.add("cocktail");

    //image size of section1
    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;
    section1.append(img);
  
  
    // button 
    const drinkBtn = document.createElement("button");
    drinkBtn.id = '';
  
    return section1;
  }
  
  //show all of the cocktails when the page loads
  showCocktails();


