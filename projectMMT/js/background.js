const arrImg = ["0.jpeg", "1.jpeg", "2.jpeg"];
const selectImg = arrImg[Math.floor(Math.random() * arrImg.length)];

const bgImg = document.createElement("img");

bgImg.src = `../img/${selectImg}`;

console.log(bgImg);

document.body.appendChild(bgImg);