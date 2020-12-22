var bigPic = document.querySelector('#cup');
var smallPics = document.querySelectorAll('.small');

console.log(smallPics);
for (var i = 0; i<smallPics.length; i++) {
    smallPics[i].onclick = showBig;
}

function showBig(){
    var newPic = this.src;
    bigPic.setAttribute('src', newPic);
}
