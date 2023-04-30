"use strict"

let result = "";

//＝で計算したかどうか 
let is_calc = false;

//初期表示
window.onload = function () {
  result = document.getElementById('result');
};

//ACキーボタンクリック時のイベント
function ac_click() {
  result.value = "0";
  is_calc = false;
}

//数字キーボタンクリック時のイベント
function num_click(val) {
  //一度＝で計算積みの場合、resultを初期化する
  if (is_calc) result.value = "0";
  is_calc = false;

  //入力した数字によってresultの処理を行う
  //初期化後、0が入力されたらresultに0を設定
  if (result.value == "0" && val == "0") {
    result.value = "0";
    //初期化後、.が入力されたらresultに0.を設定
  } else if (result.value == "0" && val == ".") {
    result.value = "0.";
    //初期化後、00が入力されたらresultに0を設定
  } else if (result.value == "0" && val == "00") {
    result.value = 0;
    //初期化後、上記以外の数字が入力されたらresultに入力値を設定

  } else if (result.value == "0") {
    result.value = val;
    //それ以外は直接resultに入力値を追加
  } else {
    result.value += val;
  }
}

//演算子ボタンクリック時のイベント
function ope_click(val) {
  if (is_calc) is_calc = false;

  //直前のボタンによって計算式の処理を変える
  //演算子なら演算子を切り替える
  if (is_ope_last()) {
    result.value = result.value.slice(0, -1) + val;
    //それ以外は計算式に入力した演算子を付け加える
  } else {
    result.value += val;
  }
}

//＝キークリックタンクリック時のイベント
function equal_click() {
  //計算式の最後が演算子なら演算子を取り除く
  if (is_ope_last()) result.value = result.value.slice(0, -1);

  let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  //計算結果がInfinityかNaN場合、resultにErrorを設定
  if (temp == Infinity || Number.isNaN(temp)) {
    result.value = "Error";
    //tempの値をresultに設定し計算済み（is_calc）フラグをtrueに
  } else {
    result.value = temp;
    is_calc = true;
  }
}

//計算式の最後が演算子か判定する関数の設定
function is_ope_last() {
  return ["+", "-", "×", "÷"].includes(result.value.toString().slice(-1));
}
