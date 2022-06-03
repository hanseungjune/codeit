// css 선택자로 태그 선택하기
const myTag = document.querySelector('#myNumber');
console.log(myTag);

const myTag2 = document.getElementById('myNumber');
console.log(myTag2);

const myTag3 = document.querySelector('.color-btn');
console.log(myTag3);

const myTags1 = document.querySelectorAll('.color-btn');
console.log(myTags1);

const myTags2 = document.getElementsByClassName('color-btn');
console.log(myTags2);