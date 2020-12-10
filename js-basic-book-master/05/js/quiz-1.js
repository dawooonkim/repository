
var num1 = parseInt(prompt("첫번째 숫자는?"));
console.log(num1);
var num2 = parseInt(prompt("두번째 숫자는?"));
console.log(num2);
console.log(sumMulti(num1, num2));

function sumMulti (a, b) {
    if (a == b) {
        return a * b;
    } else {
        return a + b;
    }
}

/ = 쓸때랑 == 쓸때랑 결괏값이 달랐음...?
