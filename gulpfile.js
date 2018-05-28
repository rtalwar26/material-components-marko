const gulp = require('gulp')
const livereload = require('gulp-livereload');
const directoryName = 'public';
const rename = require("gulp-rename");

const fs = require('fs')

var exec = require('child_process').exec;
let flags = process.argv.splice(3)
flags = flags.map((item) => {
    return item.replace('--', '');
})
let isDev = flags.indexOf('dev') >= 0;
let isProd = !isDev;
console.log('isProd',isProd);
require('marko/node-require').install();
require('babel-core/register');
require('lasso').configure({
    require: {
        transforms: [
            {
                transform: 'lasso-babel-transform',
                config: {
                    // directly specify babel options
                    babelOptions: {
                        presets: [
                            "es2015",
                            "stage-3"
                        ],
                        plugins: ["syntax-dynamic-import"]
                    }
                }
            }
        ]
    },
    "plugins": [{
            "plugin": "lasso-marko"

        },
        {
            "plugin": "lasso-sass",
            "config":{
                "includePaths":["./node_modules"]
            }

        }
    ],
    "fileWriter": {
        "outputDir": `${directoryName}/static`,
        "fingerprintsEnabled": isProd,
        "urlPrefix": "static"


    },
    "minify": isProd,
    "resolveCssUrls": true,
    "bundlingEnabled": isProd,
    "bundles": [

    ],
    flags: flags
});





function material(cb){
    return gulp.src(['./node_modules/@material/**/*'])
    .pipe(gulp.dest(`./node_modules/@material-ts/`))
}
exports.material = material

function materialConvert(cb){
    

   return gulp.src("./node_modules/@material/**/*.js")
  .pipe(rename(function (path) {
    
    path.extname = ".ts";
  }))
  .pipe(gulp.dest("./node_modules/@material")); 
}
exports.matconvert = materialConvert

function marko(cb) {


    return Promise.all([
        renderPage('main', 'main.html')
    ]);

    
};
exports.marko = marko;

function renderPage(pageName, htmlFileName) {
    return new Promise(function (resolve, reject) {
        let main = require(`./examples/${pageName}`);
        var htmlProm = main.render({});

        htmlProm.then((html) => {

            fs.writeFileSync(`./${directoryName}/` + htmlFileName, html)

            console.log('done rendering: ', `${htmlFileName}`)
            resolve();
        })

    })
}

var build = gulp.series(marko);
let lastRun = new Date().getTime();

function buildShell(done) {
    let now = new Date().getTime();
    let shouldBuild = Math.abs(now - lastRun) > 7000;
    console.log('shouldbuild', shouldBuild);
    let cmd = `./build.sh`
    for (let flag of flags) {
        cmd = cmd + ` --${flag}`
    }
    shouldBuild && exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        err && console.log(err);
        livereload.reload();
    });


    lastRun = shouldBuild ? now : lastRun;

    done();
}

function watch() {
    livereload.listen();
    gulp.watch(['src/lib/**/*.js', 'src/components/**/*.js', 'src/components/**/*.marko'], buildShell);
}
exports.watch = watch;

gulp.task('build', build);
gulp.task('default', build);

// gulp.task('watch', );