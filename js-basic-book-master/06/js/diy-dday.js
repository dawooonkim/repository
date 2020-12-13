
var firstDay = new Date("2019-07-01");
var now = new Date();

var passedDay = Math.round((now.getTime() - firstDay.getTime())/(24*60*60*1000));
document.querySelector('#accent').innerText = passedDay+"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
calcDate(1000);

function calcDate(days){
    var future = firstDay.getTime() + (days*(24*60*60*1000));
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var day = someday.getDate();
    document.querySelector('#date' + days).innerText = year + "년 " + month + "월 " + day + "일";
}
