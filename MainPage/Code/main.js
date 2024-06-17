let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let playPause = document.getElementById('play-pause');

let active = 0;
let lengthItems = items.length;
let isPlaying = true;

function nextSlide() {
    if (active + 1 >= lengthItems) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}

next.onclick = nextSlide;

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems - 1;
    } else {
        active -= 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(nextSlide, 5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
    }
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    if (isPlaying) {
        refreshSlider = setInterval(nextSlide, 5000);
    }
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    });
});

playPause.addEventListener('click', function() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        refreshSlider = setInterval(nextSlide, 5000);
        playPause.querySelector('.play').style.display = 'none';
        playPause.querySelector('.pause').style.display = 'inline';
    } else {
        clearInterval(refreshSlider);
        playPause.querySelector('.play').style.display = 'inline';
        playPause.querySelector('.pause').style.display = 'none';
    }
});
