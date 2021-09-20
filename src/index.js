/**
 * const, let等の変数宣言
 */
// var val1 = "hello";
// console.log(val1);

// // var変数は上書き可能
// val1 = "apple";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "orange";
// console.log(val1);

let val2 = "let param";
console.log(val2);

// letは再宣言不可能
// let val2 = "let param2";

// constは、オブジェクトのときは上書き可能
// const var4 = {
//   name: "taro",
//   age: "25"
// };
// var4.name = "jiro";
// var4.address = "tokyo";
// console.log(var4);

// constは、配列のときは上書き可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列
 */
const name = "mike";
const age = "12";

// 「私の名前はmikeです。１２歳です。」
const msg = `私の名前は${name}です。${age}歳です。`;
console.log(msg);
