var btnCreateTwit = document.querySelector('#btn-create-twit');
var inputTwit = document.querySelector('#input-twit');
var timeLine = document.querySelector('.timeline-content');



btnCreateTwit.addEventListener('click', createTwit);

function createTwit() {
    if(inputTwit.value.length > 0){
        var newDiv = document.createElement("div");
        var userContent = document.createTextNode(inputTwit.value);
        var newContent = document.createElement("div")
        var newProfile = document.createElement("img");
        var newNickname = document.createElement("div");
        var userNickname = document.createTextNode("userName");


        var generateUnix = Date.now();
        var generateTime = (generateUnix * 1000);
        generateTime.getHours();

        var timeInner = document.createTextNode(generateTime);

        var twitBody = document.createElement("div");
        var time = document.createElement("div");


        newProfile.setAttribute('src', 'img/profile.png');

        newDiv.classList.add('single-twit');
        twitBody.classList.add('flex-column', 'd-flex');
        newProfile.classList.add('user-profile');
        newNickname.classList.add('user-nickname');

        time.appendChild(timeInner);
        newNickname.appendChild(userNickname);
        newContent.appendChild(userContent);
        twitBody.appendChild(newNickname);
        twitBody.appendChild(newContent);
        newDiv.appendChild(newProfile);
        newDiv.appendChild(twitBody);
        newDiv.appendChild(time);
        timeLine.appendChild(newDiv);

        inputTwit.value = "";
    } else {
        alert('내용을 입력해주세요.')
    }
}
