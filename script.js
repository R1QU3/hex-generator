const palette = document.querySelector(".palette");
const box = document.querySelector(".sub-container");
const hex = document.querySelector(".hex");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const gerate = Math.random().toString(16).slice(2, 8).toUpperCase();
    hex.innerHTML = `#${gerate}`;
    box.style.background = `#${gerate}`;
    palette.style.color = `#${gerate}`;
    console.log(`The generate color is => #${gerate}`)
})
