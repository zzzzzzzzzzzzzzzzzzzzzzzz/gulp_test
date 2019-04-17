/*
* gulpfile.js是gulp的配置文件
* */

const gulp = require('gulp')
const babel=require('gulp-babel')



const browserify = require('gulp-browserify');


const rename = require("gulp-rename");
//注册任务
gulp.task('babel',()=>{
    //当前任务要执行的回调函数
    return  gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js'))
})



gulp.task('browserify', function() {
    // Single entry point to browserify
    return gulp.src('build/js/app.js')
        .pipe(browserify( ))
        .pipe(rename('built.js'))
        .pipe(gulp.dest('./build/js'))
});