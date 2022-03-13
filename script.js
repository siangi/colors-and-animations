"use strict";

const button = document.querySelector("#darkmodeToggle");
const useDark = window.matchMedia("(prefer-color-scheme: dark)");
let isDark;

window.onload = () => {
    initialiseTheme();
    headerAnimation();
};

function toggleDarkMode() {
    isDark = !isDark;

    if (isDark) {
        button.textContent = "☾";
    } else {
        button.textContent = "☼";
    }

    document.documentElement.classList.toggle("dark-mode", isDark);
}

function initialiseTheme() {
    isDark = useDark.matches;
    toggleDarkMode(useDark.matches);

    useDark.addEventListener("change", (evt) => toggleDarkMode(evt.matches));
    button.addEventListener("click", () => {
        toggleDarkMode();
    });
}

function headerAnimation() {
    let graphic = document.querySelector(".header_graphics");
    let headerText = document.querySelector(".header_text");
    let props = {
        duration: 1000,
        iterations: 1,
        easing: "ease-out",
        fill: "forwards",
    };
    let keyframes = [{ transform: "scale(0.9)", opacity: 0 }, { transform: "scale(1.1)" }, { transform: "scale(1)", opacity: 1 }];
    let opacityKeyframes = [{ opacity: 0.3 }, { opacity: 1 }];
    graphic.animate(keyframes, props);
    headerText.animate(opacityKeyframes, props);
}
