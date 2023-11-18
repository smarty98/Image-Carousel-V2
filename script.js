const leftBtn = document.querySelector('.ri-arrow-left-line');
const rightBtn = document.querySelector('.ri-arrow-right-line');
const image = document.getElementById('img');
let currentIdx = 0;

const Images = ['https://wallpapercave.com/uwp/uwp4102959.jpeg','https://wallpapercave.com/uwp/uwp4103005.jpeg','https://wallpapercave.com/wp/wp13107893.jpg','https://wallpapercave.com/wp/wp10826527.jpg','https://wallpapercave.com/uwp/uwp3551162.jpeg']

leftBtn.addEventListener('click',()=>{

  currentIdx = (currentIdx-1 + Images.length)%Images.length;
image.src = Images[currentIdx]
})

rightBtn.addEventListener('click',()=>{
currentIdx = (currentIdx +1)%Images.length;
image.src = Images[currentIdx]
})
