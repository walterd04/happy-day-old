// @ts-nocheck
const del = require("del");
const chalk = require("chalk");

(async () => {
  const deletedPath = await del(["./dist/**/*"]); // eslint-disable-line

  console.log(chalk.green("Successfuly cleaned the dist directory"));
})();
