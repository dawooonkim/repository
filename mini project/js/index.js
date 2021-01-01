var quiz = document.querySelectorAll("[class^='session']");
var answer = document.querySelectorAll('.answer');
var init = quiz[0];
var n = 0;
var next;
var now;


quiz[0].style.display = 'block';
for(var i = 0; i<answer.length; i++){
    answer[i].addEventListener('click', function(){
        n = n + 1;
        next = quiz[0+n];
        now = quiz[n-1];
        nextQuestion();
    })
}

function nextQuestion(){
    now.style.display = 'none';
    next.style.display = 'block';
}

// answer[0].addEventListener('click', function(){
//     se1.style.display = 'none';
//     se2.style.display = 'block';
// });
