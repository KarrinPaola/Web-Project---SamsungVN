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

let showcase = document.querySelector('#content .sale-hot .showcase');
let cases = document.querySelectorAll('#content .sale-hot .showcase .case');
let buttons = document.querySelectorAll('#content .sale-hot>ul>li>button')

let active2 = 0; 
let lengthCase = cases.length; 

function reloadSlider2() {
    let checkLeft = cases[active2].offsetLeft; 
    console.log(checkLeft);
    showcase.style.left = -checkLeft + 'px';

    let lastActiveButton = document.querySelector('#content .sale-hot>ul>li>.active')
    if(lastActiveButton){
        lastActiveButton.classList.remove('active'); 
    }
    buttons[active2].classList.add('active'); 
}
buttons.forEach((button, key) => {
    button.addEventListener('click', function(){
        active2 = key; 
        reloadSlider2(); 
    })
})
document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            var buyNow = item.querySelector('.buy-now');
            buyNow.style.visibility = 'visible';
            buyNow.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function() {
            var buyNow = item.querySelector('.buy-now');
            buyNow.style.visibility = 'hidden';
            buyNow.style.opacity = '0';
        });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.show-limit-pr a');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const cta = card.querySelector('.card-cta');
            cta.style.opacity = '1';
            cta.style.visibility = 'visible';
        });

        card.addEventListener('mouseleave', () => {
            const cta = card.querySelector('.card-cta');
            cta.style.opacity = '0';
            cta.style.visibility = 'hidden';
        });
    });
});

let product = document.querySelectorAll('.show-limit-pr a')
let list_pr = document.querySelector('.list-limited-product')
let limit_pr = document.querySelector('.show-limit-pr');
let prev_limit = document.querySelector('.list-limited-product .next-prev .prev');
let next_limit = document.querySelector('.list-limited-product .next-prev .next');

let active3 = 4; 
let current = 0; 
let lengthLimit = product.length; //6
let size_item = product[0].offsetWidth; 
console.log(size_item)

next_limit.onclick = function (){
    console.log('hello')
    if(active3 + 1 > lengthLimit){
        next_limit.style.visibility = 'hidden';
        prev_limit.style.visibility = 'visible';
    }else{
        active3 += 1; 
        current -= size_item; 
        limit_pr.style.left = current + 'px'; 
    }
    console.log(limit_pr.style.left)
}

prev_limit.onclick = function(){
    if(active3 - 1 < 4){
        next_limit.style.visibility = 'visible';
        prev_limit.style.visibility = 'hidden';
    }else{
        active3 -= 1; 
        current += size_item; 
        limit_pr.style.left = current + 'px'; 
    }
} 
updateLimit(); 