

const myButton = document.getElementsById("btn-hello");
//myButton.onclick = doStuff; 

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "hello everyone!";
    document.getElementById("stuff").classList.add("special");
};

document.getElementById("btn-goodbye").onclick = () => {
    document.getElementById("message").innerHTML = "goodbye everyone!";
    document.getElementById("stuff").classList.remove("special");
}

// Showing data from an inout field
/*document.getElementById("txt-first-name").onkeyup = () => {
    // console.log("hello portia"); // helps to debug issues
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}


