
var quotes = ["우리는 어린 시절에 세계를 한번 쳐다본다,<br> 나머지는 기억이다.", "일렁이는 물빛은 라틴 음악을 닮았고<br>다른 행성에서 본다면 우리는<br>지독히도 춤을 못 추는 것처럼 보일지도 몰라요.", "당신이 당신임을 증명할 것이다. <br> 쏟아지는 어둠 속에서 <br> 우리는 우리의 아이가 아니라 우리 자신을 낳을 것이고 <br> 우리가 낳은 우리들은 <br> 정말로 살아갈 것이다.", "거리의 상상력은 고통이었고<br>나는 그 고통을 사랑하였다.", "발을 디디고<br> 죽음도 다가서지 못하는 온도로<br> 또 다른 하늘을 너는 돌고 있어.<br> 네 속을 열면", "날지 못한 듯이 보이는 것은 착각이다.<br> 다른 새들이 공간을 난다면, <br>이 금으로 만든 봉황은 번쩍이는 날개를 펴고<br> 영원한 시간 속을 나는 것이다. <br>시간이 그 날개에 부딪힌다. <br>날개에 부딪혀서 뒤쪽으로 흘러간다. <br>날아가기 위해 봉황은 단지 부동의 자세로 눈을 부라린 채 <br>날개를 높이 들고 꽁지깃을 휘날리며<br> 당당한 금빛의 양다리를 힘차게 버티면 됐다."]

var random = Math.floor(Math.random() * quotes.length);
document.querySelector('body').innerHTML = "<p>" + quotes[random] + "</p>"
