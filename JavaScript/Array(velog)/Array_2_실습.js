let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
let i = 0;

while ( i <= 6 ) {
  fahrenheitTemps[i] = ( celsiusTemps[i] * 9 / 5 ) + 32;
  i++;
}
