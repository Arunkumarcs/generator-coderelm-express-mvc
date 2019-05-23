const chalk = use("chalk");

module.exports = async generator => {
  generator.log(
    `\n\n Update your sequelize configuration file in \n\n\t ${chalk.yellow(
      "db/config/config.json"
    )}.`
  );

  generator.log(`\n\nTo start the application run below command.`);
  switch (generator.props.packageManager) {
    case "yarn":
      generator.log(chalk.yellow(`\n\n\t yarn start`));
      break;
    default:
      generator.log(chalk.yellow(`\n\n\t npm run start`));
      break;
  }
}