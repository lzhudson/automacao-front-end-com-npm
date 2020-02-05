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
