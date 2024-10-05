module.exports = function(eleventyConfig) {
    //add the book collection 
    eleventyConfig.addCollection('books', function(collectionApi) {
        return collectionApi.getFilteredByGlob('./src/books/*.md')
    });
     //add the projects collection 
     eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/projects/*.md");  
      });
    //required pass through copies  
    eleventyConfig.addPassthroughCopy('src/_data/pictures');
    eleventyConfig.addPassthroughCopy('src/_data/assets/style.css');
    eleventyConfig.addPassthroughCopy('node_modules/bootstrap/dist'); 

    return {
        dir: {
            input: "src"
        }
    }
}