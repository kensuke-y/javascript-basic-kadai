  // textというidを持つHTML要素を取得し、定数に代入する
const text= document.getElementById("text");

  // btnというidを持つHTML要素を取得し、定数に代入する
const btn=document.getElementById("btn");

  // `onclick`プロパティを使って、btnをクリックした時の動作を定義する
btn.onclick= function () {
    text.textContent ="ボタンをクリックしました";
}