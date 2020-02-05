## Instalando gulp-sass:
Pacote usado para compilação de arquivos .scss para .css.

````properties
npm install gulp-sass
````
**Obs: Antes você já deve ter instalado o gulp com o comando:**
````properties
npm install gulp
````
**Crie o arquivo gulpfile.js na pasta raiz do projeto**
**Importe o pacote do sass nas primeiras linha do arquivo:**
````javascript
const sass = require("gulp-sass");
````
**Crie a função que compilará os arquivos .scss para css:**
````javascript
function compilaSass(){
	 return gulp.src('css/scss/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('css/'));
}
````
**gulp.src('pasta-arquivos-.scss'):** Aqui definimos a pasta no qual estão nossos arquivos .scss.

**gulp.pipe(pacote({options})):** No primeiro pipe definimos qual pacote usaremos e dentro dele podemos passar opções em formato de objeto.

Obs: As opções variam de pacote para pacote, consulte sempre a documentação no site da NPM.

**gulp.pipe(gulp.dest('pasta-de-destino')):** No segundo pipe definimos a pasta de destino do arquivos ou seja para onde eles seram mandados após a compilação.

**Após isso definimos a primeira tarefa e passamos como callback a função criada.**
````javascript
gulp.task('sass', compilaSass);
````

O primeiro paramêtro se refere ao nome da função que executaremos com o npm na linha de comando e o segundo a função em si que será executada.

Por padrão o gulp, executa uma função 'default' se apenas colocarmos o comando:
````properties
gulp
````

Para executarmos a função criada usamos:
````properties
gulp sass
````

Arquivo gulpfile.js:
````javascript
const gulp =  require("gulp");
const sass =  require("gulp-sass");
function  compilaSass(){
	return gulp.src('css/scss/*.scss')
	.pipe(sass({outputStyle:  'compressed'}))
	.pipe(gulp.dest('css/'));
} 
gulp.task('sass', compilaSass);
````

css/scss/* -> todos os arquivos

css/scss/*.scss -> todos os arquivos .scss desta pasta.

css/*\*/\* -> todas as pastas e todos os seus arquivos

css/*\*/\*.scss -> todos os arquivos scss de todas as pastas dentro de css.