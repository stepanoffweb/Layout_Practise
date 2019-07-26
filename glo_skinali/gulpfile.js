let gulp = require('gulp');
let tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'HyZ5ybme80SWaF8YdHstnSVovbEYiNmq',
            // sigFile: 'images/.tinypng-sigs',
            // log: true
        }))
        .pipe(gulp.dest('images'));
        done();
});
