// lib/create.js
const isExsit  = require('./isExsit')
const generator = require('./generator')
const initFn = require('./init')
const getTemplate = require('./getTemplate')
const configGitRepo = require('./configGitRepo')
const path = require('path')
const chalk = require('chalk')
module.exports = async function (name, options) {
  const targetDir = path.join(process.cwd(), name); // target file absolute path

  // init programing
  await initFn();

  // whether file exsit
  let exsitRes = await isExsit(name, options);
  if (!exsitRes) return;

  // get template config
  let config = await generator();

  // get template by config
  let templateRes = await getTemplate(config, name).catch(()=>{})
  if (!templateRes) return;

  // reset git repository
  let repoRes = await configGitRepo(targetDir).catch((e) => {
    console.log(e);
  });
  if (!repoRes) return;

  // finished
  console.log('\n' + chalk.bgGreen(' DONE ') + " All the preparatory work has been done, Let's get started with the following commands:\n");
  console.log(chalk.green(`$`) + ` cd ./${name}\n`);
  console.log(chalk.green(`$`) + ` npm install\n`);
  console.log(chalk.green(`$`) + ` npm run dev\n`);
};