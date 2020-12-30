var se1 = document.querySelector('.session-1');
var se2 = document.querySelector('.session-2');
var answer = document.querySelectorAll('.answer');

se1.style.display = 'block';
answer[0].addEventListener('click', function(){
    se1.style.display = 'none';
    se2.style.display = 'block';
});
