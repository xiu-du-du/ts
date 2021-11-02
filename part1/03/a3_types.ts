/*
 * @Author: xiuxiu
 * @Date: 2021-10-29 18:32:49
 * @LastEditTime: 2021-10-30 07:44:53
 * @FilePath: \ts\03\a3_types.ts
 */
//直接使用字面量进行类型声明
let a:10
a=10
console.log(a);

//使用 |  来连接多个类型（联合类型）
let b:'hello'|'world'
b='hello'
b='world';
console.log(b);

let c: boolean | string 
c=true
c='hello'
console.log(c);

//给变量设置any，就回给变量关闭类型检测
let d:any
d='123'
d=100
d=true
console.log(d);

//声明变量不指定类型，会自动默认为any（隐式any）
let e;

//给变量设置unknown，代表位置类型
let f:unknown;

//any类型的变量，可以赋值给其他类型，不会报错
//unknown类型的变量，不能直接赋值给其他变量
let s:string
if(typeof f==='string'){
    s=f
}

//变量断言：告诉解析器变量的实际类型
/*
    语法：
        变量 as 类型
        <类型>变量
*/
s=e as string
s=<string>e

//void 表示空，一函数为例，表示函数没有返回值
function fn():void {
    // return undefined
    // return null
}

//never 表示没有值
function fn1():never {
    throw new Error ('123')
}