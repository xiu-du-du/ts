/*
 * @Author: xiuxiu
 * @Date: 2021-10-29 18:03:01
 * @LastEditTime: 2021-10-29 18:17:00
 * @FilePath: \ts\02\a2_basis.ts
 */
var a; //声明变量同时指定变量为何种类型
a = 1;
/*
    在声明变量时同时赋值，会自动指定为默认类型
*/
var b = true;
var c = false;
function sum(a, b) {
    return a + b;
}
var res = sum(123, 5);
console.log(res);
