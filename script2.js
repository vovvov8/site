const family = document.querySelector('.promotion-family');
const rodn = document.querySelector('.rodn');

document.querySelector('.animation-yes').onchange=function() {
    if (this.checked) {
        family.classList.add('promotion-family-bg');
        rodn.classList.add('rodn-animation');
    }
    else {
        if (family) family.classList.remove('promotion-family-bg');
        if (rodn) rodn.classList.remove('rodn-animation');
    }
}