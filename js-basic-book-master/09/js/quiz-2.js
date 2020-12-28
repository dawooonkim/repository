var btn = document.querySelector('#start');
var radius = document.querySelector('#radius');
var round = document.querySelector('#round');
var area = document.querySelector('#area');
btn.addEventListener('click', calc);
function calc(){
    round.value = "약 " + Math.floor(2 * radius.value * Math.PI);
    area.value = "약 " + Math.floor(radius.value * radius.value * Math.PI);
}
