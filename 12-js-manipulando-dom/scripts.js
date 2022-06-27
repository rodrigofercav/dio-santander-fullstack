

function changeMode() {
    toggleDarkMode();
    changeTexts();
}

function toggleDarkMode() {
    body.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeTexts() {
    if (body.classList.contains(darkModeClass)) {
        h1.innerHTML = h1.innerHTML.replace("Light", "Dark");
        button.innerHTML = button.innerHTML.replace("Dark", "Light");
    } else {
        h1.innerHTML = h1.innerHTML.replace("Dark", "Light");
        button.innerHTML = button.innerHTML.replace("Light", "Dark");
    }
}

const darkModeClass = "dark-mode";
const button = document.getElementById("button");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const h1 = document.getElementById("text-mode");

button.addEventListener("click", changeMode);
