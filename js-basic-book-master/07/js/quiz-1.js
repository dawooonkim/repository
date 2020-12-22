







		var numbers = [2, 4, 6, 8, 10];
		var count = 0;
		for (var i = 0; i < numbers.length; i++){
			count += numbers[i];
		}
		numbers.push(count);
		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}






		// 현재 numbers의 모든 요소를 더한 숫자를 numbers의 배열 마지막에 집어넣음.
		// 1. 현재 numbers의 모든 요소를 가져옴.
		// 2. numbers의 모든 요소를 더하고 그 결괏값을 특정 변수에 저장함.
		// 3. 그 변수를 numbers에 push함.
