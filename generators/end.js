const chalk = require("chalk");

module.exports = async generator => {
  generator.log(
    `Update your sequelize database configuration in ${chalk.yellow(
      "db/config/config.json"
    )}.`
  );

  generator.log(`To start the application run below command.`);
  switch (generator.props.packageManager) {
    case "yarn":
      generator.log(chalk.yellow("yarn start"));
      break;
    default:
      generator.log(chalk.yellow("npm run start"));
      break;
  }
}