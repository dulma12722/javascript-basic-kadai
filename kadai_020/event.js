// ボタンがクリックされたら表示する文章を書き換えるイベント処理を作成

// btnというidを持つHTML要素を取得し、定数に代入する
const editBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const editText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
editBtn.addEventListener('click', () => {
  editText.textContent = 'ボタンをクリックしました'
});