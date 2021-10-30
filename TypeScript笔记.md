<!--
 * @Author: xiuxiu
 * @Date: 2021-10-29 17:42:48
 * @LastEditTime: 2021-10-30 07:48:30
 * @FilePath: \ts\TypeScript笔记.md
-->
# typescript 环境搭建
1. 安装nodejs
   下载地址：http://nodejs.cn/download/
2. 使用npm安装
   命令行输入：npm i -g typescript
3. 创建第一个ts文件
4. 使用tsc对ts文件进行编译
   - 进入命令行
   - 进入ts文件所在目录
   - 输入命令：tsc 文件名.ts
# 基本类型
   - 声明变量同时指定变量为何种类型
   - 在声明变量时同时赋值，会自动指定为默认类型
````typescript
    number  任意数字
    string  任意字符串
    boolean 布尔值
    字面量  限制变量的值就是该字面量的值
    any 任意类型，危险
    unknown 类型安全的any
    void    没有值，空值
    never   不能是任何值，报错用
    
````