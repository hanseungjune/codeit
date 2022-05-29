// 여기에 코드를 작성해 주세요.
function interestCalculator(r, v, n) {
  let interest = v*n*(n+1)/2*r/12;
  console.log(interest.toFixed(0));
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);