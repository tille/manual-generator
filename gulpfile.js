var gulp = require('gulp');
var markdownpdf = require("markdown-pdf");
var fs = require("fs");
var srcPath = "src/";

gulp.task('default', function () {
  fs.readdir(srcPath, function (err, files) {
    var mdDocs = files.map(function (f) { return "src/" + f });
    // console.log(mdDocs);

    markdownpdf().concat.from(mdDocs).to("out/manual.pdf", function () {
      console.log("manual sucessfully generated.");
    });
  });
});

