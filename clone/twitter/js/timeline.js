var btnCreateTwit = document.querySelector('.btn-create-twit');
var inputTwit = document.querySelector('#input-twit');
var timeLine = document.querySelector('.timeline-content');



btnCreateTwit.addEventListener('click', createTwit);

function createTwit() {
    if(inputTwit.value.length > 0){
        timeLine.style.display = "block";
        document.querySelector(".timeline-empty").style.display = "none";
        var newDiv = document.createElement("div");
        var userContent = document.createTextNode(inputTwit.value);
        var newContent = document.createElement("div")
        var newProfile = document.createElement("img");
        var newNickname = document.createElement("div");
        var userNickname = document.createTextNode("userName");
        var metaData = document.createElement("div");
        var btnDelete = document.createElement("div");
        var icTrash = document.createElement("i")

        var generateUnix = Date.now();
        var generateTime = new Date(generateUnix);
        var hour = generateTime.getHours();
        var min = generateTime.getMinutes();
        var sec = generateTime.getSeconds();

        var timeInner = document.createTextNode("· "+hour+"시 "+min+"분 "+sec+"초에 작성");
        var twitBody = document.createElement("div");
        var time = document.createElement("div");

        newProfile.setAttribute('src', 'img/profile.png');

        newDiv.classList.add('single-twit');
        twitBody.classList.add('flex-column', 'd-flex', 'w-100');
        newProfile.classList.add('user-profile');
        newNickname.classList.add('user-nickname');
        time.classList.add('time')
        metaData.classList.add('d-flex');
        icTrash.classList.add('far', 'fa-trash-alt');
        btnDelete.classList.add('btn-delete');

        btnDelete.appendChild(icTrash);
        time.appendChild(timeInner);
        newNickname.appendChild(userNickname);
        newContent.appendChild(userContent);
        metaData.appendChild(newNickname);
        metaData.appendChild(time);
        metaData.appendChild(btnDelete);
        twitBody.appendChild(metaData);
        twitBody.appendChild(newContent);

        newDiv.appendChild(newProfile);
        newDiv.appendChild(twitBody);
        timeLine.appendChild(newDiv);

        btnDelete.addEventListener("click",function(){
            this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
        })

        inputTwit.value = "";
    } else {
        alert('내용을 입력해주세요.')
    }
}
