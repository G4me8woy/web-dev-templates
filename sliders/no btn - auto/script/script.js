var items = document.querySelectorAll('.item');
var delayTime = 3000;
var slideInIndex = 0;
var slideOutIndex = items.length-1;

setInterval(function slide() {

    items[slideOutIndex].style.zIndex = 0;
    items[slideInIndex].style.zIndex = 2;
    items[slideInIndex].classList.toggle('show');
    if (slideInIndex == items.length - 1) {
        slideInIndex = 0;
    }else{
        slideInIndex++;
    }  
}, delayTime)


setTimeout(() => {
    setInterval(() => {
        items[slideOutIndex].classList.remove('show'); 
        // items[slideOutIndex].classList.remove('lower');
        if (slideOutIndex == items.length-1) {
            slideOutIndex = 0;
        }else{
            slideOutIndex ++;
        }
    }, delayTime);
}, 2000); // this is the delay time for hiding items, it should always be lower than delayTime