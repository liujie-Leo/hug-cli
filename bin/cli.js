#! /usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const create = require('../lib/create')
const figlet = require('figlet')

// create命令
program
  .version("0.1.0")
  .command("create <project-name>")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exist")
  .action((name, options ) => {
    create(name,options)
  });

  // --help命令
program
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log(
      "\r\n" +
        figlet.textSync("hug-cli", {
          font: "3D-ASCII",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
    );
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`hug-cli <command> --help`)} for detailed usage of given command\r\n`)
  })

program
  .usage("<command> [option]");

// 解析用户执行命令传入参数
program.parse(process.argv);
