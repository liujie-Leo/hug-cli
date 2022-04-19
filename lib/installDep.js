

const ora = require("ora");
var exec = require("child_process").exec;

// promisify exec function
const promiseExec = function (cmd,options) {
  return new Promise((resolve, reject) => {
    exec(cmd,options, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
};

// install dependencies
module.exports = async function (dir) {
  console.log('start');
  return new Promise((resolve, reject) => {
    const loading = ora("Waiting to install dependencies...");
    promiseExec("npm i", { cwd: dir })
      .then(() => {
        resolve();
        loading.succeed("All dependencies were installed successfully！");
      })
      .catch((e) => {
        loading.fail("Partial dependency installation failed");
        console.log(e);
        reject();
      });
  });
};
