//search part in js
const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchClose = document.getElementById('search-close');

searchBtn.addEventListener('click',function() {
    search.style.display = 'block';
});

searchClose.addEventListener('click', () => {
    search.style.display = 'none';
});

// img cards slider

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.cards-artical');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');
let currentIndex = 0;

nextButton.innerHTML = '&#10095;'; // HTML for right arrow
prevButton.innerHTML = '&#10094;'; // HTML for left arrow
nextButton.classList.add('carousel-nav', 'next');
prevButton.classList.add('carousel-nav', 'prev');

document.querySelector('.container-cards').appendChild(nextButton);
document.querySelector('.container-cards').appendChild(prevButton);

const cardWidth = cards[0].offsetWidth + 15; // Card width + margin
const totalCards = cards.length;


nextButton.addEventListener('click', function () {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});

// review slide

const rcarousel = document.querySelector('.rcarousel');
const rcards = document.querySelectorAll('.rcards-artical');
const nButton = document.createElement('button');
const pButton = document.createElement('button');

nButton.innerHTML = '&#10095;'; // Right arrow symbol
pButton.innerHTML = '&#10094;'; // Left arrow symbol

nButton.classList.add('rcarousel-nav', 'next');
pButton.classList.add('rcarousel-nav', 'prev');

document.querySelector('.review-cards').appendChild(nButton);
document.querySelector('.review-cards').appendChild(pButton);

const cWidth = rcards[0].offsetWidth + 15; // Card width + margin
const tCards = rcards.length;
let cIndex = 0;

nButton.addEventListener('click', function () {
    if (cIndex < tCards - 1) {
        cIndex++;
        rcarousel.style.transform = `translateX(-${cWidth * cIndex}px)`;
    }
});

pButton.addEventListener('click', function () {
    if (cIndex > 0) {
        cIndex--;
        rcarousel.style.transform = `translateX(-${cWidth * cIndex}px)`;
    }
});

// read more part

const parentContainer = document.querySelector('.rcon');

parentContainer.addEventListener('click',event => {

    const current = event.target;

    const isReadBtn = current.className.includes('read-more-btn');
    
    if(!isReadBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less":"Read More";
})

