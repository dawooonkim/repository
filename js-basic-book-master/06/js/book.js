function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var firstPersonalProj = new Book("Horror Taxidermia", "Dawoon Kim", "250", "37,000");
var secondPersonalProj = new Book("discovering under the earth", "Dawoon Kim", "459", "22,000");
var thirdPersonalProj = new Book("wiki", "Dawoon kim", "310", "8,000");

var bookList = [firstPersonalProj, secondPersonalProj, thirdPersonalProj];


document.write("<h1>책 가격을 확인하기</h1>");
for(var i=0; i<bookList.length; i++) {
    document.write("<p>" + bookList[i].price + "원</p>");
}
