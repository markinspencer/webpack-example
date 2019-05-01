import questica from "./static/Questica.png";

export default (id) => {
    const image = document.createElement("img");
    image.src = questica;

    const container = document.getElementById(id);
    container.appendChild(image);
}