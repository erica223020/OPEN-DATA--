let next = document.querySelector('.next');
let back = document.querySelector('.back');

next.addEventListener('click',goNext,false);
back.addEventListener('click',goBack,false);

function goNext(){
    window.history.forward();
}

function goBack(){
    window.history.back();
}