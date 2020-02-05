# Automação Front-end com NPM

Isso é um simples helper para comandos, dicas e trechos de código sobre automação no front-end.

## Instalando Pacotes 

### Comandos:
**Instalar um pacote:**
Instala um pacote em sua ultima versão:
npm install [nome-do-pacote]
Ex:

    npm install jquery
     
**Atualizar um pacote:**
Atualiza o pacote para sua versão mais recente
npm update [nome-do-pacote]
Ex:

    npm update jquery
**Instalar uma versão especifica do pacote:**
Instala um pacote de acordo com a versão informada
npm install [nome-do-pacote]@[versão-do-pacote]
Ex:

    npm install jquery@2.0.0
**Instalando um pacote globalmente:(para todos os usuários)**
Instala um pacote em todos os usuários.
Use a flag **-g** para indicar isso.
npm install [nome-do-pacote]@[versão-do-pacote]
Ex:

    npm install jquery -g
   
## Inciando projetos com npm
**Iniciando projetos:**
Inicia um projeto com npm.
npm init
Ex:

    npm init
    npm init -y

Ao rodar esse comando, a linha de comando gerara perguntas sobre o projeto, como nome, author, link do repositório no github e etc.
Para pular todas essas perguntas basta usar a flag **-y**.

**Pasta node_modules:**

A pasta node_modules é onde ficam localizadas todas as duas dependências, a vantagem de se usar um gerenciador de pacotes é que podemos migrar todo o projeto sem precisamos mover a pasta node_modules para cada lugar, pois o arquivo package.json, serve justamente para armazenarmos essas dependências e apenas com esse arquivo e um comando podemos instala-las em qualquer lugar.
Ao mover apenas o arquivo package.json para qualquer lugar, basta rodar o comando npm install na pasta onde se localiza o arquivo que o mesmo instalará todas as dependências necessárias.

    npm install

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