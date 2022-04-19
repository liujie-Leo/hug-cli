// config template
const inquirer = require("inquirer");

let config = {}
module.exports = async function () {
  // select js framework
  config.jsFramework = await selectFramework();

  if (config.jsFramework == "vue") {
    // select vue version
    config.version = await selectVueVersion();

    // select language on vue3
    if (config.version == 3) {
      config.language = await selectLanguage();
    } else {
      // default js on vue2
      config.language = 'js'
    }

    // select ui framework
    config.uiFromwork = await selectUI();

    // select atomic class framework
    config.classFramework = await selectClassFramework();
  }

  if (config.jsFramework == "react") {
    // console.log("React Framework cli in develop");
  }
  console.log(config);
  return config;
}

const selectFramework = async function () {
  let res = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Select JavaScript framework:",
      choices: [
        {
          name: "Vue",
          value: "vue",
        },
        {
          name: "React",
          value: "react",
        },
      ],
    },
  ]);
  return res.action
}
const selectVueVersion = async function () {
  let res = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Select Vue version:",
      choices: [
        {
          name: "Vue2.*",
          value: "2",
        },
        {
          name: "Vue3.*",
          value: "3",
        },
      ],
    },
  ]);
  return res.action;
}
const selectLanguage = async function () {
  let res = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Select programming language:",
      choices: [
        {
          name: "JavaScript",
          value: "js",
        },
        {
          name: "TypeScript",
          value: "ts",
        },
      ],
    },
  ]);
  return res.action;
}
const selectUI = async function () {
  let res = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Select the UI component framework:",
      choices: [
        {
          name: "Element UI",
          value: "element",
        },
        {
          name: "Ant Design",
          value: "ant",
        },
        {
          name: "Vant UI",
          value: "vant",
        },
        {
          name: "Varlet UI",
          value: "varlet",
        },
      ],
    },
  ]);
  return res.action;
}
const selectClassFramework = async function () {
  let res = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Select the atomic class frame:",
      choices: [
        {
          name: "not need",
          value: "",
        },
        {
          name: "TailWind CSS",
          value: "tailwind",
        },
        {
          name: "Vanilla CSS",
          value: "Vanilla",
        },
      ],
    },
  ]);
  return res.action;
}