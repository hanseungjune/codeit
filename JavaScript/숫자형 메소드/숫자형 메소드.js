// Number
let myNumber2 = 0.3591;

// toFixed(0 ~ 100) : 수만큼 보여줄 자릿수를 지정
console.log(Number(myNumber2.toFixed(4)));

// Number
let myNumber = 0.3591;

// toFixed(0 ~ 100) : 수만큼 보여줄 자릿수를 지정
console.log(Number(myNumber.toFixed(4)));
// + 를 Number로 대체할 수 있음.
console.log(+myNumber.toFixed(4));

let myNumber1 = 255;

// toString(2 ~ 36진법 표현)
console.log(myNumber1.toString(2));
// 10진수 자체를 적을때는 점 2개
console.log(255..toString(2));
// 아니면 괄호로 묶어서
console.log((255).toString(2));
console.log(myNumber1.toString(8));
console.log(myNumber1.toString(16));

//123
0x7b.toString(10) * 1 // 123(숫자) : 문자열 '123'에 1을 곱하는 순간 숫자형으로 형변환이 됨.

//절댓값
console.log(Math.abs(-10));   //10
console.log(Math.abs(10));    //10

//최댓값
console.log(Math.max(2, -1, 4, 5, 0));  //5

//최솟값
console.log(Math.min(2, -1, 4, 5, 0));  //-1

//거듭제곱
console.log(Math.pow(2, 3));    //8
console.log(Math.pow(5, 2));    //25

//제곱근
console.log(Math.sqrt(25));     //5
console.log(Math.sqrt(49));     //7

//반올림
console.log(Math.round(2.3));     //2
console.log(Math.round(2.4));     //2
console.log(Math.round(2.49));    //2
console.log(Math.round(2.5));     //3
console.log(Math.round(2.6));     //3

//버림과 올림
console.log(Math.floor(2.4));     //2
console.log(Math.floor(2.49));    //2
console.log(Math.floor(2.8));     //2
console.log('-');
console.log(Math.ceil(2.4));      //3
console.log(Math.ceil(2.49));     //3
console.log(Math.ceil(2.8));      //3

//난수(0~1 사이의 난수)
console.log(Math.random());   //0.0001~0.99999
console.log((Math.random()+0.1).toFixed(1));    //0.1~~1.0
console.log((Math.random()*10+1).toFixed(0));   //1~10
console.log((Math.random()*100+1).toFixed(0));  //1~100

//소숫점을 더하면 꼭 처리해야하는 과정
let sum = 0.1 + 0.2;        //0.300000004

console.log(Number(sum.toFixed(1)));    //toFixed()로 반올림
console.log(+sum.toFixed(1));           //toFixed()로 반올림2
console.log(Math.round(sum * 10) / 10); //Math.round()로 반올림

