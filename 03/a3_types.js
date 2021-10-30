/*
 * @Author: xiuxiu
 * @Date: 2021-10-29 18:32:49
 * @LastEditTime: 2021-10-29 18:39:27
 * @FilePath: \ts\03\a3_types.ts
 */
//直接使用字面量进行类型声明
var a;
a = 10;
console.log(a);
//使用 |  来连接多个类型（联合类型）
var b;
b = 'hello';
b = 'world';
console.log(b);
var c;
c = true;
c = 'hello';
console.log(c);
//给变量设置any，就回给变量关闭类型检测
var d;
d = '123';
d = 100;
d = true;
console.log(d);
