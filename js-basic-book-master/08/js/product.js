		var isOpen = false;
		var bigPic = document.querySelector("#cup");
		var smallPics = document.querySelectorAll(".small");

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector('#view');
		view.addEventListener("click", function(){
			if(isOpen === false) {
				document.querySelector('#detail').style.display = "block";
				view.innerText = "닫기";
				isOpen = true;
			} else {
				document.querySelector('#detail').style.display = "none";
				view.innerText = "상세 설명 열기";
				isOpen = false;
			}
		})
