const background = document.querySelector('.promotion-background');
const clock = document.querySelector('.clock');

document.querySelector('.animation-on').onchange=function() {
    if (this.checked) {
        background.classList.add('promotion-background-bg');
        clock.classList.add('clock-animation');
    }
    else {
        if (background) background.classList.remove('promotion-background-bg');
        if (clock) clock.classList.remove('clock-animation');
    }
}

const square = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    square.style.top = 100 + scrollY + 'px'; 
});