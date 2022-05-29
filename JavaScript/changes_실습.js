function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let changes = payment - cost;
  let fiftyCount = (changes - (changes % 50000)) / 50000;
  changes = changes - 50000 * fiftyCount;
  
  console.log(`50000원 지폐: ${fiftyCount}장`);
  
  let tenCount = (changes - (changes % 10000)) / 10000;
  changes = changes - 10000 * tenCount;
  
  console.log(`10000원 지폐: ${tenCount}장`);
  
  let fiveCount = (changes - (changes % 5000)) / 5000;
  changes = changes - (5000 * fiveCount);
  
  console.log(`5000원 지폐: ${fiveCount}장`);

  let oneCount = (changes - (changes % 1000)) / 1000;
  changes = changes - (1000 * oneCount);
  
  console.log(`1000원 지폐: ${oneCount}장`);
}  
  
// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);