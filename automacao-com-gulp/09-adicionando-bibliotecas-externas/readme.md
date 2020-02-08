## Instalando bibliotecas externas:
**Maneiras:**

Instalar via NPM:
```properties
npm install [nome-da-biblioteca]
```

Ex:
```properties
npm install jquery
```

**Importando as bibliotecas dentro do gulp:**
Note que cada biblioteca tem um caminho diferente para seu arquivo de core dentro da pasta node_modules, aqui usaremos como exemplo o jquery.

```javascript
function pluginJS(){
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/moment/min/moment.min.js',
    './js/plugins/*.js'
  ])
  //.pipe(uglify())
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('./js/'))
  .pipe(browsersync.stream())
}
```

Na função acima usamos um array dentro do método gulp.src([]), para indicarmos os demais arquivos das bibliotecas que queremos utilizar, em seguida usamos o gulp-concat para concatenar os arquivos em um só e salvamors como 'plugins.js', logo após utilizamos o gulp.dest(), para setarmos a pasta na qual o arquivo criado será salvo. Por último setamos para o brwoser-sync sincronizar quando esse arquivo for modificado e realizar a sincronização.

**Adicionando a tarefa:**
```javascript
gulp.task('pluginjs', pluginJS);
```

**Adicionando no método watch:**
```javascript
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch('js/plugins/*.js', pluginJS)
  gulp.watch(['*.html', '*.php']).on('change', browsersync.reload);
}
```
**Adicionando na tarefa principal do gulp, para que a tarefa seja executada assim que o comando gulp rodar:**
```javascript
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass','mainjs', 'pluginjs'));
```

## Passando argumentos nas funções
Ex:
```javascript
function compilaSass(style){
  return gulp.src('css/scss/*.scss')
         .pipe(sass({
           outputStyle: style
          }))
         .pipe(autoprefixer({
           overrideBrowserslist: ['last 2 versions'],
           cascade: false
         }))
         .pipe(gulp.dest('css/'))
         .pipe(browsersync.stream());
}
```
Na função acima desejamos especificar o estilo de saída do arquivo .css.

**Passando o argumento:**
```javascript
gulp.task('sass', function(done){
  compilaSass('expanded');
  done();
});
```

Utilizamos uma função de callback e passamos dentro dela a função especifica da nossa tarefa, mas antes definimos um parametro done, que é uma função que indica que a função executa acima terminou, sendo assim as outras tarefas podem prosseguir, sem isso ele não teria como diferenciar se a tarefa finalizou ou não.