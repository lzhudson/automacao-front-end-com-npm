## Instalando o gulp-autoprefixer:

É uma dependência que adiciona os prefixos em algumas propriedades para que haja constância nos estilos em todos os navegadores de acordo com algumas propriedades.

Quando instalamos pacotes criados especificamente para o gulp, podemos encadear vários métodos um no outro, e assim fica mais compactar tudo dentro de uma função só.

### Importando o gulp-autoprefixer:
```javascript
const autoprefixer =  require('gulp-autoprefixer');
```

  

Utilizando o gulp autoprefixer:

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
}
```

  

Adicionamos as propriedades overrideBorserslist para indicarmos que queremos "autoprefixar" propriedades nos navegadores até suas duas ultimas versões.

**Obs: Lembre-se de colocar o gulp-autoprefixer sempre após a compilação do css.**

Arquivo gulpfile.js final:

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
```