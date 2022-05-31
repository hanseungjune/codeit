//String
let myString = 'Hi Codeit';

//부분 문자열 접근 slice(start, end)
console.log(myString.slice(0,2)); //Hi
console.log(myString.slice(3))    //Codeit
console.log(myString.slice());    //Hi Codeit

//양 끝 공백 제거
console.log(myString.trim());   //trim메소드  //Hi Codeit

//대소문자 변환
console.log(myString.toUpperCase());  //대문자    //HI CODEIT
console.log(myString.toLowerCase());  //소문자    //hi codeit

//요소 탐색
console.log(myString.indexOf('a'));   // 앞부터   //-1
console.log(myString.lastIndexOf('i'));   // 뒤 부터    //7

//요소 접근
console.log(myString[3]);   // 대괄호 표기법      //C
console.log(myString.charAt(3));    // charAt 메소드    //C

//문자열 길이
console.log(myString.length)    //length 프로퍼티     //9

//문자열에 for(let variable of Array)
let myString1 = 'Codeit';
let myArray = ['C','o','d','e','i','t'];

for( let str of myString1) {
  console.log(str);
}

console.log(typeof myString1);        // string
console.log(typeof myArray);          // object

console.log(myString1 === myArray);   //false
console.log(myString1 == myArray);    //false

// 배열은 mutable
myArray[0] = 'B';
console.log(myArray);       //[ 'B', 'o', 'd', 'e', 'i', 't' ]

// 문자열은 immutable
myString[0] = 'B';
console.log(myString1);      //Codeit




