function sum(){

    // 인수가 숫자인지 확인하는 함수
    function real(a){
        if (a > 0){
            var trueNum = a;
            return trueNum;
        } else {
            return false;
        }
    }

    // 인수끼리 더하는 함수
    function addNumber(a, b){
        return a + b;
    }

    var q1 = "첫번째 숫자를 입력해주세요.";
    var q2 = "두번째 숫자를 입력해주세요.";
    var a1 = "숫자를 입력해주세요."

    // trueNum을 반환하여 num1을 받아옴
    var num1 = real(parseInt(prompt(q1)));
    while (num1 === false) {
        alert(a1);
        var num1 = real(parseInt(prompt(q1)));
        continue;
    }

    // trueNum을 반환하여 num2을 받아옴
    var num2 = real(parseInt(prompt(q2)));
    while (num2 === false) {
        alert(a1);
        var num2 = real(parseInt(prompt(q2)));
        continue;
    }

    // num1과 num2를 더하여 보여줌
    var result = addNumber(num1, num2);
    alert("두 수의 합은 " + result + "입니다.");
}
