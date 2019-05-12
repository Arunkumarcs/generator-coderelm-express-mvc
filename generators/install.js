module.exports = async generator => {
  // generator.yarnInstall();
  generator.installDependencies({
    yarn: true,
    npm: false,
    bower: false
  });
};
