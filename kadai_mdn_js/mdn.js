// オブジェクトの宣言　const（定数）にて
// const sample = { kye1: value1, kye2: value2, kye3: value3};

// 今日の日付を取得
const today = new Date();

// 今日の日付を出力（確認用）
// console.log(today);

// 年を取得
const year = today.getFullYear();
// console.log(year);

// 月を取得　※getMonthは0~11の数値で返すため+1
const month = today.getMonth() + 1;
// console.log(month);

// 日付を取得
const date = today.getDate();
// console.log(date);

// yyyy年m月d日形式で出力
console.log(year + '年' + month + '月' + date + '日');