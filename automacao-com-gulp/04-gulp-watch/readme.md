## Função watch() do gulp:

A função watch do gulp serve para monitorar alterações em determinados arquivos, em um contexto de desenvolvimento queremos que o gulp compile sempre os arquivos .scss para css e adicione seus prefixos sempre que forem feita alterações nesses arquivos e é ai que entra o gulp.watch().

Utilizando a função:
```javascript
gulp.watch('lista-de-arquivos-que-queremos monitorar', funcaoCallback);
```

No primeiro parametro passamos o caminho até os arquivos onde desejamos monitorar as alterações.

Ex:

**Monitorando alterações nos arquivos sass:**
```javascript
gulp.watch('css/scss/*.scss', callBack);
```
**Monitorando alterações nos arquivos php:**
```javascript
gulp.watch('./*.php', callBack);
```
  

No callback podemos passar tanto uma função que executa várias tarefas ou com ou utilizar as funções gulp.series(['lista-de-tarefas']), que executa várias tarefas porém espera o final de cada uma para executar a próxima ou gulp.parallel(['lista-de-tarefas']) que executa várias tarefas em paralelo.

```javascript
const gulp =  require('gulp');
const sass =  require('gulp-sass');
const autoprefixer =  require('gulp-autoprefixer');

function  compilaSass(){
	return gulp.src('css/scss/*.scss')
		   .pipe(sass({
				outputStyle:  'expanded'
			}))
		   .pipe(autoprefixer({	
				overrideBrowserslist: ['last 2 versions'],
				cascade:  false
			}))
	       .pipe(gulp.dest('css/'))
}

gulp.task('sass', compilaSass); 

function  watch() {
	gulp.watch('css/scss/*.scss', compilaSass);
}

gulp.task('default', watch);
```

  

Obs: colocamos o método gulp.watch(), dentro de uma função literal para que possamos usa-la.

Como definimos a função gulp.task('default', watch), podemos utilizar somente gulp na linha de comando.

```properties
gulp
```