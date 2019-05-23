const yosay = require("yosay");
const chalk = require("chalk");

module.exports = async generator => {
  let props = {};
  const interact = [
    {
      type: "input",
      name: "name",
      message: "Provide Application Name:",
      default: generator.appname
    },
    {
      type: "input",
      name: "version",
      message: "Provide Application Version:",
      default: "1.0.0"
    },
    {
      type: "input",
      name: "description",
      message: "Provide Application Description:",
      default: "Coderelm Express MVC Setup."
    },
    {
      type: "input",
      name: "repository",
      message: "Provide Application Repository:",
      default: ""
    },
    {
      type: "input",
      name: "author",
      message: "Provide Application Author 'nanem <email@gmail.com>':",
      default: ""
    },
    {
      type: "input",
      name: "license",
      message: "Provide Application License:",
      default: "MIT"
    },
    {
      type: "list",
      name: "packageManager",
      message: "Chose your package manager:",
      choices: [
        "npm",
        "yarn"
      ],
      default: "npm"
    }
  ];
  
  // Have Yeoman greet the user.
  generator.log(
    yosay(
      `Welcome to the coderelm ${chalk.red(
        "generator-coderelm-express-mvc"
      )} generator!`
    )
  );
  props = await generator.prompt(interact);
  return props;
};
  