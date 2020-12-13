var now = new Date();
// 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듦
var firstDay = new Date("2020-04-06");
// 처음 만난 날의 날짜 정보를 firstDay 객체로 만듦

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24)); // 밀리초를 날짜수로 변환한 다음 반올림
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst + days *(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}
