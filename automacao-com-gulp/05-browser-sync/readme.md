## Instalando o browser-sync:

O browser-sync é uma dependência de live-reload, ou seja de atualização em tempo real do browser, com ele podemos realizar alterações em nossos arquivos e logo em seguida visualizarmos as mesmas no propio browser.

  

**Comando:**

```properties
npm install browser-sync
```

**Importando a dependência:**

```javascript
const browsersync =  require('browser-sync').create();
```

**Criando a função a função:**

```javascript
function  browser() {
	browsersync.init({
		server: {
			baseDir:  "./"
		}
	})
}
```

A função browsersync.init({}), recebe como parametro um objeto que tem como uma das propiedades a "server" que também é um objeto onde no qual possui a propiedade baseDir, que é referende ao diretorio base do projeto onde serão monitoradas as atualizações.

  

Para que o browser seja atualizado a cada alteração em arquivos do projeto é necessario adicionar a função browsersync.stream(), que fica responsavel por renderizar todo o servidor e trazer as atualizações. Aqui utilizamos um exemplo com o SASS:

```javascript
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
	.pipe(browsersync.stream());
}

```
Note que a função só é executa após a compilação dos arquivos e também quando os mesmos são atualizados.

**Logo em seguida definimos as tarefas a serem realizadas pelo comando gulp:**

```javascript
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
```

Note que utilizamos a tarefa de watch que monitora as alterações nos arquivos e logo em seguida o browser-sync faz o reload da página.

  

**Obs: É necessário ter os arquivos anteriores para rodar o projeto por completo.**

Arquivo final do gulp:

```javascript
const gulp =  require('gulp');
const sass =  require('gulp-sass');
const autoprefixer =  require('gulp-autoprefixer');
const browsersync =  require('browser-sync').create();

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
	.pipe(browsersync.stream());	
}

gulp.task('sass', compilaSass);

function  browser() {
	browsersync.init({
		server: {
			baseDir:  "./"
	}
	})
}

gulp.task('browser-sync', browser);

function  watch() {
	gulp.watch('css/scss/*.scss', compilaSass);
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));

```

**Monitorando mais de um arquivo com watch e o browser-sync:**

```javascript
gulp.watch(['lista-de-arquivos-que-desejamos-monitorar']).on('change', browsersync.reload)
```

  

A função acima recebe como parâmetro um array de lista de arquivos que desejamos monitorar, logo em seguida adicionamos uma função javascript que é .on(), que recebe o tipo de evento que é o change e em seguida realiza uma função de callback que é a browsersync.reload, que recarrega o browser.

  

Ex:
```javascript
gulp.watch(['*.html', '*.php']).on('change', browsersync.reload)
```

Na função acima estamos falando para o gulp, que quaisquer alterações feitas nos arquivos .html ou .php ele deve recarregar browser a partir da função browsersync.reload.
