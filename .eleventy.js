const img = require('./eleventy/img.js');
const { generateWidths } = require('./eleventy/imgHelpers.js');

module.exports = function (config) {
  config.addShortcode('img', img);
  config.addFilter('generateWidths', generateWidths);

  config.setUseGitIgnore(false);

  config.addPassthroughCopy({ 'src/images/*': '/images' });

  if (process.env.NODE_ENV === 'dev') {
    config.addPassthroughCopy({ 'src/css': '/css' }); // uncompiled
  } else {
    // Compiled CSS is output directly to the build directory with PostCSS
  }

  return {
    templateFormats: ['html', '11ty.js', 'js'],
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_includes',
    },
  };
};
