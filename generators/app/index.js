"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  /**
   * 1. initializing
   * Your initialization methods (checking current project state, getting configs, etc)
   */
  // initializing() { }

  /**
   * 2. prompting
   * Where you prompt users for options (where you’d call this.prompt())
   */
  async prompting() {
    this.props = await require("../prompting")(this);
  }

  /**
   * 3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
   */
  // configuring() { }

  /**
   * 4. default - If the method name doesn’t match a priority, it will be pushed to this group.
   */
  // default() { }

  /**
   * 5. writing - Where you write the generator specific files (routes, controllers, etc)
   * https://yeoman.io/authoring/file-system.html
   */
  async writing() {
    await require("../writing")(this);
  }

  /**
   * 6. conflicts - Where conflicts are handled (used internally)
   */
  // conflicts() {}

  /**
   * 7. install - Where installations are run (npm, bower)
   * https://yeoman.github.io/generator/actions_install.html
   */
  async install() {
    await require("../install")(this);
  }

  /**
   * 8. end - Called last, cleanup, say good bye, etc
   */
  // end() { }
};
