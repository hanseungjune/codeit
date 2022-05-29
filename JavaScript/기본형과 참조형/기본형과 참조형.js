//기본형(Number, String, Boolean, Null, Undefined)
//변수에 값이 재할당되면, 값이 바뀌는 것

let x = 3;
let y = x;

console.log(x);   //3
console.log(y);   //3
y=5;
console.log(x);   //3
console.log(y);   //5

//참조형(Object, Array)
//변수에 값이 재할당되면, 값만 바뀌는게 아니라 주소값이 해당 변수에 연결됨.

let x1 = {name: 'Codeit'};
let y1 = x1;

console.log(x1);   //{name: 'Codeit'}
console.log(y1);   //{name: 'Codeit'}
y1.birth = 2017;
console.log(x1);   //{name: 'Codeit', birth: 2017}
console.log(y1);   //{name: 'Codeit', birth: 2017}

let x2 = [1, 2, 3];
let y2 = x2;

console.log(x2);   //[1, 2, 3]
console.log(y2);   //[1, 2, 3]
y2[2] = 4;
console.log(x2);   //[1, 2, 4]
console.log(y2);   //[1, 2, 4]

//예제1

let x3 = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
let y3 = x3.numbers;
let z3 = x3.title;
 
x3.numbers.unshift(5);
x3.title = 'Hello';

console.log(y3);
console.log(z3);

// [5, 1, 2, 3, 4]
// Codeit

// 참조형 복사하기(배열)
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);  //[ 1, 2, 3 ]
console.log(numbers2);  //[ 1, 2, 3, 4 ]

// 참조형 복사하기(객체1-Object.assign({}, 변수))
let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
}

let course2 = Object.assign({}, course1);

course2.title = '알고리즘의 정석';

console.log(course1);   //{ title: '파이썬 프로그래밍 기초', language: 'Python' }
console.log(course2);   //{ title: '알고리즘의 정석', language: 'Python' }

// 참조형 복사하기(객체2 - for(key in object){} )
let course3 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
}

let course4 = {};

for (let key in course3 ) {
  course4[key] = course3[key];
}

course4.title = '자료 구조';

console.log(course3);   //{ title: '파이썬 프로그래밍 기초', language: 'Python' }

console.log(course4);   //{ title: '자료 구조', language: 'Python' }

// 참조형 복사하기(객체3 - 함수로 지정)
function cloneObject(object) {
  let temp = {};
  
  for ( let key in object ) {
    temp[key] = object[key];
  }
  
  return temp;
}

let course5 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
}

let course6 = cloneObject(course5);
let course7 = cloneObject(course5);

course6.title = '자료 구조2';
course7.title = '객체 지향 프로그래밍';

console.log(course5);   //{ title: '파이썬 프로그래밍 기초', language: 'Python' }
console.log(course6);   //{ title: '자료 구조2', language: 'Python' }
console.log(course7);   //{ title: '객체 지향 프로그래밍', language: 'Python' }

// 참조형 복사하기(객체4 - 함수로 지정 / 복제한 객체지만 배열에 대한 값을 수정하는 경우 기존의 주소값과 같이 반영됨.)
function cloneObject(object) {
  let temp = {};
  
  for ( let key in object ) {
    temp[key] = object[key];
  }
  
  return temp;
}

let course8 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python',
  prerequisite: []      // 복제하는 순간, 배열형식이라서 바로 주소값 연결됨.
}

let course9 = cloneObject(course8);

course9.title = '자료 구조3';
course9.prerequisite.push('파이썬 프로그래밍 기초');

console.log(course8);   //{ title: '파이썬 프로그래밍 기초', language: 'Python' }
console.log(course9);   //{ title: '객체 지향 프로그래밍', language: 'Python' }

// 참조형 복사하기(객체3 - 함수로 지정 / 주소값 연결을 끊기 위한 식)
function cloneObject(object) {
// 순서2
// 널값이거나, 객체가 아닌 경우
  if (object === null || typeof object !== 'object') {
    return object;
  }
  
// 순서3
  let temp;
  // 배열이라면,
  if (Array.isArray(object)) {
    temp = [];
  // 객체라면,
  } else {
    temp = {};
  }
  
  // 순서1
  for (let key of Object.keys(object)) {
  // Object.keys() 는 배열형태로 바뀌기 때문에 for( key of Array ) 형태이다.
    temp[key] = cloneObject(object[key]);
    // value가 문자열 형태는 그대로 들어가고, 배열 형태는 [] 을 배정받을수 있도록 자체 함수를 적용한다. 그리고 return;
  }
  
  return temp;
}

let course10 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python',
  prerequisite: []
}

let course11 = cloneObject(course10);

course11.title = '자료 구조3';
course11.prerequisite.push('파이썬 프로그래밍 기초');

console.log(course10);   //{ title: '파이썬 프로그래밍 기초', language: 'Python', prerequisite: [] }
console.log(course11);   //{ title: '자료 구조3', language: 'Python', prerequisite: [ '파이썬 프로그래밍 기초' ] }




