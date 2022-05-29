let myDate1 = new Date('2017-05-01');
let myDate2 = new Date('2017-05-01T19:11:16');

console.log(myDate1);     //2017-05-01T00:00:00.000Z
console.log(myDate2);     //2017-05-01T19:11:16.000Z

// let myDate3 = new Date(YYYY, MM, DD, hh, mm, ss, ms);
let myDate3 = new Date(2017, 4, 18, 19, 11, 16);
// MM 은 4 적으면 5월 나오는 식으로 ( 0 ~ 11 )
console.log(myDate3);     //2017-05-18T19:11:16.000Z

//Date.getTime()
let myDate4 = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate4.getTime() - today.getTime();

console.log(-timeDiff + ' 밀리초');     //158576281794 밀리초
console.log(-timeDiff / 1000 + ' 초');      //158576281.794 초
console.log(-timeDiff / 1000 / 60 + ' 분');     //2642938.0299 분
console.log(-timeDiff / 1000 / 60 / 60 + ' 시간');   //44048.967165 시간
console.log(-timeDiff / 1000 / 60 / 60 / 24 + ' 일');     //1835.373631875 일
console.log(-timeDiff / 1000 / 60 / 60 / 24 / 30 + ' 월');      //61.1791210625 월
console.log(-timeDiff / 1000 / 60 / 60 / 24 / 30 / 12 + ' 년');     //5.098260088541667 년

//요일(0~6 / 일~토)
let today1 = new Date();

console.log(today1.getDay());   //6

//set Date 객체
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2022);
myDate.setMonth(6);
myDate.setDate(28);

console.log(myDate);    //2022-07-28T19:11:16.000Z


//간단하게 시간정보 알아내는 메소드
let myDate5 = new Date();

console.log(myDate5.toLocaleDateString());  //5/28/2022
console.log(myDate5.toLocaleTimeString());  //4:00:39 AM
console.log(myDate5.toLocaleString());      //5/28/2022, 4:00:39 AM

//알아서 수정해주는 new Date();
let myDate6 = new Date(1988, 0, 32);

console.log(myDate6);   //1988년 2월 1일

//Date.now() 메소드-> timeDiff1 = myDate.getTime() - today.getTime(); 식이 필요없음
//timeDiff2 = myDate.getTime() - Date.now();
let myDate7 = new Date();

console.log(Date.now() === myDate7.getTime());    //true
console.log(myDate7);
console.log(Date.now());

//Date.now() 쓰는 이유 예시 (지금이순간 구하기!)
let today2 = new Date();
let myDate8 = new Date(2002, 06, 28, 19, 13, 24);

timeDiff1 = myDate8.getTime() - today2.getTime();
timeDiff2 = myDate8.getTime() - Date.now();

console.log(timeDiff1);   //-625827879973 (음수가 나올수록 시간이 지났다는 이야기)
console.log(timeDiff2);   //-625827879973

//Date 객체의 형변환
let myDate9 = new Date(2017, 4, 18);

console.log(typeof myDate9);      //object
console.log(String(myDate9));     //Thu May 18 2017 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(Number(myDate9));     //1495065600000
console.log(Boolean(myDate9));    //true

console.log(myDate9.getTime() === Number(myDate9)); //true

//Date 객체 간 사칙연산
let myDate10 = new Date(2017, 4, 18);
let myDate11 = new Date(2017, 4, 19);

let timeDiff3 = myDate10 - myDate11;
console.log(timeDiff3);
console.log(timeDiff3 / 1000);
console.log(timeDiff3 / 1000 / 60);
console.log(timeDiff3 / 1000 / 60 / 60);
console.log(timeDiff3 / 1000 / 60 / 60 / 24);

// 날짜를 표현하는 다양한 방식
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');

console.log(date1);
console.log(date2);
console.log(date3);