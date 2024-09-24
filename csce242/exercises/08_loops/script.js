document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("btn-loop").onclick = () => {
    const ul = document.getElementById("numbers");

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = i+1;
        ul.append(li);

        li.onclick = () => {
            console.log('i');
        };
    }
}