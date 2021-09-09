let slider = document.querySelector(".slider__img");
let prev = document.querySelector(".js-prev");
let next = document.querySelector(".js-next");
let progress = document.querySelector(".js-slider__progess");
let listSlideImg = ["slide-01.jpg", "slide-02.jpg"];
let currentSlideImg = 0;
let currentPercent = 0;
let progressInterval;

showSlide(currentSlideImg);
prev.onclick = function() {
    currentSlideImg--;
    showSlide(currentSlideImg);
}

next.onclick = function() {
    currentSlideImg++;
    showSlide(currentSlideImg);
}

function showSlide(index) {
    clearInterval(progressInterval);
    currentPercent = 0;
    if(currentSlideImg < 0) currentSlideImg = listSlideImg.length - 1;
    if(currentSlideImg >= listSlideImg.length) currentSlideImg = 0;
    slider.src = `./assets/img/slide/${listSlideImg[currentSlideImg]}`;
    progressInterval = setInterval(function() {
        progress.style.width = `${currentPercent}%`;
        currentPercent += 2.1; 
    }, 100);
}

setInterval(function() {
    currentSlideImg++;
    showSlide(currentSlideImg);
}, 5500);


// Click btn play video

let playBtn = document.querySelector('.js-video__play');
let modal = document.querySelector('.js-modal');
let modalContainer = document.querySelector('.js-modal-container');
let closeBtn = document.querySelector('.js-modal-close');


function openVideo() {
    modal.classList.add('modal-open');
}

function closeVideo() {
    modal.classList.remove('modal-open');
}

playBtn.addEventListener('click', openVideo);

modal.addEventListener('click', closeVideo);

closeBtn.addEventListener('click', closeVideo);

modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

//  Đóng mở menu mobile

let openMenuIcon = document.querySelector('.js-menu__mobile-open');
let closeMenuIcon = document.querySelector('.js-menu__mobile-close');
let menuMobile = document.querySelector('.header__menu');

function toogleMenu() {
    if(menuMobile.style.right == "0px")
    {
        menuMobile.style.right = "-300px";
    }
    else
    {
        menuMobile.style.right = "0px";
    }
}

openMenuIcon.addEventListener('click', toogleMenu);
closeMenuIcon.addEventListener('click', toogleMenu);