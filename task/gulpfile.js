var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    var spriteData = gulp.src('images/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        cssFormat: 'css',  // scss
        algorithm: 'binary-tree',  // default: binary-tree, options: binary-tree, top-down, left-right, diagonal, alt-diagonal
        // padding: 6,  // default: 0
        // cssTemplate: 'template.css',
        // cssVarMap: function(sprite) {
        //     sprite.name = 'icon-' + sprite.name;
        // }
    }));
    return spriteData.pipe(gulp.dest('dest/'));
});