// 거듭제곱
console.log(2 ** 3);

//따옴표, 큰따옴표 나타내는 방법은 '역슬래쉬', '백틱'★★★
console.log('I\'m Iron man');
console.log(`I'm Iron man`);

//!!true , !!false
console.log(!!true);
console.log(!!false);

//typeof 연산자1
let name = 'Codeit';

function sayHello() {
  console.log('Hello');
}

console.log(typeof name);       //string
console.log(typeof sayHello);   //function

//typeof 연산자2 ( 연산의 우선순위가 사칙연산보다 높음 )
console.log(typeof 'Hello' + 'Codeit'); //String + Codeit => StringCodeit
console.log(typeof 8 - 3);              //number - 3 => NaN(not a number)

console.log(typeof ('Hello' + 'Codeit')); //String
console.log(typeof (8 - 3));              //number

//연산자 우선순위 예시
console.log(typeof (6 * 2 === 11 || 13 - 7 < 7 && !true));
// 1) 괄호
// 2) NOT연산자
// 3) 사칙연산
// 4) 비교연산
// 5) AND연산자
// 6) OR연산자
// 7) typeof 연산자 ( 괄호 때문에 나중에 - 원래는 우선순위 높음 )

// 형변환 => String(), number(), boolean()
let x = '문자';
let x2 = '123';
let y = true;
let y2 = false;

console.log(Number(x));       //NaN
console.log(Number(x2));      //123
console.log(Number(y));       //1
console.log(Number(y2));      //0

// 0, false, '', NaN 을 false로 간주한다.

console.log(Boolean('문자'));
console.log(Boolean('123'));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));

// 비교가 불가능한 경우에는 'false' 가 나온다.

console.log('two' >= 1);

// '=='는 자동으로 형변환이 될 수 있다.
console.log(1 === '1');       //false
console.log(1 === true);      //false
console.log(1 == '1');        //true
console.log(1 == true);       //true

// 템플릿 문자열 ( 함수 )
let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

//null과 undefined의 차이
//null은 의도적인 없음!
//undefined 처음부터 없음!

// 처음에 선언만 해줄때는 undefined가 나오고,
// 값을 넣었다가 비워주면 null이 나온다.

console.log(null == undefined)  //true
console.log(null === undefined) //false

// return 문 이후에는 나머지는 데드코드임
function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후');   //데드코드
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

//옵셔널 파라미터 ( 미리 값을 줌 )
function introduce(name, age, nationality='한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국');
console.log('');
introduce('코드잇', 4);

// Scope: 범위, 영역
let z = 3; // 전역변수

function myFunction() {   //블록문
  let x = 5;              //로컬 변수, 지역 변수
  console.log(x);
}

// 함수가 블록 내부에서 지역변수를 못찾으면 전역변수에서 찾음!
myFunction();
console.log(z);

//상수 (constant)
const PI = 3.14;  //원주율
let radius = 0;   //반지름

//원의 넓이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius;
}

// 반지름에 다른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());

//if문
let temperature = 151;

if (temperature <= 0 ) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
  console.log('물이 끓습니다.');
} else {
  console.log('물이 모두 수증기가 되었습니다.');
}

// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
	// 여기에 코드를 작성해 주세요.
	const LIMIT = 140
	let passMessage = '탑승이 가능합니다.';
	let failMessage = '탑승이 불가능합니다.';
	
  if ( height >= LIMIT ) {
    console.log(passMessage);
  } else {
    console.log(failMessage);
  }
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if( myAge === yourAge ){
    return callFriend;
  }
  else if( myAge > yourAge){
    if( yourGender === 'male') {
      return callYoungerBrother;
    }
    else {
      return callYoungerSister;
    }
  }
  else{
    if( yourGender === 'male') {
      return callOlderBrother;
    }
    else {
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

//switch문
let myChoice = 3;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신은...');
    break;
  case 2:
    console.log('고양이를 선택한 당신은...');
    break;
  case 3:
    console.log('코알라를 선택한 당신은...');
    break;
  case 4:
    console.log('강아지를 선택한 당신은...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

// 어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 좀 더 효과적이고
// 특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적입니다.
// if 문은 == 요걸로
// switch문은 === 이걸로 비교 해야하고, 그냥 형변환 안되니까 정확하게 작성하시오.

//while 문

let i = 30;

while (i % 7 !== 0) {
  i++;
}
  console.log(`${i}`); //35

//while문 구구단
let i1 = 1;
while (i1 <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i1++;
}

//피보나치 수열
let current = 1;
let previous = 0;

for ( let i = 1; i <= 50; i++ ) {
  console.log(current);
  let temp = previous;
  previous = current;
  current = current + temp;
}

//객체 (Object)
let codeit = {
  name : '코드잇',
  'born Year': 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

//점 표기법
console.log(codeit.name);   //코드잇

//대괄효 표기법
console.log(codeit['born Year']);   //2017
console.log(codeit.bestCourse['title'])   //자바스크립트 프로그래밍 기초

//프로퍼티 추가
codeit['ceo'] = '강영훈';
// codeit.ceo = '강영훈';
console.log(codeit.ceo);

//프로퍼티 삭제
// delete codeit.worstCourse
delete codeit['worstCourse']
console.log(codeit.worstCourse);

//프로퍼티 in 으로 확인
console.log('worstCourse' in codeit); // true or false

if ( 'name' in codeit ) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log('name 프로퍼티 값은 존재하지 않습니다.')
}