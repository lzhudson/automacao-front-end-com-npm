## Instalando gulp-babel:
O gulp-babel, é uma dependência que transpila Javascript Moderno(ES6+), para Javascript antigo, dando suporte a navegadores antigos mesmo utilizando novas features.

**Instalar o pacote:**
```properties
npm install  gulp-babel @babel/core @babel/preset-env
```
No comando acima utilizamos o babel/core que é uma dependência do core do babel, onde estão todas as funções, métodos de transpilação e também instalamos um preset que é um padrão ou um conjunto de padrões no qual o javascript final será compilado cada preset transpila o Javascript para versões diferentes de browsers, o mais comum deles é o preset-env.

**Utilizando o gulp-babel:**
```javascript
function gulpJS() {
  return gulp.src('./js/main/*.js')
         .pipe(concat('main.js'))
         .pipe(babel({
            presets:['@babel/preset-env']
          }))
         .pipe(gulp.dest('./js/'))
}
```

Usamos o babel após a concatenação de todos os arquivos .js, para que o mesmo transpile tudo de uma vez e não arquivo por arquivo.
Como argumento passamos um objeto, que contém a propiedade 'preset', que recebe um array com o preset selecionado.

**Arquivo gulpfile.js:**
```javascript
// Adicionando dependências
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// Função paraa compilar o SASS e adicionar os prefixos
function compilaSass(){
  return gulp.src('css/scss/*.scss')
         .pipe(sass({
           outputStyle: 'expanded'
          }))
         .pipe(autoprefixer({
           overrideBrowserslist: ['last 2 versions'],
           cascade: false
         }))
         .pipe(gulp.dest('css/'))
         .pipe(browsersync.stream());
}

// Tarefa de gulp para a função de sass
gulp.task('sass', compilaSass);

// Função para concatencar os arquivos js
function gulpJS() {
  return gulp.src('./js/main/*.js')
         .pipe(concat('main.js'))
         .pipe(babel({
            presets:['@babel/preset-env']
          }))
         .pipe(gulp.dest('./js/'))
}

gulp.task('mainjs', gulpJS);

// Função para iniciar o browser.
function browser() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  })
}

// Tarefa para inicar o browser-synnc
gulp.task('browser-sync', browser);

// Função de Watch do gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch(['*.html', '*.php']).on('change', browsersync.reload);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do gulp, que inicia o watch e o browser sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass','mainjs'));
```