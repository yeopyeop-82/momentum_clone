const images = [
    "background1.avif",
    "background2.avif",
    "background3.avif",
];

const todayImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `img/${todayImage}`;

document.body.appendChild(background);