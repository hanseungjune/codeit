// 배열
let members = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];

console.log(members.length);    //5
console.log(members['length']);   //5
console.log(members[members.length-1]); //마지막 내용

members[5] = 'NiceCodeit'; //배열 및 내용 추가
console.log(members[5])   //NiceCodeit
console.log(members);     //[ '쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle', 'NiceCodeit' ]

members[3] = '달토끼';    //수정
console.log(members[3]);  //달토끼


// 배열 2
let members1 = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];

console.log(members1);

//splice(startIndex, deleteCount, item)
members1.splice(1, 1, 'NiceCodeit','HiCodeit');
console.log(members1);  // ['쿤갈레','NiceCodeit','HiCodeit','우리생각해써','흙토끼','End Miracle'];

members1.splice(1, 0, 'Kimchman'); 
console.log(members1);   // [ '쿤갈레', 'Kimchman','NiceCodeit','HiCodeit','우리생각해써','흙토끼','End Miracle']

members1.splice(1, 1, 'GanJangman');
console.log(members1);   // ['쿤갈레','GanJangman','NiceCodeit','HiCodeit','우리생각해써','흙토끼','End Miracle']

//배열3
//배열의 메소드 (Array's Method)
let members2 = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
console.log(members2);

// 배열의 첫 요소를 삭제: shift()
members2.shift();
console.log(members2);

// 배열의 마지막 요소를 삭제: pop()
members2.pop();
console.log(members2);

// 배열의 첫 요소를 추가: unshift(value)
members2.unshift('NiceCodeit');
console.log(members2);

// 배열의 마지막 요소를 추가: push()
members2.push();
console.log(members2);

//배열4
//배열에서 특정 값 찾기 (indexOf/lastIndexOf)
let brands = ['Google','Kakao','Naver','Kakao'];
console.log(brands.indexOf('Kakao')); //1
console.log(brands.indexOf('Daum'));  //-1
console.log(brands.lastIndexOf('Kakao')); //3
console.log(brands.lastIndexOf('Daum'));  //-1

//배열에서 특정 값이 있는지 확인하기(includes)
console.log(brands.includes('Kakao'));  //true
console.log(brands.includes('Daum'));   //false

//배열 뒤집기
console.log(brands);  //['Google','Kakao','Naver','Kakao']
brands.reverse();
console.log(brands);  //['Kakao','Naver','Kakao','Google']

