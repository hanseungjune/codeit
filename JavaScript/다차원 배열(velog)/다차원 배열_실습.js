let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
let i = 0;
while ( i < groups.length ) {
  teams[0][i] = groups[i][0];
  teams[1][i] = groups[i][1];
  i++;
}
// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);