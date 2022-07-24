let imageIndex = 0;
let postion = 0;
const IMAGE_WIDTH = 700;
const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")
 
function prev(){
  if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex - 1;
  }
  if(imageIndex == 0){
    btnPrev.setAttribute('disabled', 'true')
  }
}

function next(){
  if(imageIndex < 3){
    btnPrev.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex + 1;
  }
  if(imageIndex == 3){
    btnNext.setAttribute('disabled', 'true')
  }
}
 
function init(){
  btnPrev.setAttribute('disabled', 'true')
  btnPrev.addEventListener("click", prev)
  btnNext.addEventListener("click", next)
}
 
init();