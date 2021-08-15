var items = document.querySelectorAll('.item');



// for (let i = 0; i < items.length; i++) {
//     const element = items[i];

//     if (i === 0) {
//         element.style.zIndex = items.length;
//     }
//     else{
//         element.style.zIndex = i - 1;
//     }
    
// }

var slideInIndex = 0;
var slideOutIndex = items.length-1;


setInterval(function slide() {

    items[slideInIndex].classList.toggle('show');
    items[slideOutIndex].classList.add('lower');
    if (slideInIndex == items.length - 1) {
        slideInIndex = 0;
    }else{
        slideInIndex++;
    }
    
}, 3000)


setTimeout(() => {
    setInterval(() => {
        items[slideOutIndex].classList.remove('show');
        items[slideOutIndex].classList.remove('lower');
        if (slideOutIndex == items.length-1) {
            slideOutIndex = 0;
        }else{
            slideOutIndex ++;
        }
    }, 3000);
}, 1000);