const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 確認用
// console.log(holidays.length);

// 再提出コード
for (let i = 0; i < holidays.length; i += 1) {
  console.log(holidays[i]);
}

// for文の場合
// 再提出になったコード↓
// for (let i = 0; i <= 15; i += 1) {
//   console.log(holidays[i]);
// }

// while文の場合
// i = 0;
// 再提出になったコード↓
// while (i <= 15) {
//   console.log(holidays[i]);
//   i += 1;
// }

// while文の場合
i = 0;
// 再提出コード
while (i < holidays.length) {
  console.log(holidays[i]);
  i += 1;
}