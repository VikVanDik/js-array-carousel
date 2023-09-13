//2. Creare l'array con le immagini all'interno.

const img = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'
]

// 3. Collegare l'array ad un ciclo così da ottenere l'elemento che cicla.

const imgWrapper = document.querySelector('.images')
imgWrapper.innerHTML = ``



for(let i = 0; i<img.length; i++){
  const image = img[i]
  console.log(image);
  imgWrapper.innerHTML = `<img src=${image} class="hide">`
}