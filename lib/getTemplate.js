const util = require("util");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");
const downloadGitRepo = require("download-git-repo"); // 不支持 Promise

// can be used template
let templates = ["vue2-js-vant", "vue3-js-element", "vue3-js-element-tailwind"];

function getTemplateName(config) {
  let name = config.jsFramework + config.version;
  for (let key in config) {
    if (["jsFramework", "version"].includes(key)) continue;
    if (config[key]) {
      name = name + "-" + config[key];
    }
  }
  return name;
}

// get the corresponding template by config
module.exports = async function (config, name) {
  const templateName = getTemplateName(config);

  if (!templates.includes(templateName)) {
    console.log(
      chalk.bgRed(" Error ") + ` template ${templateName} has not found.`
    );
    return Promise.reject(false);
  }

  return new Promise((resolve, reject) => {
    const url = `ox-template/${templateName}`; // git路径
    const filePath = path.resolve(process.cwd()) + "/" + name; // 路径

    const loading = ora("waiting download template...");
    loading.start();
    downloadGitRepo(url, filePath, { clone: true }, () => {
      resolve("ok");
      loading.succeed("Template downloaded successfully!");
    });
  });
};
