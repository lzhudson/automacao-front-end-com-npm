## Instalando o gulp-concat:
```properties
npm install gulp-concat
```
**Importando gulp-concat:**
```javascript
const concat = require('gulp-concat');
```

**Criando a primeira função com o gulp-concat:**
```javascript
function gulpJS() {
  return gulp.src('./js/*.js')
         .pipe(concat('main.js'))
         .pipe(gulp.dest('./js/'))
}
```

Na função acima setamos primeiro o diretorio onde estão os arquivos que desejamos que sejam feitas as alterações através da função **gulp.src('caminho-dos-arquivos')**, em seguida com a função da propia dependência **concat('arquivo-final-após-a-junção')**, que gera um arquivo final com todos os códigos da pasta indicada na função acima e por fim setamos a pasta onde este mesmo arquivo ficará localizado através da função **gulp.dest('caminho-onde-o-gulp-salvará-o-arquivo')**.

Agora adicionamos essa tarefa a nossa função watch:
```javascript
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch(['js/*.js', '!js/main.js'], gulpJS);
  gulp.watch(['*.html', '*.php']).on('change', browsersync.reload);
}
```

Note que adicionamos um array na função watch, com o segundo item da array "!js/main.js", isso significa que o gulp terá que olhar para todos os arquivos .js da pasta, exceto o arquivo main.js.
Obs: a notação de "!" significa a negação ou seja estamos negando aquela expressão.

O ideal também é sempre ao executarmos o gulp, executarmos tarefas para gerar os arquivos padrões de javascript e css. Modificamos apenas a linha do comando default e adicionamos mais duas tarefas em gulp.parallel().
```javascript
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass','mainjs'));
```

Arquivo final gulpfile.js:
```javascript
// Adicionando dependências
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');

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