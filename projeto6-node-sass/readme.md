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