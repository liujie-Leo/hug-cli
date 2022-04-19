const ora = require("ora");
const figlet = require('figlet')
const chalk = require('chalk')
module.exports = function () {
  return new Promise((resolve, reject) => {
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
    const loading = ora("In the initialization...");
    loading.start()
    setTimeout(() => {
      loading.succeed()
      resolve()
    }, 500);
  })
}