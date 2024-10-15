document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault(); // dont go to action .. dont refresh page
    console.log("submitting");
}