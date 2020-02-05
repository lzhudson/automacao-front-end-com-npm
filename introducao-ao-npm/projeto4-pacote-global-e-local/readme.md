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
cd node_modules/.bin/uglifyjs jquery.js -c -o jquery.min.
```  

O comando acima vai até a pasta node_moduels, entra em seus arquivos binários e executa comandos da dependência a partir do arquivo de referência aos comandos .cmd do mesmo.