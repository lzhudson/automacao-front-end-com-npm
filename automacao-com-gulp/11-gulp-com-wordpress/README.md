## Etapas:
**Organizar arquivos css:**
  1 - Arquivos .css para .scss.
  2 - Organizar imports no arquivo style.scss
  3 - Gerar arquivo final .css no diretorio raiz do tema.
  4 - Corrigir caminho dos arquivos no gulpfile.js

**Organizar arquivos .js:**
  1 - Organizar arquivos separadamente por modulos
  2 - Corrigir caminho dos arquivos no gulpfile.js

**Adicionando watch nos arquivos .php:**
```javascript
gulp.watch(['*.html', '*.php', './**/*.php']).on('change', browsersync.reload);
```

**Colocar servidor no browser-sync:**

Se estiver usando servidor externo como local by flywheel, xampp, wampp ou mamp, troque no arquivo gulpfile.js onde definimos o diretorio padrão do projeto por:
```javascript
function browser() {
  browsersync.init({
    server: {
      proxy: 'sua-url-sem-https'
    }
  })
}
```