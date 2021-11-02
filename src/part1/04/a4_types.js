/*
 * @Author: xiuxiu
 * @Date: 2021-10-30 17:45:32
 * @LastEditTime: 2021-10-30 19:39:20
 * @FilePath: \ts\04\a4_types.ts
 */
//对象
var b1; //表示任意类型的属性
b1 = { name: '123', userName: '22', postName: '669' };
//函数
var c1;
c1 = function (a, b) {
    return a + b;
};
var d1;
var e1;
e1 = [1, 2, 3, 4, 5];
//turple 元祖，元祖就是固定长度的数组
var h;
h = ['hello', 'world'];
//enum 枚举，
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "tom",
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
