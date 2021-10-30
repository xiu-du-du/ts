/*
 * @Author: xiuxiu
 * @Date: 2021-10-30 17:45:32
 * @LastEditTime: 2021-10-30 19:39:20
 * @FilePath: \ts\04\a4_types.ts
 */
//对象
let b1:{name:string,[propName:string]:unknown}//表示任意类型的属性
b1={name:'123',userName:'22',postName:'669'}

//函数
let c1:(a:number,b:number)=>number
c1=function (a,b) {
    return a+b
}

let d1:number[]
let e1:Array<number>
e1=[1,2,3,4,5]

//turple 元祖，元祖就是固定长度的数组
let h:[string,string]
h=['hello','world']

//enum 枚举，
enum Gender{
    Male=0,
    Female=1
}
let i:{name:string,gender:Gender}
i={
    name:"tom",
    gender:Gender.Male
}

i.gender===Gender.Male
