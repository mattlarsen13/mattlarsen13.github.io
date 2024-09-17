/* When the hamburger is clicked, toggle between showing and hiding the nav items */
//document.getElementById("toggle-nav").onclick = () => 
    //OR

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Dont go to link destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); // Dont go to links destination
    console.log("You clicked a link");
};

/* Change ball color */
document.getElementById("txt-color").onchange = (e) => {
   // document.getElementById("ball").style.setProperty("background-color", e.target.value);
   document.querySelector(":root").style.setProperty("--ball-color", e.target.value); //Using a root variable instead
}

/* Move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}


