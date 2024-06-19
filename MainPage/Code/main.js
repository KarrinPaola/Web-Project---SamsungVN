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

let infor_list = document.querySelector('#content .key-feature-tab .infor');
console.log(infor_list)
let items_infor = document.querySelectorAll('#content .key-feature-tab .infor .item');
console.log(items_infor)
let buttons_infor = document.querySelectorAll('#content .key-feature-tab .control>ul>li>button')
console.log(buttons_infor)

let active4 = 0; 
let lengthInfor = items_infor.length; 

function reloadSlider4() {
    let checkLeft = items_infor[active4].offsetLeft; 
    console.log(checkLeft);
    infor_list.style.left = -checkLeft + 'px';

    let lastActiveButton = document.querySelector('#content .key-feature-tab .control>ul>li>.active')
    if(lastActiveButton){
        lastActiveButton.classList.remove('active'); 
    }
    buttons_infor[active4].classList.add('active'); 
}
buttons_infor.forEach((button, key) => {
    button.addEventListener('click', function(){
        active4 = key; 
        reloadSlider4(); 
    })
})

let infor_list2 = document.querySelector('#content .key-feature-tab2 .infor');
console.log(infor_list2); // Ensure correct selection
let items_infor2 = document.querySelectorAll('#content .key-feature-tab2 .infor .item');
console.log(items_infor2); // Ensure correct selection
let buttons_infor2 = document.querySelectorAll('#content .key-feature-tab2 .control>ul>li>button');
console.log(buttons_infor2); // Ensure correct selection

let active5 = 0; 
let lengthInfor2 = items_infor2.length; 

function reloadSlider5() {
    let checkLeft = items_infor2[active5].offsetLeft; 
    console.log(checkLeft);
    infor_list2.style.left = -checkLeft + 'px';

    let white_black = document.querySelectorAll('.key-feature-tab2 .white-black');
    white_black.forEach(function(el) {
        el.style.color = (active5 == 3 || active5 == 4) ? 'black' : 'white';
    });

    items_infor2.forEach(function(item, index) {
        let container = item.querySelector('.infor-inside .cta .container');
        if (container) {
            if (active5 == 3 || active5 == 4) {
                container.style.backgroundColor = 'black';
                container.style.color = 'white';
            } else {
                container.style.backgroundColor = 'white';
                container.style.color = 'black';
            }
        }
    });

    let lastActiveButton = document.querySelector('#content .key-feature-tab2 .control>ul>li>.active');
    if (lastActiveButton) {
        lastActiveButton.classList.remove('active'); 
        // Remove border-bottom style when button is no longer active
        lastActiveButton.style.borderBottom = '';
    }
    
    buttons_infor2[active5].classList.add('active'); 
    // Add border-bottom style for the active button
    buttons_infor2[active5].style.borderBottom = (active5 == 3 || active5 == 4) ? '2px solid black' : '2px solid white';
}

buttons_infor2.forEach((button, key) => {
    button.addEventListener('click', function() {
        active5 = key; 
        reloadSlider5(); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let infor_list3 = document.querySelector('#content .key-feature-tab3 .infor');
    let items_infor3 = document.querySelectorAll('#content .key-feature-tab3 .infor .item');
    let buttons_infor3 = document.querySelectorAll('#content .key-feature-tab3 .control > ul > li > button');

    let active6 = 0; 
    let lengthInfor3 = items_infor3.length; 

    function reloadSlider6() {
        if (items_infor3[active6]) {
            let checkLeft = items_infor3[active6].offsetLeft; 
            console.log(checkLeft);
            infor_list3.style.left = -checkLeft + 'px';
        }

        let white_black = document.querySelectorAll('.key-feature-tab3 .white-black');
        white_black.forEach(function(el) {
            el.style.color = (active6 == 3) ? 'white' : 'black';
        });

        items_infor3.forEach(function(item, index) {
            let container = item.querySelector('.infor-inside .cta .container');
            if (container) {
                if (active6 == 3) {
                    container.style.backgroundColor = 'white';
                    container.style.color = 'black';
                } else {
                    container.style.backgroundColor = 'black';
                    container.style.color = 'white';
                }
            }
            let underline = item.querySelector('.infor-inside .cta .underline');
            if (underline) {
                if (active6 == 3) {
                    underline.style.borderBottom = '2px solid white'
                    underline.style.color = 'white';
                } else {
                    underline.style.borderBottom = '2px solid black'
                    underline.style.color = 'black';
                }
            }
        });

        let lastActiveButton = document.querySelector('#content .key-feature-tab3 .control > ul > li > .active');
        if (lastActiveButton) {
            lastActiveButton.classList.remove('active'); 
            lastActiveButton.style.borderBottom = '';
        }
        
        if (buttons_infor3[active6]) {
            buttons_infor3[active6].classList.add('active'); 
            buttons_infor3[active6].style.borderBottom = (active6 == 3) ? '2px solid white' : '2px solid black';
        }
    }

    buttons_infor3.forEach((button, key) => {
        button.addEventListener('click', function() {
            active6 = key; 
            reloadSlider6(); 
        });
    });

    // Initial call to set the correct state
    reloadSlider6();
});
