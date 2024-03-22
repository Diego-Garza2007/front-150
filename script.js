const sharebtn = document.querySelector('#btn');
const closebtn = document.querySelector('#btn-close');
const newdiv = document.querySelector('#share');
const layoutbt = document.querySelector('.section__flex')
const imgShare = document.querySelector(".section__btn__img")

const originalImgSrc = imgShare.src;
const grayIMG = "./images/icon-share-w.svg";

sharebtn.addEventListener('click', () => {
    newdiv.classList.toggle('None')
    newdiv.classList.toggle('share')
    layoutbt.classList.toggle('None')
    sharebtn.classList.toggle("bg-gray")

    if (newdiv.classList.contains('share')) {
        imgShare.src = grayIMG;
    } else {
        // Cambia la imagen a otro recurso (por ejemplo, un ícono diferente)
        imgShare.src = originalImgSrc;
    }
}) 

//closebtn.addEventListener('click', () => {
    //newdiv.classList.remove('share')
    //newdiv.classList.add('None')
    
//})

  // Función para cambiar la imagen

          // Variable para controlar el estado de la imagen
