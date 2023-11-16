module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("pages", function (collection) {
    return collection.getAllSorted().map(function (item) {
      if (item.inputPath.startsWith("./src/pages/")) {
        item.outputPath = item.outputPath.replace("/pages", "");
        item.url = item.url.replace("/pages", "");
      }
      return item;
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
