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