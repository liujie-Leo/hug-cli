// check whether the target file exsits
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const ora = require('ora')

// remove function
const removeFn = function (targetDir) {
  return new Promise(async (resolve, reject) => {
    const removing = ora("\r\nDeleting the target file...");
    removing.start()
    await fs.remove(targetDir).catch(e=>{reject(e)})
    removing.succeed("The existing file was successfully deleted！");
    resolve('ok')
  })
};

module.exports = function isExsit(name,options) {
  return new Promise(async (resolve, reject) => {
    const cwd = process.cwd(); // current path
    const targetDir = path.join(cwd, name); // target file absolute path
    // is exsit?
    if (fs.existsSync(targetDir)) {
      // force create？
      if (options.force) {
        await removeFn(targetDir).catch(()=>{reject(false)})      
        resolve("ok");
      } else {
        // is cover
        let { action } = await inquirer.prompt([
          {
            name: "action",
            type: "list",
            message: "Target directory already exists, pick an action:",
            choices: [
              {
                name: "Overwrite",
                value: "overwrite",
              },
              {
                name: "Cancel",
                value: false,
              },
            ],
          },
        ]);
        if (!action) {
          reject(false);
        } else {
          await removeFn(targetDir).catch(()=>{reject(false)})      
          resolve("ok");
        }
      }
    }
    resolve('ok')
  });
};
