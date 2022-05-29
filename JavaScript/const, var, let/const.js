//const 의 변수는 항상 대문자로!
//const ABC = 1; 등등
//const는 수정될 값을 재할당 불가능

let x = 3;
let y = x + 2;

console.log(x);   //3
console.log(y);   //5

x = 4;
console.log(x);   //4

y = x * y;
console.log(y);   //20

//예외 객체의 프로퍼티나 배열의 요소들에 const 의 형태에서 값이 할당되는 경우는 가불가능
const x1 = {name: 'Codeit'};
x1.birth = 2017;

console.log(x1);
//{name:'Codeit', birth:2017}

// 질문 2
// 다음 코드의 실행결과는?

let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;

team1.splice(2, 1, 'Trumpet');
team2.splice(2, 1, 'Piano');

console.log(team1);
console.log(team2);



