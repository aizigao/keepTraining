module.exports = {

  /* Called immediately after the plugin is 
  * first imported, only once. */
  install: function (less, pluginManager, functions) {
    functions.add('pi', function () {
      // return Math.PI;
      return new tree.Dimension(Math.PI);
    });

  },

  /* Called for each instance of your @plugin. */
  use: function (context) { },

  /* Called for each instance of your @plugin, 
   * when rules are being evaluated.
   * It's just later in the evaluation lifecycle */
  eval: function (context) { },

  /* Passes an arbitrary string to your plugin 
   * e.g. @plugin (args) "file";
   * This string is not parsed for you, 
   * so it can contain (almost) anything */
  setOptions: function (argumentString) { },

  /* Set a minimum Less compatibility string
   * You can also use an array, as in [3, 0] */
  minVersion: ['3.0'],

  /* Used for lessc only, to explain 
   * options in a Terminal */
  printUsage: function () { },
};