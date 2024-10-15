document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault(); // dont go to action .. dont refresh page

    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demenaor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");
    console.log();
};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }

    return "";
};