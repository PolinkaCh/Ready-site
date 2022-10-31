let photos = [{
  url: "images/slider-1.jpg" ,
  title: "Rostov-on-Don, Admiral"
}, {
  url: "images/slider-2.jpg",
  title: "Sochi Thieves"
}, {
  url: "images/slider-3.jpg" ,
  title: "Rostov-on-Don Patriotic"
}];

function initSlider() {  
let images = document.querySelector(".images");
let arrows = document.querySelector(".arrows");
let dots = document.querySelector(".slider__dots");
let titles = document.querySelector(".titles")

showImages();
showArrows();
showDots();
showTitles();

function showImages() {
  photos.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${photos[index].url});" data-index="${index}"></div>`;
    images.innerHTML += imageDiv;
  });
}

function showArrows() {  arrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let currentNum = +images.querySelector(".active").dataset.index;
      let nextNum;
      if (arrow.classList.contains("left")) {
        nextNum = currentNum === 0? photos.length - 1 : currentNum - 1;
      } else {
        nextNum = currentNum === photos.length - 1? 0 : currentNum + 1;
      }
      moveSlider(nextNum);
    });
  });
}

function showDots() {
  photos.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    dots.innerHTML += dot;
  });
  dots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function moveSlider(num) {   images.querySelector(".active").classList.remove("active");
images.querySelector(".n" + num).classList.add("active");
dots.querySelector(".active").classList.remove("active");
dots.querySelector(".n" + num).classList.add("active");
titles.querySelector(".active").classList.remove("active");
titles.querySelector(".n" + num).classList.add("active");
}

  setInterval(() => {
    let currentNum = +images.querySelector(".active").dataset.index;
    let nextNum = currentNum === photos.length - 1? 0 : currentNum + 1;
    moveSlider(nextNum);
  }, 5000);

function showTitles() {
  photos.forEach((image,index)=>{
    let title =`<button class="title-item button-fonts button n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${photos[index].title}</button>`
    titles.innerHTML += title;
  })
  titles.querySelectorAll (".title-item").forEach(title => {
    title.addEventListener("click", function (){
      moveSlider(this.dataset.index)
    })
  })
} 
}

document.addEventListener("DOMContentLoaded", initSlider);