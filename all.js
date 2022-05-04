let next = document.getElementById('next');
let back = document.getElementById('back');

if(next) {
    next.onclick = function (){
        window.history.forward();
    }
}else {
    back.onclick = function () {
        window.history.back();
    }
}