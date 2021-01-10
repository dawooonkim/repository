var btnCreateTwit = document.querySelector('#btn-create-twit');
var twitContent = document.querySelector('#twit-content');
var timeLine = document.querySelector('.timeline-content');

btnCreateTwit.addEventListener('click', function(){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(twitContent.value);
    newDiv.appendChild(newContent);
    newDiv.classList.add('single-twit');
    timeLine.appendChild(newDiv);
});
