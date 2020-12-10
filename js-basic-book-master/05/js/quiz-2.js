
var num1 = parseInt(prompt("첫번째 숫자"));
var num2 = parseInt(prompt("두번째 숫자"));
compare(num1, num2);

function compare(a, b) {
    if(a > b) {
        alert(a+"가"+b+"보다 큽니다.")
    } else {
        alert(b+"가"+a+"보다 큽니다.")
    }
}
