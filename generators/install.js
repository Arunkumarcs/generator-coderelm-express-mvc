module.exports = async generator => {
  switch (generator.props.packageManager) {
    case "yarn":
      generator.yarnInstall(); 
      break;
    default:
      generator.npmInstall()
      break;
  }
  // generator.installDependencies({
  //   yarn: true,
  //   npm: false,
  //   bower: false
  // });
};
