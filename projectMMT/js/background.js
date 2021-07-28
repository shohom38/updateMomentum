
const bgImg = document.getElementById("wrapper");
bgImg.style.background = 'black';
setInterval(function() {
    const arrImg = ["0.jpeg", "1.jpeg", "2.jpeg"];
    const selectImg = arrImg[Math.floor(Math.random() * arrImg.length)];

    bgImg.classList.add('bgImg');

    bgImg.style.background = `url(../img/${selectImg}) no-repeat`;
    bgImg.style.backgroundSize = 'cover';
    bgImg.style.transition = 'all 2s ease-out';
    
}, 5000);

// console.log(bgImg);

// document.body.appendChild(bgImg);