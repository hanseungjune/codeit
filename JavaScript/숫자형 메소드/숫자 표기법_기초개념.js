//지수 표기법
console.log( 25e5 === 2500000 );        //true
console.log( 5.3e3 === 5300 );          //true
console.log( -6.1e8 === -610000000 );   //true

console.log( 16e-5 === 0.00016 );       //true
console.log( 3.5e-3 === 0.0035 );       //true
console.log( -9.1e-5 === -0.000091);    //true

// 16진법(Hexadecimal)
let hex1 = 0xff;  // 255
let hex2 = 0xFF;  // 255

// 8진법(Octal)
let octal = 0o377; // 255

// 2진법(binary numeral system)
let binary = 0b11111111; //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);