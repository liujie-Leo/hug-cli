#! /usr/bin/env node

const chalk = require("chalk");
const name = "test";
// 打印命令行输入的值
console.log("project name is " + name);
// 文本样式
console.log("project name is " + chalk.bold(name));

// 颜色
console.log("project name is " + chalk.cyan(name));
console.log("project name is " + chalk.green(name));

// 背景色
console.log("project name is " + chalk.bgRed(name));

// 使用RGB颜色输出
console.log("project name is " + chalk.rgb(4, 156, 219).underline(name));
console.log("project name is " + chalk.hex("#049CDB").bold(name));
console.log("project name is " + chalk.bgHex("#049CDB").bold(name));
