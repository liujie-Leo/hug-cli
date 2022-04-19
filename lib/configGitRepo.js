const ora = require("ora");
var exec = require("child_process").exec;

// primisify exec
const promiseExec = function (cmd, options) {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  });
};

// reset origin repository
const resetRepo = function (dir) {
  return new Promise((resolve, reject) => {
    promiseExec("git remote rm origin", { cwd: dir })
      .then(() => {
        resolve('ok');
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// config local git repository
module.exports = async function (dir) {
  return new Promise((resolve, reject) => {
    const loading = ora("Waiting to configure the local Git repository...");
    resetRepo(dir)
      .then((e) => {
        loading.succeed("Local Git repository is configured successfully!");
        resolve(e);
      })
      .catch((e) => {
        loading.fail("Local Git repository configuration failed：" + e);
        reject();
      });
  });
};
