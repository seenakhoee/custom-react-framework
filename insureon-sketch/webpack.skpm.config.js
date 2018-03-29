const path = require("path");

console.log('insureon-sketch/webpack.config.js');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = function (config, isPluginCommand) {
  config.resolve = {
    alias: {
      "react-native": path.resolve(__dirname, "./node_modules/react-sketchapp"),
      "react-zeolite": path.resolve(__dirname, "../react-zeolite/src/components/"),
      "react-insureon": path.resolve(__dirname, "../react-insureon/src/components/"),
      "react-zeolite-styles": path.resolve(__dirname, "./src/styles/"),
      "react-insureon-styles": path.resolve(__dirname, "../react-insureon/src/styles/"),
      "global-styles$": path.resolve(__dirname, "./src/styles/GlobalStyles")
    }
  };
}
