"use strict"

//要素の取得
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');


let concatText = "";

//ボタンがクリックされた時の関数
function buttonPressed(event) {

  const text = event.target.textContent; //?

  if (text === "=") {

    //=がクリックされたら→evalで計算した結果をconcatTextに代入
    concatText = eval(concatText);
    console.log(concatText);
    //どっちもされなかったら→末尾にtextが追加される
  } else if (text === "AC") {
    concatText = "";
  } else {
    concatText += text;
    console.log(concatText);
  }


  result.textContent = concatText;
}

//ボタンのクリックイベントの設定
buttons.forEach(button => button.addEventListener('click', buttonPressed));

