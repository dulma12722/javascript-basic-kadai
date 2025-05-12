// ボタンがクリックされたら表示する文章を書き換えるイベント処理を作成

// btnというidを持つHTML要素を取得し、定数に代入する
const editBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const editText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
editBtn.addEventListener('click', () => {
  setTimeout(() => {
    editText.textContent = 'ボタンをクリックしました';
  }, 2000);
});

// 失敗したコード
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
// setTimeout(() => {
//   editBtn.addEventListener('click', () => {
//     editText.textContent = 'ボタンをクリックしました'
//   });
// }, 2000);