# Automação Front-end com NPM

Isso é um simples helper para comandos, dicas e trechos de código sobre automação no front-end.

## Instalando Pacotes 

### Comandos:
**Instalar um pacote:**
Instala um pacote em sua ultima versão:
npm install [nome-do-pacote]
Ex:

```properties
npm install jquery
```  
     
**Atualizar um pacote:**
Atualiza o pacote para sua versão mais recente
npm update [nome-do-pacote]
Ex:

```properties
npm update jquery
``` 
**Instalar uma versão especifica do pacote:**
Instala um pacote de acordo com a versão informada
npm install [nome-do-pacote]@[versão-do-pacote]
Ex:

```properties
npm install jquery@2.0.0
``` 
**Instalando um pacote globalmente:(para todos os usuários)**
Instala um pacote em todos os usuários.
Use a flag **-g** para indicar isso.
npm install [nome-do-pacote]@[versão-do-pacote]
Ex:

```properties
npm install jquery -g
``` 
## Inciando projetos com npm
**Iniciando projetos:**
Inicia um projeto com npm.
npm init
Ex:

```properties
npm init
npm init -y
``` 

Ao rodar esse comando, a linha de comando gerara perguntas sobre o projeto, como nome, author, link do repositório no github e etc.
Para pular todas essas perguntas basta usar a flag **-y**.

**Pasta node_modules:**

A pasta node_modules é onde ficam localizadas todas as duas dependências, a vantagem de se usar um gerenciador de pacotes é que podemos migrar todo o projeto sem precisamos mover a pasta node_modules para cada lugar, pois o arquivo package.json, serve justamente para armazenarmos essas dependências e apenas com esse arquivo e um comando podemos instala-las em qualquer lugar.
Ao mover apenas o arquivo package.json para qualquer lugar, basta rodar o comando npm install na pasta onde se localiza o arquivo que o mesmo instalará todas as dependências necessárias.

```properties
npm install 
``` 

## Versionamento de Pacotes

As linhas abaixo servem para controlarmos versões especificas dos pacotes, para que não haja mudanças significativas em nossos projetos. 
Usarei como exemplo o pacote do Jquery:

```yaml
"dependencies": {
	"jquery":  "^3.2.1",
}
```
Nos pacotes a 3 tipos de versões de pacotes:
MAJOR.MINOR.PATCH:

**.patch** -> quando você faz correções de erros compatíveis com versões anteriores. Como melhorias de bugs e performance.

**.minor** -> quando você adiciona funcionalidade de uma maneira compatível com versões anteriores.

**.major** -> alteração da estrutura do pacote com atualizações significativas. Quando você faz alterações incompatíveis da API.

