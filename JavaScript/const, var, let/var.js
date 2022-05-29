//변수선언
var myVariable;
myVariable = 'codeit';

var myVariable2 = 'codeit';

//중복선언허용
var myVariable = 'codeit';
console.log(myVariable);    //codeit
var myVariable3 = 'Codeit!';
console.log(myVariable3);    //Codeit!

//함수 스코프
{
  let x1 = 3;
}

function myFunction() {
  let y1 = 4;
}

console.log(x1);   //Uncaught ReferenceError: x is not defined
console.log(y1);   //Uncaught ReferenceError: x is not defined

{
  var x2 = 3;
}

function myFunction() {
  var y2 = 4;
}

console.log(x2);    //3
console.log(y2);    //Uncaught ReferenceError: x is not defined

//끌어올림 (Hoisting)
console.log(myVariable4);   //Uncaught ReferenceError: x is not defined
let myVariable4;

console.log(myVariable5);    //undefined
var myVariable5;

console.log(myVariable);    //undefined
var myVariable = 2;
console.log(myVariable);    //2

sayHi();      //hi

function sayHi() {
  console.log('hi');
}


