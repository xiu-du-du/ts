/*
 * @Author: xiuxiu
 * @Date: 2021-10-29 18:03:01
 * @LastEditTime: 2021-11-01 17:18:39
 * @FilePath: \ts\part1\02\a2_basis.ts
 */
var a11; //声明变量同时指定变量为何种类型
/*
    在声明变量时同时赋值，会自动指定为默认类型
*/
var b33 = true;
var c33 = false;
function sum(a, b) {
    return a + b;
}
var res = sum(123, 5);
console.log(res);