Referencias: [Site oficial sobre pacotes versões de pacotes do NPM](https://semver.org/)

Ex:

```yaml
"dependencies": {
	"jquery":  "^3.2.1",
}
```

3: Significa a versão maior da versão ou seja é a que controla atualizações significativas que podem ou não causar problemas no projeto.

2: Significa a adicção de funcionalidades para versões compatíveis com as anteriores que não causa problemas em atualizações.

1: Atualização de bugs e melhorias em performance.

**^: Indica que ele atualize somente a minor e patch.**
Ou seja se for instalado a versão @2.0.0 e no package.json estiver indicado na frente do pacote "^" o pacote instalará as ultimas versões de minor e patch. Ele nunca instalará uma versão acima do major.

Ex:

```yaml
"dependencies": {
	"jquery":  "^3.0.0",
}
```
Ao rodarmos o **npm install** a versão instala será a versão final do minor e patch que é a versão 3.4.1.
```yaml
"dependencies": {
	"jquery":  "^3.4.1",
}
```

**~: Indica que deve ser atualizado o patch daquela versão minor.**
Ou seja o pacote instalrá a ultima versão do patch daquela minor.
Ex:
```yaml
"dependencies": {
	"jquery":  "~3.1.0",
}
```
Ao rodarmos o **npm install** a versão instala será a versão final do patch é a versão 3.1.1.
```yaml
"dependencies": {
	"jquery":  "~3.1.1",
}
```

## Pacote Global vs Local

É possível instalar pacotes localmente e globalmente.

## Qual a diferença ?
### Local:
Instalando um pacote localmente teremos que caminhar até a pasta .bin da nossa node_modules, onde lá conterá um arquivo chamando [nome-do-pacote].cmd e outro com o própio nome do arquivo [nome-do-pacote] que faz referência aos comandos no arquivo .cmd.
### Global:
Já quando instalamos um pacote globalmente também instalamos a sua [CLI](https://www.hostinger.com.br/tutoriais/o-que-e-cli), que são comandos que essa dependência executa podendo ser para comprimir imagens, arquivos css, js e etc.

Geralmente é preferível no começo usar pacotes globais para testar suas dependências e ver como funcionam.

  

**Exemplo de uma instalação global:**
```properties
npm install uglify-js -g
```

**Executando comandos CLI do uglifyjs:**
```properties
uglifyjs jquery.js -c -o jquery.min.js
``` 

O comando acima comprime o arquivo em forma compressa por isso usamos a flag -c e logo em seguida apontamos com a flag -o qual o nome do arquivo de saída.

**Exemplo de uma instalação local:**
```properties
npm install uglifyjs
```  

**Executando comandos do uglify:**
```properties
cd node_modules/.bin/uglifyjs jquery.js -c -o jquery.min.js
```  

O comando acima vai até a pasta node_modules, entra em seus arquivos binários e executa comandos da dependência a partir do arquivo de referência aos comandos .cmd.

## NPM Scripts:

São formas abreviadas de executar comandos comuns de forma mais rápida e convencional poupando tempo e nos dando mais produtividade.

Adicionamos os comandos dentro do arquivo package.json, note que o arquivo é em formato de [JSON](https://www.json.org/json-pt.html), adicionamos a propriedades "scripts" que também é um objeto, onde podemos adicionarmos comandos personalizados e recebem como valor a forma expandida dos comandos executados no terminal, onde abreviamos isso apenas com uma palavra.

Ex: package.json
```yaml
{
	"name": "projeto5-npm-script",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
}
```
Adicionando Scripts:
```yaml
{
	"name": "projeto5-npm-script",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"minclip": "node_modules/.bin/uglifyjs jquery.js -c -o jquery.min.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
	"uglify-js": "^3.7.7"
}
```

**Agora basta rodar no terminal seu comando:**
```properties
npm run minclip
```  

## Instalando dependência node-sass:

```properties
npm install node-sass -g
```

Utilizei o **-/g** para poder usar a CLI do node-sass

Criei um script de acordo com o caminho para compilação dos arquivos .scss para .css.

```yaml

{
	"name":  "projeto6-node-sass",
	"version":  "1.0.0",
	"description":  "",
	"main":  "index.js",
	"scripts": {
		"test":  "echo \"Error: no test specified\" && exit 1",
		"compila-sass":  "node-sass --output-style compressed style.scss style.css"
	},
	"keywords": [],
	"author":  "",
	"license":  "ISC"
}
```

Para rodar o comando basta usar:

```properties
npm run compila-sass
```

## Module Exports:

É uma funcionalidade do node para podermos importar/exportar trechos de códigos em javascript e até mesmo as própias dependências.

module.exports = [algo-que-queremos-importar]

Ex:

Arquivo soma.js:
``` javascript
function somaDoisNumeros(num1, num2) {
	return num1 + num2;	
}
module.exports = somaDoisNumeros;
```

Arquivo index.js
``` javascript
let somaDoisNumeros = require('./soma');
console.log(somaDoisNumeros(10, 20));
```

Para exportar mais de duas funçoes:

Arquivo: funcoesDeAjuda.js
``` javascript
function imc(peso, altura){
	let imc = peso / (altura * altura);
	return imc;
}
function quadrado(numero){
	return numero * numero;
}
module.exports.imc = imc;
module.exports.quadrado = quadrado;
```
Arquivo main.js:
```javascript
let funcoesDeAjuda = require('./funcoesDeAjuda');
console.log(funcoesDeAjuda);
console.log(funcoesDeAjuda.imc(80, 1.80));
console.log(funcoesDeAjuda.quadrado(5));
```

Nesse ponto a variavel funcoesDeAjuda se torna um objeto que tem como método as funçoes imc e quadrado.

# Automação com Gulp

## Instalando gulp-cli:
Temos que instalar a interface de linhas de comandos do gulp para podermos trabalharmos com o mesmo:
````properties
npm install gulp-cli -g
````

**Instalando o gulp:**
Importando a dependência do gulp para usarmos no projeto.
````properties
npm install gulp
````

**Crie o arquivo gulpfile.js:**


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