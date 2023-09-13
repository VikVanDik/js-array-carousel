//2. Creare l'array con le immagini all'interno.

const img = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'
]


const imgWrapper = document.querySelector('.images')
const buttonDown = document.querySelector('.button-down')
const buttonUp = document.querySelector('.button-up')
const thumbWrapper = document.querySelector('.thumb-container')
imgWrapper.innerHTML = ``

// 4. Creare un contatore e collegarlo al ciclo così da poterlo utilizzare per aggiungere e togliere classi desiderate.
let imgCounter = 0


// 3. Collegare l'array ad un ciclo così da ottenere l'elemento che cicla.
for(let i = 0; i<img.length; i++){
  const image = img[i]
  console.log(image);
  imgWrapper.innerHTML += `<img src=${image} class="hide item">`
  thumbWrapper.innerHTML += ` <div class="thumb-img item-mini"><img src=${image} alt=""></div>`
  console.log(imgWrapper)
}


const hideImg = document.getElementsByClassName('item')
const activeImg = document.getElementsByClassName ('item-mini')
console.log(hideImg);

hideImg[imgCounter].classList.remove('hide')
activeImg[imgCounter].classList.add('active')


// 5. Creare i bottoni così da poter triggerare l'azione del counter.
buttonDown.addEventListener('click', function(){
  activeImg[imgCounter].classList.remove('active')
  hideImg[imgCounter].classList.add('hide')
  imgCounter++
  if (imgCounter === img.length) {
    imgCounter = 0
  }
  activeImg[imgCounter].classList.add('active')
  hideImg[imgCounter].classList.remove('hide')
  
})

buttonUp.addEventListener('click', function(){
  activeImg[imgCounter].classList.remove('active')
  hideImg[imgCounter].classList.add('hide')
  if (imgCounter === 0) {
    imgCounter = img.length
  }
  imgCounter--
  hideImg[imgCounter].classList.remove('hide')
  activeImg[imgCounter].classList.add('active')
})







